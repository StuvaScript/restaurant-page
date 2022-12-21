(()=>{"use strict";var __webpack_modules__={24:(module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n/* ---------------------------------------- */\\n/* Stu\'s Addition */\\n/* makes sizing simpler */\\n\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n/* ---------------------------------------- */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\n html {\\n    line-height: 1.15; /* 1 */\\n    -webkit-text-size-adjust: 100%; /* 2 */\\n  }\\n  \\n  /* Sections\\n     ========================================================================== */\\n  \\n  /**\\n   * Remove the margin in all browsers.\\n   */\\n  \\n  body {\\n    margin: 0;\\n  }\\n  \\n  /**\\n   * Render the `main` element consistently in IE.\\n   */\\n  \\n  main {\\n    display: block;\\n  }\\n  \\n  /**\\n   * Correct the font size and margin on `h1` elements within `section` and\\n   * `article` contexts in Chrome, Firefox, and Safari.\\n   */\\n  \\n  h1 {\\n    font-size: 2em;\\n    margin: 0.67em 0;\\n  }\\n  \\n  /* Grouping content\\n     ========================================================================== */\\n  \\n  /**\\n   * 1. Add the correct box sizing in Firefox.\\n   * 2. Show the overflow in Edge and IE.\\n   */\\n  \\n  hr {\\n    box-sizing: content-box; /* 1 */\\n    height: 0; /* 1 */\\n    overflow: visible; /* 2 */\\n  }\\n  \\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd `em` font sizing in all browsers.\\n   */\\n  \\n  pre {\\n    font-family: monospace, monospace; /* 1 */\\n    font-size: 1em; /* 2 */\\n  }\\n  \\n  /* Text-level semantics\\n     ========================================================================== */\\n  \\n  /**\\n   * Remove the gray background on active links in IE 10.\\n   */\\n  \\n  a {\\n    background-color: transparent;\\n  }\\n  \\n  /**\\n   * 1. Remove the bottom border in Chrome 57-\\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n   */\\n  \\n  abbr[title] {\\n    border-bottom: none; /* 1 */\\n    text-decoration: underline; /* 2 */\\n    text-decoration: underline dotted; /* 2 */\\n  }\\n  \\n  /**\\n   * Add the correct font weight in Chrome, Edge, and Safari.\\n   */\\n  \\n  b,\\n  strong {\\n    font-weight: bolder;\\n  }\\n  \\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd `em` font sizing in all browsers.\\n   */\\n  \\n  code,\\n  kbd,\\n  samp {\\n    font-family: monospace, monospace; /* 1 */\\n    font-size: 1em; /* 2 */\\n  }\\n  \\n  /**\\n   * Add the correct font size in all browsers.\\n   */\\n  \\n  small {\\n    font-size: 80%;\\n  }\\n  \\n  /**\\n   * Prevent `sub` and `sup` elements from affecting the line height in\\n   * all browsers.\\n   */\\n  \\n  sub,\\n  sup {\\n    font-size: 75%;\\n    line-height: 0;\\n    position: relative;\\n    vertical-align: baseline;\\n  }\\n  \\n  sub {\\n    bottom: -0.25em;\\n  }\\n  \\n  sup {\\n    top: -0.5em;\\n  }\\n  \\n  /* Embedded content\\n     ========================================================================== */\\n  \\n  /**\\n   * Remove the border on images inside links in IE 10.\\n   */\\n  \\n  img {\\n    border-style: none;\\n  }\\n  \\n  /* Forms\\n     ========================================================================== */\\n  \\n  /**\\n   * 1. Change the font styles in all browsers.\\n   * 2. Remove the margin in Firefox and Safari.\\n   */\\n  \\n  button,\\n  input,\\n  optgroup,\\n  select,\\n  textarea {\\n    font-family: inherit; /* 1 */\\n    font-size: 100%; /* 1 */\\n    line-height: 1.15; /* 1 */\\n    margin: 0; /* 2 */\\n  }\\n  \\n  /**\\n   * Show the overflow in IE.\\n   * 1. Show the overflow in Edge.\\n   */\\n  \\n  button,\\n  input { /* 1 */\\n    overflow: visible;\\n  }\\n  \\n  /**\\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n   * 1. Remove the inheritance of text transform in Firefox.\\n   */\\n  \\n  button,\\n  select { /* 1 */\\n    text-transform: none;\\n  }\\n  \\n  /**\\n   * Correct the inability to style clickable types in iOS and Safari.\\n   */\\n  \\n  button,\\n  [type=\\"button\\"],\\n  [type=\\"reset\\"],\\n  [type=\\"submit\\"] {\\n    -webkit-appearance: button;\\n  }\\n  \\n  /**\\n   * Remove the inner border and padding in Firefox.\\n   */\\n  \\n  button::-moz-focus-inner,\\n  [type=\\"button\\"]::-moz-focus-inner,\\n  [type=\\"reset\\"]::-moz-focus-inner,\\n  [type=\\"submit\\"]::-moz-focus-inner {\\n    border-style: none;\\n    padding: 0;\\n  }\\n  \\n  /**\\n   * Restore the focus styles unset by the previous rule.\\n   */\\n  \\n  button:-moz-focusring,\\n  [type=\\"button\\"]:-moz-focusring,\\n  [type=\\"reset\\"]:-moz-focusring,\\n  [type=\\"submit\\"]:-moz-focusring {\\n    outline: 1px dotted ButtonText;\\n  }\\n  \\n  /**\\n   * Correct the padding in Firefox.\\n   */\\n  \\n  fieldset {\\n    padding: 0.35em 0.75em 0.625em;\\n  }\\n  \\n  /**\\n   * 1. Correct the text wrapping in Edge and IE.\\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\\n   * 3. Remove the padding so developers are not caught out when they zero out\\n   *    `fieldset` elements in all browsers.\\n   */\\n  \\n  legend {\\n    box-sizing: border-box; /* 1 */\\n    color: inherit; /* 2 */\\n    display: table; /* 1 */\\n    max-width: 100%; /* 1 */\\n    padding: 0; /* 3 */\\n    white-space: normal; /* 1 */\\n  }\\n  \\n  /**\\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n   */\\n  \\n  progress {\\n    vertical-align: baseline;\\n  }\\n  \\n  /**\\n   * Remove the default vertical scrollbar in IE 10+.\\n   */\\n  \\n  textarea {\\n    overflow: auto;\\n  }\\n  \\n  /**\\n   * 1. Add the correct box sizing in IE 10.\\n   * 2. Remove the padding in IE 10.\\n   */\\n  \\n  [type=\\"checkbox\\"],\\n  [type=\\"radio\\"] {\\n    box-sizing: border-box; /* 1 */\\n    padding: 0; /* 2 */\\n  }\\n  \\n  /**\\n   * Correct the cursor style of increment and decrement buttons in Chrome.\\n   */\\n  \\n  [type=\\"number\\"]::-webkit-inner-spin-button,\\n  [type=\\"number\\"]::-webkit-outer-spin-button {\\n    height: auto;\\n  }\\n  \\n  /**\\n   * 1. Correct the odd appearance in Chrome and Safari.\\n   * 2. Correct the outline style in Safari.\\n   */\\n  \\n  [type=\\"search\\"] {\\n    -webkit-appearance: textfield; /* 1 */\\n    outline-offset: -2px; /* 2 */\\n  }\\n  \\n  /**\\n   * Remove the inner padding in Chrome and Safari on macOS.\\n   */\\n  \\n  [type=\\"search\\"]::-webkit-search-decoration {\\n    -webkit-appearance: none;\\n  }\\n  \\n  /**\\n   * 1. Correct the inability to style clickable types in iOS and Safari.\\n   * 2. Change font properties to `inherit` in Safari.\\n   */\\n  \\n  ::-webkit-file-upload-button {\\n    -webkit-appearance: button; /* 1 */\\n    font: inherit; /* 2 */\\n  }\\n  \\n  /* Interactive\\n     ========================================================================== */\\n  \\n  /*\\n   * Add the correct display in Edge, IE 10+, and Firefox.\\n   */\\n  \\n  details {\\n    display: block;\\n  }\\n  \\n  /*\\n   * Add the correct display in all browsers.\\n   */\\n  \\n  summary {\\n    display: list-item;\\n  }\\n  \\n  /* Misc\\n     ========================================================================== */\\n  \\n  /**\\n   * Add the correct display in IE 10+.\\n   */\\n  \\n  template {\\n    display: none;\\n  }\\n  \\n  /**\\n   * Add the correct display in IE 10.\\n   */\\n  \\n  [hidden] {\\n    display: none;\\n  }", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/normalize.css?./node_modules/css-loader/dist/cjs.js')},426:(module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(952), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(539), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ":root {\\n    --white: rgb(255, 252, 235);\\n    --brown: rgb(67, 42, 39);\\n}\\n\\n@font-face {\\n    font-family: \'CustomFont\';\\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\'truetype\');\\n}\\n\\nbody {\\n    background: var(--brown);\\n    color: var(--white);\\n    font-size: 1.2rem;\\n}\\n\\nheader {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\nh1 {\\n    font-family: \'CustomFont\', Arial, sans-serif;\\n    letter-spacing: 5px;\\n    position: absolute;\\n    top: 20px;\\n    text-align: center;\\n    padding: 40px 90px;\\n    border-radius: 50%;\\n    font-size: 6rem;\\n    background: var(--white);\\n    opacity: 0.3;\\n    color: #000;\\n    mix-blend-mode: screen;\\n}\\n\\n.shed-img {\\n    width: 100%;\\n    height: 100vh;\\n    object-fit: cover;\\n}\\n\\nmain {\\n    padding-top: 100px;\\n\\n    display: grid;\\n    grid-template-rows: repeat(2, auto);\\n    grid-template-columns: 1fr 5fr;\\n}\\n\\n.sidebar {\\n    display: flex;\\n    justify-content: center;\\n}\\n\\n.sidebar ul {\\n    padding: 0;\\n    margin: 0;\\n    font-size: 2rem;\\n}\\n\\n.sidebar li {\\n    list-style-type: none;\\n    margin-bottom: 9rem;\\n    cursor: pointer;\\n}\\n\\n.sidebar li::after {\\n    /* content: url(../src/pictures/fish-bone.png); */\\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\\n    background-size: 50px 50px;\\n    display: inline-block;\\n    width: 50px; \\n    height: 50px;\\n    content:\\"\\";\\n    transform: scaleX(-1) rotate(45deg);\\n    position: relative;\\n    left: 2rem;\\n    top: 1rem;\\n    opacity: 0;\\n    transition: 300ms;\\n    transition-timing-function: ease-in;\\n}\\n\\n.sidebar li:hover::after {\\n    opacity: 1;\\n}\\n\\n.feature {\\n    padding-bottom: 30px;\\n\\n    display: grid;\\n    grid-template-rows: repeat(4, auto);\\n    grid-template-columns: 1fr 1fr 2fr;\\n    row-gap: 30px;\\n}\\n\\n.food-feature {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 50px;\\n}\\n\\n.food-squares {\\n    width: 70%;\\n    height: 80vh;\\n    background: var(--white);\\n    padding: 50px 50px 10px;\\n}\\n\\n.food-squares > img {\\n    width: 100%;\\n    height: 80%;\\n    object-fit: cover;\\n}\\n\\n.fs3 {\\n    object-position: 50% 88%;\\n}\\n\\n.fs5 {\\n    object-position: 50% 88%;\\n}\\n\\n.description {\\n    height: 20%;\\n    color: #000;\\n    font-size: 3rem;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.interior-img {\\n    width: 100%;\\n\\n    grid-column: 3 / 4;\\n    grid-row: 1 / 2;\\n}\\n\\n.eating-img {\\n    width: 100%;\\n\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 3;\\n}\\n\\n.cooking-img {\\n    width: 100%;\\n\\n    grid-column: 1 / 2;\\n    grid-row: 3 / 4;\\n}\\n\\n.fish-img {\\n    width: 100%;\\n\\n    grid-column: 1 / 2;\\n    grid-row: 4 / 5;\\n}\\n\\n.info {\\n    padding: 0 30px;\\n\\n    grid-column: 2 / 3;\\n    grid-row: 1 / 5;\\n}\\n\\n.info > div {\\n    position: sticky;\\n    top: 10vh;\\n}\\n\\np {\\n    margin: 0;\\n    line-height: 1.8rem;\\n}\\n\\n.fire-img {\\n    width: 100%;\\n    height: 100vh;\\n    object-fit: cover;\\n\\n    grid-column: 1 / 3;\\n}\\n\\nform {\\n    background: var(--white);\\n    color: #000;\\n    font-family: \'CustomFont\', Arial, sans-serif;\\n    font-weight: 900;\\n}\\n\\nfooter {\\n    color: var(--white);\\n    padding: 20px;\\n    background: var(--brown);\\n}\\n\\nfooter p {\\n    text-align: center;\\n    font-size: 1.5rem;\\n    padding-bottom: 20px;\\n    text-decoration: underline;\\n}\\n\\nfooter ul {\\n    padding: 0;\\n    margin: 0;\\n\\n    display: grid;\\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\\n    justify-items: center;\\n    justify-content: center;\\n}\\n\\nfooter li {\\n    list-style-type: none;\\n    padding: 10px;\\n    font-size: 1rem;\\n\\n}\\n\\nfooter a {\\n    text-decoration: none;\\n}\\n\\nfooter a:link,\\na:visited,\\na:hover,\\na:active {\\n    color: var(--white);\\n}", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js')},645:module=>{eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?')},667:module=>{eval('\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?')},81:module=>{eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?")},379:module=>{eval('\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?')},569:module=>{eval('\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?')},216:module=>{eval('\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?')},565:(module,__unused_webpack_exports,__webpack_require__)=>{eval('\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?')},795:module=>{eval('\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?')},589:module=>{eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?")},925:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{eval("\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\nvar injectStylesIntoStyleTag = __webpack_require__(379);\nvar injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js\nvar styleDomAPI = __webpack_require__(795);\nvar styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js\nvar insertBySelector = __webpack_require__(569);\nvar insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\nvar setAttributesWithoutAttributes = __webpack_require__(565);\nvar setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js\nvar insertStyleElement = __webpack_require__(216);\nvar insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js\nvar styleTagTransform = __webpack_require__(589);\nvar styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);\n// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/normalize.css\nvar normalize = __webpack_require__(24);\n;// CONCATENATED MODULE: ./src/normalize.css\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (styleTagTransform_default());\noptions.setAttributes = (setAttributesWithoutAttributes_default());\n\n      options.insert = insertBySelector_default().bind(null, \"head\");\n    \noptions.domAPI = (styleDomAPI_default());\noptions.insertStyleElement = (insertStyleElement_default());\n\nvar update = injectStylesIntoStyleTag_default()(normalize/* default */.Z, options);\n\n\n\n\n       /* harmony default export */ const src_normalize = (normalize/* default */.Z && normalize/* default.locals */.Z.locals ? normalize/* default.locals */.Z.locals : undefined);\n\n// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css\nvar style = __webpack_require__(426);\n;// CONCATENATED MODULE: ./src/style.css\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar style_options = {};\n\nstyle_options.styleTagTransform = (styleTagTransform_default());\nstyle_options.setAttributes = (setAttributesWithoutAttributes_default());\n\n      style_options.insert = insertBySelector_default().bind(null, \"head\");\n    \nstyle_options.domAPI = (styleDomAPI_default());\nstyle_options.insertStyleElement = (insertStyleElement_default());\n\nvar style_update = injectStylesIntoStyleTag_default()(style/* default */.Z, style_options);\n\n\n\n\n       /* harmony default export */ const src_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);\n\n;// CONCATENATED MODULE: ./src/pictures/pexels-stein-egil-liland-5740848.jpg\nconst pexels_stein_egil_liland_5740848_namespaceObject = __webpack_require__.p + \"a3b8fbd28f3c2f0f6acf.jpg\";\n;// CONCATENATED MODULE: ./src/index.js\n// import pageMain from './page-main.js';\n// import pageAbout from './page-about.js';\n// import pageFood from './page-food.js';\n// import pageReserve from './page-reserve';\n\n\n\n\n// Import the other photos too?\n\npageMain()\n\nfunction component() {\n\n// See if you can underline sidebar according to the active page with javascript\n\n    pageAbout();\n\n    function removeElements() {\n        const picky = document.querySelectorAll('main > *:not(:first-child)');\n        for (const el of picky) {\n            el.remove();\n        }\n    };\n\n    document.querySelector('.sidebar > ul').addEventListener('click', function(e) {\n        const idx = [...this.children].indexOf(e.target);\n\n        switch (idx) {\n            case 0:\n                removeElements();\n                pageAbout();\n                break;\n            case 1:\n                removeElements();\n                pageFood();\n                break;\n        }\n    });\n}\n\n// Just need to create the \"reservations\" page, add it to the switch statement in this file, delete all commented out\n// codes in the other files, and read these other commented notes to see if I need to do more before wrapping this\n// project up.\n\ncomponent();\n\n\n// Make sure to change your devtool in webpack.config.js to something more \n// production friendly when you finish this project\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js_+_3_modules?")},952:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "a7f8083e8b93da348dcc.ttf";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Quicksand-Light.ttf?')},539:(module,__unused_webpack_exports,__webpack_require__)=>{eval('module.exports = __webpack_require__.p + "db4cbcd45fa15d718dde.png";\n\n//# sourceURL=webpack://restaurant-page/./src/pictures/fish-bone.png?')}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n](t,t.exports,__webpack_require__),t.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(n,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),__webpack_require__.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;__webpack_require__.g.importScripts&&(n=__webpack_require__.g.location+"");var e=__webpack_require__.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=n})(),__webpack_require__.b=document.baseURI||self.location.href,__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__(925)})();