/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\andre\\Desktop\\laravel-scss-zero\\resources\\js\\app.js: Unexpected token, expected \",\" (14:16)\n\n\u001b[0m \u001b[90m 12 |\u001b[39m     }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 |\u001b[39m     method\u001b[33m:\u001b[39m{\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 |\u001b[39m       \u001b[36mif\u001b[39m (\u001b[33mSesso\u001b[39m \u001b[33m==\u001b[39m \u001b[32m'Uomo'\u001b[39m) {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 15 |\u001b[39m         \u001b[33mUomini\u001b[39m\t\u001b[35m10\u001b[39m x (peso \u001b[36min\u001b[39m kg) \u001b[33m+\u001b[39m \u001b[35m6\u001b[39m\u001b[33m,\u001b[39m\u001b[35m25\u001b[39m x (altezza \u001b[36min\u001b[39m cm) – \u001b[35m5\u001b[39m x età \u001b[33m+\u001b[39m \u001b[35m5\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 16 |\u001b[39m       }\u001b[36melse\u001b[39m \u001b[36mif\u001b[39m (\u001b[33mSesso\u001b[39m \u001b[33m==\u001b[39m \u001b[32m'Donna'\u001b[39m){\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m         \u001b[33mDonne\u001b[39m\t\u001b[35m10\u001b[39m x (peso \u001b[36min\u001b[39m kg) \u001b[33m+\u001b[39m \u001b[35m6\u001b[39m\u001b[33m,\u001b[39m\u001b[35m25\u001b[39m x (altezza \u001b[36min\u001b[39m cm) – \u001b[35m5\u001b[39m x età – \u001b[35m161\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\andre\\Desktop\\laravel-scss-zero\\node_modules\\@babel\\parser\\lib\\index.js:807:17)\n    at Parser.raiseWithData (C:\\Users\\andre\\Desktop\\laravel-scss-zero\\node_modules\\@babel\\parser\\lib\\index.js:800:17)\n    at Parser.raise (C:\\Users\\andre\\Desktop\\laravel-scss-zero\\node_modules\\@babel\\parser\\lib\\index.js:761:17)\n    at Parser.unexpected (C:\\Users\\andre\\Desktop\\laravel-scss-zero\\node_modules\\@babel\\parser\\lib\\index.js:9931:16)\n    at Parser.expect (C:\\Users\\andre\\Desktop\\laravel-scss-zero\\node_modules\\@babel\\parser\\lib\\index.js:9905:28)\n    at Parser.parseBindingList (C:\\Users\\andre\\Desktop\\laravel-scss-zero\\node_modules\\@babel\\parser\\lib\\index.js:10372:14)\n    at Parser.parseFunctionParams (C:\\Users\\andre\\Desktop\\laravel-scss-zero\\node_modules\\@babel\\parser\\lib\\index.js:13207:24)\n    at Parser.parseMethod (C:\\Users\\andre\\Desktop\\laravel-scss-zero\\node_modules\\@babel\\parser\\lib\\index.js:11916:10)\n    at Parser.parseObjectMethod (C:\\Users\\andre\\Desktop\\laravel-scss-zero\\node_modules\\@babel\\parser\\lib\\index.js:11846:19)\n    at Parser.parseObjPropValue (C:\\Users\\andre\\Desktop\\laravel-scss-zero\\node_modules\\@babel\\parser\\lib\\index.js:11879:23)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./resources/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;