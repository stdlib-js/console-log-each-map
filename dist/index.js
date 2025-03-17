"use strict";var E=function(n,i){return function(){return i||n((i={exports:{}}).exports,i),i.exports}};var y=E(function(T,w){"use strict";var k=require("@stdlib/assert-is-string").isPrimitive,q=require("@stdlib/assert-is-function"),d=require("@stdlib/assert-is-collection"),p=require("@stdlib/array-base-resolve-getter"),b=require("@stdlib/array-base-nulls"),x=require("@stdlib/array-base-zeros"),f=require("@stdlib/string-format"),A=require("@stdlib/console-log");function C(n){var i,h,v,c,t,l,r,u,g,o,e,m,a,s;if(r=arguments.length,!k(n))throw new TypeError(f("invalid argument. First argument must be a string. Value: `%s`.",n));if(r-=1,q(arguments[r]))g=arguments[r],r-=1;else{if(g=arguments[r-1],!q(g))throw new TypeError(f("invalid argument. Callback argument must be a function. Value: `%s`.",g));c=arguments[r],r-=2}for(v=[],i=[],u=[],a=1;a<r+1;a++)if(e=arguments[a],d(e)){v.push(p(e)),u.push(e),i.push(1),o=e.length,a+=1;break}else e=[e],v.push(p(e)),u.push(e),i.push(0);for(o===void 0&&(o=1);a<r+1;a++){if(e=arguments[a],d(e)){if(e.length!==o)throw new RangeError("invalid argument. Provided collections must have the same length.");m=1}else e=[e],m=0;v.push(p(e)),u.push(e),i.push(m)}for(l=b(r+2),l[0]=n,h=x(r),t=b(r+2),t[r+1]=u,a=0;a<o;a++){for(s=0;s<r;s++)t[s]=v[s](u[s],h[s]),l[s+1]=t[s],h[s]+=i[s];t[r]=a,l[r+1]=g.apply(c,t),A(f.apply(null,l))}}w.exports=C});var F=y();module.exports=F;
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
