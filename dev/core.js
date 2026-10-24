(function (root) {
  'use strict';
  const key = 'ainow_dev_v095';
  const emptyState = () => ({version:1,saved:[],read:[],drafts:{},notes:'',goal:'',results:{},lastGuide:''});
  const text = (value,lang='en') => typeof value === 'string' ? value : value?.[lang] || value?.en || '';
  const browse = (items,kind) => items.filter(x => x.kind===kind && (!(kind==='dev-skills'||kind==='dev-connectors') || !!x.catalogType));
  const matches = (items,{query='',topic='',status='',lang='en',saved=[],read=[],topics={}}={}) => {
    const words=query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const savedSet=new Set(saved),readSet=new Set(read);
    return items.filter(x=>(!topic||x.topic===topic)&&(!status||(status==='saved'?savedSet.has(x.id):status==='read'?readSet.has(lang+':'+x.id):!readSet.has(lang+':'+x.id)))&&words.every(word=>[text(x.title,lang),text(x.summary,lang),text(topics[x.topic],lang),x.topic||'',x.sourceId||'',x.publisher||''].join(' ').toLocaleLowerCase().includes(word)));
  };
  const estimate = value => Math.ceil(Array.from(value).length/4);
  const clean = value => Number.isFinite(Number(value)) ? Math.max(0,Math.floor(Number(value))) : 0;
  const budget = (instructions,message,history,reply,capacity,manual) => {
    const parts=[estimate(instructions),clean(history),manual===''||manual===undefined?estimate(message):clean(manual),clean(reply)];
    const total=parts.reduce((a,b)=>a+b,0),limit=clean(capacity);
    return {parts,total,capacity:limit,remaining:limit-total};
  };
  function validateState(value,items,goals,checks) {
    if (!value || value.version!==1 || !Array.isArray(value.saved) || !Array.isArray(value.read) || typeof value.notes!=='string' || value.notes.length>100000 || !value.drafts || Array.isArray(value.drafts) || typeof value.drafts!=='object') throw new Error('Invalid DEV backup');
    const ids=new Set(items.map(x=>x.id)),goalIds=new Set(goals.map(x=>x.id));
    const result=emptyState();
    if (!value.saved.every(x=>typeof x==='string'&&ids.has(x)) || !value.read.every(x=>typeof x==='string'&&/^(en|mk|sq):/.test(x)&&ids.has(x.slice(3)))) throw new Error('Unknown entry');
    result.saved=[...new Set(value.saved)];result.read=[...new Set(value.read)];result.notes=value.notes;
    for(const [id,draft] of Object.entries(value.drafts)) {
      if(!ids.has(id)||typeof draft!=='string'||draft.length>100000) throw new Error('Invalid draft');
      result.drafts[id]=draft;
    }
    if(value.goal && !goalIds.has(value.goal)) throw new Error('Unknown goal');
    result.goal=value.goal||'';
    if(value.lastGuide&&!items.some(x=>x.id===value.lastGuide&&x.kind==='dev-guides')) throw new Error('Unknown chapter');
    result.lastGuide=value.lastGuide||'';
    if(value.results && (Array.isArray(value.results)||typeof value.results!=='object')) throw new Error('Invalid results');
    for(const [id,record] of Object.entries(value.results||{})) {
      const [lang,goalId,revision]=id.split(':');
      const check=checks.find(c=>c.goalId===goalId&&String(c.revision)===revision);
      if(!['en','mk','sq'].includes(lang)||!check||!record||!Array.isArray(record.answers)||record.answers.length!==check.questions.length||!record.answers.every((a,i)=>Number.isInteger(a)&&a>=0&&a<check.questions[i].options.length)) throw new Error('Invalid result');
      result.results[id]={answers:record.answers.slice()};
    }
    return result;
  }
  function skillSections(source) {
    const match=/^(?:\uFEFF)?---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/.exec(source);
    return match?{hasMetadata:true,metadata:match[0],instructions:source.slice(match[0].length)}:{hasMetadata:false,metadata:'',instructions:source};
  }
  const api={key,emptyState,text,browse,matches,estimate,budget,validateState,skillSections};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  else root.AINOWDevCore=api;
})(typeof window!=='undefined'?window:globalThis);
