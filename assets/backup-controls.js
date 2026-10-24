
(function () {
  'use strict';
  window.AINOWBackupControls = function ({lang, description, read, validate, restore, filename, onRestored}) {
    const {useState,useRef}=React, html=htm.bind(React.createElement), P=AINOWPlatform;
    const [message,setMessage]=useState(''), file=useRef(null), t=key=>P.text(lang,key);
    const exportBackup=()=>{
      try {
        const blob=new Blob([JSON.stringify(read(),null,2)],{type:'application/json'});
        if(blob.size>2*1024*1024){setMessage(t('backupTooLarge'));return;}
        const url=URL.createObjectURL(blob), link=document.createElement('a');
        link.href=url;link.download=filename+'-'+new Date().toISOString().slice(0,10)+'.json';
        document.body.appendChild(link);link.click();link.remove();
        setTimeout(()=>URL.revokeObjectURL(url),0);setMessage('');
      } catch (_) {setMessage(t('backupStorageError'));}
    };
    const importBackup=async event=>{
      const incoming=event.target.files?.[0];if(!incoming)return;
      try {
        if(incoming.size>2*1024*1024){setMessage(t('backupTooLarge'));return;}
        const value=validate(JSON.parse(await incoming.text()));
        if(!window.confirm(t('backupConfirm')))return;
        try { if(restore(value)===false)throw Error('Storage unavailable'); }
        catch (_) {setMessage(t('backupStorageError'));return;}
        if(onRestored){setMessage('');onRestored();}else setMessage(t('backupRestored'));
      } catch (_) {setMessage(t('backupInvalid'));}
      finally {event.target.value='';}
    };
    const mark=name=>html`<span className="ainow-backup-icon" dangerouslySetInnerHTML=${{__html:P.icon(name)}}/>`;
    return html`<div className="ainow-backup-controls"><p className="ainow-backup-description">${description}</p>
      <section className="ainow-backup-row">${mark('Download')}<div><h3>${t('backupExport')}</h3><p>${t('backupExportHint')}</p></div><button type="button" className="ainow-button" onClick=${exportBackup}>${t('backupDownload')}</button></section>
      <section className="ainow-backup-row">${mark('Upload')}<div><h3>${t('backupImport')}</h3><p>${t('backupImportHint')}</p></div><button type="button" className="ainow-button is-secondary" onClick=${()=>file.current.click()}>${t('backupChoose')}</button><input ref=${file} type="file" accept=".json,application/json" hidden onChange=${importBackup}/></section>
      ${message&&html`<p role="status">${message}</p>`}</div>`;
  };
})();
