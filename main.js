/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../Cocogoose Pro Light-trial.ttf */ \"./src/Cocogoose Pro Light-trial.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ice_cream1.jpg */ \"./src/images/ice_cream1.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/ice-cream.webp */ \"./src/images/ice-cream.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n@font-face {\\r\\n    font-family: coco;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n:root {\\r\\n    --main-color: #ff6978;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    min-height: 100vh;\\r\\n    /*overflow: hidden;*/\\r\\n    font-family: coco, sans-serif;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"); \\r\\n    background-size: cover;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    min-height: 75vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    \\r\\n    background: no-repeat;\\r\\n}\\r\\n\\r\\n/* header style */\\r\\n.header {\\r\\n    display: flex;\\r\\n    justify-content: flex-end;\\r\\n    height: 100px;\\r\\n    gap: 30px;\\r\\n    background-color: var(--main-color);\\r\\n    padding: 10px 50px 0 10px;\\r\\n    color: #574142;\\r\\n}\\r\\n.nav {\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    gap: 20px;\\r\\n    align-items: center;\\r\\n    justify-content: flex-end;\\r\\n    color: white;\\r\\n    margin-bottom: -49px;\\r\\n}\\r\\n.nav li {\\r\\n    color: #444545;\\r\\n    background-color: rgb(255, 255, 255);\\r\\n    border-radius: 20px 20px 0 0;\\r\\n    padding: 15px 20px;\\r\\n    list-style-type: none;\\r\\n}\\r\\n.nav li:hover {\\r\\n    height: 35px;\\r\\n}\\r\\n\\r\\n/* body style */\\r\\n.body-container {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n    background: scroll no-repeat;\\r\\n    background-size: cover;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    min-height: 75vh;\\r\\n}\\r\\n.para-container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 5px;\\r\\n    background-color: var(--main-color);\\r\\n    padding: 20px;\\r\\n    height: 100px;\\r\\n    width: 200px;\\r\\n    border-radius: 25px;\\r\\n}\\r\\n.para {\\r\\n    color: rgb(255, 255, 255);\\r\\n    text-align: center;\\r\\n}\\r\\n.para-btn {\\r\\n    padding: 8px 15px;\\r\\n    color: rgb(255, 255, 255);\\r\\n    width: 70px;\\r\\n    border-radius: 20px;\\r\\n    background-color: rgb(255, 255, 255);\\r\\n    color: var(--main-color);\\r\\n    border: none;\\r\\n}\\r\\n/* footer style */\\r\\n.footer {\\r\\n    background-color: var(--main-color);\\r\\n    padding: 15px;\\r\\n    height: 30px;\\r\\n    color: white;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n/* Menu page style */\\r\\n.menu-container {  \\r\\n    min-height: 75vh;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.menu-container-container {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    min-height: 73vh;\\r\\n}\\r\\n.menu {\\r\\n    background-color: #FFE4E4;\\r\\n    display: flex;\\r\\n    gap: 30px;\\r\\n    flex-wrap: wrap;\\r\\n    padding: 15px;\\r\\n    height: 300px;\\r\\n    width: 650px;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    border-radius: 50px;\\r\\n    padding-left: 40px;\\r\\n}\\r\\n.menu .meal-container:nth-child(1), \\r\\n.menu .meal-container:nth-child(3){\\r\\n   border-right: 1px solid #444545;\\r\\n}\\r\\n.meal-container {\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    padding: 15px;\\r\\n    gap: 15px;\\r\\n    width: 200px;\\r\\n    color: #574142;\\r\\n    padding-right: 90px;\\r\\n}\\r\\n.meal-container-header {\\r\\n    background-color: #ff6978;\\r\\n    padding: 10px 10px;\\r\\n    width: 200px;\\r\\n    border-radius: 30px 30px 0 0;\\r\\n    text-align: center;\\r\\n    font-size: 13px;\\r\\n    font-weight: 600;\\r\\n}\\r\\n.meal-content-container {\\r\\n    display: flex;\\r\\n    gap: 10px;\\r\\n}\\r\\n.meal-img {\\r\\n    background-color: var(--main-color);\\r\\n    border-radius: 50%;\\r\\n    height: 30px;\\r\\n    width: 30px;\\r\\n}\\r\\n.meal-description-container {\\r\\n    display: flex;\\r\\n    gap: 3px;\\r\\n    font-size: small;\\r\\n}\\r\\n.description-tags {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 6px;\\r\\n}\\r\\n.description-content {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 6px;\\r\\n}\\r\\n.price {\\r\\n    position: absolute;\\r\\n    bottom: 8px;\\r\\n    right: 50px;\\r\\n    background-color: #fff129;\\r\\n    border-radius: 50px;\\r\\n    border: rgb(255, 255, 255);\\r\\n    height: 20px;\\r\\n    width: 20px;\\r\\n    padding: 5px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    font-family: sans-serif;\\r\\n    font-size: 15px;\\r\\n    font-weight: 600;\\r\\n}\\r\\n/* Contact page style */\\r\\n.contact-container {\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    min-height: 75vh;\\r\\n}\\r\\n.contact {\\r\\n    width: 600px;\\r\\n    height: 500px;\\r\\n    background-color: #FFE4E4;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: flex-start;\\r\\n    justify-content: center;\\r\\n    gap: 15px;\\r\\n    border-radius: 50px;\\r\\n    border: 3px #fff129;\\r\\n    padding-left: 100px;\\r\\n    font-family: sans-serif;\\r\\n    font-weight: 600;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n  if (!url) {\r\n    return url;\r\n  }\r\n  url = String(url.__esModule ? url.default : url);\r\n\r\n  // If url is already wrapped in quotes, remove them\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  }\r\n\r\n  // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n  return url;\r\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/phone.png":
/*!******************************!*\
  !*** ./src/images/phone.png ***!
  \******************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack://restaurant-page/./src/images/phone.png?");

/***/ }),

/***/ "./src/scripts/contact.js":
/*!********************************!*\
  !*** ./src/scripts/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_phone_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/phone.png */ \"./src/images/phone.png\");\n/* harmony import */ var _images_phone_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_phone_png__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nfunction makeContact () {\r\n    const container = document.getElementById('content');\r\n    container.classList.add(\"contact-container\");\r\n    // Contact Body\r\n    // create contact body elements\r\n    const contactContainer = document.createElement(\"div\");\r\n    const addressContainer = document.createElement(\"div\");\r\n    const openTimesContainer = document.createElement(\"div\");\r\n    const phoneContainer = document.createElement(\"div\");\r\n    const messageUsContainer = document.createElement(\"div\");\r\n    const addressImg = document.createElement(\"img\");\r\n    const openTimesImg = document.createElement(\"img\");\r\n    const phoneImg = document.createElement(\"img\");\r\n    const messageUsImg = document.createElement(\"img\");\r\n    const address = document.createElement(\"p\");\r\n    const openTimes= document.createElement(\"p\");\r\n    const phone = document.createElement(\"p\");\r\n    const messageUs = document.createElement(\"p\");\r\n    // add text content\r\n    address.textContent = 'Ice Cream Land, ice, icey street, 55';\r\n    openTimes.textContent = \"8am to 10pm\";\r\n    phone.textContent = \"0555555555\";\r\n    messageUs.textContent = \"icefood@gmail.com\"\r\n    // add imag src's\r\n   /*  adressImg.setAttribute('src', '');\r\n    openTimesImg.setAttribute('src', '');*/\r\n    phoneImg.src= (_images_phone_png__WEBPACK_IMPORTED_MODULE_0___default());\r\n   // messageUsImg.setAttribute('src', '');\r\n    // add classes\r\n    contactContainer.classList.add(\"contact\");\r\n    // append elements\r\n    addressContainer.appendChild(addressImg);\r\n    addressContainer.appendChild(address);\r\n    contactContainer.appendChild(addressContainer);\r\n    openTimesContainer.appendChild(openTimesImg);\r\n    openTimesContainer.appendChild(openTimes);\r\n    contactContainer.appendChild(openTimesContainer);\r\n    phoneContainer.appendChild(phoneImg);\r\n    phoneContainer.appendChild(phone);\r\n    contactContainer.appendChild(phoneContainer);\r\n    messageUsContainer.appendChild(messageUsImg);\r\n    messageUsContainer.appendChild(messageUs);\r\n    contactContainer.appendChild(messageUsContainer);\r\n    container.appendChild(contactContainer);\r\n}    \r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeContact);\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/contact.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/scripts/page-load.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/scripts/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/scripts/contact.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style.css */ \"./src/style/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst container = document.getElementById('content');\r\n// Header\r\n// create header elements\r\nconst header= document.createElement(\"div\");\r\nconst logoContainer= document.createElement(\"div\");\r\nconst nav= document.createElement(\"ul\");\r\nconst homeBtn= document.createElement(\"li\"); \r\nconst menuBtn= document.createElement(\"li\"); \r\nconst contactBtn= document.createElement(\"li\");\r\n// add nav elements text content\r\nhomeBtn.textContent= 'Home';\r\nmenuBtn.textContent= 'Menu';\r\ncontactBtn.textContent= 'Contact'; \r\n// add classes to header elements\r\nheader.classList.add('header');\r\nlogoContainer.classList.add('logo');\r\nnav.classList.add('nav');\r\nhomeBtn.setAttribute('id', 'home');\r\nmenuBtn.setAttribute('id', 'menu');\r\ncontactBtn.setAttribute('id', 'contact');\r\n// append the header elements to the container\r\nnav.appendChild(homeBtn);\r\nnav.appendChild(menuBtn);\r\nnav.appendChild(contactBtn);\r\nheader.appendChild(logoContainer);\r\nheader.appendChild(nav);\r\ncontainer.insertAdjacentElement(\"beforebegin\", header);\r\n// Footer\r\n// create footer elements\r\nconst footer= document.createElement(\"footer\");\r\nconst footerElement= document.createElement(\"div\");\r\n// add classes to footer elements\r\nfooter.classList.add('footer');\r\nfooterElement.classList.add('contact-us');\r\n// add footer text content\r\nfooterElement.textContent= 'Contact us';\r\n// append the footer elements to the container\r\nfooter.appendChild(footerElement);\r\ncontainer.insertAdjacentElement(\"afterend\" ,footer);\r\n\r\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nfunction deletePage () {\r\n   container.innerHTML= '';\r\n   container.className = '';\r\n};\r\n\r\nhomeBtn.addEventListener(\"click\", () => { deletePage();\r\n                                          (0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()});\r\nmenuBtn.addEventListener(\"click\", () => { deletePage();\r\n                                          (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()});\r\ncontactBtn.addEventListener(\"click\", () => { deletePage();\r\n                                             (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()});\r\n\r\n                                             \n\n//# sourceURL=webpack://restaurant-page/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction makeMenu () {\r\n    const container = document.getElementById('content');\r\n    container.classList.add(\"menu-container\");\r\n    const menuContainerContainer = document.createElement(\"div\");\r\n    menuContainerContainer.classList.add(\"menu-container-container\");\r\n    const menuContainer = document.createElement(\"div\");\r\n    menuContainer.classList.add(\"menu\");\r\n    // Menu body\r\n    function createMeal (name, flavors, topping, prices){\r\n        // create one meal elements  \r\n        const container1= document.createElement(\"div\");\r\n        const containerHeader= document.createElement(\"div\");\r\n        const mealContentContainer= document.createElement(\"div\");\r\n        const mealImgContainer= document.createElement(\"div\");\r\n        const mealImg= document.createElement(\"img\");\r\n        const mealDescriptionContainer= document.createElement(\"div\");\r\n        const mealDescriptionTags= document.createElement(\"div\");\r\n        const flavor= document.createElement(\"div\");\r\n        const toppings= document.createElement(\"div\");\r\n        const mealDescriptionContent= document.createElement(\"div\");\r\n        const flavorContent= document.createElement(\"div\");\r\n        const toppingsContent= document.createElement(\"div\");\r\n        const price = document.createElement(\"div\");\r\n        // add text content\r\n        containerHeader.textContent = `${name} Ice Cream`;\r\n        flavor.textContent = 'Flavor';\r\n        toppings.textContent = 'Toppings';\r\n        toppingsContent.textContent = `: ${flavors}`;\r\n        flavorContent.textContent = `: ${topping}`;\r\n        price.textContent = `${prices}`;\r\n        // add classes     \r\n        container1.classList.add(\"meal-container\");\r\n        containerHeader.classList.add(\"meal-container-header\");\r\n        mealContentContainer.classList.add(\"meal-content-container\");\r\n        mealImgContainer.classList.add(\"meal-img\");\r\n        mealDescriptionContainer.classList.add(\"meal-description-container\");\r\n        mealDescriptionTags.classList.add(\"description-tags\");\r\n        mealDescriptionContent.classList.add(\"description-content\");\r\n        price.classList.add(\"price\");\r\n        // append elements\r\n        container1.appendChild(containerHeader);\r\n        container1.appendChild(mealContentContainer);\r\n        container1.appendChild(price);\r\n        mealContentContainer.appendChild(mealImgContainer);\r\n        mealImgContainer.appendChild(mealImg);\r\n        mealContentContainer.appendChild(mealDescriptionContainer);\r\n        mealDescriptionContainer.appendChild(mealDescriptionTags);\r\n        mealDescriptionContainer.appendChild(mealDescriptionContent);\r\n        mealDescriptionTags.appendChild(flavor);\r\n        mealDescriptionTags.appendChild(toppings);\r\n        mealDescriptionContent.appendChild(toppingsContent);\r\n        mealDescriptionContent.appendChild(flavorContent);\r\n        menuContainer.appendChild(container1);\r\n\r\n        \r\n    }\r\n    menuContainerContainer.appendChild(menuContainer);\r\n    container.appendChild(menuContainerContainer);\r\n\r\n    createMeal('Strawberry', 'Strawberry', 'berries', '5$');\r\n    createMeal('chocolate', 'chocolate', 'cacao', '5$');\r\n    createMeal('vanilla', 'vanilla', 'syrup', '3$');\r\n    createMeal('fruits', 'mango', 'fruits', '8$');  \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/menu.js?");

/***/ }),

/***/ "./src/scripts/page-load.js":
/*!**********************************!*\
  !*** ./src/scripts/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction makePage () {\r\n    const container = document.getElementById('content');\r\n    container.classList.add(\"container\");\r\n    // Body\r\n    // create body elements\r\n    const bodyContainer= document.createElement(\"div\");\r\n    const paraContainer= document.createElement(\"div\");\r\n    const para= document.createElement(\"p\");\r\n    const paraBtn= document.createElement(\"button\");\r\n    // add classes to body elements\r\n    bodyContainer.classList.add('body-container');\r\n    paraContainer.classList.add('para-container');\r\n    para.classList.add('para');\r\n    paraBtn.classList.add('para-btn');\r\n    // add text to body elements\r\n    para.textContent = 'The most delicious place on the Internet!';\r\n    paraBtn.textContent = 'Order now';\r\n    // append the body elements to the container\r\n    paraContainer.appendChild(para);\r\n    paraContainer.appendChild(paraBtn);\r\n    bodyContainer.appendChild(paraContainer);\r\n    container.appendChild(bodyContainer);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makePage);\n\n//# sourceURL=webpack://restaurant-page/./src/scripts/page-load.js?");

/***/ }),

/***/ "./src/Cocogoose Pro Light-trial.ttf":
/*!*******************************************!*\
  !*** ./src/Cocogoose Pro Light-trial.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f77876cfc3790e5308f4.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Cocogoose_Pro_Light-trial.ttf?");

/***/ }),

/***/ "./src/images/ice-cream.webp":
/*!***********************************!*\
  !*** ./src/images/ice-cream.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"aa026478ce52ce10aa94.webp\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ice-cream.webp?");

/***/ }),

/***/ "./src/images/ice_cream1.jpg":
/*!***********************************!*\
  !*** ./src/images/ice_cream1.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c11eeb4c483cac3dca5f.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/ice_cream1.jpg?");

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;