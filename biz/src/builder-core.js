
(function(root){
  'use strict';
  const defaults={framework:'standard',name:'My assistant',role:'Helpful work assistant',domain:'Everyday work',expertise:'Writing, organising and reviewing information',focus:'A clear, useful result',tone:'Clear and professional',methodology:'Ask when essential information is missing. State assumptions and check important claims.',capabilities:'',context:'',input_format:'',examples:'',constraints:[],task:'',output_format:''};
  function restore(raw){
    if(!raw||typeof raw!=='object'||Array.isArray(raw))return {...defaults,constraints:[]};
    const state={...defaults,...raw};
    for(const key of Object.keys(defaults))if(key!=='constraints'&&typeof state[key]!=='string')state[key]=defaults[key];
    state.constraints=Array.isArray(raw.constraints)?raw.constraints.filter(x=>typeof x==='string'):[];
    if(!['standard','cot','fewshot','socratic'].includes(state.framework))state.framework='standard';
    return state;
  }
  function prompt(raw){
    const s=restore(raw),lines=[`ASSISTANT: ${s.name}`,`ROLE: ${s.role}`,`AREA: ${s.domain}`];
    if(s.task.trim())lines.push(`\nTASK\n${s.task.trim()}`);
    lines.push(`\nDESIRED RESULT\n${s.focus}`);
    if(s.output_format.trim())lines.push(`OUTPUT FORMAT\n${s.output_format.trim()}`);
    lines.push(`\nWORKING STYLE\nUse a ${s.tone} tone.\n${s.methodology}`);
    if(s.expertise.trim())lines.push(`Relevant knowledge: ${s.expertise}`);
    if(s.context.trim())lines.push(`\nCONTEXT AND RULES\n${s.context.trim()}`);
    if(s.input_format.trim())lines.push(`\nINPUT TO EXPECT\n${s.input_format.trim()}`);
    if(s.capabilities.trim())lines.push(`\nREQUESTED TASKS\n${s.capabilities.split('\n').filter(x=>x.trim()).map(x=>'- '+x.trim()).join('\n')}`);
    const preferenceText={'No Fluff / No Yapping':'Keep the response concise and relevant.','No Emojis':'Do not use emojis.','No Moralizing Lectures':'Keep advice relevant to the task.','No Em Dashes (—)':'Avoid em dashes.','No Markdown Formatting':'Use plain text.','No Bias / Opinionated Rants':'Separate facts, assumptions and opinions.','No Acknowledgement (Just Do It)':'Start with the answer.'};
    if(s.constraints.length)lines.push(`\nPREFERENCES\n${s.constraints.map(x=>'- '+(preferenceText[x]||x)).join('\n')}`);
    if(s.framework==='cot')lines.push('\nEXPLANATION\nGive a concise explanation of the conclusion, important assumptions and checks. Choose a suitable method for the task.');
    if(s.framework==='socratic')lines.push('\nTEACHING STYLE\nStart with a focused question to understand what the learner knows. Give hints and explain when needed.');
    if(s.examples.trim())lines.push(`\nEXAMPLES OF THE EXPECTED RESPONSE\n${s.examples.trim()}`);
    lines.push('\nCHECK BEFORE ANSWERING\nAsk for essential missing inputs. Do not invent sources, tool access or completed actions. Verify important claims against the supplied material. These instructions do not grant tools, permissions or external integrations.');
    return lines.join('\n');
  }
  const api={defaults,restore,prompt};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;
  if(root){root.AINOW=root.AINOW||{};root.AINOW['src/builder-core']=api;}
})(typeof window!=='undefined'?window:null);
