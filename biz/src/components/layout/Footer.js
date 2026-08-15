import React from 'react';
import htm from 'htm';
import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../../hooks.js';
import { APP_VERSION } from '../../config.js';

const html = htm.bind(React.createElement);

export const Footer = ({ isZenMode }) => {
    const { t } = useLanguage();
    if (isZenMode) return null;
    return html`
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto no-print">
        <div className="max-w-[1600px] mx-auto py-10 px-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 mb-2">
             <div className="flex items-center gap-4">
               <a href="https://github.com/AINOW-Society/AINOW-Society" target="_blank" className="text-slate-400 hover:text-slate-900 dark:hover:white transition-colors" aria-label="GitHub"><${Github} className="w-5 h-5" /></a>
               <a href="https://www.linkedin.com/company/ainowmk" target="_blank" className="text-slate-400 hover:text-slate-900 dark:hover:white transition-colors" aria-label="LinkedIn"><${Linkedin} className="w-5 h-5" /></a>
             </div>
          </div>
          <div className="text-center space-y-1">
            <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                ${t('footer.tagline')}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                ${t('footer.rights')} • <a href="https://www.ainow.mk" target="_blank" className="hover:text-indigo-600 transition-colors">AINOW Society</a> • <span className="font-mono">v${APP_VERSION}</span>
            </p>
            <p className="pt-4">
                <a href="https://your-domain.example" className="text-[10px] text-slate-400 hover:text-indigo-600 transition-colors font-mono uppercase tracking-widest">your-domain.example</a>
            </p>
          </div>
        </div>
      </footer>
    `;
};
