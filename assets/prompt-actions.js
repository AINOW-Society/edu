(function () {
  'use strict';
  const tools=Object.freeze([
    ['chatgpt','ChatGPT','https://chatgpt.com/?q='],
    ['gemini','Gemini','https://gemini.google.com/app?prompt='],
    ['claude','Claude','https://claude.ai/new?q='],
    ['copilot','Copilot','https://copilot.microsoft.com/?q='],
    ['perplexity','Perplexity','https://www.perplexity.ai/?q=']
  ].map(([id,name,promptUrl])=>Object.freeze({id,name,promptUrl,url:promptUrl.split('?')[0]})));
  const copy={
    en:{copy:'Copy',hint:'Choose an app, then paste your copied prompt.',saved:'Saved in this browser.',choose:'Copy prompt and continue in',copyFailed:'Copy failed. Select the prompt text and copy it manually.'},
    mk:{copy:'Копирај',hint:'Изберете апликација, па залепете го промптот.',saved:'Зачувано во овој прелистувач.',choose:'Копирај го промптот и продолжи во',copyFailed:'Копирањето не успеа. Изберете го текстот и копирајте го рачно.'},
    sq:{copy:'Kopjo',hint:'Zgjidhni aplikacionin dhe ngjitni promptin.',saved:'U ruajt në këtë shfletues.',choose:'Kopjo promptin dhe vazhdo në',copyFailed:'Kopjimi dështoi. Zgjidhni tekstin dhe kopjojeni manualisht.'}
  };
  const ui=lang=>copy[lang]||copy.en;
  function render(lang){
    const t=ui(lang);
    return tools.map(tool=>`<button type="button" class="prompt-dialog-app" data-prompt-tool="${tool.id}" aria-label="${t.choose} ${tool.name}" title="${t.choose} ${tool.name}"><img src="${AINOWPlatform.href('assets/ai-apps/'+tool.id+'.svg')}" width="22" height="22" alt="" ${tool.id==='chatgpt'||tool.id==='perplexity'?'class="is-monochrome"':''}><span>${tool.name}</span></button>`).join('');
  }
  function bind(root,onChoose){
    const click=event=>{
      const button=event.target.closest('[data-prompt-tool]');
      if(!button||!root.contains(button))return;
      const tool=tools.find(tool=>tool.id===button.dataset.promptTool);
      if(!tool)return;
      event.preventDefault();event.stopPropagation();onChoose(tool);
    };
    root.addEventListener('click',click);
    return()=>root.removeEventListener('click',click);
  }
  window.AINOWPromptActions=Object.freeze({tools,ui,render,bind});
})();
