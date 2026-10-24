
(function () {
  'use strict';
  function removeKeys(storage,keys) {
    const before=keys.map(key=>[key,storage.getItem(key)]);
    try { keys.forEach(key=>storage.removeItem(key)); }
    catch(error) { before.forEach(([key,value])=>{try{if(value!==null)storage.setItem(key,value);}catch(_) {}});throw error; }
  }
  function business(storage,utils) {
    return {
      read:()=>utils.parseBusinessBackup(JSON.stringify(Object.fromEntries([...utils.BUSINESS_DATA_KEYS,...utils.BUSINESS_PREFERENCE_KEYS].map(key=>[key,storage.getItem(key)]).filter(([,value])=>value!==null).concat(storage.getItem('favPrompts')===null?[["favPrompts","[]"]]:[])))),
      validate:raw=>utils.parseBusinessBackup(JSON.stringify(raw)),
      restore:value=>utils.restoreBusinessBackup(storage,value),
      reset:()=>removeKeys(storage,utils.BUSINESS_DATA_KEYS)
    };
  }
  function development(storage,core,data) {
    const validate=state=>core.validateState(state,data.library.items,data.goals,data.checks);
    return {
      read:()=>{const value=storage.getItem(core.key);return {format:'ainow-dev-web',version:1,state:value===null?core.emptyState():validate(JSON.parse(value))};},
      validate:raw=>{if(raw?.format!=='ainow-dev-web'||raw.version!==1)throw Error('Different format');return validate(raw.state);},
      restore:value=>storage.setItem(core.key,JSON.stringify(value)),
      reset:()=>removeKeys(storage,[core.key])
    };
  }
  window.AINOWSettingsData=Object.freeze({business,development});
})();
