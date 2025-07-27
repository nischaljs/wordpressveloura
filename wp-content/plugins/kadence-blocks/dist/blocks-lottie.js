(()=>{var t,e,i,o={168:(t,e,i)=>{"use strict";i.d(e,{a:()=>Gt,b:()=>Qt,c:()=>Yt,d:()=>ee,e:()=>Ce,f:()=>Se,g:()=>xe,h:()=>Le,i:()=>Oe,j:()=>Ae});var o={},n=Uint8Array,r=Uint16Array,a=Int32Array,s=new n([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),l=new n([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),d=new n([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),h=function(t,e){for(var i=new r(31),o=0;o<31;++o)i[o]=e+=1<<t[o-1];var n=new a(i[30]);for(o=1;o<30;++o)for(var s=i[o];s<i[o+1];++s)n[s]=s-i[o]<<5|o;return{b:i,r:n}},u=h(s,2),c=u.b,p=u.r;c[28]=258,p[258]=28;var f=h(l,0).b,v=new r(32768);for(b=0;b<32768;++b)m=(61680&(m=(52428&(m=(43690&b)>>1|(21845&b)<<1))>>2|(13107&m)<<2))>>4|(3855&m)<<4,v[b]=((65280&m)>>8|(255&m)<<8)>>1;var m,g=function(t,e,i){for(var o=t.length,n=0,a=new r(e);n<o;++n)t[n]&&++a[t[n]-1];var s,l=new r(e);for(n=1;n<e;++n)l[n]=l[n-1]+a[n-1]<<1;if(i){s=new r(1<<e);var d=15-e;for(n=0;n<o;++n)if(t[n])for(var h=n<<4|t[n],u=e-t[n],c=l[t[n]-1]++<<u,p=c|(1<<u)-1;c<=p;++c)s[v[c]>>d]=h}else for(s=new r(o),n=0;n<o;++n)t[n]&&(s[n]=v[l[t[n]-1]++]>>15-t[n]);return s},y=new n(288);for(b=0;b<144;++b)y[b]=8;for(b=144;b<256;++b)y[b]=9;for(b=256;b<280;++b)y[b]=7;for(b=280;b<288;++b)y[b]=8;var _=new n(32);for(b=0;b<32;++b)_[b]=5;var b,w=g(y,9,1),k=g(_,5,1),C=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},S=function(t,e,i){var o=e/8|0;return(t[o]|t[o+1]<<8)>>(7&e)&i},x=function(t,e){var i=e/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(7&e)},L=function(t){return(t+7)/8|0},O=function(t,e,i){return(null==e||e<0)&&(e=0),(null==i||i>t.length)&&(i=t.length),new n(t.subarray(e,i))},A=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],P=function(t,e,i){var o=new Error(e||A[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,P),!i)throw o;return o},$=function(t,e,i,o){var r=t.length,a=o?o.length:0;if(!r||e.f&&!e.l)return i||new n(0);var h=!i,u=h||2!=e.i,p=e.i;h&&(i=new n(3*r));var v=function(t){var e=i.length;if(t>e){var o=new n(Math.max(2*e,t));o.set(i),i=o}},m=e.f||0,y=e.p||0,_=e.b||0,b=e.l,A=e.d,$=e.m,M=e.n,I=8*r;do{if(!b){m=S(t,y,1);var E=S(t,y+1,3);if(y+=3,!E){var T=t[(H=L(y)+4)-4]|t[H-3]<<8,j=H+T;if(j>r){p&&P(0);break}u&&v(_+T),i.set(t.subarray(H,j),_),e.b=_+=T,e.p=y=8*j,e.f=m;continue}if(1==E)b=w,A=k,$=9,M=5;else if(2==E){var U=S(t,y,31)+257,N=S(t,y+10,15)+4,z=U+S(t,y+5,31)+1;y+=14;for(var F=new n(z),D=new n(19),B=0;B<N;++B)D[d[B]]=S(t,y+3*B,7);y+=3*N;var R=C(D),V=(1<<R)-1,q=g(D,R,1);for(B=0;B<z;){var H,J=q[S(t,y,V)];if(y+=15&J,(H=J>>4)<16)F[B++]=H;else{var Z=0,W=0;for(16==H?(W=3+S(t,y,3),y+=2,Z=F[B-1]):17==H?(W=3+S(t,y,7),y+=3):18==H&&(W=11+S(t,y,127),y+=7);W--;)F[B++]=Z}}var K=F.subarray(0,U),X=F.subarray(U);$=C(K),M=C(X),b=g(K,$,1),A=g(X,M,1)}else P(1);if(y>I){p&&P(0);break}}u&&v(_+131072);for(var G=(1<<$)-1,Q=(1<<M)-1,Y=y;;Y=y){var tt=(Z=b[x(t,y)&G])>>4;if((y+=15&Z)>I){p&&P(0);break}if(Z||P(2),tt<256)i[_++]=tt;else{if(256==tt){Y=y,b=null;break}var et=tt-254;if(tt>264){var it=s[B=tt-257];et=S(t,y,(1<<it)-1)+c[B],y+=it}var ot=A[x(t,y)&Q],nt=ot>>4;if(ot||P(3),y+=15&ot,X=f[nt],nt>3&&(it=l[nt],X+=x(t,y)&(1<<it)-1,y+=it),y>I){p&&P(0);break}u&&v(_+131072);var rt=_+et;if(_<X){var at=a-X,st=Math.min(X,rt);for(at+_<0&&P(3);_<st;++_)i[_]=o[at+_]}for(;_<rt;++_)i[_]=i[_-X]}}e.l=b,e.p=Y,e.b=_,e.f=m,b&&(m=1,e.m=$,e.d=A,e.n=M)}while(!m);return _!=i.length&&h?O(i,0,_):i.subarray(0,_)},M=new n(0),I=function(t,e,i){for(var o=t(),n=t.toString(),r=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<o.length;++a){var s=o[a],l=r[a];if("function"==typeof s){e+=";"+l+"=";var d=s.toString();if(s.prototype)if(-1!=d.indexOf("[native code]")){var h=d.indexOf(" ",8)+1;e+=d.slice(h,d.indexOf("(",h))}else for(var u in e+=d,s.prototype)e+=";"+l+".prototype."+u+"="+s.prototype[u].toString();else e+=d}else i[l]=s}return e},E=[],T=function(){return[n,r,a,s,l,d,c,f,w,k,v,A,g,C,S,x,L,O,P,$,B,j,U]},j=function(t){return postMessage(t,[t.buffer])},U=function(t){return t&&{out:t.size&&new n(t.size),dictionary:t.dictionary}},N=function(t,e){return t[e]|t[e+1]<<8},z=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},F=function(t,e){return z(t,e)+4294967296*z(t,e+4)};function D(t,e,i){return i||(i=e,e={}),"function"!=typeof i&&P(7),function(t,e,i,n,r,a){var s=function(t,e,i,n){if(!E[i]){for(var r="",a={},s=t.length-1,l=0;l<s;++l)r=I(t[l],r,a);E[i]={c:I(t[s],r,a),e:a}}var d=function(t,e){var i={};for(var o in t)i[o]=t[o];for(var o in e)i[o]=e[o];return i}({},E[i].e);return function(t,e,i,n,r){var a=new Worker(o[e]||(o[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return a.onmessage=function(t){var e=t.data,i=e.$e$;if(i){var o=new Error(i[0]);o.code=i[1],o.stack=i[2],r(o,null)}else r(null,e)},a.postMessage(i,n),a}(E[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",i,d,function(t){var e=[];for(var i in t)t[i].buffer&&e.push((t[i]=new t[i].constructor(t[i])).buffer);return e}(d),n)}(i,function(t){return j(B(t.data[0],U(t.data[1])))},1,function(t,e){s.terminate(),a(t,e)});return s.postMessage([t,e],e.consume?[t.buffer]:[]),function(){s.terminate()}}(t,e,[T],0,0,i)}function B(t,e){return $(t,{i:2},e&&e.out,e&&e.dictionary)}var R=typeof TextDecoder<"u"&&new TextDecoder;try{R.decode(M,{stream:!0})}catch{}function V(t,e){if(e){for(var i="",o=0;o<t.length;o+=16384)i+=String.fromCharCode.apply(null,t.subarray(o,o+16384));return i}if(R)return R.decode(t);var n=function(t){for(var e="",i=0;;){var o=t[i++],n=(o>127)+(o>223)+(o>239);if(i+n>t.length)return{s:e,r:O(t,i-1)};n?3==n?(o=((15&o)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536,e+=String.fromCharCode(55296|o>>10,56320|1023&o)):e+=1&n?String.fromCharCode((31&o)<<6|63&t[i++]):String.fromCharCode((15&o)<<12|(63&t[i++])<<6|63&t[i++]):e+=String.fromCharCode(o)}}(t),r=n.s;return(i=n.r).length&&P(8),r}var q="function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout?setTimeout:function(t){t()};function H(t,e,i){i||(i=e,e={}),"function"!=typeof i&&P(7);var o=[],r=function(){for(var t=0;t<o.length;++t)o[t]()},a={},s=function(t,e){q(function(){i(t,e)})};q(function(){s=i});for(var l=t.length-22;101010256!=z(t,l);--l)if(!l||t.length-l>65558)return s(P(13,0,1),null),r;var d=N(t,l+8);if(d){var h=d,u=z(t,l+16),c=4294967295==u||65535==h;if(c){var p=z(t,l-12);(c=101075792==z(t,p))&&(h=d=z(t,p+32),u=z(t,p+48))}for(var f=e&&e.filter,v=function(e){var i=function(t,e,i){var o=N(t,e+28),n=V(t.subarray(e+46,e+46+o),!(2048&N(t,e+8))),r=e+46+o,a=z(t,e+20),s=i&&4294967295==a?function(t,e){for(;1!=N(t,e);e+=4+N(t,e+2));return[F(t,e+12),F(t,e+4),F(t,e+20)]}(t,r):[a,z(t,e+24),z(t,e+42)],l=s[0],d=s[1],h=s[2];return[N(t,e+10),l,d,n,r+N(t,e+30)+N(t,e+32),h]}(t,u,c),l=i[0],h=i[1],p=i[2],v=i[3],m=i[4],g=i[5],y=function(t,e){return e+30+N(t,e+26)+N(t,e+28)}(t,g);u=m;var _=function(t,e){t?(r(),s(t,null)):(e&&(a[v]=e),--d||s(null,a))};if(!f||f({name:v,size:h,originalSize:p,compression:l}))if(l)if(8==l){var b=t.subarray(y,y+h);if(h<32e4)try{_(null,B(b,{out:new n(p)}))}catch(t){_(t,null)}else o.push(D(b,{size:p},_))}else _(P(14,"unknown compression type "+l,1),null);else _(null,O(t,y,y+h));else _(null,null)},m=0;m<h;++m)v()}else s(null,{});return r}function J(t){return(Array.isArray(t)?t:t.issues).reduce((t,e)=>{if(e.path){let i=e.path.map(({key:t})=>t).join(".");t.nested[i]=[...t.nested[i]||[],e.message]}else t.root=[...t.root||[],e.message];return t},{nested:{}})}var Z=class extends Error{issues;constructor(t){super(t[0].message),this.name="ValiError",this.issues=t}};function W(t,e){return{reason:null==t?void 0:t.reason,validation:e.validation,origin:(null==t?void 0:t.origin)||"value",message:e.message,input:e.input,abortEarly:null==t?void 0:t.abortEarly,abortPipeEarly:null==t?void 0:t.abortPipeEarly}}function K(t,e){return{reason:e,origin:null==t?void 0:t.origin,abortEarly:null==t?void 0:t.abortEarly,abortPipeEarly:null==t?void 0:t.abortPipeEarly}}function X(t,e,i,o){if(!e||!e.length)return{output:t};let n,r,a=t;for(let t of e){let e=t(a);if(e.issue){n=n||K(i,o);let t=W(n,e.issue);if(r?r.push(t):r=[t],n.abortEarly||n.abortPipeEarly)break}else a=e.output}return r?{issues:r}:{output:a}}function G(t,e){return t&&"string"!=typeof t?[void 0,t]:[t,e]}function Q(t,e,i,o,n,r){return{issues:[{reason:e,validation:i,origin:(null==t?void 0:t.origin)||"value",message:o,input:n,issues:r,abortEarly:null==t?void 0:t.abortEarly,abortPipeEarly:null==t?void 0:t.abortPipeEarly}]}}function Y(t,e,i){let[o,n]=G(e,i);return{schema:"array",array:{item:t},async:!1,_parse(e,i){if(!Array.isArray(e))return Q(i,"type","array",o||"Invalid type",e);let r,a=[];for(let o=0;o<e.length;o++){let n=e[o],s=t._parse(n,i);if(s.issues){let t={schema:"array",input:e,key:o,value:n};for(let e of s.issues)e.path?e.path.unshift(t):e.path=[t],null==r||r.push(e);if(r||(r=s.issues),null!=i&&i.abortEarly)break}else a.push(s.output)}return r?{issues:r}:X(a,n,i,"array")}}}function tt(t,e){let[i,o]=G(t,e);return{schema:"boolean",async:!1,_parse:(t,e)=>"boolean"!=typeof t?Q(e,"type","boolean",i||"Invalid type",t):X(t,o,e,"boolean")}}function et(t,e){return{schema:"literal",literal:t,async:!1,_parse:(i,o)=>i!==t?Q(o,"type","literal",e||"Invalid type",i):{output:i}}}function it(t,e){let[i,o]=G(t,e);return{schema:"number",async:!1,_parse:(t,e)=>"number"!=typeof t?Q(e,"type","number",i||"Invalid type",t):X(t,o,e,"number")}}function ot(t,e,i){let o,[n,r]=G(e,i);return{schema:"object",object:t,async:!1,_parse(e,i){if(!e||"object"!=typeof e)return Q(i,"type","object",n||"Invalid type",e);o=o||Object.entries(t);let a,s={};for(let[t,n]of o){let o=e[t],r=n._parse(o,i);if(r.issues){let n={schema:"object",input:e,key:t,value:o};for(let t of r.issues)t.path?t.path.unshift(n):t.path=[n],null==a||a.push(t);if(a||(a=r.issues),null!=i&&i.abortEarly)break}else s[t]=r.output}return a?{issues:a}:X(s,r,i,"object")}}}function nt(t){return{schema:"optional",wrapped:t,async:!1,_parse:(e,i)=>void 0===e?{output:e}:t._parse(e,i)}}function rt(t,e){let[i,o]=G(t,e);return{schema:"string",async:!1,_parse:(t,e)=>"string"!=typeof t?Q(e,"type","string",i||"Invalid type",t):X(t,o,e,"string")}}var at=["__proto__","prototype","constructor"];function st(t,e,i,o){let[n,r,a]=function(t,e,i){if("object"==typeof t&&!Array.isArray(t)){let[o,n]=G(e,i);return[t,o,n]}let[o,n]=G(t,e);return[void 0,o,n]}(e,i,o);return{schema:"tuple",tuple:{items:t,rest:n},async:!1,_parse(e,i){if(!Array.isArray(e)||!n&&t.length!==e.length||n&&t.length>e.length)return Q(i,"type","tuple",r||"Invalid type",e);let o,s=[];for(let n=0;n<t.length;n++){let r=e[n],a=t[n]._parse(r,i);if(a.issues){let t={schema:"tuple",input:e,key:n,value:r};for(let e of a.issues)e.path?e.path.unshift(t):e.path=[t],null==o||o.push(e);if(o||(o=a.issues),null!=i&&i.abortEarly)break}else s[n]=a.output}if(n)for(let r=t.length;r<e.length;r++){let t=e[r],a=n._parse(t,i);if(a.issues){let n={schema:"tuple",input:e,key:r,value:t};for(let t of a.issues)t.path?t.path.unshift(n):t.path=[n],null==o||o.push(t);if(o||(o=a.issues),null!=i&&i.abortEarly)break}else s[r]=a.output}return o?{issues:o}:X(s,a,i,"tuple")}}}function lt(t,e){return{schema:"union",union:t,async:!1,_parse(i,o){let n,r;for(let e of t){let t=e._parse(i,o);if(!t.issues){r=[t.output];break}if(n)for(let e of t.issues)n.push(e);else n=t.issues}return r?{output:r[0]}:Q(o,"type","union",e||"Invalid type",i,n)}}}function dt(t,e,i){let[o,n]=G(e,i);return ot(t.reduce((t,e)=>({...t,...e.object}),{}),o,n)}function ht(t,e){return i=>i>t?{issue:{validation:"max_value",message:e||"Invalid value",input:i}}:{output:i}}function ut(t,e){return i=>i<t?{issue:{validation:"min_value",message:e||"Invalid value",input:i}}:{output:i}}var ct,pt=Object.create,ft=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,mt=Object.getOwnPropertyNames,gt=Object.getPrototypeOf,yt=Object.prototype.hasOwnProperty,_t=(t,e)=>function(){return e||(0,t[mt(t)[0]])((e={exports:{}}).exports,e),e.exports},bt=_t({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0,t.copy=(t,e,i=0,o=0,n=t.width-i,r=t.height-o,a=0,s=0)=>{if(i|=0,o|=0,r|=0,a|=0,s|=0,(n|=0)<=0||r<=0)return;let l=new Uint32Array(t.data.buffer),d=new Uint32Array(e.data.buffer);for(let h=0;h<r;h++){let r=o+h;if(r<0||r>=t.height)continue;let u=s+h;if(!(u<0||u>=e.height))for(let o=0;o<n;o++){let n=i+o;if(n<0||n>=t.width)continue;let s=a+o;if(s<0||s>=e.width)continue;let h=r*t.width+n;d[u*e.width+s]=l[h]}}}}}),wt=_t({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateImageFactory=(t=[0,0,0,0],e=4)=>{if(e=Math.floor(e),isNaN(e)||e<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in t)||t.length<e)throw TypeError(`fill should be iterable with at least ${e} members`);let i=(t=new Uint8ClampedArray(t).slice(0,e)).every(t=>0===t);return(o,n,r)=>{if(void 0===o||void 0===n)throw TypeError("Not enough arguments");if(o=Math.floor(o),n=Math.floor(n),isNaN(o)||o<1||isNaN(n)||n<1)throw TypeError("Index or size is negative or greater than the allowed amount");let a=o*n*e;if(void 0===r&&(r=new Uint8ClampedArray(a)),r instanceof Uint8ClampedArray){if(r.length!==a)throw TypeError("Index or size is negative or greater than the allowed amount");if(!i)for(let i=0;i<n;i++)for(let n=0;n<o;n++){let a=(i*o+n)*e;for(let i=0;i<e;i++)r[a+i]=t[i]}return{get width(){return o},get height(){return n},get data(){return r}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},t.createImage=t.CreateImageFactory()}}),kt=_t({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0;var e=(t,e)=>{if(t<=-e||t>=e||0==t)return 0;let i=t*Math.PI;return Math.sin(i)/i*Math.sin(i/e)/(i/e)},i=t=>Math.round(16383*t);t.filters=(t,o,n,r,a)=>{let s=a?2:3,l=1/n,d=Math.min(1,n),h=s/d,u=Math.floor(2*(h+1)),c=new Int16Array((u+2)*o),p=0;for(let n=0;n<o;n++){let a=(n+.5)*l+r,u=Math.max(0,Math.floor(a-h)),f=Math.min(t-1,Math.ceil(a+h)),v=f-u+1,m=new Float32Array(v),g=new Int16Array(v),y=0,_=0;for(let t=u;t<=f;t++){let i=e((t+.5-a)*d,s);y+=i,m[_]=i,_++}let b=0;for(let t=0;t<m.length;t++){let e=m[t]/y;b+=e,g[t]=i(e)}g[o>>1]+=i(1-b);let w=0;for(;w<g.length&&0===g[w];)w++;let k=g.length-1;for(;k>0&&0===g[k];)k--;let C=u+w,S=k-w+1;c[p++]=C,c[p++]=S,c.set(g.subarray(w,k+1),p),p+=S}return c}}}),Ct=_t({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.convolve=void 0,t.convolve=(t,e,i,o,n,r)=>{let a=0,s=0;for(let l=0;l<o;l++){let d=0;for(let i=0;i<n;i++){let i=a+4*r[d++]|0,n=0,l=0,h=0,u=0;for(let e=r[d++];e>0;e--){let e=r[d++];n=n+e*t[i]|0,l=l+e*t[i+1]|0,h=h+e*t[i+2]|0,u=u+e*t[i+3]|0,i=i+4|0}e[s]=n+8192>>14,e[s+1]=l+8192>>14,e[s+2]=h+8192>>14,e[s+3]=u+8192>>14,s=s+4*o|0}s=4*(l+1)|0,a=(l+1)*i*4|0}}}}),St=_t({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.lanczos2=t.lanczos=void 0;var e=bt(),i=wt(),o=kt(),n=Ct(),r=(t,e,i=!1)=>{let r=e.width/t.width,a=e.height/t.height,s=o.filters(t.width,e.width,r,0,i),l=o.filters(t.height,e.height,a,0,i),d=new Uint8ClampedArray(e.width*t.height*4);n.convolve(t.data,d,t.width,t.height,e.width,s),n.convolve(d,e.data,t.height,e.width,e.height,l)};t.lanczos=(t,o,n=0,a=0,s=t.width-n,l=t.height-a,d=0,h=0,u=o.width-d,c=o.height-h)=>{if(a|=0,l|=0,d|=0,h|=0,u|=0,c|=0,(s|=0)<=0||l<=0||u<=0||c<=0)return;if(0==(n|=0)&&0===a&&s===t.width&&l===t.height&&0===d&&0===h&&u===o.width&&c===o.height)return void r(t,o);let p=i.createImage(s,l),f=i.createImage(u,c);e.copy(t,p,n,a),r(p,f),e.copy(f,o,0,0,f.width,f.height,d,h)},t.lanczos2=(t,o,n=0,a=0,s=t.width-n,l=t.height-a,d=0,h=0,u=o.width-d,c=o.height-h)=>{if(a|=0,l|=0,d|=0,h|=0,u|=0,c|=0,(s|=0)<=0||l<=0||u<=0||c<=0)return;if(0==(n|=0)&&0===a&&s===t.width&&l===t.height&&0===d&&0===h&&u===o.width&&c===o.height)return void r(t,o,!0);let p=i.createImage(s,l),f=i.createImage(u,c);e.copy(t,p,n,a),r(p,f,!0),e.copy(f,o,0,0,f.width,f.height,d,h)}}}),xt=((ct=xt||{}).Bounce="bounce",ct.Normal="normal",ct),Lt=function(t){return{schema:"native_enum",nativeEnum:t,async:!1,_parse:(e,i)=>Object.values(t).includes(e)?{output:e}:Q(i,"type","native_enum","Invalid type",e)}}(xt),Ot=ot({autoplay:nt(tt()),defaultTheme:nt(rt()),direction:nt(lt([et(1),et(-1)])),hover:nt(tt()),id:rt(),intermission:nt(it()),loop:nt(lt([tt(),it()])),playMode:nt(Lt),speed:nt(it()),themeColor:nt(rt())}),At=ot({animations:Y(rt()),id:rt()}),Pt=ot({activeAnimationId:nt(rt()),animations:Y(Ot),author:nt(rt()),custom:nt(function(t,e){let[i,o,n,r]=function(t,e,i,o){if("object"==typeof e&&!Array.isArray(e)){let[n,r]=G(i,o);return[t,e,n,r]}let[n,r]=G(e,i);return[rt(),t,n,r]}(t,e,void 0,void 0);return{schema:"record",record:{key:i,value:o},async:!1,_parse(t,e){if(!t||"object"!=typeof t)return Q(e,"type","record",n||"Invalid type",t);let a,s={};for(let[n,r]of Object.entries(t))if(!at.includes(n)){let l,d=i._parse(n,{origin:"key",abortEarly:null==e?void 0:e.abortEarly,abortPipeEarly:null==e?void 0:e.abortPipeEarly});if(d.issues){l={schema:"record",input:t,key:n,value:r};for(let t of d.issues)t.path=[l],null==a||a.push(t);if(a||(a=d.issues),null!=e&&e.abortEarly)break}let h=o._parse(r,e);if(h.issues){l=l||{schema:"record",input:t,key:n,value:r};for(let t of h.issues)t.path?t.path.unshift(l):t.path=[l],null==a||a.push(t);if(a||(a=h.issues),null!=e&&e.abortEarly)break}!d.issues&&!h.issues&&(s[d.output]=h.output)}return a?{issues:a}:X(s,r,e,"record")}}}(rt(),function(t=[]){return{schema:"any",async:!1,_parse:(e,i)=>X(e,t,i,"any")}}())),description:nt(rt()),generator:nt(rt()),keywords:nt(rt()),revision:nt(it()),themes:nt(Y(At)),states:nt(Y(rt())),version:nt(rt())}),$t=function(t,e){let[i,o]=G(void 0,void 0);return ot(Object.entries(t.object).reduce((t,[i,o])=>e.includes(i)?t:{...t,[i]:o},{}),i,o)}(Ot,["id"]),Mt=ot({state:rt()}),It=Mt,Et=dt([Mt,ot({ms:it()})]),Tt=dt([Mt,ot({count:it()})]),jt=Mt,Ut=Mt,Nt=Mt,zt=dt([Mt,ot({threshold:nt(Y(it([ut(0),ht(1)])))})]),Ft=ot({onAfter:nt(Et),onClick:nt(It),onComplete:nt(Nt),onEnter:nt(Tt),onMouseEnter:nt(jt),onMouseLeave:nt(Ut),onShow:nt(zt)}),Dt=dt([$t,ot({playOnScroll:nt(st([it([ut(0),ht(1)]),it([ut(0),ht(1)])])),segments:nt(lt([st([it(),it()]),rt()]))})]);dt([Ft,ot({animationId:nt(rt()),playbackSettings:Dt})]);var Bt={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},Rt={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},Vt=class extends Error{constructor(t,e){super(t),((t,e,i)=>{((t,e,i)=>{e in t?ft(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i})(t,"symbol"!=typeof e?e+"":e,i)})(this,"code"),this.name="[dotlottie-js]",this.code=e}};function qt(t){let e;if(typeof window>"u")e=Buffer.from(t).toString("base64");else{let i=Array.prototype.map.call(t,t=>String.fromCharCode(t)).join("");e=window.btoa(i)}return`data:${(t=>{let e=null,i=[];if(!t)return null;let o=t.substring(t.indexOf(",")+1);e=typeof window>"u"?Buffer.from(o,"base64").toString("binary"):atob(o);let n=new Uint8Array(e.length);for(let t=0;t<e.length;t+=1)n[t]=e.charCodeAt(t);i=Array.from(n.subarray(0,8));for(let t in Rt){let e=Rt[t];if(e&&i.every((t,i)=>t===e[i]))return Bt[t]}return null})(e)};base64,${e}`}function Ht(t){return"w"in t&&"h"in t&&!("xt"in t)&&"p"in t}function Jt(t){return!("h"in t)&&!("w"in t)&&"p"in t&&"e"in t&&"u"in t&&"id"in t}async function Zt(t,e=()=>!0){if(!(t instanceof Uint8Array))throw new Vt("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,o)=>{H(t,{filter:e},(t,e)=>{t&&o(t),i(e)})})}async function Wt(t,e,i){if(!(t instanceof Uint8Array))throw new Vt("DotLottie not found","INVALID_DOTLOTTIE");return(await Zt(t,t=>t.name===e&&(!i||i(t))))[e]}async function Kt(t){let e="manifest.json",i=(await Zt(t,t=>t.name===e))[e];if(!(typeof i>"u"))return JSON.parse(V(i,!1))}async function Xt(t){let e=new Uint8Array(t),i=await async function(t){if(!(t instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let e=await Kt(t);if(typeof e>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let i=function(t,e){let i=t._parse(e,void 0);return i.issues?{success:!1,error:new Z(i.issues),issues:i.issues}:{success:!0,data:i.output,output:i.output}}(Pt,e);return i.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(J(i.error).nested,null,2)}`}}(e);if(i.error)throw new Vt(i.error,"INVALID_DOTLOTTIE");return e}function Gt(t,e="dotLottie-common"){return new Error(`[${e}]: ${t}`)}function Qt(t,e="dotLottie-common",...i){console.error(`[${e}]:`,t,...i)}function Yt(t,e="dotLottie-common",...i){console.warn(`[${e}]:`,t,...i)}function te(t){return["v","ip","op","layers","fr","w","h"].every(e=>Object.prototype.hasOwnProperty.call(t,e))}function ee(t,e){let i=Object.keys(t).find(i=>t[i]===e);if(void 0===i)throw new Error("Value not found in the object.");return i}function ie(t){return JSON.parse(JSON.stringify(t))}((t,e,i)=>{i=null!=t?pt(gt(t)):{},((t,e,i,o)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let i of mt(e))!yt.call(t,i)&&undefined!==i&&ft(t,i,{get:()=>e[i],enumerable:!(o=vt(e,i))||o.enumerable})})(t&&t.__esModule?i:ft(i,"default",{value:t,enumerable:!0}),t)})(St());var oe=class{_dotLottie;_animationsMap=new Map;_themeMap=new Map;_stateMachinesMap=new Map;_manifest;get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(t){let e=await fetch(t,{method:"GET",mode:"cors"});if(!e.ok)throw new Error(`Failed to load dotLottie from ${t} with status ${e.status}`);let i=e.headers.get("content-type");if(null!=i&&i.includes("application/json")){let i=await e.json();if(!te(i))throw new Error(`Invalid lottie JSON at ${t}`);let o=function(t=""){let e=t.trim(),i=e.lastIndexOf("/"),o=e.substring(i+1),n=o.indexOf(".");return-1!==n?o.substring(0,n):o}(t);this._animationsMap.set(o,i);let n={activeAnimationId:o,animations:[{id:o}]};this._manifest=n}else{this._dotLottie=await Xt(await e.arrayBuffer());let t=await Kt(this._dotLottie);if(!t)throw new Error("Manifest not found");this._manifest=t}}loadFromLottieJSON(t){if(!te(t))throw new Error("Invalid lottie JSON");let e="my-animation";this._animationsMap.set(e,t);let i={activeAnimationId:e,animations:[{id:e}]};this._manifest=i}async loadFromArrayBuffer(t){this._dotLottie=await Xt(t);let e=await Kt(this._dotLottie);if(!e)throw new Error("Manifest not found");this._manifest=e}async getAnimation(t){if(this._animationsMap.get(t))return this._animationsMap.get(t);if(!this._dotLottie)return;let e=await async function(t,e,{inlineAssets:i}={},o){let n=`animations/${e}.json`,r=await Wt(t,n,o);if(typeof r>"u")return;let a=JSON.parse(V(r,!1));if(!i)return a;let s={[e]:a};return await async function(t,e){var i;let o=new Map;for(let[t,n]of Object.entries(e))for(let e of n.assets||[])if(Ht(e)){let n=e.p;o.has(n)||o.set(n,new Set),null==(i=o.get(n))||i.add(t)}let n=await async function(t,e){let i=await Zt(t,t=>{let i=t.name.replace("images/","");return t.name.startsWith("images/")&&(!e||e({...t,name:i}))}),o={};for(let t in i){let e=i[t];e instanceof Uint8Array&&(o[t.replace("images/","")]=qt(e))}return o}(t,t=>o.has(t.name));for(let[t,i]of o){let o=n[t];if(o)for(let n of i){let i=e[n];for(let e of(null==i?void 0:i.assets)||[])Ht(e)&&e.p===t&&(e.p=o,e.u="",e.e=1)}}}(t,s),await async function(t,e){var i;let o=new Map;for(let[t,n]of Object.entries(e))for(let e of n.assets||[])if(Jt(e)){let n=e.p;o.has(n)||o.set(n,new Set),null==(i=o.get(n))||i.add(t)}let n=await async function(t,e){let i=await Zt(t,t=>{let i=t.name.replace("audio/","");return t.name.startsWith("audio/")&&(!e||e({...t,name:i}))}),o={};for(let t in i){let e=i[t];e instanceof Uint8Array&&(o[t.replace("audio/","")]=qt(e))}return o}(t,t=>o.has(t.name));for(let[t,i]of o){let o=n[t];if(o)for(let n of i){let i=e[n];for(let e of(null==i?void 0:i.assets)||[])Jt(e)&&e.p===t&&(e.p=o,e.u="",e.e=1)}}}(t,s),a}(this._dotLottie,t,{inlineAssets:!0});return e&&this._animationsMap.set(t,e),e}async getTheme(t){if(this._themeMap.get(t))return this._themeMap.get(t);if(!this._dotLottie)return;let e=await async function(t,e){let i=`themes/${e}.json`,o=await Wt(t,i,void 0);if(!(typeof o>"u"))return JSON.parse(V(o,!1))}(this._dotLottie,t);return e&&this._themeMap.set(t,e),e}async getStateMachines(){if(!this._dotLottie)return;let t=await async function(t){let e={},i=await Zt(t,t=>{t.name.replace("states/","").replace(".json","");return t.name.startsWith("states/")&&!0});for(let t in i){let o=i[t];o instanceof Uint8Array&&(e[t.replace("states/","").replace(".json","")]=V(o,!1))}return e}(this._dotLottie);for(let e in t)if(e){let i=t[e];if(i){let t=JSON.parse(i);if(t){let e=t.descriptor.id;this._stateMachinesMap.get(e)||this._stateMachinesMap.set(e,t)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(t){if(this._stateMachinesMap.get(t))return this._stateMachinesMap.get(t);if(!this._dotLottie)return;let e=await async function(t,e){let i=`states/${e}.json`,o=await Wt(t,i,void 0);return typeof o>"u"?void 0:JSON.parse(V(o,!1))}(this._dotLottie,t);return e&&this._stateMachinesMap.set(e.descriptor.id,e),e}};function ne(){throw new Error("Cycle detected")}function re(){if(le>1)le--;else{for(var t,e=!1;void 0!==se;){var i=se;for(se=void 0,de++;void 0!==i;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&pe(i))try{i.c()}catch(i){e||(t=i,e=!0)}i=o}}if(de=0,le--,e)throw t}}var ae=void 0,se=void 0,le=0,de=0,he=0;function ue(t){if(void 0!==ae){var e=t.n;if(void 0===e||e.t!==ae)return e={i:0,S:t,p:ae.s,n:void 0,t:ae,e:void 0,x:void 0,r:e},void 0!==ae.s&&(ae.s.n=e),ae.s=e,t.n=e,32&ae.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=ae.s,e.n=void 0,ae.s.n=e,ae.s=e),e}}function ce(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function pe(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function fe(t){for(var e=t.s;void 0!==e;e=e.n){var i=e.S.n;if(void 0!==i&&(e.r=i),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function ve(t){for(var e=t.s,i=void 0;void 0!==e;){var o=e.p;-1===e.i?(e.S.U(e),void 0!==o&&(o.n=e.n),void 0!==e.n&&(e.n.p=o)):i=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=o}t.s=i}function me(t){ce.call(this,void 0),this.x=t,this.s=void 0,this.g=he-1,this.f=4}function ge(t){var e=t.u;if(t.u=void 0,"function"==typeof e){le++;var i=ae;ae=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,ye(t),e}finally{ae=i,re()}}}function ye(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,ge(t)}function _e(t){if(ae!==this)throw new Error("Out-of-order effect");ve(this),ae=t,this.f&=-2,8&this.f&&ye(this),re()}function be(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}ce.prototype.h=function(){return!0},ce.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},ce.prototype.U=function(t){if(void 0!==this.t){var e=t.e,i=t.x;void 0!==e&&(e.x=i,t.e=void 0),void 0!==i&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}},ce.prototype.subscribe=function(t){var e=this;return function(t){var e=new be(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}(function(){var i=e.value,o=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=o}})},ce.prototype.valueOf=function(){return this.value},ce.prototype.toString=function(){return this.value+""},ce.prototype.toJSON=function(){return this.value},ce.prototype.peek=function(){return this.v},Object.defineProperty(ce.prototype,"value",{get:function(){var t=ue(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(ae instanceof me&&function(){throw new Error("Computed cannot have side-effects")}(),t!==this.v){de>100&&ne(),this.v=t,this.i++,he++,le++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{re()}}}}),(me.prototype=new ce).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f)||(this.f&=-5,this.g===he))return!0;if(this.g=he,this.f|=1,this.i>0&&!pe(this))return this.f&=-2,!0;var t=ae;try{fe(this),ae=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return ae=t,ve(this),this.f&=-2,!0},me.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}ce.prototype.S.call(this,t)},me.prototype.U=function(t){if(void 0!==this.t&&(ce.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},me.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},me.prototype.peek=function(){if(this.h()||ne(),16&this.f)throw this.v;return this.v},Object.defineProperty(me.prototype,"value",{get:function(){1&this.f&&ne();var t=ue(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),be.prototype.c=function(){var t=this.S();try{if(8&this.f||void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},be.prototype.S=function(){1&this.f&&ne(),this.f|=1,this.f&=-9,ge(this),fe(this),le++;var t=ae;return ae=this,_e.bind(this,t)},be.prototype.N=function(){2&this.f||(this.f|=2,this.o=se,se=this)},be.prototype.d=function(){this.f|=8,1&this.f||ye(this)};var we=class{_state;_prevState;constructor(t){this._prevState=t,this._state=function(t){return new ce(t)}(t)}setState(t){this._prevState=this._state.value,this._state.value=t}subscribe(t){return this._state.subscribe(e=>t(e,this._prevState))}},ke="^5.12.2",Ce=(t=>(t.Complete="complete",t.DataFail="data_fail",t.DataReady="data_ready",t.Error="error",t.Frame="frame",t.Freeze="freeze",t.LoopComplete="loopComplete",t.Pause="pause",t.Play="play",t.Ready="ready",t.Stop="stop",t.VisibilityChange="visibilityChange",t))(Ce||{}),Se=(t=>(t.Completed="completed",t.Error="error",t.Fetching="fetching",t.Frozen="frozen",t.Initial="initial",t.Loading="loading",t.Paused="paused",t.Playing="playing",t.Ready="ready",t.Stopped="stopped",t))(Se||{}),xe=(t=>(t.Bounce="bounce",t.Normal="normal",t))(xe||{}),Le={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},Oe={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},Ae=class{_lottie;_src;_animationConfig;_prevUserPlaybackOptions={};_userPlaybackOptions;_hover=!1;_loop=!1;_counter=0;_intermission=0;_counterInterval=null;_container=null;_name;_mode="normal";_background="transparent";_animation;_defaultTheme;_activeAnimationId;_currentAnimationId;_testId;_listeners=new Map;_currentState="initial";_stateBeforeFreeze="initial";state=new we(Oe);_light=!1;_worker=!1;_dotLottieLoader=new oe;_activeStateId;_inInteractiveMode=!1;_scrollTicking=!1;_scrollCallback=void 0;_onShowIntersectionObserver=void 0;_visibilityPercentage=0;_audios=[];_stateMachineManager;constructor(t,e,i){this._src="string"==typeof t?t:ie(t),null!=i&&i.testId&&(this._testId=i.testId),this._defaultTheme=(null==i?void 0:i.defaultTheme)||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),"string"==typeof(null==i?void 0:i.activeAnimationId)&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,"string"==typeof(null==i?void 0:i.background)&&this.setBackground(i.background),typeof(null==i?void 0:i.activeStateId)<"u"&&(this._activeStateId=i.activeStateId);let{rendererSettings:o,...n}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...o},...n},null!=i&&i.light&&(this._light=i.light),null!=i&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){var t,e,i,o;let n=()=>{this._hover&&"playing"!==this.currentState&&this.play()},r=()=>{this._hover&&"playing"===this.currentState&&this.stop()};null==(t=this._container)||t.removeEventListener("mouseenter",n),null==(e=this._container)||e.removeEventListener("mouseleave",r),null==(i=this._container)||i.addEventListener("mouseleave",r),null==(o=this._container)||o.addEventListener("mouseenter",n)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&"playing"===this.currentState?this.freeze():"frozen"===this.currentState&&this.unfreeze())}_listenToVisibilityChange(){typeof document<"u"&&typeof document.hidden<"u"&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange())}_getOption(t){var e;if(typeof this._userPlaybackOptions[t]<"u")return this._userPlaybackOptions[t];let i=null==(e=this._dotLottieLoader.manifest)?void 0:e.animations.find(t=>t.id===this._currentAnimationId);return i&&typeof i[t]<"u"?i[t]:Le[t]}_getPlaybackOptions(){let t={};for(let e in Le)typeof Le[e]<"u"&&(t[e]=this._getOption(e));return t}_setPlayerState(t){var e,i,o;let n=t(this._getPlaybackOptions());try{$t._parse(n)}catch{return void Yt(`Invalid PlaybackOptions, ${JSON.stringify(n,null,2)}`)}typeof n.defaultTheme<"u"&&(this._defaultTheme=n.defaultTheme),typeof n.playMode<"u"&&(this._mode=n.playMode),typeof n.intermission<"u"&&(this._intermission=n.intermission),typeof n.hover<"u"&&(this._hover=n.hover),typeof n.loop<"u"&&(this.clearCountTimer(),this._loop=n.loop,this._counter=0,null==(e=this._lottie)||e.setLoop("number"==typeof n.loop||n.loop)),typeof n.speed<"u"&&(null==(i=this._lottie)||i.setSpeed(n.speed)),typeof n.autoplay<"u"&&this._lottie&&(this._lottie.autoplay=n.autoplay),typeof n.direction<"u"&&(null==(o=this._lottie)||o.setDirection(n.direction))}_getOptionsFromAnimation(t){let{id:e,...i}=t;return{...Le,...i}}_updateTestData(){!this._testId||!this._lottie||(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData()}static isPathJSON(t){var e;return"json"===(null==(e=t.split(".").pop())?void 0:e.toLowerCase())}get src(){return this._src}updateSrc(t){this._src!==t&&(this._src="string"==typeof t?t:ie(t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){"boolean"==typeof t&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify())}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){"string"==typeof t&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState(()=>({playMode:t})),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){this._lottie&&!["loading"].includes(this._currentState)?(this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing")):Yt("goToAndPlay() Can't use whilst loading.")}goToAndStop(t,e,i){this._lottie&&!["loading"].includes(this._currentState)?(this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped")):Yt("goToAndStop() Can't use whilst loading.")}seek(t){if(!this._lottie||["loading"].includes(this._currentState))return void Yt("seek() Can't use whilst loading.");let e=t;"number"==typeof e&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let o="%"===i[2]?this.totalFrames*Number(i[1])/100:i[1];void 0!==o&&(this._lottie.goToAndPlay(o,!0),"playing"===this.currentState?this.play():"frozen"===this.currentState?this.freeze():this.pause())}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i){let[o,n]=null!=t?t:[0,this.totalFrames-1],[r,a]=null!=e?e:[0,1];if(this._areNumbersInRange(r,a)){if(this.container){let{height:t,top:e}=this.container.getBoundingClientRect(),s=(window.innerHeight-e)/(window.innerHeight+t),l=o+Math.round((s-r)/(a-r)*(n-o));i&&i(s),this.goToAndStop(l,!0),(l>=n||s>=a)&&this._handleAnimationComplete()}this._scrollTicking=!1}else Qt("threshold values must be between 0 and 1")}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(t,e,i)),this._scrollTicking=!0)}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(null==t?void 0:t.segments,null==t?void 0:t.threshold,null==t?void 0:t.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(t){if(!this.container)throw Gt("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:null!=t&&t.threshold?t.threshold:[0,1]};this._onShowIntersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{var i,o;this._visibilityPercentage=100*e.intersectionRatio,e.isIntersecting?(null!=t&&t.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),null==(i=this._container)||i.dispatchEvent(new Event("visibilityChange"))):null!=t&&t.callbackOnIntersect&&(t.callbackOnIntersect(0),null==(o=this._container)||o.dispatchEvent(new Event("visibilityChange")))})},e),this._onShowIntersectionObserver.observe(this.container)}playOnShow(t){var e;if(this.stop(),!this.container)throw Gt("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:null!=(e=null==t?void 0:t.threshold)?e:[],callbackOnIntersect:t=>{0===t?this.pause():this.play()}})}_validatePlaybackOptions(t){if(!t)return{};let e={};for(let[i,o]of Object.entries(t))switch(i){case"autoplay":"boolean"==typeof o&&(e.autoplay=o);break;case"direction":"number"==typeof o&&[1,-1].includes(o)&&(e.direction=o);break;case"loop":("boolean"==typeof o||"number"==typeof o)&&(e.loop=o);break;case"playMode":"string"==typeof o&&["normal","bounce"].includes(o)&&(e.playMode=o);break;case"speed":"number"==typeof o&&(e.speed=o);break;case"themeColor":"string"==typeof o&&(e.themeColor=o);break;case"hover":"boolean"==typeof o&&(e.hover=o);break;case"intermission":"number"==typeof o&&(e.intermission=o);break;case"defaultTheme":"string"==typeof o&&(e.defaultTheme=o)}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){var t;if(null==(t=this._dotLottieLoader.manifest)||!t.animations.length)throw Gt("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(0===this._dotLottieLoader.animationsMap.size)throw Gt("No animations have been loaded.")}async play(t,e){var i,o;if(["initial","loading"].includes(this._currentState))Yt("Player unable to play whilst loading.");else{if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t)return-1===this._lottie.playDirection&&0===this._lottie.currentFrame?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),void this.setCurrentState("playing");if("number"==typeof t){let o=null==(i=this._dotLottieLoader.manifest)?void 0:i.animations[t];if(!o)throw Gt("animation not found.");"function"==typeof e?await this.render({id:o.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(o))}):await this.render({id:o.id})}if("string"==typeof t){let i=null==(o=this._dotLottieLoader.manifest)?void 0:o.animations.find(e=>e.id===t);if(!i)throw Gt("animation not found.");"function"==typeof e?await this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):await this.render({id:i.id})}}}playSegments(t,e){this._lottie&&!["loading"].includes(this._currentState)?(this._lottie.playSegments(t,e),this.setCurrentState("playing")):Yt("playSegments() Can't use whilst loading.")}resetSegments(t){this._lottie&&!["loading"].includes(this._currentState)?this._lottie.resetSegments(t):Yt("resetSegments() Can't use whilst loading.")}togglePlay(){"playing"===this.currentState?this.pause():this.play()}_getAnimationByIdOrIndex(t){var e,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),"number"==typeof t){let i=null==(e=this._dotLottieLoader.manifest)?void 0:e.animations[t];if(!i)throw Gt("animation not found.");return i}if("string"==typeof t){let e=null==(i=this._dotLottieLoader.manifest)?void 0:i.animations.find(e=>e.id===t);if(!e)throw Gt("animation not found.");return e}throw Gt("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(this._inInteractiveMode){if(0===this._dotLottieLoader.stateMachinesMap.size&&await this._dotLottieLoader.getStateMachines(),0===this._dotLottieLoader.stateMachinesMap.size)throw Gt("No interactivity states are available.");if("undefined"===t)throw Gt("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await async function(t,e){let[{DotLottieStateMachineManager:o}]=await Promise.all([i.e(3604).then(i.bind(i,3604))]);if(!t.length)throw Gt("No state machines available inside this .lottie!");return new o(t,e)}(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t)}else Qt("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.")}enterInteractiveMode(t){var e;if(!t)throw Gt("stateId must be a non-empty string.");this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&(null==(e=this._stateMachineManager)||e.stop()),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t)}exitInteractiveMode(){var t;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",null==(t=this._stateMachineManager)||t.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){var t;let e=this._getActiveAnimationId(),i=null==(t=this._dotLottieLoader.manifest)?void 0:t.animations.find(t=>t.id===e);if(this._inInteractiveMode&&this.exitInteractiveMode(),!i)throw Gt("animation not found.");this.play(e)}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw Gt("manifest not found.");if(this._inInteractiveMode)return void Yt("previous() is not supported in interactive mode.");let e=this._dotLottieLoader.manifest.animations.findIndex(t=>t.id===this._currentAnimationId);if(-1===e)throw Gt("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw Gt("animation not found.");"function"==typeof t?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw Gt("manifest not found.");if(this._inInteractiveMode)return void Yt("next() is not supported in interactive mode.");let e=this._dotLottieLoader.manifest.animations.findIndex(t=>t.id===this._currentAnimationId);if(-1===e)throw Gt("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw Gt("animation not found.");"function"==typeof t?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){this._lottie&&!["loading"].includes(this._currentState)?this._lottie.resize():Yt("resize() Can't use whilst loading.")}stop(){this._lottie&&!["loading"].includes(this._currentState)?(this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped")):Yt("stop() Can't use whilst loading.")}pause(){this._lottie&&!["loading"].includes(this._currentState)?(this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")):Yt("pause() Can't use whilst loading.")}freeze(){this._lottie&&!["loading"].includes(this._currentState)?("frozen"!==this.currentState&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")):Yt("freeze() Can't use whilst loading.")}unfreeze(){this._lottie&&!["loading"].includes(this._currentState)?"playing"===this._stateBeforeFreeze?this.play():this.pause():Yt("unfreeze() Can't use whilst loading.")}destroy(){var t,e;null!=(t=this._container)&&t.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(t=>{t.unload()}),this._audios=[]),this.clearCountTimer(),typeof document<"u"&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,null==(e=this._lottie)||e.destroy(),this._lottie=void 0}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return`${ke}`}addEventListener(t,e){var i,o,n;this._listeners.has(t)||this._listeners.set(t,new Set),null==(i=this._listeners.get(t))||i.add(e);try{"complete"===t?null==(o=this._container)||o.addEventListener(t,e):null==(n=this._lottie)||n.addEventListener(t,e)}catch(t){Qt(`addEventListener ${t}`)}}getState(){var t,e,i,o,n,r,a;return{autoplay:null!=(e=null==(t=this._lottie)?void 0:t.autoplay)&&e,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:null!=(o=null==(i=this._lottie)?void 0:i.playDirection)?o:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:null!=(r=null==(n=this._lottie)?void 0:n.playSpeed)?r:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:null!=(a=this._activeStateId)?a:""}}_notify(){this.state.setState(this.getState())}get totalFrames(){var t;return(null==(t=this._lottie)?void 0:t.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState(()=>({direction:t})),this._userPlaybackOptions.direction=t}get speed(){var t;return(null==(t=this._lottie)?void 0:t.playSpeed)||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState(()=>({speed:t})),this._userPlaybackOptions.speed=t}get autoplay(){var t,e;return null!=(e=null==(t=this._lottie)?void 0:t.autoplay)&&e}setAutoplay(t){this._requireValidAutoplay(t),this._lottie&&!["loading"].includes(this._currentState)?(this._setPlayerState(()=>({autoplay:t})),this._userPlaybackOptions.autoplay=t):Yt("setAutoplay() Can't use whilst loading.")}toggleAutoplay(){this._lottie&&!["loading"].includes(this._currentState)?this.setAutoplay(!this._lottie.autoplay):Yt("toggleAutoplay() Can't use whilst loading.")}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState(()=>({defaultTheme:t})),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render()}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState(()=>({loop:t})),this._userPlaybackOptions.loop=t}toggleLoop(){this._lottie&&!["loading"].includes(this._currentState)?this.setLoop(!this._loop):Yt("toggleLoop() Can't use whilst loading.")}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t)}get _frame(){return this._lottie?"completed"===this.currentState?-1===this.direction?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){var e;let i;i=Array.isArray(t)&&0!==t.length?t:["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"];let o=!1;if(i.includes("activeAnimationId")){let t=null==(e=this._dotLottieLoader.manifest)?void 0:e.activeAnimationId,i=this._getAnimationByIdOrIndex(t||0);this._activeAnimationId=t,await this._setCurrentAnimation(i.id),o=!0}i.forEach(t=>{switch(t){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"))}}),o&&this.render()}removeEventListener(t,e){var i,o,n;try{"complete"===t?null==(i=this._container)||i.removeEventListener(t,e):null==(o=this._lottie)||o.removeEventListener(t,e),null==(n=this._listeners.get(t))||n.delete(e)}catch(t){Qt("removeEventListener",t)}}_handleAnimationComplete(){var t;"number"==typeof this._loop&&this.stop();let e=-1===this.direction?0:this.totalFrames-1;this.goToAndStop(e,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),null==(t=this._container)||t.dispatchEvent(new Event("complete"))}addEventListeners(){var t;if(this._lottie&&!["loading"].includes(this._currentState)){this._lottie.addEventListener("enterFrame",()=>{var t;this._lottie?(0===Math.floor(this._lottie.currentFrame)&&-1===this.direction&&(null==(t=this._container)||t.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()):Yt("enterFrame event : Lottie is undefined.")}),this._lottie.addEventListener("loopComplete",()=>{var t;if(!this._lottie)return void Yt("loopComplete event : Lottie is undefined.");null==(t=this._container)||t.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let e=this._lottie.playDirection;if("number"==typeof this._loop&&this._loop>0&&(this._counter+="bounce"===this._mode?.5:1,this._counter>=this._loop))return void this._handleAnimationComplete();"bounce"===this._mode&&"number"==typeof e&&(e=-1*Number(e));let i=-1===e?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(i,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:e})),this.goToAndPlay(i,!0))},this._intermission)):(this._setPlayerState(()=>({direction:e})),this.goToAndPlay(-1===e?this.totalFrames-1:0,!0))}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&!1===this._loop&&"bounce"===this._mode){if(this._counter+=.5,this._counter>=1)return void this._handleAnimationComplete();this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let t=this._lottie.playDirection;"bounce"===this._mode&&"number"==typeof t&&(t=-1*Number(t));let e=-1===t?this.totalFrames-1:0;this._setPlayerState(()=>({direction:t})),this.goToAndPlay(e,!0)},this._intermission)}else this._handleAnimationComplete()});for(let[e,i]of this._listeners)if("complete"===e)for(let o of i)null==(t=this._container)||t.addEventListener(e,o);else for(let t of i)this._lottie.addEventListener(e,t)}else Yt("addEventListeners() Can't use whilst loading.")}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready"}async _getAudioFactory(){if(this._animation&&function(t){let e=t.assets;return!!e&&e.some(t=>Jt(t))}(this._animation)){let{DotLottieAudio:t}=await i.e(7119).then(i.bind(i,7119));return e=>{let i=new t({src:[e]});return this._audios.push(i),i}}return null}async render(t){var e,i,o,n,r,a,s,l,d,h,u,c,p,f,v,m,g,y;if(null!=t&&t.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw Gt("no animation selected");let _=null!=(e=Le.loop)&&e,b=null!=(i=Le.autoplay)&&i,w=null!=(o=Le.playMode)?o:"normal",k=null!=(n=Le.intermission)?n:0,C=null!=(r=Le.hover)&&r,S=null!=(a=Le.direction)?a:1,x=null!=(s=Le.speed)?s:1,L=null!=(l=Le.defaultTheme)?l:"";_=null!=(d=null==t?void 0:t.loop)?d:this._getOption("loop"),b=null!=(h=null==t?void 0:t.autoplay)?h:this._getOption("autoplay"),w=null!=(u=null==t?void 0:t.playMode)?u:this._getOption("playMode"),k=null!=(c=null==t?void 0:t.intermission)?c:this._getOption("intermission"),C=null!=(p=null==t?void 0:t.hover)?p:this._getOption("hover"),S=null!=(f=null==t?void 0:t.direction)?f:this._getOption("direction"),x=null!=(v=null==t?void 0:t.speed)?v:this._getOption("speed"),L=null!=(m=null==t?void 0:t.defaultTheme)?m:this._getOption("defaultTheme");let O={...this._animationConfig,autoplay:!C&&b,loop:"number"==typeof _||_,renderer:this._worker?"svg":null!=(g=this._animationConfig.renderer)?g:"svg"},[A,P,$]=await Promise.all([this._dotLottieLoader.getTheme(L),this._getLottiePlayerInstance(),this._getAudioFactory()]);A&&this._animation?(this._animation=ie(this._animation),this._animation.slots=A):this._animation=await this._dotLottieLoader.getAnimation(null!=(y=this._currentAnimationId)?y:""),!this._activeStateId||this._inInteractiveMode?(this.destroy(),this._setPlayerState(()=>({defaultTheme:L,playMode:w,intermission:k,hover:C,loop:_})),this._lottie=$?P.loadAnimation({...O,container:this._container,animationData:this._animation,audioFactory:$}):P.loadAnimation({...O,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var t;null==(t=this._lottie)||t.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:S,speed:x})),b&&!C&&(!1===_&&-1===S?this.play():this.setCurrentState("playing")),this._updateTestData()):this.enterInteractiveMode(this._activeStateId)}async _getLottiePlayerInstance(){var t;let e,o=null!=(t=this._animationConfig.renderer)?t:"svg";if(this._worker)return"svg"!==o&&Yt("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),e=await i.e(3905).then(i.bind(i,3905)),e.default;switch(o){case"svg":e=this._light?await i.e(7189).then(i.bind(i,7189)):await i.e(7243).then(i.bind(i,7243));break;case"canvas":e=this._light?await i.e(8126).then(i.bind(i,8126)):await i.e(6306).then(i.bind(i,6306));break;case"html":e=this._light?await i.e(9252).then(i.bind(i,9252)):await i.e(6760).then(i.bind(i,6760));break;default:throw new Error(`Invalid renderer: ${o}`)}return e.default}_getActiveAnimationId(){var t,e,i,o;let n=this._dotLottieLoader.manifest;return null!=(o=null!=(i=null!=(t=this._activeAnimationId)?t:null==n?void 0:n.activeAnimationId)?i:null==(e=null==n?void 0:n.animations[0])?void 0:e.id)?o:void 0}async load(t){if("loading"!==this._currentState)try{if(this.setCurrentState("loading"),"string"==typeof this._src)if(function(t){try{return te(JSON.parse(t))}catch{return!1}}(this._src)){let t=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(t)}else{let t=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(t.toString())}else{if("object"!=typeof this._src||!te(this._src))throw Gt("Invalid src provided");this._dotLottieLoader.loadFromLottieJSON(this._src)}if(!this._dotLottieLoader.manifest)throw Gt("No manifest found");let e=this._getActiveAnimationId();if(!e)throw Gt("No active animation found");await this._setCurrentAnimation(e),await this.render(t)}catch(t){this.setCurrentState("error"),t instanceof Error&&Qt(`Error loading animation: ${t.message}`)}else Yt("Loading in progress..")}setErrorState(t){this.setCurrentState("error"),Qt(t)}_requireValidDirection(t){if(-1!==t&&1!==t)throw Gt("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw Gt("intermission must be a positive number")}_requireValidLoop(t){if("number"==typeof t&&(!Number.isInteger(t)||t<0))throw Gt("loop must be a positive number or boolean")}_requireValidSpeed(t){if("number"!=typeof t)throw Gt("speed must be a number")}_requireValidBackground(t){if("string"!=typeof t)throw Gt("background must be a string")}_requireValidAutoplay(t){if("boolean"!=typeof t)throw Gt("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed)}}},2320:(t,e,i)=>{"use strict";i.d(e,{a:()=>d,b:()=>h});var o=Object.create,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,d=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),h=(t,e,i)=>(i=null!=t?o(s(t)):{},((t,e,i,o)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let i of a(e))!l.call(t,i)&&undefined!==i&&n(t,i,{get:()=>e[i],enumerable:!(o=r(e,i))||o.enumerable});return t})(!e&&t&&t.__esModule?i:n(i,"default",{value:t,enumerable:!0}),t))},3849:(t,e,i)=>{"use strict";const o=window.wp.blocks,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"kadence/lottie","title":"Lottie Animations","category":"kadence-blocks","textdomain":"kadence-blocks","attributes":{"align":{"type":"string"},"fileSrc":{"type":"string","default":"url"},"fileUrl":{"type":"string","default":"https://assets10.lottiefiles.com/packages/lf20_rqcjx8hr.json"},"localFile":{"type":"array","default":[]},"showControls":{"type":"boolean","default":false},"autoplay":{"type":"boolean","default":true},"loop":{"type":"boolean","default":true},"onlyPlayOnHover":{"type":"boolean","default":false},"onlyPlayOnScroll":{"type":"boolean","default":false},"waitUntilInView":{"type":"boolean","default":false},"startFrame":{"type":"number","default":"0"},"endFrame":{"type":"number","default":"100"},"bouncePlayback":{"type":"boolean","default":false},"playbackSpeed":{"type":"number","default":1},"label":{"type":"string","default":""},"loopLimit":{"type":"number","default":0},"delay":{"type":"number","default":0},"id":{"type":"number"},"width":{"type":"number","default":"0"},"ratio":{"type":"number","default":100},"useRatio":{"type":"boolean","default":false},"uniqueID":{"type":"string"},"marginDesktop":{"type":"array","default":["","","",""]},"marginTablet":{"type":"array","default":["","","",""]},"marginMobile":{"type":"array","default":["","","",""]},"marginUnit":{"type":"string","default":"px"},"paddingDesktop":{"type":"array","default":["","","",""]},"paddingTablet":{"type":"array","default":["","","",""]},"paddingMobile":{"type":"array","default":["","","",""]},"paddingUnit":{"type":"string","default":"px"}},"supports":{"kbMetadata":true}}');var r,a=window,s=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,l=Symbol(),d=new WeakMap,h=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(s&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=d.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&d.set(e,t))}return t}toString(){return this.cssText}},u=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return(t=>new h("string"==typeof t?t:t+"",void 0,l))(e)})(t):t,c=window,p=c.trustedTypes,f=p?p.emptyScript:"",v=c.reactiveElementPolyfillSupport,m={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),y={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:g},_="finalized",b=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||y}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift(u(t))}else void 0!==t&&e.push(u(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let i=document.createElement("style"),o=a.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)})})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=y){var o;let n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){let r=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:m).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;let o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){let t=o.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:m;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};b[_]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:b}),(null!==(r=c.reactiveElementVersions)&&void 0!==r?r:c.reactiveElementVersions=[]).push("1.6.3");var w,k=window,C=k.trustedTypes,S=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,O="?"+L,A=`<${O}>`,P=document,$=()=>P.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,I=Array.isArray,E="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,U=/>/g,N=RegExp(`>|${E}(?:([^\\s"'>=/]+)(${E}*=${E}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,F=/"/g,D=/^(?:script|style|textarea|title)$/i,B=(t,...e)=>({_$litType$:1,strings:t,values:e}),R=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),q=new WeakMap,H=P.createTreeWalker(P,129,null,!1);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}var Z=class t{constructor({strings:e,_$litType$:i},o){let n;this.parts=[];let r=0,a=0,s=e.length-1,l=this.parts,[d,h]=((t,e)=>{let i,o=t.length-1,n=[],r=2===e?"<svg>":"",a=T;for(let e=0;e<o;e++){let o,s,l=t[e],d=-1,h=0;for(;h<l.length&&(a.lastIndex=h,s=a.exec(l),null!==s);)h=a.lastIndex,a===T?"!--"===s[1]?a=j:void 0!==s[1]?a=U:void 0!==s[2]?(D.test(s[2])&&(i=RegExp("</"+s[2],"g")),a=N):void 0!==s[3]&&(a=N):a===N?">"===s[0]?(a=null!=i?i:T,d=-1):void 0===s[1]?d=-2:(d=a.lastIndex-s[2].length,o=s[1],a=void 0===s[3]?N:'"'===s[3]?F:z):a===F||a===z?a=N:a===j||a===U?a=T:(a=N,i=void 0);let u=a===N&&t[e+1].startsWith("/>")?" ":"";r+=a===T?l+A:d>=0?(n.push(o),l.slice(0,d)+x+l.slice(d)+L+u):l+L+(-2===d?(n.push(void 0),e):u)}return[J(t,r+(t[o]||"<?>")+(2===e?"</svg>":"")),n]})(e,i);if(this.el=t.createElement(d,o),H.currentNode=this.el.content,2===i){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=H.nextNode())&&l.length<s;){if(1===n.nodeType){if(n.hasAttributes()){let t=[];for(let e of n.getAttributeNames())if(e.endsWith(x)||e.startsWith(L)){let i=h[a++];if(t.push(e),void 0!==i){let t=n.getAttribute(i.toLowerCase()+x).split(L),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Q:"?"===e[1]?tt:"@"===e[1]?et:G})}else l.push({type:6,index:r})}for(let e of t)n.removeAttribute(e)}if(D.test(n.tagName)){let t=n.textContent.split(L),e=t.length-1;if(e>0){n.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],$()),H.nextNode(),l.push({type:2,index:++r});n.append(t[e],$())}}}else if(8===n.nodeType)if(n.data===O)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(L,t+1));)l.push({type:7,index:r}),t+=L.length-1}r++}}static createElement(t,e){let i=P.createElement("template");return i.innerHTML=t,i}};function W(t,e,i=t,o){var n,r,a,s;if(e===R)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl,d=M(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,o)),void 0!==o?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,o)),e}var K=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:P).importNode(i,!0);H.currentNode=n;let r=H.nextNode(),a=0,s=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new X(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new it(r,this,t)),this._$AV.push(e),l=o[++s]}a!==(null==l?void 0:l.index)&&(r=H.nextNode(),a++)}return H.currentNode=P,n}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},X=class t{constructor(t,e,i,o){var n;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),M(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>I(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&M(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Z.createElement(J(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{let t=new K(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Z(t)),e}T(e){I(this._$AH)||(this._$AH=[],this._$AR());let i,o=this._$AH,n=0;for(let r of e)n===o.length?o.push(i=new t(this.k($()),this.k($()),this,this.options)):i=o[n],i._$AI(r),n++;n<o.length&&(this._$AR(i&&i._$AB.nextSibling,n),o.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},G=class{constructor(t,e,i,o,n){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let n=this.strings,r=!1;if(void 0===n)t=W(this,t,e,0),r=!M(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{let o,a,s=t;for(t=n[0],o=0;o<n.length-1;o++)a=W(this,s[i+o],e,o),a===R&&(a=this._$AH[o]),r||(r=!M(a)||a!==this._$AH[o]),a===V?t=V:t!==V&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!o&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},Q=class extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}},Y=C?C.emptyScript:"",tt=class extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}},et=class extends G{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:V)===R)return;let o=this._$AH,n=t===V&&o!==V||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==V&&(o===V||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}},ot=k.litHtmlPolyfillSupport;null==ot||ot(Z,X),(null!==(w=k.litHtmlVersions)&&void 0!==w?w:k.litHtmlVersions=[]).push("2.8.0");var nt,rt,at=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;let r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e,a=r._$litPart$;if(void 0===a){let t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new X(e.insertBefore($(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}};at.finalized=!0,at._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:at});var st=globalThis.litElementPolyfillSupport;null==st||st({LitElement:at}),(null!==(rt=globalThis.litElementVersions)&&void 0!==rt?rt:globalThis.litElementVersions=[]).push("3.3.3");var lt,dt=((t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new h(i,t,l)})`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host * {
    box-sizing: border-box;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`,ht=i(168),ut=(i(2320),i(7517)),ct=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function pt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):ct(t,e)}null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements;var ft="dotlottie-player",vt=class extends at{defaultTheme="";container;playMode=ht.g.Normal;autoplay=!1;background="transparent";controls=!1;direction=1;hover=!1;loop;renderer="svg";speed=1;src;intermission=0;activeAnimationId=null;light=!1;worker=!1;activeStateId;_seeker=0;_dotLottieCommonPlayer;_io;_loop;_renderer="svg";_unsubscribeListeners;_hasMultipleAnimations=!1;_hasMultipleThemes=!1;_hasMultipleStates=!1;_popoverIsOpen=!1;_animationsTabIsOpen=!1;_statesTabIsOpen=!1;_styleTabIsOpen=!1;_themesForCurrentAnimation=[];_statesForCurrentAnimation=[];_parseLoop(t){let e=parseInt(t,10);return Number.isInteger(e)&&e>0?(this._loop=e,e):"string"==typeof t&&["true","false"].includes(t)?(this._loop="true"===t,this._loop):((0,ht.c)("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(t){let e=t.currentTarget;try{let t=parseInt(e.value,10);if(!this._dotLottieCommonPlayer)return;let i=t/100*this._dotLottieCommonPlayer.totalFrames;this.seek(i)}catch{throw(0,ht.a)("Error while seeking animation")}}_initListeners(){let t=this._dotLottieCommonPlayer;void 0!==t?(this._unsubscribeListeners=t.state.subscribe((t,e)=>{this._seeker=t.seeker,this.requestUpdate(),e.currentState!==t.currentState&&this.dispatchEvent(new CustomEvent(t.currentState)),this.dispatchEvent(new CustomEvent(ht.e.Frame,{detail:{frame:t.frame,seeker:t.seeker}})),this.dispatchEvent(new CustomEvent(ht.e.VisibilityChange,{detail:{visibilityPercentage:t.visibilityPercentage}}))}),t.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(ht.e.Complete))}),t.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(ht.e.LoopComplete))}),t.addEventListener("DOMLoaded",()=>{let t=this.getManifest();t&&t.themes&&(this._themesForCurrentAnimation=t.themes.filter(t=>t.animations.includes(this.getCurrentAnimationId()||""))),t&&t.states&&(this._hasMultipleStates=t.states.length>0,this._statesForCurrentAnimation=[],t.states.forEach(t=>{this._statesForCurrentAnimation.push(t)})),this.dispatchEvent(new CustomEvent(ht.e.Ready))}),t.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(ht.e.DataReady))}),t.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(ht.e.DataFail))}),window&&window.addEventListener("click",t=>this._clickOutListener(t))):(0,ht.c)("player not initialized - cannot add event listeners","dotlottie-player-component")}async load(t,e,i){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new ht.j(t,this.container,{rendererSettings:null!=e?e:{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?1===this.direction?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(i);let o=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,o&&(o.themes&&(this._themesForCurrentAnimation=o.themes.filter(t=>t.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=o.themes.length>0),o.states&&(this._hasMultipleStates=o.states.length>0,this._statesForCurrentAnimation=[],o.states.forEach(t=>{this._statesForCurrentAnimation.push(t)}))),this._initListeners()}getCurrentAnimationId(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.currentAnimationId}animationCount(){var t;return this._dotLottieCommonPlayer&&(null==(t=this._dotLottieCommonPlayer.getManifest())?void 0:t.animations.length)||0}animations(){if(!this._dotLottieCommonPlayer)return[];let t=this._dotLottieCommonPlayer.getManifest();return(null==t?void 0:t.animations.map(t=>t.id))||[]}currentAnimation(){return this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.currentAnimationId?this._dotLottieCommonPlayer.currentAnimationId:""}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():ht.i}getManifest(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.getManifest()}getLottie(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.getAnimationInstance()}getVersions(){return{lottieWebVersion:ht.j.getLottieWebVersion(),dotLottiePlayerVersion:"2.7.12"}}previous(t){var e;null==(e=this._dotLottieCommonPlayer)||e.previous(t)}next(t){var e;null==(e=this._dotLottieCommonPlayer)||e.next(t)}reset(){var t;null==(t=this._dotLottieCommonPlayer)||t.reset()}play(t,e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(t,e)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(t)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(t)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(t)}snapshot(t=!0){if(!this.shadowRoot)return"";let e=this.shadowRoot.querySelector(".animation svg"),i=(new XMLSerializer).serializeToString(e);if(t){let t=document.createElement("a");t.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`,t.download=`download_${this._seeker}.svg`,document.body.appendChild(t),t.click(),document.body.removeChild(t)}return i}setTheme(t){var e;null==(e=this._dotLottieCommonPlayer)||e.setDefaultTheme(t)}themes(){var t;if(!this._dotLottieCommonPlayer)return[];let e=this._dotLottieCommonPlayer.getManifest();return(null==(t=null==e?void 0:e.themes)?void 0:t.map(t=>t.id))||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(t=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(t)}setDirection(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(t)}setLooping(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(t)}isLooping(){return!!this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.loop}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(t)}enterInteractiveMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(t)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(t){var e;null==(e=this._dotLottieCommonPlayer)||e.revertToManifestValues(t)}static get styles(){return dt}async firstUpdated(){var t;this.container=null==(t=this.shadowRoot)?void 0:t.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(t=>{var e,i;void 0!==t[0]&&t[0].isIntersecting?(null==(e=this._dotLottieCommonPlayer)?void 0:e.currentState)===ht.f.Frozen&&this.play():(null==(i=this._dotLottieCommonPlayer)?void 0:i.currentState)===ht.f.Playing&&this._freeze()}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),"svg"===this.renderer?this._renderer="svg":"canvas"===this.renderer?this._renderer="canvas":"html"===this.renderer&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){var t,e;this._io&&(this._io.disconnect(),this._io=void 0),null==(t=this._dotLottieCommonPlayer)||t.destroy(),null==(e=this._unsubscribeListeners)||e.call(this),window&&window.removeEventListener("click",t=>this._clickOutListener(t))}_clickOutListener(t){!t.composedPath().some(t=>t instanceof HTMLElement&&(t.classList.contains("popover")||"lottie-animation-options"===t.id))&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){var t,e,i,o,n;let r=(null==(t=this._dotLottieCommonPlayer)?void 0:t.currentState)===ht.f.Playing,a=(null==(e=this._dotLottieCommonPlayer)?void 0:e.currentState)===ht.f.Paused;return B`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?B`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:B``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${r||a?"active "+(this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"):this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}
          aria-label="play / pause animation"
        >
          ${r?B`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:B`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?B`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:B``}
        <input
          id="lottie-seeker-input"
          class="seeker ${-1===(null==(i=this._dotLottieCommonPlayer)?void 0:i.direction)?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${t=>this._handleSeekChange(t)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{var t;null==(t=this._dotLottieCommonPlayer)||t.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${null!=(o=this._dotLottieCommonPlayer)&&o.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?B`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${"background-color: "+(this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":"")}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:B``}
      </div>
      ${this._popoverIsOpen?B`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${this._animationsTabIsOpen||this._styleTabIsOpen||this._statesTabIsOpen?B``:B`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `}
              ${!this._hasMultipleThemes||this._styleTabIsOpen||this._animationsTabIsOpen||this._statesTabIsOpen?"":B` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`}
              ${!this._hasMultipleStates||this._styleTabIsOpen||this._animationsTabIsOpen||this._statesTabIsOpen?"":B` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`}
              ${this._animationsTabIsOpen?B`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(t=>B`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${t}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(t),this.requestUpdate()}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(t),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===t?B`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:B`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:B``}
              ${this._styleTabIsOpen?B`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${""===(null==(n=this._dotLottieCommonPlayer)?void 0:n.defaultTheme)?B``:B`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(t=>B`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${t.id}"
                                @click=${()=>{this.setTheme(t.id)}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&this.setTheme(t.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===t.id?B`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:B`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:B``}
              ${this._statesTabIsOpen?B`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(t=>B`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${t}"
                                @click=${()=>{this.enterInteractiveMode(t)}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&this.enterInteractiveMode(t)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===t?B`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:B`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:B``}
            </div>
          `:B``}
    `}render(){var t;let e=this.controls?"main controls":"main",i=this.controls?"animation controls":"animation";return B`
      <div id="animation-container" class=${e} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${i} style="background:${this.background};">
          ${(null==(t=this._dotLottieCommonPlayer)?void 0:t.currentState)===ht.f.Error?B` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};(0,ut.a)([pt({type:String})],vt.prototype,"defaultTheme",2),(0,ut.a)([function(t){return(({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){let o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,r=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(r.finisher=function(e){t(e,o)}),r}{let n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}})({descriptor:e=>{let i={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};return i}})}("#animation")],vt.prototype,"container",2),(0,ut.a)([pt()],vt.prototype,"playMode",2),(0,ut.a)([pt({type:Boolean})],vt.prototype,"autoplay",2),(0,ut.a)([pt({type:String})],vt.prototype,"background",2),(0,ut.a)([pt({type:Boolean})],vt.prototype,"controls",2),(0,ut.a)([pt({type:Number})],vt.prototype,"direction",2),(0,ut.a)([pt({type:Boolean})],vt.prototype,"hover",2),(0,ut.a)([pt({type:String})],vt.prototype,"loop",2),(0,ut.a)([pt({type:String})],vt.prototype,"renderer",2),(0,ut.a)([pt({type:Number})],vt.prototype,"speed",2),(0,ut.a)([pt({type:String})],vt.prototype,"src",2),(0,ut.a)([pt()],vt.prototype,"intermission",2),(0,ut.a)([pt({type:String})],vt.prototype,"activeAnimationId",2),(0,ut.a)([pt({type:Boolean})],vt.prototype,"light",2),(0,ut.a)([pt({type:Boolean})],vt.prototype,"worker",2),(0,ut.a)([pt({type:String})],vt.prototype,"activeStateId",2),(0,ut.a)([pt({state:!0})],vt.prototype,"_seeker",2),customElements.get(ft)||customElements.define(ft,vt);const mt=window.wp.i18n,gt=window.wp.element,yt=window.wp.data,_t=window.wp.blockEditor,bt=window.lodash,wt=window.wp.components;var kt=i(6942),Ct=i.n(kt);const St=window.kadence.components,xt=window.kadence.helpers,Lt=window.ReactJSXRuntime,Ot=window.React,{rest_url:At}=kadence_blocks_params,{apiFetch:Pt}=wp,{rest_url:$t}=kadence_blocks_params,Mt=[{attributes:{align:{type:"string"},fileSrc:{type:"string",default:"url"},fileUrl:{type:"string",default:"https://assets10.lottiefiles.com/packages/lf20_rqcjx8hr.json"},localFile:{type:"array",default:[]},showControls:{type:"boolean",default:!1},autoplay:{type:"boolean",default:!0},loop:{type:"boolean",default:!0},onlyPlayOnHover:{type:"boolean",default:!1},onlyPlayOnScroll:{type:"boolean",default:!1},waitUntilInView:{type:"boolean",default:!1},startFrame:{type:"number",default:"0"},endFrame:{type:"number",default:"100"},bouncePlayback:{type:"boolean",default:!1},playbackSpeed:{type:"number",default:1},label:{type:"string",default:""},loopLimit:{type:"number",default:0},delay:{type:"number",default:0},id:{type:"number"},width:{type:"number",default:"0"},uniqueID:{type:"string"},marginDesktop:{type:"array",default:["","","",""]},marginTablet:{type:"array",default:["","","",""]},marginMobile:{type:"array",default:["","","",""]},marginUnit:{type:"string",default:"px"},paddingDesktop:{type:"array",default:["","","",""]},paddingTablet:{type:"array",default:["","","",""]},paddingMobile:{type:"array",default:["","","",""]},paddingUnit:{type:"string",default:"px"}},getEditWrapperProps:({blockAlignment:t})=>({"data-align":t}),save:({attributes:t})=>{const{uniqueID:e}=t,i=Ct()({"kb-lottie-container":!0,[`kb-lottie-container${e}`]:!0,[`align${t.align}`]:t.align}),o={};return t.loop&&(o.loop=""),t.playbackSpeed&&(o.speed=t.playbackSpeed),t.showControls&&(o.controls=""),t.autoplay&&(o.autoplay=""),t.onlyPlayOnHover&&(o.hover=""),t.bouncePlayback?o.mode="bounce":o.mode="normal",0!==t.delay&&(o.intermission=1e3*t.delay),0!==t.loopLimit&&(o.count=t.loopLimit),(0,Lt.jsx)("div",{className:i,children:(0,Lt.jsx)("lottie-player",{...o,id:"kb-lottie-player"+e,src:((t,e,i,o)=>{let n="";return n="url"===t?e:o+"kb-lottieanimation/v1/animations/"+(0,bt.get)(i,[0,"value"],""),""!==n&&n!==o+"kb-lottieanimation/v1/animations/"||(n="https://assets10.lottiefiles.com/packages/lf20_rqcjx8hr.json"),n})(t.fileSrc,t.fileUrl,t.localFile,$t),"aria-label":t.label?t.label:void 0,style:{maxWidth:"0"===t.width?"auto":t.width+"px",height:"auto",margin:"0 auto"}})})}}],It=window.kadence.icons;(0,o.registerBlockType)("kadence/lottie",{...n,title:(0,mt._x)("Lottie Animations","block title","kadence-blocks"),description:(0,mt._x)("Display lottie animations on your site","block description","kadence-blocks"),keywords:[(0,mt.__)("lottie","kadence-blocks"),(0,mt.__)("animation","kadence-blocks"),"KB"],getEditWrapperProps:t=>({"data-align":t.align}),icon:{src:It.lottieIcon},edit:function(t){const{attributes:e,setAttributes:i,className:o,clientId:r}=t,{fileUrl:a,localFile:s,fileSrc:l,showControls:d,autoplay:h,loop:u,onlyPlayOnHover:c,onlyPlayOnScroll:p,waitUntilInView:f,bouncePlayback:v,playbackSpeed:m,loopLimit:g,useRatio:y,ratio:_,uniqueID:b,delay:w,align:k,width:C,startFrame:S,endFrame:x,paddingTablet:L,paddingDesktop:O,paddingMobile:A,paddingUnit:P,marginTablet:$,marginDesktop:M,marginMobile:I,marginUnit:E,label:T}=e,[j,U]=(0,gt.useState)("static"),[N,z]=(0,gt.useState)({key:Math.random()}),[F,D]=(0,gt.useState)(!1),[B,R]=(0,gt.useState)(!1),[V,q]=(0,gt.useState)(""),[H,J]=(0,gt.useState)(),Z=()=>D(!1),W=(0,xt.mouseOverVisualizer)(),K=(0,xt.mouseOverVisualizer)(),{previewDevice:X}=(0,yt.useSelect)(t=>({previewDevice:t("kadenceblocks/data").getPreviewDeviceType()}),[r]),G=(0,xt.getPreviewSize)(X,void 0!==M?M[0]:"",void 0!==$?$[0]:"",void 0!==I?I[0]:""),Q=(0,xt.getPreviewSize)(X,void 0!==M?M[1]:"",void 0!==$?$[1]:"",void 0!==I?I[1]:""),Y=(0,xt.getPreviewSize)(X,void 0!==M?M[2]:"",void 0!==$?$[2]:"",void 0!==I?I[2]:""),tt=(0,xt.getPreviewSize)(X,void 0!==M?M[3]:"",void 0!==$?$[3]:"",void 0!==I?I[3]:""),et=(0,xt.getPreviewSize)(X,void 0!==O?O[0]:"",void 0!==L?L[0]:"",void 0!==A?A[0]:""),it=(0,xt.getPreviewSize)(X,void 0!==O?O[1]:"",void 0!==L?L[1]:"",void 0!==A?A[1]:""),ot=(0,xt.getPreviewSize)(X,void 0!==O?O[2]:"",void 0!==L?L[2]:"",void 0!==A?A[2]:""),nt=(0,xt.getPreviewSize)(X,void 0!==O?O[3]:"",void 0!==L?L[3]:"",void 0!==A?A[3]:""),[rt,at]=(0,gt.useState)("general"),st=["fileSrc","fileUrl","label"],lt=Ct()(o),dt=(0,_t.useBlockProps)({className:lt});(0,gt.useEffect)(()=>{(0,xt.setBlockDefaults)("kadence/lottie",e)},[]),(0,xt.uniqueIdHelper)(t);const ht=Ct()({"kb-lottie-container":!0,[`kb-lottie-container${b}`]:!0}),ut=(0,Lt.jsxs)(Lt.Fragment,{children:[(0,Lt.jsx)(wt.Button,{variant:"primary",className:"is-primary",onClick:()=>D(!0),children:(0,mt.__)("Upload a Lottie file","kadence-blocks")}),F&&(0,Lt.jsxs)(wt.Modal,{title:(0,mt.__)("Upload Lottie JSON file","kadence-blocks"),onRequestClose:Z,shouldCloseOnClickOutside:!1,children:[!1!==B?(0,Lt.jsx)(wt.Notice,{status:"error",onRemove:()=>R(!1),children:(0,Lt.jsx)("p",{children:B})}):null,(0,Lt.jsx)(wt.TextControl,{label:(0,mt.__)("Animation title","kadence-blocks"),value:V,onChange:t=>q(t)}),(0,Lt.jsx)("br",{}),(0,Lt.jsx)(wt.FormFileUpload,{accept:"application/json",className:"is-primary",align:"center",onChange:t=>{J(t.target.files[0])},children:(0,mt.__)("Browse","kadence-blocks")}),H?null:(0,mt.__)("Select a file","kadence-blocks"),(0,Lt.jsx)("br",{}),(0,Lt.jsx)("br",{}),(0,Lt.jsx)(wt.Button,{className:"is-secondary",onClick:Z,text:(0,mt.__)("Cancel","kadence-blocks")}),"   ",(0,Lt.jsx)(wt.Button,{className:"is-primary",disabled:!H,onClick:()=>function(t,e,o){const n=new FileReader;let r;n.onload=function(t){try{r=JSON.parse(t.target.result)}catch(t){return void o((0,mt.__)("Invalid JSON file","kadence-blocks"))}"object"==typeof r&&Pt({path:"/kb-lottieanimation/v1/animations",data:{lottieFile:r,title:e},method:"POST"}).then(t=>{(0,bt.has)(t,"value")&&(0,bt.has)(t,"label")?(i({localFile:[t],fileSrc:"local"}),U(Math.random()),z(Math.random()),D(!1)):(0,bt.has)(t,"error")&&(0,bt.has)(t,"message")?o(t.message):o((0,mt.__)("An error occurred when uploading your file","kadence-blocks"))})},n.readAsText(t)}(H,V,R),text:(0,mt.__)("Upload","kadence-blocks")})]})]}),ct={};u&&(ct.loop=""),m&&(ct.speed=m),d&&(ct.controls=""),h&&(ct.autoplay=""),c&&(ct.hover=""),ct.mode=v?"bounce":"normal",0!==w&&(ct.intermission=1e3*w);const pt="0"===C?"auto":C+"px",ft=(0,Lt.jsxs)(Lt.Fragment,{children:[(0,Ot.createElement)("dotlottie-player",{...ct,src:(()=>{let t="";return t="url"===l?a:At+"kb-lottieanimation/v1/animations/"+(0,bt.get)(s,[0,"value"],"")+".json",""!==t&&t!==At+"kb-lottieanimation/v1/animations/.json"||(t="https://assets10.lottiefiles.com/packages/lf20_rqcjx8hr.json"),t})(),key:j,id:"kb-lottie-player"+b,style:{maxWidth:y?null:pt}}),(0,Lt.jsx)(St.SpacingVisualizer,{style:{marginLeft:void 0!==tt?(0,xt.getSpacingOptionOutput)(tt,E):void 0,marginRight:void 0!==Q?(0,xt.getSpacingOptionOutput)(Q,E):void 0,marginTop:void 0!==G?(0,xt.getSpacingOptionOutput)(G,E):void 0,marginBottom:void 0!==Y?(0,xt.getSpacingOptionOutput)(Y,E):void 0},type:"inside",forceShow:W.isMouseOver,spacing:[(0,xt.getSpacingOptionOutput)(et,P),(0,xt.getSpacingOptionOutput)(it,P),(0,xt.getSpacingOptionOutput)(ot,P),(0,xt.getSpacingOptionOutput)(nt,P)]}),(0,Lt.jsx)(St.SpacingVisualizer,{type:"outside",forceShow:K.isMouseOver,spacing:[(0,xt.getSpacingOptionOutput)(G,E),(0,xt.getSpacingOptionOutput)(Q,E),(0,xt.getSpacingOptionOutput)(Y,E),(0,xt.getSpacingOptionOutput)(tt,E)]})]});return(0,Lt.jsxs)("div",{...dt,children:[(0,Lt.jsxs)(_t.BlockControls,{children:[(0,Lt.jsx)(_t.BlockAlignmentControl,{value:k,onChange:t=>i({align:t})}),(0,Lt.jsx)(St.CopyPasteAttributes,{attributes:e,excludedAttrs:st,defaultAttributes:n.attributes,blockSlug:n.name,onPaste:t=>i(t)})]}),(0,Lt.jsxs)(St.KadenceInspectorControls,{blockSlug:"kadence/lottie",children:[(0,Lt.jsx)(St.InspectorControlTabs,{panelName:"lottie",setActiveTab:at,allowedTabs:["general","advanced"],activeTab:rt}),"general"===rt&&(0,Lt.jsxs)(Lt.Fragment,{children:[(0,Lt.jsxs)(St.KadencePanelBody,{title:(0,mt.__)("Source File","kadence-blocks"),initialOpen:!0,panelName:"sourceFile",blockSlug:"kadence/lottie",children:[(0,Lt.jsx)(wt.SelectControl,{label:(0,mt.__)("File Source","kadence-blocks"),value:l,options:[{value:"url",label:(0,mt.__)("Remote URL","kadence-blocks")},{value:"file",label:(0,mt.__)("Local File","kadence-blocks")}],onChange:t=>{i({fileSrc:t}),U(Math.random())}}),"url"===l?(0,Lt.jsx)(wt.TextControl,{label:(0,mt.__)("Lottie Animation URL","kadence-blocks"),value:a,onChange:t=>{i({fileUrl:t}),U(Math.random())}}):(0,Lt.jsxs)(Lt.Fragment,{children:[(0,Lt.jsx)(St.KadenceSelectPosts,{placeholder:(0,mt.__)("Select Lottie File","kadence-blocks"),restBase:"wp/v2/kadence_lottie",fieldId:"lottie-select-src",value:s,onChange:t=>{i({localFile:t?[t]:[]}),U(Math.random())}},N),ut,(0,Lt.jsx)("br",{}),(0,Lt.jsx)("br",{})]}),(0,Lt.jsx)(wt.TextControl,{label:(0,mt.__)("Aria Label","kadence-blocks"),value:T||"",onChange:t=>{i({label:t})},help:(0,mt.__)("Describe the purpose of this animation on the page.","kadence-blocks")})]}),(0,Lt.jsxs)(St.KadencePanelBody,{title:(0,mt.__)("Playback Settings","kadence-blocks"),initialOpen:!0,panelName:"playbackSettings",blockSlug:"kadence/lottie",children:[(0,Lt.jsx)(wt.ToggleControl,{label:(0,mt.__)("Show Controls","kadence-blocks"),checked:d,onChange:t=>{i({showControls:t}),U(Math.random())}}),(0,Lt.jsx)(wt.ToggleControl,{label:(0,mt.__)("Autoplay","kadence-blocks"),checked:h,onChange:t=>{i({autoplay:t,waitUntilInView:!!t&&f,onlyPlayOnHover:!t&&c,onlyPlayOnScroll:!t&&p}),U(Math.random())}}),(0,Lt.jsx)(wt.ToggleControl,{label:(0,mt.__)("Only play on hover","kadence-blocks"),checked:c,onChange:t=>{i({onlyPlayOnHover:t,autoplay:!t&&h,onlyPlayOnScroll:!t&&p}),U(Math.random())}}),(0,Lt.jsx)(wt.ToggleControl,{label:(0,mt.__)("Only play on page scroll","kadence-blocks"),help:(0,mt.__)("This will override most settings such as autoplay, playback speed, bounce, loop, and play on hover. This will not work when previewing in the block editor","kadence-blocks"),checked:p,onChange:t=>{i({onlyPlayOnScroll:t,onlyPlayOnHover:!t&&c,autoplay:!t&&h,loop:!t&&u,bouncePlayback:!t&&v}),U(Math.random())}}),p?(0,Lt.jsxs)(Lt.Fragment,{children:[(0,Lt.jsx)("div",{style:{marginBottom:"15px"},children:(0,Lt.jsx)(wt.__experimentalNumberControl,{label:(0,mt.__)("Starting Frame","kadence-blocks"),value:S,onChange:t=>i({startFrame:parseInt(t)}),min:0,isShiftStepEnabled:!0,shiftStep:10,help:(0,mt.__)("Does not show in preview","kadence-blocks")})}),(0,Lt.jsx)("div",{style:{marginBottom:"15px"},children:(0,Lt.jsx)(wt.__experimentalNumberControl,{label:(0,mt.__)("Ending Frame","kadence-blocks"),value:x,onChange:t=>i({endFrame:parseInt(t)}),min:0,isShiftStepEnabled:!0,shiftStep:10,help:(0,mt.__)("Does not show in preview","kadence-blocks")})})]}):(0,Lt.jsx)("div",{style:{marginBottom:"15px"},children:(0,Lt.jsx)(wt.ToggleControl,{label:(0,mt.__)("Don't play until in view","kadence-blocks"),help:(0,mt.__)("Prevent playback from starting until animation is in view","kadence-blocks"),checked:f,onChange:t=>{i({waitUntilInView:t,autoplay:!!t||h})}})}),(0,Lt.jsx)(wt.RangeControl,{label:(0,mt.__)("Playback Speed","kadence-blocks"),value:m,onChange:t=>{i({playbackSpeed:t}),U(Math.random())},step:.1,min:0,max:10}),(0,Lt.jsx)("h3",{children:(0,mt.__)("Loop Settings","kadence-blocks")}),(0,Lt.jsx)(wt.ToggleControl,{label:(0,mt.__)("Loop playback","kadence-blocks"),checked:u,onChange:t=>{i({loop:t,onlyPlayOnScroll:!t&&p}),U(Math.random())}}),(0,Lt.jsx)(wt.ToggleControl,{label:(0,mt.__)("Bounce playback","kadence-blocks"),checked:v,onChange:t=>{i({bouncePlayback:t,loop:!!t||u,onlyPlayOnScroll:!t&&p})},help:(0,mt.__)("Does not show in preview","kadence-blocks")}),(0,Lt.jsx)(wt.RangeControl,{label:(0,mt.__)("Delay between loops (seconds)","kadence-blocks"),value:w,onChange:t=>{i({delay:t})},step:.1,min:0,max:60}),(0,Lt.jsx)(wt.RangeControl,{label:(0,mt.__)("Limit Loops","kadence-blocks"),value:g,onChange:t=>{i({loopLimit:t})},step:1,min:0,max:100,help:(0,mt.__)("Does not show in preview","kadence-blocks")})]})]}),"advanced"===rt&&(0,Lt.jsxs)(Lt.Fragment,{children:[(0,Lt.jsxs)(St.KadencePanelBody,{title:(0,mt.__)("Size Controls","kadence-blocks"),panelName:"sizeControl",blockSlug:"kadence/lottie",children:[(0,Lt.jsx)(St.ResponsiveMeasureRangeControl,{label:(0,mt.__)("Padding","kadence-blocks"),value:[et,it,ot,nt],tabletValue:L,mobileValue:A,onChange:t=>i({paddingDesktop:t}),onChangeTablet:t=>i({paddingTablet:t}),onChangeMobile:t=>i({paddingMobile:t}),min:0,max:"em"===P||"rem"===P?25:999,step:"em"===P||"rem"===P?.1:1,unit:P,units:["px","em","rem","%"],onUnit:t=>i({paddingUnit:t}),onMouseOver:W.onMouseOver,onMouseOut:W.onMouseOut}),(0,Lt.jsx)(St.ResponsiveMeasureRangeControl,{label:(0,mt.__)("Margin","kadence-blocks"),value:[G,Q,Y,tt],tabletValue:$,mobileValue:I,onChange:t=>{i({marginDesktop:[t[0],t[1],t[2],t[3]]})},onChangeTablet:t=>i({marginTablet:t}),onChangeMobile:t=>i({marginMobile:t}),min:"em"===E||"rem"===E?-25:-999,max:"em"===E||"rem"===E?25:999,step:"em"===E||"rem"===E?.1:1,unit:E,units:["px","em","rem","%","vh"],onUnit:t=>i({marginUnit:t}),onMouseOver:K.onMouseOver,onMouseOut:K.onMouseOut,allowAuto:!0}),(0,Lt.jsx)(wt.RangeControl,{label:(0,mt.__)("Max Width","kadence-blocks"),value:C,onChange:t=>i({width:t}),allowReset:!0,step:1,min:25,max:1e3}),(0,Lt.jsx)(wt.ToggleControl,{label:(0,mt.__)("Use fixed ratio (prevents layout shift)","kadence-blocks"),checked:y,onChange:t=>i({useRatio:t})}),y&&(0,Lt.jsx)(wt.RangeControl,{label:(0,mt.__)("Set Size Ratio (%)","kadence-blocks"),value:_||100,onChange:t=>i({ratio:t}),allowReset:!0,step:1,min:0,max:100})]}),(0,Lt.jsx)(St.KadenceBlockDefaults,{attributes:e,defaultAttributes:n.attributes,blockSlug:n.name,excludedAttrs:st})]})]}),(0,Lt.jsxs)("div",{className:ht,style:{marginTop:""!==G?(0,xt.getSpacingOptionOutput)(G,E):void 0,marginRight:""!==Q?(0,xt.getSpacingOptionOutput)(Q,E):void 0,marginBottom:""!==Y?(0,xt.getSpacingOptionOutput)(Y,E):void 0,marginLeft:""!==tt?(0,xt.getSpacingOptionOutput)(tt,E):void 0,paddingTop:""!==et?(0,xt.getSpacingOptionOutput)(et,P):void 0,paddingRight:""!==it?(0,xt.getSpacingOptionOutput)(it,P):void 0,paddingBottom:""!==ot?(0,xt.getSpacingOptionOutput)(ot,P):void 0,paddingLeft:""!==nt?(0,xt.getSpacingOptionOutput)(nt,P):void 0,maxWidth:y?pt:null,margin:y?"0 auto":null},children:[y&&(0,Lt.jsx)("div",{class:"kb-is-ratio-animation",style:{paddingBottom:_?_+"%":"100%"},children:ft}),!y&&(0,Lt.jsx)(Lt.Fragment,{children:ft})]})]})},deprecated:Mt,save:()=>null,example:{}})},6942:(t,e)=>{var i;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var t="",e=0;e<arguments.length;e++){var i=arguments[e];i&&(t=a(t,r(i)))}return t}function r(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var i in t)o.call(t,i)&&t[i]&&(e=a(e,i));return e}function a(t,e){return e?t?t+" "+e:t+e:t}t.exports?(n.default=n,t.exports=n):void 0===(i=function(){return n}.apply(e,[]))||(t.exports=i)}()},7517:(t,e,i)=>{"use strict";i.d(e,{a:()=>r});var o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=(t,e,i,r)=>{for(var a,s=r>1?void 0:r?n(e,i):e,l=t.length-1;l>=0;l--)(a=t[l])&&(s=(r?a(e,i,s):a(s))||s);return r&&s&&o(e,i,s),s}}},n={};function r(t){var e=n[t];if(void 0!==e)return e.exports;var i=n[t]={exports:{}};return o[t](i,i.exports,r),i.exports}r.m=o,t=[],r.O=(e,i,o,n)=>{if(!i){var a=1/0;for(h=0;h<t.length;h++){for(var[i,o,n]=t[h],s=!0,l=0;l<i.length;l++)(!1&n||a>=n)&&Object.keys(r.O).every(t=>r.O[t](i[l]))?i.splice(l--,1):(s=!1,n<a&&(a=n));if(s){t.splice(h--,1);var d=o();void 0!==d&&(e=d)}}return e}n=n||0;for(var h=t.length;h>0&&t[h-1][2]>n;h--)t[h]=t[h-1];t[h]=[i,o,n]},r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce((e,i)=>(r.f[i](t,e),e),[])),r.u=t=>t+".js?ver="+{3604:"0569400676c01fd9d0b0",3905:"d036a56f69a7773ca349",6306:"c459446392399b5c064c",6760:"00a344ddcdebd9090a68",7119:"654280e4083ca9e686b6",7189:"940ddbb960a90ff2ea1b",7243:"7124a890ae6056de69cb",8126:"cf4a1e89140798972517",9252:"aa0c0f826ecdb88b7ef4"}[t],r.miniCssF=t=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},i="kadence:",r.l=(t,o,n,a)=>{if(e[t])e[t].push(o);else{var s,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),h=0;h<d.length;h++){var u=d[h];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==i+n){s=u;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",i+n),s.src=t),e[t]=[o];var c=(i,o)=>{s.onerror=s.onload=null,clearTimeout(p);var n=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach(t=>t(o)),i)return i(o)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=c.bind(null,s.onerror),s.onload=c.bind(null,s.onload),l&&document.head.appendChild(s)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=i[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{var t={103:0,9276:0};r.f.j=(e,i)=>{var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else if(9276!=e){var n=new Promise((i,n)=>o=t[e]=[i,n]);i.push(o[2]=n);var a=r.p+r.u(e),s=new Error;r.l(a,i=>{if(r.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var n=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}},"chunk-"+e,e)}else t[e]=0},r.O.j=e=>0===t[e];var e=(e,i)=>{var o,n,[a,s,l]=i,d=0;if(a.some(e=>0!==t[e])){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var h=l(r)}for(e&&e(i);d<a.length;d++)n=a[d],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(h)},i=globalThis.webpackChunkkadence=globalThis.webpackChunkkadence||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var a=r.O(void 0,[9276],()=>r(3849));a=r.O(a),(this.kadence=this.kadence||{})["blocks-lottie"]=a})();