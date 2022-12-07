var Yd=Object.defineProperty;var o=(t,e)=>Yd(t,"name",{value:e,configurable:!0});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=o(function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},"stringToByteArray$1"),Xd=o(function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],a=t[n++],c=t[n++],u=((i&7)<<18|(r&63)<<12|(a&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=t[n++],a=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},"byteArrayToString"),sc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],a=i+1<t.length,c=a?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,h=r>>2,d=(r&3)<<4|c>>4;let p=(c&15)<<2|l>>6,m=l&63;u||(m=64,a||(p=64)),s.push(n[h],n[d],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||c==null||l==null||d==null)throw Error();const p=r<<2|c>>4;if(s.push(p),l!==64){const m=c<<4&240|l>>2;if(s.push(m),d!==64){const v=l<<6&192|d;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Jd=o(function(t){const e=nc(t);return sc.encodeByteArray(e,!0)},"base64Encode"),ps=o(function(t){return Jd(t).replace(/\./g,"")},"base64urlEncodeWithoutPadding"),ic=o(function(t){try{return sc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},"base64Decode");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}o(se,"getUA");function Zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}o(Zd,"isMobileCordova");function rc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}o(rc,"isBrowserExtension");function ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}o(ef,"isReactNative");function tf(){const t=se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}o(tf,"isIE");function oc(){return typeof indexedDB=="object"}o(oc,"isIndexedDBAvailable");function ac(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}o(ac,"validateIndexedDBOpenable");function nf(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}o(nf,"areCookiesEnabled");function sf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}o(sf,"getGlobal");/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=o(()=>sf().__FIREBASE_DEFAULTS__,"getDefaultsFromGlobal"),of=o(()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},"getDefaultsFromEnvVariable"),af=o(()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ic(t[1]);return e&&JSON.parse(e)},"getDefaultsFromCookie"),Sr=o(()=>{try{return rf()||of()||af()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},"getDefaults"),cc=o(t=>{var e,n;return(n=(e=Sr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},"getDefaultEmulatorHost"),cf=o(t=>{const e=cc(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},"getDefaultEmulatorHostnameAndPort"),uf=o(()=>{var t;return(t=Sr())===null||t===void 0?void 0:t.config},"getDefaultAppConfig"),uc=o(t=>{var e;return(e=Sr())===null||e===void 0?void 0:e[`_${t}`]},"getExperimentalSetting");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}o(lc,"Deferred");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[ps(JSON.stringify(n)),ps(JSON.stringify(a)),c].join(".")}o(lf,"createMockUserToken");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf="FirebaseError";class fe extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=hf,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qe.prototype.create)}}o(fe,"FirebaseError");class Qe{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?df(r,s):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new fe(i,c,s)}}o(Qe,"ErrorFactory");function df(t,e){return t.replace(ff,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}o(df,"replaceTemplate");const ff=/\{\$([^}]+)}/g;function pf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}o(pf,"isEmpty");function yn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],a=e[i];if(Fo(r)&&Fo(a)){if(!yn(r,a))return!1}else if(r!==a)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}o(yn,"deepEqual");function Fo(t){return t!==null&&typeof t=="object"}o(Fo,"isObject");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}o(Nn,"querystring");function tn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}o(tn,"querystringDecode");function nn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}o(nn,"extractQuerystring");function gf(t,e){const n=new hc(t,e);return n.subscribe.bind(n)}o(gf,"createSubscribe");class hc{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");mf(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ei),i.error===void 0&&(i.error=Ei),i.complete===void 0&&(i.complete=Ei);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}o(hc,"ObserverProxy");function mf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}o(mf,"implementsAnyMethods");function Ei(){}o(Ei,"noop");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=1e3,vf=2,wf=4*60*60*1e3,If=.5;function Vo(t,e=yf,n=vf){const s=e*Math.pow(n,t),i=Math.round(If*s*(Math.random()-.5)*2);return Math.min(wf,s+i)}o(Vo,"calculateBackoffMillis");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){return t&&t._delegate?t._delegate:t}o(X,"getModularInstance");class he{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}o(he,"Component");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new lc;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tf(e))try{this.getOrInitializeService({instanceIdentifier:et})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=et){return this.instances.has(e)}getOptions(e=et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&a.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ef(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=et){return this.component?this.component.multipleInstances?e:et:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}o(dc,"Provider");function Ef(t){return t===et?void 0:t}o(Ef,"normalizeIdentifierForFactory");function Tf(t){return t.instantiationMode==="EAGER"}o(Tf,"isComponentEager");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new dc(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}o(fc,"ComponentContainer");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(N||(N={}));const _f={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},bf=N.INFO,Sf={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Af=o((t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Sf[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},"defaultLogHandler");class On{constructor(e){this.name=e,this._logLevel=bf,this._logHandler=Af,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_f[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}o(On,"Logger");const Cf=o((t,e)=>e.some(n=>t instanceof n),"instanceOfAny");let $o,Bo;function kf(){return $o||($o=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}o(kf,"getIdbProxyableTypes");function Df(){return Bo||(Bo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}o(Df,"getCursorAdvanceMethods");const pc=new WeakMap,Bi=new WeakMap,gc=new WeakMap,Ti=new WeakMap,Ar=new WeakMap;function Rf(t){const e=new Promise((n,s)=>{const i=o(()=>{t.removeEventListener("success",r),t.removeEventListener("error",a)},"unlisten"),r=o(()=>{n(Be(t.result)),i()},"success"),a=o(()=>{s(t.error),i()},"error");t.addEventListener("success",r),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&pc.set(n,t)}).catch(()=>{}),Ar.set(e,t),e}o(Rf,"promisifyRequest");function Nf(t){if(Bi.has(t))return;const e=new Promise((n,s)=>{const i=o(()=>{t.removeEventListener("complete",r),t.removeEventListener("error",a),t.removeEventListener("abort",a)},"unlisten"),r=o(()=>{n(),i()},"complete"),a=o(()=>{s(t.error||new DOMException("AbortError","AbortError")),i()},"error");t.addEventListener("complete",r),t.addEventListener("error",a),t.addEventListener("abort",a)});Bi.set(t,e)}o(Nf,"cacheDonePromiseForTransaction");let ji={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Of(t){ji=t(ji)}o(Of,"replaceTraps");function Lf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_i(this),e,...n);return gc.set(s,e.sort?e.sort():[e]),Be(s)}:Df().includes(t)?function(...e){return t.apply(_i(this),e),Be(pc.get(this))}:function(...e){return Be(t.apply(_i(this),e))}}o(Lf,"wrapFunction");function Mf(t){return typeof t=="function"?Lf(t):(t instanceof IDBTransaction&&Nf(t),Cf(t,kf())?new Proxy(t,ji):t)}o(Mf,"transformCachableValue");function Be(t){if(t instanceof IDBRequest)return Rf(t);if(Ti.has(t))return Ti.get(t);const e=Mf(t);return e!==t&&(Ti.set(t,e),Ar.set(e,t)),e}o(Be,"wrap");const _i=o(t=>Ar.get(t),"unwrap");function mc(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const a=indexedDB.open(t,e),c=Be(a);return s&&a.addEventListener("upgradeneeded",u=>{s(Be(a.result),u.oldVersion,u.newVersion,Be(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),c.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),c}o(mc,"openDB");const Pf=["get","getKey","getAll","getAllKeys","count"],xf=["put","add","delete","clear"],bi=new Map;function jo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bi.get(e))return bi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=xf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Pf.includes(n)))return;const r=o(async function(a,...c){const u=this.transaction(a,i?"readwrite":"readonly");let l=u.store;return s&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),i&&u.done]))[0]},"method");return bi.set(e,r),r}o(jo,"getMethod");Of(t=>({...t,get:(e,n,s)=>jo(e,n)||t.get(e,n,s),has:(e,n)=>!!jo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Uf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}o(yc,"PlatformLoggerServiceImpl");function Uf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}o(Uf,"isVersionServiceProvider");const qi="@firebase/app",qo="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new On("@firebase/app"),Ff="@firebase/app-compat",Vf="@firebase/analytics-compat",$f="@firebase/analytics",Bf="@firebase/app-check-compat",jf="@firebase/app-check",qf="@firebase/auth",Hf="@firebase/auth-compat",Kf="@firebase/database",zf="@firebase/database-compat",Gf="@firebase/functions",Wf="@firebase/functions-compat",Qf="@firebase/installations",Yf="@firebase/installations-compat",Xf="@firebase/messaging",Jf="@firebase/messaging-compat",Zf="@firebase/performance",ep="@firebase/performance-compat",tp="@firebase/remote-config",np="@firebase/remote-config-compat",sp="@firebase/storage",ip="@firebase/storage-compat",rp="@firebase/firestore",op="@firebase/firestore-compat",ap="firebase",cp="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi="[DEFAULT]",up={[qi]:"fire-core",[Ff]:"fire-core-compat",[$f]:"fire-analytics",[Vf]:"fire-analytics-compat",[jf]:"fire-app-check",[Bf]:"fire-app-check-compat",[qf]:"fire-auth",[Hf]:"fire-auth-compat",[Kf]:"fire-rtdb",[zf]:"fire-rtdb-compat",[Gf]:"fire-fn",[Wf]:"fire-fn-compat",[Qf]:"fire-iid",[Yf]:"fire-iid-compat",[Xf]:"fire-fcm",[Jf]:"fire-fcm-compat",[Zf]:"fire-perf",[ep]:"fire-perf-compat",[tp]:"fire-rc",[np]:"fire-rc-compat",[sp]:"fire-gcs",[ip]:"fire-gcs-compat",[rp]:"fire-fst",[op]:"fire-fst-compat","fire-js":"fire-js",[ap]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=new Map,Ki=new Map;function lp(t,e){try{t.container.addComponent(e)}catch(n){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}o(lp,"_addComponent");function we(t){const e=t.name;if(Ki.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;Ki.set(e,t);for(const n of gs.values())lp(n,t);return!0}o(we,"_registerComponent");function mt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}o(mt,"_getProvider");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},je=new Qe("app","Firebase",hp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new he("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}o(vc,"FirebaseAppImpl");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=cp;function wc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw je.create("bad-app-name",{appName:String(i)});if(n||(n=uf()),!n)throw je.create("no-options");const r=gs.get(i);if(r){if(yn(n,r.options)&&yn(s,r.config))return r;throw je.create("duplicate-app",{appName:i})}const a=new fc(i);for(const u of Ki.values())a.addComponent(u);const c=new vc(n,s,a);return gs.set(i,c),c}o(wc,"initializeApp");function Cr(t=Hi){const e=gs.get(t);if(!e&&t===Hi)return wc();if(!e)throw je.create("no-app",{appName:t});return e}o(Cr,"getApp");function ue(t,e,n){var s;let i=(s=up[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const c=[`Unable to register library "${i}" with version "${e}":`];r&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(c.join(" "));return}we(new he(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}o(ue,"registerVersion");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="firebase-heartbeat-database",fp=1,vn="firebase-heartbeat-store";let Si=null;function Ic(){return Si||(Si=mc(dp,fp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vn)}}}).catch(t=>{throw je.create("idb-open",{originalErrorMessage:t.message})})),Si}o(Ic,"getDbPromise$1");async function pp(t){var e;try{return(await Ic()).transaction(vn).objectStore(vn).get(Ec(t))}catch(n){if(n instanceof fe)ct.warn(n.message);else{const s=je.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});ct.warn(s.message)}}}o(pp,"readHeartbeatsFromIndexedDB");async function Ho(t,e){var n;try{const i=(await Ic()).transaction(vn,"readwrite");return await i.objectStore(vn).put(e,Ec(t)),i.done}catch(s){if(s instanceof fe)ct.warn(s.message);else{const i=je.create("idb-set",{originalErrorMessage:(n=s)===null||n===void 0?void 0:n.message});ct.warn(i.message)}}}o(Ho,"writeHeartbeatsToIndexedDB");function Ec(t){return`${t.name}!${t.options.appId}`}o(Ec,"computeKey");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=1024,mp=30*24*60*60*1e3;class Tc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _c(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ko();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=mp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ko(),{heartbeatsToSend:n,unsentEntries:s}=yp(this._heartbeatsCache.heartbeats),i=ps(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}o(Tc,"HeartbeatServiceImpl");function Ko(){return new Date().toISOString().substring(0,10)}o(Ko,"getUTCDateString");function yp(t,e=gp){const n=[];let s=t.slice();for(const i of t){const r=n.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),zo(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}o(yp,"extractHeartbeatsForHeader");class _c{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oc()?ac().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ho(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ho(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}o(_c,"HeartbeatStorageImpl");function zo(t){return ps(JSON.stringify({version:2,heartbeats:t})).length}o(zo,"countBytes");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t){we(new he("platform-logger",e=>new yc(e),"PRIVATE")),we(new he("heartbeat",e=>new Tc(e),"PRIVATE")),ue(qi,qo,t),ue(qi,qo,"esm2017"),ue("fire-js","")}o(vp,"registerCoreComponents");vp("");var wp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,kr=kr||{},_=wp||self;function ms(){}o(ms,"aa");function Ls(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}o(Ls,"ba");function Mn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}o(Mn,"p");function Ip(t){return Object.prototype.hasOwnProperty.call(t,Ai)&&t[Ai]||(t[Ai]=++Ep)}o(Ip,"ca");var Ai="closure_uid_"+(1e9*Math.random()>>>0),Ep=0;function Tp(t,e,n){return t.call.apply(t.bind,arguments)}o(Tp,"fa");function _p(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}o(_p,"ha");function te(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?te=Tp:te=_p,te.apply(null,arguments)}o(te,"q$1");function ns(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}o(ns,"ia");function Z(t,e){function n(){}o(n,"c"),n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var a=Array(arguments.length-2),c=2;c<arguments.length;c++)a[c-2]=arguments[c];return e.prototype[i].apply(s,a)}}o(Z,"t");function Ye(){this.s=this.s,this.o=this.o}o(Ye,"v$1");var bp=0;Ye.prototype.s=!1;Ye.prototype.na=function(){!this.s&&(this.s=!0,this.M(),bp!=0)&&Ip(this)};Ye.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}o(Dr,"ma$1");function Go(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ls(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let a=0;a<r;a++)t[i+a]=s[a]}else t.push(s)}}o(Go,"na");function ne(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}o(ne,"w");ne.prototype.h=function(){this.defaultPrevented=!0};var Sp=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{_.addEventListener("test",ms,e),_.removeEventListener("test",ms,e)}catch{}return t}();function ys(t){return/^[\s\xa0]*$/.test(t)}o(ys,"pa");var Wo=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ci(t,e){return t<e?-1:t>e?1:0}o(Ci,"ra");function Ms(){var t=_.navigator;return t&&(t=t.userAgent)?t:""}o(Ms,"sa$1");function me(t){return Ms().indexOf(t)!=-1}o(me,"x$1");function Rr(t){return Rr[" "](t),t}o(Rr,"ta$1");Rr[" "]=ms;function Ap(t){var e=Dp;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}o(Ap,"ua$1");var Cp=me("Opera"),Ct=me("Trident")||me("MSIE"),Sc=me("Edge"),zi=Sc||Ct,Ac=me("Gecko")&&!(Ms().toLowerCase().indexOf("webkit")!=-1&&!me("Edge"))&&!(me("Trident")||me("MSIE"))&&!me("Edge"),kp=Ms().toLowerCase().indexOf("webkit")!=-1&&!me("Edge");function Cc(){var t=_.document;return t?t.documentMode:void 0}o(Cc,"Ba");var vs;e:{var ki="",Di=function(){var t=Ms();if(Ac)return/rv:([^\);]+)(\)|;)/.exec(t);if(Sc)return/Edge\/([\d\.]+)/.exec(t);if(Ct)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(kp)return/WebKit\/(\S+)/.exec(t);if(Cp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Di&&(ki=Di?Di[1]:""),Ct){var Ri=Cc();if(Ri!=null&&Ri>parseFloat(ki)){vs=String(Ri);break e}}vs=ki}var Dp={};function Rp(){return Ap(function(){let t=0;const e=Wo(String(vs)).split("."),n=Wo("9").split("."),s=Math.max(e.length,n.length);for(let a=0;t==0&&a<s;a++){var i=e[a]||"",r=n[a]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Ci(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ci(i[2].length==0,r[2].length==0)||Ci(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}o(Rp,"Ia");var Gi;if(_.document&&Ct){var Qo=Cc();Gi=Qo||parseInt(vs,10)||void 0}else Gi=void 0;var Np=Gi;function wn(t,e){if(ne.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ac){e:{try{Rr(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Op[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&wn.X.h.call(this)}}o(wn,"z$1");Z(wn,ne);var Op={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pn="closure_listenable_"+(1e6*Math.random()|0),Lp=0;function Mp(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++Lp,this.ba=this.ea=!1}o(Mp,"Oa");function Ps(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}o(Ps,"Pa");function Nr(t,e,n){for(const s in t)e.call(n,t[s],s,t)}o(Nr,"Qa");function kc(t){const e={};for(const n in t)e[n]=t[n];return e}o(kc,"Ra$1");const Yo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Dc(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Yo.length;r++)n=Yo[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}o(Dc,"Ta");function xs(t){this.src=t,this.g={},this.h=0}o(xs,"Ua$1");xs.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var a=Qi(t,e,s,i);return-1<a?(e=t[a],n||(e.ea=!1)):(e=new Mp(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Wi(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=bc(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Ps(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}o(Wi,"Wa");function Qi(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}o(Qi,"Va");var Or="closure_lm_"+(1e6*Math.random()|0),Ni={};function Rc(t,e,n,s,i){if(s&&s.once)return Oc(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Rc(t,e[r],n,s,i);return null}return n=Pr(n),t&&t[Pn]?t.N(e,n,Mn(s)?!!s.capture:!!s,i):Nc(t,e,n,!1,s,i)}o(Rc,"$a$1");function Nc(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var a=Mn(i)?!!i.capture:!!i,c=Mr(t);if(c||(t[Or]=c=new xs(t)),n=c.add(e,n,s,a,r),n.proxy)return n;if(s=Pp(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Sp||(i=a),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Mc(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}o(Nc,"cb");function Pp(){function t(n){return e.call(t.src,t.listener,n)}o(t,"a");const e=xp;return t}o(Pp,"eb");function Oc(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Oc(t,e[r],n,s,i);return null}return n=Pr(n),t&&t[Pn]?t.O(e,n,Mn(s)?!!s.capture:!!s,i):Nc(t,e,n,!0,s,i)}o(Oc,"ab");function Lc(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Lc(t,e[r],n,s,i);else s=Mn(s)?!!s.capture:!!s,n=Pr(n),t&&t[Pn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Qi(r,n,s,i),-1<n&&(Ps(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Mr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qi(e,n,s,i)),(n=-1<t?e[t]:null)&&Lr(n))}o(Lc,"hb");function Lr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Pn])Wi(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Mc(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Mr(e))?(Wi(n,t),n.h==0&&(n.src=null,e[Or]=null)):Ps(t)}}}o(Lr,"ib");function Mc(t){return t in Ni?Ni[t]:Ni[t]="on"+t}o(Mc,"fb");function xp(t,e){if(t.ba)t=!0;else{e=new wn(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Lr(t),t=n.call(s,e)}return t}o(xp,"gb");function Mr(t){return t=t[Or],t instanceof xs?t:null}o(Mr,"db$1");var Oi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pr(t){return typeof t=="function"?t:(t[Oi]||(t[Oi]=function(e){return t.handleEvent(e)}),t[Oi])}o(Pr,"bb");function G(){Ye.call(this),this.i=new xs(this),this.P=this,this.I=null}o(G,"B$1");Z(G,Ye);G.prototype[Pn]=!0;G.prototype.removeEventListener=function(t,e,n,s){Lc(this,t,e,n,s)};function Y(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ne(e,t);else if(e instanceof ne)e.target=e.target||t;else{var i=e;e=new ne(s,t),Dc(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var a=e.g=n[r];i=ss(a,s,!0,e)&&i}if(a=e.g=t,i=ss(a,s,!0,e)&&i,i=ss(a,s,!1,e)&&i,n)for(r=0;r<n.length;r++)a=e.g=n[r],i=ss(a,s,!1,e)&&i}o(Y,"C$1");G.prototype.M=function(){if(G.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ps(n[s]);delete t.g[e],t.h--}}this.I=null};G.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};G.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ss(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var a=e[r];if(a&&!a.ba&&a.capture==n){var c=a.listener,u=a.ha||a.src;a.ea&&Wi(t.i,a),i=c.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}o(ss,"kb");var xr=_.JSON.stringify;function Up(){var t=Vc;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}o(Up,"mb");class Pc{constructor(){this.h=this.g=null}add(e,n){const s=xc.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}o(Pc,"ob");var xc=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Uc,t=>t.reset());class Uc{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}o(Uc,"qb");function Fp(t){_.setTimeout(()=>{throw t},0)}o(Fp,"rb");function Fc(t,e){Yi||Vp(),Xi||(Yi(),Xi=!0),Vc.add(t,e)}o(Fc,"sb");var Yi;function Vp(){var t=_.Promise.resolve(void 0);Yi=o(function(){t.then($p)},"ub")}o(Vp,"vb");var Xi=!1,Vc=new Pc;function $p(){for(var t;t=Up();){try{t.h.call(t.g)}catch(n){Fp(n)}var e=xc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xi=!1}o($p,"xb");function Us(t,e){G.call(this),this.h=t||1,this.g=e||_,this.j=te(this.lb,this),this.l=Date.now()}o(Us,"yb");Z(Us,G);w=Us.prototype;w.ca=!1;w.R=null;w.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Y(this,"tick"),this.ca&&(Ur(this),this.start()))}};w.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ur(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}o(Ur,"zb");w.M=function(){Us.X.M.call(this),Ur(this),delete this.g};function Fr(t,e,n){if(typeof t=="function")n&&(t=te(t,n));else if(t&&typeof t.handleEvent=="function")t=te(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:_.setTimeout(t,e||0)}o(Fr,"Ab");function $c(t){t.g=Fr(()=>{t.g=null,t.i&&(t.i=!1,$c(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}o($c,"Bb");class Bc extends Ye{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$c(this)}M(){super.M(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}o(Bc,"Cb");function In(t){Ye.call(this),this.h=t,this.g={}}o(In,"D");Z(In,Ye);var Xo=[];function jc(t,e,n,s){Array.isArray(n)||(n&&(Xo[0]=n.toString()),n=Xo);for(var i=0;i<n.length;i++){var r=Rc(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}o(jc,"Eb");function qc(t){Nr(t.g,function(e,n){this.g.hasOwnProperty(n)&&Lr(e)},t),t.g={}}o(qc,"Fb");In.prototype.M=function(){In.X.M.call(this),qc(this)};In.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fs(){this.g=!0}o(Fs,"Gb");Fs.prototype.Aa=function(){this.g=!1};function Bp(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var a="",c=r.split("&"),u=0;u<c.length;u++){var l=c[u].split("=");if(1<l.length){var h=l[0];l=l[1];var d=h.split("_");a=2<=d.length&&d[1]=="type"?a+(h+"="+l+"&"):a+(h+"=redacted&")}}else a=null;else a=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+a})}o(Bp,"Hb");function jp(t,e,n,s,i,r,a){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+a})}o(jp,"Ib");function Tt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Hp(t,n)+(s?" "+s:"")})}o(Tt,"E");function qp(t,e){t.info(function(){return"TIMEOUT: "+e})}o(qp,"Kb");Fs.prototype.info=function(){};function Hp(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var a=1;a<i.length;a++)i[a]=""}}}}return xr(n)}catch{return e}}o(Hp,"Jb");var yt={},Jo=null;function Vs(){return Jo=Jo||new G}o(Vs,"Mb");yt.Pa="serverreachability";function Hc(t){ne.call(this,yt.Pa,t)}o(Hc,"Nb");Z(Hc,ne);function En(t){const e=Vs();Y(e,new Hc(e))}o(En,"H$1");yt.STAT_EVENT="statevent";function Kc(t,e){ne.call(this,yt.STAT_EVENT,t),this.stat=e}o(Kc,"Ob");Z(Kc,ne);function ie(t){const e=Vs();Y(e,new Kc(e,t))}o(ie,"I");yt.Qa="timingevent";function zc(t,e){ne.call(this,yt.Qa,t),this.size=e}o(zc,"Pb");Z(zc,ne);function xn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){t()},e)}o(xn,"J");var $s={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Gc={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Vr(){}o(Vr,"Sb");Vr.prototype.h=null;function Zo(t){return t.h||(t.h=t.i())}o(Zo,"Tb");function Wc(){}o(Wc,"Ub");var Un={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function $r(){ne.call(this,"d")}o($r,"Vb");Z($r,ne);function Br(){ne.call(this,"c")}o(Br,"Wb");Z(Br,ne);var Ji;function Bs(){}o(Bs,"Yb");Z(Bs,Vr);Bs.prototype.g=function(){return new XMLHttpRequest};Bs.prototype.i=function(){return{}};Ji=new Bs;function Fn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new In(this),this.O=Kp,t=zi?125:void 0,this.T=new Us(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qc}o(Fn,"L$1");function Qc(){this.i=null,this.g="",this.h=!1}o(Qc,"$b");var Kp=45e3,Zi={},ws={};w=Fn.prototype;w.setTimeout=function(t){this.O=t};function er(t,e,n){t.K=1,t.v=qs(Oe(e)),t.s=n,t.P=!0,Yc(t,null)}o(er,"cc$1");function Yc(t,e){t.F=Date.now(),Vn(t),t.A=Oe(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),iu(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Qc,t.g=Su(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Bc(te(t.La,t,t.g),t.N)),jc(t.S,t.g,"readystatechange",t.ib),e=t.H?kc(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),En(),Bp(t.j,t.u,t.A,t.m,t.U,t.s)}o(Yc,"ec$1");w.ib=function(t){t=t.target;const e=this.L;e&&Ae(t)==3?e.l():this.La(t)};w.La=function(t){try{if(t==this.g)e:{const h=Ae(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>h)&&(h!=3||zi||this.g&&(this.h.h||this.g.fa()||sa(this.g)))){this.I||h!=4||e==7||(e==8||0>=d?En(3):En(2)),js(this);var n=this.g.aa();this.Y=n;t:if(Xc(this)){var s=sa(this.g);t="";var i=s.length,r=Ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tt(this),un(this);var a="";break t}this.h.i=new _.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=n==200,jp(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ys(c)){var l=c;break t}}l=null}if(n=l)Tt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tr(this,n);else{this.i=!1,this.o=3,ie(12),tt(this),un(this);break e}}this.P?(Jc(this,h,a),zi&&this.i&&h==3&&(jc(this.S,this.T,"tick",this.hb),this.T.start())):(Tt(this.j,this.m,a,null),tr(this,a)),h==4&&tt(this),this.i&&!this.I&&(h==4?Eu(this.l,this):(this.i=!1,Vn(this)))}else n==400&&0<a.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),tt(this),un(this)}}}catch{}finally{}};function Xc(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}o(Xc,"jc$1");function Jc(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=zp(t,n),i==ws){e==4&&(t.o=4,ie(14),s=!1),Tt(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Zi){t.o=4,ie(15),Tt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Tt(t.j,t.m,i,null),tr(t,i);Xc(t)&&i!=ws&&i!=Zi&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ie(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wr(e),e.K=!0,ie(11))):(Tt(t.j,t.m,n,"[Invalid Chunked Response]"),tt(t),un(t))}o(Jc,"lc$1");w.hb=function(){if(this.g){var t=Ae(this.g),e=this.g.fa();this.C<e.length&&(js(this),Jc(this,t,e),this.i&&t!=4&&Vn(this))}};function zp(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ws:(n=Number(e.substring(n,s)),isNaN(n)?Zi:(s+=1,s+n>e.length?ws:(e=e.substr(s,n),t.C=s+n,e)))}o(zp,"nc$1");w.cancel=function(){this.I=!0,tt(this)};function Vn(t){t.V=Date.now()+t.O,Zc(t,t.O)}o(Vn,"N$1");function Zc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=xn(te(t.gb,t),e)}o(Zc,"pc$1");function js(t){t.B&&(_.clearTimeout(t.B),t.B=null)}o(js,"ic$1");w.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(qp(this.j,this.A),this.K!=2&&(En(),ie(17)),tt(this),this.o=2,un(this)):Zc(this,this.V-t)};function un(t){t.l.G==0||t.I||Eu(t.l,t)}o(un,"Q$1");function tt(t){js(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Ur(t.T),qc(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}o(tt,"P$1");function tr(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||nr(n.h,t))){if(!t.J&&nr(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ts(n),zs(n);else break e;Gr(n),ie(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=xn(te(n.cb,n),6e3));if(1>=au(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else nt(n,11)}else if((t.J||n.g==t)&&Ts(n),!ys(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const h=l[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const d=l[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var r=s.h;r.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(jr(r,r.h),r.h=null))}if(s.D){const A=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.za=A,P(s.F,s.D,A))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var a=t;if(s.sa=bu(s,s.H?s.ka:null,s.V),a.J){cu(s.h,a);var c=a,u=s.J;u&&c.setTimeout(u),c.B&&(js(c),Vn(c)),s.g=a}else wu(s);0<n.i.length&&Gs(n)}else l[0]!="stop"&&l[0]!="close"||nt(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?nt(n,7):zr(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}En(4)}catch{}}o(tr,"kc$1");function Gp(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ls(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}o(Gp,"Bc");function Wp(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ls(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}o(Wp,"Cc");function eu(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ls(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Wp(t),s=Gp(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}o(eu,"Dc");var tu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}o(Qp,"Fc$1");function rt(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rt){this.h=e!==void 0?e:t.h,Is(this,t.j),this.s=t.s,this.g=t.g,Es(this,t.m),this.l=t.l,e=t.i;var n=new Tn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ea(this,n),this.o=t.o}else t&&(n=String(t).match(tu))?(this.h=!!e,Is(this,n[1]||"",!0),this.s=sn(n[2]||""),this.g=sn(n[3]||"",!0),Es(this,n[4]),this.l=sn(n[5]||"",!0),ea(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.h=!!e,this.i=new Tn(null,this.h))}o(rt,"T");rt.prototype.toString=function(){var t=[],e=this.j;e&&t.push(rn(e,ta,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(rn(e,ta,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(rn(n,n.charAt(0)=="/"?Jp:Xp,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",rn(n,eg)),t.join("")};function Oe(t){return new rt(t)}o(Oe,"M$1");function Is(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}o(Is,"Gc$1");function Es(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}o(Es,"Hc$1");function ea(t,e,n){e instanceof Tn?(t.i=e,tg(t.i,t.h)):(n||(e=rn(e,Zp)),t.i=new Tn(e,t.h))}o(ea,"Jc$1");function P(t,e,n){t.i.set(e,n)}o(P,"S$1");function qs(t){return P(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}o(qs,"dc$1");function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}o(sn,"Kc$1");function rn(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Yp),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}o(rn,"Lc$1");function Yp(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}o(Yp,"Sc");var ta=/[#\/\?@]/g,Xp=/[#\?:]/g,Jp=/[#\?]/g,Zp=/[#\?@]/g,eg=/#/g;function Tn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}o(Tn,"Ic$1");function Xe(t){t.g||(t.g=new Map,t.h=0,t.i&&Qp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}o(Xe,"U$1");w=Tn.prototype;w.add=function(t,e){Xe(this),this.i=null,t=Vt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function nu(t,e){Xe(t),e=Vt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}o(nu,"Tc$1");function su(t,e){return Xe(t),e=Vt(t,e),t.g.has(e)}o(su,"Uc$1");w.forEach=function(t,e){Xe(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};w.oa=function(){Xe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};w.W=function(t){Xe(this);let e=[];if(typeof t=="string")su(this,t)&&(e=e.concat(this.g.get(Vt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};w.set=function(t,e){return Xe(this),this.i=null,t=Vt(this,t),su(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};w.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function iu(t,e,n){nu(t,e),0<n.length&&(t.i=null,t.g.set(Vt(t,e),Dr(n)),t.h+=n.length)}o(iu,"fc$1");w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),a=this.W(s);for(s=0;s<a.length;s++){var i=r;a[s]!==""&&(i+="="+encodeURIComponent(String(a[s]))),t.push(i)}}return this.i=t.join("&")};function Vt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}o(Vt,"V$1");function tg(t,e){e&&!t.j&&(Xe(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(nu(this,s),iu(this,i,n))},t)),t.j=e}o(tg,"Qc$1");var ng=o(class{constructor(t,e){this.h=t,this.g=e}},"Vc");function ru(t){this.l=t||sg,_.PerformanceNavigationTiming?(t=_.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(_.g&&_.g.Ga&&_.g.Ga()&&_.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}o(ru,"Wc");var sg=10;function ou(t){return t.h?!0:t.g?t.g.size>=t.j:!1}o(ou,"Yc$1");function au(t){return t.h?1:t.g?t.g.size:0}o(au,"uc$1");function nr(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}o(nr,"qc$1");function jr(t,e){t.g?t.g.add(e):t.h=e}o(jr,"vc");function cu(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}o(cu,"xc");ru.prototype.cancel=function(){if(this.i=uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function uu(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Dr(t.i)}o(uu,"Zc$1");function qr(){}o(qr,"$c");qr.prototype.stringify=function(t){return _.JSON.stringify(t,void 0)};qr.prototype.parse=function(t){return _.JSON.parse(t,void 0)};function ig(){this.g=new qr}o(ig,"ad");function rg(t,e,n){const s=n||"";try{eu(t,function(i,r){let a=i;Mn(i)&&(a=xr(i)),e.push(s+r+"="+encodeURIComponent(a))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}o(rg,"bd");function og(t,e){const n=new Fs;if(_.Image){const s=new Image;s.onload=ns(is,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ns(is,n,s,"TestLoadImage: error",!1,e),s.onabort=ns(is,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ns(is,n,s,"TestLoadImage: timeout",!1,e),_.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}o(og,"cd");function is(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}o(is,"dd");function $n(t){this.l=t.ac||null,this.j=t.jb||!1}o($n,"ed");Z($n,Vr);$n.prototype.g=function(){return new Hs(this.l,this.j)};$n.prototype.i=function(t){return function(){return t}}({});function Hs(t,e){G.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Hr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}o(Hs,"fd");Z(Hs,G);var Hr=0;w=Hs.prototype;w.open=function(t,e){if(this.readyState!=Hr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_n(this)};w.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||_).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bn(this)),this.readyState=Hr};w.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_n(this)),this.g&&(this.readyState=3,_n(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lu(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function lu(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}o(lu,"jd");w.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bn(this):_n(this),this.readyState==3&&lu(this)}};w.Va=function(t){this.g&&(this.response=this.responseText=t,Bn(this))};w.Ua=function(t){this.g&&(this.response=t,Bn(this))};w.ga=function(){this.g&&Bn(this)};function Bn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_n(t)}o(Bn,"id");w.setRequestHeader=function(t,e){this.v.append(t,e)};w.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function _n(t){t.onreadystatechange&&t.onreadystatechange.call(t)}o(_n,"hd");Object.defineProperty(Hs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ag=_.JSON.parse;function U(t){G.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hu,this.K=this.L=!1}o(U,"W$1");Z(U,G);var hu="",cg=/^https?$/i,ug=["POST","PUT"];w=U.prototype;w.Ka=function(t){this.L=t};w.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ji.g(),this.C=this.u?Zo(this.u):Zo(Ji),this.g.onreadystatechange=te(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){na(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=_.FormData&&t instanceof _.FormData,!(0<=bc(ug,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,a]of n)this.g.setRequestHeader(r,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pu(this),0<this.B&&((this.K=lg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=te(this.qa,this)):this.A=Fr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){na(this,r)}};function lg(t){return Ct&&Rp()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}o(lg,"qd");w.qa=function(){typeof kr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Y(this,"timeout"),this.abort(8))};function na(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,du(t),Ks(t)}o(na,"od");function du(t){t.D||(t.D=!0,Y(t,"complete"),Y(t,"error"))}o(du,"rd");w.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Y(this,"complete"),Y(this,"abort"),Ks(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ks(this,!0)),U.X.M.call(this)};w.Ha=function(){this.s||(this.F||this.v||this.l?fu(this):this.fb())};w.fb=function(){fu(this)};function fu(t){if(t.h&&typeof kr<"u"&&(!t.C[1]||Ae(t)!=4||t.aa()!=2)){if(t.v&&Ae(t)==4)Fr(t.Ha,0,t);else if(Y(t,"readystatechange"),Ae(t)==4){t.h=!1;try{const c=t.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=c===0){var i=String(t.H).match(tu)[1]||null;if(!i&&_.self&&_.self.location){var r=_.self.location.protocol;i=r.substr(0,r.length-1)}s=!cg.test(i?i.toLowerCase():"")}n=s}if(n)Y(t,"complete"),Y(t,"success");else{t.m=6;try{var a=2<Ae(t)?t.g.statusText:""}catch{a=""}t.j=a+" ["+t.aa()+"]",du(t)}}finally{Ks(t)}}}}o(fu,"td");function Ks(t,e){if(t.g){pu(t);const n=t.g,s=t.C[0]?ms:null;t.g=null,t.C=null,e||Y(t,"ready");try{n.onreadystatechange=s}catch{}}}o(Ks,"sd");function pu(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(_.clearTimeout(t.A),t.A=null)}o(pu,"pd");function Ae(t){return t.g?t.g.readyState:0}o(Ae,"O$1");w.aa=function(){try{return 2<Ae(this)?this.g.status:-1}catch{return-1}};w.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ag(e)}};function sa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hu:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}o(sa,"hc$1");w.Ea=function(){return this.m};w.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gu(t){let e="";return Nr(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}o(gu,"ud");function Kr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=gu(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):P(t,e,n))}o(Kr,"vd");function en(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}o(en,"wd");function mu(t){this.Ca=0,this.i=[],this.j=new Fs,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=en("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=en("baseRetryDelayMs",5e3,t),this.bb=en("retryDelaySeedMs",1e4,t),this.$a=en("forwardChannelMaxRetries",2,t),this.ta=en("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ru(t&&t.concurrentRequestLimit),this.Fa=new ig,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}o(mu,"xd");w=mu.prototype;w.ma=8;w.G=1;function zr(t){if(yu(t),t.G==3){var e=t.U++,n=Oe(t.F);P(n,"SID",t.I),P(n,"RID",e),P(n,"TYPE","terminate"),jn(t,n),e=new Fn(t,t.j,e,void 0),e.K=2,e.v=qs(Oe(n)),n=!1,_.navigator&&_.navigator.sendBeacon&&(n=_.navigator.sendBeacon(e.v.toString(),"")),!n&&_.Image&&(new Image().src=e.v,n=!0),n||(e.g=Su(e.l,null),e.g.da(e.v)),e.F=Date.now(),Vn(e)}_u(t)}o(zr,"Ac$1");function zs(t){t.g&&(Wr(t),t.g.cancel(),t.g=null)}o(zs,"sc$1");function yu(t){zs(t),t.u&&(_.clearTimeout(t.u),t.u=null),Ts(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&_.clearTimeout(t.m),t.m=null)}o(yu,"yd");function Gs(t){ou(t.h)||t.m||(t.m=!0,Fc(t.Ja,t),t.C=0)}o(Gs,"zc$1");function hg(t,e){return au(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=xn(te(t.Ja,t,e),Tu(t,t.C)),t.C++,!0)}o(hg,"Bd");w.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Fn(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=kc(r),Dc(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vu(this,i,e),n=Oe(this.F),P(n,"RID",t),P(n,"CVER",22),this.D&&P(n,"X-HTTP-Session-Id",this.D),jn(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(gu(r)))+"&"+e:this.o&&Kr(n,this.o,r)),jr(this.h,i),this.Ya&&P(n,"TYPE","init"),this.O?(P(n,"$req",e),P(n,"SID","null"),i.Z=!0,er(i,n,null)):er(i,n,e),this.G=2}}else this.G==3&&(t?ia(this,t):this.i.length==0||ou(this.h)||ia(this))};function ia(t,e){var n;e?n=e.m:n=t.U++;const s=Oe(t.F);P(s,"SID",t.I),P(s,"RID",n),P(s,"AID",t.T),jn(t,s),t.o&&t.s&&Kr(s,t.o,t.s),n=new Fn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vu(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),jr(t.h,n),er(n,s,e)}o(ia,"Ed");function jn(t,e){t.ia&&Nr(t.ia,function(n,s){P(e,s,n)}),t.l&&eu({},function(n,s){P(e,s,n)})}o(jn,"zd");function vu(t,e,n){n=Math.min(t.i.length,n);var s=t.l?te(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const a=["count="+n];r==-1?0<n?(r=i[0].h,a.push("ofs="+r)):r=0:a.push("ofs="+r);let c=!0;for(let u=0;u<n;u++){let l=i[u].h;const h=i[u].g;if(l-=r,0>l)r=Math.max(0,i[u].h-100),c=!1;else try{rg(h,a,"req"+l+"_")}catch{s&&s(h)}}if(c){s=a.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}o(vu,"Dd");function wu(t){t.g||t.u||(t.Z=1,Fc(t.Ia,t),t.A=0)}o(wu,"yc$1");function Gr(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=xn(te(t.Ia,t),Tu(t,t.A)),t.A++,!0)}o(Gr,"tc$1");w.Ia=function(){if(this.u=null,Iu(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=xn(te(this.eb,this),t)}};w.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ie(10),zs(this),Iu(this))};function Wr(t){t.B!=null&&(_.clearTimeout(t.B),t.B=null)}o(Wr,"oc$1");function Iu(t){t.g=new Fn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Oe(t.sa);P(e,"RID","rpc"),P(e,"SID",t.I),P(e,"CI",t.L?"0":"1"),P(e,"AID",t.T),P(e,"TYPE","xmlhttp"),jn(t,e),t.o&&t.s&&Kr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=qs(Oe(e)),n.s=null,n.P=!0,Yc(n,t)}o(Iu,"Fd");w.cb=function(){this.v!=null&&(this.v=null,zs(this),Gr(this),ie(19))};function Ts(t){t.v!=null&&(_.clearTimeout(t.v),t.v=null)}o(Ts,"rc$1");function Eu(t,e){var n=null;if(t.g==e){Ts(t),Wr(t),t.g=null;var s=2}else if(nr(t.h,e))n=e.D,cu(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Vs(),Y(s,new zc(s,n)),Gs(t)}else wu(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&hg(t,e)||s==2&&Gr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:nt(t,5);break;case 4:nt(t,10);break;case 3:nt(t,6);break;default:nt(t,2)}}}o(Eu,"mc$1");function Tu(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}o(Tu,"Cd");function nt(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=te(t.kb,t);n||(n=new rt("//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||Is(n,"https"),qs(n)),og(n.toString(),s)}else ie(2);t.G=0,t.l&&t.l.va(e),_u(t),yu(t)}o(nt,"R");w.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ie(2)):(this.j.info("Failed to ping google.com"),ie(1))};function _u(t){if(t.G=0,t.la=[],t.l){const e=uu(t.h);(e.length!=0||t.i.length!=0)&&(Go(t.la,e),Go(t.la,t.i),t.h.i.length=0,Dr(t.i),t.i.length=0),t.l.ua()}}o(_u,"Ad");function bu(t,e,n){var s=n instanceof rt?Oe(n):new rt(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Es(s,s.m);else{var i=_.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new rt(null,void 0);s&&Is(r,s),e&&(r.g=e),i&&Es(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&P(s,n,e),P(s,"VER",t.ma),jn(t,s),s}o(bu,"wc$1");function Su(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new U(new $n({jb:!0})):new U(t.ra),e.Ka(t.H),e}o(Su,"gc$1");function Au(){}o(Au,"Gd");w=Au.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Ra=function(){};function _s(){if(Ct&&!(10<=Number(Np)))throw Error("Environmental error: no available transport.")}o(_s,"Hd");_s.prototype.g=function(t,e){return new ce(t,e)};function ce(t,e){G.call(this),this.g=new mu(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ys(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ys(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $t(this)}o(ce,"X$1");Z(ce,G);ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=bu(t,null,t.V),Gs(t)};ce.prototype.close=function(){zr(this.g)};ce.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xr(t),t=n);e.i.push(new ng(e.ab++,t)),e.G==3&&Gs(e)};ce.prototype.M=function(){this.g.l=null,delete this.j,zr(this.g),delete this.g,ce.X.M.call(this)};function Cu(t){$r.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}o(Cu,"Id");Z(Cu,$r);function ku(){Br.call(this),this.status=1}o(ku,"Jd");Z(ku,Br);function $t(t){this.g=t}o($t,"Y$1");Z($t,Au);$t.prototype.xa=function(){Y(this.g,"a")};$t.prototype.wa=function(t){Y(this.g,new Cu(t))};$t.prototype.va=function(t){Y(this.g,new ku)};$t.prototype.ua=function(){Y(this.g,"b")};_s.prototype.createWebChannel=_s.prototype.g;ce.prototype.send=ce.prototype.u;ce.prototype.open=ce.prototype.m;ce.prototype.close=ce.prototype.close;$s.NO_ERROR=0;$s.TIMEOUT=8;$s.HTTP_ERROR=6;Gc.COMPLETE="complete";Wc.EventType=Un;Un.OPEN="a";Un.CLOSE="b";Un.ERROR="c";Un.MESSAGE="d";G.prototype.listen=G.prototype.N;U.prototype.listenOnce=U.prototype.O;U.prototype.getLastError=U.prototype.Oa;U.prototype.getLastErrorCode=U.prototype.Ea;U.prototype.getStatus=U.prototype.aa;U.prototype.getResponseJson=U.prototype.Sa;U.prototype.getResponseText=U.prototype.fa;U.prototype.send=U.prototype.da;U.prototype.setWithCredentials=U.prototype.Ka;var dg=o(function(){return new _s},"createWebChannelTransport"),fg=o(function(){return Vs()},"getStatEventTarget"),Li=$s,pg=Gc,gg=yt,ra={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},mg=$n,rs=Wc,yg=U;const oa="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}o(W,"P");W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new On("@firebase/firestore");function aa(){return ut.logLevel}o(aa,"S");function I(t,...e){if(ut.logLevel<=N.DEBUG){const n=e.map(Qr);ut.debug(`Firestore (${Bt}): ${t}`,...n)}}o(I,"C");function Le(t,...e){if(ut.logLevel<=N.ERROR){const n=e.map(Qr);ut.error(`Firestore (${Bt}): ${t}`,...n)}}o(Le,"x");function sr(t,...e){if(ut.logLevel<=N.WARN){const n=e.map(Qr);ut.warn(`Firestore (${Bt}): ${t}`,...n)}}o(sr,"N");function Qr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}o(Qr,"k");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${Bt}) INTERNAL ASSERTION FAILED: `+t;throw Le(e),new Error(e)}o(b,"O");function M(t,e){t||b()}o(M,"M");function S(t,e){return t}o(S,"$");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends fe{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}o(y,"L");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}o(De,"U");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}o(Yr,"q");class Du{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}o(Du,"K");class Ru{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}o(Ru,"G");class Nu{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=o(u=>this.i!==s?(s=this.i,n(u)):Promise.resolve(),"s");let r=new De;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new De,e.enqueueRetryable(()=>i(this.currentUser))};const a=o(()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},"r"),c=o(u=>{I("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()},"o");this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(I("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new De)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(I("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(M(typeof s.accessToken=="string"),new Yr(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return M(e===null||typeof e=="string"),new W(e)}}o(Nu,"Q");class Ou{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=W.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(M(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}o(Ou,"j");class Lu{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new Ou(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}o(Lu,"W");class Mu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}o(Mu,"z");class Pu{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=o(r=>{r.error!=null&&I("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.A;return this.A=r.token,I("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(r.token):Promise.resolve()},"n");this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=o(r=>{I("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)},"s");this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):I("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(M(typeof n.token=="string"),this.A=n.token,new Mu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}o(Pu,"H");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}o(vg,"Y");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=vg(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}o(Xr,"X");function O(t,e){return t<e?-1:t>e?1:0}o(O,"Z");function kt(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}o(kt,"tt");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return B.fromMillis(Date.now())}static fromDate(e){return B.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new B(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}o(B,"nt");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new B(0,0))}static max(){return new C(new B(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}o(C,"st");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,s){n===void 0?n=0:n>e.length&&b(),s===void 0?s=e.length-n:s>e.length-n&&b(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Dt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Dt?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),a=n.get(i);if(r<a)return-1;if(r>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}o(Dt,"it");class L extends Dt{construct(e,n,s){return new L(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new L(n)}static emptyPath(){return new L([])}}o(L,"rt");const wg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends Dt{construct(e,n,s){return new Q(e,n,s)}static isValidIdentifier(e){return wg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=o(()=>{if(s.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""},"i");let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(s+=c,i++):(r(),i++)}if(r(),a)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Q(n)}static emptyPath(){return new Q([])}}o(Q,"ut");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e){this.path=e}static fromPath(e){return new E(L.fromString(e))}static fromName(e){return new E(L.fromString(e).popFirst(5))}static empty(){return new E(L.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&L.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return L.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new E(new L(e.slice()))}}o(E,"ct");function Ig(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=C.fromTimestamp(s===1e9?new B(n+1,0):new B(n,s));return new Me(i,E.empty(),e)}o(Ig,"mt");function Eg(t){return new Me(t.readTime,t.key,-1)}o(Eg,"gt");class Me{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Me(C.min(),E.empty(),-1)}static max(){return new Me(C.max(),E.empty(),-1)}}o(Me,"yt");function Tg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=E.comparator(t.documentKey,e.documentKey),n!==0?n:O(t.largestBatchId,e.largestBatchId))}o(Tg,"pt");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}o(xu,"Tt");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(t){if(t.code!==f.FAILED_PRECONDITION||t.message!==_g)throw t;I("LocalStore","Unexpectedly lost primary lease")}o(qn,"Et");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new g((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof g?n:g.resolve(n)}catch(n){return g.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):g.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):g.reject(n)}static resolve(e){return new g((n,s)=>{n(e)})}static reject(e){return new g((n,s)=>{s(e)})}static waitFor(e){return new g((n,s)=>{let i=0,r=0,a=!1;e.forEach(c=>{++i,c.next(()=>{++r,a&&r===i&&n()},u=>s(u))}),a=!0,r===i&&n()})}static or(e){let n=g.resolve(!1);for(const s of e)n=n.next(i=>i?g.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new g((s,i)=>{const r=e.length,a=new Array(r);let c=0;for(let u=0;u<r;u++){const l=u;n(e[l]).next(h=>{a[l]=h,++c,c===r&&s(a)},h=>i(h))}})}static doWhile(e,n){return new g((s,i)=>{const r=o(()=>{e()===!0?n().next(()=>{r()},i):s()},"i");r()})}}o(g,"At");function Hn(t){return t.name==="IndexedDbTransactionError"}o(Hn,"Vt");/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}o(Ws,"Ot");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}o(ca,"Mt");function jt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}o(jt,"Ft");function Uu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}o(Uu,"$t");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ws.at=-1;class q{constructor(e,n){this.comparator=e,this.root=n||K.EMPTY}insert(e,n){return new q(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(e){return new q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,K.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new on(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new on(this.root,e,this.comparator,!1)}getReverseIterator(){return new on(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new on(this.root,e,this.comparator,!0)}}o(q,"Bt");class on{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}o(on,"Lt");class K{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s!=null?s:K.RED,this.left=i!=null?i:K.EMPTY,this.right=r!=null?r:K.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new K(e!=null?e:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return K.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}o(K,"Ut");K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(t,e,n,s,i){return this}insert(t,e,n){return new K(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.comparator=e,this.data=new q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ir(this.data.getIterator())}getIteratorFrom(e){return new ir(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof j)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new j(this.comparator);return n.data=e,n}}o(j,"qt");class ir{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}o(ir,"Kt");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.fields=e,e.sort(Q.comparator)}static empty(){return new pe([])}unionWith(e){let n=new j(Q.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new pe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return kt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}o(pe,"Qt");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new J(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new J(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}o(J,"Wt");J.EMPTY_BYTE_STRING=new J("");const bg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ke(t){if(M(!!t),typeof t=="string"){let e=0;const n=bg.exec(t);if(M(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:$(t.seconds),nanos:$(t.nanos)}}o(Ke,"Ht");function $(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}o($,"Jt");function Rt(t){return typeof t=="string"?J.fromBase64String(t):J.fromUint8Array(t)}o(Rt,"Yt");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}o(Fu,"Xt");function Vu(t){const e=t.mapValue.fields.__previous_value__;return Fu(e)?Vu(e):e}o(Vu,"Zt");function bn(t){const e=Ke(t.mapValue.fields.__local_write_time__.timestampValue);return new B(e.seconds,e.nanos)}o(bn,"te");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,s,i,r,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.useFetchStreams=u}}o($u,"ee");class Nt{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Nt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nt&&e.projectId===this.projectId&&e.database===this.database}}o(Nt,"ne");function Qs(t){return t==null}o(Qs,"se");function bs(t){return t===0&&1/t==-1/0}o(bs,"ie");function Sg(t){return typeof t=="number"&&Number.isInteger(t)&&!bs(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}o(Sg,"re");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function lt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fu(t)?4:Ag(t)?9007199254740991:10:b()}o(lt,"ce");function Ie(t,e){if(t===e)return!0;const n=lt(t);if(n!==lt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return bn(t).isEqual(bn(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=Ke(s.timestampValue),a=Ke(i.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rt(s.bytesValue).isEqual(Rt(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return $(s.geoPointValue.latitude)===$(i.geoPointValue.latitude)&&$(s.geoPointValue.longitude)===$(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $(s.integerValue)===$(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=$(s.doubleValue),a=$(i.doubleValue);return r===a?bs(r)===bs(a):isNaN(r)&&isNaN(a)}return!1}(t,e);case 9:return kt(t.arrayValue.values||[],e.arrayValue.values||[],Ie);case 10:return function(s,i){const r=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ca(r)!==ca(a))return!1;for(const c in r)if(r.hasOwnProperty(c)&&(a[c]===void 0||!Ie(r[c],a[c])))return!1;return!0}(t,e);default:return b()}}o(Ie,"ae");function Sn(t,e){return(t.values||[]).find(n=>Ie(n,e))!==void 0}o(Sn,"he");function Ot(t,e){if(t===e)return 0;const n=lt(t),s=lt(e);if(n!==s)return O(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(i,r){const a=$(i.integerValue||i.doubleValue),c=$(r.integerValue||r.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return ua(t.timestampValue,e.timestampValue);case 4:return ua(bn(t),bn(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(i,r){const a=Rt(i),c=Rt(r);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const a=i.split("/"),c=r.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=O(a[u],c[u]);if(l!==0)return l}return O(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const a=O($(i.latitude),$(r.latitude));return a!==0?a:O($(i.longitude),$(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const a=i.values||[],c=r.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=Ot(a[u],c[u]);if(l)return l}return O(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===os.mapValue&&r===os.mapValue)return 0;if(i===os.mapValue)return 1;if(r===os.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=r.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=O(c[h],l[h]);if(d!==0)return d;const p=Ot(a[c[h]],u[l[h]]);if(p!==0)return p}return O(c.length,l.length)}(t.mapValue,e.mapValue);default:throw b()}}o(Ot,"le");function ua(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return O(t,e);const n=Ke(t),s=Ke(e),i=O(n.seconds,s.seconds);return i!==0?i:O(n.nanos,s.nanos)}o(ua,"fe");function bt(t){return rr(t)}o(bt,"de");function rr(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=Ke(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Rt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,E.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const a of s.values||[])r?r=!1:i+=",",i+=rr(a);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",a=!0;for(const c of i)a?a=!1:r+=",",r+=`${c}:${rr(s.fields[c])}`;return r+"}"}(t.mapValue):b();var e,n}o(rr,"_e");function la(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}o(la,"we");function or(t){return!!t&&"integerValue"in t}o(or,"me");function Jr(t){return!!t&&"arrayValue"in t}o(Jr,"ge");function ha(t){return!!t&&"nullValue"in t}o(ha,"ye");function da(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}o(da,"pe");function cs(t){return!!t&&"mapValue"in t}o(cs,"Ie");function ln(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jt(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=ln(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ln(t.arrayValue.values[n]);return e}return Object.assign({},t)}o(ln,"Te");function Ag(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}o(Ag,"Ee");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.value=e}static empty(){return new oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!cs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ln(n)}setAll(e){let n=Q.emptyPath(),s={},i=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=c.popLast()}a?s[c.lastSegment()]=ln(a):i.push(c.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());cs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ie(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];cs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){jt(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new oe(ln(this.value))}}o(oe,"ve");function Bu(t){const e=[];return jt(t.fields,(n,s)=>{const i=new Q([n]);if(cs(s)){const r=Bu(s.mapValue).fields;if(r.length===0)e.push(i);else for(const a of r)e.push(i.child(a))}else e.push(i)}),new pe(e)}o(Bu,"Ve");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n,s,i,r,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=a}static newInvalidDocument(e){return new z(e,0,C.min(),C.min(),oe.empty(),0)}static newFoundDocument(e,n,s){return new z(e,1,n,C.min(),s,0)}static newNoDocument(e,n){return new z(e,2,n,C.min(),oe.empty(),0)}static newUnknownDocument(e,n){return new z(e,3,n,C.min(),oe.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof z&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new z(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}o(z,"Se");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n=null,s=[],i=[],r=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=a,this.endAt=c,this.ht=null}}o(ju,"De");function fa(t,e=null,n=[],s=[],i=null,r=null,a=null){return new ju(t,e,n,s,i,r,a)}o(fa,"Ce");function Zr(t){const e=S(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+bt(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Qs(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>bt(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>bt(s)).join(",")),e.ht=n}return e.ht}o(Zr,"xe");function Cg(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${bt(s.value)}`;var s}).join(", ")}]`),Qs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>bt(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>bt(n)).join(",")),`Target(${e})`}o(Cg,"Ne");function eo(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!kg(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!Ie(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ga(t.startAt,e.startAt)&&ga(t.endAt,e.endAt)}o(eo,"ke");function ar(t){return E.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}o(ar,"Oe");class ee extends class{}{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,s):new qu(e,n,s):n==="array-contains"?new Gu(e,s):n==="in"?new Wu(e,s):n==="not-in"?new Qu(e,s):n==="array-contains-any"?new Yu(e,s):new ee(e,n,s)}static lt(e,n,s){return n==="in"?new Hu(e,s):new Ku(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Ot(n,this.value)):n!==null&&lt(this.value)===lt(n)&&this.ft(Ot(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}o(ee,"Be");class qu extends ee{constructor(e,n,s){super(e,n,s),this.key=E.fromName(s.referenceValue)}matches(e){const n=E.comparator(e.key,this.key);return this.ft(n)}}o(qu,"Le");class Hu extends ee{constructor(e,n){super(e,"in",n),this.keys=zu("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}o(Hu,"Ue");class Ku extends ee{constructor(e,n){super(e,"not-in",n),this.keys=zu("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}o(Ku,"qe");function zu(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}o(zu,"Ke");class Gu extends ee{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jr(n)&&Sn(n.arrayValue,this.value)}}o(Gu,"Ge");class Wu extends ee{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Sn(this.value.arrayValue,n)}}o(Wu,"Qe");class Qu extends ee{constructor(e,n){super(e,"not-in",n)}matches(e){if(Sn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Sn(this.value.arrayValue,n)}}o(Qu,"je");class Yu extends ee{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Sn(this.value.arrayValue,s))}}o(Yu,"We");class An{constructor(e,n){this.position=e,this.inclusive=n}}o(An,"ze");class St{constructor(e,n="asc"){this.field=e,this.dir=n}}o(St,"He");function kg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}o(kg,"Je");function pa(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],a=t.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(a.referenceValue),n.key):s=Ot(a,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}o(pa,"Ye");function ga(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ie(t.position[n],e.position[n]))return!1;return!0}o(ga,"Xe");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n=null,s=[],i=[],r=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=a,this.startAt=c,this.endAt=u,this._t=null,this.wt=null,this.startAt,this.endAt}}o(qt,"Ze");function Dg(t,e,n,s,i,r,a,c){return new qt(t,e,n,s,i,r,a,c)}o(Dg,"tn");function Xu(t){return new qt(t)}o(Xu,"en");function ma(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}o(ma,"nn");function Ju(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}o(Ju,"sn");function Zu(t){for(const e of t.filters)if(e.dt())return e.field;return null}o(Zu,"rn");function el(t){return t.collectionGroup!==null}o(el,"on");function Cn(t){const e=S(t);if(e._t===null){e._t=[];const n=Zu(e),s=Ju(e);if(n!==null&&s===null)n.isKeyField()||e._t.push(new St(n)),e._t.push(new St(Q.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e._t.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new St(Q.keyField(),r))}}}return e._t}o(Cn,"un");function Pe(t){const e=S(t);if(!e.wt)if(e.limitType==="F")e.wt=fa(e.path,e.collectionGroup,Cn(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Cn(e)){const a=r.dir==="desc"?"asc":"desc";n.push(new St(r.field,a))}const s=e.endAt?new An(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new An(e.startAt.position,e.startAt.inclusive):null;e.wt=fa(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}o(Pe,"cn");function cr(t,e,n){return new qt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}o(cr,"an");function Ys(t,e){return eo(Pe(t),Pe(e))&&t.limitType===e.limitType}o(Ys,"hn");function tl(t){return`${Zr(Pe(t))}|lt:${t.limitType}`}o(tl,"ln");function ur(t){return`Query(target=${Cg(Pe(t))}; limitType=${t.limitType})`}o(ur,"fn");function to(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,a){const c=pa(i,r,a);return i.inclusive?c<=0:c<0}(n.startAt,Cn(n),s)||n.endAt&&!function(i,r,a){const c=pa(i,r,a);return i.inclusive?c>=0:c>0}(n.endAt,Cn(n),s))}(t,e)}o(to,"dn");function Rg(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}o(Rg,"_n");function nl(t){return(e,n)=>{let s=!1;for(const i of Cn(t)){const r=Ng(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}o(nl,"wn");function Ng(t,e,n){const s=t.field.isKeyField()?E.comparator(e.key,n.key):function(i,r,a){const c=r.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Ot(c,u):b()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return b()}}o(Ng,"mn");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bs(e)?"-0":e}}o(sl,"gn");function il(t){return{integerValue:""+t}}o(il,"yn");function Og(t,e){return Sg(e)?il(e):sl(t,e)}o(Og,"pn");/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this._=void 0}}o(Kn,"In");function Lg(t,e,n){return t instanceof Lt?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Mt?ol(t,e):t instanceof Pt?al(t,e):function(s,i){const r=rl(s,i),a=ya(r)+ya(s.yt);return or(r)&&or(s.yt)?il(a):sl(s.It,a)}(t,e)}o(Lg,"Tn");function Mg(t,e,n){return t instanceof Mt?ol(t,e):t instanceof Pt?al(t,e):n}o(Mg,"En");function rl(t,e){return t instanceof kn?or(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}o(rl,"An");class Lt extends Kn{}o(Lt,"Rn");class Mt extends Kn{constructor(e){super(),this.elements=e}}o(Mt,"bn");function ol(t,e){const n=cl(e);for(const s of t.elements)n.some(i=>Ie(i,s))||n.push(s);return{arrayValue:{values:n}}}o(ol,"Pn");class Pt extends Kn{constructor(e){super(),this.elements=e}}o(Pt,"vn");function al(t,e){let n=cl(e);for(const s of t.elements)n=n.filter(i=>!Ie(i,s));return{arrayValue:{values:n}}}o(al,"Vn");class kn extends Kn{constructor(e,n){super(),this.It=e,this.yt=n}}o(kn,"Sn");function ya(t){return $(t.integerValue||t.doubleValue)}o(ya,"Dn");function cl(t){return Jr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}o(cl,"Cn");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.field=e,this.transform=n}}o(ul,"xn");function Pg(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Mt&&s instanceof Mt||n instanceof Pt&&s instanceof Pt?kt(n.elements,s.elements,Ie):n instanceof kn&&s instanceof kn?Ie(n.yt,s.yt):n instanceof Lt&&s instanceof Lt}(t.transform,e.transform)}o(Pg,"Nn");class ll{constructor(e,n){this.version=e,this.transformResults=n}}o(ll,"kn");class ge{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ge}static exists(e){return new ge(void 0,e)}static updateTime(e){return new ge(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}o(ge,"On");function us(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}o(us,"Mn");class zn{}o(zn,"Fn");function hl(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xs(t.key,ge.none()):new Ht(t.key,t.data,ge.none());{const n=t.data,s=oe.empty();let i=new j(Q.comparator);for(let r of e.fields)if(!i.has(r)){let a=n.field(r);a===null&&r.length>1&&(r=r.popLast(),a=n.field(r)),a===null?s.delete(r):s.set(r,a),i=i.add(r)}return new Je(t.key,s,new pe(i.toArray()),ge.none())}}o(hl,"$n");function xg(t,e,n){t instanceof Ht?function(s,i,r){const a=s.value.clone(),c=wa(s.fieldTransforms,i,r.transformResults);a.setAll(c),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Je?function(s,i,r){if(!us(s.precondition,i))return void i.convertToUnknownDocument(r.version);const a=wa(s.fieldTransforms,i,r.transformResults),c=i.data;c.setAll(dl(s)),c.setAll(a),i.convertToFoundDocument(r.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}o(xg,"Bn");function hn(t,e,n,s){return t instanceof Ht?function(i,r,a,c){if(!us(i.precondition,r))return a;const u=i.value.clone(),l=Ia(i.fieldTransforms,c,r);return u.setAll(l),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Je?function(i,r,a,c){if(!us(i.precondition,r))return a;const u=Ia(i.fieldTransforms,c,r),l=r.data;return l.setAll(dl(i)),l.setAll(u),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(i,r,a){return us(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):a}(t,e,n)}o(hn,"Ln");function Ug(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=rl(s.transform,i||null);r!=null&&(n===null&&(n=oe.empty()),n.set(s.field,r))}return n||null}o(Ug,"Un");function va(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&kt(n,s,(i,r)=>Pg(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}o(va,"qn");class Ht extends zn{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}o(Ht,"Kn");class Je extends zn{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}o(Je,"Gn");function dl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}o(dl,"Qn");function wa(t,e,n){const s=new Map;M(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],a=r.transform,c=e.data.field(r.field);s.set(r.field,Mg(a,c,n[i]))}return s}o(wa,"jn");function Ia(t,e,n){const s=new Map;for(const i of t){const r=i.transform,a=n.data.field(i.field);s.set(i.field,Lg(r,a,e))}return s}o(Ia,"Wn");class Xs extends zn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}o(Xs,"zn");class fl extends zn{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}o(fl,"Hn");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.count=e}}o(pl,"Jn");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V,R;function Fg(t){switch(t){default:return b();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}o(Fg,"Zn");function gl(t){if(t===void 0)return Le("GRPC error has no .code"),f.UNKNOWN;switch(t){case V.OK:return f.OK;case V.CANCELLED:return f.CANCELLED;case V.UNKNOWN:return f.UNKNOWN;case V.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case V.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case V.INTERNAL:return f.INTERNAL;case V.UNAVAILABLE:return f.UNAVAILABLE;case V.UNAUTHENTICATED:return f.UNAUTHENTICATED;case V.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case V.NOT_FOUND:return f.NOT_FOUND;case V.ALREADY_EXISTS:return f.ALREADY_EXISTS;case V.PERMISSION_DENIED:return f.PERMISSION_DENIED;case V.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case V.ABORTED:return f.ABORTED;case V.OUT_OF_RANGE:return f.OUT_OF_RANGE;case V.UNIMPLEMENTED:return f.UNIMPLEMENTED;case V.DATA_LOSS:return f.DATA_LOSS;default:return b()}}o(gl,"ts");(R=V||(V={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jt(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Uu(this.inner)}size(){return this.innerSize}}o(vt,"es");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=new q(E.comparator);function xe(){return Vg}o(xe,"ss");const ml=new q(E.comparator);function an(...t){let e=ml;for(const n of t)e=e.insert(n.key,n);return e}o(an,"rs");function yl(t){let e=ml;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}o(yl,"os");function st(){return dn()}o(st,"us");function vl(){return dn()}o(vl,"cs");function dn(){return new vt(t=>t.toString(),(t,e)=>t.isEqual(e))}o(dn,"as");const $g=new q(E.comparator),Bg=new j(E.comparator);function D(...t){let e=Bg;for(const n of t)e=e.add(n);return e}o(D,"fs");const jg=new j(O);function wl(){return jg}o(wl,"_s");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Kt.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Gn(C.min(),i,wl(),xe(),D())}}o(Gn,"ws");class Kt{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Kt(s,n,D(),D(),D())}}o(Kt,"ms");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,s,i){this.Tt=e,this.removedTargetIds=n,this.key=s,this.Et=i}}o(fn,"gs");class no{constructor(e,n){this.targetId=e,this.At=n}}o(no,"ys");class so{constructor(e,n,s=J.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}o(so,"ps");class lr{constructor(){this.Rt=0,this.bt=Ta(),this.Pt=J.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=D(),n=D(),s=D();return this.bt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:b()}}),new Kt(this.Pt,this.vt,e,n,s)}Nt(){this.Vt=!1,this.bt=Ta()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}o(lr,"Is");class Il{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=xe(),this.qt=Ea(),this.Kt=new j(O)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const s=this.zt(n);switch(e.state){case 0:this.Ht(n)&&s.Ct(e.resumeToken);break;case 1:s.Ft(),s.St||s.Nt(),s.Ct(e.resumeToken);break;case 2:s.Ft(),s.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(s.$t(),s.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),s.Ct(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((s,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,s=e.At.count,i=this.Xt(n);if(i){const r=i.target;if(ar(r))if(s===0){const a=new E(r.path);this.jt(n,a,z.newNoDocument(a,C.min()))}else M(s===1);else this.Zt(n)!==s&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((r,a)=>{const c=this.Xt(a);if(c){if(r.current&&ar(c.target)){const u=new E(c.target.path);this.Ut.get(u)!==null||this.ee(a,u)||this.jt(a,u,z.newNoDocument(u,e))}r.Dt&&(n.set(a,r.xt()),r.Nt())}});let s=D();this.qt.forEach((r,a)=>{let c=!0;a.forEachWhile(u=>{const l=this.Xt(u);return!l||l.purpose===2||(c=!1,!1)}),c&&(s=s.add(r))}),this.Ut.forEach((r,a)=>a.setReadTime(e));const i=new Gn(e,n,this.Kt,this.Ut,s);return this.Ut=xe(),this.qt=Ea(),this.Kt=new j(O),i}Qt(e,n){if(!this.Ht(e))return;const s=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,s){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new lr,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new j(O),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||I("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new lr),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}o(Il,"Ts");function Ea(){return new q(E.comparator)}o(Ea,"Es");function Ta(){return new q(E.comparator)}o(Ta,"As");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Hg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class El{constructor(e,n){this.databaseId=e,this.gt=n}}o(El,"Ps");function Ss(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}o(Ss,"vs");function Tl(t,e){return t.gt?e.toBase64():e.toUint8Array()}o(Tl,"Vs");function Kg(t,e){return Ss(t,e.toTimestamp())}o(Kg,"Ss");function Re(t){return M(!!t),C.fromTimestamp(function(e){const n=Ke(e);return new B(n.seconds,n.nanos)}(t))}o(Re,"Ds");function io(t,e){return function(n){return new L(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}o(io,"Cs");function _l(t){const e=L.fromString(t);return M(Al(e)),e}o(_l,"xs");function hr(t,e){return io(t.databaseId,e.path)}o(hr,"Ns");function Mi(t,e){const n=_l(e);if(n.get(1)!==t.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new E(bl(n))}o(Mi,"ks");function dr(t,e){return io(t.databaseId,e)}o(dr,"Os");function zg(t){const e=_l(t);return e.length===4?L.emptyPath():bl(e)}o(zg,"Ms");function fr(t){return new L(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}o(fr,"Fs");function bl(t){return M(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}o(bl,"$s");function _a(t,e,n){return{name:hr(t,e),fields:n.value.mapValue.fields}}o(_a,"Bs");function Gg(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,l){return u.gt?(M(l===void 0||typeof l=="string"),J.fromBase64String(l||"")):(M(l===void 0||l instanceof Uint8Array),J.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(u){const l=u.code===void 0?f.UNKNOWN:gl(u.code);return new y(l,u.message||"")}(a);n=new so(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Mi(t,s.document.name),r=Re(s.document.updateTime),a=new oe({mapValue:{fields:s.document.fields}}),c=z.newFoundDocument(i,r,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new fn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Mi(t,s.document),r=s.readTime?Re(s.readTime):C.min(),a=z.newNoDocument(i,r),c=s.removedTargetIds||[];n=new fn([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Mi(t,s.document),r=s.removedTargetIds||[];n=new fn([],r,i,null)}else{if(!("filter"in e))return b();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new pl(i),a=s.targetId;n=new no(a,r)}}return n}o(Gg,"qs");function Wg(t,e){let n;if(e instanceof Ht)n={update:_a(t,e.key,e.value)};else if(e instanceof Xs)n={delete:hr(t,e.key)};else if(e instanceof Je)n={update:_a(t,e.key,e.data),updateMask:im(e.fieldMask)};else{if(!(e instanceof fl))return b();n={verify:hr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const a=r.transform;if(a instanceof Lt)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Mt)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pt)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof kn)return{fieldPath:r.field.canonicalString(),increment:a.yt};throw b()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Kg(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:b()}(t,e.precondition)),n}o(Wg,"Ks");function Qg(t,e){return t&&t.length>0?(M(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Re(s.updateTime):Re(i);return r.isEqual(C.min())&&(r=Re(i)),new ll(r,s.transformResults||[])}(n,e))):[]}o(Qg,"Qs");function Yg(t,e){return{documents:[dr(t,e.path)]}}o(Yg,"js");function Xg(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=dr(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dr(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length===0)return;const l=u.map(h=>function(d){if(d.op==="=="){if(da(d.value))return{unaryFilter:{field:Et(d.field),op:"IS_NAN"}};if(ha(d.value))return{unaryFilter:{field:Et(d.field),op:"IS_NULL"}}}else if(d.op==="!="){if(da(d.value))return{unaryFilter:{field:Et(d.field),op:"IS_NOT_NAN"}};if(ha(d.value))return{unaryFilter:{field:Et(d.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Et(d.field),op:tm(d.op),value:d.value}}}(h));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(l=>function(h){return{field:Et(h.field),direction:em(h.dir)}}(l))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const a=function(u,l){return u.gt||Qs(l)?l:{value:l}}(t,e.limit);var c;return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}o(Xg,"Ws");function Jg(t){let e=zg(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){M(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let r=[];n.where&&(r=Sl(n.where));let a=[];n.orderBy&&(a=n.orderBy.map(h=>function(d){return new St(_t(d.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(h)));let c=null;n.limit&&(c=function(h){let d;return d=typeof h=="object"?h.value:h,Qs(d)?null:d}(n.limit));let u=null;n.startAt&&(u=function(h){const d=!!h.before,p=h.values||[];return new An(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new An(p,d)}(n.endAt)),Dg(e,i,a,r,c,"F",u,l)}o(Jg,"zs");function Zg(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}o(Zg,"Hs");function Sl(t){return t?t.unaryFilter!==void 0?[sm(t)]:t.fieldFilter!==void 0?[nm(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>Sl(e)).reduce((e,n)=>e.concat(n)):b():[]}o(Sl,"Js");function em(t){return qg[t]}o(em,"Ys");function tm(t){return Hg[t]}o(tm,"Xs");function Et(t){return{fieldPath:t.canonicalString()}}o(Et,"Zs");function _t(t){return Q.fromServerFormat(t.fieldPath)}o(_t,"ti");function nm(t){return ee.create(_t(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(t.fieldFilter.op),t.fieldFilter.value)}o(nm,"ei");function sm(t){switch(t.unaryFilter.op){case"IS_NAN":const e=_t(t.unaryFilter.field);return ee.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=_t(t.unaryFilter.field);return ee.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_t(t.unaryFilter.field);return ee.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_t(t.unaryFilter.field);return ee.create(i,"!=",{nullValue:"NULL_VALUE"});default:return b()}}o(sm,"ni");function im(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}o(im,"si");function Al(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}o(Al,"ii");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&xg(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=hn(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=hn(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=vl();return this.mutations.forEach(i=>{const r=e.get(i.key),a=r.overlayedDocument;let c=this.applyToLocalView(a,r.mutatedFields);c=n.has(i.key)?null:c;const u=hl(a,c);u!==null&&s.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),D())}isEqual(e){return this.batchId===e.batchId&&kt(this.mutations,e.mutations,(n,s)=>va(n,s))&&kt(this.baseMutations,e.baseMutations,(n,s)=>va(n,s))}}o(Cl,"ki");class Js{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){M(e.mutations.length===s.length);let i=$g;const r=e.mutations;for(let a=0;a<r.length;a++)i=i.insert(r[a].key,s[a].version);return new Js(e,n,s,i)}}o(Js,"Oi");/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}o(kl,"Mi");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,s,i,r=C.min(),a=C.min(),c=J.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c}withSequenceNumber(e){return new qe(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new qe(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new qe(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}o(qe,"Fi");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e){this.re=e}}o(Dl,"$i");function rm(t){const e=Jg({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cr(e,e.limit,"L"):e}o(rm,"Wi");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(){this.Ye=new Nl}addToCollectionParentIndex(e,n){return this.Ye.add(n),g.resolve()}getCollectionParents(e,n){return g.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return g.resolve()}deleteFieldIndex(e,n){return g.resolve()}getDocumentsMatchingTarget(e,n){return g.resolve(null)}getIndexType(e,n){return g.resolve(0)}getFieldIndexes(e,n){return g.resolve([])}getNextCollectionGroupToUpdate(e){return g.resolve(null)}getMinOffset(e,n){return g.resolve(Me.min())}getMinOffsetFromCollectionGroup(e,n){return g.resolve(Me.min())}updateCollectionGroup(e,n,s){return g.resolve()}updateIndexEntries(e,n){return g.resolve()}}o(Rl,"dr");class Nl{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new j(L.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new j(L.comparator)).toArray()}}o(Nl,"_r");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ht(0)}static vn(){return new ht(-1)}}o(ht,"Cr");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.changes=new vt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,z.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?g.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}o(Ol,"qr");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}o(Ll,"Yr");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.getBaseDocument(e,n,s))).next(i=>(s!==null&&hn(s.mutation,i,pe.empty(),B.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,D()).next(()=>s))}getLocalViewOfDocuments(e,n,s=D()){const i=st();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let a=an();return r.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const s=st();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,D()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,s,i){let r=xe();const a=dn(),c=dn();return n.forEach((u,l)=>{const h=s.get(l.key);i.has(l.key)&&(h===void 0||h.mutation instanceof Je)?r=r.insert(l.key,l):h!==void 0&&(a.set(l.key,h.mutation.getFieldMask()),hn(h.mutation,l,h.mutation.getFieldMask(),B.now()))}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((l,h)=>a.set(l,h)),n.forEach((l,h)=>{var d;return c.set(l,new Ll(h,(d=a.get(l))!==null&&d!==void 0?d:null))}),c))}recalculateAndSaveOverlays(e,n){const s=dn();let i=new q((a,c)=>a-c),r=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let h=s.get(u)||pe.empty();h=c.applyToLocalView(l,h),s.set(u,h);const d=(i.get(c.batchId)||D()).add(u);i=i.insert(c.batchId,d)})}).next(()=>{const a=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),l=u.key,h=u.value,d=vl();h.forEach(p=>{if(!r.has(p)){const m=hl(n.get(p),s.get(p));m!==null&&d.set(p,m),r=r.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,l,d))}return g.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):el(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const a=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):g.resolve(st());let c=-1,u=r;return a.next(l=>g.forEach(l,(h,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),r.get(h)?g.resolve():this.getBaseDocument(e,h,d).next(p=>{u=u.insert(h,p)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,u,l,D())).next(h=>({batchId:c,changes:yl(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new E(n)).next(s=>{let i=an();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=an();return this.indexManager.getCollectionParents(e,i).next(a=>g.forEach(a,c=>{const u=function(l,h){return new qt(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(l=>{l.forEach((h,d)=>{r=r.insert(h,d)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(r=>{r.forEach((c,u)=>{const l=u.getKey();i.get(l)===null&&(i=i.insert(l,z.newInvalidDocument(l)))});let a=an();return i.forEach((c,u)=>{const l=r.get(c);l!==void 0&&hn(l.mutation,u,pe.empty(),B.now()),to(n,u)&&(a=a.insert(c,u))}),a})}getBaseDocument(e,n,s){return s===null||s.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):g.resolve(z.newInvalidDocument(n))}}o(Ml,"Xr");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return g.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Re(s.createTime)}),g.resolve()}getNamedQuery(e,n){return g.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:rm(s.bundledQuery),readTime:Re(s.readTime)}}(n)),g.resolve()}}o(Pl,"Zr");/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.overlays=new q(E.comparator),this.es=new Map}getOverlay(e,n){return g.resolve(this.overlays.get(n))}getOverlays(e,n){const s=st();return g.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.ue(e,n,r)}),g.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.es.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.es.delete(s)),g.resolve()}getOverlaysForCollection(e,n,s){const i=st(),r=n.length+1,a=new E(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return g.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new q((l,h)=>l-h);const a=this.overlays.getIterator();for(;a.hasNext();){const l=a.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let h=r.get(l.largestBatchId);h===null&&(h=st(),r=r.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const c=st(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,h)=>c.set(l,h)),!(c.size()>=i)););return g.resolve(c)}ue(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const a=this.es.get(i.largestBatchId).delete(s.key);this.es.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new kl(n,s));let r=this.es.get(n);r===void 0&&(r=D(),this.es.set(n,r)),this.es.set(n,r.add(s.key))}}o(xl,"to");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.ns=new j(H.ss),this.rs=new j(H.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new H(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new H(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new E(new L([])),s=new H(n,e),i=new H(n,e+1),r=[];return this.rs.forEachInRange([s,i],a=>{this.cs(a),r.push(a.key)}),r}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new E(new L([])),s=new H(n,e),i=new H(n,e+1);let r=D();return this.rs.forEachInRange([s,i],a=>{r=r.add(a.key)}),r}containsKey(e){const n=new H(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}o(Zs,"eo");class H{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return E.comparator(e.key,n.key)||O(e._s,n._s)}static os(e,n){return O(e._s,n._s)||E.comparator(e.key,n.key)}}o(H,"no");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new j(H.ss)}checkEmpty(e){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Cl(r,n,s,i);this.mutationQueue.push(a);for(const c of i)this.gs=this.gs.add(new H(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return g.resolve(a)}lookupMutationBatch(e,n){return g.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ps(s),r=i<0?0:i;return g.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new H(n,0),i=new H(n,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([s,i],a=>{const c=this.ys(a._s);r.push(c)}),g.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new j(O);return n.forEach(i=>{const r=new H(i,0),a=new H(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([r,a],c=>{s=s.add(c._s)})}),g.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const a=new H(new E(r),0);let c=new j(O);return this.gs.forEachWhile(u=>{const l=u.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(c=c.add(u._s)),!0)},a),g.resolve(this.Is(c))}Is(e){const n=[];return e.forEach(s=>{const i=this.ys(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){M(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return g.forEach(n.mutations,i=>{const r=new H(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new H(n,0),i=this.gs.firstAfterOrEqual(s);return g.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,g.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}o(Ul,"so");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.Es=e,this.docs=new q(E.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,a=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return g.resolve(s?s.document.mutableCopy():z.newInvalidDocument(n))}getEntries(e,n){let s=xe();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():z.newInvalidDocument(i))}),g.resolve(s)}getAllFromCollection(e,n,s){let i=xe();const r=new E(n.child("")),a=this.docs.getIteratorFrom(r);for(;a.hasNext();){const{key:c,value:{document:u}}=a.getNext();if(!n.isPrefixOf(c.path))break;c.path.length>n.length+1||Tg(Eg(u),s)<=0||(i=i.insert(u.key,u.mutableCopy()))}return g.resolve(i)}getAllFromCollectionGroup(e,n,s,i){b()}As(e,n){return g.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new Vl(this)}getSize(e){return g.resolve(this.size)}}o(Fl,"io");class Vl extends Ol{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(s)}),g.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}o(Vl,"ro");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.persistence=e,this.Rs=new vt(n=>Zr(n),eo),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Zs,this.targetCount=0,this.vs=ht.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,i)=>n(i)),g.resolve()}getLastRemoteSnapshotVersion(e){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return g.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),g.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ht(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,g.resolve()}updateTargetData(e,n){return this.Dn(n),g.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,g.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Rs.forEach((a,c)=>{c.sequenceNumber<=n&&s.get(c.targetId)===null&&(this.Rs.delete(a),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),g.waitFor(r).next(()=>i)}getTargetCount(e){return g.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return g.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),g.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(a=>{r.push(i.markPotentiallyOrphaned(e,a))}),g.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),g.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return g.resolve(s)}containsKey(e,n){return g.resolve(this.Ps.containsKey(n))}}o($l,"oo");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Ws(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new $l(this),this.indexManager=new Rl,this.remoteDocumentCache=function(s){return new Fl(s)}(s=>this.referenceDelegate.xs(s)),this.It=new Dl(n),this.Ns=new Pl(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xl,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new Ul(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){I("MemoryPersistence","Starting transaction:",e);const i=new jl(this.Ss.next());return this.referenceDelegate.ks(),s(i).next(r=>this.referenceDelegate.Os(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Ms(e,n){return g.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}o(Bl,"uo");class jl extends xu{constructor(e){super(),this.currentSequenceNumber=e}}o(jl,"co");class ei{constructor(e){this.persistence=e,this.Fs=new Zs,this.$s=null}static Bs(e){return new ei(e)}get Ls(){if(this.$s)return this.$s;throw b()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),g.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),g.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),g.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Ls.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.Ls,s=>{const i=E.fromPath(s);return this.Us(e,i).next(r=>{r||n.removeEntry(i,C.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return g.or([()=>g.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}o(ei,"ao");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=i}static Ci(e,n){let s=D(),i=D();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ti(e,n.fromCache,s,i)}}o(ti,"yo");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,i){return this.ki(e,n).next(r=>r||this.Oi(e,n,i,s)).next(r=>r||this.Mi(e,n))}ki(e,n){if(ma(n))return g.resolve(null);let s=Pe(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cr(n,null,"F"),s=Pe(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const a=D(...r);return this.Ni.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,s).next(u=>{const l=this.Fi(n,c);return this.$i(n,l,a,u.readTime)?this.ki(e,cr(n,null,"F")):this.Bi(e,l,n,u)}))})))}Oi(e,n,s,i){return ma(n)||i.isEqual(C.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(r=>{const a=this.Fi(n,r);return this.$i(n,a,s,i)?this.Mi(e,n):(aa()<=N.DEBUG&&I("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ur(n)),this.Bi(e,a,n,Ig(i,-1)))})}Fi(e,n){let s=new j(nl(e));return n.forEach((i,r)=>{to(e,r)&&(s=s.add(r))}),s}$i(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Mi(e,n){return aa()<=N.DEBUG&&I("QueryEngine","Using full collection scan to execute query:",ur(n)),this.Ni.getDocumentsMatchingQuery(e,n,Me.min())}Bi(e,n,s,i){return this.Ni.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(a=>{r=r.insert(a.key,a)}),r))}}o(ql,"po");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,s,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new q(O),this.qi=new vt(r=>Zr(r),eo),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ml(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}o(Hl,"Io");function om(t,e,n,s){return new Hl(t,e,n,s)}o(om,"To");async function Kl(t,e){const n=S(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const a=[],c=[];let u=D();for(const l of i){a.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}for(const l of r){c.push(l.batchId);for(const h of l.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(s,u).next(l=>({ji:l,removedBatchIds:a,addedBatchIds:c}))})})}o(Kl,"Eo");function am(t,e){const n=S(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Gi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let p=g.resolve();return d.forEach(m=>{p=p.next(()=>l.getEntry(c,m)).next(v=>{const A=u.docVersions.get(m);M(A!==null),v.version.compareTo(A)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),l.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=D();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}o(am,"Ao");function zl(t){const e=S(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}o(zl,"Ro");function cm(t,e){const n=S(t),s=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const c=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;c.push(n.Cs.removeMatchingKeys(r,h.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(r,h.addedDocuments,d)));let m=p.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(d)?m=m.withResumeToken(J.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),i=i.insert(d,m),function(v,A,k){return v.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(p,m,h)&&c.push(n.Cs.updateTargetData(r,m))});let u=xe(),l=D();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(r,h))}),c.push(um(r,a,e.documentUpdates).next(h=>{u=h.Wi,l=h.zi})),!s.isEqual(C.min())){const h=n.Cs.getLastRemoteSnapshotVersion(r).next(d=>n.Cs.setTargetsMetadata(r,r.currentSequenceNumber,s));c.push(h)}return g.waitFor(c).next(()=>a.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,l)).next(()=>u)}).then(r=>(n.Ui=i,r))}o(cm,"bo");function um(t,e,n){let s=D(),i=D();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let a=xe();return n.forEach((c,u)=>{const l=r.get(c);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(C.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):I("LocalStore","Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),{Wi:a,zi:i}})}o(um,"Po");function lm(t,e){const n=S(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}o(lm,"vo");function hm(t,e){const n=S(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Cs.getTargetData(s,e).next(r=>r?(i=r,g.resolve(i)):n.Cs.allocateTargetId(s).next(a=>(i=new qe(e,a,0,s.currentSequenceNumber),n.Cs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Ui.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}o(hm,"Vo");async function pr(t,e,n){const s=S(t),i=s.Ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,a=>s.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Hn(a))throw a;I("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}s.Ui=s.Ui.remove(e),s.qi.delete(i.target)}o(pr,"So");function ba(t,e,n){const s=S(t);let i=C.min(),r=D();return s.persistence.runTransaction("Execute query","readonly",a=>function(c,u,l){const h=S(c),d=h.qi.get(l);return d!==void 0?g.resolve(h.Ui.get(d)):h.Cs.getTargetData(u,l)}(s,a,Pe(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(a,c.targetId).next(u=>{r=u})}).next(()=>s.Li.getDocumentsMatchingQuery(a,e,n?i:C.min(),n?r:D())).next(c=>(dm(s,Rg(e),c),{documents:c,Hi:r})))}o(ba,"Do");function dm(t,e,n){let s=t.Ki.get(e)||C.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ki.set(e,s)}o(dm,"No");class gr{constructor(){this.activeTargetIds=wl()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}o(gr,"Ko");class Gl{constructor(){this.Lr=new gr,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,s){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new gr,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}o(Gl,"Qo");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{qr(e){}shutdown(){}}o(Wl,"jo");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){I("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){I("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}o(mr,"Wo");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}o(Ql,"Ho");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,i,r){const a=this.ho(e,n);I("RestConnection","Sending: ",a,s);const c={};return this.lo(c,i,r),this.fo(e,a,c,s).then(u=>(I("RestConnection","Received: ",u),u),u=>{throw sr("RestConnection",`${e} failed with error: `,u,"url: ",a,"request:",s),u})}_o(e,n,s,i,r,a){return this.ao(e,n,s,i,r)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Bt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ho(e,n){const s=fm[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,i){return new Promise((r,a)=>{const c=new yg;c.setWithCredentials(!0),c.listenOnce(pg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Li.NO_ERROR:const l=c.getResponseJson();I("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Li.TIMEOUT:I("Connection",'RPC "'+e+'" timed out'),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case Li.HTTP_ERROR:const h=c.getStatus();if(I("Connection",'RPC "'+e+'" failed with status:',h,"response text:",c.getResponseText()),h>0){const d=c.getResponseJson().error;if(d&&d.status&&d.message){const p=function(m){const v=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(v)>=0?v:f.UNKNOWN}(d.status);a(new y(p,d.message))}else a(new y(f.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{I("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);c.send(n,"POST",u,s,15)})}wo(e,n,s){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=dg(),a=fg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new mg({})),this.lo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");I("Connection","Creating WebChannel: "+u,c);const l=r.createWebChannel(u,c);let h=!1,d=!1;const p=new Ql({Hr:v=>{d?I("Connection","Not sending because WebChannel is closed:",v):(h||(I("Connection","Opening WebChannel transport."),l.open(),h=!0),I("Connection","WebChannel sending:",v),l.send(v))},Jr:()=>l.close()}),m=o((v,A,k)=>{v.listen(A,F=>{try{k(F)}catch(x){setTimeout(()=>{throw x},0)}})},"f");return m(l,rs.EventType.OPEN,()=>{d||I("Connection","WebChannel transport opened.")}),m(l,rs.EventType.CLOSE,()=>{d||(d=!0,I("Connection","WebChannel transport closed"),p.io())}),m(l,rs.EventType.ERROR,v=>{d||(d=!0,sr("Connection","WebChannel transport errored:",v),p.io(new y(f.UNAVAILABLE,"The operation could not be completed")))}),m(l,rs.EventType.MESSAGE,v=>{var A;if(!d){const k=v.data[0];M(!!k);const F=k,x=F.error||((A=F[0])===null||A===void 0?void 0:A.error);if(x){I("Connection","WebChannel received error:",x);const Fe=x.status;let Ee=function(Jt){const Zt=V[Jt];if(Zt!==void 0)return gl(Zt)}(Fe),Ze=x.message;Ee===void 0&&(Ee=f.INTERNAL,Ze="Unknown error status: "+Fe+" with message "+x.message),d=!0,p.io(new y(Ee,Ze)),l.close()}else I("Connection","WebChannel received:",k),p.ro(k)}}),m(a,gg.STAT_EVENT,v=>{v.stat===ra.PROXY?I("Connection","Detected buffering proxy"):v.stat===ra.NOPROXY&&I("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.so()},0),p}}o(Yl,"Jo");function Pi(){return typeof document<"u"?document:null}o(Pi,"Xo");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){return new El(t,!0)}o(ni,"Zo");class ro{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&I("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}o(ro,"tu");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n,s,i,r,a,c,u){this.Hs=e,this.vo=s,this.Vo=i,this.So=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new ro(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(Le(n.toString()),Le("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Do===n&&this.Qo(s,i)},s=>{e(()=>{const i=new y(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.jo(i)})})}Qo(e,n){const s=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{s(()=>this.jo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return I("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(I("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}o(oo,"eu");class Xl extends oo{constructor(e,n,s,i,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,a),this.It=r}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=Gg(this.It,e),s=function(i){if(!("targetChange"in i))return C.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?C.min():r.readTime?Re(r.readTime):C.min()}(e);return this.listener.zo(n,s)}Ho(e){const n={};n.database=fr(this.It),n.addTarget=function(i,r){let a;const c=r.target;return a=ar(c)?{documents:Yg(i,c)}:{query:Xg(i,c)},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?a.resumeToken=Tl(i,r.resumeToken):r.snapshotVersion.compareTo(C.min())>0&&(a.readTime=Ss(i,r.snapshotVersion.toTimestamp())),a}(this.It,e);const s=Zg(this.It,e);s&&(n.labels=s),this.Lo(n)}Jo(e){const n={};n.database=fr(this.It),n.removeTarget=e,this.Lo(n)}}o(Xl,"nu");class Jl extends oo{constructor(e,n,s,i,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,a),this.It=r,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(M(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=Qg(e.writeResults,e.commitTime),s=Re(e.commitTime);return this.listener.tu(s,n)}return M(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=fr(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Wg(this.It,s))};this.Lo(n)}}o(Jl,"su");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=s,this.It=i,this.su=!1}iu(){if(this.su)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.So.ao(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(f.UNKNOWN,i.toString())})}_o(e,n,s,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.So._o(e,n,s,r,a,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new y(f.UNKNOWN,r.toString())})}terminate(){this.su=!0}}o(Zl,"iu");class eh{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Le(n),this.uu=!1):I("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}o(eh,"ou");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=r,this.gu.qr(a=>{s.enqueueAndForget(async()=>{wt(this)&&(I("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=S(c);u.wu.add(4),await Wn(u),u.yu.set("Unknown"),u.wu.delete(4),await si(u)}(this))})}),this.yu=new eh(s,i)}}o(th,"uu");async function si(t){if(wt(t))for(const e of t.mu)await e(!0)}o(si,"cu");async function Wn(t){for(const e of t.mu)await e(!1)}o(Wn,"au");function nh(t,e){const n=S(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),uo(n)?co(n):zt(n).Oo()&&ao(n,e))}o(nh,"hu");function sh(t,e){const n=S(t),s=zt(n);n._u.delete(e),s.Oo()&&ih(n,e),n._u.size===0&&(s.Oo()?s.$o():wt(n)&&n.yu.set("Unknown"))}o(sh,"lu");function ao(t,e){t.pu.Mt(e.targetId),zt(t).Ho(e)}o(ao,"fu");function ih(t,e){t.pu.Mt(e),zt(t).Jo(e)}o(ih,"du");function co(t){t.pu=new Il({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),zt(t).start(),t.yu.cu()}o(co,"_u");function uo(t){return wt(t)&&!zt(t).ko()&&t._u.size>0}o(uo,"wu");function wt(t){return S(t).wu.size===0}o(wt,"mu");function rh(t){t.pu=void 0}o(rh,"gu");async function pm(t){t._u.forEach((e,n)=>{ao(t,e)})}o(pm,"yu");async function gm(t,e){rh(t),uo(t)?(t.yu.lu(e),co(t)):t.yu.set("Unknown")}o(gm,"pu");async function mm(t,e,n){if(t.yu.set("Online"),e instanceof so&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const a of i.targetIds)s._u.has(a)&&(await s.remoteSyncer.rejectListen(a,r),s._u.delete(a),s.pu.removeTarget(a))}(t,e)}catch(s){I("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await As(t,s)}else if(e instanceof fn?t.pu.Gt(e):e instanceof no?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(C.min()))try{const s=await zl(t.localStore);n.compareTo(s)>=0&&await function(i,r){const a=i.pu.te(r);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i._u.get(u);l&&i._u.set(u,l.withResumeToken(c.resumeToken,r))}}),a.targetMismatches.forEach(c=>{const u=i._u.get(c);if(!u)return;i._u.set(c,u.withResumeToken(J.EMPTY_BYTE_STRING,u.snapshotVersion)),ih(i,c);const l=new qe(u.target,c,1,u.sequenceNumber);ao(i,l)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){I("RemoteStore","Failed to raise snapshot:",s),await As(t,s)}}o(mm,"Iu");async function As(t,e,n){if(!Hn(e))throw e;t.wu.add(1),await Wn(t),t.yu.set("Offline"),n||(n=o(()=>zl(t.localStore),"n")),t.asyncQueue.enqueueRetryable(async()=>{I("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await si(t)})}o(As,"Tu");function oh(t,e){return e().catch(n=>As(t,n,e))}o(oh,"Eu");async function ii(t){const e=S(t),n=ze(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;ym(e);)try{const i=await lm(e.localStore,s);if(i===null){e.du.length===0&&n.$o();break}s=i.batchId,vm(e,i)}catch(i){await As(e,i)}ah(e)&&ch(e)}o(ii,"Au");function ym(t){return wt(t)&&t.du.length<10}o(ym,"Ru");function vm(t,e){t.du.push(e);const n=ze(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}o(vm,"bu");function ah(t){return wt(t)&&!ze(t).ko()&&t.du.length>0}o(ah,"Pu");function ch(t){ze(t).start()}o(ch,"vu");async function wm(t){ze(t).nu()}o(wm,"Vu");async function Im(t){const e=ze(t);for(const n of t.du)e.Zo(n.mutations)}o(Im,"Su");async function Em(t,e,n){const s=t.du.shift(),i=Js.from(s,e,n);await oh(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ii(t)}o(Em,"Du");async function Tm(t,e){e&&ze(t).Xo&&await async function(n,s){if(i=s.code,Fg(i)&&i!==f.ABORTED){const r=n.du.shift();ze(n).Fo(),await oh(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await ii(n)}var i}(t,e),ah(t)&&ch(t)}o(Tm,"Cu");async function Sa(t,e){const n=S(t);n.asyncQueue.verifyOperationInProgress(),I("RemoteStore","RemoteStore received new credentials");const s=wt(n);n.wu.add(3),await Wn(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await si(n)}o(Sa,"xu");async function _m(t,e){const n=S(t);e?(n.wu.delete(2),await si(n)):e||(n.wu.add(2),await Wn(n),n.yu.set("Unknown"))}o(_m,"Nu");function zt(t){return t.Iu||(t.Iu=function(e,n,s){const i=S(e);return i.iu(),new Xl(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:pm.bind(null,t),Zr:gm.bind(null,t),zo:mm.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),uo(t)?co(t):t.yu.set("Unknown")):(await t.Iu.stop(),rh(t))})),t.Iu}o(zt,"ku");function ze(t){return t.Tu||(t.Tu=function(e,n,s){const i=S(e);return i.iu(),new Jl(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,s)}(t.datastore,t.asyncQueue,{Yr:wm.bind(null,t),Zr:Tm.bind(null,t),eu:Im.bind(null,t),tu:Em.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await ii(t)):(await t.Tu.stop(),t.du.length>0&&(I("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}o(ze,"Ou");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new De,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,n,s,i,r){const a=Date.now()+s,c=new ri(e,n,a,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}o(ri,"Mu");function lo(t,e){if(Le("AsyncQueue",`${e}: ${t}`),Hn(t))return new y(f.UNAVAILABLE,`${e}: ${t}`);throw t}o(lo,"Fu");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e?(n,s)=>e(n,s)||E.comparator(n.key,s.key):(n,s)=>E.comparator(n.key,s.key),this.keyedMap=an(),this.sortedSet=new q(this.comparator)}static emptySet(e){return new ot(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ot;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}o(ot,"$u");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(){this.Eu=new q(E.comparator)}track(e){const n=e.doc.key,s=this.Eu.get(n);s?e.type!==0&&s.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&s.type!==1?this.Eu=this.Eu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Eu=this.Eu.remove(n):e.type===1&&s.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):b():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,s)=>{e.push(s)}),e}}o(yr,"Bu");class dt{constructor(e,n,s,i,r,a,c,u,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,i,r){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new dt(e,n,ot.emptySet(n),a,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}o(dt,"Lu");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.Ru=void 0,this.listeners=[]}}o(uh,"Uu");class lh{constructor(){this.queries=new vt(e=>tl(e),Ys),this.onlineState="Unknown",this.bu=new Set}}o(lh,"qu");async function bm(t,e){const n=S(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new uh),i)try{r.Ru=await n.onListen(s)}catch(a){const c=lo(a,`Initialization of query '${ur(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.vu(r.Ru)&&ho(n)}o(bm,"Ku");async function Sm(t,e){const n=S(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const a=r.listeners.indexOf(e);a>=0&&(r.listeners.splice(a,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}o(Sm,"Gu");function Am(t,e){const n=S(t);let s=!1;for(const i of e){const r=i.query,a=n.queries.get(r);if(a){for(const c of a.listeners)c.vu(i)&&(s=!0);a.Ru=i}}s&&ho(n)}o(Am,"Qu");function Cm(t,e,n){const s=S(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}o(Cm,"ju");function ho(t){t.bu.forEach(e=>{e.next()})}o(ho,"Wu");class hh{constructor(e,n,s){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new dt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=dt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}o(hh,"zu");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.key=e}}o(fo,"Zu");class po{constructor(e){this.key=e}}o(po,"tc");class dh{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=D(),this.mutatedKeys=D(),this.Gu=nl(e),this.Qu=new ot(this.Gu)}get ju(){return this.Uu}Wu(e,n){const s=n?n.zu:new yr,i=n?n.Qu:this.Qu;let r=n?n.mutatedKeys:this.mutatedKeys,a=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),m=to(this.query,d)?d:null,v=!!p&&this.mutatedKeys.has(p.key),A=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let k=!1;p&&m?p.data.isEqual(m.data)?v!==A&&(s.track({type:3,doc:m}),k=!0):this.Hu(p,m)||(s.track({type:2,doc:m}),k=!0,(u&&this.Gu(m,u)>0||l&&this.Gu(m,l)<0)&&(c=!0)):!p&&m?(s.track({type:0,doc:m}),k=!0):p&&!m&&(s.track({type:1,doc:p}),k=!0,(u||l)&&(c=!0)),k&&(m?(a=a.add(m),r=A?r.add(h):r.delete(h)):(a=a.delete(h),r=r.delete(h)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const h=this.query.limitType==="F"?a.last():a.first();a=a.delete(h.key),r=r.delete(h.key),s.track({type:1,doc:h})}return{Qu:a,zu:s,$i:c,mutatedKeys:r}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const r=e.zu.Au();r.sort((l,h)=>function(d,p){const m=o(v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}},"n");return m(d)-m(p)}(l.type,h.type)||this.Gu(l.doc,h.doc)),this.Ju(s);const a=n?this.Yu():[],c=this.Ku.size===0&&this.current?1:0,u=c!==this.qu;return this.qu=c,r.length!==0||u?{snapshot:new dt(this.query,e.Qu,i,r,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:a}:{Xu:a}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new yr,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=D(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new po(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new fo(s))}),n}tc(e){this.Uu=e.Hi,this.Ku=D();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return dt.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}o(dh,"ec");class fh{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}o(fh,"nc");class ph{constructor(e){this.key=e,this.nc=!1}}o(ph,"sc");class gh{constructor(e,n,s,i,r,a){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.sc={},this.ic=new vt(c=>tl(c),Ys),this.rc=new Map,this.oc=new Set,this.uc=new q(E.comparator),this.cc=new Map,this.ac=new Zs,this.hc={},this.lc=new Map,this.fc=ht.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}o(gh,"ic");async function km(t,e){const n=Fm(t);let s,i;const r=n.ic.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ec();else{const a=await hm(n.localStore,Pe(e));n.isPrimaryClient&&nh(n.remoteStore,a);const c=n.sharedClientState.addLocalQueryTarget(a.targetId);s=a.targetId,i=await Dm(n,e,s,c==="current",a.resumeToken)}return i}o(km,"rc");async function Dm(t,e,n,s,i){t._c=(d,p,m)=>async function(v,A,k,F){let x=A.view.Wu(k);x.$i&&(x=await ba(v.localStore,A.query,!1).then(({documents:Ze})=>A.view.Wu(Ze,x)));const Fe=F&&F.targetChanges.get(A.targetId),Ee=A.view.applyChanges(x,v.isPrimaryClient,Fe);return Ca(v,A.targetId,Ee.Xu),Ee.snapshot}(t,d,p,m);const r=await ba(t.localStore,e,!0),a=new dh(e,r.Hi),c=a.Wu(r.documents),u=Kt.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),l=a.applyChanges(c,t.isPrimaryClient,u);Ca(t,n,l.Xu);const h=new fh(e,n,a);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}o(Dm,"oc");async function Rm(t,e){const n=S(t),s=n.ic.get(e),i=n.rc.get(s.targetId);if(i.length>1)return n.rc.set(s.targetId,i.filter(r=>!Ys(r,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await pr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),sh(n.remoteStore,s.targetId),vr(n,s.targetId)}).catch(qn)):(vr(n,s.targetId),await pr(n.localStore,s.targetId,!0))}o(Rm,"uc");async function Nm(t,e,n){const s=Vm(t);try{const i=await function(r,a){const c=S(r),u=B.now(),l=a.reduce((p,m)=>p.add(m.key),D());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=xe(),v=D();return c.Gi.getEntries(p,l).next(A=>{m=A,m.forEach((k,F)=>{F.isValidDocument()||(v=v.add(k))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,m)).next(A=>{h=A;const k=[];for(const F of a){const x=Ug(F,h.get(F.key).overlayedDocument);x!=null&&k.push(new Je(F.key,x,Bu(x.value.mapValue),ge.exists(!0)))}return c.mutationQueue.addMutationBatch(p,u,k,a)}).next(A=>{d=A;const k=A.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(p,A.batchId,k)})}).then(()=>({batchId:d.batchId,changes:yl(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,a,c){let u=r.hc[r.currentUser.toKey()];u||(u=new q(O)),u=u.insert(a,c),r.hc[r.currentUser.toKey()]=u}(s,i.batchId,n),await Qn(s,i.changes),await ii(s.remoteStore)}catch(i){const r=lo(i,"Failed to persist write");n.reject(r)}}o(Nm,"cc");async function mh(t,e){const n=S(t);try{const s=await cm(n.localStore,e);e.targetChanges.forEach((i,r)=>{const a=n.cc.get(r);a&&(M(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.nc=!0:i.modifiedDocuments.size>0?M(a.nc):i.removedDocuments.size>0&&(M(a.nc),a.nc=!1))}),await Qn(n,s,e)}catch(s){await qn(s)}}o(mh,"ac");function Aa(t,e,n){const s=S(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ic.forEach((r,a)=>{const c=a.view.Pu(e);c.snapshot&&i.push(c.snapshot)}),function(r,a){const c=S(r);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.Pu(a)&&(u=!0)}),u&&ho(c)}(s.eventManager,e),i.length&&s.sc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}o(Aa,"hc");async function Om(t,e,n){const s=S(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.cc.get(e),r=i&&i.key;if(r){let a=new q(E.comparator);a=a.insert(r,z.newNoDocument(r,C.min()));const c=D().add(r),u=new Gn(C.min(),new Map,new j(O),a,c);await mh(s,u),s.uc=s.uc.remove(r),s.cc.delete(e),go(s)}else await pr(s.localStore,e,!1).then(()=>vr(s,e,n)).catch(qn)}o(Om,"lc");async function Lm(t,e){const n=S(t),s=e.batch.batchId;try{const i=await am(n.localStore,e);vh(n,s,null),yh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Qn(n,i)}catch(i){await qn(i)}}o(Lm,"fc");async function Mm(t,e,n){const s=S(t);try{const i=await function(r,a){const c=S(r);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(M(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(s.localStore,e);vh(s,e,n),yh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Qn(s,i)}catch(i){await qn(i)}}o(Mm,"dc");function yh(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}o(yh,"wc");function vh(t,e,n){const s=S(t);let i=s.hc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.hc[s.currentUser.toKey()]=i}}o(vh,"mc");function vr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||wh(t,s)})}o(vr,"gc");function wh(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(sh(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),go(t))}o(wh,"yc");function Ca(t,e,n){for(const s of n)s instanceof fo?(t.ac.addReference(s.key,e),Pm(t,s)):s instanceof po?(I("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||wh(t,s.key)):b()}o(Ca,"pc");function Pm(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(I("SyncEngine","New document in limbo: "+n),t.oc.add(s),go(t))}o(Pm,"Ic");function go(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new E(L.fromString(e)),s=t.fc.next();t.cc.set(s,new ph(n)),t.uc=t.uc.insert(n,s),nh(t.remoteStore,new qe(Pe(Xu(n.path)),s,2,Ws.at))}}o(go,"Tc");async function Qn(t,e,n){const s=S(t),i=[],r=[],a=[];s.ic.isEmpty()||(s.ic.forEach((c,u)=>{a.push(s._c(u,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const h=ti.Ci(u.targetId,l);r.push(h)}}))}),await Promise.all(a),s.sc.zo(i),await async function(c,u){const l=S(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.Si,p=>l.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>g.forEach(d.Di,p=>l.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Hn(h))throw h;I("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=l.Ui.get(d),m=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(m);l.Ui=l.Ui.insert(d,v)}}}(s.localStore,r))}o(Qn,"Ec");async function xm(t,e){const n=S(t);if(!n.currentUser.isEqual(e)){I("SyncEngine","User change. New user:",e.toKey());const s=await Kl(n.localStore,e);n.currentUser=e,function(i,r){i.lc.forEach(a=>{a.forEach(c=>{c.reject(new y(f.CANCELLED,r))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Qn(n,s.ji)}}o(xm,"Ac");function Um(t,e){const n=S(t),s=n.cc.get(e);if(s&&s.nc)return D().add(s.key);{let i=D();const r=n.rc.get(e);if(!r)return i;for(const a of r){const c=n.ic.get(a);i=i.unionWith(c.view.ju)}return i}}o(Um,"Rc");function Fm(t){const e=S(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=mh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Um.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Om.bind(null,e),e.sc.zo=Am.bind(null,e.eventManager),e.sc.wc=Cm.bind(null,e.eventManager),e}o(Fm,"kc");function Vm(t){const e=S(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mm.bind(null,e),e}o(Vm,"Oc");class Ih{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=ni(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return om(this.persistence,new ql,e.initialUser,this.It)}yc(e){return new Bl(ei.Bs,this.It)}gc(e){return new Gl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}o(Ih,"Fc");class Eh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Aa(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xm.bind(null,this.syncEngine),await _m(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lh}createDatastore(e){const n=ni(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new Yl(i));var i;return function(r,a,c,u){return new Zl(r,a,c,u)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=o(c=>Aa(this.syncEngine,c,0),"i"),a=mr.C()?new mr:new Wl,new th(n,s,i,r,a);var n,s,i,r,a}createSyncEngine(e,n){return function(s,i,r,a,c,u,l){const h=new gh(s,i,r,a,c,u);return l&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=S(e);I("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Wn(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}o(Eh,"Lc");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e,n){if(!n)throw new y(f.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}o(Th,"Uc");function $m(t,e,n,s){if(e===!0&&s===!0)throw new y(f.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}o($m,"qc");function ka(t){if(!E.isDocumentKey(t))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}o(ka,"Kc");function Da(t){if(E.isDocumentKey(t))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}o(Da,"Gc");function oi(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}o(oi,"Qc");function xt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oi(t);throw new y(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}o(xt,"jc");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new Map;class wr{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,$m("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}o(wr,"Hc");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wr(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Du;switch(n.type){case"gapi":const s=n.client;return new Lu(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ra.get(e);n&&(I("ComponentProvider","Removing Datastore"),Ra.delete(e),n.terminate())}(this),Promise.resolve()}}o(Yn,"Jc");function Bm(t,e,n,s={}){var i;const r=(t=xt(t,Yn))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&sr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=W.MOCK_USER;else{a=lf(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new W(u)}t._authCredentials=new Ru(new Yr(a,c))}}o(Bm,"Yc");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ne(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}}o(re,"Xc");class Gt{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Gt(this.firestore,e,this._query)}}o(Gt,"Zc");class Ne extends Gt{constructor(e,n,s){super(e,n,Xu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new E(e))}withConverter(e){return new Ne(this.firestore,e,this._path)}}o(Ne,"ta");function pI(t,e,...n){if(t=X(t),Th("collection","path",e),t instanceof Yn){const s=L.fromString(e,...n);return Da(s),new Ne(t,null,s)}{if(!(t instanceof re||t instanceof Ne))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(L.fromString(e,...n));return Da(s),new Ne(t.firestore,null,s)}}o(pI,"ea");function gI(t,e,...n){if(t=X(t),arguments.length===1&&(e=Xr.R()),Th("doc","path",e),t instanceof Yn){const s=L.fromString(e,...n);return ka(s),new re(t,null,new E(s))}{if(!(t instanceof re||t instanceof Ne))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(L.fromString(e,...n));return ka(s),new re(t.firestore,t instanceof Ne?t.converter:null,new E(s))}}o(gI,"sa");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Le("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}o(_h,"ua");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=W.UNAUTHENTICATED,this.clientId=Xr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{I("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(I("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new De;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=lo(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}o(bh,"_a");async function jm(t,e){t.asyncQueue.verifyOperationInProgress(),I("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Kl(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}o(jm,"wa");async function qm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hm(t);I("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>Sa(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>Sa(e.remoteStore,r)),t.onlineComponents=e}o(qm,"ma");async function Hm(t){return t.offlineComponents||(I("FirestoreClient","Using default OfflineComponentProvider"),await jm(t,new Ih)),t.offlineComponents}o(Hm,"ga");async function Sh(t){return t.onlineComponents||(I("FirestoreClient","Using default OnlineComponentProvider"),await qm(t,new Eh)),t.onlineComponents}o(Sh,"ya");function Km(t){return Sh(t).then(e=>e.syncEngine)}o(Km,"Ea");async function zm(t){const e=await Sh(t),n=e.eventManager;return n.onListen=km.bind(null,e.syncEngine),n.onUnlisten=Rm.bind(null,e.syncEngine),n}o(zm,"Ra");function Gm(t,e,n={}){const s=new De;return t.asyncQueue.enqueueAndForget(async()=>function(i,r,a,c,u){const l=new _h({next:d=>{r.enqueueAndForget(()=>Sm(i,h)),d.fromCache&&c.source==="server"?u.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new hh(a,l,{includeMetadataChanges:!0,ku:!0});return bm(i,h)}(await zm(t),t.asyncQueue,e,n,s)),s.promise}o(Gm,"Da");class Ah{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new ro(this,"async_queue_retry"),this.Wc=()=>{const n=Pi();n&&I("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Pi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Pi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new De;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Hn(e))throw e;I("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let a=r.message||"";return r.stack&&(a=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),a}(s);throw Le("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=ri.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.qc.push(i),i}zc(){this.Kc&&b()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}o(Ah,"ka");class Xn extends Yn{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new Ah,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kh(this),this._firestoreClient.terminate()}}o(Xn,"$a");function Wm(t,e){const n=typeof t=="object"?t:Cr(),s=typeof t=="string"?t:e||"(default)",i=mt(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=cf("firestore");r&&Bm(i,...r)}return i}o(Wm,"La");function Ch(t){return t._firestoreClient||kh(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}o(Ch,"Ua");function kh(t){var e;const n=t._freezeSettings(),s=function(i,r,a,c){return new $u(i,r,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new bh(t._authCredentials,t._appCheckCredentials,t._queue,s)}o(kh,"qa");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ft(J.fromBase64String(e))}catch(n){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ft(J.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}o(ft,"th");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}o(ai,"eh");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this._methodName=e}}o(ci,"sh");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}o(ui,"ih");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=/^__.*__$/;class Dh{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Je(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ht(e,this.data,n,this.fieldTransforms)}}o(Dh,"oh");function Rh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}o(Rh,"ch");class li{constructor(e,n,s,i,r,a){this.settings=e,this.databaseId=n,this.It=s,this.ignoreUndefinedProperties=i,r===void 0&&this.na(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new li(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.ua(e),i}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:s,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Cs(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Rh(this.sa)&&Qm.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}o(li,"ah");class Nh{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=s||ni(e)}da(e,n,s,i=!1){return new li({sa:e,methodName:n,fa:s,path:Q.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}o(Nh,"hh");function Oh(t){const e=t._freezeSettings(),n=ni(t._databaseId);return new Nh(t._databaseId,!!e.ignoreUndefinedProperties,n)}o(Oh,"lh");function Ym(t,e,n,s,i,r={}){const a=t.da(r.merge||r.mergeFields?2:0,e,n,i);Ph("Data must be an object, but it was:",a,s);const c=Lh(s,a);let u,l;if(r.merge)u=new pe(a.fieldMask),l=a.fieldTransforms;else if(r.mergeFields){const h=[];for(const d of r.mergeFields){const p=Jm(e,d,n);if(!a.contains(p))throw new y(f.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);ey(h,p)||h.push(p)}u=new pe(h),l=a.fieldTransforms.filter(d=>u.covers(d.field))}else u=null,l=a.fieldTransforms;return new Dh(new oe(c),u,l)}o(Ym,"fh");class hi extends ci{_toFieldTransform(e){return new ul(e.path,new Lt)}isEqual(e){return e instanceof hi}}o(hi,"wh");function Xm(t,e,n,s=!1){return mo(n,t.da(s?4:3,e))}o(Xm,"Th");function mo(t,e){if(Mh(t=X(t)))return Ph("Unsupported field value:",e,t),Lh(t,e);if(t instanceof ci)return function(n,s){if(!Rh(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const a of n){let c=mo(a,s.aa(r));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=X(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Og(s.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=B.fromDate(n);return{timestampValue:Ss(s.It,i)}}if(n instanceof B){const i=new B(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ss(s.It,i)}}if(n instanceof ui)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ft)return{bytesValue:Tl(s.It,n._byteString)};if(n instanceof re){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:io(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${oi(n)}`)}(t,e)}o(mo,"Eh");function Lh(t,e){const n={};return Uu(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jt(t,(s,i)=>{const r=mo(i,e.ra(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}o(Lh,"Ah");function Mh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof B||t instanceof ui||t instanceof ft||t instanceof re||t instanceof ci)}o(Mh,"Rh");function Ph(t,e,n){if(!Mh(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=oi(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}o(Ph,"bh");function Jm(t,e,n){if((e=X(e))instanceof ai)return e._internalPath;if(typeof e=="string")return xh(t,e);throw Cs("Field path arguments must be of type string or ",t,!1,void 0,n)}o(Jm,"Ph");const Zm=new RegExp("[~\\*/\\[\\]]");function xh(t,e,n){if(e.search(Zm)>=0)throw Cs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ai(...e.split("."))._internalPath}catch{throw Cs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}o(xh,"Vh");function Cs(t,e,n,s,i){const r=s&&!s.isEmpty(),a=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(r||a)&&(u+=" (found",r&&(u+=` in field ${s}`),a&&(u+=` in document ${i}`),u+=")"),new y(f.INVALID_ARGUMENT,c+t+u)}o(Cs,"Sh");function ey(t,e){return t.some(n=>n.isEqual(e))}o(ey,"Dh");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Uh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(vo("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}o(yo,"Ch");class Uh extends yo{data(){return super.data()}}o(Uh,"xh");function vo(t,e){return typeof e=="string"?xh(t,e):e instanceof ai?e._internalPath:e._delegate._internalPath}o(vo,"Nh");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}o(ty,"kh");class Fh{}o(Fh,"Oh");function mI(t,...e){for(const n of e)t=n._apply(t);return t}o(mI,"Mh");class Vh extends Fh{constructor(e,n,s){super(),this.ma=e,this.ga=n,this.ya=s,this.type="where"}_apply(e){const n=Oh(e.firestore),s=function(i,r,a,c,u,l,h){let d;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Oa(h,l);const m=[];for(const v of h)m.push(Na(c,i,v));d={arrayValue:{values:m}}}else d=Na(c,i,h)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Oa(h,l),d=Xm(a,r,h,l==="in"||l==="not-in");const p=ee.create(u,l,d);return function(m,v){if(v.dt()){const k=Zu(m);if(k!==null&&!k.isEqual(v.field))throw new y(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${k.toString()}' and '${v.field.toString()}'`);const F=Ju(m);F!==null&&ny(m,v.field,F)}const A=function(k,F){for(const x of k.filters)if(F.indexOf(x.op)>=0)return x.op;return null}(m,function(k){switch(k){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(v.op));if(A!==null)throw A===v.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${v.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${v.op.toString()}' filters with '${A.toString()}' filters.`)}(i,p),p}(e._query,"where",n,e.firestore._databaseId,this.ma,this.ga,this.ya);return new Gt(e.firestore,e.converter,function(i,r){const a=i.filters.concat([r]);return new qt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),a,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,s))}}o(Vh,"Fh");function yI(t,e,n){const s=e,i=vo("where",t);return new Vh(i,s,n)}o(yI,"$h");function Na(t,e,n){if(typeof(n=X(n))=="string"){if(n==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!el(e)&&n.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(L.fromString(n));if(!E.isDocumentKey(s))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return la(t,new E(s))}if(n instanceof re)return la(t,n._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${oi(n)}.`)}o(Na,"Yh");function Oa(t,e){if(!Array.isArray(t)||t.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new y(f.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}o(Oa,"Xh");function ny(t,e,n){if(!n.isEqual(e))throw new y(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}o(ny,"Zh");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{convertValue(e,n="none"){switch(lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){const s={};return jt(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new ui($(e.latitude),$(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Vu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(bn(e));default:return null}}convertTimestamp(e){const n=Ke(e);return new B(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=L.fromString(e);M(Al(s));const i=new Nt(s.get(1),s.get(3)),r=new E(s.popFirst(5));return i.isEqual(n)||Le(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}o($h,"tl");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}o(sy,"el");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}o(cn,"sl");class Bh extends yo{constructor(e,n,s,i,r,a){super(e,n,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(vo("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}o(Bh,"il");class pn extends Bh{data(e={}){return super.data(e)}}o(pn,"rl");class jh{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cn(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new pn(this._firestore,this._userDataWriter,s.key,s,new cn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(a=>({type:"added",doc:new pn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new cn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new pn(s._firestore,s._userDataWriter,a.doc.key,a.doc,new cn(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),l=r.indexOf(a.doc.key)),{type:iy(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}o(jh,"ol");function iy(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}o(iy,"ul");class qh extends $h{constructor(e){super(),this.firestore=e}convertBytes(e){return new ft(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,n)}}o(qh,"hl");function vI(t){t=xt(t,Gt);const e=xt(t.firestore,Xn),n=Ch(e),s=new qh(e);return ty(t._query),Gm(n,t._query).then(i=>new jh(e,s,t,i))}o(vI,"dl");function wI(t,e,n){t=xt(t,re);const s=xt(t.firestore,Xn),i=sy(t.converter,e,n);return Hh(s,[Ym(Oh(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ge.none())])}o(wI,"ml");function II(t){return Hh(xt(t.firestore,Xn),[new Xs(t._key,ge.none())])}o(II,"yl");function Hh(t,e){return function(n,s){const i=new De;return n.asyncQueue.enqueueAndForget(async()=>Nm(await Km(n),s,i)),i.promise}(Ch(t),e)}o(Hh,"El");function EI(){return new hi("serverTimestamp")}o(EI,"xl");(function(t,e=!0){(function(n){Bt=n})(Ln),we(new he("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),a=new Xn(new Nu(n.getProvider("auth-internal")),new Pu(n.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nt(c.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ue(oa,"3.7.1",t),ue(oa,"3.7.1","esm2017")})();function wo(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}o(wo,"__rest");function Kh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}o(Kh,"_prodErrorMap");const ry=Kh,zh=new Qe("auth","Firebase",Kh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La=new On("@firebase/auth");function ls(t,...e){La.logLevel<=N.ERROR&&La.error(`Auth (${Ln}): ${t}`,...e)}o(ls,"_logError");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t,...e){throw Io(t,...e)}o(de,"_fail");function ye(t,...e){return Io(t,...e)}o(ye,"_createError");function Gh(t,e,n){const s=Object.assign(Object.assign({},ry()),{[e]:n});return new Qe("auth","Firebase",s).create(e,{appName:t.name})}o(Gh,"_errorWithCustomMessage");function oy(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&de(t,"argument-error"),Gh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}o(oy,"_assertInstanceOf");function Io(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return zh.create(t,...e)}o(Io,"createErrorInternal");function T(t,e,...n){if(!t)throw Io(e,...n)}o(T,"_assert");function Ce(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ls(e),new Error(e)}o(Ce,"debugFail");function Ue(t,e){t||Ce(e)}o(Ue,"debugAssert");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Map;function ke(t){Ue(t instanceof Function,"Expected a class definition");let e=Ma.get(t);return e?(Ue(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ma.set(t,e),e)}o(ke,"_getInstance");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t,e){const n=mt(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(yn(r,e!=null?e:{}))return i;de(i,"already-initialized")}return n.initialize({options:e})}o(ay,"initializeAuth");function cy(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ke);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}o(cy,"_initializeAuthInstance");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}o(Ir,"_getCurrentUrl");function uy(){return Pa()==="http:"||Pa()==="https:"}o(uy,"_isHttpOrHttps");function Pa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}o(Pa,"_getCurrentScheme");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uy()||rc()||"connection"in navigator)?navigator.onLine:!0}o(ly,"_isOnline");function hy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}o(hy,"_getUserLanguage");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ue(n>e,"Short delay should be less than long delay!"),this.isMobile=Zd()||ef()}get(){return ly()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}o(Wt,"Delay");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t,e){Ue(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}o(Eo,"_emulatorUrl");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ce("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ce("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ce("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}o(To,"FetchProvider");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=new Wt(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}o(Jn,"_addTidIfNecessary");async function Zn(t,e,n,s,i={}){return Wh(t,i,async()=>{let r={},a={};s&&(e==="GET"?a=s:r={body:JSON.stringify(s)});const c=Nn(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),To.fetch()(Qh(t,t.config.apiHost,n,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},r))})}o(Zn,"_performApiRequest");async function Wh(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},dy),e);try{const i=new Yh(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw as(t,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const c=r.ok?a.errorMessage:a.error.message,[u,l]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw as(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw as(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw as(t,"user-disabled",a);const h=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Gh(t,h,l);de(t,h)}}catch(i){if(i instanceof fe)throw i;de(t,"network-request-failed")}}o(Wh,"_performFetchWithErrorHandling");async function es(t,e,n,s,i={}){const r=await Zn(t,e,n,s,i);return"mfaPendingCredential"in r&&de(t,"multi-factor-auth-required",{_serverResponse:r}),r}o(es,"_performSignInRequest");function Qh(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Eo(t.config,i):`${t.config.apiScheme}://${i}`}o(Qh,"_getFinalTarget");class Yh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ye(this.auth,"network-request-failed")),fy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}o(Yh,"NetworkTimeout");function as(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=ye(t,e,s);return i.customData._tokenResponse=n,i}o(as,"_makeTaggedError");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function py(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}o(py,"deleteAccount");async function gy(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}o(gy,"getAccountInfo");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}o(gn,"utcTimestampToDateString");async function my(t,e=!1){const n=X(t),s=await n.getIdToken(e),i=_o(s);T(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:gn(xi(i.auth_time)),issuedAtTime:gn(xi(i.iat)),expirationTime:gn(xi(i.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}o(my,"getIdTokenResult");function xi(t){return Number(t)*1e3}o(xi,"secondsStringToMilliseconds");function _o(t){var e;const[n,s,i]=t.split(".");if(n===void 0||s===void 0||i===void 0)return ls("JWT malformed, contained fewer than 3 sections"),null;try{const r=ic(s);return r?JSON.parse(r):(ls("Failed to decode base64 JWT payload"),null)}catch(r){return ls("Caught error parsing JWT payload as JSON",(e=r)===null||e===void 0?void 0:e.toString()),null}}o(_o,"_parseToken");function yy(t){const e=_o(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}o(yy,"_tokenExpiresIn");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof fe&&vy(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}o(Dn,"_logoutIfInvalidated");function vy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}o(vy,"isUserInvalidated");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}o(Xh,"ProactiveRefresh");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gn(this.lastLoginAt),this.creationTime=gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}o(bo,"UserMetadata");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Dn(t,gy(n,{idToken:s}));T(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Ey(r.providerUserInfo):[],c=Iy(t.providerData,a),u=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(c!=null&&c.length),h=u?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new bo(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(t,d)}o(ks,"_reloadWithoutSaving");async function wy(t){const e=X(t);await ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}o(wy,"reload");function Iy(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}o(Iy,"mergeProviderData");function Ey(t){return t.map(e=>{var{providerId:n}=e,s=wo(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}o(Ey,"extractProviderData");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ty(t,e){const n=await Wh(t,{},async()=>{const s=Nn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,a=Qh(t,i,"/v1/token",`key=${r}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",To.fetch()(a,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}o(Ty,"requestStsToken");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Ty(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,a=new Ut;return s&&(T(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(T(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),r&&(T(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ut,this.toJSON())}_performRefresh(){return Ce("not implemented")}}o(Ut,"StsTokenManager");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}o(Ve,"assertStringOrUndefined");class He{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=wo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new bo(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Dn(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return my(this,e)}reload(){return wy(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new He(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ks(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Dn(this,py(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,a,c,u,l,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(a=n.photoURL)!==null&&a!==void 0?a:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,F=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:Fe,emailVerified:Ee,isAnonymous:Ze,providerData:Jt,stsTokenManager:Zt}=n;T(Fe&&Zt,e,"internal-error");const Wd=Ut.fromJSON(this.name,Zt);T(typeof Fe=="string",e,"internal-error"),Ve(d,e.name),Ve(p,e.name),T(typeof Ee=="boolean",e,"internal-error"),T(typeof Ze=="boolean",e,"internal-error"),Ve(m,e.name),Ve(v,e.name),Ve(A,e.name),Ve(k,e.name),Ve(F,e.name),Ve(x,e.name);const Ii=new He({uid:Fe,auth:e,email:p,emailVerified:Ee,displayName:d,isAnonymous:Ze,photoURL:v,phoneNumber:m,tenantId:A,stsTokenManager:Wd,createdAt:F,lastLoginAt:x});return Jt&&Array.isArray(Jt)&&(Ii.providerData=Jt.map(Qd=>Object.assign({},Qd))),k&&(Ii._redirectEventId=k),Ii}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ut;i.updateFromServerResponse(n);const r=new He({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await ks(r),r}}o(He,"UserImpl");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o(So,"InMemoryPersistence");So.type="NONE";const xa=So;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,e,n){return`firebase:${t}:${e}:${n}`}o(hs,"_persistenceKeyName");class at{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=hs(this.userKey,i.apiKey,r),this.fullPersistenceKey=hs("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?He._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new at(ke(xa),e,s);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||ke(xa);const a=hs(s,e.config.apiKey,e.name);let c=null;for(const l of n)try{const h=await l._get(a);if(h){const d=He._fromJSON(e,h);l!==r&&(c=d),r=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new at(r,e,s):(r=u[0],c&&await r._set(a,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(a)}catch{}})),new at(r,e,s))}}o(at,"PersistenceUserManager");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ed(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Jh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nd(e))return"Blackberry";if(sd(e))return"Webos";if(Ao(e))return"Safari";if((e.includes("chrome/")||Zh(e))&&!e.includes("edge/"))return"Chrome";if(td(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}o(Ua,"_getBrowserName");function Jh(t=se()){return/firefox\//i.test(t)}o(Jh,"_isFirefox");function Ao(t=se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}o(Ao,"_isSafari");function Zh(t=se()){return/crios\//i.test(t)}o(Zh,"_isChromeIOS");function ed(t=se()){return/iemobile/i.test(t)}o(ed,"_isIEMobile");function td(t=se()){return/android/i.test(t)}o(td,"_isAndroid");function nd(t=se()){return/blackberry/i.test(t)}o(nd,"_isBlackBerry");function sd(t=se()){return/webos/i.test(t)}o(sd,"_isWebOS");function di(t=se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}o(di,"_isIOS");function _y(t=se()){var e;return di(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}o(_y,"_isIOSStandalone");function by(){return tf()&&document.documentMode===10}o(by,"_isIE10");function id(t=se()){return di(t)||td(t)||sd(t)||nd(t)||/windows phone/i.test(t)||ed(t)}o(id,"_isMobileBrowser");function Sy(){try{return!!(window&&window!==window.top)}catch{return!1}}o(Sy,"_isIframe");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t,e=[]){let n;switch(t){case"Browser":n=Ua(se());break;case"Worker":n=`${Ua(se())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ln}/${s}`}o(rd,"_getClientVersion");/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o(r=>new Promise((a,c)=>{try{const u=e(r);a(u)}catch(u){c(u)}}),"wrappedCallback");s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const s=[];try{for(const i of this.queue)await i(e),i.onAbort&&s.push(i.onAbort)}catch(i){s.reverse();for(const r of s)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}o(od,"AuthMiddlewareQueue");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Er(this),this.idTokenSubscription=new Er(this),this.beforeStateQueue=new od(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ke(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await at.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u==null?void 0:u.user)&&(i=u.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await ks(e)}catch(s){if(((n=s)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?X(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ke(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ke(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await at.create(this,[ke(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return T(a,this,"internal-error"),a.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}o(ad,"AuthImpl");function Qt(t){return X(t)}o(Qt,"_castAuth");class Er{constructor(e){this.auth=e,this.observer=null,this.addObserver=gf(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}o(Er,"Subscription");function Ay(t,e,n){const s=Qt(t);T(s._canInitEmulator,s,"emulator-config-failed"),T(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=cd(e),{host:a,port:c}=Cy(e),u=c===null?"":`:${c}`;s.config.emulator={url:`${r}//${a}${u}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:a,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ky()}o(Ay,"connectAuthEmulator");function cd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}o(cd,"extractProtocol");function Cy(t){const e=cd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Fa(s.substr(r.length+1))}}else{const[r,a]=s.split(":");return{host:r,port:Fa(a)}}}o(Cy,"extractHostAndPort");function Fa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}o(Fa,"parsePort");function ky(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}o(t,"attachBanner"),typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}o(ky,"emitEmulatorWarning");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ce("not implemented")}_getIdTokenResponse(e){return Ce("not implemented")}_linkToIdToken(e,n){return Ce("not implemented")}_getReauthenticationResolver(e){return Ce("not implemented")}}o(fi,"AuthCredential");async function Dy(t,e){return Zn(t,"POST","/v1/accounts:update",e)}o(Dy,"updateEmailPassword");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(t,e){return es(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}o(Ry,"signInWithPassword");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ny(t,e){return es(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}o(Ny,"signInWithEmailLink$1");async function Oy(t,e){return es(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}o(Oy,"signInWithEmailLinkForLinking");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends fi{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ft(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Ft(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ry(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ny(e,{email:this._email,oobCode:this._password});default:de(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Dy(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Oy(e,{idToken:n,email:this._email,oobCode:this._password});default:de(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}o(Ft,"EmailAuthCredential");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e){return es(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}o(At,"signInWithIdp");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="http://localhost";class Ge extends fi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ge(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):de("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=wo(n,["providerId","signInMethod"]);if(!s||!i)return null;const a=new Ge(s,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return At(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,At(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,At(e,n)}buildRequest(){const e={requestUri:Ly,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Nn(n)}return e}}o(Ge,"OAuthCredential");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}o(My,"parseMode");function Py(t){const e=tn(nn(t)).link,n=e?tn(nn(e)).deep_link_id:null,s=tn(nn(t)).deep_link_id;return(s?tn(nn(s)).link:null)||s||n||e||t}o(Py,"parseDeepLink");class pi{constructor(e){var n,s,i,r,a,c;const u=tn(nn(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,h=(s=u.oobCode)!==null&&s!==void 0?s:null,d=My((i=u.mode)!==null&&i!==void 0?i:null);T(l&&h&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=h,this.continueUrl=(r=u.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Py(e);try{return new pi(n)}catch{return null}}}o(pi,"ActionCodeURL");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.providerId=It.PROVIDER_ID}static credential(e,n){return Ft._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=pi.parseLink(n);return T(s,"argument-error"),Ft._fromEmailAndCode(e,s.code,s.tenantId)}}o(It,"EmailAuthProvider");It.PROVIDER_ID="password";It.EMAIL_PASSWORD_SIGN_IN_METHOD="password";It.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}o(gi,"FederatedAuthProvider");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends gi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}o(Yt,"BaseOAuthProvider");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Yt{constructor(){super("facebook.com")}static credential(e){return Ge._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Te.credentialFromTaggedObject(e)}static credentialFromError(e){return Te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Te.credential(e.oauthAccessToken)}catch{return null}}}o(Te,"FacebookAuthProvider");Te.FACEBOOK_SIGN_IN_METHOD="facebook.com";Te.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Yt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ge._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return _e.credential(n,s)}catch{return null}}}o(_e,"GoogleAuthProvider");_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Yt{constructor(){super("github.com")}static credential(e){return Ge._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return be.credential(e.oauthAccessToken)}catch{return null}}}o(be,"GithubAuthProvider");be.GITHUB_SIGN_IN_METHOD="github.com";be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends Yt{constructor(){super("twitter.com")}static credential(e,n){return Ge._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Se.credential(n,s)}catch{return null}}}o(Se,"TwitterAuthProvider");Se.TWITTER_SIGN_IN_METHOD="twitter.com";Se.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(t,e){return es(t,"POST","/v1/accounts:signUp",Jn(t,e))}o(xy,"signUp");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await He._fromIdTokenResponse(e,s,i),a=Va(s);return new We({user:r,providerId:a,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Va(s);return new We({user:e,providerId:i,_tokenResponse:s,operationType:n})}}o(We,"UserCredentialImpl");function Va(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}o(Va,"providerIdForResponse");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends fe{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Rn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Rn(e,n,s,i)}}o(Rn,"MultiFactorError");function ud(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Rn._fromErrorAndOperation(t,r,e,s):r})}o(ud,"_processCredentialSavingMfaContextIfNecessary");async function Uy(t,e,n=!1){const s=await Dn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return We._forOperation(t,"link",s)}o(Uy,"_link$1");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(t,e,n=!1){var s;const{auth:i}=t,r="reauthenticate";try{const a=await Dn(t,ud(i,r,e,t),n);T(a.idToken,i,"internal-error");const c=_o(a.idToken);T(c,i,"internal-error");const{sub:u}=c;return T(t.uid===u,i,"user-mismatch"),We._forOperation(t,r,a)}catch(a){throw((s=a)===null||s===void 0?void 0:s.code)==="auth/user-not-found"&&de(i,"user-mismatch"),a}}o(Fy,"_reauthenticate");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(t,e,n=!1){const s="signIn",i=await ud(t,s,e),r=await We._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}o(ld,"_signInWithCredential");async function Vy(t,e){return ld(Qt(t),e)}o(Vy,"signInWithCredential");async function TI(t,e,n){const s=Qt(t),i=await xy(s,{returnSecureToken:!0,email:e,password:n}),r=await We._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(r.user),r}o(TI,"createUserWithEmailAndPassword");function _I(t,e,n){return Vy(X(t),It.credential(e,n))}o(_I,"signInWithEmailAndPassword");function $y(t,e,n,s){return X(t).onIdTokenChanged(e,n,s)}o($y,"onIdTokenChanged");function By(t,e,n){return X(t).beforeAuthStateChanged(e,n)}o(By,"beforeAuthStateChanged");function bI(t,e,n,s){return X(t).onAuthStateChanged(e,n,s)}o(bI,"onAuthStateChanged");function SI(t){return X(t).signOut()}o(SI,"signOut");const Ds="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ds,"1"),this.storage.removeItem(Ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}o(Co,"BrowserPersistenceClass");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(){const t=se();return Ao(t)||di(t)}o(jy,"_iframeCannotSyncWebStorage");const qy=1e3,Hy=10;class ko extends Co{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=jy()&&Sy(),this.fallbackToPolling=id(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(s);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=o(()=>{const a=this.storage.getItem(s);!n&&this.localCache[s]===a||this.notifyListeners(s,a)},"triggerListeners"),r=this.storage.getItem(s);by()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Hy):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},qy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}o(ko,"BrowserLocalPersistence");ko.type="LOCAL";const Ky=ko;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Co{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o(Do,"BrowserSessionPersistence");Do.type="SESSION";const hd=Do;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}o(zy,"_allSettled");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ts(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(a).map(async l=>l(n.origin,r)),u=await zy(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}o(ts,"Receiver");ts.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}o(Ro,"_generateEventId");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise((c,u)=>{const l=Ro("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(p.data.response);break;default:clearTimeout(h),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}o(dd,"Sender");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(){return window}o(ve,"_window");function Gy(t){ve().location.href=t}o(Gy,"_setWindowLocation");/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(){return typeof ve().WorkerGlobalScope<"u"&&typeof ve().importScripts=="function"}o(fd,"_isWorker");async function Wy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}o(Wy,"_getActiveServiceWorker");function Qy(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}o(Qy,"_getServiceWorkerController");function Yy(){return fd()?self:null}o(Yy,"_getWorkerGlobalScope");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd="firebaseLocalStorageDb",Xy=1,Rs="firebaseLocalStorage",gd="fbase_key";class Xt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}o(Xt,"DBPromise");function mi(t,e){return t.transaction([Rs],e?"readwrite":"readonly").objectStore(Rs)}o(mi,"getObjectStore");function Jy(){const t=indexedDB.deleteDatabase(pd);return new Xt(t).toPromise()}o(Jy,"_deleteDatabase");function Tr(){const t=indexedDB.open(pd,Xy);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Rs,{keyPath:gd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Rs)?e(s):(s.close(),await Jy(),e(await Tr()))})})}o(Tr,"_openDatabase");async function $a(t,e,n){const s=mi(t,!0).put({[gd]:e,value:n});return new Xt(s).toPromise()}o($a,"_putObject");async function Zy(t,e){const n=mi(t,!1).get(e),s=await new Xt(n).toPromise();return s===void 0?null:s.value}o(Zy,"getObject");function Ba(t,e){const n=mi(t,!0).delete(e);return new Xt(n).toPromise()}o(Ba,"_deleteObject");const ev=800,tv=3;class No{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ts._getInstance(Yy()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wy(),!this.activeServiceWorker)return;this.sender=new dd(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);!s||((e=s[0])===null||e===void 0?void 0:e.fulfilled)&&((n=s[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Qy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tr();return await $a(e,Ds,"1"),await Ba(e,Ds),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$a(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Zy(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ba(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=mi(i,!1).getAll();return new Xt(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ev)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o(No,"IndexedDBLocalPersistence");No.type="LOCAL";const nv=No;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}o(sv,"getScriptParentElement");function iv(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=ye("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",sv().appendChild(s)})}o(iv,"_loadJS");function rv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}o(rv,"_generateCallbackName");new Wt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t,e){return e?ke(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}o(md,"_withDefaultResolver");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends fi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return At(e,this._buildIdpRequest())}_linkToIdToken(e,n){return At(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return At(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}o(yi,"IdpCredential");function ov(t){return ld(t.auth,new yi(t),t.bypassAuthState)}o(ov,"_signIn");function av(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Fy(n,new yi(t),t.bypassAuthState)}o(av,"_reauth");async function cv(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Uy(n,new yi(t),t.bypassAuthState)}o(cv,"_link");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ov;case"linkViaPopup":case"linkViaRedirect":return cv;case"reauthViaPopup":case"reauthViaRedirect":return av;default:de(this.auth,"internal-error")}}resolve(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}o(Oo,"AbstractPopupRedirectOperation");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=new Wt(2e3,1e4);async function AI(t,e,n){const s=Qt(t);oy(t,e,gi);const i=md(s,n);return new $e(s,"signInViaPopup",e,i).executeNotNull()}o(AI,"signInWithPopup");class $e extends Oo{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,$e.currentPopupAction&&$e.currentPopupAction.cancel(),$e.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){Ue(this.filter.length===1,"Popup operations only handle one event");const e=Ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$e.currentPopupAction=null}pollUserCancellation(){const e=o(()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ye(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uv.get())},"poll");e()}}o($e,"PopupOperation");$e.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="pendingRedirect",ds=new Map;class yd extends Oo{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ds.get(this.auth._key());if(!e){try{const s=await hv(this.resolver,this.auth)?await super.execute():null;e=o(()=>Promise.resolve(s),"readyOutcome")}catch(n){e=o(()=>Promise.reject(n),"readyOutcome")}ds.set(this.auth._key(),e)}return this.bypassAuthState||ds.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}o(yd,"RedirectAction");async function hv(t,e){const n=pv(e),s=fv(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}o(hv,"_getAndClearPendingRedirectStatus");function dv(t,e){ds.set(t._key(),e)}o(dv,"_overrideRedirectResult");function fv(t){return ke(t._redirectPersistence)}o(fv,"resolverPersistence");function pv(t){return hs(lv,t.config.apiKey,t.name)}o(pv,"pendingRedirectKey");async function gv(t,e,n=!1){const s=Qt(t),i=md(s,e),a=await new yd(s,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}o(gv,"_getRedirectResult");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=10*60*1e3;class vd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yv(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!wd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ye(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mv&&this.cachedEventUids.clear(),this.cachedEventUids.has(ja(e))}saveEventToCache(e){this.cachedEventUids.add(ja(e)),this.lastProcessedEventTime=Date.now()}}o(vd,"AuthEventManager");function ja(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}o(ja,"eventUid");function wd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}o(wd,"isNullRedirectEvent");function yv(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wd(t);default:return!1}}o(yv,"isRedirectEvent");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(t,e={}){return Zn(t,"GET","/v1/projects",e)}o(vv,"_getProjectConfig");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Iv=/^https?/;async function Ev(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vv(t);for(const n of e)try{if(Tv(n))return}catch{}de(t,"unauthorized-domain")}o(Ev,"_validateOrigin");function Tv(t){const e=Ir(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===s}if(!Iv.test(n))return!1;if(wv.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}o(Tv,"matchDomain");/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new Wt(3e4,6e4);function qa(){const t=ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}o(qa,"resetUnloadedGapiModules");function bv(t){return new Promise((e,n)=>{var s,i,r;function a(){qa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qa(),n(ye(t,"network-request-failed"))},timeout:_v.get()})}if(o(a,"loadGapiIframe"),!((i=(s=ve().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=ve().gapi)===null||r===void 0)&&r.load)a();else{const c=rv("iframefcb");return ve()[c]=()=>{gapi.load?a():n(ye(t,"network-request-failed"))},iv(`https://apis.google.com/js/api.js?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw fs=null,e})}o(bv,"loadGapi");let fs=null;function Sv(t){return fs=fs||bv(t),fs}o(Sv,"_loadGapi");/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Av=new Wt(5e3,15e3),Cv="__/auth/iframe",kv="emulator/auth/iframe",Dv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nv(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eo(e,kv):`https://${t.config.authDomain}/${Cv}`,s={apiKey:e.apiKey,appName:t.name,v:Ln},i=Rv.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Nn(s).slice(1)}`}o(Nv,"getIframeUrl");async function Ov(t){const e=await Sv(t),n=ve().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:Nv(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dv,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const a=ye(t,"network-request-failed"),c=ve().setTimeout(()=>{r(a)},Av.get());function u(){ve().clearTimeout(c),i(s)}o(u,"clearTimerAndResolve"),s.ping(u).then(u,()=>{r(a)})}))}o(Ov,"_openIframe");/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mv=500,Pv=600,xv="_blank",Uv="http://localhost";class _r{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}o(_r,"AuthPopup");function Fv(t,e,n,s=Mv,i=Pv){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Lv),{width:s.toString(),height:i.toString(),top:r,left:a}),l=se().toLowerCase();n&&(c=Zh(l)?xv:n),Jh(l)&&(e=e||Uv,u.scrollbars="yes");const h=Object.entries(u).reduce((p,[m,v])=>`${p}${m}=${v},`,"");if(_y(l)&&c!=="_self")return Vv(e||"",c),new _r(null);const d=window.open(e||"",c,h);T(d,t,"popup-blocked");try{d.focus()}catch{}return new _r(d)}o(Fv,"_open");function Vv(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}o(Vv,"openAsNewWindowIOS");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="__/auth/handler",Bv="emulator/auth/handler";function Ha(t,e,n,s,i,r){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ln,eventId:i};if(e instanceof gi){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",pf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(r||{}))a[u]=l}if(e instanceof Yt){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(a.scopes=u.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];return`${jv(t)}?${Nn(c).slice(1)}`}o(Ha,"_getRedirectUrl");function jv({config:t}){return t.emulator?Eo(t,Bv):`https://${t.authDomain}/${$v}`}o(jv,"getHandlerBase");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui="webStorageSupport";class Id{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hd,this._completeRedirectFn=gv,this._overrideRedirectResult=dv}async _openPopup(e,n,s,i){var r;Ue((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=Ha(e,n,s,Ir(),i);return Fv(e,a,Ro())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Gy(Ha(e,n,s,Ir(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Ue(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Ov(e),s=new vd(e);return n.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ui,{type:Ui},i=>{var r;const a=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ui];a!==void 0&&n(!!a),de(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ev(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return id()||Ao()||di()}}o(Id,"BrowserPopupRedirectResolver");const qv=Id;var Ka="@firebase/auth",za="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{var i;e(((i=s)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}o(Ed,"AuthInterop");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}o(Hv,"getVersionForPlatform");function Kv(t){we(new he("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:a}=s.options;return((c,u)=>{T(r&&!r.includes(":"),"invalid-api-key",{appName:c.name}),T(!(a!=null&&a.includes(":")),"argument-error",{appName:c.name});const l={apiKey:r,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rd(t)},h=new ad(c,u,l);return cy(h,n),h})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),we(new he("auth-internal",e=>{const n=Qt(e.getProvider("auth").getImmediate());return(s=>new Ed(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ue(Ka,za,Hv(t)),ue(Ka,za,"esm2017")}o(Kv,"registerAuth");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=5*60,Gv=uc("authIdTokenMaxAge")||zv;let Ga=null;const Wv=o(t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Gv)return;const i=n==null?void 0:n.token;Ga!==i&&(Ga=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))},"mintCookieFactory");function Qv(t=Cr()){const e=mt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ay(t,{popupRedirectResolver:qv,persistence:[nv,Ky,hd]}),s=uc("authTokenSyncURL");if(s){const r=Wv(s);By(n,r,()=>r(n.currentUser)),$y(n,a=>r(a))}const i=cc("auth");return i&&Ay(n,`http://${i}`),n}o(Qv,"getAuth");Kv("Browser");var Yv="firebase",Xv="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ue(Yv,Xv,"app");const Td="@firebase/installations",Lo="0.5.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=1e4,bd=`w:${Lo}`,Sd="FIS_v2",Jv="https://firebaseinstallations.googleapis.com/v1",Zv=60*60*1e3,ew="installations",tw="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},pt=new Qe(ew,tw,nw);function Ad(t){return t instanceof fe&&t.code.includes("request-failed")}o(Ad,"isServerError");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd({projectId:t}){return`${Jv}/projects/${t}/installations`}o(Cd,"getInstallationsEndpoint");function kd(t){return{token:t.token,requestStatus:2,expiresIn:iw(t.expiresIn),creationTime:Date.now()}}o(kd,"extractAuthTokenInfoFromResponse");async function Dd(t,e){const s=(await e.json()).error;return pt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}o(Dd,"getErrorFromResponse");function Rd({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}o(Rd,"getHeaders$1");function sw(t,{refreshToken:e}){const n=Rd(t);return n.append("Authorization",rw(e)),n}o(sw,"getHeadersWithAuth");async function Nd(t){const e=await t();return e.status>=500&&e.status<600?t():e}o(Nd,"retryIfServerError");function iw(t){return Number(t.replace("s","000"))}o(iw,"getExpiresInFromResponseExpiresIn");function rw(t){return`${Sd} ${t}`}o(rw,"getAuthorizationHeader");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ow({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Cd(t),i=Rd(t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={fid:n,authVersion:Sd,appId:t.appId,sdkVersion:bd},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await Nd(()=>fetch(s,c));if(u.ok){const l=await u.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:kd(l.authToken)}}else throw await Dd("Create Installation",u)}o(ow,"createInstallationRequest");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){return new Promise(e=>{setTimeout(e,t)})}o(Od,"sleep");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}o(aw,"bufferToBase64UrlSafe");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=/^[cdef][\w-]{21}$/,br="";function uw(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=lw(t);return cw.test(n)?n:br}catch{return br}}o(uw,"generateFid");function lw(t){return aw(t).substr(0,22)}o(lw,"encode");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return`${t.appName}!${t.appId}`}o(vi,"getKey");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=new Map;function Md(t,e){const n=vi(t);Pd(n,e),hw(n,e)}o(Md,"fidChanged");function Pd(t,e){const n=Ld.get(t);if(!!n)for(const s of n)s(e)}o(Pd,"callFidChangeCallbacks");function hw(t,e){const n=dw();n&&n.postMessage({key:t,fid:e}),fw()}o(hw,"broadcastFidChange");let it=null;function dw(){return!it&&"BroadcastChannel"in self&&(it=new BroadcastChannel("[Firebase] FID Change"),it.onmessage=t=>{Pd(t.data.key,t.data.fid)}),it}o(dw,"getBroadcastChannel");function fw(){Ld.size===0&&it&&(it.close(),it=null)}o(fw,"closeBroadcastChannel");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="firebase-installations-database",gw=1,gt="firebase-installations-store";let Fi=null;function Mo(){return Fi||(Fi=mc(pw,gw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(gt)}}})),Fi}o(Mo,"getDbPromise");async function Ns(t,e){const n=vi(t),i=(await Mo()).transaction(gt,"readwrite"),r=i.objectStore(gt),a=await r.get(n);return await r.put(e,n),await i.done,(!a||a.fid!==e.fid)&&Md(t,e.fid),e}o(Ns,"set");async function xd(t){const e=vi(t),s=(await Mo()).transaction(gt,"readwrite");await s.objectStore(gt).delete(e),await s.done}o(xd,"remove");async function wi(t,e){const n=vi(t),i=(await Mo()).transaction(gt,"readwrite"),r=i.objectStore(gt),a=await r.get(n),c=e(a);return c===void 0?await r.delete(n):await r.put(c,n),await i.done,c&&(!a||a.fid!==c.fid)&&Md(t,c.fid),c}o(wi,"update");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t){let e;const n=await wi(t.appConfig,s=>{const i=mw(s),r=yw(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===br?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}o(Po,"getInstallationEntry");function mw(t){const e=t||{fid:uw(),registrationStatus:0};return Ud(e)}o(mw,"updateOrCreateInstallationEntry");function yw(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(pt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=vw(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ww(t)}:{installationEntry:e}}o(yw,"triggerRegistrationIfNecessary");async function vw(t,e){try{const n=await ow(t,e);return Ns(t.appConfig,n)}catch(n){throw Ad(n)&&n.customData.serverCode===409?await xd(t.appConfig):await Ns(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}o(vw,"registerInstallation");async function ww(t){let e=await Wa(t.appConfig);for(;e.registrationStatus===1;)await Od(100),e=await Wa(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Po(t);return s||n}return e}o(ww,"waitUntilFidRegistration");function Wa(t){return wi(t,e=>{if(!e)throw pt.create("installation-not-found");return Ud(e)})}o(Wa,"updateInstallationRequest");function Ud(t){return Iw(t)?{fid:t.fid,registrationStatus:0}:t}o(Ud,"clearTimedOutRequest");function Iw(t){return t.registrationStatus===1&&t.registrationTime+_d<Date.now()}o(Iw,"hasInstallationRequestTimedOut");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew({appConfig:t,heartbeatServiceProvider:e},n){const s=Tw(t,n),i=sw(t,n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const a={installation:{sdkVersion:bd,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},u=await Nd(()=>fetch(s,c));if(u.ok){const l=await u.json();return kd(l)}else throw await Dd("Generate Auth Token",u)}o(Ew,"generateAuthTokenRequest");function Tw(t,{fid:e}){return`${Cd(t)}/${e}/authTokens:generate`}o(Tw,"getGenerateAuthTokenEndpoint");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,e=!1){let n;const s=await wi(t.appConfig,r=>{if(!Fd(r))throw pt.create("not-registered");const a=r.authToken;if(!e&&Sw(a))return r;if(a.requestStatus===1)return n=_w(t,e),r;{if(!navigator.onLine)throw pt.create("app-offline");const c=Cw(r);return n=bw(t,c),c}});return n?await n:s.authToken}o(xo,"refreshAuthToken");async function _w(t,e){let n=await Qa(t.appConfig);for(;n.authToken.requestStatus===1;)await Od(100),n=await Qa(t.appConfig);const s=n.authToken;return s.requestStatus===0?xo(t,e):s}o(_w,"waitUntilAuthTokenRequest");function Qa(t){return wi(t,e=>{if(!Fd(e))throw pt.create("not-registered");const n=e.authToken;return kw(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}o(Qa,"updateAuthTokenRequest");async function bw(t,e){try{const n=await Ew(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ns(t.appConfig,s),n}catch(n){if(Ad(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xd(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ns(t.appConfig,s)}throw n}}o(bw,"fetchAuthTokenFromServer");function Fd(t){return t!==void 0&&t.registrationStatus===2}o(Fd,"isEntryRegistered");function Sw(t){return t.requestStatus===2&&!Aw(t)}o(Sw,"isAuthTokenValid");function Aw(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Zv}o(Aw,"isAuthTokenExpired");function Cw(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}o(Cw,"makeAuthTokenRequestInProgressEntry");function kw(t){return t.requestStatus===1&&t.requestTime+_d<Date.now()}o(kw,"hasAuthTokenRequestTimedOut");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(t){const e=t,{installationEntry:n,registrationPromise:s}=await Po(e);return s?s.catch(console.error):xo(e).catch(console.error),n.fid}o(Dw,"getId");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(t,e=!1){const n=t;return await Nw(n),(await xo(n,e)).token}o(Rw,"getToken");async function Nw(t){const{registrationPromise:e}=await Po(t);e&&await e}o(Nw,"completeInstallationRegistration");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t){if(!t||!t.options)throw Vi("App Configuration");if(!t.name)throw Vi("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vi(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}o(Ow,"extractAppConfig");function Vi(t){return pt.create("missing-app-config-values",{valueName:t})}o(Vi,"getMissingValueError");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="installations",Lw="installations-internal",Mw=o(t=>{const e=t.getProvider("app").getImmediate(),n=Ow(e),s=mt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},"publicFactory"),Pw=o(t=>{const e=t.getProvider("app").getImmediate(),n=mt(e,Vd).getImmediate();return{getId:()=>Dw(n),getToken:i=>Rw(n,i)}},"internalFactory");function xw(){we(new he(Vd,Mw,"PUBLIC")),we(new he(Lw,Pw,"PRIVATE"))}o(xw,"registerInstallations");xw();ue(Td,Lo);ue(Td,Lo,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os="analytics",Uw="firebase_id",Fw="origin",Vw=60*1e3,$w="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$d="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new On("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t){return Promise.all(t.map(e=>e.catch(n=>n)))}o(Bd,"promiseAllSettled");function Bw(t,e){const n=document.createElement("script");n.src=`${$d}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}o(Bw,"insertScriptTag");function jw(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}o(jw,"getOrCreateDataLayer");async function qw(t,e,n,s,i,r){const a=s[i];try{if(a)await e[a];else{const u=(await Bd(n)).find(l=>l.measurementId===i);u&&await e[u.appId]}}catch(c){ae.error(c)}t("config",i,r)}o(qw,"gtagOnConfig");async function Hw(t,e,n,s,i){try{let r=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await Bd(n);for(const u of a){const l=c.find(d=>d.measurementId===u),h=l&&e[l.appId];if(h)r.push(h);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),t("event",s,i||{})}catch(r){ae.error(r)}}o(Hw,"gtagOnEvent");function Kw(t,e,n,s){async function i(r,a,c){try{r==="event"?await Hw(t,e,n,a,c):r==="config"?await qw(t,e,n,s,a,c):r==="consent"?t("consent","update",c):t("set",a)}catch(u){ae.error(u)}}return o(i,"gtagWrapper"),i}o(Kw,"wrapGtag");function zw(t,e,n,s,i){let r=o(function(...a){window[s].push(arguments)},"gtagCore");return window[i]&&typeof window[i]=="function"&&(r=window[i]),window[i]=Kw(r,t,e,n),{gtagCore:r,wrappedGtag:window[i]}}o(zw,"wrapOrCreateGtag");function Gw(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes($d)&&n.src.includes(t))return n;return null}o(Gw,"findGtagScriptOnPage");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},le=new Qe("analytics","Analytics",Ww);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=30,Yw=1e3;class jd{constructor(e={},n=Yw){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}o(jd,"RetryData");const qd=new jd;function Xw(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}o(Xw,"getHeaders");async function Jw(t){var e;const{appId:n,apiKey:s}=t,i={method:"GET",headers:Xw(s)},r=$w.replace("{app-id}",n),a=await fetch(r,i);if(a.status!==200&&a.status!==304){let c="";try{const u=await a.json();!((e=u.error)===null||e===void 0)&&e.message&&(c=u.error.message)}catch{}throw le.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}o(Jw,"fetchDynamicConfig");async function Zw(t,e=qd,n){const{appId:s,apiKey:i,measurementId:r}=t.options;if(!s)throw le.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:s};throw le.create("no-api-key")}const a=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Kd;return setTimeout(async()=>{c.abort()},n!==void 0?n:Vw),Hd({appId:s,apiKey:i,measurementId:r},a,c,e)}o(Zw,"fetchDynamicConfigWithRetry");async function Hd(t,{throttleEndTimeMillis:e,backoffCount:n},s,i=qd){var r,a;const{appId:c,measurementId:u}=t;try{await eI(s,e)}catch(l){if(u)return ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${(r=l)===null||r===void 0?void 0:r.message}]`),{appId:c,measurementId:u};throw l}try{const l=await Jw(t);return i.deleteThrottleMetadata(c),l}catch(l){const h=l;if(!tI(h)){if(i.deleteThrottleMetadata(c),u)return ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:c,measurementId:u};throw l}const d=Number((a=h==null?void 0:h.customData)===null||a===void 0?void 0:a.httpStatus)===503?Vo(n,i.intervalMillis,Qw):Vo(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(c,p),ae.debug(`Calling attemptFetch again in ${d} millis`),Hd(t,p,s,i)}}o(Hd,"attemptFetchDynamicConfigWithRetry");function eI(t,e){return new Promise((n,s)=>{const i=Math.max(e-Date.now(),0),r=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(r),s(le.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}o(eI,"setAbortableTimeout");function tI(t){if(!(t instanceof fe)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}o(tI,"isRetriableError");class Kd{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}o(Kd,"AnalyticsAbortSignal");async function nI(t,e,n,s,i){if(i&&i.global){t("event",n,s);return}else{const r=await e,a=Object.assign(Object.assign({},s),{send_to:r});t("event",n,a)}}o(nI,"logEvent$1");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(){var t;if(oc())try{await ac()}catch(e){return ae.warn(le.create("indexeddb-unavailable",{errorInfo:(t=e)===null||t===void 0?void 0:t.toString()}).message),!1}else return ae.warn(le.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}o(sI,"validateIndexedDB");async function iI(t,e,n,s,i,r,a){var c;const u=Zw(t);u.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&ae.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>ae.error(m)),e.push(u);const l=sI().then(m=>{if(m)return s.getId()}),[h,d]=await Promise.all([u,l]);Gw(r)||Bw(r,h.measurementId),i("js",new Date);const p=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return p[Fw]="firebase",p.update=!0,d!=null&&(p[Uw]=d),i("config",h.measurementId,p),h.measurementId}o(iI,"_initializeAnalytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.app=e}_delete(){return delete mn[this.app.options.appId],Promise.resolve()}}o(zd,"AnalyticsService");let mn={},Ya=[];const Xa={};let $i="dataLayer",rI="gtag",Ja,Gd,Za=!1;function oI(){const t=[];if(rc()&&t.push("This is a browser extension environment."),nf()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,i)=>`(${i+1}) ${s}`).join(" "),n=le.create("invalid-analytics-context",{errorInfo:e});ae.warn(n.message)}}o(oI,"warnOnBrowserContextMismatch");function aI(t,e,n){oI();const s=t.options.appId;if(!s)throw le.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw le.create("no-api-key");if(mn[s]!=null)throw le.create("already-exists",{id:s});if(!Za){jw($i);const{wrappedGtag:r,gtagCore:a}=zw(mn,Ya,Xa,$i,rI);Gd=r,Ja=a,Za=!0}return mn[s]=iI(t,Ya,Xa,e,Ja,$i,n),new zd(t)}o(aI,"factory");function cI(t=Cr()){t=X(t);const e=mt(t,Os);return e.isInitialized()?e.getImmediate():uI(t)}o(cI,"getAnalytics");function uI(t,e={}){const n=mt(t,Os);if(n.isInitialized()){const i=n.getImmediate();if(yn(e,n.getOptions()))return i;throw le.create("already-initialized")}return n.initialize({options:e})}o(uI,"initializeAnalytics");function lI(t,e,n,s){t=X(t),nI(Gd,mn[t.app.options.appId],e,n,s).catch(i=>ae.error(i))}o(lI,"logEvent");const ec="@firebase/analytics",tc="0.8.3";function hI(){we(new he(Os,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return aI(s,i,n)},"PUBLIC")),we(new he("analytics-internal",t,"PRIVATE")),ue(ec,tc),ue(ec,tc,"esm2017");function t(e){try{const n=e.getProvider(Os).getImmediate();return{logEvent:(s,i,r)=>lI(n,s,i,r)}}catch(n){throw le.create("interop-component-reg-failed",{reason:n})}}o(t,"internalFactory")}o(hI,"registerAnalytics");hI();const dI={apiKey:"AIzaSyDH5fcFTi6ynFO07tiBYHTup16rM0X4mjk",authDomain:"caderneta-digital-f5170.firebaseapp.com",projectId:"caderneta-digital-f5170",storageBucket:"caderneta-digital-f5170.appspot.com",messagingSenderId:"96086700983",appId:"1:96086700983:web:0b741196feb8fcc168ae32",measurementId:"G-ZFGWM3G4YL"},Uo=wc(dI),CI=Wm(Uo),kI=Qv(Uo);cI(Uo);export{yI as $,_e as G,mI as M,kI as a,vI as b,SI as c,CI as d,pI as e,_I as f,Qv as g,AI as h,TI as i,wI as m,bI as o,gI as s,EI as x,II as y};
//# sourceMappingURL=firebaseConfig.ea7f1421.js.map
