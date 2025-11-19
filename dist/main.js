/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/normalize.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n/* ---------------------------------------- */\n/* Stu's Addition */\n/* makes sizing simpler */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* ---------------------------------------- */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;AAC/E,6CAA6C;AAC7C,mBAAmB;AACnB,yBAAyB;;AAEzB;;;EAGE,sBAAsB;AACxB;;AAEA,6CAA6C;;AAE7C;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,SAAS;AACX;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;IAGI;;AAEJ;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,6BAA6B;AAC/B;;AAEA;;;IAGI;;AAEJ;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;IAEI;;AAEJ;;EAEE,mBAAmB;AACrB;;AAEA;;;IAGI;;AAEJ;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;;IAGI;;AAEJ;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;IAGI;;AAEJ;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;IAEI;;AAEJ;;;;EAIE,0BAA0B;AAC5B;;AAEA;;IAEI;;AAEJ;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;IAEI;;AAEJ;;;;EAIE,8BAA8B;AAChC;;AAEA;;IAEI;;AAEJ;EACE,8BAA8B;AAChC;;AAEA;;;;;IAKI;;AAEJ;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;;IAGI;;AAEJ;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;IAEI;;AAEJ;;EAEE,YAAY;AACd;;AAEA;;;IAGI;;AAEJ;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;IAEI;;AAEJ;EACE,wBAAwB;AAC1B;;AAEA;;;IAGI;;AAEJ;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,cAAc;AAChB;;AAEA;;IAEI;;AAEJ;EACE,kBAAkB;AACpB;;AAEA;iFACiF;;AAEjF;;IAEI;;AAEJ;EACE,aAAa;AACf;;AAEA;;IAEI;;AAEJ;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n/* ---------------------------------------- */\n/* Stu's Addition */\n/* makes sizing simpler */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* ---------------------------------------- */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n     ========================================================================== */\n\n/**\n   * Remove the margin in all browsers.\n   */\n\nbody {\n  margin: 0;\n}\n\n/**\n   * Render the `main` element consistently in IE.\n   */\n\nmain {\n  display: block;\n}\n\n/**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n     ========================================================================== */\n\n/**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n     ========================================================================== */\n\n/**\n   * Remove the gray background on active links in IE 10.\n   */\n\na {\n  background-color: transparent;\n}\n\n/**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n   * Add the correct font size in all browsers.\n   */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n     ========================================================================== */\n\n/**\n   * Remove the border on images inside links in IE 10.\n   */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n     ========================================================================== */\n\n/**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n   * Remove the inner border and padding in Firefox.\n   */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n   * Restore the focus styles unset by the previous rule.\n   */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n   * Correct the padding in Firefox.\n   */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n     ========================================================================== */\n\n/*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n\ndetails {\n  display: block;\n}\n\n/*\n   * Add the correct display in all browsers.\n   */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n     ========================================================================== */\n\n/**\n   * Add the correct display in IE 10+.\n   */\n\ntemplate {\n  display: none;\n}\n\n/**\n   * Add the correct display in IE 10.\n   */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/Quicksand-Light.ttf */ "./src/fonts/Quicksand-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/pictures/fish-bone.png */ "./src/pictures/fish-bone.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --white: rgb(255, 252, 235);\n  --brown: rgb(67, 42, 39);\n}\n\n@font-face {\n  font-family: \"CustomFont\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n\nbody {\n  background: var(--brown);\n  color: var(--white);\n  font-size: 1.2rem;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n\nh1 {\n  font-family: \"CustomFont\", Arial, sans-serif;\n  letter-spacing: 5px;\n  position: absolute;\n  text-align: center;\n  padding: 4vw 8vw;\n  border-radius: 50%;\n  font-size: 6vw;\n  background: var(--white);\n  opacity: 0.3;\n  color: #000;\n  mix-blend-mode: screen;\n  margin-top: calc(5vw + 50px);\n  margin-left: -40px;\n}\n\n.shed-img {\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n}\n\nmain {\n  padding-top: 100px;\n\n  display: grid;\n  grid-template-rows: repeat(2, auto);\n  grid-template-columns: 1fr 5fr;\n}\n\n.sidebar {\n  display: flex;\n  justify-content: center;\n  padding: 30px;\n}\n\n.sidebar ul {\n  padding: 0;\n  margin: 0;\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  gap: 7vw;\n}\n\n.sidebar li {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.sidebar li::after {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 50px 50px;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  content: \"\";\n  transform: scaleX(-1) rotate(45deg);\n  position: relative;\n  left: 2rem;\n  top: 1rem;\n  opacity: 0;\n  transition: 300ms;\n  transition-timing-function: ease-in;\n}\n\n.sidebar li:hover::after {\n  opacity: 1;\n}\n\n.feature {\n  padding-bottom: 30px;\n\n  display: grid;\n  grid-template-rows: repeat(4, auto);\n  grid-template-columns: 1fr 1fr 2fr;\n  row-gap: 30px;\n}\n\n.food-feature {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n\n.food-squares {\n  width: 70%;\n  height: 40vw;\n  background: var(--white);\n  padding: 2.5vw 2.5vw 2vw;\n}\n\n.food-squares > img {\n  width: 100%;\n  height: 80%;\n  object-fit: cover;\n}\n\n.fs3 {\n  object-position: 50% 88%;\n}\n\n.fs5 {\n  object-position: 50% 88%;\n}\n\n.description {\n  height: 20%;\n  color: #000;\n  font-size: 4vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.interior-img {\n  width: 100%;\n\n  grid-column: 3 / 4;\n  grid-row: 1 / 2;\n}\n\n.eating-img {\n  width: 100%;\n\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.cooking-img {\n  width: 100%;\n\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n}\n\n.fish-img {\n  width: 100%;\n\n  grid-column: 1 / 2;\n  grid-row: 4 / 5;\n}\n\n.info {\n  padding: 0 30px;\n\n  grid-column: 2 / 3;\n  grid-row: 1 / 5;\n}\n\n.info > div {\n  position: sticky;\n  top: 10vh;\n}\n\np {\n  margin: 0;\n  line-height: 1.8rem;\n}\n\n.fire-img {\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n\n  grid-column: 1 / 3;\n}\n\n.reserve-feature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform {\n  width: 50%;\n  font-family: \"CustomFont\", Arial, sans-serif;\n  font-weight: 900;\n  font-size: 1rem;\n\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  grid-template-rows: repeat(7, auto);\n  gap: 20px;\n  grid-template-areas:\n    \"name name email email\"\n    \"phone phone phone phone\"\n    \" . guests guests . \"\n    \" . date date . \"\n    \" . time time . \"\n    \"message message message message\"\n    \"submit submit submit submit\";\n}\n\n.name {\n  grid-area: name;\n}\n\n.email {\n  grid-area: email;\n}\n\n.phone {\n  grid-area: phone;\n}\n\n.name > *,\n.email > *,\n.phone > * {\n  width: 100%;\n}\n\n.guests {\n  grid-area: guests;\n}\n\n.date {\n  grid-area: date;\n}\n\n.time {\n  grid-area: time;\n}\n\n.guests,\n.date,\n.time {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 20px;\n}\n\n.guests > div:first-child,\n.date > div:first-child,\n.time > div:first-child {\n  justify-self: end;\n}\n\n.message {\n  grid-area: message;\n  display: grid;\n}\n\nform > button {\n  grid-area: submit;\n}\n\ninput,\nselect,\ntextarea,\nform > button {\n  padding: 10px 5px;\n  background: var(--white);\n  border: none;\n  border-radius: 5px;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: var(--brown);\n  font-weight: bold;\n  opacity: 0.7;\n}\n\ninput[type=\"number\"] {\n  text-align: center;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  opacity: 1;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\ntextarea {\n  resize: none;\n  height: 150px;\n}\n\nform > button:hover {\n  background: rgb(216, 215, 202);\n  cursor: pointer;\n}\n\nform > button:active {\n  background: var(--white);\n}\n\nform > button:disabled {\n  color: var(--brown);\n  font-weight: bold;\n}\n\nfooter {\n  color: var(--white);\n  padding: 20px;\n  background: var(--brown);\n}\n\nfooter p {\n  text-align: center;\n  font-size: 1.5rem;\n  padding-bottom: 20px;\n  text-decoration: underline;\n}\n\nfooter ul {\n  padding: 0;\n  margin: 0;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  justify-items: center;\n  justify-content: center;\n}\n\nfooter li {\n  list-style-type: none;\n  padding: 10px;\n  font-size: 1rem;\n}\n\nfooter a {\n  text-decoration: none;\n}\n\nfooter a:link,\na:visited,\na:hover,\na:active {\n  color: var(--white);\n}\n\n@media (max-width: 1200px) {\n  .feature {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .interior-img {\n    grid-column: 1 / 2;\n  }\n}\n\n@media (max-width: 800px) {\n  h1 {\n    margin-top: calc(5vw + 150px);\n  }\n\n  .feature {\n    grid-template-rows: repeat(5, auto);\n    grid-template-columns: 1fr;\n  }\n\n  .eating-img {\n    grid-row: 3 / 4;\n  }\n\n  .cooking-img {\n    grid-row: 4 / 5;\n  }\n\n  .fish-img {\n    grid-row: 5 / 6;\n  }\n\n  .info {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n\n  form {\n    width: 100%;\n    padding: 10px;\n  }\n}\n\n@media (max-width: 500px) {\n  main {\n    display: flex;\n    flex-direction: column;\n    padding: 30px;\n  }\n\n  .food-squares {\n    width: 100%;\n    height: 80vw;\n  }\n\n  .description {\n    font-size: 6vw;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --white: rgb(255, 252, 235);\n  --brown: rgb(67, 42, 39);\n}\n\n@font-face {\n  font-family: \"CustomFont\";\n  src: url(../src/fonts/Quicksand-Light.ttf) format(\"truetype\");\n}\n\nbody {\n  background: var(--brown);\n  color: var(--white);\n  font-size: 1.2rem;\n}\n\nheader {\n  display: flex;\n  justify-content: center;\n  align-items: start;\n}\n\nh1 {\n  font-family: \"CustomFont\", Arial, sans-serif;\n  letter-spacing: 5px;\n  position: absolute;\n  text-align: center;\n  padding: 4vw 8vw;\n  border-radius: 50%;\n  font-size: 6vw;\n  background: var(--white);\n  opacity: 0.3;\n  color: #000;\n  mix-blend-mode: screen;\n  margin-top: calc(5vw + 50px);\n  margin-left: -40px;\n}\n\n.shed-img {\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n}\n\nmain {\n  padding-top: 100px;\n\n  display: grid;\n  grid-template-rows: repeat(2, auto);\n  grid-template-columns: 1fr 5fr;\n}\n\n.sidebar {\n  display: flex;\n  justify-content: center;\n  padding: 30px;\n}\n\n.sidebar ul {\n  padding: 0;\n  margin: 0;\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  gap: 7vw;\n}\n\n.sidebar li {\n  list-style-type: none;\n  cursor: pointer;\n}\n\n.sidebar li::after {\n  background-image: url(../src/pictures/fish-bone.png);\n  background-size: 50px 50px;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  content: \"\";\n  transform: scaleX(-1) rotate(45deg);\n  position: relative;\n  left: 2rem;\n  top: 1rem;\n  opacity: 0;\n  transition: 300ms;\n  transition-timing-function: ease-in;\n}\n\n.sidebar li:hover::after {\n  opacity: 1;\n}\n\n.feature {\n  padding-bottom: 30px;\n\n  display: grid;\n  grid-template-rows: repeat(4, auto);\n  grid-template-columns: 1fr 1fr 2fr;\n  row-gap: 30px;\n}\n\n.food-feature {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 50px;\n}\n\n.food-squares {\n  width: 70%;\n  height: 40vw;\n  background: var(--white);\n  padding: 2.5vw 2.5vw 2vw;\n}\n\n.food-squares > img {\n  width: 100%;\n  height: 80%;\n  object-fit: cover;\n}\n\n.fs3 {\n  object-position: 50% 88%;\n}\n\n.fs5 {\n  object-position: 50% 88%;\n}\n\n.description {\n  height: 20%;\n  color: #000;\n  font-size: 4vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.interior-img {\n  width: 100%;\n\n  grid-column: 3 / 4;\n  grid-row: 1 / 2;\n}\n\n.eating-img {\n  width: 100%;\n\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.cooking-img {\n  width: 100%;\n\n  grid-column: 1 / 2;\n  grid-row: 3 / 4;\n}\n\n.fish-img {\n  width: 100%;\n\n  grid-column: 1 / 2;\n  grid-row: 4 / 5;\n}\n\n.info {\n  padding: 0 30px;\n\n  grid-column: 2 / 3;\n  grid-row: 1 / 5;\n}\n\n.info > div {\n  position: sticky;\n  top: 10vh;\n}\n\np {\n  margin: 0;\n  line-height: 1.8rem;\n}\n\n.fire-img {\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n\n  grid-column: 1 / 3;\n}\n\n.reserve-feature {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nform {\n  width: 50%;\n  font-family: \"CustomFont\", Arial, sans-serif;\n  font-weight: 900;\n  font-size: 1rem;\n\n  display: grid;\n  grid-template-columns: repeat(4, auto);\n  grid-template-rows: repeat(7, auto);\n  gap: 20px;\n  grid-template-areas:\n    \"name name email email\"\n    \"phone phone phone phone\"\n    \" . guests guests . \"\n    \" . date date . \"\n    \" . time time . \"\n    \"message message message message\"\n    \"submit submit submit submit\";\n}\n\n.name {\n  grid-area: name;\n}\n\n.email {\n  grid-area: email;\n}\n\n.phone {\n  grid-area: phone;\n}\n\n.name > *,\n.email > *,\n.phone > * {\n  width: 100%;\n}\n\n.guests {\n  grid-area: guests;\n}\n\n.date {\n  grid-area: date;\n}\n\n.time {\n  grid-area: time;\n}\n\n.guests,\n.date,\n.time {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 20px;\n}\n\n.guests > div:first-child,\n.date > div:first-child,\n.time > div:first-child {\n  justify-self: end;\n}\n\n.message {\n  grid-area: message;\n  display: grid;\n}\n\nform > button {\n  grid-area: submit;\n}\n\ninput,\nselect,\ntextarea,\nform > button {\n  padding: 10px 5px;\n  background: var(--white);\n  border: none;\n  border-radius: 5px;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  color: var(--brown);\n  font-weight: bold;\n  opacity: 0.7;\n}\n\ninput[type=\"number\"] {\n  text-align: center;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  opacity: 1;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\ntextarea {\n  resize: none;\n  height: 150px;\n}\n\nform > button:hover {\n  background: rgb(216, 215, 202);\n  cursor: pointer;\n}\n\nform > button:active {\n  background: var(--white);\n}\n\nform > button:disabled {\n  color: var(--brown);\n  font-weight: bold;\n}\n\nfooter {\n  color: var(--white);\n  padding: 20px;\n  background: var(--brown);\n}\n\nfooter p {\n  text-align: center;\n  font-size: 1.5rem;\n  padding-bottom: 20px;\n  text-decoration: underline;\n}\n\nfooter ul {\n  padding: 0;\n  margin: 0;\n\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n  justify-items: center;\n  justify-content: center;\n}\n\nfooter li {\n  list-style-type: none;\n  padding: 10px;\n  font-size: 1rem;\n}\n\nfooter a {\n  text-decoration: none;\n}\n\nfooter a:link,\na:visited,\na:hover,\na:active {\n  color: var(--white);\n}\n\n@media (max-width: 1200px) {\n  .feature {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .interior-img {\n    grid-column: 1 / 2;\n  }\n}\n\n@media (max-width: 800px) {\n  h1 {\n    margin-top: calc(5vw + 150px);\n  }\n\n  .feature {\n    grid-template-rows: repeat(5, auto);\n    grid-template-columns: 1fr;\n  }\n\n  .eating-img {\n    grid-row: 3 / 4;\n  }\n\n  .cooking-img {\n    grid-row: 4 / 5;\n  }\n\n  .fish-img {\n    grid-row: 5 / 6;\n  }\n\n  .info {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n  }\n\n  form {\n    width: 100%;\n    padding: 10px;\n  }\n}\n\n@media (max-width: 500px) {\n  main {\n    display: flex;\n    flex-direction: column;\n    padding: 30px;\n  }\n\n  .food-squares {\n    width: 100%;\n    height: 80vw;\n  }\n\n  .description {\n    font-size: 6vw;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Quicksand-Light.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Quicksand-Light.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7f8083e8b93da348dcc.ttf";

/***/ }),

/***/ "./src/normalize.css":
/*!***************************!*\
  !*** ./src/normalize.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/page-about.ts":
/*!***************************!*\
  !*** ./src/page-about.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageAbout)
/* harmony export */ });
/* harmony import */ var _pictures_pexels_arthouse_studio_4344544_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pictures/pexels-arthouse-studio-4344544.jpg */ "./src/pictures/pexels-arthouse-studio-4344544.jpg");
/* harmony import */ var _pictures_pexels_helena_lopes_696218_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures/pexels-helena-lopes-696218.jpg */ "./src/pictures/pexels-helena-lopes-696218.jpg");
/* harmony import */ var _pictures_pexels_araz_yurtseven_13739759_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictures/pexels-araz-yurtseven-13739759.jpg */ "./src/pictures/pexels-araz-yurtseven-13739759.jpg");
/* harmony import */ var _pictures_pexels_11244934_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pictures/pexels-алекке-блажин-11244934.jpg */ "./src/pictures/pexels-алекке-блажин-11244934.jpg");
/* harmony import */ var _pictures_johnathan_macedo_4NQEvxW2_4w_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pictures/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg */ "./src/pictures/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg");





function pageAbout() {
    const innerObject = {
        init() {
            this.createMain();
        },
        manipulateDOM(element, innerText, className, appendTo, ...attributes) {
            const newElement = document.createElement(element);
            innerText !== "" ? (newElement.innerText = innerText) : "";
            if (className !== "") {
                const classArray = className.split(" ");
                newElement.classList.add(...classArray);
            }
            document.querySelector(appendTo).appendChild(newElement);
            if (attributes.length !== 0) {
                let sets = attributes.length / 2;
                let attPosition = 0;
                let valPosition = 1;
                for (let i = 0; i < sets; i++) {
                    newElement.setAttribute(`${attributes[attPosition]}`, `${attributes[valPosition]}`);
                    attPosition += 2;
                    valPosition += 2;
                }
            }
        },
        createMain() {
            this.div = this.manipulateDOM("div", "", "feature", "main");
            this.img = this.manipulateDOM("img", "", "interior-img", ".feature", "src", _pictures_pexels_arthouse_studio_4344544_jpg__WEBPACK_IMPORTED_MODULE_0__, "alt", "Interior of restaurant.");
            this.div = this.manipulateDOM("div", "", "info", ".feature");
            this.div = this.manipulateDOM("div", "", "para-div", ".info");
            this.p = this.manipulateDOM("p", this.longText.p1, "", ".para-div");
            this.br = this.manipulateDOM("br", "", "", ".para-div");
            this.p = this.manipulateDOM("p", this.longText.p2, "", ".para-div");
            this.img = this.manipulateDOM("img", "", "eating-img", ".feature", "src", _pictures_pexels_helena_lopes_696218_jpg__WEBPACK_IMPORTED_MODULE_1__, "alt", "People eating.");
            this.img = this.manipulateDOM("img", "", "cooking-img", ".feature", "src", _pictures_pexels_araz_yurtseven_13739759_jpg__WEBPACK_IMPORTED_MODULE_2__, "alt", "Cooking food over fire.");
            this.img = this.manipulateDOM("img", "", "fish-img", ".feature", "src", _pictures_pexels_11244934_jpg__WEBPACK_IMPORTED_MODULE_3__, "alt", "Fish head food.");
            this.img = this.manipulateDOM("img", "", "fire-img", "main", "src", _pictures_johnathan_macedo_4NQEvxW2_4w_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__, "alt", "Chef cooking with fire.");
        },
        longText: {
            p1: "Doggo ipsum borkf puggo noodle horse heckin good boys long water shoob, heckin good boys and girls very jealous pupper very taste wow. Pupper boof aqua doggo lotsa pats very good spot pupper much ruin diet very good spot boof super chub, such treat borkdrive blop the neighborhood pupper yapper wrinkler shooberino. Pats woofer smol borking doggo with a long snoot for pats wrinkler lotsa pats most angery pupper I have ever seen, ur givin me a spook.",
            p2: "Bork h*ck heckin good boys and girls doing me a frighten doggorino adorable doggo, many pats aqua doggo doge pats clouds ruff, sub woofer lotsa pats very hand that feed shibe noodle horse. Fat boi wrinkler what a nice floof he made many woofs very taste wow, the neighborhood pupper long water shoob blop, noodle horse very taste wow very good spot. Blop you are doing me a frighten he made many woofs blep big ol tungg ruff very hand that feed.",
        },
    };
    innerObject.init();
    return { innerObject };
}


/***/ }),

/***/ "./src/page-food.ts":
/*!**************************!*\
  !*** ./src/page-food.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageFood)
/* harmony export */ });
/* harmony import */ var _pictures_parnis_azimi_dIbPZcftpL8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pictures/parnis-azimi-dIbPZcftpL8-unsplash.jpg */ "./src/pictures/parnis-azimi-dIbPZcftpL8-unsplash.jpg");
/* harmony import */ var _pictures_fried_rice_3023040_1920_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pictures/fried-rice-3023040_1920.jpg */ "./src/pictures/fried-rice-3023040_1920.jpg");
/* harmony import */ var _pictures_pexels_roman_odintsov_4553378_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pictures/pexels-roman-odintsov-4553378.jpg */ "./src/pictures/pexels-roman-odintsov-4553378.jpg");
/* harmony import */ var _pictures_top_view_1248955_1920_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pictures/top-view-1248955_1920.jpg */ "./src/pictures/top-view-1248955_1920.jpg");
/* harmony import */ var _pictures_jordane_mathieu_q8_yKQ3P7J0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pictures/jordane-mathieu-q8-yKQ3P7J0-unsplash.jpg */ "./src/pictures/jordane-mathieu-q8-yKQ3P7J0-unsplash.jpg");





function pageFood() {
    const innerObject = {
        init() {
            this.createMain();
        },
        manipulateDOM(element, innerText, className, appendTo, ...attributes) {
            let newElement = document.createElement(element);
            innerText !== "" ? (newElement.innerText = innerText) : "";
            if (className !== "") {
                const classArray = className.split(" ");
                newElement.classList.add(...classArray);
            }
            document.querySelector(appendTo).appendChild(newElement);
            if (attributes.length !== 0) {
                let sets = attributes.length / 2;
                let attPosition = 0;
                let valPosition = 1;
                for (let i = 0; i < sets; i++) {
                    newElement.setAttribute(`${attributes[attPosition]}`, `${attributes[valPosition]}`);
                    attPosition += 2;
                    valPosition += 2;
                }
            }
        },
        createMain() {
            this.div = this.manipulateDOM("div", "", "food-feature", "main");
            this.div = this.manipulateDOM("div", "", "food-squares box-1", ".food-feature");
            this.img = this.manipulateDOM("img", "", "fs1", ".box-1", "src", _pictures_parnis_azimi_dIbPZcftpL8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__, "alt", "steak");
            this.div = this.manipulateDOM("div", "Rare Przewalski's Horse Steak", "description", ".box-1");
            this.div = this.manipulateDOM("div", "", "food-squares box-2", ".food-feature");
            this.img = this.manipulateDOM("img", "", "fs2", ".box-2", "src", _pictures_fried_rice_3023040_1920_jpg__WEBPACK_IMPORTED_MODULE_1__, "alt", "rice");
            this.div = this.manipulateDOM("div", "Hillside Arsenic Seeds", "description", ".box-2");
            this.div = this.manipulateDOM("div", "", "food-squares box-3", ".food-feature");
            this.img = this.manipulateDOM("img", "", "fs3", ".box-3", "src", _pictures_pexels_roman_odintsov_4553378_jpg__WEBPACK_IMPORTED_MODULE_2__, "alt", "lobster dish");
            this.div = this.manipulateDOM("div", "Crushed-tacean", "description", ".box-3");
            this.div = this.manipulateDOM("div", "", "food-squares box-4", ".food-feature");
            this.img = this.manipulateDOM("img", "", "fs4", ".box-4", "src", _pictures_top_view_1248955_1920_jpg__WEBPACK_IMPORTED_MODULE_3__, "alt", "bowl of spinach");
            this.div = this.manipulateDOM("div", "Bowl Of Fresh Leaves", "description", ".box-4");
            this.div = this.manipulateDOM("div", "", "food-squares box-5", ".food-feature");
            this.img = this.manipulateDOM("img", "", "fs5", ".box-5", "src", _pictures_jordane_mathieu_q8_yKQ3P7J0_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__, "alt", "chocolate cake");
            this.div = this.manipulateDOM("div", "Hard Labor Derived Tiramisu", "description", ".box-5");
        },
    };
    innerObject.init();
    return { innerObject };
}


/***/ }),

/***/ "./src/page-main.ts":
/*!**************************!*\
  !*** ./src/page-main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageMain)
/* harmony export */ });
/* harmony import */ var _pictures_pexels_stein_egil_liland_5740848_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pictures/pexels-stein-egil-liland-5740848.jpg */ "./src/pictures/pexels-stein-egil-liland-5740848.jpg");

function pageMain() {
    const innerObject = {
        init() {
            this.createHeader();
            this.createMain();
            this.createFooter();
        },
        manipulateDOM(element, innerText, className, appendTo, ...attributes) {
            let newElement = document.createElement(element);
            innerText !== "" ? (newElement.innerText = innerText) : "";
            if (className !== "") {
                const classArray = className.split(" ");
                newElement.classList.add(...classArray);
            }
            document.querySelector(appendTo).appendChild(newElement);
            if (attributes.length !== 0) {
                let sets = attributes.length / 2;
                let attPosition = 0;
                let valPosition = 1;
                for (let i = 0; i < sets; i++) {
                    newElement.setAttribute(`${attributes[attPosition]}`, `${attributes[valPosition]}`);
                    attPosition += 2;
                    valPosition += 2;
                }
            }
        },
        createHeader() {
            this.header = this.manipulateDOM("header", "", "", "#content");
            this.H1 = this.manipulateDOM("h1", "", "", "header");
            this.span = this.manipulateDOM("span", "Abandoned", "", "h1");
            this.br = this.manipulateDOM("br", "", "", "h1");
            this.span = this.manipulateDOM("span", "Shed Café", "", "h1");
            this.img = this.manipulateDOM("img", "", "shed-img", "header", "src", _pictures_pexels_stein_egil_liland_5740848_jpg__WEBPACK_IMPORTED_MODULE_0__, "alt", "A rundown shed at night.");
        },
        createMain() {
            this.main = this.manipulateDOM("main", "", "", "#content");
            this.div = this.manipulateDOM("div", "", "sidebar", "main");
            this.ul = this.manipulateDOM("ul", "", "", ".sidebar");
            this.li = this.manipulateDOM("li", "Who We Are", "", "ul");
            this.li = this.manipulateDOM("li", "Our Creations", "", "ul");
            this.li = this.manipulateDOM("li", "Reserve A Table", "", "ul");
        },
        createFooter() {
            this.footer = this.manipulateDOM("footer", "", "", "#content");
            this.p = this.manipulateDOM("p", "Credits", "", "footer");
            this.ul = this.manipulateDOM("ul", "", "foot-list", "footer");
            this.li = this.manipulateDOM("li", "", "fLi1", ".foot-list");
            this.a = this.manipulateDOM("a", "stein egil liland", "", ".fLi1", "href", "https://www.pexels.com/photo/abandoned-wooden-barn-on-grassy-terrain-against-starry-night-sky-5740848/", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi2", ".foot-list");
            this.a = this.manipulateDOM("a", "ArtHouse Studio", "", ".fLi2", "href", "https://www.pexels.com/photo/wooden-interior-of-modern-restaurant-in-marine-style-4344544/", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi3", ".foot-list");
            this.a = this.manipulateDOM("a", "Araz Yurtseven", "", ".fLi3", "href", "https://www.pexels.com/photo/a-person-cooking-in-a-pan-outdoors-13739759/", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi4", ".foot-list");
            this.a = this.manipulateDOM("a", "Helena Lopes", "", ".fLi4", "href", "https://www.pexels.com/photo/people-drinking-liquor-and-talking-on-dining-table-close-up-photo-696218/", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi5", ".foot-list");
            this.a = this.manipulateDOM("a", "Алекке Блажин", "", ".fLi5", "href", "https://www.pexels.com/photo/close-up-photograph-of-fish-heads-near-tomatoes-11244934/", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi6", ".foot-list");
            this.a = this.manipulateDOM("a", "Johnathan Macedo", "", ".fLi6", "href", "https://unsplash.com/photos/4NQEvxW2_4w", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi7", ".foot-list");
            this.a = this.manipulateDOM("a", "Good Ware", "", ".fLi7", "href", "https://www.flaticon.com/free-icon/fish-bone_4201633?term=fish%20bones&page=1&position=1&page=1&position=1&related_id=4201633&origin=style", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi8", ".foot-list");
            this.a = this.manipulateDOM("a", "Doggo Ipsum", "", ".fLi8", "href", "https://doggoipsum.com/", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi9", ".foot-list");
            this.a = this.manipulateDOM("a", "Parnis Azimi", "", ".fLi9", "href", "https://unsplash.com/photos/dIbPZcftpL8", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi10", ".foot-list");
            this.a = this.manipulateDOM("a", "ducken99", "", ".fLi10", "href", "https://pixabay.com/photos/fried-rice-thai-food-thai-cuisine-3023040/", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi11", ".foot-list");
            this.a = this.manipulateDOM("a", "ROMAN ODINTSOV", "", ".fLi11", "href", "https://www.pexels.com/photo/delicious-appetizer-with-boiled-lobster-and-wine-4553378/", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi12", ".foot-list");
            this.a = this.manipulateDOM("a", "kkolosov", "", ".fLi12", "href", "https://pixabay.com/photos/top-view-basil-herbs-bowl-closeup-1248955/", "target", "_blank");
            this.li = this.manipulateDOM("li", "", "fLi13", ".foot-list");
            this.a = this.manipulateDOM("a", "Jordane Mathieu", "", ".fLi13", "href", "https://unsplash.com/photos/q8-yKQ3P7J0", "target", "_blank");
        },
    };
    innerObject.init();
    return { innerObject };
}


/***/ }),

/***/ "./src/page-reserve.ts":
/*!*****************************!*\
  !*** ./src/page-reserve.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageReserve)
/* harmony export */ });
function pageReserve() {
    const innerObject = {
        init() {
            this.createMain();
            this.makeTodaysDate();
        },
        manipulateDOM(element, innerText, className, appendTo, ...attributes) {
            const newElement = document.createElement(element);
            innerText !== "" ? (newElement.innerText = innerText) : "";
            if (className !== "") {
                const classArray = className.split(" ");
                newElement.classList.add(...classArray);
            }
            document.querySelector(appendTo).appendChild(newElement);
            if (attributes.length !== 0) {
                let sets = attributes.length / 2;
                let attPosition = 0;
                let valPosition = 1;
                for (let i = 0; i < sets; i++) {
                    newElement.setAttribute(`${attributes[attPosition]}`, `${attributes[valPosition]}`);
                    attPosition += 2;
                    valPosition += 2;
                }
            }
        },
        createMain() {
            this.div = this.manipulateDOM("div", "", "reserve-feature", "main");
            this.form = this.manipulateDOM("form", "", "", ".reserve-feature", "action", " ", "method", "post");
            this.div = this.manipulateDOM("div", "", "name", "form");
            this.label = this.manipulateDOM("label", "", "", ".name", "for", "name");
            this.input = this.manipulateDOM("input", "", "", ".name", "type", "text", "id", "name", "name", "name", "placeholder", "Name *", "aria-required", "true", "required", "");
            this.div = this.manipulateDOM("div", "", "email", "form");
            this.label = this.manipulateDOM("label", "", "", ".email", "for", "email");
            this.input = this.manipulateDOM("input", "", "", ".email", "type", "email", "id", "email", "name", "email", "placeholder", "Email *", "aria-required", "true", "required", "");
            this.div = this.manipulateDOM("div", "", "phone", "form");
            this.label = this.manipulateDOM("label", "", "", ".phone", "for", "phone");
            this.input = this.manipulateDOM("input", "", "", ".phone", "type", "tel", "id", "phone", "name", "phone", "placeholder", "Phone *", "aria-required", "true", "required", "");
            this.div = this.manipulateDOM("div", "", "guests", "form");
            this.div = this.manipulateDOM("div", "", "g1", ".guests");
            this.label = this.manipulateDOM("label", "Guests * (between 2 and 8)", "", ".g1", "for", "guests");
            this.div = this.manipulateDOM("div", "", "g2", ".guests");
            this.input = this.manipulateDOM("input", "", "", ".g2", "type", "number", "id", "guests", "name", "guests", "min", "2", "max", "8", "aria-required", "true", "required", "");
            this.div = this.manipulateDOM("div", "", "date", "form");
            this.div = this.manipulateDOM("div", "", "d1", ".date");
            this.label = this.manipulateDOM("label", "Date * ", "", ".d1", "for", "date");
            this.div = this.manipulateDOM("div", "", "d2", ".date");
            this.input = this.manipulateDOM("input", "", "", ".d2", "type", "date", "id", "date", "name", "date", "aria-required", "true", "required", "");
            this.div = this.manipulateDOM("div", "", "time", "form");
            this.div = this.manipulateDOM("div", "", "t1", ".time");
            this.label = this.manipulateDOM("label", "Hours: Open 4pm. Close 11:30pm", "", ".t1", "for", "time");
            this.div = this.manipulateDOM("div", "", "t2", ".time");
            this.select = this.manipulateDOM("select", "", "", ".t2", "name", "time", "id", "time", "aria-required", "true", "required", "");
            this.option = this.manipulateDOM("option", "Time *", "", "#time", "selected", "", "disabled", "", "value", " ");
            this.option = this.manipulateDOM("option", "4:00", "", "#time", "value", "4:00");
            this.option = this.manipulateDOM("option", "4:30", "", "#time", "value", "4:30");
            this.option = this.manipulateDOM("option", "5:00", "", "#time", "value", "5:00");
            this.option = this.manipulateDOM("option", "5:30", "", "#time", "value", "5:30");
            this.option = this.manipulateDOM("option", "6:00", "", "#time", "value", "6:00");
            this.option = this.manipulateDOM("option", "6:30", "", "#time", "value", "6:30");
            this.option = this.manipulateDOM("option", "7:00", "", "#time", "value", "7:00");
            this.option = this.manipulateDOM("option", "7:30", "", "#time", "value", "7:30");
            this.option = this.manipulateDOM("option", "8:00", "", "#time", "value", "8:00");
            this.option = this.manipulateDOM("option", "8:30", "", "#time", "value", "8:30");
            this.option = this.manipulateDOM("option", "9:00", "", "#time", "value", "9:00");
            this.option = this.manipulateDOM("option", "9:30", "", "#time", "value", "9:30");
            this.option = this.manipulateDOM("option", "10:00", "", "#time", "value", "10:00");
            this.option = this.manipulateDOM("option", "10:30", "", "#time", "value", "10:30");
            this.div = this.manipulateDOM("div", "", "message", "form");
            this.label = this.manipulateDOM("label", "", "", ".message", "for", "message");
            this.textarea = this.manipulateDOM("textarea", "", "", ".message", "name", "message", "id", "message", "placeholder", "Message (optional)");
            this.button = this.manipulateDOM("button", "Submit", "", "form", "disabled", "");
        },
        makeTodaysDate() {
            const today = new Date().toISOString().split("T")[0];
            document.querySelector('[type="date"]').setAttribute("min", today);
        },
    };
    innerObject.init();
    return { innerObject };
}


/***/ }),

/***/ "./src/pictures/fish-bone.png":
/*!************************************!*\
  !*** ./src/pictures/fish-bone.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db4cbcd45fa15d718dde.png";

/***/ }),

/***/ "./src/pictures/fried-rice-3023040_1920.jpg":
/*!**************************************************!*\
  !*** ./src/pictures/fried-rice-3023040_1920.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3b56488ca8fe096833a.jpg";

/***/ }),

/***/ "./src/pictures/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg":
/*!****************************************************************!*\
  !*** ./src/pictures/johnathan-macedo-4NQEvxW2_4w-unsplash.jpg ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b55cec0cfe51ec14d86.jpg";

/***/ }),

/***/ "./src/pictures/jordane-mathieu-q8-yKQ3P7J0-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/pictures/jordane-mathieu-q8-yKQ3P7J0-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bacf60aec2b5deb5f2cc.jpg";

/***/ }),

/***/ "./src/pictures/parnis-azimi-dIbPZcftpL8-unsplash.jpg":
/*!************************************************************!*\
  !*** ./src/pictures/parnis-azimi-dIbPZcftpL8-unsplash.jpg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5319e78a524e29b61b51.jpg";

/***/ }),

/***/ "./src/pictures/pexels-araz-yurtseven-13739759.jpg":
/*!*********************************************************!*\
  !*** ./src/pictures/pexels-araz-yurtseven-13739759.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df82d89da5056d9e4f44.jpg";

/***/ }),

/***/ "./src/pictures/pexels-arthouse-studio-4344544.jpg":
/*!*********************************************************!*\
  !*** ./src/pictures/pexels-arthouse-studio-4344544.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc7a7a54f73029aa5e1d.jpg";

/***/ }),

/***/ "./src/pictures/pexels-helena-lopes-696218.jpg":
/*!*****************************************************!*\
  !*** ./src/pictures/pexels-helena-lopes-696218.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57850ea5d1956803757e.jpg";

/***/ }),

/***/ "./src/pictures/pexels-roman-odintsov-4553378.jpg":
/*!********************************************************!*\
  !*** ./src/pictures/pexels-roman-odintsov-4553378.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61373d893627157183d5.jpg";

/***/ }),

/***/ "./src/pictures/pexels-stein-egil-liland-5740848.jpg":
/*!***********************************************************!*\
  !*** ./src/pictures/pexels-stein-egil-liland-5740848.jpg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3b8fbd28f3c2f0f6acf.jpg";

/***/ }),

/***/ "./src/pictures/pexels-алекке-блажин-11244934.jpg":
/*!********************************************************!*\
  !*** ./src/pictures/pexels-алекке-блажин-11244934.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cc8028f3338b5f76d8d.jpg";

/***/ }),

/***/ "./src/pictures/top-view-1248955_1920.jpg":
/*!************************************************!*\
  !*** ./src/pictures/top-view-1248955_1920.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e96009f3c15d1ae186c0.jpg";

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-main */ "./src/page-main.ts");
/* harmony import */ var _page_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-about */ "./src/page-about.ts");
/* harmony import */ var _page_food__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-food */ "./src/page-food.ts");
/* harmony import */ var _page_reserve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-reserve */ "./src/page-reserve.ts");
/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./normalize.css */ "./src/normalize.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_page_main__WEBPACK_IMPORTED_MODULE_0__["default"])();
function component() {
    (0,_page_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
    function removeElements() {
        const picky = document.querySelectorAll("main > *:not(:first-child)");
        for (const el of picky) {
            el.remove();
        }
    }
    document
        .querySelector(".sidebar > ul")
        .addEventListener("click", function (e) {
        const idx = [...this.children].indexOf(e.target);
        removeElements();
        switch (idx) {
            case 0:
                (0,_page_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
                break;
            case 1:
                (0,_page_food__WEBPACK_IMPORTED_MODULE_2__["default"])();
                break;
            case 2:
                (0,_page_reserve__WEBPACK_IMPORTED_MODULE_3__["default"])();
                break;
        }
    });
}
component();
// Make sure to change your devtool in webpack.config.js to something more
// production friendly when you finish this project

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FB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QWEsQ0FDOUIsUUFBUSxFQUNSLE1BQU0sRUFDTixFQUFFLEVBQ0YsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLENBQ1AsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDOUIsUUFBUSxFQUNSLE1BQU0sRUFDTixFQUFFLEVBQ0YsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLENBQ1AsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDOUIsUUFBUSxFQUNSLE1BQU0sRUFDTixFQUFFLEVBQ0YsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLENBQ1AsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDOUIsUUFBUSxFQUNSLE1BQU0sRUFDTixFQUFFLEVBQ0YsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLENBQ1AsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDOUIsUUFBUSxFQUNSLE1BQU0sRUFDTixFQUFFLEVBQ0YsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLENBQ1AsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDOUIsUUFBUSxFQUNSLE1BQU0sRUFDTixFQUFFLEVBQ0YsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLENBQ1AsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDOUIsUUFBUSxFQUNSLE1BQU0sRUFDTixFQUFFLEVBQ0YsT0FBTyxFQUNQLE9BQU8sRUFDUCxNQUFNLENBQ1AsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDOUIsUUFBUSxFQUNSLE9BQU8sRUFDUCxFQUFFLEVBQ0YsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLENBQ1IsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDOUIsUUFBUSxFQUNSLE9BQU8sRUFDUCxFQUFFLEVBQ0YsT0FBTyxFQUNQLE9BQU8sRUFDUCxPQUFPLENBQ1IsQ0FBQztZQUNGLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQzdCLE9BQU8sRUFDUCxFQUFFLEVBQ0YsRUFBRSxFQUNGLFVBQVUsRUFDVixLQUFLLEVBQ0wsU0FBUyxDQUNWLENBQUM7WUFDRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQ2hDLFVBQVUsRUFDVixFQUFFLEVBQ0YsRUFBRSxFQUNGLFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULElBQUksRUFDSixTQUFTLEVBQ1QsYUFBYSxFQUNiLG9CQUFvQixDQUNyQixDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUM5QixRQUFRLEVBQ1IsUUFBUSxFQUNSLEVBQUUsRUFDRixNQUFNLEVBQ04sVUFBVSxFQUNWLEVBQUUsQ0FDSCxDQUFDO1FBQ0osQ0FBQztRQUNELGNBQWM7WUFDWixNQUFNLEtBQUssR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RCxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckUsQ0FBQztLQUNGLENBQUM7SUFFRixXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFbkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQ3pCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlhELE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7VUMxQjdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBLG9COzs7OztXQ3JCQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUM7QUFDRTtBQUNGO0FBQ007QUFDaEI7QUFDSjtBQUVyQixzREFBUSxFQUFFLENBQUM7QUFFWCxTQUFTLFNBQVM7SUFDaEIsdURBQVMsRUFBRSxDQUFDO0lBRVosU0FBUyxjQUFjO1FBQ3JCLE1BQU0sS0FBSyxHQUNULFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzFELEtBQUssTUFBTSxFQUFFLElBQUksS0FBSyxFQUFFLENBQUM7WUFDdkIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCxRQUFRO1NBQ0wsYUFBYSxDQUFDLGVBQWUsQ0FBQztTQUM5QixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO1FBQ3BDLE1BQU0sR0FBRyxHQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RCxjQUFjLEVBQUUsQ0FBQztRQUVqQixRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ1osS0FBSyxDQUFDO2dCQUNKLHVEQUFTLEVBQUUsQ0FBQztnQkFDWixNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLHNEQUFRLEVBQUUsQ0FBQztnQkFDWCxNQUFNO1lBQ1IsS0FBSyxDQUFDO2dCQUNKLHlEQUFXLEVBQUUsQ0FBQztnQkFDZCxNQUFNO1FBQ1YsQ0FBQztJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsRUFBRSxDQUFDO0FBRVosMEVBQTBFO0FBQzFFLG1EQUFtRCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25vcm1hbGl6ZS5jc3M/Njg1NiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1hYm91dC50cyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1mb29kLnRzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLW1haW4udHMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtcmVzZXJ2ZS50cyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBTdHUncyBBZGRpdGlvbiAqL1xcbi8qIG1ha2VzIHNpemluZyBzaW1wbGVyICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7QUFDL0UsNkNBQTZDO0FBQzdDLG1CQUFtQjtBQUNuQix5QkFBeUI7O0FBRXpCOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUEsNkNBQTZDOztBQUU3Qzs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztJQUdJOztBQUVKO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtpRkFDaUY7O0FBRWpGOzs7SUFHSTs7QUFFSjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0lBR0k7O0FBRUo7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBO2lGQUNpRjs7QUFFakY7O0lBRUk7O0FBRUo7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztJQUdJOztBQUVKO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0lBRUk7O0FBRUo7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7SUFHSTs7QUFFSjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztJQUdJOztBQUVKOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtpRkFDaUY7O0FBRWpGOzs7SUFHSTs7QUFFSjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztJQUdJOztBQUVKOztFQUVFLE1BQU07RUFDTixpQkFBaUI7QUFDbkI7O0FBRUE7OztJQUdJOztBQUVKOztFQUVFLE1BQU07RUFDTixvQkFBb0I7QUFDdEI7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0lBRUk7O0FBRUo7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztJQUVJOztBQUVKOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztJQUtJOztBQUVKO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztJQUVJOztBQUVKO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztJQUVJOztBQUVKO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0lBR0k7O0FBRUo7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7SUFFSTs7QUFFSjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztJQUdJOztBQUVKO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztJQUVJOztBQUVKO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7SUFHSTs7QUFFSjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0lBRUk7O0FBRUo7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7aUZBQ2lGOztBQUVqRjs7SUFFSTs7QUFFSjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7SUFFSTs7QUFFSjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG4vKiBTdHUncyBBZGRpdGlvbiAqL1xcbi8qIG1ha2VzIHNpemluZyBzaW1wbGVyICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gICAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAgICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICAgKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gICAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAgICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gICAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAgICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gICAqIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gICAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICAgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICAgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICAgKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICAgKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAgICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAgICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICAgKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICAgKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICAgKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gICAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICAgKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICAgKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAgICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gICAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAgICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gICAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gICAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICAgKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICAgKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gICAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAgICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvUXVpY2tzYW5kLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9waWN0dXJlcy9maXNoLWJvbmUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td2hpdGU6IHJnYigyNTUsIDI1MiwgMjM1KTtcXG4gIC0tYnJvd246IHJnYig2NywgNDIsIDM5KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkN1c3RvbUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bik7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3VzdG9tRm9udFxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDR2dyA4dnc7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDZ2dztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcXG4gIG1hcmdpbi10b3A6IGNhbGMoNXZ3ICsgNTBweCk7XFxuICBtYXJnaW4tbGVmdDogLTQwcHg7XFxufVxcblxcbi5zaGVkLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5zaWRlYmFyIHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBnYXA6IDd2dztcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciBsaTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoNDVkZWcpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMnJlbTtcXG4gIHRvcDogMXJlbTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbn1cXG5cXG4uc2lkZWJhciBsaTpob3Zlcjo6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZlYXR1cmUge1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMmZyO1xcbiAgcm93LWdhcDogMzBweDtcXG59XFxuXFxuLmZvb2QtZmVhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5mb29kLXNxdWFyZXMge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogNDB2dztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmc6IDIuNXZ3IDIuNXZ3IDJ2dztcXG59XFxuXFxuLmZvb2Qtc3F1YXJlcyA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5mczMge1xcbiAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgODglO1xcbn1cXG5cXG4uZnM1IHtcXG4gIG9iamVjdC1wb3NpdGlvbjogNTAlIDg4JTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogMjAlO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDR2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnRlcmlvci1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5lYXRpbmctaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY29va2luZy1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5maXNoLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLmluZm8ge1xcbiAgcGFkZGluZzogMCAzMHB4O1xcblxcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyA1O1xcbn1cXG5cXG4uaW5mbyA+IGRpdiB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMHZoO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XFxufVxcblxcbi5maXJlLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnJlc2VydmUtZmVhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LWZhbWlseTogXFxcIkN1c3RvbUZvbnRcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCBhdXRvKTtcXG4gIGdhcDogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJuYW1lIG5hbWUgZW1haWwgZW1haWxcXFwiXFxuICAgIFxcXCJwaG9uZSBwaG9uZSBwaG9uZSBwaG9uZVxcXCJcXG4gICAgXFxcIiAuIGd1ZXN0cyBndWVzdHMgLiBcXFwiXFxuICAgIFxcXCIgLiBkYXRlIGRhdGUgLiBcXFwiXFxuICAgIFxcXCIgLiB0aW1lIHRpbWUgLiBcXFwiXFxuICAgIFxcXCJtZXNzYWdlIG1lc3NhZ2UgbWVzc2FnZSBtZXNzYWdlXFxcIlxcbiAgICBcXFwic3VibWl0IHN1Ym1pdCBzdWJtaXQgc3VibWl0XFxcIjtcXG59XFxuXFxuLm5hbWUge1xcbiAgZ3JpZC1hcmVhOiBuYW1lO1xcbn1cXG5cXG4uZW1haWwge1xcbiAgZ3JpZC1hcmVhOiBlbWFpbDtcXG59XFxuXFxuLnBob25lIHtcXG4gIGdyaWQtYXJlYTogcGhvbmU7XFxufVxcblxcbi5uYW1lID4gKixcXG4uZW1haWwgPiAqLFxcbi5waG9uZSA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ndWVzdHMge1xcbiAgZ3JpZC1hcmVhOiBndWVzdHM7XFxufVxcblxcbi5kYXRlIHtcXG4gIGdyaWQtYXJlYTogZGF0ZTtcXG59XFxuXFxuLnRpbWUge1xcbiAgZ3JpZC1hcmVhOiB0aW1lO1xcbn1cXG5cXG4uZ3Vlc3RzLFxcbi5kYXRlLFxcbi50aW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZ3Vlc3RzID4gZGl2OmZpcnN0LWNoaWxkLFxcbi5kYXRlID4gZGl2OmZpcnN0LWNoaWxkLFxcbi50aW1lID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogc3VibWl0O1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEsXFxuZm9ybSA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYnJvd24pO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbmZvcm0gPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDIxNiwgMjE1LCAyMDIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmZvcm0gPiBidXR0b246ZGlzYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLWJyb3duKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bik7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9vdGVyIHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIGE6bGluayxcXG5hOnZpc2l0ZWQsXFxuYTpob3ZlcixcXG5hOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuZmVhdHVyZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5pbnRlcmlvci1pbWcge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgaDEge1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDV2dyArIDE1MHB4KTtcXG4gIH1cXG5cXG4gIC5mZWF0dXJlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcblxcbiAgLmVhdGluZy1pbWcge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICB9XFxuXFxuICAuY29va2luZy1pbWcge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICB9XFxuXFxuICAuZmlzaC1pbWcge1xcbiAgICBncmlkLXJvdzogNSAvIDY7XFxuICB9XFxuXFxuICAuaW5mbyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgfVxcblxcbiAgLmZvb2Qtc3F1YXJlcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwdnc7XFxuICB9XFxuXFxuICAuZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDZ2dztcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsK0RBQTZEO0FBQy9EOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixh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OUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTOztFQUVULGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7OztFQUlFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQywwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0td2hpdGU6IHJnYigyNTUsIDI1MiwgMjM1KTtcXG4gIC0tYnJvd246IHJnYig2NywgNDIsIDM5KTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkN1c3RvbUZvbnRcXFwiO1xcbiAgc3JjOiB1cmwoLi4vc3JjL2ZvbnRzL1F1aWNrc2FuZC1MaWdodC50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bik7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ3VzdG9tRm9udFxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDR2dyA4dnc7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDZ2dztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGNvbG9yOiAjMDAwO1xcbiAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcXG4gIG1hcmdpbi10b3A6IGNhbGMoNXZ3ICsgNTBweCk7XFxuICBtYXJnaW4tbGVmdDogLTQwcHg7XFxufVxcblxcbi5zaGVkLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxubWFpbiB7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5zaWRlYmFyIHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBnYXA6IDd2dztcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciBsaTo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL3NyYy9waWN0dXJlcy9maXNoLWJvbmUucG5nKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoNDVkZWcpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMnJlbTtcXG4gIHRvcDogMXJlbTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xcbn1cXG5cXG4uc2lkZWJhciBsaTpob3Zlcjo6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZlYXR1cmUge1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMmZyO1xcbiAgcm93LWdhcDogMzBweDtcXG59XFxuXFxuLmZvb2QtZmVhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxufVxcblxcbi5mb29kLXNxdWFyZXMge1xcbiAgd2lkdGg6IDcwJTtcXG4gIGhlaWdodDogNDB2dztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmc6IDIuNXZ3IDIuNXZ3IDJ2dztcXG59XFxuXFxuLmZvb2Qtc3F1YXJlcyA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5mczMge1xcbiAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgODglO1xcbn1cXG5cXG4uZnM1IHtcXG4gIG9iamVjdC1wb3NpdGlvbjogNTAlIDg4JTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGhlaWdodDogMjAlO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IDR2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnRlcmlvci1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5lYXRpbmctaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4uY29va2luZy1pbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5maXNoLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLmluZm8ge1xcbiAgcGFkZGluZzogMCAzMHB4O1xcblxcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyA1O1xcbn1cXG5cXG4uaW5mbyA+IGRpdiB7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMHZoO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XFxufVxcblxcbi5maXJlLWltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG5cXG4gIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuLnJlc2VydmUtZmVhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmb250LWZhbWlseTogXFxcIkN1c3RvbUZvbnRcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg3LCBhdXRvKTtcXG4gIGdhcDogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJuYW1lIG5hbWUgZW1haWwgZW1haWxcXFwiXFxuICAgIFxcXCJwaG9uZSBwaG9uZSBwaG9uZSBwaG9uZVxcXCJcXG4gICAgXFxcIiAuIGd1ZXN0cyBndWVzdHMgLiBcXFwiXFxuICAgIFxcXCIgLiBkYXRlIGRhdGUgLiBcXFwiXFxuICAgIFxcXCIgLiB0aW1lIHRpbWUgLiBcXFwiXFxuICAgIFxcXCJtZXNzYWdlIG1lc3NhZ2UgbWVzc2FnZSBtZXNzYWdlXFxcIlxcbiAgICBcXFwic3VibWl0IHN1Ym1pdCBzdWJtaXQgc3VibWl0XFxcIjtcXG59XFxuXFxuLm5hbWUge1xcbiAgZ3JpZC1hcmVhOiBuYW1lO1xcbn1cXG5cXG4uZW1haWwge1xcbiAgZ3JpZC1hcmVhOiBlbWFpbDtcXG59XFxuXFxuLnBob25lIHtcXG4gIGdyaWQtYXJlYTogcGhvbmU7XFxufVxcblxcbi5uYW1lID4gKixcXG4uZW1haWwgPiAqLFxcbi5waG9uZSA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5ndWVzdHMge1xcbiAgZ3JpZC1hcmVhOiBndWVzdHM7XFxufVxcblxcbi5kYXRlIHtcXG4gIGdyaWQtYXJlYTogZGF0ZTtcXG59XFxuXFxuLnRpbWUge1xcbiAgZ3JpZC1hcmVhOiB0aW1lO1xcbn1cXG5cXG4uZ3Vlc3RzLFxcbi5kYXRlLFxcbi50aW1lIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZ3Vlc3RzID4gZGl2OmZpcnN0LWNoaWxkLFxcbi5kYXRlID4gZGl2OmZpcnN0LWNoaWxkLFxcbi50aW1lID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2U7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uIHtcXG4gIGdyaWQtYXJlYTogc3VibWl0O1xcbn1cXG5cXG5pbnB1dCxcXG5zZWxlY3QsXFxudGV4dGFyZWEsXFxuZm9ybSA+IGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tYnJvd24pO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGhlaWdodDogMTUwcHg7XFxufVxcblxcbmZvcm0gPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDIxNiwgMjE1LCAyMDIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmZvcm0gPiBidXR0b246ZGlzYWJsZWQge1xcbiAgY29sb3I6IHZhcigtLWJyb3duKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1icm93bik7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9vdGVyIHVsIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIGxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuZm9vdGVyIGE6bGluayxcXG5hOnZpc2l0ZWQsXFxuYTpob3ZlcixcXG5hOmFjdGl2ZSB7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuZmVhdHVyZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIH1cXG5cXG4gIC5pbnRlcmlvci1pbWcge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgaDEge1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDV2dyArIDE1MHB4KTtcXG4gIH1cXG5cXG4gIC5mZWF0dXJlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgYXV0byk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcblxcbiAgLmVhdGluZy1pbWcge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICB9XFxuXFxuICAuY29va2luZy1pbWcge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICB9XFxuXFxuICAuZmlzaC1pbWcge1xcbiAgICBncmlkLXJvdzogNSAvIDY7XFxuICB9XFxuXFxuICAuaW5mbyB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgfVxcblxcbiAgZm9ybSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgfVxcblxcbiAgLmZvb2Qtc3F1YXJlcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwdnc7XFxuICB9XFxuXFxuICAuZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDZ2dztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IGludGVyaW9ySW1nIGZyb20gXCIuL3BpY3R1cmVzL3BleGVscy1hcnRob3VzZS1zdHVkaW8tNDM0NDU0NC5qcGdcIjtcbmltcG9ydCBlYXRpbmdJbWcgZnJvbSBcIi4vcGljdHVyZXMvcGV4ZWxzLWhlbGVuYS1sb3Blcy02OTYyMTguanBnXCI7XG5pbXBvcnQgY29va2luZ0ltZyBmcm9tIFwiLi9waWN0dXJlcy9wZXhlbHMtYXJhei15dXJ0c2V2ZW4tMTM3Mzk3NTkuanBnXCI7XG5pbXBvcnQgZmlzaEltZyBmcm9tIFwiLi9waWN0dXJlcy9wZXhlbHMt0LDQu9C10LrQutC1LdCx0LvQsNC20LjQvS0xMTI0NDkzNC5qcGdcIjtcbmltcG9ydCBmaXJlSW1nIGZyb20gXCIuL3BpY3R1cmVzL2pvaG5hdGhhbi1tYWNlZG8tNE5RRXZ4VzJfNHctdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgdHlwZSB7IElubmVyT2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVzL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VBYm91dCgpOiB7XG4gIGlubmVyT2JqZWN0OiBPbWl0PFxuICAgIElubmVyT2JqZWN0VHlwZSxcbiAgICBcImNyZWF0ZUhlYWRlclwiIHwgXCJjcmVhdGVGb290ZXJcIiB8IFwibWFrZVRvZGF5c0RhdGVcIlxuICA+O1xufSB7XG4gIGNvbnN0IGlubmVyT2JqZWN0OiBPbWl0PFxuICAgIElubmVyT2JqZWN0VHlwZSxcbiAgICBcImNyZWF0ZUhlYWRlclwiIHwgXCJjcmVhdGVGb290ZXJcIiB8IFwibWFrZVRvZGF5c0RhdGVcIlxuICA+ID0ge1xuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmNyZWF0ZU1haW4oKTtcbiAgICB9LFxuICAgIG1hbmlwdWxhdGVET00oXG4gICAgICBlbGVtZW50LFxuICAgICAgaW5uZXJUZXh0LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYXBwZW5kVG8sXG4gICAgICAuLi5hdHRyaWJ1dGVzXG4gICAgKTogdm9pZCB7XG4gICAgICBjb25zdCBuZXdFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBpbm5lclRleHQgIT09IFwiXCIgPyAobmV3RWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHQpIDogXCJcIjtcbiAgICAgIGlmIChjbGFzc05hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgY29uc3QgY2xhc3NBcnJheSA9IGNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0FycmF5KTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXBwZW5kVG8pLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxldCBzZXRzOiBudW1iZXIgPSBhdHRyaWJ1dGVzLmxlbmd0aCAvIDI7XG4gICAgICAgIGxldCBhdHRQb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHZhbFBvc2l0aW9uOiBudW1iZXIgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHM7IGkrKykge1xuICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgYCR7YXR0cmlidXRlc1thdHRQb3NpdGlvbl19YCxcbiAgICAgICAgICAgIGAke2F0dHJpYnV0ZXNbdmFsUG9zaXRpb25dfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGF0dFBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgdmFsUG9zaXRpb24gKz0gMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlTWFpbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwiZGl2XCIsIFwiXCIsIFwiZmVhdHVyZVwiLCBcIm1haW5cIik7XG4gICAgICB0aGlzLmltZyA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJpbWdcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCJpbnRlcmlvci1pbWdcIixcbiAgICAgICAgXCIuZmVhdHVyZVwiLFxuICAgICAgICBcInNyY1wiLFxuICAgICAgICBpbnRlcmlvckltZyxcbiAgICAgICAgXCJhbHRcIixcbiAgICAgICAgXCJJbnRlcmlvciBvZiByZXN0YXVyYW50LlwiXG4gICAgICApO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJkaXZcIiwgXCJcIiwgXCJpbmZvXCIsIFwiLmZlYXR1cmVcIik7XG4gICAgICB0aGlzLmRpdiA9IHRoaXMubWFuaXB1bGF0ZURPTShcImRpdlwiLCBcIlwiLCBcInBhcmEtZGl2XCIsIFwiLmluZm9cIik7XG4gICAgICB0aGlzLnAgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJwXCIsIHRoaXMubG9uZ1RleHQucDEsIFwiXCIsIFwiLnBhcmEtZGl2XCIpO1xuICAgICAgdGhpcy5iciA9IHRoaXMubWFuaXB1bGF0ZURPTShcImJyXCIsIFwiXCIsIFwiXCIsIFwiLnBhcmEtZGl2XCIpO1xuICAgICAgdGhpcy5wID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwicFwiLCB0aGlzLmxvbmdUZXh0LnAyLCBcIlwiLCBcIi5wYXJhLWRpdlwiKTtcbiAgICAgIHRoaXMuaW1nID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImltZ1wiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcImVhdGluZy1pbWdcIixcbiAgICAgICAgXCIuZmVhdHVyZVwiLFxuICAgICAgICBcInNyY1wiLFxuICAgICAgICBlYXRpbmdJbWcsXG4gICAgICAgIFwiYWx0XCIsXG4gICAgICAgIFwiUGVvcGxlIGVhdGluZy5cIlxuICAgICAgKTtcbiAgICAgIHRoaXMuaW1nID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImltZ1wiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcImNvb2tpbmctaW1nXCIsXG4gICAgICAgIFwiLmZlYXR1cmVcIixcbiAgICAgICAgXCJzcmNcIixcbiAgICAgICAgY29va2luZ0ltZyxcbiAgICAgICAgXCJhbHRcIixcbiAgICAgICAgXCJDb29raW5nIGZvb2Qgb3ZlciBmaXJlLlwiXG4gICAgICApO1xuICAgICAgdGhpcy5pbWcgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiaW1nXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiZmlzaC1pbWdcIixcbiAgICAgICAgXCIuZmVhdHVyZVwiLFxuICAgICAgICBcInNyY1wiLFxuICAgICAgICBmaXNoSW1nLFxuICAgICAgICBcImFsdFwiLFxuICAgICAgICBcIkZpc2ggaGVhZCBmb29kLlwiXG4gICAgICApO1xuICAgICAgdGhpcy5pbWcgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiaW1nXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiZmlyZS1pbWdcIixcbiAgICAgICAgXCJtYWluXCIsXG4gICAgICAgIFwic3JjXCIsXG4gICAgICAgIGZpcmVJbWcsXG4gICAgICAgIFwiYWx0XCIsXG4gICAgICAgIFwiQ2hlZiBjb29raW5nIHdpdGggZmlyZS5cIlxuICAgICAgKTtcbiAgICB9LFxuICAgIGxvbmdUZXh0OiB7XG4gICAgICBwMTogXCJEb2dnbyBpcHN1bSBib3JrZiBwdWdnbyBub29kbGUgaG9yc2UgaGVja2luIGdvb2QgYm95cyBsb25nIHdhdGVyIHNob29iLCBoZWNraW4gZ29vZCBib3lzIGFuZCBnaXJscyB2ZXJ5IGplYWxvdXMgcHVwcGVyIHZlcnkgdGFzdGUgd293LiBQdXBwZXIgYm9vZiBhcXVhIGRvZ2dvIGxvdHNhIHBhdHMgdmVyeSBnb29kIHNwb3QgcHVwcGVyIG11Y2ggcnVpbiBkaWV0IHZlcnkgZ29vZCBzcG90IGJvb2Ygc3VwZXIgY2h1Yiwgc3VjaCB0cmVhdCBib3JrZHJpdmUgYmxvcCB0aGUgbmVpZ2hib3Job29kIHB1cHBlciB5YXBwZXIgd3JpbmtsZXIgc2hvb2Jlcmluby4gUGF0cyB3b29mZXIgc21vbCBib3JraW5nIGRvZ2dvIHdpdGggYSBsb25nIHNub290IGZvciBwYXRzIHdyaW5rbGVyIGxvdHNhIHBhdHMgbW9zdCBhbmdlcnkgcHVwcGVyIEkgaGF2ZSBldmVyIHNlZW4sIHVyIGdpdmluIG1lIGEgc3Bvb2suXCIsXG4gICAgICBwMjogXCJCb3JrIGgqY2sgaGVja2luIGdvb2QgYm95cyBhbmQgZ2lybHMgZG9pbmcgbWUgYSBmcmlnaHRlbiBkb2dnb3Jpbm8gYWRvcmFibGUgZG9nZ28sIG1hbnkgcGF0cyBhcXVhIGRvZ2dvIGRvZ2UgcGF0cyBjbG91ZHMgcnVmZiwgc3ViIHdvb2ZlciBsb3RzYSBwYXRzIHZlcnkgaGFuZCB0aGF0IGZlZWQgc2hpYmUgbm9vZGxlIGhvcnNlLiBGYXQgYm9pIHdyaW5rbGVyIHdoYXQgYSBuaWNlIGZsb29mIGhlIG1hZGUgbWFueSB3b29mcyB2ZXJ5IHRhc3RlIHdvdywgdGhlIG5laWdoYm9yaG9vZCBwdXBwZXIgbG9uZyB3YXRlciBzaG9vYiBibG9wLCBub29kbGUgaG9yc2UgdmVyeSB0YXN0ZSB3b3cgdmVyeSBnb29kIHNwb3QuIEJsb3AgeW91IGFyZSBkb2luZyBtZSBhIGZyaWdodGVuIGhlIG1hZGUgbWFueSB3b29mcyBibGVwIGJpZyBvbCB0dW5nZyBydWZmIHZlcnkgaGFuZCB0aGF0IGZlZWQuXCIsXG4gICAgfSxcbiAgfTtcblxuICBpbm5lck9iamVjdC5pbml0KCk7XG5cbiAgcmV0dXJuIHsgaW5uZXJPYmplY3QgfTtcbn1cbiIsImltcG9ydCBzdGVha0ltZyBmcm9tIFwiLi9waWN0dXJlcy9wYXJuaXMtYXppbWktZEliUFpjZnRwTDgtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgcmljZUltZyBmcm9tIFwiLi9waWN0dXJlcy9mcmllZC1yaWNlLTMwMjMwNDBfMTkyMC5qcGdcIjtcbmltcG9ydCBsb2JzdGVySW1nIGZyb20gXCIuL3BpY3R1cmVzL3BleGVscy1yb21hbi1vZGludHNvdi00NTUzMzc4LmpwZ1wiO1xuaW1wb3J0IHNwaW5hY2hJbWcgZnJvbSBcIi4vcGljdHVyZXMvdG9wLXZpZXctMTI0ODk1NV8xOTIwLmpwZ1wiO1xuaW1wb3J0IGNha2VJbWcgZnJvbSBcIi4vcGljdHVyZXMvam9yZGFuZS1tYXRoaWV1LXE4LXlLUTNQN0owLXVuc3BsYXNoLmpwZ1wiO1xuaW1wb3J0IHR5cGUgeyBJbm5lck9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlcy90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlRm9vZCgpOiB7XG4gIGlubmVyT2JqZWN0OiBQaWNrPElubmVyT2JqZWN0VHlwZSwgXCJpbml0XCIgfCBcIm1hbmlwdWxhdGVET01cIiB8IFwiY3JlYXRlTWFpblwiPjtcbn0ge1xuICBjb25zdCBpbm5lck9iamVjdDogUGljazxcbiAgICBJbm5lck9iamVjdFR5cGUsXG4gICAgXCJpbml0XCIgfCBcIm1hbmlwdWxhdGVET01cIiB8IFwiY3JlYXRlTWFpblwiXG4gID4gPSB7XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY3JlYXRlTWFpbigpO1xuICAgIH0sXG4gICAgbWFuaXB1bGF0ZURPTShcbiAgICAgIGVsZW1lbnQsXG4gICAgICBpbm5lclRleHQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBhcHBlbmRUbyxcbiAgICAgIC4uLmF0dHJpYnV0ZXNcbiAgICApOiB2b2lkIHtcbiAgICAgIGxldCBuZXdFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBpbm5lclRleHQgIT09IFwiXCIgPyAobmV3RWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHQpIDogXCJcIjtcbiAgICAgIGlmIChjbGFzc05hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgY29uc3QgY2xhc3NBcnJheSA9IGNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0FycmF5KTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXBwZW5kVG8pLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxldCBzZXRzOiBudW1iZXIgPSBhdHRyaWJ1dGVzLmxlbmd0aCAvIDI7XG4gICAgICAgIGxldCBhdHRQb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHZhbFBvc2l0aW9uOiBudW1iZXIgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHM7IGkrKykge1xuICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgYCR7YXR0cmlidXRlc1thdHRQb3NpdGlvbl19YCxcbiAgICAgICAgICAgIGAke2F0dHJpYnV0ZXNbdmFsUG9zaXRpb25dfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGF0dFBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgdmFsUG9zaXRpb24gKz0gMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlTWFpbigpOiB2b2lkIHtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwiZGl2XCIsIFwiXCIsIFwiZm9vZC1mZWF0dXJlXCIsIFwibWFpblwiKTtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcImZvb2Qtc3F1YXJlcyBib3gtMVwiLFxuICAgICAgICBcIi5mb29kLWZlYXR1cmVcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuaW1nID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImltZ1wiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcImZzMVwiLFxuICAgICAgICBcIi5ib3gtMVwiLFxuICAgICAgICBcInNyY1wiLFxuICAgICAgICBzdGVha0ltZyxcbiAgICAgICAgXCJhbHRcIixcbiAgICAgICAgXCJzdGVha1wiXG4gICAgICApO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiUmFyZSBQcnpld2Fsc2tpJ3MgSG9yc2UgU3RlYWtcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICBcIi5ib3gtMVwiXG4gICAgICApO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiZm9vZC1zcXVhcmVzIGJveC0yXCIsXG4gICAgICAgIFwiLmZvb2QtZmVhdHVyZVwiXG4gICAgICApO1xuICAgICAgdGhpcy5pbWcgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiaW1nXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiZnMyXCIsXG4gICAgICAgIFwiLmJveC0yXCIsXG4gICAgICAgIFwic3JjXCIsXG4gICAgICAgIHJpY2VJbWcsXG4gICAgICAgIFwiYWx0XCIsXG4gICAgICAgIFwicmljZVwiXG4gICAgICApO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiSGlsbHNpZGUgQXJzZW5pYyBTZWVkc1wiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgIFwiLmJveC0yXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmRpdiA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCJmb29kLXNxdWFyZXMgYm94LTNcIixcbiAgICAgICAgXCIuZm9vZC1mZWF0dXJlXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmltZyA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJpbWdcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCJmczNcIixcbiAgICAgICAgXCIuYm94LTNcIixcbiAgICAgICAgXCJzcmNcIixcbiAgICAgICAgbG9ic3RlckltZyxcbiAgICAgICAgXCJhbHRcIixcbiAgICAgICAgXCJsb2JzdGVyIGRpc2hcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcIkNydXNoZWQtdGFjZWFuXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgXCIuYm94LTNcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcImZvb2Qtc3F1YXJlcyBib3gtNFwiLFxuICAgICAgICBcIi5mb29kLWZlYXR1cmVcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuaW1nID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImltZ1wiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcImZzNFwiLFxuICAgICAgICBcIi5ib3gtNFwiLFxuICAgICAgICBcInNyY1wiLFxuICAgICAgICBzcGluYWNoSW1nLFxuICAgICAgICBcImFsdFwiLFxuICAgICAgICBcImJvd2wgb2Ygc3BpbmFjaFwiXG4gICAgICApO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiQm93bCBPZiBGcmVzaCBMZWF2ZXNcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICBcIi5ib3gtNFwiXG4gICAgICApO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiZm9vZC1zcXVhcmVzIGJveC01XCIsXG4gICAgICAgIFwiLmZvb2QtZmVhdHVyZVwiXG4gICAgICApO1xuICAgICAgdGhpcy5pbWcgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiaW1nXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiZnM1XCIsXG4gICAgICAgIFwiLmJveC01XCIsXG4gICAgICAgIFwic3JjXCIsXG4gICAgICAgIGNha2VJbWcsXG4gICAgICAgIFwiYWx0XCIsXG4gICAgICAgIFwiY2hvY29sYXRlIGNha2VcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBcIkhhcmQgTGFib3IgRGVyaXZlZCBUaXJhbWlzdVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgIFwiLmJveC01XCJcbiAgICAgICk7XG4gICAgfSxcbiAgfTtcblxuICBpbm5lck9iamVjdC5pbml0KCk7XG5cbiAgcmV0dXJuIHsgaW5uZXJPYmplY3QgfTtcbn1cbiIsImltcG9ydCBzaGVkSW1nIGZyb20gXCIuL3BpY3R1cmVzL3BleGVscy1zdGVpbi1lZ2lsLWxpbGFuZC01NzQwODQ4LmpwZ1wiO1xuaW1wb3J0IHR5cGUgeyBJbm5lck9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlcy90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlTWFpbigpOiB7XG4gIGlubmVyT2JqZWN0OiBPbWl0PElubmVyT2JqZWN0VHlwZSwgXCJsb25nVGV4dFwiIHwgXCJtYWtlVG9kYXlzRGF0ZVwiPjtcbn0ge1xuICBjb25zdCBpbm5lck9iamVjdDogT21pdDxJbm5lck9iamVjdFR5cGUsIFwibG9uZ1RleHRcIiB8IFwibWFrZVRvZGF5c0RhdGVcIj4gPSB7XG4gICAgaW5pdCgpOiB2b2lkIHtcbiAgICAgIHRoaXMuY3JlYXRlSGVhZGVyKCk7XG4gICAgICB0aGlzLmNyZWF0ZU1haW4oKTtcbiAgICAgIHRoaXMuY3JlYXRlRm9vdGVyKCk7XG4gICAgfSxcbiAgICBtYW5pcHVsYXRlRE9NKFxuICAgICAgZWxlbWVudCxcbiAgICAgIGlubmVyVGV4dCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGFwcGVuZFRvLFxuICAgICAgLi4uYXR0cmlidXRlc1xuICAgICk6IHZvaWQge1xuICAgICAgbGV0IG5ld0VsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGlubmVyVGV4dCAhPT0gXCJcIiA/IChuZXdFbGVtZW50LmlubmVyVGV4dCA9IGlubmVyVGV4dCkgOiBcIlwiO1xuICAgICAgaWYgKGNsYXNzTmFtZSAhPT0gXCJcIikge1xuICAgICAgICBjb25zdCBjbGFzc0FycmF5OiBzdHJpbmdbXSA9IGNsYXNzTmFtZS5zcGxpdChcIiBcIik7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc0FycmF5KTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXBwZW5kVG8pLmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGxldCBzZXRzOiBudW1iZXIgPSBhdHRyaWJ1dGVzLmxlbmd0aCAvIDI7XG4gICAgICAgIGxldCBhdHRQb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHZhbFBvc2l0aW9uOiBudW1iZXIgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldHM7IGkrKykge1xuICAgICAgICAgIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgYCR7YXR0cmlidXRlc1thdHRQb3NpdGlvbl19YCxcbiAgICAgICAgICAgIGAke2F0dHJpYnV0ZXNbdmFsUG9zaXRpb25dfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIGF0dFBvc2l0aW9uICs9IDI7XG4gICAgICAgICAgdmFsUG9zaXRpb24gKz0gMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlSGVhZGVyKCk6IHZvaWQge1xuICAgICAgdGhpcy5oZWFkZXIgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJoZWFkZXJcIiwgXCJcIiwgXCJcIiwgXCIjY29udGVudFwiKTtcbiAgICAgIHRoaXMuSDEgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJoMVwiLCBcIlwiLCBcIlwiLCBcImhlYWRlclwiKTtcbiAgICAgIHRoaXMuc3BhbiA9IHRoaXMubWFuaXB1bGF0ZURPTShcInNwYW5cIiwgXCJBYmFuZG9uZWRcIiwgXCJcIiwgXCJoMVwiKTtcbiAgICAgIHRoaXMuYnIgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJiclwiLCBcIlwiLCBcIlwiLCBcImgxXCIpO1xuICAgICAgdGhpcy5zcGFuID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwic3BhblwiLCBcIlNoZWQgQ2Fmw6lcIiwgXCJcIiwgXCJoMVwiKTtcbiAgICAgIHRoaXMuaW1nID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImltZ1wiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcInNoZWQtaW1nXCIsXG4gICAgICAgIFwiaGVhZGVyXCIsXG4gICAgICAgIFwic3JjXCIsXG4gICAgICAgIHNoZWRJbWcsXG4gICAgICAgIFwiYWx0XCIsXG4gICAgICAgIFwiQSBydW5kb3duIHNoZWQgYXQgbmlnaHQuXCJcbiAgICAgICk7XG4gICAgfSxcbiAgICBjcmVhdGVNYWluKCk6IHZvaWQge1xuICAgICAgdGhpcy5tYWluID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwibWFpblwiLCBcIlwiLCBcIlwiLCBcIiNjb250ZW50XCIpO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJkaXZcIiwgXCJcIiwgXCJzaWRlYmFyXCIsIFwibWFpblwiKTtcbiAgICAgIHRoaXMudWwgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJ1bFwiLCBcIlwiLCBcIlwiLCBcIi5zaWRlYmFyXCIpO1xuICAgICAgdGhpcy5saSA9IHRoaXMubWFuaXB1bGF0ZURPTShcImxpXCIsIFwiV2hvIFdlIEFyZVwiLCBcIlwiLCBcInVsXCIpO1xuICAgICAgdGhpcy5saSA9IHRoaXMubWFuaXB1bGF0ZURPTShcImxpXCIsIFwiT3VyIENyZWF0aW9uc1wiLCBcIlwiLCBcInVsXCIpO1xuICAgICAgdGhpcy5saSA9IHRoaXMubWFuaXB1bGF0ZURPTShcImxpXCIsIFwiUmVzZXJ2ZSBBIFRhYmxlXCIsIFwiXCIsIFwidWxcIik7XG4gICAgfSxcbiAgICBjcmVhdGVGb290ZXIoKTogdm9pZCB7XG4gICAgICB0aGlzLmZvb3RlciA9IHRoaXMubWFuaXB1bGF0ZURPTShcImZvb3RlclwiLCBcIlwiLCBcIlwiLCBcIiNjb250ZW50XCIpO1xuICAgICAgdGhpcy5wID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwicFwiLCBcIkNyZWRpdHNcIiwgXCJcIiwgXCJmb290ZXJcIik7XG4gICAgICB0aGlzLnVsID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwidWxcIiwgXCJcIiwgXCJmb290LWxpc3RcIiwgXCJmb290ZXJcIik7XG4gICAgICB0aGlzLmxpID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwibGlcIiwgXCJcIiwgXCJmTGkxXCIsIFwiLmZvb3QtbGlzdFwiKTtcbiAgICAgIHRoaXMuYSA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwic3RlaW4gZWdpbCBsaWxhbmRcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIuZkxpMVwiLFxuICAgICAgICBcImhyZWZcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL2FiYW5kb25lZC13b29kZW4tYmFybi1vbi1ncmFzc3ktdGVycmFpbi1hZ2FpbnN0LXN0YXJyeS1uaWdodC1za3ktNTc0MDg0OC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIixcbiAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgKTtcbiAgICAgIHRoaXMubGkgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJsaVwiLCBcIlwiLCBcImZMaTJcIiwgXCIuZm9vdC1saXN0XCIpO1xuICAgICAgdGhpcy5hID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImFcIixcbiAgICAgICAgXCJBcnRIb3VzZSBTdHVkaW9cIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIuZkxpMlwiLFxuICAgICAgICBcImhyZWZcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL3dvb2Rlbi1pbnRlcmlvci1vZi1tb2Rlcm4tcmVzdGF1cmFudC1pbi1tYXJpbmUtc3R5bGUtNDM0NDU0NC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIixcbiAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgKTtcbiAgICAgIHRoaXMubGkgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJsaVwiLCBcIlwiLCBcImZMaTNcIiwgXCIuZm9vdC1saXN0XCIpO1xuICAgICAgdGhpcy5hID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImFcIixcbiAgICAgICAgXCJBcmF6IFl1cnRzZXZlblwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi5mTGkzXCIsXG4gICAgICAgIFwiaHJlZlwiLFxuICAgICAgICBcImh0dHBzOi8vd3d3LnBleGVscy5jb20vcGhvdG8vYS1wZXJzb24tY29va2luZy1pbi1hLXBhbi1vdXRkb29ycy0xMzczOTc1OS9cIixcbiAgICAgICAgXCJ0YXJnZXRcIixcbiAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgKTtcbiAgICAgIHRoaXMubGkgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJsaVwiLCBcIlwiLCBcImZMaTRcIiwgXCIuZm9vdC1saXN0XCIpO1xuICAgICAgdGhpcy5hID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImFcIixcbiAgICAgICAgXCJIZWxlbmEgTG9wZXNcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIuZkxpNFwiLFxuICAgICAgICBcImhyZWZcIixcbiAgICAgICAgXCJodHRwczovL3d3dy5wZXhlbHMuY29tL3Bob3RvL3Blb3BsZS1kcmlua2luZy1saXF1b3ItYW5kLXRhbGtpbmctb24tZGluaW5nLXRhYmxlLWNsb3NlLXVwLXBob3RvLTY5NjIxOC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIixcbiAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgKTtcbiAgICAgIHRoaXMubGkgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJsaVwiLCBcIlwiLCBcImZMaTVcIiwgXCIuZm9vdC1saXN0XCIpO1xuICAgICAgdGhpcy5hID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImFcIixcbiAgICAgICAgXCLQkNC70LXQutC60LUg0JHQu9Cw0LbQuNC9XCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiLmZMaTVcIixcbiAgICAgICAgXCJocmVmXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9jbG9zZS11cC1waG90b2dyYXBoLW9mLWZpc2gtaGVhZHMtbmVhci10b21hdG9lcy0xMTI0NDkzNC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIixcbiAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgKTtcbiAgICAgIHRoaXMubGkgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJsaVwiLCBcIlwiLCBcImZMaTZcIiwgXCIuZm9vdC1saXN0XCIpO1xuICAgICAgdGhpcy5hID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImFcIixcbiAgICAgICAgXCJKb2huYXRoYW4gTWFjZWRvXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiLmZMaTZcIixcbiAgICAgICAgXCJocmVmXCIsXG4gICAgICAgIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zLzROUUV2eFcyXzR3XCIsXG4gICAgICAgIFwidGFyZ2V0XCIsXG4gICAgICAgIFwiX2JsYW5rXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmxpID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwibGlcIiwgXCJcIiwgXCJmTGk3XCIsIFwiLmZvb3QtbGlzdFwiKTtcbiAgICAgIHRoaXMuYSA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwiR29vZCBXYXJlXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiLmZMaTdcIixcbiAgICAgICAgXCJocmVmXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbi9maXNoLWJvbmVfNDIwMTYzMz90ZXJtPWZpc2glMjBib25lcyZwYWdlPTEmcG9zaXRpb249MSZwYWdlPTEmcG9zaXRpb249MSZyZWxhdGVkX2lkPTQyMDE2MzMmb3JpZ2luPXN0eWxlXCIsXG4gICAgICAgIFwidGFyZ2V0XCIsXG4gICAgICAgIFwiX2JsYW5rXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmxpID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwibGlcIiwgXCJcIiwgXCJmTGk4XCIsIFwiLmZvb3QtbGlzdFwiKTtcbiAgICAgIHRoaXMuYSA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwiRG9nZ28gSXBzdW1cIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIuZkxpOFwiLFxuICAgICAgICBcImhyZWZcIixcbiAgICAgICAgXCJodHRwczovL2RvZ2dvaXBzdW0uY29tL1wiLFxuICAgICAgICBcInRhcmdldFwiLFxuICAgICAgICBcIl9ibGFua1wiXG4gICAgICApO1xuICAgICAgdGhpcy5saSA9IHRoaXMubWFuaXB1bGF0ZURPTShcImxpXCIsIFwiXCIsIFwiZkxpOVwiLCBcIi5mb290LWxpc3RcIik7XG4gICAgICB0aGlzLmEgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiYVwiLFxuICAgICAgICBcIlBhcm5pcyBBemltaVwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi5mTGk5XCIsXG4gICAgICAgIFwiaHJlZlwiLFxuICAgICAgICBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9kSWJQWmNmdHBMOFwiLFxuICAgICAgICBcInRhcmdldFwiLFxuICAgICAgICBcIl9ibGFua1wiXG4gICAgICApO1xuICAgICAgdGhpcy5saSA9IHRoaXMubWFuaXB1bGF0ZURPTShcImxpXCIsIFwiXCIsIFwiZkxpMTBcIiwgXCIuZm9vdC1saXN0XCIpO1xuICAgICAgdGhpcy5hID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImFcIixcbiAgICAgICAgXCJkdWNrZW45OVwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi5mTGkxMFwiLFxuICAgICAgICBcImhyZWZcIixcbiAgICAgICAgXCJodHRwczovL3BpeGFiYXkuY29tL3Bob3Rvcy9mcmllZC1yaWNlLXRoYWktZm9vZC10aGFpLWN1aXNpbmUtMzAyMzA0MC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIixcbiAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgKTtcbiAgICAgIHRoaXMubGkgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJsaVwiLCBcIlwiLCBcImZMaTExXCIsIFwiLmZvb3QtbGlzdFwiKTtcbiAgICAgIHRoaXMuYSA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwiUk9NQU4gT0RJTlRTT1ZcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIuZkxpMTFcIixcbiAgICAgICAgXCJocmVmXCIsXG4gICAgICAgIFwiaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9waG90by9kZWxpY2lvdXMtYXBwZXRpemVyLXdpdGgtYm9pbGVkLWxvYnN0ZXItYW5kLXdpbmUtNDU1MzM3OC9cIixcbiAgICAgICAgXCJ0YXJnZXRcIixcbiAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgKTtcbiAgICAgIHRoaXMubGkgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJsaVwiLCBcIlwiLCBcImZMaTEyXCIsIFwiLmZvb3QtbGlzdFwiKTtcbiAgICAgIHRoaXMuYSA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIFwia2tvbG9zb3ZcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIuZkxpMTJcIixcbiAgICAgICAgXCJocmVmXCIsXG4gICAgICAgIFwiaHR0cHM6Ly9waXhhYmF5LmNvbS9waG90b3MvdG9wLXZpZXctYmFzaWwtaGVyYnMtYm93bC1jbG9zZXVwLTEyNDg5NTUvXCIsXG4gICAgICAgIFwidGFyZ2V0XCIsXG4gICAgICAgIFwiX2JsYW5rXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmxpID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwibGlcIiwgXCJcIiwgXCJmTGkxM1wiLCBcIi5mb290LWxpc3RcIik7XG4gICAgICB0aGlzLmEgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiYVwiLFxuICAgICAgICBcIkpvcmRhbmUgTWF0aGlldVwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi5mTGkxM1wiLFxuICAgICAgICBcImhyZWZcIixcbiAgICAgICAgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvcTgteUtRM1A3SjBcIixcbiAgICAgICAgXCJ0YXJnZXRcIixcbiAgICAgICAgXCJfYmxhbmtcIlxuICAgICAgKTtcbiAgICB9LFxuICB9O1xuXG4gIGlubmVyT2JqZWN0LmluaXQoKTtcblxuICByZXR1cm4geyBpbm5lck9iamVjdCB9O1xufVxuIiwiaW1wb3J0IHR5cGUgeyBJbm5lck9iamVjdFR5cGUgfSBmcm9tIFwiLi90eXBlcy90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlUmVzZXJ2ZSgpOiB7XG4gIGlubmVyT2JqZWN0OiBPbWl0PFxuICAgIElubmVyT2JqZWN0VHlwZSxcbiAgICBcImNyZWF0ZUhlYWRlclwiIHwgXCJjcmVhdGVGb290ZXJcIiB8IFwibG9uZ1RleHRcIlxuICA+O1xufSB7XG4gIGNvbnN0IGlubmVyT2JqZWN0OiBPbWl0PFxuICAgIElubmVyT2JqZWN0VHlwZSxcbiAgICBcImNyZWF0ZUhlYWRlclwiIHwgXCJjcmVhdGVGb290ZXJcIiB8IFwibG9uZ1RleHRcIlxuICA+ID0ge1xuICAgIGluaXQoKTogdm9pZCB7XG4gICAgICB0aGlzLmNyZWF0ZU1haW4oKTtcbiAgICAgIHRoaXMubWFrZVRvZGF5c0RhdGUoKTtcbiAgICB9LFxuICAgIG1hbmlwdWxhdGVET00oXG4gICAgICBlbGVtZW50LFxuICAgICAgaW5uZXJUZXh0LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgYXBwZW5kVG8sXG4gICAgICAuLi5hdHRyaWJ1dGVzXG4gICAgKTogdm9pZCB7XG4gICAgICBjb25zdCBuZXdFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICBpbm5lclRleHQgIT09IFwiXCIgPyAobmV3RWxlbWVudC5pbm5lclRleHQgPSBpbm5lclRleHQpIDogXCJcIjtcbiAgICAgIGlmIChjbGFzc05hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgY29uc3QgY2xhc3NBcnJheTogc3RyaW5nW10gPSBjbGFzc05hbWUuc3BsaXQoXCIgXCIpO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NBcnJheSk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFwcGVuZFRvKS5hcHBlbmRDaGlsZChuZXdFbGVtZW50KTtcbiAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBsZXQgc2V0czogbnVtYmVyID0gYXR0cmlidXRlcy5sZW5ndGggLyAyO1xuICAgICAgICBsZXQgYXR0UG9zaXRpb246IG51bWJlciA9IDA7XG4gICAgICAgIGxldCB2YWxQb3NpdGlvbjogbnVtYmVyID0gMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXRzOyBpKyspIHtcbiAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIGAke2F0dHJpYnV0ZXNbYXR0UG9zaXRpb25dfWAsXG4gICAgICAgICAgICBgJHthdHRyaWJ1dGVzW3ZhbFBvc2l0aW9uXX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhdHRQb3NpdGlvbiArPSAyO1xuICAgICAgICAgIHZhbFBvc2l0aW9uICs9IDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZU1haW4oKTogdm9pZCB7XG4gICAgICB0aGlzLmRpdiA9IHRoaXMubWFuaXB1bGF0ZURPTShcImRpdlwiLCBcIlwiLCBcInJlc2VydmUtZmVhdHVyZVwiLCBcIm1haW5cIik7XG4gICAgICB0aGlzLmZvcm0gPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiZm9ybVwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi5yZXNlcnZlLWZlYXR1cmVcIixcbiAgICAgICAgXCJhY3Rpb25cIixcbiAgICAgICAgXCIgXCIsXG4gICAgICAgIFwibWV0aG9kXCIsXG4gICAgICAgIFwicG9zdFwiXG4gICAgICApO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJkaXZcIiwgXCJcIiwgXCJuYW1lXCIsIFwiZm9ybVwiKTtcbiAgICAgIHRoaXMubGFiZWwgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJsYWJlbFwiLCBcIlwiLCBcIlwiLCBcIi5uYW1lXCIsIFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIubmFtZVwiLFxuICAgICAgICBcInR5cGVcIixcbiAgICAgICAgXCJ0ZXh0XCIsXG4gICAgICAgIFwiaWRcIixcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICBcIk5hbWUgKlwiLFxuICAgICAgICBcImFyaWEtcmVxdWlyZWRcIixcbiAgICAgICAgXCJ0cnVlXCIsXG4gICAgICAgIFwicmVxdWlyZWRcIixcbiAgICAgICAgXCJcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwiZGl2XCIsIFwiXCIsIFwiZW1haWxcIiwgXCJmb3JtXCIpO1xuICAgICAgdGhpcy5sYWJlbCA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi5lbWFpbFwiLFxuICAgICAgICBcImZvclwiLFxuICAgICAgICBcImVtYWlsXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiLmVtYWlsXCIsXG4gICAgICAgIFwidHlwZVwiLFxuICAgICAgICBcImVtYWlsXCIsXG4gICAgICAgIFwiaWRcIixcbiAgICAgICAgXCJlbWFpbFwiLFxuICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgXCJlbWFpbFwiLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgIFwiRW1haWwgKlwiLFxuICAgICAgICBcImFyaWEtcmVxdWlyZWRcIixcbiAgICAgICAgXCJ0cnVlXCIsXG4gICAgICAgIFwicmVxdWlyZWRcIixcbiAgICAgICAgXCJcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwiZGl2XCIsIFwiXCIsIFwicGhvbmVcIiwgXCJmb3JtXCIpO1xuICAgICAgdGhpcy5sYWJlbCA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi5waG9uZVwiLFxuICAgICAgICBcImZvclwiLFxuICAgICAgICBcInBob25lXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiLnBob25lXCIsXG4gICAgICAgIFwidHlwZVwiLFxuICAgICAgICBcInRlbFwiLFxuICAgICAgICBcImlkXCIsXG4gICAgICAgIFwicGhvbmVcIixcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIFwicGhvbmVcIixcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiLFxuICAgICAgICBcIlBob25lICpcIixcbiAgICAgICAgXCJhcmlhLXJlcXVpcmVkXCIsXG4gICAgICAgIFwidHJ1ZVwiLFxuICAgICAgICBcInJlcXVpcmVkXCIsXG4gICAgICAgIFwiXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmRpdiA9IHRoaXMubWFuaXB1bGF0ZURPTShcImRpdlwiLCBcIlwiLCBcImd1ZXN0c1wiLCBcImZvcm1cIik7XG4gICAgICB0aGlzLmRpdiA9IHRoaXMubWFuaXB1bGF0ZURPTShcImRpdlwiLCBcIlwiLCBcImcxXCIsIFwiLmd1ZXN0c1wiKTtcbiAgICAgIHRoaXMubGFiZWwgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgXCJHdWVzdHMgKiAoYmV0d2VlbiAyIGFuZCA4KVwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi5nMVwiLFxuICAgICAgICBcImZvclwiLFxuICAgICAgICBcImd1ZXN0c1wiXG4gICAgICApO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJkaXZcIiwgXCJcIiwgXCJnMlwiLCBcIi5ndWVzdHNcIik7XG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiLmcyXCIsXG4gICAgICAgIFwidHlwZVwiLFxuICAgICAgICBcIm51bWJlclwiLFxuICAgICAgICBcImlkXCIsXG4gICAgICAgIFwiZ3Vlc3RzXCIsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBcImd1ZXN0c1wiLFxuICAgICAgICBcIm1pblwiLFxuICAgICAgICBcIjJcIixcbiAgICAgICAgXCJtYXhcIixcbiAgICAgICAgXCI4XCIsXG4gICAgICAgIFwiYXJpYS1yZXF1aXJlZFwiLFxuICAgICAgICBcInRydWVcIixcbiAgICAgICAgXCJyZXF1aXJlZFwiLFxuICAgICAgICBcIlwiXG4gICAgICApO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJkaXZcIiwgXCJcIiwgXCJkYXRlXCIsIFwiZm9ybVwiKTtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwiZGl2XCIsIFwiXCIsIFwiZDFcIiwgXCIuZGF0ZVwiKTtcbiAgICAgIHRoaXMubGFiZWwgPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgXCJEYXRlICogXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiLmQxXCIsXG4gICAgICAgIFwiZm9yXCIsXG4gICAgICAgIFwiZGF0ZVwiXG4gICAgICApO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJkaXZcIiwgXCJcIiwgXCJkMlwiLCBcIi5kYXRlXCIpO1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi5kMlwiLFxuICAgICAgICBcInR5cGVcIixcbiAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgIFwiaWRcIixcbiAgICAgICAgXCJkYXRlXCIsXG4gICAgICAgIFwibmFtZVwiLFxuICAgICAgICBcImRhdGVcIixcbiAgICAgICAgXCJhcmlhLXJlcXVpcmVkXCIsXG4gICAgICAgIFwidHJ1ZVwiLFxuICAgICAgICBcInJlcXVpcmVkXCIsXG4gICAgICAgIFwiXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmRpdiA9IHRoaXMubWFuaXB1bGF0ZURPTShcImRpdlwiLCBcIlwiLCBcInRpbWVcIiwgXCJmb3JtXCIpO1xuICAgICAgdGhpcy5kaXYgPSB0aGlzLm1hbmlwdWxhdGVET00oXCJkaXZcIiwgXCJcIiwgXCJ0MVwiLCBcIi50aW1lXCIpO1xuICAgICAgdGhpcy5sYWJlbCA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICBcIkhvdXJzOiBPcGVuIDRwbS4gQ2xvc2UgMTE6MzBwbVwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi50MVwiLFxuICAgICAgICBcImZvclwiLFxuICAgICAgICBcInRpbWVcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwiZGl2XCIsIFwiXCIsIFwidDJcIiwgXCIudGltZVwiKTtcbiAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIi50MlwiLFxuICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgXCJ0aW1lXCIsXG4gICAgICAgIFwiaWRcIixcbiAgICAgICAgXCJ0aW1lXCIsXG4gICAgICAgIFwiYXJpYS1yZXF1aXJlZFwiLFxuICAgICAgICBcInRydWVcIixcbiAgICAgICAgXCJyZXF1aXJlZFwiLFxuICAgICAgICBcIlwiXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb24gPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgIFwiVGltZSAqXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiI3RpbWVcIixcbiAgICAgICAgXCJzZWxlY3RlZFwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcImRpc2FibGVkXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCIgXCJcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbiA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgXCI0OjAwXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiI3RpbWVcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIjQ6MDBcIlxuICAgICAgKTtcbiAgICAgIHRoaXMub3B0aW9uID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICBcIjQ6MzBcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIjdGltZVwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwiNDozMFwiXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb24gPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgIFwiNTowMFwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIiN0aW1lXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCI1OjAwXCJcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbiA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgXCI1OjMwXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiI3RpbWVcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIjU6MzBcIlxuICAgICAgKTtcbiAgICAgIHRoaXMub3B0aW9uID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICBcIjY6MDBcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIjdGltZVwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwiNjowMFwiXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb24gPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgIFwiNjozMFwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIiN0aW1lXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCI2OjMwXCJcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbiA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgXCI3OjAwXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiI3RpbWVcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIjc6MDBcIlxuICAgICAgKTtcbiAgICAgIHRoaXMub3B0aW9uID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICBcIjc6MzBcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIjdGltZVwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwiNzozMFwiXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb24gPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgIFwiODowMFwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIiN0aW1lXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCI4OjAwXCJcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbiA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgXCI4OjMwXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiI3RpbWVcIixcbiAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICBcIjg6MzBcIlxuICAgICAgKTtcbiAgICAgIHRoaXMub3B0aW9uID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICBcIjk6MDBcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIjdGltZVwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwiOTowMFwiXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb24gPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgIFwiOTozMFwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIiN0aW1lXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCI5OjMwXCJcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbiA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgXCIxMDowMFwiLFxuICAgICAgICBcIlwiLFxuICAgICAgICBcIiN0aW1lXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCIxMDowMFwiXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb24gPSB0aGlzLm1hbmlwdWxhdGVET00oXG4gICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgIFwiMTA6MzBcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCIjdGltZVwiLFxuICAgICAgICBcInZhbHVlXCIsXG4gICAgICAgIFwiMTA6MzBcIlxuICAgICAgKTtcbiAgICAgIHRoaXMuZGl2ID0gdGhpcy5tYW5pcHVsYXRlRE9NKFwiZGl2XCIsIFwiXCIsIFwibWVzc2FnZVwiLCBcImZvcm1cIik7XG4gICAgICB0aGlzLmxhYmVsID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiLm1lc3NhZ2VcIixcbiAgICAgICAgXCJmb3JcIixcbiAgICAgICAgXCJtZXNzYWdlXCJcbiAgICAgICk7XG4gICAgICB0aGlzLnRleHRhcmVhID0gdGhpcy5tYW5pcHVsYXRlRE9NKFxuICAgICAgICBcInRleHRhcmVhXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiXCIsXG4gICAgICAgIFwiLm1lc3NhZ2VcIixcbiAgICAgICAgXCJuYW1lXCIsXG4gICAgICAgIFwibWVzc2FnZVwiLFxuICAgICAgICBcImlkXCIsXG4gICAgICAgIFwibWVzc2FnZVwiLFxuICAgICAgICBcInBsYWNlaG9sZGVyXCIsXG4gICAgICAgIFwiTWVzc2FnZSAob3B0aW9uYWwpXCJcbiAgICAgICk7XG4gICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMubWFuaXB1bGF0ZURPTShcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgXCJTdWJtaXRcIixcbiAgICAgICAgXCJcIixcbiAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgIFwiZGlzYWJsZWRcIixcbiAgICAgICAgXCJcIlxuICAgICAgKTtcbiAgICB9LFxuICAgIG1ha2VUb2RheXNEYXRlKCk6IHZvaWQge1xuICAgICAgY29uc3QgdG9kYXk6IHN0cmluZyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImRhdGVcIl0nKS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgdG9kYXkpO1xuICAgIH0sXG4gIH07XG5cbiAgaW5uZXJPYmplY3QuaW5pdCgpO1xuXG4gIHJldHVybiB7IGlubmVyT2JqZWN0IH07XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuYmFzZVVSSSkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcGFnZU1haW4gZnJvbSBcIi4vcGFnZS1tYWluXCI7XG5pbXBvcnQgcGFnZUFib3V0IGZyb20gXCIuL3BhZ2UtYWJvdXRcIjtcbmltcG9ydCBwYWdlRm9vZCBmcm9tIFwiLi9wYWdlLWZvb2RcIjtcbmltcG9ydCBwYWdlUmVzZXJ2ZSBmcm9tIFwiLi9wYWdlLXJlc2VydmVcIjtcbmltcG9ydCBcIi4vbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxucGFnZU1haW4oKTtcblxuZnVuY3Rpb24gY29tcG9uZW50KCk6IHZvaWQge1xuICBwYWdlQWJvdXQoKTtcblxuICBmdW5jdGlvbiByZW1vdmVFbGVtZW50cygpIHtcbiAgICBjb25zdCBwaWNreTogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudCB8IEhUTUxJbWFnZUVsZW1lbnQ+ID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJtYWluID4gKjpub3QoOmZpcnN0LWNoaWxkKVwiKTtcbiAgICBmb3IgKGNvbnN0IGVsIG9mIHBpY2t5KSB7XG4gICAgICBlbC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXIgPiB1bFwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IGlkeDogbnVtYmVyID0gWy4uLnRoaXMuY2hpbGRyZW5dLmluZGV4T2YoZS50YXJnZXQpO1xuICAgICAgcmVtb3ZlRWxlbWVudHMoKTtcblxuICAgICAgc3dpdGNoIChpZHgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHBhZ2VBYm91dCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgcGFnZUZvb2QoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHBhZ2VSZXNlcnZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG59XG5cbmNvbXBvbmVudCgpO1xuXG4vLyBNYWtlIHN1cmUgdG8gY2hhbmdlIHlvdXIgZGV2dG9vbCBpbiB3ZWJwYWNrLmNvbmZpZy5qcyB0byBzb21ldGhpbmcgbW9yZVxuLy8gcHJvZHVjdGlvbiBmcmllbmRseSB3aGVuIHlvdSBmaW5pc2ggdGhpcyBwcm9qZWN0XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9