(()=>{"use strict";var n={24:(n,t,e)=>{e.d(t,{Z:()=>r});var i=e(81),a=e.n(i),o=e(645),s=e.n(o)()(a());s.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n/* ---------------------------------------- */\n/* Stu\'s Addition */\n/* makes sizing simpler */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/* ---------------------------------------- */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }',""]);const r=s},426:(n,t,e)=>{e.d(t,{Z:()=>c});var i=e(81),a=e.n(i),o=e(645),s=e.n(o),r=e(667),l=e.n(r),h=new URL(e(952),e.b),p=new URL(e(539),e.b),d=s()(a()),u=l()(h),m=l()(p);d.push([n.id,":root {\n    --white: rgb(255, 252, 235);\n    --brown: rgb(67, 42, 39);\n}\n\n@font-face {\n    font-family: 'CustomFont';\n    src: url("+u+") format('truetype');\n}\n\nbody {\n    background: var(--brown);\n    color: var(--white);\n    font-size: 1.2rem;\n}\n\nheader {\n    display: flex;\n    justify-content: center;\n}\n\nh1 {\n    font-family: 'CustomFont', Arial, sans-serif;\n    letter-spacing: 5px;\n    position: absolute;\n    top: 20px;\n    text-align: center;\n    padding: 40px 90px;\n    border-radius: 50%;\n    font-size: 6rem;\n    background: var(--white);\n    opacity: 0.3;\n    color: #000;\n    mix-blend-mode: screen;\n}\n\n.shed-img {\n    width: 100%;\n    height: 100vh;\n    object-fit: cover;\n}\n\nmain {\n    padding-top: 100px;\n\n    display: grid;\n    grid-template-rows: repeat(2, auto);\n    grid-template-columns: 1fr 5fr;\n}\n\n.sidebar {\n    display: flex;\n    justify-content: center;\n}\n\n.sidebar ul {\n    padding: 0;\n    margin: 0;\n    font-size: 2rem;\n}\n\n.sidebar li {\n    list-style-type: none;\n    margin-bottom: 9rem;\n    cursor: pointer;\n}\n\n.sidebar li::after {\n    background-image: url("+m+");\n    background-size: 50px 50px;\n    display: inline-block;\n    width: 50px; \n    height: 50px;\n    content:\"\";\n    transform: scaleX(-1) rotate(45deg);\n    position: relative;\n    left: 2rem;\n    top: 1rem;\n    opacity: 0;\n    transition: 300ms;\n    transition-timing-function: ease-in;\n}\n\n.sidebar li:hover::after {\n    opacity: 1;\n}\n\n.feature {\n    padding-bottom: 30px;\n\n    display: grid;\n    grid-template-rows: repeat(4, auto);\n    grid-template-columns: 1fr 1fr 2fr;\n    row-gap: 30px;\n}\n\n.food-feature {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 50px;\n}\n\n.food-squares {\n    width: 70%;\n    height: 80vh;\n    background: var(--white);\n    padding: 50px 50px 10px;\n}\n\n.food-squares > img {\n    width: 100%;\n    height: 80%;\n    object-fit: cover;\n}\n\n.fs3 {\n    object-position: 50% 88%;\n}\n\n.fs5 {\n    object-position: 50% 88%;\n}\n\n.description {\n    height: 20%;\n    color: #000;\n    font-size: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.interior-img {\n    width: 100%;\n\n    grid-column: 3 / 4;\n    grid-row: 1 / 2;\n}\n\n.eating-img {\n    width: 100%;\n\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n.cooking-img {\n    width: 100%;\n\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n}\n\n.fish-img {\n    width: 100%;\n\n    grid-column: 1 / 2;\n    grid-row: 4 / 5;\n}\n\n.info {\n    padding: 0 30px;\n\n    grid-column: 2 / 3;\n    grid-row: 1 / 5;\n}\n\n.info > div {\n    position: sticky;\n    top: 10vh;\n}\n\np {\n    margin: 0;\n    line-height: 1.8rem;\n}\n\n.fire-img {\n    width: 100%;\n    height: 100vh;\n    object-fit: cover;\n\n    grid-column: 1 / 3;\n}\n\n.reserve-feature {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nform {\n    width: 50%;\n    font-family: 'CustomFont', Arial, sans-serif;\n    font-weight: 900;\n    font-size: 1rem;\n\n    display: grid;\n    grid-template-columns: repeat(4, auto);\n    grid-template-rows: repeat(7, auto);\n    gap: 20px;\n    grid-template-areas: \n    'name name email email'\n    'phone phone phone phone'\n    ' . guests guests . '\n    ' . date date . '\n    ' . time time . '\n    'message message message message'\n    'submit submit submit submit';\n}\n\n.name {\n    grid-area: name;\n}\n\n.email {\n    grid-area: email;\n}\n\n.phone {\n    grid-area: phone;\n}\n\n.name > *,\n.email > *,\n.phone > * {\n    width: 100%;\n}\n\n.guests {\n    grid-area: guests;\n}\n\n.date {\n    grid-area: date;\n}\n\n.time {\n    grid-area: time;\n}\n\n.guests,\n.date,\n.time {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    gap: 20px;\n}\n\n.guests > div:first-child,\n.date > div:first-child,\n.time > div:first-child {\n    justify-self: end;\n}\n\n.message {\n    grid-area: message;\n    display: grid;\n}\n\nform > button {\n    grid-area: submit;\n}\n\ninput,\nselect,\ntextarea,\nform > button {\n    padding: 10px 5px;\n    background: var(--white);\n    border: none;\n    border-radius: 5px;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n    color: var(--brown);\n    font-weight: bold;\n    opacity: .7;\n}\n\ninput[type=\"number\"] {\n    text-align: center;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n    opacity: 1;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n    outline: none;\n}\n\ntextarea {\n    resize: none;\n    height: 150px;\n}\n\nform > button:hover {\n    background: rgb(216, 215, 202);\n    cursor: pointer;\n}\n\nform > button:active {\n    background: var(--white);\n}\n\nform > button:disabled {\n    color: var(--brown);\n    font-weight: bold;\n}\n\nfooter {\n    color: var(--white);\n    padding: 20px;\n    background: var(--brown);\n}\n\nfooter p {\n    text-align: center;\n    font-size: 1.5rem;\n    padding-bottom: 20px;\n    text-decoration: underline;\n}\n\nfooter ul {\n    padding: 0;\n    margin: 0;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    justify-items: center;\n    justify-content: center;\n}\n\nfooter li {\n    list-style-type: none;\n    padding: 10px;\n    font-size: 1rem;\n\n}\n\nfooter a {\n    text-decoration: none;\n}\n\nfooter a:link,\na:visited,\na:hover,\na:active {\n    color: var(--white);\n}",""]);const c=d},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",i=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),i&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),i&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,i,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(i)for(var r=0;r<this.length;r++){var l=this[r][0];null!=l&&(s[l]=!0)}for(var h=0;h<n.length;h++){var p=[].concat(n[h]);i&&s[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),t.push(p))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,i=0;i<t.length;i++)if(t[i].identifier===n){e=i;break}return e}function i(n,i){for(var o={},s=[],r=0;r<n.length;r++){var l=n[r],h=i.base?l[0]+i.base:l[0],p=o[h]||0,d="".concat(h," ").concat(p);o[h]=p+1;var u=e(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var c=a(m,i);i.byIndex=r,t.splice(r,0,{identifier:d,updater:c,references:1})}s.push(d)}return s}function a(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,a){var o=i(n=n||[],a=a||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var r=e(o[s]);t[r].references--}for(var l=i(n,a),h=0;h<o.length;h++){var p=e(o[h]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=l}}},569:n=>{var t={};n.exports=function(n,e){var i=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var i="";e.supports&&(i+="@supports (".concat(e.supports,") {")),e.media&&(i+="@media ".concat(e.media," {"));var a=void 0!==e.layer;a&&(i+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),i+=e.css,a&&(i+="}"),e.media&&(i+="}"),e.supports&&(i+="}");var o=e.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},952:(n,t,e)=>{n.exports=e.p+"a7f8083e8b93da348dcc.ttf"},539:(n,t,e)=>{n.exports=e.p+"db4cbcd45fa15d718dde.png"}},t={};function e(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={id:i,exports:{}};return n[i](o,o.exports,e),o.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var i in t)e.o(t,i)&&!e.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:t[i]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var i=t.getElementsByTagName("script");i.length&&(n=i[i.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{function n(){const n={init:function(){this.createMain()},manipulateDOM:function(n,t,e,i,...a){const o=document.createElement(n);if(""!==t&&(o.innerText=t),""!==e){const n=e.split(" ");switch(n.length){case 1:o.classList.add(n[0]);break;case 2:o.classList.add(n[0],n[1]);break;case 3:o.classList.add(n[0],n[1],n[2]);break;case 4:o.classList.add(n[0],n[1],n[2],n[3])}}if(document.querySelector(i).appendChild(o),0!==a.length){let n=a.length/2,t=0,e=1;for(let i=0;i<n;i++)o.setAttribute(`${a[t]}`,`${a[e]}`),t+=2,e+=2}},createMain:function(){this.div=this.manipulateDOM("div","","feature","main"),this.img=this.manipulateDOM("img","","interior-img",".feature","src","../src/pictures/pexels-arthouse-studio-4344544.jpg","alt","Interior of restaurant."),this.div=this.manipulateDOM("div","","info",".feature"),this.div=this.manipulateDOM("div","","para-div",".info"),this.p=this.manipulateDOM("p",this.longText.p1,"",".para-div"),this.br=this.manipulateDOM("br","","",".para-div"),this.p=this.manipulateDOM("p",this.longText.p2,"",".para-div"),this.img=this.manipulateDOM("img","","eating-img",".feature","src","../src/pictures/pexels-helena-lopes-696218.jpg","alt","People eating."),this.img=this.manipulateDOM("img","","cooking-img",".feature","src","../src/pictures/pexels-araz-yurtseven-13739759.jpg","alt","Cooking food over fire."),this.img=this.manipulateDOM("img","","fish-img",".feature","src","../src/pictures/pexels-алекке-блажин-11244934.jpg","alt","Fish head food."),this.img=this.manipulateDOM("img","","fire-img","main","src","../src/pictures/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg","alt","Chef cooking with fire.")},longText:{p1:"Doggo ipsum borkf puggo noodle horse heckin good boys long water shoob, heckin good boys and girls very jealous pupper very taste wow. Pupper boof aqua doggo lotsa pats very good spot pupper much ruin diet very good spot boof super chub, such treat borkdrive blop the neighborhood pupper yapper wrinkler shooberino. Pats woofer smol borking doggo with a long snoot for pats wrinkler lotsa pats most angery pupper I have ever seen, ur givin me a spook.",p2:"Bork h*ck heckin good boys and girls doing me a frighten doggorino adorable doggo, many pats aqua doggo doge pats clouds ruff, sub woofer lotsa pats very hand that feed shibe noodle horse. Fat boi wrinkler what a nice floof he made many woofs very taste wow, the neighborhood pupper long water shoob blop, noodle horse very taste wow very good spot. Blop you are doing me a frighten he made many woofs blep big ol tungg ruff very hand that feed."}};return n.init(),{innerObject:n}}var t=e(379),i=e.n(t),a=e(795),o=e.n(a),s=e(569),r=e.n(s),l=e(565),h=e.n(l),p=e(216),d=e.n(p),u=e(589),m=e.n(u),c=e(24),f={};f.styleTagTransform=m(),f.setAttributes=h(),f.insert=r().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),i()(c.Z,f),c.Z&&c.Z.locals&&c.Z.locals;var g=e(426),b={};b.styleTagTransform=m(),b.setAttributes=h(),b.insert=r().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=d(),i()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals,{init:function(){this.createHeader(),this.createMain(),this.createFooter()},manipulateDOM:function(n,t,e,i,...a){let o=document.createElement(n);if(""!==t&&(o.innerText=t),""!==e){const n=e.split(" ");switch(n.length){case 1:o.classList.add(n[0]);break;case 2:o.classList.add(n[0],n[1]);break;case 3:o.classList.add(n[0],n[1],n[2]);break;case 4:o.classList.add(n[0],n[1],n[2],n[3])}}if(document.querySelector(i).appendChild(o),0!==a.length){let n=a.length/2,t=0,e=1;for(let i=0;i<n;i++)o.setAttribute(`${a[t]}`,`${a[e]}`),t+=2,e+=2}},createHeader:function(){this.header=this.manipulateDOM("header","","","#content"),this.H1=this.manipulateDOM("h1","","","header"),this.span=this.manipulateDOM("span","Abandoned","","h1"),this.br=this.manipulateDOM("br","","","h1"),this.span=this.manipulateDOM("span","Shed Café","","h1"),this.img=this.manipulateDOM("img","","shed-img","header","src","../src/pictures/pexels-stein-egil-liland-5740848.jpg","alt","A rundown shed at night.")},createMain:function(){this.main=this.manipulateDOM("main","","","#content"),this.div=this.manipulateDOM("div","","sidebar","main"),this.ul=this.manipulateDOM("ul","","",".sidebar"),this.li=this.manipulateDOM("li","Who We Are","","ul"),this.li=this.manipulateDOM("li","Our Creations","","ul"),this.li=this.manipulateDOM("li","Reserve A Table","","ul")},createFooter:function(){this.footer=this.manipulateDOM("footer","","","#content"),this.p=this.manipulateDOM("p","Credits","","footer"),this.ul=this.manipulateDOM("ul","","foot-list","footer"),this.li=this.manipulateDOM("li","","fLi1",".foot-list"),this.a=this.manipulateDOM("a","stein egil liland","",".fLi1","href","https://www.pexels.com/photo/abandoned-wooden-barn-on-grassy-terrain-against-starry-night-sky-5740848/","target","_blank"),this.li=this.manipulateDOM("li","","fLi2",".foot-list"),this.a=this.manipulateDOM("a","ArtHouse Studio","",".fLi2","href","https://www.pexels.com/photo/wooden-interior-of-modern-restaurant-in-marine-style-4344544/","target","_blank"),this.li=this.manipulateDOM("li","","fLi3",".foot-list"),this.a=this.manipulateDOM("a","Araz Yurtseven","",".fLi3","href","https://www.pexels.com/photo/a-person-cooking-in-a-pan-outdoors-13739759/","target","_blank"),this.li=this.manipulateDOM("li","","fLi4",".foot-list"),this.a=this.manipulateDOM("a","Helena Lopes","",".fLi4","href","https://www.pexels.com/photo/people-drinking-liquor-and-talking-on-dining-table-close-up-photo-696218/","target","_blank"),this.li=this.manipulateDOM("li","","fLi5",".foot-list"),this.a=this.manipulateDOM("a","Алекке Блажин","",".fLi5","href","https://www.pexels.com/photo/close-up-photograph-of-fish-heads-near-tomatoes-11244934/","target","_blank"),this.li=this.manipulateDOM("li","","fLi6",".foot-list"),this.a=this.manipulateDOM("a","Johnathan Macedo","",".fLi6","href","https://unsplash.com/photos/4NQEvxW2_4w","target","_blank"),this.li=this.manipulateDOM("li","","fLi7",".foot-list"),this.a=this.manipulateDOM("a","Good Ware","",".fLi7","href","https://www.flaticon.com/free-icon/fish-bone_4201633?term=fish%20bones&page=1&position=1&page=1&position=1&related_id=4201633&origin=style","target","_blank"),this.li=this.manipulateDOM("li","","fLi8",".foot-list"),this.a=this.manipulateDOM("a","Doggo Ipsum","",".fLi8","href","https://doggoipsum.com/","target","_blank"),this.li=this.manipulateDOM("li","","fLi9",".foot-list"),this.a=this.manipulateDOM("a","Parnis Azimi","",".fLi9","href","https://unsplash.com/photos/dIbPZcftpL8","target","_blank"),this.li=this.manipulateDOM("li","","fLi10",".foot-list"),this.a=this.manipulateDOM("a","ducken99","",".fLi10","href","https://pixabay.com/photos/fried-rice-thai-food-thai-cuisine-3023040/","target","_blank"),this.li=this.manipulateDOM("li","","fLi11",".foot-list"),this.a=this.manipulateDOM("a","ROMAN ODINTSOV","",".fLi11","href","https://www.pexels.com/photo/delicious-appetizer-with-boiled-lobster-and-wine-4553378/","target","_blank"),this.li=this.manipulateDOM("li","","fLi12",".foot-list"),this.a=this.manipulateDOM("a","kkolosov","",".fLi12","href","https://pixabay.com/photos/top-view-basil-herbs-bowl-closeup-1248955/","target","_blank"),this.li=this.manipulateDOM("li","","fLi13",".foot-list"),this.a=this.manipulateDOM("a","Jordane Mathieu","",".fLi13","href","https://unsplash.com/photos/q8-yKQ3P7J0","target","_blank")}}.init(),function(){function t(){const n=document.querySelectorAll("main > *:not(:first-child)");for(const t of n)t.remove()}n(),document.querySelector(".sidebar > ul").addEventListener("click",(function(e){switch([...this.children].indexOf(e.target)){case 0:t(),n();break;case 1:t(),{init:function(){this.createMain()},manipulateDOM:function(n,t,e,i,...a){let o=document.createElement(n);if(""!==t&&(o.innerText=t),""!==e){const n=e.split(" ");switch(n.length){case 1:o.classList.add(n[0]);break;case 2:o.classList.add(n[0],n[1]);break;case 3:o.classList.add(n[0],n[1],n[2]);break;case 4:o.classList.add(n[0],n[1],n[2],n[3])}}if(document.querySelector(i).appendChild(o),0!==a.length){let n=a.length/2,t=0,e=1;for(let i=0;i<n;i++)o.setAttribute(`${a[t]}`,`${a[e]}`),t+=2,e+=2}},createHeader:function(){this.header=this.manipulateDOM("header","","","#content"),this.H1=this.manipulateDOM("h1","","","header"),this.span=this.manipulateDOM("span","Abandoned","","h1"),this.br=this.manipulateDOM("br","","","h1"),this.span=this.manipulateDOM("span","Shed Café","","h1"),this.img=this.manipulateDOM("img","","shed-img","header","src","../src/pictures/pexels-stein-egil-liland-5740848.jpg","alt","A rundown shed at night.")},createMain:function(){this.div=this.manipulateDOM("div","","food-feature","main"),this.div=this.manipulateDOM("div","","food-squares box-1",".food-feature"),this.img=this.manipulateDOM("img","","fs1",".box-1","src","../src/pictures/parnis-azimi-dIbPZcftpL8-unsplash.jpg","alt","steak"),this.div=this.manipulateDOM("div","Rare Przewalski's Horse Steak","description",".box-1"),this.div=this.manipulateDOM("div","","food-squares box-2",".food-feature"),this.img=this.manipulateDOM("img","","fs2",".box-2","src","../src/pictures/fried-rice-3023040_1920.jpg","alt","rice"),this.div=this.manipulateDOM("div","Hillside Arsenic Seeds","description",".box-2"),this.div=this.manipulateDOM("div","","food-squares box-3",".food-feature"),this.img=this.manipulateDOM("img","","fs3",".box-3","src","../src/pictures/pexels-roman-odintsov-4553378.jpg","alt","lobster dish"),this.div=this.manipulateDOM("div","Crushed-tacean","description",".box-3"),this.div=this.manipulateDOM("div","","food-squares box-4",".food-feature"),this.img=this.manipulateDOM("img","","fs4",".box-4","src","../src/pictures/top-view-1248955_1920.jpg","alt","bowl of spinach"),this.div=this.manipulateDOM("div","Bowl Of Fresh Leaves","description",".box-4"),this.div=this.manipulateDOM("div","","food-squares box-5",".food-feature"),this.img=this.manipulateDOM("img","","fs5",".box-5","src","../src/pictures/jordane-mathieu-q8-yKQ3P7J0-unsplash.jpg","alt","chocolate cake"),this.div=this.manipulateDOM("div","Hard Labor Derived Tiramisu","description",".box-5")},createFooter:function(){this.footer=this.manipulateDOM("footer","","","#content"),this.p=this.manipulateDOM("p","Credits","","footer"),this.ul=this.manipulateDOM("ul","","foot-list","footer"),this.li=this.manipulateDOM("li","","fLi1",".foot-list"),this.a=this.manipulateDOM("a","stein egil liland","",".fLi1","href","https://www.pexels.com/photo/abandoned-wooden-barn-on-grassy-terrain-against-starry-night-sky-5740848/","target","_blank"),this.li=this.manipulateDOM("li","","fLi2",".foot-list"),this.a=this.manipulateDOM("a","ArtHouse Studio","",".fLi2","href","https://www.pexels.com/photo/wooden-interior-of-modern-restaurant-in-marine-style-4344544/","target","_blank"),this.li=this.manipulateDOM("li","","fLi3",".foot-list"),this.a=this.manipulateDOM("a","Araz Yurtseven","",".fLi3","href","https://www.pexels.com/photo/a-person-cooking-in-a-pan-outdoors-13739759/","target","_blank"),this.li=this.manipulateDOM("li","","fLi4",".foot-list"),this.a=this.manipulateDOM("a","Helena Lopes","",".fLi4","href","https://www.pexels.com/photo/people-drinking-liquor-and-talking-on-dining-table-close-up-photo-696218/","target","_blank"),this.li=this.manipulateDOM("li","","fLi5",".foot-list"),this.a=this.manipulateDOM("a","Алекке Блажин","",".fLi5","href","https://www.pexels.com/photo/close-up-photograph-of-fish-heads-near-tomatoes-11244934/","target","_blank"),this.li=this.manipulateDOM("li","","fLi6",".foot-list"),this.a=this.manipulateDOM("a","Johnathan Macedo","",".fLi6","href","https://unsplash.com/photos/4NQEvxW2_4w","target","_blank"),this.li=this.manipulateDOM("li","","fLi7",".foot-list"),this.a=this.manipulateDOM("a","Good Ware","",".fLi7","href","https://www.flaticon.com/free-icon/fish-bone_4201633?term=fish%20bones&page=1&position=1&page=1&position=1&related_id=4201633&origin=style","target","_blank"),this.li=this.manipulateDOM("li","","fLi8",".foot-list"),this.a=this.manipulateDOM("a","Doggo Ipsum","",".fLi8","href","https://doggoipsum.com/","target","_blank"),this.li=this.manipulateDOM("li","","fLi9",".foot-list"),this.a=this.manipulateDOM("a","Parnis Azimi","",".fLi9","href","https://unsplash.com/photos/dIbPZcftpL8","target","_blank"),this.li=this.manipulateDOM("li","","fLi10",".foot-list"),this.a=this.manipulateDOM("a","ducken99","",".fLi10","href","https://pixabay.com/photos/fried-rice-thai-food-thai-cuisine-3023040/","target","_blank"),this.li=this.manipulateDOM("li","","fLi11",".foot-list"),this.a=this.manipulateDOM("a","ROMAN ODINTSOV","",".fLi11","href","https://www.pexels.com/photo/delicious-appetizer-with-boiled-lobster-and-wine-4553378/","target","_blank"),this.li=this.manipulateDOM("li","","fLi12",".foot-list"),this.a=this.manipulateDOM("a","kkolosov","",".fLi12","href","https://pixabay.com/photos/top-view-basil-herbs-bowl-closeup-1248955/","target","_blank"),this.li=this.manipulateDOM("li","","fLi13",".foot-list"),this.a=this.manipulateDOM("a","Jordane Mathieu","",".fLi13","href","https://unsplash.com/photos/q8-yKQ3P7J0","target","_blank")}}.init();break;case 2:t(),{init:function(){this.createMain(),this.makeTodaysDate()},manipulateDOM:function(n,t,e,i,...a){const o=document.createElement(n);if(""!==t&&(o.innerText=t),""!==e){const n=e.split(" ");switch(n.length){case 1:o.classList.add(n[0]);break;case 2:o.classList.add(n[0],n[1]);break;case 3:o.classList.add(n[0],n[1],n[2]);break;case 4:o.classList.add(n[0],n[1],n[2],n[3])}}if(document.querySelector(i).appendChild(o),0!==a.length){let n=a.length/2,t=0,e=1;for(let i=0;i<n;i++)o.setAttribute(`${a[t]}`,`${a[e]}`),t+=2,e+=2}},createMain:function(){this.div=this.manipulateDOM("div","","reserve-feature","main"),this.form=this.manipulateDOM("form","","",".reserve-feature","action"," ","method","post"),this.div=this.manipulateDOM("div","","name","form"),this.label=this.manipulateDOM("label","","",".name","for","name"),this.input=this.manipulateDOM("input","","",".name","type","text","id","name","name","name","placeholder","Name *","aria-required","true","required",""),this.div=this.manipulateDOM("div","","email","form"),this.label=this.manipulateDOM("label","","",".email","for","email"),this.input=this.manipulateDOM("input","","",".email","type","email","id","email","name","email","placeholder","Email *","aria-required","true","required",""),this.div=this.manipulateDOM("div","","phone","form"),this.label=this.manipulateDOM("label","","",".phone","for","phone"),this.input=this.manipulateDOM("input","","",".phone","type","tel","id","phone","name","phone","placeholder","Phone *","aria-required","true","required",""),this.div=this.manipulateDOM("div","","guests","form"),this.div=this.manipulateDOM("div","","g1",".guests"),this.label=this.manipulateDOM("label","Guests * (between 2 and 8)","",".g1","for","guests"),this.div=this.manipulateDOM("div","","g2",".guests"),this.input=this.manipulateDOM("input","","",".g2","type","number","id","guests","name","guests","min","2","max","8","aria-required","true","required",""),this.div=this.manipulateDOM("div","","date","form"),this.div=this.manipulateDOM("div","","d1",".date"),this.label=this.manipulateDOM("label","Date * ","",".d1","for","date"),this.div=this.manipulateDOM("div","","d2",".date"),this.input=this.manipulateDOM("input","","",".d2","type","date","id","date","name","date","aria-required","true","required",""),this.div=this.manipulateDOM("div","","time","form"),this.div=this.manipulateDOM("div","","t1",".time"),this.label=this.manipulateDOM("label","Hours: Open 4pm. Close 11:30pm","",".t1","for","time"),this.div=this.manipulateDOM("div","","t2",".time"),this.select=this.manipulateDOM("select","","",".t2","name","time","id","time","aria-required","true","required",""),this.option=this.manipulateDOM("option","Time *","","#time","selected","","disabled","","value"," "),this.option=this.manipulateDOM("option","4:00","","#time","value","4:00"),this.option=this.manipulateDOM("option","4:30","","#time","value","4:30"),this.option=this.manipulateDOM("option","5:00","","#time","value","5:00"),this.option=this.manipulateDOM("option","5:30","","#time","value","5:30"),this.option=this.manipulateDOM("option","6:00","","#time","value","6:00"),this.option=this.manipulateDOM("option","6:30","","#time","value","6:30"),this.option=this.manipulateDOM("option","7:00","","#time","value","7:00"),this.option=this.manipulateDOM("option","7:30","","#time","value","7:30"),this.option=this.manipulateDOM("option","8:00","","#time","value","8:00"),this.option=this.manipulateDOM("option","8:30","","#time","value","8:30"),this.option=this.manipulateDOM("option","9:00","","#time","value","9:00"),this.option=this.manipulateDOM("option","9:30","","#time","value","9:30"),this.option=this.manipulateDOM("option","10:00","","#time","value","10:00"),this.option=this.manipulateDOM("option","10:30","","#time","value","10:30"),this.div=this.manipulateDOM("div","","message","form"),this.label=this.manipulateDOM("label","","",".message","for","message"),this.textarea=this.manipulateDOM("textarea","","",".message","name","message","id","message","placeholder","Message (optional)"),this.button=this.manipulateDOM("button","Submit","","form","disabled","")},makeTodaysDate:function(){const n=(new Date).toISOString().split("T")[0];document.querySelector('[type="date"]').setAttribute("min",n)}}.init()}}))}()})()})();