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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* body{\\r\\n    background: #000;\\r\\n} */\\r\\n#container {\\r\\n    max-width: 1400px;\\r\\n    margin: auto;\\r\\n}\\r\\n#gameCanvas {\\r\\n    background: #000;\\r\\n    border: 1px solid #fff;\\r\\n    margin: auto;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar FPS = 30; // frames per second\n\nvar shipSize = 30; // Ship height in px;\n\nvar shipThrust = 5;\nvar friction = 0.6;\nvar rockJag = 0.2;\nvar laserMax = 10;\nvar laserSpeed = 500;\nvar rocksSpeed = 50;\nvar rocksVert = 10;\nvar rocksSize = 80;\nvar turnSpeed = 360;\nvar shipExplodeDur = 0.3;\nvar canv = document.getElementById(\"gameCanvas\");\nvar ctx = canv.getContext(\"2d\");\nvar rocksAmount = 10;\nvar rocks = [];\nvar showBounding = false;\nvar showCenterDot = false;\nvar ship = {\n  x: canv.width / 2,\n  y: canv.height / 2,\n  r: shipSize / 2,\n  a: 90 / 180 * Math.PI,\n  // convert to radians\n  rotation: 0,\n  thrusting: false,\n  explodeTime: 0,\n  thrust: {\n    x: 0,\n    y: 0\n  },\n  canShoot: true,\n  lasers: []\n};\n\nvar shootLaser = function shootLaser() {\n  if (ship.canShoot && ship.laser.length < laserMax) {\n    ship.lasers.push({\n      x: ship.x + 4 / 3 * ship.r * Math.cos(ship.a),\n      y: ship.y - 4 / 3 * ship.r * Math.sin(ship.a),\n      xv: laserSpeed * Math.cos(ship.a) / FPS,\n      yv: laserSpeed * Math.sin(ship.a) / FPS\n    });\n  }\n\n  ship.canShoot = false;\n};\n\nvar createAsteroidBelt = function createAsteroidBelt() {\n  var x, y;\n\n  for (var i = 0; i < rocksAmount; i++) {\n    do {\n      x = Math.floor(Math.random() * canv.width);\n      y = Math.floor(Math.random() * canv.height);\n    } while (distBetweenShip(ship.x, ship.y, x, y) < rocksSize * 2 + ship.r);\n\n    rocks.push(newAsteroid(x, y));\n  }\n};\n\nvar distBetweenShip = function distBetweenShip(x1, y1, x2, y2) {\n  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n};\n\nvar explodeShip = function explodeShip() {\n  ship.explodeTime = Math.ceil(shipExplodeDur * FPS);\n};\n\nvar newAsteroid = function newAsteroid(x, y) {\n  var rock = {\n    x: x,\n    y: y,\n    xv: Math.random() * rocksSpeed / FPS * (Math.random() < 0.5 ? 1 : -1),\n    yv: Math.random() * rocksSpeed / FPS * (Math.random() < 0.5 ? 1 : -1),\n    r: rocksSize / 2,\n    a: Math.random() * Math.PI * 2,\n    vert: Math.floor(Math.random() * (rocksVert + 1) + rocksVert / 2),\n    offs: []\n  };\n\n  for (var i = 0; i < rock.vert; i++) {\n    rock.offs.push(Math.random() * rockJag * 2 + 1 - rockJag);\n  }\n\n  return rock;\n};\n\nvar keyDown = function keyDown(e) {\n  switch (e.keyCode) {\n    case 32:\n      // space bar (shoot)\n      shootLaser();\n      break;\n\n    case 37:\n      // left arrow (rotate ship left)\n      ship.rotation = turnSpeed / 180 * Math.PI / FPS;\n      break;\n\n    case 38:\n      // up arrow\n      ship.thrusting = true;\n      break;\n\n    case 39:\n      // right arrow\n      ship.rotation = -turnSpeed / 180 * Math.PI / FPS;\n      break;\n  }\n};\n\nvar keyUp = function keyUp(e) {\n  switch (e.keyCode) {\n    case 32:\n      // space bar (shooting again)\n      ship.canShoot = true;\n      break;\n\n    case 37:\n      // left arrow (rotate ship left)\n      ship.rotation = 0;\n      break;\n\n    case 38:\n      // up arrow\n      ship.thrusting = false;\n      break;\n\n    case 39:\n      // right arrow\n      ship.rotation = 0;\n      break;\n  }\n};\n\ndocument.addEventListener(\"keydown\", keyDown);\ndocument.addEventListener(\"keyup\", keyUp);\n\nvar update = function update() {\n  var exploding = ship.explodeTime > 0; //----DRAW SPACE\n\n  ctx.fillStyle = \"black\";\n  ctx.fillRect(0, 0, canv.width, canv.height); //----DRAW SHIP\n\n  if (!exploding) {\n    ctx.strokeStyle = \"white\";\n    ctx.lineWidth = shipSize / 20;\n    ctx.beginPath();\n    ctx.moveTo(ship.x + 4 / 3 * ship.r * Math.cos(ship.a), ship.y - 4 / 3 * ship.r * Math.sin(ship.a));\n    ctx.lineTo( // left side\n    ship.x - ship.r * (2 / 3 * Math.cos(ship.a) + Math.sin(ship.a)), ship.y + ship.r * (2 / 3 * Math.sin(ship.a) - Math.cos(ship.a)));\n    ctx.lineTo( // right side\n    ship.x - ship.r * (2 / 3 * Math.cos(ship.a) - Math.sin(ship.a)), ship.y + ship.r * (2 / 3 * Math.sin(ship.a) + Math.cos(ship.a)));\n    ctx.closePath();\n    ctx.stroke();\n  } else {\n    ctx.fillStyle = \"darkred\";\n    ctx.beginPath();\n    ctx.arc(ship.x, ship.y, ship.r * 1.7, 0, Math.PI * 2, false);\n    ctx.fill();\n    ctx.fillStyle = \"red\";\n    ctx.beginPath();\n    ctx.arc(ship.x, ship.y, ship.r * 1.3, 0, Math.PI * 2, false);\n    ctx.fill();\n    ctx.fillStyle = \"orange\";\n    ctx.beginPath();\n    ctx.arc(ship.x, ship.y, ship.r * 1.1, 0, Math.PI * 2, false);\n    ctx.fill();\n    ctx.fillStyle = \"yellow\";\n    ctx.beginPath();\n    ctx.arc(ship.x, ship.y, ship.r * 1, 0, Math.PI * 2, false);\n    ctx.fill();\n    ctx.fillStyle = \"white\";\n    ctx.beginPath();\n    ctx.arc(ship.x, ship.y, ship.r * 0.5, 0, Math.PI * 2, false);\n    ctx.fill();\n  }\n\n  if (showBounding) {\n    ctx.strokeStyle = \"lime\";\n    ctx.beginPath();\n    ctx.arc(ship.x, ship.y, ship.r, 0, Math.PI * 2, false);\n    ctx.stroke();\n  } //----DRAW THE ASTEROIDS BELT\n\n\n  var x, y, r, a, vert, offs;\n  rocks.forEach(function (rock) {\n    ctx.beginPath();\n    ctx.strokeStyle = \"yellow\";\n    x = rock.x;\n    y = rock.y;\n    r = rock.r;\n    a = rock.a;\n    vert = rock.vert;\n    offs = rock.offs;\n    ctx.lineWidth = shipSize / 20;\n    ctx.moveTo(x + r * offs[0] * Math.cos(a), y + r * offs[0] * Math.sin(a)); //----DRAW THE POLYGONS\n\n    for (var i = 1; i < vert; i++) {\n      ctx.lineTo(x + r * offs[i] * Math.cos(a + i * Math.PI * 2 / vert), y + r * offs[i] * Math.sin(a + i * Math.PI * 2 / vert));\n    }\n\n    ctx.closePath();\n    ctx.stroke();\n\n    if (showBounding) {\n      ctx.strokeStyle = \"lime\";\n      ctx.beginPath();\n      ctx.arc(x, y, r, 0, Math.PI * 2, false);\n      ctx.stroke();\n    } //----MOVE THE ROCKS\n\n\n    rock.x += rock.xv;\n    rock.y += rock.yv;\n\n    if (rock.x < 0 - rock.r) {\n      rock.x = canv.width;\n    } else if (rock.x > canv.width + rock.r) {\n      rock.x = 0;\n    }\n\n    if (rock.y < 0) {\n      rock.y = canv.height;\n    } else if (rock.y > canv.height + rock.r) {\n      rock.y = 0;\n    }\n  }); //----CENTER DOT\n\n  if (showCenterDot) {\n    ctx.fillStyle = \"red\";\n    ctx.fillRect(ship.x - 1, ship.y - 1, 2, 2);\n  } //----THRUST THE SHIP\n\n\n  if (ship.thrusting) {\n    ship.thrust.x += shipThrust * Math.cos(ship.a) / FPS;\n    ship.thrust.y -= shipThrust * Math.sin(ship.a) / FPS;\n  } else {\n    ship.thrust.x -= friction * ship.thrust.x / FPS;\n    ship.thrust.y -= friction * ship.thrust.y / FPS;\n  }\n\n  if (!exploding) {\n    for (var i = 0; i < rocks.length; i++) {\n      if (distBetweenShip(ship.x, ship.y, rocks[i].x, rocks[i].y) < ship.r + rocks[i].r) {\n        explodeShip();\n      }\n    }\n\n    ship.x += ship.thrust.x;\n    ship.y += ship.thrust.y;\n    ship.a += ship.rotation;\n  } //----MOVE THE SHIP\n\n\n  if (ship.x < 0 - ship.r) {\n    ship.x = canv.width;\n  } else if (ship.x > canv.width + ship.r) {\n    ship.x = 0;\n  }\n\n  if (ship.y < 0) {\n    ship.y = canv.height;\n  } else if (ship.y > canv.height + ship.r) {\n    ship.y = 0;\n  }\n};\n\ncreateAsteroidBelt();\nsetInterval(update, 1000 / FPS);\n\n//# sourceURL=webpack:///./src/index.js?");

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