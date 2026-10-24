
(function () {
  'use strict';
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const translations = {
    en: {instructions:'Instructions',edit:'Edit text',preview:'Preview',reset:'Reset changes',editing:'Editing your copy',hint:'Edit this copy, then copy it into your AI app. The original template stays unchanged.'},
    mk: {instructions:'Инструкции',edit:'Уреди текст',preview:'Преглед',reset:'Откажи ги измените',editing:'Ја уредувате вашата копија',hint:'Уредете ја копијата, па копирајте ја во вашата ВИ апликација. Изворниот шаблон останува непроменет.'},
    sq: {instructions:'Udhëzime',edit:'Redakto tekstin',preview:'Pamje paraprake',reset:'Anulo ndryshimet',editing:'Po redaktoni kopjen tuaj',hint:'Redaktoni këtë kopje, pastaj kopjojeni në aplikacionin tuaj IA. Modeli origjinal mbetet i pandryshuar.'}
  };
  function sentences(text) {
    const parts = [], breaks = /[.!?][”"’)]*\s+(?=[\p{Lu}\p{N}\[])/gu;
    let start = 0, match;
    while ((match = breaks.exec(text))) {
      const end = match.index + match[0].trimEnd().length;
      if (/(?:\b(?:Mr|Mrs|Ms|Dr|Prof|Sr|Jr|vs|etc)|\be\.g|\bi\.e)\.$/i.test(text.slice(start,end))) continue;
      parts.push(text.slice(start,end)); start = breaks.lastIndex;
    }
    if (text.slice(start).trim()) parts.push(text.slice(start).trim());
    return parts;
  }
  function commaItems(text) {
    const items = []; let start = 0, depth = 0, quote = '';
    for (let i=0;i<text.length;i++) {
      const c=text[i];
      if (quote) { if(c===quote && text[i-1]!=='\\')quote=''; continue; }
      if (c==='"' || c==='“') {quote=c==='“'?'”':c;continue;}
      if ('([{'.includes(c))depth++;
      if (')]}'.includes(c))depth=Math.max(0,depth-1);
      if(c===',' && depth===0){items.push(text.slice(start,i+1).trim());start=i+1;}
    }
    items.push(text.slice(start).trim()); return items;
  }
  function prose(text) {
    const colon=text.indexOf(':');
    if (colon>0 && !/https?$/i.test(text.slice(0,colon))) {
      const lead=text.slice(0,colon+1), tail=text.slice(colon+1).trim();
      const numbered=tail.split(/\s+(?=\(\d+\)\s)/);
      if(numbered.length>=2 && numbered.every(x=>/^\(\d+\)\s/.test(x)))return [{type:'paragraph',text:lead},{type:'list',items:numbered}];
      const items=commaItems(tail);
      if(items.length>=3 && items.every(x=>/^(?:(?:and|or|и|или|dhe|ose)\s+)?(?:a|an|the|three|two|four|five|një|dy|tre|еден|една|едно|две|три)\b/i.test(x)))return [{type:'paragraph',text:lead},{type:'list',items}];
    }
    return [{type:'paragraph',text}];
  }
  function blocks(value) {
    const text=String(value??'').replace(/\r\n?/g,'\n');
    if (/^\s*(?:\{|\[\s*\{|<\?php|#!)/.test(text)) return [{type:'code',text}];
    if(text.includes('```')) return [{type:'code',text}];
    const out=[];
    for(const paragraph of text.split(/\n\s*\n/)) {
      if(!paragraph.trim())continue;
      const lines=paragraph.trim().split('\n');
      const isHeading=line=>/^#{1,4}\s+/.test(line)||(/^[\p{Lu}\d][\p{Lu}\d\s/&(),:–—-]{2,79}$/u.test(line)&&/\p{Lu}/u.test(line));
      const isBullet=line=>/^\s*(?:[-*•]|\d+[.)])\s+/.test(line);
      if(lines.some(isHeading)||lines.some(isBullet)) {
        let pending=[],list=[];
        const flushText=()=>{if(pending.length){out.push(...prose(pending.join('\n')));pending=[];}};
        const flushList=()=>{if(list.length){out.push({type:'list',items:list});list=[];}};
        for(const line of lines) {
          if(isHeading(line)){flushText();flushList();out.push({type:'heading',text:line.replace(/^#{1,4}\s+/,'')});}
          else if(isBullet(line)){flushText();list.push(line.replace(/^\s*(?:[-*•]|\d+[.)])\s+/,''));}
          else {flushList();pending.push(line);}
        }
        flushText();flushList();continue;
      }
      if(paragraph.length>220 && !paragraph.includes('\n'))sentences(paragraph).forEach(part=>out.push(...prose(part)));
      else out.push(...prose(paragraph.trim()));
    }
    return out;
  }
  function inline(value,values) {
    return String(value).split(/(\[[^\]\n]+\])/).map(part=>/^\[[^\]\n]+\]$/.test(part)?'<mark class="prompt-variable">'+escape(values?.[part]||part)+'</mark>':escape(part)).join('');
  }
  function render(text,values) {
    return blocks(text).map(block=>block.type==='list'?'<ul>'+block.items.map(item=>'<li>'+inline(item,values)+'</li>').join('')+'</ul>':block.type==='code'?'<pre>'+escape(block.text)+'</pre>':block.type==='heading'?'<h3>'+inline(block.text,values)+'</h3>':'<p>'+inline(block.text,values)+'</p>').join('');
  }
  function editable(text) { return blocks(text).map(block=>block.type==='list'?block.items.map(item=>'• '+item).join('\n'):block.text).join('\n\n'); }
  window.AINOWPromptText=Object.freeze({blocks,render,editable,ui:lang=>translations[lang]||translations.en});
})();
