var m=e=>{throw TypeError(e)};var v=(e,t,r)=>t.has(e)||m("Cannot "+r);var f=(e,t,r)=>(v(e,t,"read from private field"),r?r.call(e):t.get(e)),h=(e,t,r)=>t.has(e)?m("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r);import{a as P,S as q,i as E}from"./assets/vendor-BMFj4jqR.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const p=document.querySelector(".gallery");function g(e){return e.map(({webformatURL:t,largeImageURL:r,tags:i,likes:o,views:s,comments:c,downloads:T})=>` 
<li class="thumb"> 
    <a href="${r}" 
            class="gallery-item" > 
    <div class="photo-card"> 
            <img src="${t}" alt="${i}"  loading="lazy" 
            class="gallery-image"/> 
        <div class="info"> 
            <p class="info-item"> 
            <b>Likes</b>${o} 
            </p> 
            <p class="info-item"> 
            <b>Views</b>${s} 
            </p> 
            <p class="info-item"> 
            <b>Comments</b>${c} 
            </p> 
            <p class="info-item"> 
            <b>Downloads</b>${T} 
            </p> 
         </div> 
    </div> 
    </a> 
</li>`).join("")}function O(){p.innerHTML=""}function M(e){p.innerHTML=e}function R(e){p.insertAdjacentHTML("beforeend",g(e))}var l,u;class _{constructor(){h(this,l,"29527006-ad6e7c34d6702116665004a30");h(this,u,"https://pixabay.com/api/");this.page=1,this.searchQuery="",this.per_page=15}async fetchPictures(){return(await P.get(f(this,u),{params:{key:f(this,l),q:this.searchQuery,image_type:"photo",orientation:"horizontal",safesearch:!0,page:this.page,per_page:this.per_page}})).data}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.searchQuery}set query(t){this.searchQuery=t}}l=new WeakMap,u=new WeakMap;const n={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),form:document.querySelector("#search-form"),readmore:document.querySelector(".readmore"),buttonToTop:document.querySelector(".scroll-to-top")},$=new q(".gallery a",{captionsData:"alt",captionDelay:250});n.form.addEventListener("submit",D);n.readmore.addEventListener("click",H);n.buttonToTop.addEventListener("click",j);const a=new _;async function D(e){e.preventDefault();const t=e.currentTarget.searchQuery.value.trim();if(a.query=t,a.query==="")return d("info","Sorry","Please, type what you want  to search!");x(t),a.resetPage(),O(),y();try{const{hits:r,totalHits:i}=await a.fetchPictures();N(r,i)}catch(r){b(r)}finally{w(),n.form.reset()}}async function H(){a.incrementPage(),y();try{const{hits:e,totalHits:t}=await a.fetchPictures();R(e),Q(),L(),a.page*a.per_page>=t&&S()}catch(e){b(e)}finally{w()}}function N(e,t){if(e.length===0)return n.readmore.classList.add("hidden"),d("error","No Results","No images found for your search!");const r=g(e);M(r),L(),t<=a.per_page?(n.readmore.classList.add("hidden"),S()):n.readmore.classList.remove("hidden")}function y(){n.loader.classList.remove("hidden")}function w(){n.loader.classList.add("hidden")}function L(){$.refresh("show.simplelightbox")}function Q(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}function j(){window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=()=>k();function k(){window.scrollY>60?n.buttonToTop.classList.remove("js-transparent"):n.buttonToTop.classList.add("js-transparent")}function x(e){const t=new URL(window.location);t.searchParams.set("searchQuery",e),window.history.pushState({},"",t)}function d(e,t,r){E[e]({position:"topRight",title:t,message:r})}function b(e){console.log("Error fetching images:",e.message),d("error","Error","Something went wrong while fetching images. Please try again later!")}function S(){n.readmore.classList.add("hidden"),d("info","End of Search","You have reached the end of the results!")}
//# sourceMappingURL=index.js.map
