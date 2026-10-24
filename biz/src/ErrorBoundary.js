(function () {
  'use strict';
  window.AINOW = window.AINOW || {};
  const exports = AINOW['src/ErrorBoundary'] = {};
  const html = htm.bind(React.createElement);
  class ErrorBoundary extends React.Component {
    constructor(props) { super(props); this.state = {hasError:false}; }
    static getDerivedStateFromError() { return {hasError:true}; }
    componentDidCatch(error, info) { console.error('AINOW could not render this page:', error, info); }
    render() {
      if (!this.state.hasError) return this.props.children;
      let lang = 'en';
      try { lang = localStorage.getItem('ainow_lang') || 'en'; } catch (_) {}
      const text = AINOW['locales/locales'].getCachedLocale(lang).release;
      return html`<main className="ainow-recovery"><span className="ainow-ui-icon" aria-hidden="true" dangerouslySetInnerHTML=${{__html:AINOWPlatform.icon('Info')}}/><h1>${text.recovery_title}</h1><p>${text.recovery_text}</p><div><button type="button" className="ainow-button" onClick=${()=>window.location.reload()}>${text.reload}</button><a className="ainow-button is-secondary" href=${AINOWPlatform.href('index.html')}>${AINOWPlatform.text(lang,'home')}</a></div></main>`;
    }
  }
  exports.ErrorBoundary = ErrorBoundary;
})();
