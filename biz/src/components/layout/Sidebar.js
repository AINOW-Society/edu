(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/components/layout/Sidebar'] = AINOW['src/components/layout/Sidebar'] || {};
const { useState, useEffect, useRef } = React;

const { X } = lucide;
const { useLanguage } = AINOW['src/hooks'];

const html = htm.bind(React.createElement);

const SidebarWrapper = ({ isOpen, onClose, children, showOnDesktop = true, isZenMode, showNavigation = true, platformLinks = true, onNotes, workspace = 'biz', active, counts = {} }) => {
    const { lang } = useLanguage();
    const panel = useRef(null);
    const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width:767.98px)').matches);
    useEffect(() => {
        const media = window.matchMedia('(max-width:767.98px)');
        const update = () => setIsMobile(media.matches);
        media.addEventListener('change', update);
        return () => media.removeEventListener('change', update);
    }, []);
    useEffect(() => {
        if (!isOpen) return;
        const previous = document.activeElement;
        const oldOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        panel.current?.querySelector('button, a[href]')?.focus();
        const keydown = event => {
            if (event.key === 'Escape') onClose();
            if (event.key !== 'Tab') return;
            const nodes = [...panel.current.querySelectorAll('button, a[href], input, select')].filter(node => node.offsetParent !== null);
            const first = nodes[0], last = nodes[nodes.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        };
        document.addEventListener('keydown', keydown);
        return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', keydown); previous?.focus?.(); };
    }, [isOpen]);
    const path=location.pathname,hash=location.hash;
    const activeId=active||(path.endsWith('/agents.html')?'agents':path.endsWith('/builder.html')?'builder':path.endsWith('/playbooks.html')?'playbooks':hash.startsWith('#/prompts')||hash.startsWith('#/prompt/')?'prompts':'home');
    const menu=AINOWNavigation;
    const menuClick=event=>{const action=event.target.closest('[data-nav-action]');if(action?.dataset.navAction==='notes'&&onNotes){event.preventDefault();onClose();onNotes();}};
    const shouldShow = showOnDesktop && !isZenMode;

    return html`
    <${React.Fragment}>
        <div className=${`fixed inset-0 bg-black/50 z-[60] transition-opacity no-print ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${shouldShow ? ' md:hidden' : ''}`} onClick=${onClose}></div>
        <aside ref=${panel} inert=${(isMobile||!shouldShow) && !isOpen ? true : undefined} aria-hidden=${(isMobile||!shouldShow) && !isOpen ? true : undefined} className=${`ainow-sidebar ${shouldShow?'ainow-sidebar-desktop':'ainow-sidebar-drawer'} fixed top-0 bottom-0 left-0 z-[70] transition-transform border-l flex flex-col no-print ${isOpen ? 'ainow-drawer-open shadow-level-3' : ''} ${shouldShow ? ' md:w-[240px] md:max-w-[240px] md:sticky md:top-[64px] md:bottom-auto md:h-[calc(100vh-64px)] md:translate-x-0 md:shadow-none md:z-30 md:left-0 md:right-auto md:border-l-0 md:border-r' : ' shadow-level-3'}`}>
            <div className="ainow-sidebar-content">
                <div className="ainow-sidebar-scroll custom-scrollbar"><div className="ainow-drawer-heading"><span>${menu.text(lang,'navigation')}</span><button type="button" onClick=${onClose} aria-label=${AINOWPlatform.text(lang,'close')}><${X}/></button></div>
                ${showNavigation&&html`<div dangerouslySetInnerHTML=${{__html:menu.render(workspace,lang,{active:activeId,counts})}}/>`}
                ${showNavigation&&html`<div onClick=${menuClick} dangerouslySetInnerHTML=${{__html:menu.render(workspace,lang,{group:'utilities',active:activeId,counts})}}/>`}
                <div className="ainow-sidebar-context">${children}</div>
                </div>
                ${platformLinks&&html`<div dangerouslySetInnerHTML=${{__html:menu.render(workspace,lang,{group:'common',active:activeId})}}/>`}

            </div>
        </aside>
    <//>
    `;
};
  __exports.SidebarWrapper = SidebarWrapper;
})();
