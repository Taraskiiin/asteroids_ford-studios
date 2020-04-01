/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/hw9.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/hw9.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body{\\n    width: 100%;\\n    height: 100%;\\n}\\n#container__wrapper{\\n    display: flex;\\n    margin: 50px auto;\\n    flex-wrap: wrap;\\n    max-width: 250px;\\n    min-height: 250px;\\n    justify-content: center;\\n    align-items: center;\\n}\\n#container__wrapper div{\\n    width: 50px;\\n    height: 50px;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/hw9.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  background-color: #222222;\\n  font-family: 'Press Start 2P', cursive;\\n  color: #fbc235;\\n  font-size: 3vh;\\n  text-align: center;\\n  margin: 0;\\n  padding: 0;\\n  max-width: 100%;\\n  height: 100%;\\n }\\n.container {\\n  margin: 0 auto; }\\n.nav {\\n  animation-name: nav__slide;\\n  animation-duration: 2s;\\n  animation-iteration-count: unset;\\n  margin-top: 5vh; }\\n  .nav .links__list li a {\\n    text-decoration: none;\\n    letter-spacing: .5px;\\n    line-height: 5vh;\\n    color: inherit; }\\n    .nav .links__list li a :active {\\n      color: inherit; }\\n\\n@keyframes nav__slide {\\n  0% {\\n    margin-top: 100%; }\\n  100% {\\n    margin-top: 5vh; } }\\n.spaceship {\\n  transform: rotate(45deg);\\n  border-top: 33vh solid #fff;\\n  border-left: 7vh solid transparent;\\n  border-right: 7vh solid transparent;\\n  height: 0;\\n  width: 3vh;\\n  position: absolute;\\n  z-index: 1;\\n  animation-name: spaceship;\\n  animation-duration: 4s;\\n  animation-delay: 5s;\\n  animation-iteration-count: 1;\\n  bottom: -150%;\\n  left: -150%; }\\n  .spaceship::after {\\n    content: \\\" \\\";\\n    bottom: 0;\\n    position: absolute;\\n    width: 0;\\n    height: 0;\\n    background-color: #c7c8ca;\\n    transform: rotate(-12deg);\\n    left: -3.4vh;\\n    border-top: 33vh solid #c7c8ca;\\n    border-right: 1.3vh solid #c7c8ca; }\\n  .spaceship::before {\\n    content: \\\"\\\";\\n    width: 0;\\n    height: 0;\\n    position: absolute;\\n    border-top: 20vh solid #c7c8ca;\\n    border-left: 6vh solid transparent;\\n    border-right: 2vh solid transparent;\\n    bottom: 12.5vh;\\n    right: calc(100% - 1.2vh);\\n    transform: rotate(2deg); }\\n  .spaceship .spaceship__nose {\\n    height: 0;\\n    width: 17vh;\\n    position: absolute;\\n    bottom: 32vh;\\n    background-color: #cd3939;\\n    left: calc(100% - 10vh);\\n    border-top: 2vh solid #cd3939;\\n    border-radius: 100px / 50px;\\n    z-index: 2; }\\n    .spaceship .spaceship__nose::after {\\n      top: -16.6vh;\\n      left: .5vh;\\n      position: absolute;\\n      content: \\\"\\\";\\n      width: 0;\\n      height: 0;\\n      border-left: 8vh solid transparent;\\n      border-right: 8vh solid transparent;\\n      border-bottom: 15vh solid #cd3939;\\n      z-index: 1; }\\n    .spaceship .spaceship__nose::before {\\n      content: \\\"\\\";\\n      position: absolute;\\n      width: 15vh;\\n      height: 8.5vh;\\n      border: 0.2vh solid #ff4745;\\n      clip-path: circle(50% at center top);\\n      background: #ff4745;\\n      transform: rotate(62deg);\\n      left: 1.3vh;\\n      bottom: 1vh;\\n      z-index: 2; }\\n  .spaceship .spaceship__teeth {\\n    position: relative;\\n    width: 0;\\n    height: 0; }\\n    .spaceship .spaceship__teeth::after {\\n      content: \\\" \\\";\\n      position: absolute;\\n      z-index: 5;\\n      width: 0;\\n      height: 0;\\n      border-top: 7vh solid transparent;\\n      border-right: 8vh solid #ff4745;\\n      border-bottom: 6vh solid transparent;\\n      bottom: 6vh;\\n      transform: rotate(-12deg);\\n      left: -10.5vh; }\\n    .spaceship .spaceship__teeth::before {\\n      content: \\\" \\\";\\n      position: absolute;\\n      z-index: 6;\\n      height: 14vh;\\n      width: 1.5vh;\\n      border-radius: 50%;\\n      background-color: #cd3939;\\n      transform: rotate(-12deg);\\n      bottom: 6.5vh;\\n      left: -3.5vh; }\\n  .spaceship .spaceship__ass {\\n    width: 4vh;\\n    height: 2vh;\\n    border-radius: 50%;\\n    background-color: #cd3939;\\n    position: absolute;\\n    bottom: -.5vh;\\n    left: -.45vh;\\n    z-index: 3; }\\n    .spaceship .spaceship__ass::after {\\n      content: \\\"\\\";\\n      position: absolute;\\n      width: 3.3vh;\\n      height: 1vh;\\n      background-color: #ff4745;\\n      border-radius: 50%;\\n      left: calc(100% - 3.6vh);\\n      top: 0; }\\n  .spaceship .spaceship__window {\\n    width: 9vh;\\n    height: 9vh;\\n    background-color: #00d0d0;\\n    border-radius: 50%;\\n    position: absolute;\\n    bottom: 20.5vh;\\n    left: -3.4vh;\\n    border: 0.5vh solid #cd3939; }\\n    .spaceship .spaceship__window::after {\\n      content: \\\" \\\";\\n      width: 8.4vh;\\n      height: .6vh;\\n      background-color: #00f4f4;\\n      border-radius: 10px;\\n      transform: rotate(-25deg);\\n      position: absolute;\\n      left: 10%;\\n      top: 50%; }\\n    .spaceship .spaceship__window::before {\\n      content: \\\" \\\";\\n      width: 5.8vh;\\n      height: 1vh;\\n      background-color: #00f4f4;\\n      transform: rotate(-25deg);\\n      position: absolute;\\n      left: 17%;\\n      top: 20%;\\n      border-radius: 10px; }\\n  .spaceship .spaceship__fire {\\n    width: 0;\\n    height: 0;\\n    border-left: 1.5vh solid transparent;\\n    border-right: 1.5vh solid transparent;\\n    border-top: 15vh solid #fbc235;\\n    animation-duration: .8s;\\n    animation-name: spaceship__fire;\\n    animation-iteration-count: infinite; }\\n    .spaceship .spaceship__fire::after {\\n      content: \\\" \\\";\\n      width: 0;\\n      height: 0;\\n      border-left: 1vh solid transparent;\\n      border-right: 1vh solid transparent;\\n      border-top: 10vh solid #f9a135;\\n      position: absolute;\\n      top: 0;\\n      left: 0.5vh; }\\n@keyframes spaceship__fire {\\n  0% {\\n    border-top: 15vh solid #fbc235; }\\n  5% {\\n    border-top: 13vh solid #f2b827; }\\n  60% {\\n    border-top: 20vh solid #fbc235; }\\n  90% {\\n    border-top: 22vh solid #f2b827; }\\n  100% {\\n    border-top: 15vh solid #fbc235; } }\\n@keyframes spaceship {\\n  0% {\\n    left: 0;\\n    bottom: 0;\\n    opacity: 0;\\n    display: block; }\\n  20% {\\n    opacity: 1; }\\n  90% {\\n    opacity: 1; }\\n  100% {\\n    bottom: 90%;\\n    left: 80%;\\n    opacity: 0;\\n    display: none; } }\\n.btn__wrapper{\\n  position: relative;\\n  margin: 0 auto;\\n  width: 400px;\\n  height: 400px;\\n}\\n#start__btn{\\n  paint-order: normal;\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n  cursor: pointer;\\n  z-index: 100;\\n  opacity: 1;\\n  display: block;\\n}\\n.plane{\\n  width: 120px;\\n  height: 120px;\\n  transform-style: preserve-3d;\\n}\\n.plane.main{\\n  position: absolute;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n  margin: auto;\\n  transform: rotateX(68deg) rotateZ(-30deg);\\n  animation: rotate 20s infinite linear;\\n}\\n.plane.main .circle {\\n  width: 120px;\\n  height: 120px;\\n  position: absolute;\\n  transform-style: preserve-3d;\\n  border-radius: 100%;\\n  box-sizing: border-box;\\n  box-shadow: 0 0 60px rgb(220, 20, 130),\\n              inset 0 0 60px rgb(220, 20, 130);\\n}\\n.plane.main .circle::before,\\n.plane.main .circle::after{\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  top: 0; left: 0; bottom: 0; right: 0;\\n  margin: auto;\\n  width: 10%; height: 10%;\\n  border-radius: 100%;\\n  background: rgb(220, 20, 130);\\n  box-sizing: border-box;\\n  box-shadow: 0 0 60px 2px rgb(220, 20, 130);\\n}\\n.plane.main .circle::before {\\n  transform: translateZ(-90px);\\n}\\n.plane.main .circle::after {\\n  transform: translateZ(90px);\\n}\\n.plane.main .circle:nth-child(1){\\n  transform: rotateZ(72deg) rotateX(63.435deg);\\n}\\n.plane.main .circle:nth-child(2){\\n  transform: rotateZ(144deg) rotateX(63.435deg);\\n}\\n.plane.main .circle:nth-child(3){\\n  transform: rotateZ(216deg) rotateX(63.435deg);\\n}\\n.plane.main .circle:nth-child(4){\\n  transform: rotateZ(288deg) rotateX(63.435deg);\\n}\\n.plane.main .circle:nth-child(5){\\n  transform: rotateZ(360deg) rotateX(63.435deg);\\n}\\n@keyframes rotate{\\n  0%{\\n    transform: rotateX(0) rotateY(0) rotateZ(0);\\n  }\\n  100%{\\n    transform: rotateX(360deg) rotateY(360deg) rotateX(360deg);\\n  }\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/hw9.css":
/*!*********************!*\
  !*** ./src/hw9.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./hw9.css */ \"./node_modules/css-loader/dist/cjs.js!./src/hw9.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/hw9.css?");

/***/ }),

/***/ "./src/hw9.js":
/*!********************!*\
  !*** ./src/hw9.js ***!
  \********************/
/*! exports provided: getRandomColore, generateBlocks, getAnotherColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomColore\", function() { return getRandomColore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateBlocks\", function() { return generateBlocks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAnotherColor\", function() { return getAnotherColor; });\n/* harmony import */ var _hw9_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw9.css */ \"./src/hw9.css\");\n/* harmony import */ var _hw9_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hw9_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar getRandomColore = function getRandomColore() {\n  var randomColor = [];\n\n  for (var i = 0; i < 3; i++) {\n    randomColor.push(Math.floor(Math.random() * 255));\n  }\n\n  return randomColor;\n};\nfunction generateBlocks() {\n  var blocks = [];\n  var container = document.getElementById(\"container__wrapper\");\n\n  for (var i = 0; i < 25; i++) {\n    blocks.push(document.createElement('div'));\n    container.appendChild(blocks[i]);\n    blocks[i].style.backgroundColor = \"rgb(\".concat(getRandomColore(), \")\");\n  }\n\n  return blocks;\n} //-----Advanced------\n\nvar getAnotherColor = function getAnotherColor(arr) {\n  setInterval(function () {\n    return arr.forEach(function (el) {\n      el.style.backgroundColor = \"rgb(\".concat(getRandomColore(), \")\");\n    });\n  }, 1000);\n};\n\n//# sourceURL=webpack:///./src/hw9.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hw9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hw9.js */ \"./src/hw9.js\");\n\n\ndocument.getElementById('start__btn').addEventListener(\"click\", function () {\n  document.getElementById(\"container__wrapper\").innerHTML = \"\";\n  Object(_hw9_js__WEBPACK_IMPORTED_MODULE_1__[\"getAnotherColor\"])(Object(_hw9_js__WEBPACK_IMPORTED_MODULE_1__[\"generateBlocks\"])());\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });