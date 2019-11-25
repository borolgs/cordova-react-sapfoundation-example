/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fundamental-styles/dist sync recursive ^\\.\\/.*\\.css$":
/*!*****************************************************************!*\
  !*** ./node_modules/fundamental-styles/dist sync ^\.\/.*\.css$ ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./action-bar.css": "./node_modules/fundamental-styles/dist/action-bar.css",
	"./alert.css": "./node_modules/fundamental-styles/dist/alert.css",
	"./asset-upload.css": "./node_modules/fundamental-styles/dist/asset-upload.css",
	"./badge.css": "./node_modules/fundamental-styles/dist/badge.css",
	"./breadcrumb.css": "./node_modules/fundamental-styles/dist/breadcrumb.css",
	"./button-group.css": "./node_modules/fundamental-styles/dist/button-group.css",
	"./button-split.css": "./node_modules/fundamental-styles/dist/button-split.css",
	"./button.css": "./node_modules/fundamental-styles/dist/button.css",
	"./calendar.css": "./node_modules/fundamental-styles/dist/calendar.css",
	"./checkbox.css": "./node_modules/fundamental-styles/dist/checkbox.css",
	"./counter.css": "./node_modules/fundamental-styles/dist/counter.css",
	"./dropdown.css": "./node_modules/fundamental-styles/dist/dropdown.css",
	"./fieldset.css": "./node_modules/fundamental-styles/dist/fieldset.css",
	"./fonts.css": "./node_modules/fundamental-styles/dist/fonts.css",
	"./form-group.css": "./node_modules/fundamental-styles/dist/form-group.css",
	"./form-item.css": "./node_modules/fundamental-styles/dist/form-item.css",
	"./form-label.css": "./node_modules/fundamental-styles/dist/form-label.css",
	"./form-message.css": "./node_modules/fundamental-styles/dist/form-message.css",
	"./form-select.css": "./node_modules/fundamental-styles/dist/form-select.css",
	"./fundamental-styles.css": "./node_modules/fundamental-styles/dist/fundamental-styles.css",
	"./helpers.css": "./node_modules/fundamental-styles/dist/helpers.css",
	"./icon.css": "./node_modules/fundamental-styles/dist/icon.css",
	"./identifier.css": "./node_modules/fundamental-styles/dist/identifier.css",
	"./image.css": "./node_modules/fundamental-styles/dist/image.css",
	"./inline-help.css": "./node_modules/fundamental-styles/dist/inline-help.css",
	"./input-group.css": "./node_modules/fundamental-styles/dist/input-group.css",
	"./input.css": "./node_modules/fundamental-styles/dist/input.css",
	"./label.css": "./node_modules/fundamental-styles/dist/label.css",
	"./layout-grid.css": "./node_modules/fundamental-styles/dist/layout-grid.css",
	"./layout.css": "./node_modules/fundamental-styles/dist/layout.css",
	"./link.css": "./node_modules/fundamental-styles/dist/link.css",
	"./list-group.css": "./node_modules/fundamental-styles/dist/list-group.css",
	"./list.css": "./node_modules/fundamental-styles/dist/list.css",
	"./localization-editor.css": "./node_modules/fundamental-styles/dist/localization-editor.css",
	"./menu.css": "./node_modules/fundamental-styles/dist/menu.css",
	"./modal.css": "./node_modules/fundamental-styles/dist/modal.css",
	"./multi-input.css": "./node_modules/fundamental-styles/dist/multi-input.css",
	"./nav.css": "./node_modules/fundamental-styles/dist/nav.css",
	"./notification.css": "./node_modules/fundamental-styles/dist/notification.css",
	"./overlay.css": "./node_modules/fundamental-styles/dist/overlay.css",
	"./page.css": "./node_modules/fundamental-styles/dist/page.css",
	"./pagination.css": "./node_modules/fundamental-styles/dist/pagination.css",
	"./panel.css": "./node_modules/fundamental-styles/dist/panel.css",
	"./popover.css": "./node_modules/fundamental-styles/dist/popover.css",
	"./product-switch.css": "./node_modules/fundamental-styles/dist/product-switch.css",
	"./product-tile.css": "./node_modules/fundamental-styles/dist/product-tile.css",
	"./radio.css": "./node_modules/fundamental-styles/dist/radio.css",
	"./root.css": "./node_modules/fundamental-styles/dist/root.css",
	"./section.css": "./node_modules/fundamental-styles/dist/section.css",
	"./select.css": "./node_modules/fundamental-styles/dist/select.css",
	"./shellbar.css": "./node_modules/fundamental-styles/dist/shellbar.css",
	"./side-nav.css": "./node_modules/fundamental-styles/dist/side-nav.css",
	"./spinner.css": "./node_modules/fundamental-styles/dist/spinner.css",
	"./status-label.css": "./node_modules/fundamental-styles/dist/status-label.css",
	"./table.css": "./node_modules/fundamental-styles/dist/table.css",
	"./tabs.css": "./node_modules/fundamental-styles/dist/tabs.css",
	"./textarea.css": "./node_modules/fundamental-styles/dist/textarea.css",
	"./tile.css": "./node_modules/fundamental-styles/dist/tile.css",
	"./time.css": "./node_modules/fundamental-styles/dist/time.css",
	"./toggle.css": "./node_modules/fundamental-styles/dist/toggle.css",
	"./token.css": "./node_modules/fundamental-styles/dist/token.css",
	"./tree.css": "./node_modules/fundamental-styles/dist/tree.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/fundamental-styles/dist sync recursive ^\\.\\/.*\\.css$";

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pages_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pages/Main */ "./src/pages/Main.js");



var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pages_Main__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/FileUpload.js":
/*!**************************************!*\
  !*** ./src/components/FileUpload.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fundamental_react_Forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fundamental-react/Forms */ "./node_modules/fundamental-react/Forms/index.js");
/* harmony import */ var fundamental_react_Forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fundamental_react_Forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fundamental_react_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fundamental-react/Button */ "./node_modules/fundamental-react/Button/index.js");
/* harmony import */ var fundamental_react_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fundamental_react_Button__WEBPACK_IMPORTED_MODULE_4__);





var imagePreviewStyle = {
  width: '100px',
  height: '100px'
};

var FileUpload = function FileUpload() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      msg = _useState4[0],
      setMsg = _useState4[1];

  var handleSelectFile = function handleSelectFile(e) {
    setFile(e.target.files[0]);
    setMsg(null);
  };

  var handleUpload = function handleUpload() {
    var formData, res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleUpload$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            formData = new FormData();
            formData.append('file', file);
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch('https://test-file-upload.glitch.me/upload', {
              method: 'post',
              body: formData
            }));

          case 4:
            res = _context.sent;

            if (res.status === 201) {
              setMsg('Uploaded');
              setFile();
            } else {
              setMsg('Error');
            }

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(fundamental_react_Forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(fundamental_react_Forms__WEBPACK_IMPORTED_MODULE_3__["FormItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    accept: "image/*",
    onChange: handleSelectFile
  })), file && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(fundamental_react_Forms__WEBPACK_IMPORTED_MODULE_3__["FormItem"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(fundamental_react_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: handleUpload
  }, "Upload")), msg, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(fundamental_react_Forms__WEBPACK_IMPORTED_MODULE_3__["FormItem"], null, file && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: URL.createObjectURL(file),
    style: imagePreviewStyle,
    alt: "Opps..."
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (FileUpload);

/***/ }),

/***/ "./src/components/Hello.js":
/*!*********************************!*\
  !*** ./src/components/Hello.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fundamental_react_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fundamental-react/Button */ "./node_modules/fundamental-react/Button/index.js");
/* harmony import */ var fundamental_react_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fundamental_react_Button__WEBPACK_IMPORTED_MODULE_2__);




var Hello = function Hello() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      toogle = _useState2[0],
      setToogle = _useState2[1];

  var handleClick = function handleClick() {
    setToogle(!toogle);
    navigator.vibrate(300);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Hello ", toogle ? ' Cordova' : 'React'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(fundamental_react_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: handleClick
  }, "Say hello"));
};

/* harmony default export */ __webpack_exports__["default"] = (Hello);

/***/ }),

/***/ "./src/components/HelloTable.js":
/*!**************************************!*\
  !*** ./src/components/HelloTable.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fundamental_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fundamental-react */ "./node_modules/fundamental-react/index.js");
/* harmony import */ var fundamental_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fundamental_react__WEBPACK_IMPORTED_MODULE_1__);



var HelloTable = function HelloTable() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    headers: ['Column Header 1', 'Column Header 2', 'Column Header 3', 'Column Header 4'],
    tableData: [{
      rowData: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
    }, {
      rowData: ['Data 5', 'Data 6', 'Data 7', 'Data 8']
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HelloTable);

/***/ }),

/***/ "./src/components/Tree.js":
/*!********************************!*\
  !*** ./src/components/Tree.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fundamental-react/TreeView */ "./node_modules/fundamental-react/TreeView/index.js");
/* harmony import */ var fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__);



var Tree = function Tree() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Tree, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Col, null, "Row 1"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Col, null, "Row 2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Branch, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Col, null, "Child 1"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Col, null, "Child 2"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Col, null, "Row 3")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Branch, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Col, null, "Child 1")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Branch, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Col, null, "Grandchild 1"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_TreeView__WEBPACK_IMPORTED_MODULE_1__["TreeView"].Col, null, "Grandchild 2")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Tree);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! App */ "./src/App.js");
/* harmony import */ var fiori_fundamentals_dist_fiori_fundamentals_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fiori-fundamentals/dist/fiori-fundamentals.min.css */ "./node_modules/fiori-fundamentals/dist/fiori-fundamentals.min.css");
/* harmony import */ var fiori_fundamentals_dist_fiori_fundamentals_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fiori_fundamentals_dist_fiori_fundamentals_min_css__WEBPACK_IMPORTED_MODULE_3__);




var app = {
  // Application Constructor
  initialize: function initialize() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function onDeviceReady() {
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById('app'));
  }
};
app.initialize();

/***/ }),

/***/ "./src/pages/Main.js":
/*!***************************!*\
  !*** ./src/pages/Main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fundamental_react_LayoutGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fundamental-react/LayoutGrid */ "./node_modules/fundamental-react/LayoutGrid/index.js");
/* harmony import */ var fundamental_react_LayoutGrid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fundamental_react_LayoutGrid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fundamental-react/Panel */ "./node_modules/fundamental-react/Panel/index.js");
/* harmony import */ var fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Hello__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Hello */ "./src/components/Hello.js");
/* harmony import */ var components_HelloTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/HelloTable */ "./src/components/HelloTable.js");
/* harmony import */ var components_Tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Tree */ "./src/components/Tree.js");
/* harmony import */ var components_FileUpload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/FileUpload */ "./src/components/FileUpload.js");







var style = {
  padding: '55px 15px 35px 15px'
};

var Main = function Main() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "fd-page",
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "fd-page__content fd-has-background-color-neutral-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_LayoutGrid__WEBPACK_IMPORTED_MODULE_1__["LayoutGrid"], {
    cols: 1
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2__["Panel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2__["Panel"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Hello__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2__["Panel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2__["Panel"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_HelloTable__WEBPACK_IMPORTED_MODULE_4__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2__["Panel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2__["Panel"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Tree__WEBPACK_IMPORTED_MODULE_5__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2__["Panel"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fundamental_react_Panel__WEBPACK_IMPORTED_MODULE_2__["Panel"].Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_FileUpload__WEBPACK_IMPORTED_MODULE_6__["default"], null))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0IHN5bmMgXlxcLlxcLy4qXFwuY3NzJCIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbGVVcGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVsbG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVsbG9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvTWFpbi5qcyJdLCJuYW1lcyI6WyJBcHAiLCJpbWFnZVByZXZpZXdTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiRmlsZVVwbG9hZCIsInVzZVN0YXRlIiwiZmlsZSIsInNldEZpbGUiLCJtc2ciLCJzZXRNc2ciLCJoYW5kbGVTZWxlY3RGaWxlIiwiZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlVXBsb2FkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInJlcyIsInN0YXR1cyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkhlbGxvIiwidG9vZ2xlIiwic2V0VG9vZ2xlIiwiaGFuZGxlQ2xpY2siLCJuYXZpZ2F0b3IiLCJ2aWJyYXRlIiwiSGVsbG9UYWJsZSIsInJvd0RhdGEiLCJUcmVlIiwiYXBwIiwiaW5pdGlhbGl6ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uRGV2aWNlUmVhZHkiLCJiaW5kIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwicGFkZGluZyIsIk1haW4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFD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Z0JFLDJEQUFDLDZEQUFELFFBQ0UsMkRBQUMsNkRBQUQsQ0FBTyxJQUFQLFFBQ0UsMkRBQUMsNkRBQUQsT0FERixDQURGLENBaEJGLENBREYsQ0FERixDQURGO0FBNEJELENBN0JEOztBQStCZUUsbUVBQWYsRSIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWN0aW9uLWJhci5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9hY3Rpb24tYmFyLmNzc1wiLFxuXHRcIi4vYWxlcnQuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvYWxlcnQuY3NzXCIsXG5cdFwiLi9hc3NldC11cGxvYWQuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvYXNzZXQtdXBsb2FkLmNzc1wiLFxuXHRcIi4vYmFkZ2UuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvYmFkZ2UuY3NzXCIsXG5cdFwiLi9icmVhZGNydW1iLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L2JyZWFkY3J1bWIuY3NzXCIsXG5cdFwiLi9idXR0b24tZ3JvdXAuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvYnV0dG9uLWdyb3VwLmNzc1wiLFxuXHRcIi4vYnV0dG9uLXNwbGl0LmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L2J1dHRvbi1zcGxpdC5jc3NcIixcblx0XCIuL2J1dHRvbi5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9idXR0b24uY3NzXCIsXG5cdFwiLi9jYWxlbmRhci5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9jYWxlbmRhci5jc3NcIixcblx0XCIuL2NoZWNrYm94LmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L2NoZWNrYm94LmNzc1wiLFxuXHRcIi4vY291bnRlci5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9jb3VudGVyLmNzc1wiLFxuXHRcIi4vZHJvcGRvd24uY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvZHJvcGRvd24uY3NzXCIsXG5cdFwiLi9maWVsZHNldC5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9maWVsZHNldC5jc3NcIixcblx0XCIuL2ZvbnRzLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L2ZvbnRzLmNzc1wiLFxuXHRcIi4vZm9ybS1ncm91cC5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9mb3JtLWdyb3VwLmNzc1wiLFxuXHRcIi4vZm9ybS1pdGVtLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L2Zvcm0taXRlbS5jc3NcIixcblx0XCIuL2Zvcm0tbGFiZWwuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvZm9ybS1sYWJlbC5jc3NcIixcblx0XCIuL2Zvcm0tbWVzc2FnZS5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9mb3JtLW1lc3NhZ2UuY3NzXCIsXG5cdFwiLi9mb3JtLXNlbGVjdC5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9mb3JtLXNlbGVjdC5jc3NcIixcblx0XCIuL2Z1bmRhbWVudGFsLXN0eWxlcy5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9mdW5kYW1lbnRhbC1zdHlsZXMuY3NzXCIsXG5cdFwiLi9oZWxwZXJzLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L2hlbHBlcnMuY3NzXCIsXG5cdFwiLi9pY29uLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L2ljb24uY3NzXCIsXG5cdFwiLi9pZGVudGlmaWVyLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L2lkZW50aWZpZXIuY3NzXCIsXG5cdFwiLi9pbWFnZS5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9pbWFnZS5jc3NcIixcblx0XCIuL2lubGluZS1oZWxwLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L2lubGluZS1oZWxwLmNzc1wiLFxuXHRcIi4vaW5wdXQtZ3JvdXAuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvaW5wdXQtZ3JvdXAuY3NzXCIsXG5cdFwiLi9pbnB1dC5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9pbnB1dC5jc3NcIixcblx0XCIuL2xhYmVsLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L2xhYmVsLmNzc1wiLFxuXHRcIi4vbGF5b3V0LWdyaWQuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvbGF5b3V0LWdyaWQuY3NzXCIsXG5cdFwiLi9sYXlvdXQuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvbGF5b3V0LmNzc1wiLFxuXHRcIi4vbGluay5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9saW5rLmNzc1wiLFxuXHRcIi4vbGlzdC1ncm91cC5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9saXN0LWdyb3VwLmNzc1wiLFxuXHRcIi4vbGlzdC5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9saXN0LmNzc1wiLFxuXHRcIi4vbG9jYWxpemF0aW9uLWVkaXRvci5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9sb2NhbGl6YXRpb24tZWRpdG9yLmNzc1wiLFxuXHRcIi4vbWVudS5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9tZW51LmNzc1wiLFxuXHRcIi4vbW9kYWwuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvbW9kYWwuY3NzXCIsXG5cdFwiLi9tdWx0aS1pbnB1dC5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9tdWx0aS1pbnB1dC5jc3NcIixcblx0XCIuL25hdi5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9uYXYuY3NzXCIsXG5cdFwiLi9ub3RpZmljYXRpb24uY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3Qvbm90aWZpY2F0aW9uLmNzc1wiLFxuXHRcIi4vb3ZlcmxheS5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9vdmVybGF5LmNzc1wiLFxuXHRcIi4vcGFnZS5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9wYWdlLmNzc1wiLFxuXHRcIi4vcGFnaW5hdGlvbi5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9wYWdpbmF0aW9uLmNzc1wiLFxuXHRcIi4vcGFuZWwuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvcGFuZWwuY3NzXCIsXG5cdFwiLi9wb3BvdmVyLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L3BvcG92ZXIuY3NzXCIsXG5cdFwiLi9wcm9kdWN0LXN3aXRjaC5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9wcm9kdWN0LXN3aXRjaC5jc3NcIixcblx0XCIuL3Byb2R1Y3QtdGlsZS5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9wcm9kdWN0LXRpbGUuY3NzXCIsXG5cdFwiLi9yYWRpby5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9yYWRpby5jc3NcIixcblx0XCIuL3Jvb3QuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3Qvcm9vdC5jc3NcIixcblx0XCIuL3NlY3Rpb24uY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3Qvc2VjdGlvbi5jc3NcIixcblx0XCIuL3NlbGVjdC5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9zZWxlY3QuY3NzXCIsXG5cdFwiLi9zaGVsbGJhci5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9zaGVsbGJhci5jc3NcIixcblx0XCIuL3NpZGUtbmF2LmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L3NpZGUtbmF2LmNzc1wiLFxuXHRcIi4vc3Bpbm5lci5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC9zcGlubmVyLmNzc1wiLFxuXHRcIi4vc3RhdHVzLWxhYmVsLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L3N0YXR1cy1sYWJlbC5jc3NcIixcblx0XCIuL3RhYmxlLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L3RhYmxlLmNzc1wiLFxuXHRcIi4vdGFicy5jc3NcIjogXCIuL25vZGVfbW9kdWxlcy9mdW5kYW1lbnRhbC1zdHlsZXMvZGlzdC90YWJzLmNzc1wiLFxuXHRcIi4vdGV4dGFyZWEuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvdGV4dGFyZWEuY3NzXCIsXG5cdFwiLi90aWxlLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L3RpbGUuY3NzXCIsXG5cdFwiLi90aW1lLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L3RpbWUuY3NzXCIsXG5cdFwiLi90b2dnbGUuY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvdG9nZ2xlLmNzc1wiLFxuXHRcIi4vdG9rZW4uY3NzXCI6IFwiLi9ub2RlX21vZHVsZXMvZnVuZGFtZW50YWwtc3R5bGVzL2Rpc3QvdG9rZW4uY3NzXCIsXG5cdFwiLi90cmVlLmNzc1wiOiBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0L3RyZWUuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL2Z1bmRhbWVudGFsLXN0eWxlcy9kaXN0IHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmNzcyRcIjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFpbiBmcm9tICdwYWdlcy9NYWluJztcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICByZXR1cm4gPE1haW4gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1JdGVtIH0gZnJvbSAnZnVuZGFtZW50YWwtcmVhY3QvRm9ybXMnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnZnVuZGFtZW50YWwtcmVhY3QvQnV0dG9uJztcblxuY29uc3QgaW1hZ2VQcmV2aWV3U3R5bGUgPSB7IHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcgfTtcblxuY29uc3QgRmlsZVVwbG9hZCA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVTZWxlY3RGaWxlID0gZSA9PiB7XG4gICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7XG4gICAgc2V0TXNnKG51bGwpO1xuICB9O1xuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly90ZXN0LWZpbGUtdXBsb2FkLmdsaXRjaC5tZS91cGxvYWQnLCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgIH0pO1xuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgIHNldE1zZygnVXBsb2FkZWQnKTtcbiAgICAgIHNldEZpbGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TXNnKCdFcnJvcicpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXA+XG4gICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBvbkNoYW5nZT17aGFuZGxlU2VsZWN0RmlsZX0gLz5cbiAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICB7ZmlsZSAmJiAoXG4gICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVVwbG9hZH0+VXBsb2FkPC9CdXR0b24+XG4gICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICApfVxuICAgICAge21zZ31cbiAgICAgIDxGb3JtSXRlbT57ZmlsZSAmJiA8aW1nIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKX0gc3R5bGU9e2ltYWdlUHJldmlld1N0eWxlfSBhbHQ9XCJPcHBzLi4uXCIgLz59PC9Gb3JtSXRlbT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdmdW5kYW1lbnRhbC1yZWFjdC9CdXR0b24nO1xuXG5jb25zdCBIZWxsbyA9ICgpID0+IHtcbiAgY29uc3QgW3Rvb2dsZSwgc2V0VG9vZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICBzZXRUb29nbGUoIXRvb2dsZSk7XG4gICAgbmF2aWdhdG9yLnZpYnJhdGUoMzAwKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+SGVsbG8ge3Rvb2dsZSA/ICcgQ29yZG92YScgOiAnUmVhY3QnfTwvaDE+XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5TYXkgaGVsbG88L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnZnVuZGFtZW50YWwtcmVhY3QnO1xuXG5jb25zdCBIZWxsb1RhYmxlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUYWJsZVxuICAgICAgaGVhZGVycz17WydDb2x1bW4gSGVhZGVyIDEnLCAnQ29sdW1uIEhlYWRlciAyJywgJ0NvbHVtbiBIZWFkZXIgMycsICdDb2x1bW4gSGVhZGVyIDQnXX1cbiAgICAgIHRhYmxlRGF0YT17W1xuICAgICAgICB7XG4gICAgICAgICAgcm93RGF0YTogWydEYXRhIDEnLCAnRGF0YSAyJywgJ0RhdGEgMycsICdEYXRhIDQnXSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJvd0RhdGE6IFsnRGF0YSA1JywgJ0RhdGEgNicsICdEYXRhIDcnLCAnRGF0YSA4J10sXG4gICAgICAgIH0sXG4gICAgICBdfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWxsb1RhYmxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRyZWVWaWV3IH0gZnJvbSAnZnVuZGFtZW50YWwtcmVhY3QvVHJlZVZpZXcnO1xuXG5jb25zdCBUcmVlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUcmVlVmlldz5cbiAgICAgIDxUcmVlVmlldy5UcmVlPlxuICAgICAgICA8VHJlZVZpZXcuSXRlbT5cbiAgICAgICAgICA8VHJlZVZpZXcuUm93PlxuICAgICAgICAgICAgPFRyZWVWaWV3LkNvbD5Sb3cgMTwvVHJlZVZpZXcuQ29sPlxuICAgICAgICAgIDwvVHJlZVZpZXcuUm93PlxuICAgICAgICA8L1RyZWVWaWV3Lkl0ZW0+XG4gICAgICAgIDxUcmVlVmlldy5JdGVtPlxuICAgICAgICAgIDxUcmVlVmlldy5Sb3c+XG4gICAgICAgICAgICA8VHJlZVZpZXcuQ29sPlJvdyAyPC9UcmVlVmlldy5Db2w+XG4gICAgICAgICAgPC9UcmVlVmlldy5Sb3c+XG4gICAgICAgICAgPFRyZWVWaWV3LkJyYW5jaD5cbiAgICAgICAgICAgIDxUcmVlVmlldy5JdGVtPlxuICAgICAgICAgICAgICA8VHJlZVZpZXcuUm93PlxuICAgICAgICAgICAgICAgIDxUcmVlVmlldy5Db2w+Q2hpbGQgMTwvVHJlZVZpZXcuQ29sPlxuICAgICAgICAgICAgICA8L1RyZWVWaWV3LlJvdz5cbiAgICAgICAgICAgIDwvVHJlZVZpZXcuSXRlbT5cbiAgICAgICAgICAgIDxUcmVlVmlldy5JdGVtPlxuICAgICAgICAgICAgICA8VHJlZVZpZXcuUm93PlxuICAgICAgICAgICAgICAgIDxUcmVlVmlldy5Db2w+Q2hpbGQgMjwvVHJlZVZpZXcuQ29sPlxuICAgICAgICAgICAgICA8L1RyZWVWaWV3LlJvdz5cbiAgICAgICAgICAgIDwvVHJlZVZpZXcuSXRlbT5cbiAgICAgICAgICA8L1RyZWVWaWV3LkJyYW5jaD5cbiAgICAgICAgPC9UcmVlVmlldy5JdGVtPlxuICAgICAgICA8VHJlZVZpZXcuSXRlbT5cbiAgICAgICAgICA8VHJlZVZpZXcuUm93PlxuICAgICAgICAgICAgPFRyZWVWaWV3LkNvbD5Sb3cgMzwvVHJlZVZpZXcuQ29sPlxuICAgICAgICAgIDwvVHJlZVZpZXcuUm93PlxuICAgICAgICAgIDxUcmVlVmlldy5CcmFuY2g+XG4gICAgICAgICAgICA8VHJlZVZpZXcuSXRlbT5cbiAgICAgICAgICAgICAgPFRyZWVWaWV3LlJvdz5cbiAgICAgICAgICAgICAgICA8VHJlZVZpZXcuQ29sPkNoaWxkIDE8L1RyZWVWaWV3LkNvbD5cbiAgICAgICAgICAgICAgPC9UcmVlVmlldy5Sb3c+XG4gICAgICAgICAgICAgIDxUcmVlVmlldy5CcmFuY2g+XG4gICAgICAgICAgICAgICAgPFRyZWVWaWV3Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICA8VHJlZVZpZXcuUm93PlxuICAgICAgICAgICAgICAgICAgICA8VHJlZVZpZXcuQ29sPkdyYW5kY2hpbGQgMTwvVHJlZVZpZXcuQ29sPlxuICAgICAgICAgICAgICAgICAgPC9UcmVlVmlldy5Sb3c+XG4gICAgICAgICAgICAgICAgPC9UcmVlVmlldy5JdGVtPlxuICAgICAgICAgICAgICAgIDxUcmVlVmlldy5JdGVtPlxuICAgICAgICAgICAgICAgICAgPFRyZWVWaWV3LlJvdz5cbiAgICAgICAgICAgICAgICAgICAgPFRyZWVWaWV3LkNvbD5HcmFuZGNoaWxkIDI8L1RyZWVWaWV3LkNvbD5cbiAgICAgICAgICAgICAgICAgIDwvVHJlZVZpZXcuUm93PlxuICAgICAgICAgICAgICAgIDwvVHJlZVZpZXcuSXRlbT5cbiAgICAgICAgICAgICAgPC9UcmVlVmlldy5CcmFuY2g+XG4gICAgICAgICAgICA8L1RyZWVWaWV3Lkl0ZW0+XG4gICAgICAgICAgPC9UcmVlVmlldy5CcmFuY2g+XG4gICAgICAgIDwvVHJlZVZpZXcuSXRlbT5cbiAgICAgIDwvVHJlZVZpZXcuVHJlZT5cbiAgICA8L1RyZWVWaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJlZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBcHAgZnJvbSAnQXBwJztcblxuaW1wb3J0ICdmaW9yaS1mdW5kYW1lbnRhbHMvZGlzdC9maW9yaS1mdW5kYW1lbnRhbHMubWluLmNzcyc7XG5cbnZhciBhcHAgPSB7XG4gIC8vIEFwcGxpY2F0aW9uIENvbnN0cnVjdG9yXG4gIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RldmljZXJlYWR5JywgdGhpcy5vbkRldmljZVJlYWR5LmJpbmQodGhpcyksIGZhbHNlKTtcbiAgfSxcblxuICAvLyBkZXZpY2VyZWFkeSBFdmVudCBIYW5kbGVyXG4gIC8vXG4gIC8vIEJpbmQgYW55IGNvcmRvdmEgZXZlbnRzIGhlcmUuIENvbW1vbiBldmVudHMgYXJlOlxuICAvLyAncGF1c2UnLCAncmVzdW1lJywgZXRjLlxuICBvbkRldmljZVJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICBSZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiAgfSxcbn07XG5cbmFwcC5pbml0aWFsaXplKCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGF5b3V0R3JpZCB9IGZyb20gJ2Z1bmRhbWVudGFsLXJlYWN0L0xheW91dEdyaWQnO1xuaW1wb3J0IHsgUGFuZWwgfSBmcm9tICdmdW5kYW1lbnRhbC1yZWFjdC9QYW5lbCc7XG5cbmltcG9ydCBIZWxsbyBmcm9tICdjb21wb25lbnRzL0hlbGxvJztcbmltcG9ydCBIZWxsb1RhYmxlIGZyb20gJ2NvbXBvbmVudHMvSGVsbG9UYWJsZSc7XG5pbXBvcnQgVHJlZSBmcm9tICdjb21wb25lbnRzL1RyZWUnO1xuaW1wb3J0IEZpbGVVcGxvYWQgZnJvbSAnY29tcG9uZW50cy9GaWxlVXBsb2FkJztcblxuY29uc3Qgc3R5bGUgPSB7IHBhZGRpbmc6ICc1NXB4IDE1cHggMzVweCAxNXB4JyB9O1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImZkLXBhZ2VcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZC1wYWdlX19jb250ZW50IGZkLWhhcy1iYWNrZ3JvdW5kLWNvbG9yLW5ldXRyYWwtMlwiPlxuICAgICAgICA8TGF5b3V0R3JpZCBjb2xzPXsxfT5cbiAgICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgICA8UGFuZWwuQm9keT5cbiAgICAgICAgICAgICAgPEhlbGxvIC8+XG4gICAgICAgICAgICA8L1BhbmVsLkJvZHk+XG4gICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgICA8UGFuZWw+XG4gICAgICAgICAgICA8UGFuZWwuQm9keT5cbiAgICAgICAgICAgICAgPEhlbGxvVGFibGUgLz5cbiAgICAgICAgICAgIDwvUGFuZWwuQm9keT5cbiAgICAgICAgICA8L1BhbmVsPlxuICAgICAgICAgIDxQYW5lbD5cbiAgICAgICAgICAgIDxQYW5lbC5Cb2R5PlxuICAgICAgICAgICAgICA8VHJlZSAvPlxuICAgICAgICAgICAgPC9QYW5lbC5Cb2R5PlxuICAgICAgICAgIDwvUGFuZWw+XG4gICAgICAgICAgPFBhbmVsPlxuICAgICAgICAgICAgPFBhbmVsLkJvZHk+XG4gICAgICAgICAgICAgIDxGaWxlVXBsb2FkIC8+XG4gICAgICAgICAgICA8L1BhbmVsLkJvZHk+XG4gICAgICAgICAgPC9QYW5lbD5cbiAgICAgICAgPC9MYXlvdXRHcmlkPlxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=