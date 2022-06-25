"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4884],{39694:(t,e,s)=>{s.d(e,{IO:()=>r,Lt:()=>n,ot:()=>h});const n=16895,r=33206,a=new TextEncoder,i=new TextDecoder("utf-8"),o={0:!1,1:!0,2:!0,64:!0,65:!0,66:!0,129:!0,193:!0,514:!0,577:!0,578:!0,705:!0,706:!0,1024:!0,1025:!0,1026:!0,1089:!0,1090:!0,1153:!0,1154:!0,1217:!0,1218:!0,4096:!0,4098:!0};class c{constructor(t){this.fs=t}open(t){const e=this.fs.realPath(t.node);this.fs.FS.isFile(t.node.mode)&&(t.file=this.fs.API.get(e))}close(t){if(!this.fs.FS.isFile(t.node.mode)||!t.file)return;const e=this.fs.realPath(t.node),s=t.flags;let n="string"==typeof s?parseInt(s,10):s;n&=8191;let r=!0;n in o&&(r=o[n]),r&&(this.fs.API.put(e,t.file),t.file=void 0)}read(t,e,s,n,r){var a;if(n<=0||void 0===t.file)return 0;const i=Math.min((null!==(a=t.file.data.length)&&void 0!==a?a:0)-r,n);try{e.set(t.file.data.subarray(r,r+i),s)}catch(t){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}return i}write(t,e,s,n,r){var a,i;if(n<=0||void 0===t.file)return 0;t.node.timestamp=Date.now();try{if(r+n>(null!==(i=null===(a=t.file)||void 0===a?void 0:a.data.length)&&void 0!==i?i:0)){const e=t.file.data?t.file.data:new Uint8Array;t.file.data=new Uint8Array(r+n),t.file.data.set(e)}return t.file.data.set(e.subarray(s,s+n),r),n}catch(t){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}}llseek(t,e,s){let n=e;if(1===s)n+=t.position;else if(2===s&&this.fs.FS.isFile(t.node.mode)){if(void 0===t.file)throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM);n+=t.file.data.length}if(n<0)throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EINVAL);return n}}class l{constructor(t){this.fs=t}getattr(t){return this.fs.API.getattr(this.fs.realPath(t))}setattr(t,e){}lookup(t,e){const s=this.fs.PATH.join2(this.fs.realPath(t),e),n=this.fs.API.lookup(s);if(!n.ok)throw this.fs.FS.genericErrors[this.fs.ERRNO_CODES.ENOENT];return this.fs.createNode(t,e,n.mode)}mknod(t,e,s,n){const r=this.fs.PATH.join2(this.fs.realPath(t),e);return this.fs.API.mknod(r,s),this.fs.createNode(t,e,s,n)}rename(t,e,s){this.fs.API.rename(t.parent?this.fs.PATH.join2(this.fs.realPath(t.parent),t.name):t.name,this.fs.PATH.join2(this.fs.realPath(e),s)),t.name=s,t.parent=e}unlink(t,e){this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(t),e))}rmdir(t,e){this.fs.API.rmdir(this.fs.PATH.join2(this.fs.realPath(t),e))}readdir(t){return this.fs.API.readdir(this.fs.realPath(t))}symlink(t,e,s){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}readlink(t){throw new this.fs.FS.ErrnoError(this.fs.ERRNO_CODES.EPERM)}}class u{constructor(t,e,s,n,r){this._baseUrl=t,this._driveName=e,this._mountpoint=s,this.FS=n,this.ERRNO_CODES=r}request(t,e,s=null){const n=new XMLHttpRequest;n.open(t,encodeURI(`${this.endpoint}${e}`),!1);try{null===s?n.send():n.send(s)}catch(t){console.error(t)}if(n.status>=400)throw new this.FS.ErrnoError(this.ERRNO_CODES.EINVAL);return JSON.parse(n.responseText)}lookup(t){return this.request("GET",`${this.normalizePath(t)}?m=lookup`)}getmode(t){return Number.parseInt(this.request("GET",`${this.normalizePath(t)}?m=getmode`))}mknod(t,e){return this.request("GET",`${this.normalizePath(t)}?m=mknod&args=${e}`)}rename(t,e){return this.request("GET",`${this.normalizePath(t)}?m=rename&args=${this.normalizePath(e)}`)}readdir(t){const e=this.request("GET",`${this.normalizePath(t)}?m=readdir`);return e.push("."),e.push(".."),e}rmdir(t){return this.request("GET",`${this.normalizePath(t)}?m=rmdir`)}get(t){const e=this.request("GET",`${this.normalizePath(t)}?m=get`),s=e.content,n=e.format;switch(n){case"json":case"text":return{data:a.encode(s),format:n};case"base64":{const t=atob(s),e=t.length,r=new Uint8Array(e);for(let s=0;s<e;s++)r[s]=t.charCodeAt(s);return{data:r,format:n}}default:throw new this.FS.ErrnoError(this.ERRNO_CODES.ENOENT)}}put(t,e){switch(e.format){case"json":case"text":return this.request("PUT",`${this.normalizePath(t)}?m=put&args=${e.format}`,i.decode(e.data));case"base64":{let s="";for(let t=0;t<e.data.byteLength;t++)s+=String.fromCharCode(e.data[t]);return this.request("PUT",`${this.normalizePath(t)}?m=put&args=${e.format}`,btoa(s))}}}getattr(t){const e=this.request("GET",`${this.normalizePath(t)}?m=getattr`);return e.atime=new Date(e.atime),e.mtime=new Date(e.mtime),e.ctime=new Date(e.ctime),e}normalizePath(t){return t.startsWith(this._mountpoint)&&(t=t.slice(this._mountpoint.length)),this._driveName&&(t=`${this._driveName}:${t}`),t}get endpoint(){return`${this._baseUrl}api/drive/`}}class h{constructor(t){this.FS=t.FS,this.PATH=t.PATH,this.ERRNO_CODES=t.ERRNO_CODES,this.API=new u(t.baseUrl,t.driveName,t.mountpoint,this.FS,this.ERRNO_CODES),this.driveName=t.driveName,this.node_ops=new l(this),this.stream_ops=new c(this)}mount(t){return this.createNode(null,t.mountpoint,511|n,0)}createNode(t,e,s,n){const r=this.FS;if(!r.isDir(s)&&!r.isFile(s))throw new r.ErrnoError(this.ERRNO_CODES.EINVAL);const a=r.createNode(t,e,s,n);return a.node_ops=this.node_ops,a.stream_ops=this.stream_ops,a}getMode(t){return this.API.getmode(t)}realPath(t){const e=[];let s=t;for(e.push(s.name);s.parent!==s;)s=s.parent,e.push(s.name);return e.reverse(),this.PATH.join.apply(null,e)}}},24884:(t,e,s)=>{s.r(e),s.d(e,{default:()=>U});var n=s(1005),r=s(9879),a=s.n(r),i=s(74547);const o=new i.Token("@jupyterlite/contents:IContents");var c,l;!function(t){t.JSON="application/json",t.PLAIN_TEXT="text/plain",t.OCTET_STREAM="octet/stream"}(c||(c={})),function(t){const e=JSON.parse(n.PageConfig.getOption("fileTypes")||"{}");t.getType=function(t,s=null){t=t.toLowerCase();for(const s of Object.values(e))for(const e of s.extensions||[])if(e===t&&s.mimeTypes&&s.mimeTypes.length)return s.mimeTypes[0];return a().getType(t)||s||c.OCTET_STREAM},t.hasFormat=function(t,s){t=t.toLowerCase();for(const n of Object.values(e))if(n.fileFormat===s)for(const e of n.extensions||[])if(e===t)return!0;return!1}}(l||(l={}));const u="JupyterLite Storage";class h{constructor(t){this.reduceBytesToString=(t,e)=>t+String.fromCharCode(e),this._serverContents=new Map,this._storageName=u,this._storageDrivers=null,this._localforage=t.localforage,this._storageName=t.storageName||u,this._storageDrivers=t.storageDrivers||null,this._ready=new i.PromiseDelegate}async initialize(){await this.initStorage(),this._ready.resolve(void 0)}async initStorage(){this._storage=this.createDefaultStorage(),this._counters=this.createDefaultCounters(),this._checkpoints=this.createDefaultCheckpoints()}get ready(){return this._ready.promise}get storage(){return this.ready.then((()=>this._storage))}get counters(){return this.ready.then((()=>this._counters))}get checkpoints(){return this.ready.then((()=>this._checkpoints))}get defaultStorageOptions(){const t=this._storageDrivers&&this._storageDrivers.length?this._storageDrivers:null;return{version:1,name:this._storageName,...t?{driver:t}:{}}}createDefaultStorage(){return this._localforage.createInstance({description:"Offline Storage for Notebooks and Files",storeName:"files",...this.defaultStorageOptions})}createDefaultCounters(){return this._localforage.createInstance({description:"Store the current file suffix counters",storeName:"counters",...this.defaultStorageOptions})}createDefaultCheckpoints(){return this._localforage.createInstance({description:"Offline Storage for Checkpoints",storeName:"checkpoints",...this.defaultStorageOptions})}async newUntitled(t){var e,s,r;const a=null!==(e=null==t?void 0:t.path)&&void 0!==e?e:"",i=null!==(s=null==t?void 0:t.type)&&void 0!==s?s:"notebook",o=(new Date).toISOString();let u=n.PathExt.dirname(a);const h=n.PathExt.basename(a),d=n.PathExt.extname(a),f=await this.get(u);let m,g="";switch(a&&!d&&f?(u=`${a}/`,g=""):u&&h?(u=`${u}/`,g=h):(u="",g=a),i){case"directory":g=`Untitled Folder${await this._incrementCounter("directory")||""}`,m={name:g,path:`${u}${g}`,last_modified:o,created:o,format:"json",mimetype:"",content:null,size:void 0,writable:!0,type:"directory"};break;case"notebook":{const t=await this._incrementCounter("notebook");g=g||`Untitled${t||""}.ipynb`,m={name:g,path:`${u}${g}`,last_modified:o,created:o,format:"json",mimetype:c.JSON,content:p.EMPTY_NB,size:JSON.stringify(p.EMPTY_NB).length,writable:!0,type:"notebook"};break}default:{const e=null!==(r=null==t?void 0:t.ext)&&void 0!==r?r:".txt",s=await this._incrementCounter("file"),n=l.getType(e)||c.OCTET_STREAM;let a;a=l.hasFormat(e,"text")||-1!==n.indexOf("text")?"text":-1!==e.indexOf("json")||-1!==e.indexOf("ipynb")?"json":"base64",g=g||`untitled${s||""}${e}`,m={name:g,path:`${u}${g}`,last_modified:o,created:o,format:a,mimetype:n,content:"",size:0,writable:!0,type:"file"};break}}const w=m.path;return await(await this.storage).setItem(w,m),m}async copy(t,e){let s=n.PathExt.basename(t);for(e=""===e?"":`${e.slice(1)}/`;await this.get(`${e}${s}`,{content:!0});){const t=n.PathExt.extname(s),e=s.replace(t,"");s=`${e} (copy)${t}`}const r=`${e}${s}`;let a=await this.get(t,{content:!0});if(!a)throw Error(`Could not find file with path ${t}`);return a={...a,name:s,path:r},await(await this.storage).setItem(r,a),a}async get(t,e){if(""===(t=decodeURIComponent(t.replace(/^\//,""))))return await this._getFolder(t);const s=await this.storage,r=await s.getItem(t),a=await this._getServerContents(t,e),i=r||a;if(!i)return null;if(!(null==e?void 0:e.content))return{...i,content:null,size:void 0};if("directory"===i.type){const e=new Map;await s.iterate(((s,n)=>{n===`${t}/${s.name}`&&e.set(s.name,s)}));const r=a?a.content:Array.from((await this._getServerDirectory(t)).values());for(const t of r)e.has(t.name)||e.set(t.name,t);const o=[...e.values()];return{name:n.PathExt.basename(t),path:t,last_modified:i.last_modified,created:i.created,format:"json",mimetype:c.JSON,content:o,size:void 0,writable:!0,type:"directory"}}return i}async rename(t,e){const s=decodeURIComponent(t),r=await this.get(s,{content:!0});if(!r)throw Error(`Could not find file with path ${s}`);const a=(new Date).toISOString(),i=n.PathExt.basename(e),o={...r,name:i,path:e,last_modified:a},c=await this.storage;if(await c.setItem(e,o),await c.removeItem(s),await(await this.checkpoints).removeItem(s),"directory"===r.type){let s;for(s of r.content)await this.rename(n.URLExt.join(t,s.name),n.URLExt.join(e,s.name))}return o}async save(t,e={}){var s;t=decodeURIComponent(t);const r=n.PathExt.extname(null!==(s=e.name)&&void 0!==s?s:"");let a=await this.get(t);if(a||(a=await this.newUntitled({path:t,ext:r,type:"file"})),!a)return null;const i=(new Date).toISOString();return a={...a,...e,last_modified:i},e.content&&"base64"===e.format&&(".ipynb"===r?a={...a,content:JSON.parse(this.unescapeContent(e.content)),format:"json",type:"notebook"}:l.hasFormat(r,"json")?a={...a,content:JSON.parse(this.unescapeContent(e.content)),format:"json",type:"file"}:l.hasFormat(r,"text")&&(a={...a,content:this.unescapeContent(e.content),format:"text",type:"file"})),await(await this.storage).setItem(t,a),a}unescapeContent(t){return decodeURIComponent(escape(atob(t)))}async delete(t){const e=`${t=decodeURIComponent(t)}/`,s=(await(await this.storage).keys()).filter((s=>s===t||s.startsWith(e)));await Promise.all(s.map(this.forgetPath,this))}async forgetPath(t){await Promise.all([(await this.storage).removeItem(t),(await this.checkpoints).removeItem(t)])}async createCheckpoint(t){var e;const s=await this.checkpoints;t=decodeURIComponent(t);const n=await this.get(t,{content:!0});if(!n)throw Error(`Could not find file with path ${t}`);const r=(null!==(e=await s.getItem(t))&&void 0!==e?e:[]).filter(Boolean);return r.push(n),r.length>5&&r.splice(0,r.length-5),await s.setItem(t,r),{id:""+(r.length-1),last_modified:n.last_modified}}async listCheckpoints(t){return(await(await this.checkpoints).getItem(t)||[]).filter(Boolean).map(this.normalizeCheckpoint,this)}normalizeCheckpoint(t,e){return{id:e.toString(),last_modified:t.last_modified}}async restoreCheckpoint(t,e){t=decodeURIComponent(t);const s=(await(await this.checkpoints).getItem(t)||[])[parseInt(e)];await(await this.storage).setItem(t,s)}async deleteCheckpoint(t,e){t=decodeURIComponent(t);const s=await(await this.checkpoints).getItem(t)||[],n=parseInt(e);s.splice(n,1),await(await this.checkpoints).setItem(t,s)}async _getFolder(t){const e=new Map,s=await this.storage;await s.iterate(((t,s)=>{s.includes("/")||e.set(t.path,t)}));for(const s of(await this._getServerDirectory(t)).values())e.has(s.path)||e.set(s.path,s);return t&&0===e.size?null:{name:"",path:t,last_modified:new Date(0).toISOString(),created:new Date(0).toISOString(),format:"json",mimetype:c.JSON,content:Array.from(e.values()),size:void 0,writable:!0,type:"directory"}}async _getServerContents(t,e){const s=n.PathExt.basename(t);let r=(await this._getServerDirectory(n.URLExt.join(t,".."))).get(s);if(!r)return null;if(r=r||{name:s,path:t,last_modified:new Date(0).toISOString(),created:new Date(0).toISOString(),format:"text",mimetype:c.PLAIN_TEXT,type:"file",writable:!0,content:null},null==e?void 0:e.content)if("directory"===r.type){const e=await this._getServerDirectory(t);r={...r,content:Array.from(e.values())}}else{const e=n.URLExt.join(n.PageConfig.getBaseUrl(),"files",t),a=await fetch(e);if(!a.ok)return null;const i=r.mimetype||a.headers.get("Content-Type"),o=n.PathExt.extname(s);r="notebook"===r.type||l.hasFormat(o,"json")||-1!==(null==i?void 0:i.indexOf("json"))||t.match(/\.(ipynb|[^/]*json[^/]*)$/)?{...r,content:await a.json(),format:"json",mimetype:r.mimetype||c.JSON}:l.hasFormat(o,"text")||-1!==i.indexOf("text")?{...r,content:await a.text(),format:"text",mimetype:i||c.PLAIN_TEXT}:{...r,content:btoa(new Uint8Array(await a.arrayBuffer()).reduce(this.reduceBytesToString,"")),format:"base64",mimetype:i||c.OCTET_STREAM}}return r}async _getServerDirectory(t){const e=this._serverContents.get(t)||new Map;if(!this._serverContents.has(t)){const s=n.URLExt.join(n.PageConfig.getBaseUrl(),"api/contents",t,"all.json");try{const t=await fetch(s),n=JSON.parse(await t.text());for(const t of n.content)e.set(t.name,t)}catch(t){console.warn(`don't worry, about ${t}... nothing's broken. If there had been a\n          file at ${s}, you might see some more files.`)}this._serverContents.set(t,e)}return e}async _incrementCounter(t){var e;const s=await this.counters,n=(null!==(e=await s.getItem(t))&&void 0!==e?e:-1)+1;return await s.setItem(t,n),n}}var p;!function(t){t.EMPTY_NB={metadata:{orig_nbformat:4},nbformat_minor:4,nbformat:4,cells:[]}}(p||(p={}));var d=s(39694),f=s(90691),m=s(24684),g=s(44951),w=s(47676),y=s(86853),v=s(54422),S=s(57889),E=s(20927),O=s.n(E);const _={id:"@jupyterlite/server-extension:localforage",autoStart:!0,provides:S.ILocalForage,activate:t=>({localforage:O()})},k={id:"@jupyterlite/server-extension:localforage-memory-storage",autoStart:!0,requires:[S.ILocalForage],activate:async(t,e)=>{JSON.parse(n.PageConfig.getOption("enableMemoryStorage")||"false")&&(console.warn("Memory storage fallback enabled: contents and settings may not be saved"),await(0,S.ensureMemoryStorage)(e.localforage))}},N={id:"@jupyterlite/server-extension:contents",requires:[S.ILocalForage],autoStart:!0,provides:o,activate:(t,e)=>{const s=n.PageConfig.getOption("contentsStorageName"),r=JSON.parse(n.PageConfig.getOption("contentsStorageDrivers")||"null"),{localforage:a}=e,i=new h({storageName:s,storageDrivers:r,localforage:a});return t.started.then((()=>i.initialize().catch(console.warn))),i}},P={id:"@jupyterlite/server-extension:contents-routes",autoStart:!0,requires:[o],activate:(t,e)=>{t.router.get("/api/contents/(.+)/checkpoints",(async(t,s)=>{const n=await e.listCheckpoints(s);return new Response(JSON.stringify(n))})),t.router.post("/api/contents/(.+)/checkpoints/(.*)",(async(t,s,n)=>{const r=await e.restoreCheckpoint(s,n);return new Response(JSON.stringify(r),{status:204})})),t.router.post("/api/contents/(.+)/checkpoints",(async(t,s)=>{const n=await e.createCheckpoint(s);return new Response(JSON.stringify(n),{status:201})})),t.router.delete("/api/contents/(.+)/checkpoints/(.*)",(async(t,s,n)=>{const r=await e.deleteCheckpoint(s,n);return new Response(JSON.stringify(r),{status:204})})),t.router.get("/api/contents(.*)",(async(t,s)=>{var n;const r={content:"1"===(null===(n=t.query)||void 0===n?void 0:n.content)},a=await e.get(s,r);return a?new Response(JSON.stringify(a)):new Response(null,{status:404})})),t.router.post("/api/contents(.*)",(async(t,s)=>{const n=t.body,r=null==n?void 0:n.copy_from;let a;return a=r?await e.copy(r,s):await e.newUntitled(n),a?new Response(JSON.stringify(a),{status:201}):new Response(null,{status:400})})),t.router.patch("/api/contents(.*)",(async(t,s)=>{var n,r;const a=null!==(r=null===(n=t.body)||void 0===n?void 0:n.path)&&void 0!==r?r:"";s="/"===s[0]?s.slice(1):s;const i=await e.rename(s,a);return new Response(JSON.stringify(i))})),t.router.put("/api/contents/(.+)",(async(t,s)=>{const n=t.body,r=await e.save(s,n);return new Response(JSON.stringify(r))})),t.router.delete("/api/contents/(.+)",(async(t,s)=>(await e.delete(s),new Response(null,{status:204}))))}},R={id:"@jupyterlite/server-extension:service-worker",autoStart:!0,provides:g.IServiceWorkerRegistrationWrapper,activate:t=>new g.ServiceWorkerRegistrationWrapper},I={id:"@jupyterlite/server-extension:emscripten-filesystem",autoStart:!0,activate:t=>{const e=new BroadcastChannel("/api/drive.v1");let s;e.onmessage=async r=>{const a=r.data,i=t.serviceManager.contents,o=a.path.replace("/api/drive/","");let c;switch(a.method){case"readdir":c=await i.get(o,{content:!0}),"directory"===c.type&&c.content?(s=c.content.map((t=>t.name)),e.postMessage(s)):e.postMessage([]);break;case"rmdir":await i.delete(o),e.postMessage(null);break;case"rename":if(null===a.args)return void e.postMessage(null);await i.rename(o,a.args[0]),e.postMessage(null);break;case"getmode":c=await i.get(o),"directory"===c.type?e.postMessage(d.Lt):e.postMessage(d.IO);break;case"lookup":try{c=await i.get(o),e.postMessage({ok:!0,mode:"directory"===c.type?d.Lt:d.IO})}catch(t){e.postMessage({ok:!1})}break;case"mknod":{if(null===a.args)return void e.postMessage(null);const t=Number.parseInt(a.args[0]);c=await i.newUntitled({path:n.PathExt.dirname(o),type:t===d.Lt?"directory":"file",ext:n.PathExt.extname(o)}),await i.rename(c.path,o),e.postMessage(null);break}case"getattr":c=await i.get(o),e.postMessage({dev:0,ino:0,mode:"directory"===c.type?d.Lt:d.IO,nlink:0,uid:0,gid:0,rdev:0,size:c.size,blksize:0,blocks:0,atime:c.last_modified,mtime:c.last_modified,ctime:c.last_modified,timestamp:0});break;case"get":{if(c=await i.get(o,{content:!0}),"directory"===c.type)return void e.postMessage(null);let t=c.content;"json"===c.format&&(t=JSON.stringify(c.content)),e.postMessage({content:t,format:c.format});break}case"put":if(null===a.args)return void e.postMessage(null);await i.save(o,{content:a.content,type:"file",format:a.args[0]}),e.postMessage(null)}}}},C={id:"@jupyterlite/server-extension:kernels",autoStart:!0,provides:f.IKernels,requires:[f.IKernelSpecs],activate:(t,e)=>new f.Kernels({kernelspecs:e})},b={id:"@jupyterlite/server-extension:kernels-routes",autoStart:!0,requires:[f.IKernels],activate:(t,e)=>{t.router.post("/api/kernels/(.*)/restart",(async(t,s)=>{const n=await e.restart(s);return new Response(JSON.stringify(n))})),t.router.delete("/api/kernels/(.*)",(async(t,s)=>{const n=await e.shutdown(s);return new Response(JSON.stringify(n),{status:204})}))}},x={id:"@jupyterlite/server-extension:kernelspec",autoStart:!0,provides:f.IKernelSpecs,activate:t=>new f.KernelSpecs},T={id:"@jupyterlite/server-extension:kernelspec-routes",autoStart:!0,requires:[f.IKernelSpecs],activate:(t,e)=>{t.router.get("/api/kernelspecs",(async t=>{const{specs:s}=e;if(!s)return new Response(null);const n={},r=s.kernelspecs;Object.keys(r).forEach((t=>{const e=r[t],{resources:s}=null!=e?e:{};n[t]={name:t,spec:e,resources:s}}));const a={default:s.default,kernelspecs:n};return new Response(JSON.stringify(a))}))}},j={id:"@jupyterlite/server-extension:licenses",autoStart:!0,provides:m.ILicenses,activate:t=>new m.Licenses},D={id:"@jupyterlite/server-extension:licenses-routes",autoStart:!0,requires:[m.ILicenses],activate(t,e){t.router.get("/api/licenses",(async t=>{const s=await e.get();return new Response(JSON.stringify(s))}))}},$={id:"@jupyterlite/server-extension:nbconvert-routes",autoStart:!0,activate:t=>{t.router.get("/api/nbconvert",(async t=>new Response(JSON.stringify({}))))}},A={id:"@jupyterlite/server-extension:sessions",autoStart:!0,provides:w.ISessions,requires:[f.IKernels],activate:(t,e)=>new w.Sessions({kernels:e})},J={id:"@jupyterlite/server-extension:sessions-routes",autoStart:!0,requires:[w.ISessions],activate:(t,e)=>{t.router.get("/api/sessions/(.+)",(async(t,s)=>{const n=await e.get(s);return new Response(JSON.stringify(n),{status:200})})),t.router.get("/api/sessions",(async t=>{const s=await e.list();return new Response(JSON.stringify(s),{status:200})})),t.router.patch("/api/sessions(.*)",(async(t,s)=>{const n=t.body,r=await e.patch(n);return new Response(JSON.stringify(r),{status:200})})),t.router.delete("/api/sessions/(.+)",(async(t,s)=>(await e.shutdown(s),new Response(null,{status:204})))),t.router.post("/api/sessions",(async t=>{const s=t.body,n=await e.startNew(s);return new Response(JSON.stringify(n),{status:201})}))}},M={id:"@jupyterlite/server-extension:settings",autoStart:!0,requires:[S.ILocalForage],provides:y.ISettings,activate:(t,e)=>{const s=n.PageConfig.getOption("settingsStorageName"),r=JSON.parse(n.PageConfig.getOption("settingsStorageDrivers")||"null"),{localforage:a}=e,i=new y.Settings({storageName:s,storageDrivers:r,localforage:a});return t.started.then((()=>i.initialize().catch(console.warn))),i}},U=[N,P,I,C,b,x,T,j,D,k,_,$,R,A,J,M,{id:"@jupyterlite/server-extension:settings-routes",autoStart:!0,requires:[y.ISettings],activate:(t,e)=>{const s="/api/settings/((?:@([^/]+?)[/])?([^/]+?):([^:]+))$";t.router.get(s,(async(t,s)=>{const n=await e.get(s);return new Response(JSON.stringify(n))})),t.router.put(s,(async(t,s)=>{const n=t.body,{raw:r}=n;return await e.save(s,r),new Response(null,{status:204})})),t.router.get("/api/settings",(async t=>{const s=await e.getAll();return new Response(JSON.stringify(s))}))}},{id:"@jupyterlite/server-extension:translation",autoStart:!0,provides:v.ITranslation,activate:t=>{const e=new v.Translation;return t.router.get("/api/translations/?(.*)",(async(t,s)=>{const n=await e.get(s||"all");return new Response(JSON.stringify(n))})),e}},{id:"@jupyterlite/server-extension:translation-routes",autoStart:!0,requires:[v.ITranslation],activate:(t,e)=>{t.router.get("/api/translations/?(.*)",(async(t,s)=>{const n=await e.get(s||"all");return new Response(JSON.stringify(n))}))}}]}}]);
//# sourceMappingURL=4884.7d948f6.js.map