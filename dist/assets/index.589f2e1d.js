(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(s,n){const r=[...s],l=Math.floor(s.length/n),e=[];for(let t=0;t<l;t++){const o=[];for(let i=0;i<n;i++){const u=Math.floor(Math.random()*r.length),c=r[u];o.push(c),r.splice(u,1)}e.push(o)}return{inGroups:e,noGroups:r}}document.getElementById("group").addEventListener("click",f);function f(){let s=document.getElementById("elements").value.split(`
`);s=s.filter(o=>o!="");const n=parseInt(document.getElementById("groupsItems").value),r=d(s,n),{inGroups:l,noGroups:e}=r;let t="";l.forEach((o,i)=>t+=`Grupo ${i}: ${o.join(",")} <br/>`),e.length&&(t+="No est\xE1n en grupo:"+e.join(",")),document.getElementById("finalGroups").innerHTML=t}