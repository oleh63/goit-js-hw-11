import{i as d,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="46966788-e70827204bebbcb7a27eabe68",y="https://pixabay.com/api/";async function g(o){const n=`${y}?key=${p}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>r.hits).catch(r=>(console.error("Error fetching images",r),[]))}function w(o,n){const r=o.map(s=>`
            <a href="${s.largeImageURL}" class="gallery-item">
                <img src="${s.webformatURL}" alt="${s.tags}" width="360" height="200" loading="lazy" />
                <div class="info">
                    <p>Likes: ${s.likes}</p>
                    <p>Views: ${s.views}</p>
                    <p>Comments: ${s.comments}</p>
                    <p>Downloads: ${s.downloads}</p>
                </div>
            </a>
        `).join("");n.innerHTML=r}function c(o){d.error({title:"Error",message:o})}function L(o){d.info({title:"Info",message:o})}const l=document.querySelector("#form-js"),u=document.querySelector(".gallery"),h=document.querySelector(".loader");let a;l.addEventListener("submit",async o=>{o.preventDefault();const n=l.querySelector("input").value.trim();if(!n){L("Please enter a search term.");return}u.innerHTML="",b(),g(n).then(r=>{f(),r.length===0?c("Sorry, there are no images matching your search query. Please try again!"):(w(r,u),a?a.refresh():a=new m(".gallery a"))}).catch(()=>{f(),c("Something went wrong. Please try again later.")})});function b(){h.style.display="block"}function f(){h.style.display="none"}
//# sourceMappingURL=index.js.map
