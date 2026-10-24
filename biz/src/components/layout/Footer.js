(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/components/layout/Footer'] = AINOW['src/components/layout/Footer'] || {};
const { useLanguage } = AINOW['src/hooks'];
const html = htm.bind(React.createElement);
const Footer = ({ isZenMode }) => {
    const { lang } = useLanguage();
    if (isZenMode) return null;
    return html`<footer className="platform-footer" dangerouslySetInnerHTML=${{__html:AINOWPlatform.footer(lang)}}/>`;
};
__exports.Footer = Footer;
})();
