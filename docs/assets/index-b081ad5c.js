(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,B=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),K=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(B&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(e,t))}return t}toString(){return this.cssText}};const ft=r=>new rt(typeof r=="string"?r:r+"",void 0,V),ot=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new rt(e,r,V)},$t=(r,t)=>{if(B)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},J=B?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ft(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_t,defineProperty:gt,getOwnPropertyDescriptor:mt,getOwnPropertyNames:yt,getOwnPropertySymbols:vt,getPrototypeOf:At}=Object,_=globalThis,Z=_.trustedTypes,bt=Z?Z.emptyScript:"",j=_.reactiveElementPolyfillSupport,w=(r,t)=>r,k={toAttribute(r,t){switch(t){case Boolean:r=r?bt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},F=(r,t)=>!_t(r,t),G={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:F};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=G){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&gt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=mt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);o.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??G}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=At(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,i=[...yt(e),...vt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(J(s))}else t!==void 0&&e.push(J(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){var o;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:k).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:k;this._$Em=s,this[s]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??F)(s?o:this[t],e))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$ES)==null||i.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(e)):this._$ET()}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[w("elementProperties")]=new Map,v[w("finalized")]=new Map,j==null||j({ReactiveElement:v}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis,M=x.trustedTypes,Q=M?M.createPolicy("lit-html",{createHTML:r=>r}):void 0,nt="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+$,Et=`<${ht}>`,y=document,C=()=>y.createComment(""),P=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,St=r=>at(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",z=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,g=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,ct=/^(?:script|style|textarea|title)$/i,wt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),lt=wt(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),st=new WeakMap,m=y.createTreeWalker(y,129);function dt(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Q!==void 0?Q.createHTML(t):t}const xt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":"",n=S;for(let a=0;a<e;a++){const h=r[a];let l,p,c=-1,u=0;for(;u<h.length&&(n.lastIndex=u,p=n.exec(h),p!==null);)u=n.lastIndex,n===S?p[1]==="!--"?n=X:p[1]!==void 0?n=Y:p[2]!==void 0?(ct.test(p[2])&&(s=RegExp("</"+p[2],"g")),n=g):p[3]!==void 0&&(n=g):n===g?p[0]===">"?(n=s??S,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,l=p[1],n=p[3]===void 0?g:p[3]==='"'?et:tt):n===et||n===tt?n=g:n===X||n===Y?n=S:(n=g,s=void 0);const f=n===g&&r[a+1].startsWith("/>")?" ":"";o+=n===S?h+Et:c>=0?(i.push(l),h.slice(0,c)+nt+h.slice(c)+$+f):h+$+(c===-2?a:f)}return[dt(r,o+(r[e]||"<?>")+(t===2?"</svg>":"")),i]};class O{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const a=t.length-1,h=this.parts,[l,p]=xt(t,e);if(this.el=O.createElement(l,i),m.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=m.nextNode())!==null&&h.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(nt)){const u=p[n++],f=s.getAttribute(c).split($),H=/([.?@])?(.*)/.exec(u);h.push({type:1,index:o,name:H[2],strings:f,ctor:H[1]==="."?Pt:H[1]==="?"?Ot:H[1]==="@"?Ut:L}),s.removeAttribute(c)}else c.startsWith($)&&(h.push({type:6,index:o}),s.removeAttribute(c));if(ct.test(s.tagName)){const c=s.textContent.split($),u=c.length-1;if(u>0){s.textContent=M?M.emptyScript:"";for(let f=0;f<u;f++)s.append(c[f],C()),m.nextNode(),h.push({type:2,index:++o});s.append(c[u],C())}}}else if(s.nodeType===8)if(s.data===ht)h.push({type:2,index:o});else{let c=-1;for(;(c=s.data.indexOf($,c+1))!==-1;)h.push({type:7,index:o}),c+=$.length-1}o++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function E(r,t,e=r,i){var n,a;if(t===b)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=P(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=E(r,s._$AS(r,t.values),s,i)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??y).importNode(e,!0);m.currentNode=s;let o=m.nextNode(),n=0,a=0,h=i[0];for(;h!==void 0;){if(n===h.index){let l;h.type===2?l=new T(o,o.nextSibling,this,t):h.type===1?l=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(l=new Tt(o,this,t)),this._$AV.push(l),h=i[++a]}n!==(h==null?void 0:h.index)&&(o=m.nextNode(),n++)}return m.currentNode=y,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class T{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=E(this,t,e),P(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):St(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(y.createTextNode(t)),this._$AH=t}g(t){var o;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=O.createElement(dt(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(e);else{const n=new Ct(s,this),a=n.u(this.options);n.p(e),this.$(a),this._$AH=n}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new O(t)),e}T(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new T(this.k(C()),this.k(C()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class L{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=E(this,t,e,0),n=!P(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else{const a=t;let h,l;for(t=o[0],h=0;h<o.length-1;h++)l=E(this,a[i+h],e,h),l===b&&(l=this._$AH[h]),n||(n=!P(l)||l!==this._$AH[h]),l===d?t=d:t!==d&&(t+=(l??"")+o[h+1]),this._$AH[h]=l}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Pt extends L{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ot extends L{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ut extends L{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=E(this,t,e,0)??d)===b)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t)}}const D=x.litHtmlPolyfillSupport;D==null||D(O,T),(x.litHtmlVersions??(x.litHtmlVersions=[])).push("3.0.0");const Ht=(r,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new T(t.insertBefore(C(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class A extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return b}}var it;A._$litElement$=!0,A.finalized=!0,(it=globalThis.litElementHydrateSupport)==null||it.call(globalThis,{LitElement:A});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:A});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:F},kt=(r=Nt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(a){const h=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,h,r)},init(a){return a!==void 0&&this.C(n,void 0,r),a}}}if(i==="setter"){const{name:n}=e;return function(a){const h=this[n];t.call(this,a),this.requestUpdate(n,h,r)}}throw Error("Unsupported decorator location: "+i)};function W(r){return(t,e)=>typeof e=="object"?kt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}const Mt="/FlashCards/assets/lit-c8dae599.svg",Rt="/FlashCards/vite.svg";var Lt=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,q=(r,t,e,i)=>{for(var s=i>1?void 0:i?jt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Lt(t,e,s),s};let U=class extends A{constructor(){super(...arguments),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0}render(){return lt`
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src=${Rt} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${Mt} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `}_onClick(){this.count++}};U.styles=ot`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;q([W()],U.prototype,"docsHint",2);q([W({type:Number})],U.prototype,"count",2);U=q([pt("my-element")],U);var zt=Object.defineProperty,Dt=Object.getOwnPropertyDescriptor,ut=(r,t,e,i)=>{for(var s=i>1?void 0:i?Dt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&zt(t,e,s),s};let R=class extends A{constructor(){super(...arguments),this.isFront=!0,this.front="front text",this.back="back text",this.cardText=this.front}render(){return lt`
		<div id="card-area" @click=${this._onClick}>
			${this.cardText}
		</div>
	`}clicker(r){this.isFront=!0,this.front=r.front,this.back=r.back,this.cardText=this.front}_onClick(){this.cardText=this.isFront?this.back:this.front,this.isFront=!this.isFront}};R.styles=ot`
	:host {
		max-width: 480px;
		max-height: 480px;
		margin: 0 auto;
		width: calc(40vw);
		height: calc(40vw);
		border: 0px solid black;
		font-size: 2.4rem;
		border-radius: 20px;
		box-shadow: 6px 6px 15px gray;
	}
	
	#card-area {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		box-sizing: border-box;
		
	}
	`;ut([W()],R.prototype,"cardText",2);R=ut([pt("card-elem")],R);(()=>{const r=document.getElementById("card"),t=document.getElementById("clicker");let e=0,i=[{front:"front0",back:"back0"},{front:"front1",back:"back1"}];t&&r&&t.addEventListener("click",()=>{e=++e%i.length,r.clicker(i[e])})})();
