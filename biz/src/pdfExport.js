
const BRAND_CORAL  = '#E87B5F';
const BRAND_DARK   = '#1A1A1A';
const BRAND_MUTED  = '#6B6662';
const BRAND_LIGHT  = '#9B9791';
const BRAND_RULE   = '#E8E5E2';
const BRAND_BG     = '#FAF9F7';

const timestamp = () => new Date().toLocaleString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
});

const openWindow = (html, autoprint = false) => {
    const win = window.open('', '_blank', 'width=1000,height=800');
    if (!win) return;
    win.document.write(html);
    win.document.close();
    if (autoprint) {
        win.onload = () => { win.focus(); win.print(); };
    }
};


const baseStyles = () => `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
    font-family: 'Segoe UI', system-ui, -apple-system, Arial, sans-serif;
    color: ${BRAND_DARK};
    background: #fff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}
@page { size: A4 portrait; margin: 14mm 16mm; }
@media print {
    .no-print { display: none !important; }
    body { background: #fff; }
}

/* ── Document header ── */
.doc-header {
    display: flex; justify-content: space-between; align-items: flex-start;
    padding-bottom: 18px; border-bottom: 3px solid ${BRAND_CORAL};
    margin-bottom: 30px;
}
.doc-header-left {}
.doc-brand {
    font-size: 9px; font-weight: 800; color: ${BRAND_CORAL};
    text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 7px;
}
.doc-title {
    font-size: 20px; font-weight: 900; color: ${BRAND_DARK};
    letter-spacing: -0.02em; line-height: 1.15; text-transform: uppercase;
}
.doc-subtitle {
    font-size: 11px; color: ${BRAND_MUTED}; font-weight: 500; margin-top: 6px;
    line-height: 1.5;
}
.doc-meta {
    text-align: right; font-size: 9.5px; color: ${BRAND_LIGHT};
    line-height: 1.9; flex-shrink: 0; padding-left: 24px;
}

/* ── Section ── */
.section { margin-bottom: 26px; page-break-inside: avoid; }
.section-title {
    font-size: 9px; font-weight: 800; text-transform: uppercase;
    letter-spacing: 0.18em; color: ${BRAND_CORAL};
    border-bottom: 1px solid ${BRAND_RULE};
    padding-bottom: 6px; margin-bottom: 12px;
}
.section p { font-size: 12px; line-height: 1.75; color: ${BRAND_DARK}; }
.section ul { padding-left: 0; list-style: none; }
.section li {
    font-size: 11.5px; line-height: 1.8; color: ${BRAND_DARK};
    padding: 3px 0 3px 16px; position: relative;
}
.section li::before {
    content: ''; position: absolute; left: 3px; top: 11px;
    width: 5px; height: 5px; border-radius: 50%;
    background: ${BRAND_CORAL}; opacity: 0.45;
}

/* ── Table ── */
table { width: 100%; border-collapse: collapse; font-size: 11px; margin-top: 4px; }
th {
    background: ${BRAND_CORAL}; color: #fff; font-weight: 800;
    text-transform: uppercase; font-size: 9px; letter-spacing: 0.1em;
    padding: 9px 12px; text-align: left;
}
td { padding: 8px 12px; border-bottom: 1px solid ${BRAND_RULE}; vertical-align: top; line-height: 1.55; }
tr:nth-child(even) td { background: ${BRAND_BG}; }

/* ── Footer ── */
.doc-footer {
    border-top: 1px solid ${BRAND_RULE}; padding-top: 14px; margin-top: 40px;
    font-size: 9.5px; color: ${BRAND_LIGHT};
    display: flex; justify-content: space-between; align-items: center;
}
.doc-footer-brand { font-weight: 800; color: ${BRAND_CORAL}; letter-spacing: 0.1em; text-transform: uppercase; font-size: 8.5px; }

/* ── Print button ── */
.print-bar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 999;
    background: ${BRAND_DARK}; color: #fff;
    display: flex; align-items: center; justify-content: space-between;
    padding: 10px 24px; gap: 16px;
}
.print-bar span { font-size: 12px; font-weight: 600; opacity: 0.8; }
.print-bar-btns { display: flex; gap: 10px; }
.btn-print {
    background: ${BRAND_CORAL}; color: #fff; border: none; border-radius: 8px;
    padding: 7px 18px; font-size: 12px; font-weight: 700; cursor: pointer;
    letter-spacing: 0.04em;
}
.btn-close {
    background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.2);
    border-radius: 8px; padding: 7px 16px; font-size: 12px; font-weight: 600; cursor: pointer;
}
.print-spacer { height: 48px; }
@media print { .print-bar, .print-spacer { display: none !important; } }
`;

const printBar = (title = 'Document Preview') => `
<div class="print-bar no-print">
    <span>${title}</span>
    <div class="print-bar-btns">
        <button class="btn-print" onclick="window.print()">⬇ Save as PDF / Print</button>
        <button class="btn-close" onclick="window.close()">✕ Close</button>
    </div>
</div>
<div class="print-spacer no-print"></div>
`;

const docHeader = (title, subtitle) => `
<div class="doc-header">
    <div class="doc-header-left">
        <div class="doc-brand">AINOW OS — Prompt Library</div>
        <div class="doc-title">${title}</div>
        ${subtitle ? `<div class="doc-subtitle">${subtitle}</div>` : ''}
    </div>
    <div class="doc-meta">
        <div style="margin-top:3px">${timestamp()}</div>
    </div>
</div>
`;

const docFooter = () => `
<div class="doc-footer">
    <span class="doc-footer-brand">AINOW OS</span>
</div>
`;


const renderSection = (s) => {
    if (s.table) {
        const headers = s.table.headers.map(h => `<th>${h}</th>`).join('');
        const rows    = s.table.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
        return `<table><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table>`;
    }
    if (s.items) return `<ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    if (s.content) return `<p>${s.content.replace(/\n/g, '<br>')}</p>`;
    return '';
};

export const exportToPDF = ({ title, subtitle, sections }, autoprint = false) => {
    const sectionsHTML = sections.map(s => `
        <div class="section">
            <div class="section-title">${s.title}</div>
            ${renderSection(s)}
        </div>
    `).join('');

    const html = `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8">
<title>${title} — AINOW OS</title>
<style>
${baseStyles()}
.page { max-width: 820px; margin: 0 auto; padding: 0 0 40px; }
</style>
</head><body>
${printBar(title)}
<div class="page">
    ${docHeader(title, subtitle)}
    ${sectionsHTML}
    ${docFooter()}
</div>
</body></html>`;

    openWindow(html, autoprint);
};


export const exportRoadmapMap = ({ title, subtitle, phases }) => {
    const phaseColors = {
        blue:    { bg: '#EFF6FF', border: '#BFDBFE', head: '#2563EB', text: '#1E40AF', num: '#2563EB' },
        coral:   { bg: '#FEF3F0', border: '#FECDB9', head: BRAND_CORAL, text: '#C45A3C', num: BRAND_CORAL },
        emerald: { bg: '#F0FDF4', border: '#BBF7D0', head: '#059669', text: '#065F46', num: '#059669' },
        purple:  { bg: '#F5F3FF', border: '#DDD6FE', head: '#7C3AED', text: '#4C1D95', num: '#7C3AED' },
    };

    const timelineHTML = phases.map((p, i) => {
        const c = phaseColors[p.color] || phaseColors.blue;
        const isLast = i === phases.length - 1;
        return `
        <div style="display:flex;align-items:center;flex:1;">
            <div style="flex:1;background:${c.bg};border:2px solid ${c.border};border-radius:10px;padding:10px 14px;text-align:center;">
                <div style="width:24px;height:24px;background:${c.num};border-radius:50%;color:#fff;font-size:11px;font-weight:900;display:flex;align-items:center;justify-content:center;margin:0 auto 6px;">${p.number}</div>
                <div style="font-size:10px;font-weight:800;color:${c.text};text-transform:uppercase;letter-spacing:0.08em;line-height:1.2;">${p.name.replace(/Phase \d+:\s*/,'')}</div>
                <div style="font-size:9px;color:${BRAND_MUTED};margin-top:3px;font-weight:500;">${p.period}</div>
            </div>
            ${!isLast ? `<div style="flex-shrink:0;padding:0 4px;color:${BRAND_LIGHT};font-size:18px;">›</div>` : ''}
        </div>`;
    }).join('');

    const phasesHTML = phases.map(p => {
        const c = phaseColors[p.color] || phaseColors.blue;
        return `
        <div style="page-break-inside:avoid;background:${c.bg};border:1.5px solid ${c.border};border-radius:14px;overflow:hidden;margin-bottom:20px;">
            <div style="background:${c.head};padding:12px 18px;display:flex;align-items:center;gap:12px;">
                <div style="width:28px;height:28px;background:rgba(255,255,255,0.2);border-radius:50%;color:#fff;font-size:13px;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;">${p.number}</div>
                <div style="flex:1;">
                    <div style="font-size:11px;font-weight:800;color:#fff;text-transform:uppercase;letter-spacing:0.1em;">${p.name}</div>
                    <div style="font-size:10px;color:rgba(255,255,255,0.75);font-weight:500;margin-top:2px;">${p.period}</div>
                </div>
            </div>
            <div style="padding:14px 18px;">
                <p style="font-size:11px;color:${BRAND_MUTED};font-style:italic;margin-bottom:14px;line-height:1.6;border-left:3px solid ${c.border};padding-left:10px;">${p.objective}</p>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
                    <div>
                        <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;color:${c.text};margin-bottom:8px;">Key Actions</div>
                        <ul style="list-style:none;padding:0;">
                            ${p.actions.map(a => `
                            <li style="font-size:11px;color:${BRAND_DARK};padding:3px 0 3px 14px;position:relative;line-height:1.65;">
                                <span style="position:absolute;left:2px;top:9px;width:6px;height:6px;border-radius:50%;background:${c.head};opacity:0.5;display:block;"></span>
                                ${a}
                            </li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;color:${BRAND_CORAL};margin-bottom:8px;">Success Metrics</div>
                        <ul style="list-style:none;padding:0;">
                            ${p.kpis.map(k => `
                            <li style="font-size:11px;color:${BRAND_DARK};padding:3px 0 3px 14px;position:relative;line-height:1.65;">
                                <span style="position:absolute;left:2px;top:9px;width:6px;height:6px;border-radius:50%;background:${BRAND_CORAL};opacity:0.5;display:block;"></span>
                                ${k}
                            </li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');

    const html = `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8">
<title>${title} — Visual Map — AINOW OS</title>
<style>
${baseStyles()}
@page { size: A4 portrait; margin: 12mm 14mm; }
.page { max-width: 820px; margin: 0 auto; padding: 0 0 40px; }
</style>
</head><body>
${printBar('Roadmap Visual Map')}
<div class="page">
    ${docHeader(title, subtitle)}

    <div style="display:flex;align-items:stretch;gap:0;margin-bottom:28px;padding:16px;background:${BRAND_BG};border-radius:14px;border:1px solid ${BRAND_RULE};">
        ${timelineHTML}
    </div>

    ${phasesHTML}

    ${docFooter()}
</div>
</body></html>`;

    openWindow(html, false);
};


export const exportRoleMapVisual = ({ title, subtitle, automated, assisted, human, skills }) => {
    const cols = [
        {
            label: 'Automate',
            desc: 'AI handles fully',
            items: automated,
            bg: '#FFFBEB', border: '#FDE68A', head: '#D97706', text: '#92400E', dot: '#D97706',
            icon: '⚙',
        },
        {
            label: 'AI-Assisted',
            desc: 'Human leads, AI supports',
            items: assisted,
            bg: '#EFF6FF', border: '#BFDBFE', head: '#2563EB', text: '#1E3A8A', dot: '#2563EB',
            icon: '⚡',
        },
        {
            label: 'Human Only',
            desc: 'AI cannot replace',
            items: human,
            bg: '#F0FDF4', border: '#BBF7D0', head: '#059669', text: '#064E3B', dot: '#059669',
            icon: '👤',
        },
    ];

    const svgLines = `
    <svg width="100%" height="60" viewBox="0 0 820 60" preserveAspectRatio="none" style="display:block;overflow:visible;">
        <line x1="410" y1="0" x2="137" y2="60" stroke="${BRAND_RULE}" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="410" y1="0" x2="410" y2="60" stroke="${BRAND_RULE}" stroke-width="1.5" stroke-dasharray="4,3"/>
        <line x1="410" y1="0" x2="683" y2="60" stroke="${BRAND_RULE}" stroke-width="1.5" stroke-dasharray="4,3"/>
    </svg>`;

    const columnsHTML = cols.map(c => `
        <div style="flex:1;background:${c.bg};border:1.5px solid ${c.border};border-radius:14px;overflow:hidden;display:flex;flex-direction:column;">
            <div style="background:${c.head};padding:12px 14px;text-align:center;">
                <div style="font-size:18px;margin-bottom:4px;">${c.icon}</div>
                <div style="font-size:11px;font-weight:800;color:#fff;text-transform:uppercase;letter-spacing:0.1em;">${c.label}</div>
                <div style="font-size:9.5px;color:rgba(255,255,255,0.75);margin-top:2px;">${c.desc}</div>
            </div>
            <div style="padding:14px;flex:1;">
                <ul style="list-style:none;padding:0;margin:0;">
                    ${c.items.map(item => `
                    <li style="font-size:11px;color:${BRAND_DARK};padding:4px 0 4px 15px;position:relative;line-height:1.65;border-bottom:1px solid ${c.border};">
                        <span style="position:absolute;left:2px;top:10px;width:6px;height:6px;border-radius:50%;background:${c.dot};opacity:0.6;display:block;"></span>
                        ${item}
                    </li>`).join('')}
                </ul>
            </div>
        </div>
    `).join('');

    const skillsHTML = skills.map(s => {
        const [name, desc] = s.split(' — ');
        return `
        <div style="background:${BRAND_BG};border:1px solid ${BRAND_RULE};border-radius:10px;padding:10px 14px;flex:1;min-width:220px;">
            <div style="font-size:10.5px;font-weight:700;color:${BRAND_DARK};margin-bottom:3px;">${name || s}</div>
            ${desc ? `<div style="font-size:10px;color:${BRAND_MUTED};line-height:1.5;">${desc}</div>` : ''}
        </div>`;
    }).join('');

    const html = `<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8">
<title>${title} — Visual Map — AINOW OS</title>
<style>
${baseStyles()}
@page { size: A4 portrait; margin: 12mm 14mm; }
.page { max-width: 820px; margin: 0 auto; padding: 0 0 40px; }
</style>
</head><body>
${printBar('Role Map Visual')}
<div class="page">
    ${docHeader(title, subtitle)}

    <div style="text-align:center;margin-bottom:0;">
        <div style="display:inline-block;background:${BRAND_DARK};color:#fff;border-radius:12px;padding:12px 32px;">
            <div style="font-size:15px;font-weight:900;letter-spacing:-0.01em;">${title.replace('AI Role Map — ', '')}</div>
            ${subtitle ? `<div style="font-size:10px;color:rgba(255,255,255,0.6);margin-top:3px;">${subtitle}</div>` : ''}
        </div>
    </div>

    ${svgLines}

    <div style="display:flex;gap:14px;margin-bottom:24px;">
        ${columnsHTML}
    </div>

    <div style="page-break-inside:avoid;">
        <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.18em;color:${BRAND_CORAL};margin-bottom:12px;padding-bottom:6px;border-bottom:1px solid ${BRAND_RULE};">
            New Skills Required for This Role
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
            ${skillsHTML}
        </div>
    </div>

    ${docFooter()}
</div>
</body></html>`;

    openWindow(html, false);
};

const READINESS_PDF_FALLBACK = {
    pdf_header_kicker: 'AI Readiness',
    pdf_dimension_scores: 'Dimension Scores',
    pdf_confidence: 'Confidence',
    pdf_data_quality: 'Data quality',
    pdf_critical_blockers: 'Critical blockers',
    pdf_strengths_heading: '✓ Strengths',
    pdf_gaps_heading: '✗ Key gaps',
    pdf_improvement_actions: '→ Improvement actions',
    pdf_report_doc_title: 'AI Readiness Report',
    pdf_assessment_title: 'AI Readiness Assessment',
    pdf_band_not_ready: 'Not Ready',
    pdf_band_foundation: 'Foundation',
    pdf_band_emerging: 'Emerging',
    pdf_band_advanced: 'Advanced',
    pdf_heatmap_title: 'Question heatmap',
    pdf_heatmap_sub: 'Each block is one question — color shows how you scored (cooler = stronger).',
    pdf_action_plan_title: 'Prioritized action planner',
    pdf_action_plan_sub: 'Sorted by quick wins first, then impact vs. effort (heuristic — not financial advice).',
    pdf_impact: 'Impact',
    pdf_effort: 'Effort',
    pdf_horizon: 'Horizon',
    pdf_owner: 'Owner',
    pdf_kpi: 'KPI',
    pdf_dependency: 'Dependency',
    tier_quick_win: 'Quick win',
    tier_balanced: 'Balanced',
    tier_strategic: 'Strategic',
    tier_heavy_lift: 'Heavy lift',
    pdf_dim_start: 'Start:',
    pdf_dim_why: 'Why:',
    pdf_plan90_title: 'Your 90-Day Improvement Plan',
    pdf_plan90_subtitle: 'Prioritized actions from your weakest areas — quick wins first.',
};

export const exportReadinessReport = ({
    org, overall, band, summary, dims, plan90,
    actionPlan = [],
    confidence,
    dataQuality,
    criticalBlockers = [],
    pdfLabels = {},
    pdfLang = 'en',
}, autoprint = false) => {
    const escapeHtml = (s) => String(s ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    const L = { ...READINESS_PDF_FALLBACK, ...pdfLabels };

    const heatColor = (s) => {
        if (s <= 25) return '#EF4444';
        if (s <= 50) return '#F59E0B';
        if (s <= 75) return '#3B82F6';
        return '#10B981';
    };

    const BC = {
        not_ready:  { color: '#EF4444', bg: '#FEF2F2', label: L.pdf_band_not_ready },
        foundation: { color: '#F59E0B', bg: '#FFFBEB', label: L.pdf_band_foundation },
        emerging:   { color: '#3B82F6', bg: '#EFF6FF', label: L.pdf_band_emerging },
        advanced:   { color: '#10B981', bg: '#F0FDF4', label: L.pdf_band_advanced },
    };

    const scoreBar = (score, b) => {
        const c = BC[b];
        return `
        <div style="display:flex;align-items:center;gap:10px;margin-top:4px;">
            <div style="flex:1;height:8px;background:#E8E5E2;border-radius:4px;overflow:hidden;">
                <div style="width:${score}%;height:100%;background:${c.color};border-radius:4px;"></div>
            </div>
            <span style="font-size:13px;font-weight:900;color:${c.color};width:30px;text-align:right;">${score}</span>
            <span style="font-size:9px;font-weight:700;color:${c.color};background:${c.bg};padding:2px 8px;border-radius:20px;border:1px solid ${c.color}30;white-space:nowrap;">${c.label}</span>
        </div>`;
    };

    const bm = BC[band];
    const overallHTML = `
    <div style="background:${bm.bg};border:2px solid ${bm.color}30;border-radius:14px;padding:20px 24px;margin-bottom:28px;page-break-inside:avoid;">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:20px;margin-bottom:16px;">
            <div>
                <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.2em;color:${BRAND_MUTED};margin-bottom:6px;">${escapeHtml(org)} — ${escapeHtml(L.pdf_header_kicker)}</div>
                <div style="display:flex;align-items:baseline;gap:8px;">
                    <span style="font-size:48px;font-weight:900;color:${bm.color};line-height:1;">${overall}</span>
                    <span style="font-size:20px;font-weight:600;color:${BRAND_LIGHT};">/100</span>
                </div>
                <span style="display:inline-block;margin-top:8px;font-size:10px;font-weight:800;color:${bm.color};background:${bm.bg};border:1px solid ${bm.color}40;padding:3px 12px;border-radius:20px;letter-spacing:0.08em;">${bm.label.toUpperCase()}</span>
                ${typeof confidence === 'number' && typeof dataQuality === 'number' ? `
                <div style="margin-top:10px;font-size:10px;font-weight:700;color:${BRAND_MUTED};line-height:1.5;">${escapeHtml(L.pdf_confidence)} ${confidence}/100 · ${escapeHtml(L.pdf_data_quality)} ${dataQuality}/100</div>` : ''}
            </div>
            <div style="flex:1;min-width:0;padding-top:4px;">
                <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;color:${BRAND_MUTED};margin-bottom:10px;">${escapeHtml(L.pdf_dimension_scores)}</div>
                ${dims.map(d => `
                <div style="margin-bottom:10px;">
                    <div style="font-size:10.5px;font-weight:700;color:${BRAND_DARK};margin-bottom:4px;">${escapeHtml(d.label)}</div>
                    ${scoreBar(d.score, d.band)}
                </div>`).join('')}
            </div>
        </div>
        <p style="font-size:12px;color:${BRAND_DARK};line-height:1.7;font-style:italic;border-top:1px solid ${bm.color}20;padding-top:14px;">${escapeHtml(summary)}</p>
    </div>`;

    const heatmapHTML = dims.some((d) => d.heatmap?.length) ? `
    <div style="margin-bottom:28px;border:1px solid ${BRAND_RULE};border-radius:14px;padding:18px 20px;page-break-inside:avoid;background:${BRAND_BG};">
        <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;color:${BRAND_MUTED};margin-bottom:4px;">${escapeHtml(L.pdf_heatmap_title)}</div>
        <div style="font-size:10.5px;color:${BRAND_MUTED};margin-bottom:14px;">${escapeHtml(L.pdf_heatmap_sub)}</div>
        ${dims.map((d) => {
        if (!d.heatmap?.length) return '';
        return `
        <div style="margin-bottom:12px;">
            <div style="font-size:10.5px;font-weight:700;color:${BRAND_DARK};margin-bottom:6px;">${escapeHtml(d.label)}</div>
            <div style="display:flex;gap:3px;align-items:stretch;height:16px;">
                ${d.heatmap.map((cell) => `<span title="${escapeHtml(cell.shortLabel)}: ${cell.score}" style="flex:1;min-width:0;border-radius:4px;background:${heatColor(cell.score)};"></span>`).join('')}
            </div>
        </div>`;
    }).join('')}
    </div>` : '';

    const blockersHTML = criticalBlockers.length ? `
    <div style="margin-bottom:28px;border:1px solid #FECACA;background:#FEF2F2;border-radius:14px;padding:18px 20px;page-break-inside:avoid;">
        <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;color:#DC2626;margin-bottom:10px;">${escapeHtml(L.pdf_critical_blockers)}</div>
        ${criticalBlockers.slice(0, 8).map((b) => `
        <div style="font-size:11px;color:${BRAND_DARK};line-height:1.55;margin-bottom:8px;padding-left:4px;border-left:3px solid #EF4444;">
            <strong style="color:#DC2626;">[${escapeHtml(b.dimLabel)}]</strong> ${escapeHtml(b.questionText)}
        </div>`).join('')}
    </div>` : '';

    const actionPlanHTML = actionPlan.length ? `
    <div style="margin-bottom:28px;border:1px solid ${BRAND_RULE};border-radius:14px;padding:20px 22px;page-break-inside:avoid;background:#fff;">
        <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;color:${BRAND_MUTED};margin-bottom:4px;">${escapeHtml(L.pdf_action_plan_title)}</div>
        <div style="font-size:10.5px;color:${BRAND_MUTED};margin-bottom:14px;">${escapeHtml(L.pdf_action_plan_sub)}</div>
        ${actionPlan.slice(0, 12).map((row, i) => `
        <div style="display:flex;align-items:flex-start;gap:12px;padding:10px 12px;background:#FAFAF8;border-radius:10px;margin-bottom:8px;border:1px solid ${BRAND_RULE};">
            <span style="flex-shrink:0;width:22px;height:22px;border-radius:50%;background:${BRAND_DARK};color:#fff;font-size:9px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;">${i + 1}</span>
            <div style="flex:1;min-width:0;">
                <div style="font-size:9px;font-weight:700;color:${BRAND_MUTED};text-transform:uppercase;margin-bottom:2px;">${escapeHtml(row.dimLabel)} · ${escapeHtml(L.pdf_impact)} ${row.impact}/5 · ${escapeHtml(L.pdf_effort)} ${row.effort}/5 · ${escapeHtml(L[`tier_${row.tier}`] || row.tier)} · ${escapeHtml(L.pdf_horizon)} ${escapeHtml(row.horizon || '')}</div>
                <div style="font-size:12px;font-weight:700;color:${BRAND_DARK};line-height:1.35;margin-bottom:4px;">${escapeHtml(row.action)}</div>
                <div style="font-size:10.5px;color:${BRAND_MUTED};line-height:1.5;"><strong>${escapeHtml(L.pdf_dim_start)}</strong> ${escapeHtml(row.start)}</div>
                <div style="font-size:10px;color:${BRAND_MUTED};line-height:1.5;margin-top:4px;"><strong>${escapeHtml(L.pdf_owner)}:</strong> ${escapeHtml(row.owner || '-')} · <strong>${escapeHtml(L.pdf_kpi)}:</strong> ${escapeHtml(row.kpi || '-')}</div>
                <div style="font-size:10px;color:${BRAND_MUTED};line-height:1.5;"><strong>${escapeHtml(L.pdf_dependency)}:</strong> ${escapeHtml(row.dependency || '-')}</div>
            </div>
        </div>`).join('')}
    </div>` : '';

    const dimsHTML = dims.map(d => {
        const dc = BC[d.band];
        const actionsHTML = d.actions.map((a, i) => `
        <div style="background:#FAFAF8;border:1px solid ${BRAND_RULE};border-radius:10px;padding:12px 14px;margin-bottom:10px;">
            <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:6px;">
                <span style="flex-shrink:0;width:18px;height:18px;border-radius:50%;background:${BRAND_CORAL};color:#fff;font-size:9px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;">${i + 1}</span>
                <div style="font-size:12px;font-weight:700;color:${BRAND_DARK};line-height:1.4;">${escapeHtml(a.action)}</div>
            </div>
            <div style="font-size:11px;color:${BRAND_MUTED};line-height:1.6;padding-left:28px;margin-bottom:4px;"><strong style="color:${BRAND_DARK};">${escapeHtml(L.pdf_dim_why)} </strong>${escapeHtml(a.why)}</div>
            <div style="font-size:11px;line-height:1.6;padding-left:28px;"><strong style="color:${BRAND_DARK};">${escapeHtml(L.pdf_dim_start)} </strong><span style="color:${BRAND_CORAL};font-weight:600;">${escapeHtml(a.start)}</span></div>
        </div>`).join('');

        return `
        <div style="margin-bottom:28px;border:1.5px solid ${dc.color}30;border-radius:14px;overflow:hidden;page-break-inside:avoid;">
            <div style="background:${dc.bg};padding:14px 20px;display:flex;align-items:flex-start;justify-content:space-between;gap:16px;">
                <div style="flex:1;min-width:0;">
                    <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.15em;color:${dc.color};margin-bottom:4px;">${escapeHtml(d.label)}</div>
                    <div style="font-size:10.5px;color:${BRAND_MUTED};font-style:italic;line-height:1.5;">${escapeHtml(d.what_is)}</div>
                </div>
                <div style="text-align:right;flex-shrink:0;padding-left:16px;">
                    <div style="font-size:30px;font-weight:900;color:${dc.color};line-height:1;">${d.score}</div>
                    <div style="font-size:8.5px;font-weight:700;color:${dc.color};border:1px solid ${dc.color}40;padding:2px 8px;border-radius:20px;margin-top:4px;white-space:nowrap;">${escapeHtml(dc.label)}</div>
                </div>
            </div>
            <div style="padding:14px 20px 6px;background:#fff;border-bottom:1px solid ${BRAND_RULE};">
                <p style="font-size:11.5px;color:${BRAND_DARK};font-style:italic;line-height:1.7;margin:0;">${escapeHtml(d.situation)}</p>
            </div>
            <div style="padding:16px 20px;background:#fff;">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:16px;">
                    <div>
                        <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:#10B981;margin-bottom:8px;">${escapeHtml(L.pdf_strengths_heading)}</div>
                        ${d.strengths.map(s => `<div style="font-size:11px;color:${BRAND_DARK};padding:3px 0 3px 14px;position:relative;line-height:1.65;"><span style="position:absolute;left:2px;top:9px;width:5px;height:5px;border-radius:50%;background:#10B981;opacity:0.6;display:block;"></span>${escapeHtml(s)}</div>`).join('')}
                    </div>
                    <div>
                        <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:#EF4444;margin-bottom:8px;">${escapeHtml(L.pdf_gaps_heading)}</div>
                        ${d.gaps.map(g => `<div style="font-size:11px;color:${BRAND_DARK};padding:3px 0 3px 14px;position:relative;line-height:1.65;"><span style="position:absolute;left:2px;top:9px;width:5px;height:5px;border-radius:50%;background:#EF4444;opacity:0.6;display:block;"></span>${escapeHtml(g)}</div>`).join('')}
                    </div>
                </div>
                <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.12em;color:${BRAND_CORAL};margin-bottom:10px;">${escapeHtml(L.pdf_improvement_actions)}</div>
                ${actionsHTML}
            </div>
        </div>`;
    }).join('');

    const plan90HTML = `
    <div style="background:${BRAND_DARK};border-radius:14px;padding:20px 24px;page-break-inside:avoid;">
        <div style="font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:0.2em;color:${BRAND_CORAL};margin-bottom:4px;">${escapeHtml(L.pdf_plan90_title)}</div>
        <div style="font-size:10.5px;color:rgba(255,255,255,0.5);margin-bottom:16px;">${escapeHtml(L.pdf_plan90_subtitle)}</div>
        ${plan90.map((a, i) => `
        <div style="display:flex;align-items:flex-start;gap:12px;padding:12px 14px;background:rgba(255,255,255,0.05);border-radius:10px;border:1px solid rgba(255,255,255,0.08);margin-bottom:8px;">
            <span style="flex-shrink:0;width:22px;height:22px;border-radius:50%;background:${BRAND_CORAL};color:#fff;font-size:10px;font-weight:800;display:inline-flex;align-items:center;justify-content:center;">${i + 1}</span>
            <div>
                <div style="font-size:9px;font-weight:700;color:${BRAND_CORAL};text-transform:uppercase;letter-spacing:0.1em;margin-bottom:3px;">${escapeHtml(a.dimLabel)}</div>
                <div style="font-size:12px;font-weight:700;color:#fff;margin-bottom:4px;line-height:1.4;">${escapeHtml(a.action)}</div>
                <div style="font-size:11px;color:rgba(255,255,255,0.55);line-height:1.5;"><strong style="color:rgba(255,255,255,0.75);">${escapeHtml(L.pdf_dim_start)} </strong>${escapeHtml(a.start)}</div>
            </div>
        </div>`).join('')}
    </div>`;

    const safeLang = String(pdfLang || 'en').replace(/[^a-zA-Z-]/g, '') || 'en';
    const html = `<!DOCTYPE html><html lang="${safeLang}"><head>
<meta charset="UTF-8">
<title>${escapeHtml(L.pdf_report_doc_title)} — ${escapeHtml(org)} — AINOW OS</title>
<style>
${baseStyles()}
.page { max-width: 820px; margin: 0 auto; padding: 0 0 40px; }
</style>
</head><body>
${printBar(escapeHtml(L.pdf_report_doc_title))}
<div class="page">
    ${docHeader(escapeHtml(L.pdf_assessment_title), escapeHtml(org))}
    ${overallHTML}
    ${heatmapHTML}
    ${blockersHTML}
    ${actionPlanHTML}
    ${dimsHTML}
    ${plan90HTML}
    ${docFooter()}
</div>
</body></html>`;

    openWindow(html, autoprint);
};


export const exportReadinessMap = ({ org, overall, band, dims, uiLabels = {} }) => {
    const L = {
        strength:   uiLabels.strength   || 'STRENGTH',
        gap:        uiLabels.gap        || 'GAP',
        action:     uiLabels.action     || 'ACTION',
        band_nr:    uiLabels.band_nr    || 'NOT READY',
        foundation: uiLabels.foundation || 'FOUNDATION',
        emerging:   uiLabels.emerging   || 'EMERGING',
        advanced:   uiLabels.advanced   || 'ADVANCED',
    };

    const BC = {
        not_ready:  { color: '#EF4444', label: L.band_nr    },
        foundation: { color: '#F59E0B', label: L.foundation },
        emerging:   { color: '#3B82F6', label: L.emerging   },
        advanced:   { color: '#10B981', label: L.advanced   },
    };
    const bm = BC[band] || BC.foundation;

    const xe  = s => String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    const date = new Date().toLocaleDateString(undefined, { year:'numeric', month:'long', day:'numeric' });

    /* ── dimension colour palette ── */
    const DC = ['#4B9FE1', '#A855F7', '#E87B5F'];

    /* ─────────────────────────────────────────────────────────────────────
       PRINT-PRECISE LAYOUT
       Target: A4 landscape @ 96 dpi CSS pixels
         Page: 297mm × 210mm  →  1122px × 794px
         @page margin: 10mm each side → printable: 277mm × 190mm → 1048px × 718px

       Design canvas: 1048px wide (fits exactly in printable area)
       Three columns  (col_w=316px, gap=25px):
         col0 x=0     cx=158   (Data)
         col1 x=341   cx=499   (People)
         col2 x=682   cx=840   (Process)
         (3×316 + 2×25 = 998 + 50 = 1048 ✓)

       Hub: 220×108px centred at x=414 (cx=524), top=18
         Hub bottom: y = 18+108 = 126
       Dim header top: y = 160   (34px below hub bottom)
       Bezier mid-y: (126+160)/2 = 143  → BADGE_Y = 143
    ───────────────────────────────────────────────────────────────────── */

    const PW    = 1048;  // printable width px
    const CW    = 316;   // column width
    const CGAP  = 25;    // gap between columns
    const COL_X = [0, CW + CGAP, 2*(CW + CGAP)];           // [0, 341, 682]
    const COL_CX= COL_X.map(x => x + Math.round(CW / 2));  // [158, 499, 840]
    const HUB_W = 220;
    const HUB_H = 108;
    const HUB_X = Math.round((PW - HUB_W) / 2);            // 414 — centres hub
    const HUB_CX= HUB_X + Math.round(HUB_W / 2);          // 524
    const HUB_TY= 18;
    const HUB_BY= HUB_TY + HUB_H;                          // 126
    const DIM_TY= HUB_BY + 34;                             // 160
    const BADGE_Y = Math.round((HUB_BY + DIM_TY) / 2);    // 143

    /* SVG bezier paths from hub bottom to each dim top-centre */
    const beziers = COL_CX.map((cx) => {
        if (cx === HUB_CX) return `M ${HUB_CX},${HUB_BY} L ${HUB_CX},${DIM_TY}`;
        return `M ${HUB_CX},${HUB_BY} C ${HUB_CX},${BADGE_Y} ${cx},${BADGE_Y} ${cx},${DIM_TY}`;
    });

    /* SVG arms: glow path + crisp path + score badge + band dot */
    const svgArms = dims.map((d, i) => {
        const col = DC[i];
        const cx  = COL_CX[i];
        const bci = BC[d.band] || BC.foundation;
        const sw  = (2.5 + (d.score / 100) * 6).toFixed(1);
        /* badge x: offset slightly toward column so it never overlaps the hub */
        const bx  = Math.round(HUB_CX + (cx - HUB_CX) * 0.55);
        return `
        <path d="${beziers[i]}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-opacity="0.15" stroke-linecap="round"/>
        <path d="${beziers[i]}" fill="none" stroke="${col}" stroke-width="2" stroke-opacity="0.9"  stroke-linecap="round"/>
        <rect x="${bx-20}" y="${BADGE_Y-12}" width="40" height="24" rx="12" fill="${col}"/>
        <text x="${bx}" y="${BADGE_Y+4.5}" text-anchor="middle"
              font-family="'Segoe UI',system-ui,Arial,sans-serif"
              font-size="11" font-weight="900" fill="white">${d.score}</text>
        <circle cx="${bx+23}" cy="${BADGE_Y}" r="4.5" fill="${bci.color}"/>`;
    }).join('');

    /* ── dim column HTML ── */
    const dimCol = (d, i) => {
        const col = DC[i];
        const bci = BC[d.band] || BC.foundation;
        const lx  = COL_X[i];

        const leaf = (borderCol, text, sub) => `
          <div style="display:flex;align-items:flex-start;margin-bottom:4px;padding-left:14px;position:relative;">
            <div style="position:absolute;left:0;top:0;width:12px;height:52%;
                        border-left:1.5px solid ${col}50;border-bottom:1.5px solid ${col}50;
                        border-bottom-left-radius:4px;"></div>
            <div style="flex:1;background:#fff;border:1px solid ${borderCol}25;
                        border-left:2.5px solid ${borderCol};border-radius:0 6px 6px 0;
                        padding:4px 8px;min-height:24px;">
              <div style="font-size:9px;color:#1C1A18;line-height:1.4;font-weight:500;">${xe(text)}</div>
              ${sub ? `<div style="font-size:8px;color:#9B9791;margin-top:1px;line-height:1.3;">▸ ${xe(sub)}</div>` : ''}
            </div>
          </div>`;

        const gapLeaves    = (d.gaps    || []).map(g => leaf('#EF4444', g, '')).join('');
        const actionLeaves = (d.actions || []).slice(0,2).map(a => leaf('#E87B5F', a.action, a.start)).join('');

        const hasGaps    = (d.gaps    || []).length > 0;
        const hasActions = (d.actions || []).length > 0;

        const sit = d.situation
            ? xe(d.situation.length > 100 ? d.situation.slice(0,98)+'…' : d.situation)
            : '';

        return `
        <div style="position:absolute;left:${lx}px;top:${DIM_TY}px;width:${CW}px;">

          <!-- header -->
          <div style="background:${col};border-radius:12px 12px 0 0;padding:11px 14px 10px;
                      border-bottom:2.5px solid rgba(0,0,0,0.14);">
            <div style="font-size:6.5px;font-weight:800;color:rgba(255,255,255,0.6);
                        text-transform:uppercase;letter-spacing:1.6px;margin-bottom:5px;">${xe(d.label)}</div>
            <div style="display:flex;align-items:flex-end;gap:4px;margin-bottom:6px;">
              <span style="font-size:40px;font-weight:900;color:#fff;line-height:1;letter-spacing:-1px;">${d.score}</span>
              <span style="font-size:12px;color:rgba(255,255,255,0.3);padding-bottom:2px;">/100</span>
              <div style="flex:1;"></div>
              <span style="font-size:7px;font-weight:800;color:#fff;background:rgba(255,255,255,0.18);
                           border:1px solid rgba(255,255,255,0.28);border-radius:20px;
                           padding:2px 8px;text-transform:uppercase;letter-spacing:0.09em;
                           align-self:flex-end;margin-bottom:3px;">${bci.label}</span>
            </div>
            <div style="height:3.5px;background:rgba(255,255,255,0.18);border-radius:2px;overflow:hidden;">
              <div style="width:${d.score}%;height:100%;background:rgba(255,255,255,0.82);border-radius:2px;"></div>
            </div>
          </div>

          <!-- body -->
          <div style="background:${col}07;border:1px solid ${col}28;border-top:none;
                      border-radius:0 0 12px 12px;padding:9px 10px 11px;">
            ${sit ? `<div style="font-size:8.5px;color:#6B6662;line-height:1.45;margin-bottom:8px;
                                 padding-bottom:6px;border-bottom:1px dashed ${col}28;font-style:italic;">${sit}</div>` : ''}

            ${hasGaps ? `
            <div style="margin-bottom:8px;">
              <div style="display:flex;align-items:center;gap:4px;margin-bottom:5px;">
                <div style="width:2.5px;height:10px;background:#EF4444;border-radius:2px;flex-shrink:0;"></div>
                <span style="font-size:6.5px;font-weight:800;color:#EF4444;text-transform:uppercase;
                             letter-spacing:1.1px;">${L.gap} · ${(d.gaps||[]).length}</span>
              </div>
              <div style="border-left:1.5px solid ${col}38;margin-left:1px;">${gapLeaves}</div>
            </div>` : ''}

            ${hasActions ? `
            <div>
              <div style="display:flex;align-items:center;gap:4px;margin-bottom:5px;">
                <div style="width:2.5px;height:10px;background:#E87B5F;border-radius:2px;flex-shrink:0;"></div>
                <span style="font-size:6.5px;font-weight:800;color:#E87B5F;text-transform:uppercase;
                             letter-spacing:1.1px;">${L.action}</span>
              </div>
              <div style="border-left:1.5px solid ${col}38;margin-left:1px;">${actionLeaves}</div>
            </div>` : ''}
          </div>

        </div>`;
    };

    /* ── hub ── */
    const hub = `
    <div style="position:absolute;left:${HUB_X}px;top:${HUB_TY}px;width:${HUB_W}px;z-index:2;">
      <div style="background:#1C1A18;border-radius:16px;padding:11px 18px 13px;
                  box-shadow:0 4px 24px rgba(0,0,0,0.28);border:1.5px solid #2C2A28;">
        <div style="font-size:6.5px;font-weight:800;color:rgba(255,255,255,0.3);text-transform:uppercase;
                    letter-spacing:2px;margin-bottom:1px;text-align:center;">
          ${xe(org.length > 30 ? org.slice(0,29)+'…' : org)}</div>
        <div style="text-align:center;margin-bottom:5px;line-height:1;">
          <span style="font-size:52px;font-weight:900;color:${bm.color};letter-spacing:-2px;">${overall}</span>
          <span style="font-size:13px;color:rgba(255,255,255,0.18);"> /100</span>
        </div>
        <div style="text-align:center;">
          <span style="display:inline-block;font-size:7.5px;font-weight:800;color:${bm.color};
                       background:${bm.color}22;border:1.5px solid ${bm.color}55;
                       border-radius:20px;padding:2px 12px;text-transform:uppercase;
                       letter-spacing:0.12em;">${bm.label}</span>
        </div>
      </div>
    </div>`;

    const dimHtml  = dims.map((d, i) => dimCol(d, i)).join('');

    /* SVG canvas covers the connection zone; dims overflow below it naturally */
    const SVG_H = DIM_TY + 20;  // 180px — just covers bezier + badges

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=${PW}">
<title>AI Readiness Map — ${xe(org)} — AINOW OS</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: ${PW}px;
    background: #F0EEE9;
    font-family: 'Segoe UI', system-ui, -apple-system, Arial, sans-serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  #page {
    width: ${PW}px;
    padding: 0 0 56px;   /* 56px bottom clears the toolbar */
  }
  #bar {
    position: fixed; bottom: 0; left: 0; right: 0; height: 44px;
    background: rgba(26,24,22,0.96); backdrop-filter: blur(10px);
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 22px; z-index: 100;
  }
  /* ── Print rules ── */
  @page { size: A4 landscape; margin: 10mm; }
  @media print {
    html, body { background: #fff !important; width: ${PW}px; }
    #bar  { display: none !important; }
    #page { padding: 0; }
    #map-canvas { background: #fff !important; border: none !important; border-radius: 0 !important; }
    /* no transform, no scale — 1048px fits exactly in 277mm printable width at 96dpi */
  }
</style>
</head>
<body>
<div id="page">

  <!-- ── page header (approx 44px tall) ── -->
  <div style="display:flex;justify-content:space-between;align-items:flex-end;
              padding: 0 2px 8px; border-bottom:2px solid #E87B5F; margin-bottom:10px;">
    <div>
      <div style="font-size:7px;font-weight:800;color:#E87B5F;text-transform:uppercase;
                  letter-spacing:0.2em;margin-bottom:1px;">AINOW OS</div>
      <div style="font-size:17px;font-weight:900;color:#1C1A18;letter-spacing:-0.3px;">
        AI Readiness Visual Map</div>
    </div>
    <div style="text-align:right;">
      <div style="font-size:12px;font-weight:700;color:#1C1A18;">${xe(org)}</div>
      <div style="font-size:9px;color:#9B9791;margin-top:1px;">${xe(date)}</div>
    </div>
  </div>

  <!-- ── mindmap canvas ── -->
  <div id="map-canvas"
       style="position:relative;width:${PW}px;min-height:${SVG_H}px;
              background:#fff;border-radius:12px;border:1px solid #E0DDD8;">

    <!-- SVG layer: only covers the hub→dim connection zone -->
    <svg style="position:absolute;top:0;left:0;pointer-events:none;"
         width="${PW}" height="${SVG_H}" viewBox="0 0 ${PW} ${SVG_H}">
      ${svgArms}
    </svg>

    <!-- hub node -->
    ${hub}

    <!-- three dimension columns -->
    ${dimHtml}

  </div>

</div>

<!-- toolbar -->
<div id="bar">
  <span style="font-size:7.5px;font-weight:800;color:#E87B5F;text-transform:uppercase;
               letter-spacing:0.2em;">AINOW OS — AI Readiness Visual Map</span>
  <div style="display:flex;gap:8px;">
    <button onclick="window.print()"
            style="background:#E87B5F;color:#fff;border:none;border-radius:7px;
                   padding:5px 18px;font-size:12px;font-weight:700;cursor:pointer;">
      ⬇ Print / Save PDF</button>
    <button onclick="window.close()"
            style="background:rgba(255,255,255,0.08);color:#fff;
                   border:1px solid rgba(255,255,255,0.18);border-radius:7px;
                   padding:5px 14px;font-size:12px;font-weight:600;cursor:pointer;">
      ✕ Close</button>
  </div>
</div>
</body>
</html>`;

    openWindow(html, false);
};
