"use strict";var E=function(n,s){return function(){try{return s||n((s={exports:{}}).exports,s),s.exports}catch(v){throw s=0,v}}};var y=E(function(T,w){"use strict";var k=require("@stdlib/assert-is-string").isPrimitive,q=require("@stdlib/assert-is-function"),d=require("@stdlib/assert-is-collection"),p=require("@stdlib/array-base-resolve-getter"),b=require("@stdlib/array-base-nulls"),x=require("@stdlib/array-base-zeros"),f=require("@stdlib/string-format"),A=require("@stdlib/console-log");function C(n){var s,v,l,c,t,g,r,u,o,h,e,m,a,i;if(r=arguments.length,!k(n))throw new TypeError(f("invalid argument. First argument must be a string. Value: `%s`.",n));if(r-=1,q(arguments[r]))o=arguments[r],r-=1;else{if(o=arguments[r-1],!q(o))throw new TypeError(f("invalid argument. Callback argument must be a function. Value: `%s`.",o));c=arguments[r],r-=2}for(l=[],s=[],u=[],a=1;a<r+1;a++)if(e=arguments[a],d(e)){l.push(p(e)),u.push(e),s.push(1),h=e.length,a+=1;break}else e=[e],l.push(p(e)),u.push(e),s.push(0);for(h===void 0&&(h=1);a<r+1;a++){if(e=arguments[a],d(e)){if(e.length!==h)throw new RangeError("invalid argument. Provided collections must have the same length.");m=1}else e=[e],m=0;l.push(p(e)),u.push(e),s.push(m)}for(g=b(r+2),g[0]=n,v=x(r),t=b(r+2),t[r+1]=u,a=0;a<h;a++){for(i=0;i<r;i++)t[i]=l[i](u[i],v[i]),g[i+1]=t[i],v[i]+=s[i];t[r]=a,g[r+1]=o.apply(c,t),A(f.apply(null,g))}}w.exports=C});var F=y();module.exports=F;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
