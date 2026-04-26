#!/usr/bin/env node
import { readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { readdirSync } from 'node:fs';
import { join, extname, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = dirname(__dirname);

const INCLUDE_DIRS = ['js', 'views', 'css'];
const INCLUDE_FILES = ['service-worker.js', 'index.html', '404.html'];

const EXCLUDE_PATTERNS = [
    /[\\/]js[\\/]lib[\\/]/,
    /[\\/]node_modules[\\/]/,
    /[\\/]scripts[\\/]/,
    /\.min\.js$/
];

function walk(dir, out = []) {
    if (!existsSync(dir)) return out;
    for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        const rel  = relative(ROOT, full);
        if (EXCLUDE_PATTERNS.some(p => p.test(rel))) continue;
        const s = statSync(full);
        if (s.isDirectory()) walk(full, out);
        else out.push(full);
    }
    return out;
}

function stripJs(src) {
    let out = '';
    let i = 0;
    const n = src.length;

    let prevNonWs = '';
    const regexAllowedAfter = new Set([
        '', '(', ',', '=', ':', '[', '!', '&', '|', '?', '{', '}', ';',
        '+', '-', '*', '/', '%', '^', '~', '<', '>', '\n'
    ]);
    const keywordsBeforeRegex = ['return','typeof','instanceof','in','of','new','delete','void','throw','case','do','else','yield','await'];

    function updatePrev(ch) {
        if (ch === ' ' || ch === '\t') return;
        prevNonWs = ch;
    }

    function lastKeyword() {
        const m = out.match(/(\b[a-zA-Z_$][\w$]*)\s*$/);
        return m ? m[1] : null;
    }

    while (i < n) {
        const c = src[i];
        const c2 = src[i+1] || '';

        if (c === '/' && c2 === '/') {
            while (i < n && src[i] !== '\n') i++;
            continue;
        }
        if (c === '/' && c2 === '*') {
            i += 2;
            while (i < n && !(src[i] === '*' && src[i+1] === '/')) i++;
            i += 2;
            continue;
        }

        if (c === '"' || c === "'") {
            const q = c;
            out += c; i++;
            while (i < n) {
                const x = src[i];
                out += x;
                if (x === '\\' && i+1 < n) { out += src[i+1]; i += 2; continue; }
                i++;
                if (x === q) break;
                if (x === '\n') break;
            }
            updatePrev(q);
            continue;
        }

        if (c === '`') {
            out += c; i++;
            while (i < n) {
                const x = src[i];
                if (x === '\\' && i+1 < n) { out += x + src[i+1]; i += 2; continue; }
                if (x === '$' && src[i+1] === '{') {
                    out += '${'; i += 2;
                    let depth = 1;
                    while (i < n && depth > 0) {
                        const y = src[i];
                        if (y === '{') depth++;
                        else if (y === '}') depth--;
                        if (depth === 0) { out += '}'; i++; break; }
                        if (y === '"' || y === "'") {
                            const qq = y; out += y; i++;
                            while (i < n) {
                                const z = src[i]; out += z;
                                if (z === '\\' && i+1 < n) { out += src[i+1]; i += 2; continue; }
                                i++;
                                if (z === qq) break;
                            }
                            continue;
                        }
                        if (y === '`') {
                            out += y; i++;
                            let d2 = 1;
                            while (i < n && d2 > 0) {
                                const z = src[i]; out += z;
                                if (z === '\\' && i+1 < n) { out += src[i+1]; i += 2; continue; }
                                i++;
                                if (z === '`') d2--;
                            }
                            continue;
                        }
                        out += y; i++;
                    }
                    continue;
                }
                out += x; i++;
                if (x === '`') break;
            }
            updatePrev('`');
            continue;
        }

        if (c === '/') {
            const kw = lastKeyword();
            const isRegex = regexAllowedAfter.has(prevNonWs) || keywordsBeforeRegex.includes(kw || '');
            if (isRegex) {
                out += c; i++;
                let inClass = false;
                while (i < n) {
                    const x = src[i];
                    if (x === '\\' && i+1 < n) { out += x + src[i+1]; i += 2; continue; }
                    if (x === '[') inClass = true;
                    else if (x === ']') inClass = false;
                    out += x; i++;
                    if (x === '/' && !inClass) break;
                    if (x === '\n') break;
                }
                while (i < n && /[a-z]/i.test(src[i])) { out += src[i]; i++; }
                updatePrev('/');
                continue;
            }
        }

        out += c;
        if (c.trim() !== '') prevNonWs = c;
        i++;
    }

    return collapseBlankLines(out);
}

function stripCss(src) {
    let out = '';
    let i = 0;
    const n = src.length;
    while (i < n) {
        const c = src[i];
        const c2 = src[i+1] || '';
        if (c === '/' && c2 === '*') {
            i += 2;
            while (i < n && !(src[i] === '*' && src[i+1] === '/')) i++;
            i += 2;
            continue;
        }
        if (c === '"' || c === "'") {
            const q = c;
            out += c; i++;
            while (i < n) {
                const x = src[i]; out += x;
                if (x === '\\' && i+1 < n) { out += src[i+1]; i += 2; continue; }
                i++;
                if (x === q) break;
                if (x === '\n') break;
            }
            continue;
        }
        out += c; i++;
    }
    return collapseBlankLines(out);
}

function collapseBlankLines(src) {
    return src
        .split('\n')
        .map(l => l.replace(/[ \t]+$/, ''))
        .reduce((acc, line) => {
            if (line === '' && acc.length && acc[acc.length-1] === '') return acc;
            acc.push(line);
            return acc;
        }, [])
        .join('\n');
}

function stripHtml(src) {
    return src.replace(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi, (m, attrs, body) => {
        return `<script${attrs}>${stripJs(body)}</script>`;
    }).replace(/<style([^>]*)>([\s\S]*?)<\/style>/gi, (m, attrs, body) => {
        return `<style${attrs}>${stripCss(body)}</style>`;
    });
}

function process(file) {
    const ext = extname(file).toLowerCase();
    const src = readFileSync(file, 'utf8');
    let out;
    if (ext === '.js')       out = stripJs(src);
    else if (ext === '.css') out = stripCss(src);
    else if (ext === '.html')out = stripHtml(src);
    else return;
    if (out !== src) {
        writeFileSync(file, out, 'utf8');
        console.log('stripped:', relative(ROOT, file));
    }
}

const targets = [];
for (const d of INCLUDE_DIRS) walk(join(ROOT, d), targets);
for (const f of INCLUDE_FILES) {
    const full = join(ROOT, f);
    if (existsSync(full)) targets.push(full);
}

for (const t of targets) {
    if (EXCLUDE_PATTERNS.some(p => p.test(relative(ROOT, t)))) continue;
    const ext = extname(t).toLowerCase();
    if (!['.js','.css','.html'].includes(ext)) continue;
    try { process(t); } catch (e) { console.error('FAILED', t, e.message); }
}
console.log('done.');
