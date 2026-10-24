(function () {
  'use strict';
  window.AINOW = window.AINOW || {};
  const exports = AINOW['src/components/layout/Header'] = {};
  const {useState, useEffect, useRef} = React;
  const {useLanguage} = AINOW['src/hooks'];
  const P = AINOWPlatform, html = htm.bind(React.createElement);
  const Icon = ({name}) => html`<span className="ainow-ui-icon" aria-hidden="true" dangerouslySetInnerHTML=${{__html:P.icon(name)}}/>`;

  function LanguageSwitcher({lang, setLang}) {
    const [open, setOpen] = useState(false), container = useRef(null), trigger = useRef(null);
    useEffect(() => {
      if (!open) return;
      const outside = e => { if (!container.current?.contains(e.target)) setOpen(false); };
      const escape = e => { if (e.key === 'Escape') { e.stopPropagation(); setOpen(false); trigger.current?.focus(); } };
      document.addEventListener('pointerdown', outside);
      document.addEventListener('focusin', outside);
      document.addEventListener('keydown', escape);
      return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('focusin', outside); document.removeEventListener('keydown', escape); };
    }, [open]);
    return html`<div ref=${container} className="ainow-language">
      <button ref=${trigger} type="button" className="ainow-icon-control ainow-language-trigger" data-header-control="language" title=${P.text(lang,'language')} aria-label=${P.text(lang,'language')} aria-expanded=${open} aria-controls="ainow-language-options" onClick=${()=>setOpen(value=>!value)}><${Icon} name="Globe"/><span className="ainow-language-code">${lang.toUpperCase()}</span></button>
      ${open&&html`<div id="ainow-language-options" className="ainow-language-popover">${P.languages.map(item=>html`<button type="button" key=${item.code} aria-pressed=${lang===item.code} onClick=${()=>{setLang(item.code);setOpen(false);trigger.current?.focus();}}><span>${item.name}</span>${lang===item.code&&html`<${Icon} name="Check"/>`}</button>`)}</div>`}
    </div>`;
  }
  function Header({currentTheme,onThemeToggle,onMenuClick,onScratchpad,isZenMode,workspace='biz',languageControl,homeHref='index.html',labels={}}) {
    const fallback = useLanguage(), {lang,setLang,t} = {...fallback,...languageControl};
    const notes = labels.notes || t('scratchpad.title');
    return html`<header className="ainow-header no-print"><div className="ainow-header-inner">
      <a className="ainow-brand" href=${homeHref} aria-label=${workspace==='platform'?'AINOW':'AINOW '+workspace.toUpperCase()}><span className="ainow-brand-logo" dangerouslySetInnerHTML=${{__html:P.logo()}}/>${workspace!=='platform'&&html`<span className="ainow-workspace-label">${workspace.toUpperCase()}</span>`}</a>
      <div className="ainow-header-actions">
        ${onScratchpad&&html`<button type="button" className="ainow-icon-control" data-header-control="notes" onClick=${onScratchpad} aria-label=${notes} title=${notes}><${Icon} name="NotebookPen"/></button>`}
        <${LanguageSwitcher} lang=${lang} setLang=${setLang}/>
        <button type="button" className="ainow-icon-control" data-header-control="theme" onClick=${onThemeToggle} aria-label=${P.text(lang,'theme')} title=${P.text(lang,'theme')}><${Icon} name=${currentTheme==='dark'?'Sun':'Moon'}/></button>
        <a className="ainow-icon-control" data-header-control="about" href=${P.href('about')} aria-label=${P.text(lang,'about')} title=${P.text(lang,'about')}><${Icon} name="Info"/></a>
        <a className="ainow-icon-control" data-header-control="home" href=${P.href('index.html')} aria-label=${P.text(lang,'home')} title=${P.text(lang,'home')}><${Icon} name="Home"/></a>
        ${!isZenMode&&html`<button type="button" className="ainow-icon-control ainow-menu-trigger" data-header-control="menu" data-workspace-menu onClick=${onMenuClick} aria-label=${P.text(lang,'menu')} title=${P.text(lang,'menu')}><${Icon} name="Menu"/></button>`}
      </div>
    </div></header>`;
  }
  exports.Header = Header;
})();
