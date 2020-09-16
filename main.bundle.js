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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  background-color: pink; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "html {\n  background-color: #37515C;\n  border: 2px solid #000;\n  height: 100vh;\n  background-image: linear-gradient(to right, #38515c, #405864, #48606b, #516773, #596f7b, #59727e, #597682, #597985, #507884, #457782, #3a7680, #2e757d); }\n\nbody {\n  box-sizing: border-box;\n  font-family: 'Open Sans', sans-serif;\n  margin: auto;\n  background-image: linear-gradient(to right, #38515c, #405864, #48606b, #516773, #596f7b, #59727e, #597682, #597985, #507884, #457782, #3a7680, #2e757d); }\n\nmain {\n  background-color: #37515C;\n  background-image: linear-gradient(to right, #38515c, #405864, #48606b, #516773, #596f7b, #59727e, #597682, #597985, #507884, #457782, #3a7680, #2e757d);\n  height: 100%;\n  width: 100%; }\n\nh1 {\n  border-right: 2px solid #000;\n  font-size: auto;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 10px;\n  text-align: center;\n  width: 30%;\n  font-family: 'Yellowtail', cursive;\n  box-shadow: 5px 10px 18px #647A85; }\n\n.main-header {\n  background-color: #F1F1E6;\n  border: 2px solid #000;\n  display: flex;\n  height: 95px;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%; }\n\n.main-header > button {\n  height: 40px;\n  width: 65px;\n  font-size: 65%; }\n\n.main-header > input {\n  height: 30px;\n  font-size: 65%; }\n\n.navButton {\n  background-color: #F1F1E6;\n  border-left: 1px solid #000;\n  border-right: 1px solid #000;\n  width: auto;\n  font-size: 130%;\n  margin: 1%;\n  box-shadow: 5px 10px 18px #647A85; }\n\n.user-info {\n  font-size: 140%;\n  margin: auto;\n  text-align: center;\n  width: 35%; }\n\n.search-bar {\n  display: flex;\n  height: 100%;\n  margin: 10px 0px 10px 0px;\n  width: auto; }\n\n.search-tag:hover,\n.search-name:hover,\n.search-tag:hover,\n.search-image:hover,\n.card-button:hover,\n.navButton:hover,\n.search-button:hover,\n.cook-button:hover {\n  background-color: #5dc3eb;\n  box-shadow: 5px 10px 18px #647A85;\n  cursor: pointer; }\n\n.cook-button {\n  font-family: 'Yellowtail', cursive;\n  background-color: #C3C2C6;\n  box-shadow: 5px 10px 18px #647A85;\n  border: 1px solid #000;\n  background-color: #F1F1E6;\n  border-bottom-left-radius: 7%;\n  border-bottom-right-radius: 7%;\n  border-top-left-radius: 1%;\n  border-top-right-radius: 1%; }\n\n.search-tag:active,\n.search-name:active,\n.search-tag:active,\n.search-image:active,\n.card-button:active,\n.navButton:active,\n.search-button:active {\n  background-color: #C3C2C6;\n  box-shadow: 5px 10px 18px #647A85; }\n\n.card-button {\n  border: 1px solid #000;\n  height: 27px;\n  margin: 3px;\n  width: 27px;\n  box-shadow: 5px 10px 18px #647A85; }\n\n.add-button {\n  background-color: #F1F1E6;\n  background-image: url(https://image.flaticon.com/icons/svg/32/32339.svg);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  box-shadow: 5px 10px 18px #647A85; }\n\n.hidden {\n  display: none; }\n\n.favorite {\n  background-color: #F1F1E6;\n  background-image: url(https://image.flaticon.com/icons/svg/149/149222.svg);\n  background-repeat: no-repeat;\n  background-position: center; }\n\n.all-cards {\n  display: grid;\n  grid-gap: 30px;\n  grid-template-columns: repeat(auto-fill, 300px);\n  justify-content: center;\n  padding: 30px 0 30px 30px;\n  width: 95.5vw; }\n\nimg {\n  cursor: pointer; }\n\n.card {\n  background-color: #F1F1E6;\n  border: 3px solid #000;\n  width: 300px;\n  box-shadow: 5px 10px 18px #647A85;\n  border-bottom-left-radius: 7%;\n  border-bottom-right-radius: 7%;\n  border-top-left-radius: 1%;\n  border-top-right-radius: 1%; }\n\n.card-header {\n  background-color: #F1F1E6;\n  background-color: #2F757D;\n  border-bottom: 1px solid #000;\n  display: flex;\n  justify-content: space-between; }\n\n.all {\n  grid-gap: 0px;\n  grid-template-columns: repeat(1, 1fr); }\n\n.all-recipe-info,\nol {\n  color: #F1F1E6;\n  font-size: 220%;\n  width: 100%; }\n\nh3 {\n  color: #F1F1E6;\n  font-size: 250%; }\n\n.recipe-name {\n  display: block;\n  font-size: 150%;\n  text-align: center; }\n\n.card-picture:hover {\n  opacity: 0.7; }\n\n.card-body {\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  justify-content: space-between;\n  height: 90%; }\n\n.card-picture:active {\n  border: 2px solid #000; }\n\n.card-picture {\n  border: 1px solid #000;\n  height: 200px;\n  margin: 10px 3% 8px 2.6%;\n  width: 94%;\n  border-radius: 2%;\n  box-shadow: 5px 10px 18px #647A85; }\n\n.favorite-active {\n  background-image: url(https://image.flaticon.com/icons/svg/148/148841.svg);\n  background-repeat: no-repeat; }\n\n.search-buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-right: 15px;\n  padding-left: 15px; }\n\n.search-name, .search-tag {\n  border: 1px solid #000;\n  box-shadow: 5px 10px 18px #647A85; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/data/ingredients.js":
/*!*********************************!*\
  !*** ./src/data/ingredients.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let ingredientsData = [
  {
    "id": 20081,
    "name": "wheat flour",
    "estimatedCostInCents": 142
  },
  {
    "id": 18372,
    "name": "bicarbonate of soda",
    "estimatedCostInCents": 582
  },
  {
    "id": 1123,
    "name": "eggs",
    "estimatedCostInCents": 472
  },
  {
    "id": 19335,
    "name": "sucrose",
    "estimatedCostInCents": 902
  },
  {
    "id": 19206,
    "name": "instant vanilla pudding",
    "estimatedCostInCents": 660
  },
  {
    "id": 19334,
    "name": "brown sugar",
    "estimatedCostInCents": 559
  },
  {
    "id": 2047,
    "name": "salt",
    "estimatedCostInCents": 280
  },
  {
    "id": 1012047,
    "name": "fine sea salt",
    "estimatedCostInCents": 528
  },
  {
    "id": 10019903,
    "name": "semi sweet chips",
    "estimatedCostInCents": 253
  },
  {
    "id": 1145,
    "name": "unsalted butter",
    "estimatedCostInCents": 617
  },
  {
    "id": 2050,
    "name": "vanilla",
    "estimatedCostInCents": 926
  },
  {
    "id": 1009016,
    "name": "apple cider",
    "estimatedCostInCents": 468
  },
  {
    "id": 9003,
    "name": "apple",
    "estimatedCostInCents": 207
  },
  {
    "id": 20027,
    "name": "corn starch",
    "estimatedCostInCents": 236
  },
  {
    "id": 1002046,
    "name": "dijon style mustard",
    "estimatedCostInCents": 619
  },
  {
    "id": 11215,
    "name": "whole garlic clove",
    "estimatedCostInCents": 220
  },
  {
    "id": 1012046,
    "name": "whole grain dijon mustard",
    "estimatedCostInCents": 867
  },
  {
    "id": 19911,
    "name": "maple",
    "estimatedCostInCents": 349
  },
  {
    "id": 16112,
    "name": "miso",
    "estimatedCostInCents": 978
  },
  {
    "id": 10010062,
    "name": "pork chop",
    "estimatedCostInCents": 834
  },
  {
    "id": 1102047,
    "name": "s&p",
    "estimatedCostInCents": 524
  },
  {
    "id": 16124,
    "name": "soy sauce",
    "estimatedCostInCents": 486
  },
  {
    "id": 1016168,
    "name": "sriracha sauce",
    "estimatedCostInCents": 576
  },
  {
    "id": 1002030,
    "name": "black pepper",
    "estimatedCostInCents": 441
  },
  {
    "id": 1001,
    "name": "butter",
    "estimatedCostInCents": 618
  },
  {
    "id": 4582,
    "name": "oil",
    "estimatedCostInCents": 807
  },
  {
    "id": 2031,
    "name": "red pepper powder",
    "estimatedCostInCents": 583
  },
  {
    "id": 5100,
    "name": "chicken wing",
    "estimatedCostInCents": 593
  },
  {
    "id": 2009,
    "name": "red chili powder",
    "estimatedCostInCents": 499
  },
  {
    "id": 1022020,
    "name": "garlic powder",
    "estimatedCostInCents": 344
  },
  {
    "id": 6168,
    "name": "tabasco sauce",
    "estimatedCostInCents": 859
  },
  {
    "id": 9176,
    "name": "mangoes",
    "estimatedCostInCents": 425
  },
  {
    "id": 2026,
    "name": "onion powder",
    "estimatedCostInCents": 597
  },
  {
    "id": 1042047,
    "name": "seasoned salt",
    "estimatedCostInCents": 334
  },
  {
    "id": 18371,
    "name": "baking powder",
    "estimatedCostInCents": 346
  },
  {
    "id": 9040,
    "name": "ripe banana",
    "estimatedCostInCents": 331
  },
  {
    "id": 20011,
    "name": "buck wheat flour",
    "estimatedCostInCents": 865
  },
  {
    "id": 1230,
    "name": "buttermilk",
    "estimatedCostInCents": 773
  },
  {
    "id": 19296,
    "name": "runny honey",
    "estimatedCostInCents": 742
  },
  {
    "id": 16098,
    "name": "peanut butter",
    "estimatedCostInCents": 490
  },
  {
    "id": 2048,
    "name": "apple cider vinegar",
    "estimatedCostInCents": 532
  },
  {
    "id": 20090,
    "name": "brown rice flour",
    "estimatedCostInCents": 667
  },
  {
    "id": 93784,
    "name": "brown rice syrup",
    "estimatedCostInCents": 126
  },
  {
    "id": 1124,
    "name": "egg albumen",
    "estimatedCostInCents": 304
  },
  {
    "id": 93625,
    "name": "evaporated cane juice",
    "estimatedCostInCents": 118
  },
  {
    "id": 12220,
    "name": "flax meal",
    "estimatedCostInCents": 296
  },
  {
    "id": 10118375,
    "name": "instant yeast",
    "estimatedCostInCents": 383
  },
  {
    "id": 19304,
    "name": "unsulfured molasses",
    "estimatedCostInCents": 925
  },
  {
    "id": 11413,
    "name": "Potato Starch Flour",
    "estimatedCostInCents": 895
  },
  {
    "id": 93696,
    "name": "tapioca starch",
    "estimatedCostInCents": 656
  },
  {
    "id": 93760,
    "name": "Whole Grain Teff Flour",
    "estimatedCostInCents": 539
  },
  {
    "id": 14412,
    "name": "ice water",
    "estimatedCostInCents": 625
  },
  {
    "id": 93626,
    "name": "xanthan gum",
    "estimatedCostInCents": 625
  },
  {
    "id": 19350,
    "name": "corn syrup",
    "estimatedCostInCents": 441
  },
  {
    "id": 9099,
    "name": "fruit cocktail",
    "estimatedCostInCents": 953
  },
  {
    "id": 12061,
    "name": "whole almonds",
    "estimatedCostInCents": 1029
  },
  {
    "id": 12104,
    "name": "coconut",
    "estimatedCostInCents": 918
  },
  {
    "id": 12115,
    "name": "coconut cream",
    "estimatedCostInCents": 304
  },
  {
    "id": 4047,
    "name": "coconut oil",
    "estimatedCostInCents": 152
  },
  {
    "id": 10019071,
    "name": "dark chocolate morsels",
    "estimatedCostInCents": 632
  },
  {
    "id": 8212,
    "name": "granola cereal",
    "estimatedCostInCents": 381
  },
  {
    "id": 8121,
    "name": "oatmeal",
    "estimatedCostInCents": 659
  },
  {
    "id": 12142,
    "name": "pecan",
    "estimatedCostInCents": 314
  },
  {
    "id": 93740,
    "name": "blanched almond flour",
    "estimatedCostInCents": 986
  },
  {
    "id": 1125,
    "name": "egg yolks",
    "estimatedCostInCents": 889
  },
  {
    "id": 12023,
    "name": "sesame seeds",
    "estimatedCostInCents": 886
  },
  {
    "id": 1015062,
    "name": "chicken tenders",
    "estimatedCostInCents": 657
  },
  {
    "id": 10011109,
    "name": "slaw mix",
    "estimatedCostInCents": 681
  },
  {
    "id": 10116098,
    "name": "creamy peanut butter",
    "estimatedCostInCents": 152
  },
  {
    "id": 2064,
    "name": "mint",
    "estimatedCostInCents": 575
  },
  {
    "id": 2021,
    "name": "powdered ginger",
    "estimatedCostInCents": 783
  },
  {
    "id": 9160,
    "name": "juice of lime",
    "estimatedCostInCents": 477
  },
  {
    "id": 9266,
    "name": "pineapple",
    "estimatedCostInCents": 834
  },
  {
    "id": 11135,
    "name": "cauliflower",
    "estimatedCostInCents": 486
  },
  {
    "id": 6172,
    "name": "chicken stock",
    "estimatedCostInCents": 454
  },
  {
    "id": 93632,
    "name": "ghee",
    "estimatedCostInCents": 370
  },
  {
    "id": 12120,
    "name": "hazelnut",
    "estimatedCostInCents": 812
  },
  {
    "id": 93690,
    "name": "nutritional yeast flakes",
    "estimatedCostInCents": 969
  },
  {
    "id": 11282,
    "name": "onions",
    "estimatedCostInCents": 439
  },
  {
    "id": 10010123,
    "name": "proscuitto",
    "estimatedCostInCents": 217
  },
  {
    "id": 11096,
    "name": "rapini",
    "estimatedCostInCents": 846
  },
  {
    "id": 6150,
    "name": "bar b que sauce",
    "estimatedCostInCents": 966
  },
  {
    "id": 6194,
    "name": "chicken broth",
    "estimatedCostInCents": 983
  },
  {
    "id": 93627,
    "name": "liquid smoke",
    "estimatedCostInCents": 412
  },
  {
    "id": 2028,
    "name": "paprika",
    "estimatedCostInCents": 302
  },
  {
    "id": 10072,
    "name": "pork shoulder",
    "estimatedCostInCents": 969
  },
  {
    "id": 6971,
    "name": "worcestershire",
    "estimatedCostInCents": 57
  },
  {
    "id": 93607,
    "name": "almondmilk",
    "estimatedCostInCents": 787
  },
  {
    "id": 18942,
    "name": "graham cracker crust",
    "estimatedCostInCents": 655
  },
  {
    "id": 1012010,
    "name": "ground cinnamon",
    "estimatedCostInCents": 742
  },
  {
    "id": 2025,
    "name": "nutmeg powder",
    "estimatedCostInCents": 480
  },
  {
    "id": 43274,
    "name": "low fat cream cheese",
    "estimatedCostInCents": 1048
  },
  {
    "id": 8120,
    "name": "whole grain rolled oats",
    "estimatedCostInCents": 98
  },
  {
    "id": 11424,
    "name": "canned pumpkin",
    "estimatedCostInCents": 852
  },
  {
    "id": 9016,
    "name": "apple juice",
    "estimatedCostInCents": 710
  },
  {
    "id": 18047,
    "name": "raisin bread",
    "estimatedCostInCents": 222
  },
  {
    "id": 1089003,
    "name": "grannysmith apple",
    "estimatedCostInCents": 459
  },
  {
    "id": 1077,
    "name": "full-fat milk",
    "estimatedCostInCents": 276
  },
  {
    "id": 11297,
    "name": "flat leaf parsley leaves",
    "estimatedCostInCents": 1030
  },
  {
    "id": 1032009,
    "name": "dried red chili",
    "estimatedCostInCents": 1015
  },
  {
    "id": 15152,
    "name": "jumbo shrimp",
    "estimatedCostInCents": 804
  },
  {
    "id": 11294,
    "name": "vidalia onion",
    "estimatedCostInCents": 595
  },
  {
    "id": 11007,
    "name": "artichokes",
    "estimatedCostInCents": 203
  },
  {
    "id": 9150,
    "name": "lemon",
    "estimatedCostInCents": 766
  },
  {
    "id": 9156,
    "name": "lemon peel",
    "estimatedCostInCents": 630
  },
  {
    "id": 18069,
    "name": "gluten-free white sandwich bread",
    "estimatedCostInCents": 863
  },
  {
    "id": 1033,
    "name": "parmesan cheese",
    "estimatedCostInCents": 398
  },
  {
    "id": 2027,
    "name": "oregano",
    "estimatedCostInCents": 835
  },
  {
    "id": 1034053,
    "name": "extra virgin olive oil",
    "estimatedCostInCents": 305
  },
  {
    "id": 2004,
    "name": "bay leaves",
    "estimatedCostInCents": 785
  },
  {
    "id": 19336,
    "name": "powdered sugar",
    "estimatedCostInCents": 603
  },
  {
    "id": 11143,
    "name": "celery",
    "estimatedCostInCents": 840
  },
  {
    "id": 1129,
    "name": "hardcooked eggs",
    "estimatedCostInCents": 882
  },
  {
    "id": 4641,
    "name": "reduced fat mayo",
    "estimatedCostInCents": 697
  },
  {
    "id": 1011256,
    "name": "skim greek yogurt",
    "estimatedCostInCents": 263
  },
  {
    "id": 11944,
    "name": "hotdog relish",
    "estimatedCostInCents": 391
  },
  {
    "id": 10011282,
    "name": "red onion",
    "estimatedCostInCents": 638
  },
  {
    "id": 11353,
    "name": "idaho potato",
    "estimatedCostInCents": 742
  },
  {
    "id": 10211821,
    "name": "bell pepper",
    "estimatedCostInCents": 741
  },
  {
    "id": 10020048,
    "name": "brown minute rice",
    "estimatedCostInCents": 386
  },
  {
    "id": 93651,
    "name": "italian cheese blend",
    "estimatedCostInCents": 233
  },
  {
    "id": 7927,
    "name": "sweet italian turkey sausage",
    "estimatedCostInCents": 216
  },
  {
    "id": 11549,
    "name": "canned tomato sauce",
    "estimatedCostInCents": 622
  },
  {
    "id": 10120129,
    "name": "bread flour",
    "estimatedCostInCents": 114
  },
  {
    "id": 1053,
    "name": "cream",
    "estimatedCostInCents": 645
  },
  {
    "id": 4053,
    "name": "pure olive oil",
    "estimatedCostInCents": 705
  },
  {
    "id": 19912,
    "name": "agave syrup",
    "estimatedCostInCents": 642
  },
  {
    "id": 10020080,
    "name": "pastry flour",
    "estimatedCostInCents": 497
  },
  {
    "id": 10019334,
    "name": "dark brown sugar",
    "estimatedCostInCents": 501
  },
  {
    "id": 93814,
    "name": "lightly sweetened whipped cream",
    "estimatedCostInCents": 88
  },
  {
    "id": 11206,
    "name": "cucumber",
    "estimatedCostInCents": 262
  },
  {
    "id": 20035,
    "name": "quinoa",
    "estimatedCostInCents": 514
  },
  {
    "id": 11529,
    "name": "heirloom tomatoes",
    "estimatedCostInCents": 321
  },
  {
    "id": 14242,
    "name": "cranberry juice cocktail",
    "estimatedCostInCents": 335
  },
  {
    "id": 14130,
    "name": "cream soda",
    "estimatedCostInCents": 585
  },
  {
    "id": 19177,
    "name": "gelatine",
    "estimatedCostInCents": 1011
  },
  {
    "id": 93645,
    "name": "halloween sprinkles",
    "estimatedCostInCents": 293
  },
  {
    "id": 14051,
    "name": "grey goose vodka",
    "estimatedCostInCents": 373
  },
  {
    "id": 1054,
    "name": "whipped cream",
    "estimatedCostInCents": 689
  },
  {
    "id": 93828,
    "name": "marinated artichoke hearts",
    "estimatedCostInCents": 982
  },
  {
    "id": 11266,
    "name": "crimini mushrooms",
    "estimatedCostInCents": 150
  },
  {
    "id": 1017,
    "name": "cream cheese",
    "estimatedCostInCents": 955
  },
  {
    "id": 1019,
    "name": "feta",
    "estimatedCostInCents": 1003
  },
  {
    "id": 1022027,
    "name": "mixed italian herbs",
    "estimatedCostInCents": 253
  },
  {
    "id": 1082047,
    "name": "kosher salt",
    "estimatedCostInCents": 972
  },
  {
    "id": 10011457,
    "name": "spinach",
    "estimatedCostInCents": 336
  },
  {
    "id": 2044,
    "name": "fresh basil",
    "estimatedCostInCents": 203
  },
  {
    "id": 7036,
    "name": "italian sausage links",
    "estimatedCostInCents": 1010
  },
  {
    "id": 10111549,
    "name": "marinara sauce",
    "estimatedCostInCents": 171
  },
  {
    "id": 1038,
    "name": "pecorino romano cheese",
    "estimatedCostInCents": 50
  },
  {
    "id": 11304,
    "name": "peas",
    "estimatedCostInCents": 768
  },
  {
    "id": 11677,
    "name": "shallots",
    "estimatedCostInCents": 696
  },
  {
    "id": 11020420,
    "name": "pasta shells",
    "estimatedCostInCents": 862
  },
  {
    "id": 1001026,
    "name": "shredded mozzarella",
    "estimatedCostInCents": 184
  },
  {
    "id": 93630,
    "name": "skim milk ricotta cheese",
    "estimatedCostInCents": 395
  },
  {
    "id": 14106,
    "name": "white wine",
    "estimatedCostInCents": 675
  },
  {
    "id": 11463,
    "name": "frozen spinach",
    "estimatedCostInCents": 830
  },
  {
    "id": 1025,
    "name": "pepperjack",
    "estimatedCostInCents": 212
  },
  {
    "id": 10014623,
    "name": "blackberry juice",
    "estimatedCostInCents": 256
  },
  {
    "id": 9302,
    "name": "raspberry",
    "estimatedCostInCents": 247
  },
  {
    "id": 9354,
    "name": "pineapple with juice",
    "estimatedCostInCents": 926
  },
  {
    "id": 9070,
    "name": "sweet cherries",
    "estimatedCostInCents": 184
  },
  {
    "id": 14181,
    "name": "chocolate syrup",
    "estimatedCostInCents": 530
  },
  {
    "id": 10018617,
    "name": "graham cracker crumbs",
    "estimatedCostInCents": 205
  },
  {
    "id": 12135,
    "name": "nuts",
    "estimatedCostInCents": 978
  },
  {
    "id": 9037,
    "name": "haas avocados",
    "estimatedCostInCents": 275
  },
  {
    "id": 16057,
    "name": "garbanzos",
    "estimatedCostInCents": 85
  },
  {
    "id": 2045,
    "name": "dillweed",
    "estimatedCostInCents": 162
  },
  {
    "id": 1256,
    "name": "greek yogurt",
    "estimatedCostInCents": 231
  },
  {
    "id": 9152,
    "name": "lemon juice",
    "estimatedCostInCents": 274
  },
  {
    "id": 11291,
    "name": "spring onions",
    "estimatedCostInCents": 55
  },
  {
    "id": 9236,
    "name": "peaches",
    "estimatedCostInCents": 109
  },
  {
    "id": 19095,
    "name": "icecream",
    "estimatedCostInCents": 447
  },
  {
    "id": 10862,
    "name": "cooked bacon strips",
    "estimatedCostInCents": 868
  },
  {
    "id": 5114,
    "name": "roasted chicken",
    "estimatedCostInCents": 708
  },
  {
    "id": 11333,
    "name": "green peppers",
    "estimatedCostInCents": 303
  },
  {
    "id": 1026,
    "name": "fresh mozzarella",
    "estimatedCostInCents": 290
  },
  {
    "id": 10211529,
    "name": "italian tomato",
    "estimatedCostInCents": 978
  },
  {
    "id": 1011009,
    "name": "white cheddar",
    "estimatedCostInCents": 709
  },
  {
    "estimatedCostInCents": 205
  },
  {
    "id": 98998,
    "name": "balsamic glaze",
    "estimatedCostInCents": 759
  },
  {
    "id": 8030,
    "name": "fruit loops",
    "estimatedCostInCents": 191
  },
  {
    "id": 19116,
    "name": "marshmallow",
    "estimatedCostInCents": 425
  },
  {
    "id": 16158,
    "name": "hummus",
    "estimatedCostInCents": 491
  },
  {
    "id": 2046,
    "name": "prepared yellow mustard",
    "estimatedCostInCents": 300
  },
  {
    "id": 1214,
    "name": "evaporated milk",
    "estimatedCostInCents": 95
  },
  {
    "id": 9214,
    "name": "orange juice concentrate",
    "estimatedCostInCents": 379
  },
  {
    "id": 9216,
    "name": "orange peel",
    "estimatedCostInCents": 882
  },
  {
    "id": 10123,
    "name": "bacon slices",
    "estimatedCostInCents": 817
  },
  {
    "id": 11052,
    "name": "string beans",
    "estimatedCostInCents": 502
  },
  {
    "id": 11959,
    "name": "baby arugula leaves",
    "estimatedCostInCents": 207
  },
  {
    "id": 1004,
    "name": "blue cheese",
    "estimatedCostInCents": 646
  },
  {
    "id": 9252,
    "name": "pear",
    "estimatedCostInCents": 467
  },
  {
    "id": 43408,
    "name": "pear juice",
    "estimatedCostInCents": 163
  },
  {
    "id": 2049,
    "name": "fresh thyme leaves",
    "estimatedCostInCents": 681
  },
  {
    "id": 12155,
    "name": "walnut halves",
    "estimatedCostInCents": 895
  },
  {
    "id": 10011693,
    "name": "canned tomato",
    "estimatedCostInCents": 171
  },
  {
    "id": 11124,
    "name": "carrots",
    "estimatedCostInCents": 136
  },
  {
    "id": 2012,
    "name": "coriander",
    "estimatedCostInCents": 52
  },
  {
    "id": 1002014,
    "name": "comino",
    "estimatedCostInCents": 547
  },
  {
    "id": 11913,
    "name": "frozen corn",
    "estimatedCostInCents": 558
  },
  {
    "id": 11477,
    "name": "zucchini squash",
    "estimatedCostInCents": 742
  },
  {
    "id": 10220445,
    "name": "steamed rice",
    "estimatedCostInCents": 1040
  },
  {
    "id": 2003,
    "name": "ground basil",
    "estimatedCostInCents": 198
  },
  {
    "id": 16018,
    "name": "canned black beans",
    "estimatedCostInCents": 356
  },
  {
    "id": 99223,
    "name": "canned chipotle chilies in adobo",
    "estimatedCostInCents": 299
  },
  {
    "id": 11165,
    "name": "cilantro",
    "estimatedCostInCents": 159
  },
  {
    "id": 10218364,
    "name": "flour tortilla",
    "estimatedCostInCents": 653
  },
  {
    "id": 10611282,
    "name": "white onions",
    "estimatedCostInCents": 449
  },
  {
    "id": 11457,
    "name": "baby spinach leaves",
    "estimatedCostInCents": 668
  },
  {
    "id": 11268,
    "name": "dried shiitake mushroom",
    "estimatedCostInCents": 806
  },
  {
    "id": 10020005,
    "name": "farro",
    "estimatedCostInCents": 286
  },
  {
    "id": 10511282,
    "name": "yellow onion",
    "estimatedCostInCents": 241
  },
  {
    "id": 2069,
    "name": "balsamic vinegar",
    "estimatedCostInCents": 118
  },
  {
    "id": 11250,
    "name": "boston bibb lettuce",
    "estimatedCostInCents": 61
  },
  {
    "id": 11156,
    "name": "fresh chive",
    "estimatedCostInCents": 728
  },
  {
    "id": 4025,
    "name": "mayonnaise",
    "estimatedCostInCents": 630
  },
  {
    "id": 11119,
    "name": "napa cabbage",
    "estimatedCostInCents": 1009
  },
  {
    "id": 11112,
    "name": "red cabbage",
    "estimatedCostInCents": 659
  },
  {
    "id": 98962,
    "name": "sweet chili sauce",
    "estimatedCostInCents": 1001
  },
  {
    "id": 2042,
    "name": "dried thyme",
    "estimatedCostInCents": 307
  },
  {
    "id": 1002020,
    "name": "granulated garlic",
    "estimatedCostInCents": 228
  },
  {
    "id": 10023572,
    "name": "ground chuck",
    "estimatedCostInCents": 600
  },
  {
    "id": 10011250,
    "name": "butterhead lettuce leaves",
    "estimatedCostInCents": 341
  },
  {
    "id": 5064,
    "name": "baked chicken breast",
    "estimatedCostInCents": 1020
  },
  {
    "id": 2015,
    "name": "curry seasoning",
    "estimatedCostInCents": 312
  },
  {
    "id": 1009159,
    "name": "lime peel",
    "estimatedCostInCents": 435
  },
  {
    "id": 98991,
    "name": "mint chutney",
    "estimatedCostInCents": 927
  },
  {
    "id": 9316,
    "name": "strawberry",
    "estimatedCostInCents": 292
  },
  {
    "id": 11090,
    "name": "broccoli crowns",
    "estimatedCostInCents": 256
  },
  {
    "id": 10011821,
    "name": "sweet orange pepper",
    "estimatedCostInCents": 968
  },
  {
    "id": 10218,
    "name": "pork tenderloin",
    "estimatedCostInCents": 845
  },
  {
    "id": 19157,
    "name": "mini m&m",
    "estimatedCostInCents": 552
  },
  {
    "id": 98871,
    "name": "hawaiian sweet rolls",
    "estimatedCostInCents": 535
  },
  {
    "id": 1055062,
    "name": "boneless skinless chicken breasts",
    "estimatedCostInCents": 897
  },
  {
    "id": 10019151,
    "name": "reese pieces",
    "estimatedCostInCents": 721
  },
  {
    "id": 1041009,
    "name": "cheese",
    "estimatedCostInCents": 850
  },
  {
    "id": 10018413,
    "name": "flatbread",
    "estimatedCostInCents": 326
  },
  {
    "id": 10111529,
    "name": "grape tomato",
    "estimatedCostInCents": 168
  },
  {
    "id": 9019,
    "name": "unsweetened apple sauce",
    "estimatedCostInCents": 154
  },
  {
    "id": 18079,
    "name": "dry breadcrumbs",
    "estimatedCostInCents": 167
  },
  {
    "id": 16069,
    "name": "legumes",
    "estimatedCostInCents": 903
  },
  {
    "id": 9079,
    "name": "dried cranberries",
    "estimatedCostInCents": 921
  },
  {
    "id": 11935,
    "name": "catsup",
    "estimatedCostInCents": 666
  },
  {
    "id": 12151,
    "name": "pistachio",
    "estimatedCostInCents": 813
  },
  {
    "id": 11821,
    "name": "red sweet peppers",
    "estimatedCostInCents": 1027
  },
  {
    "id": 6615,
    "name": "vegetable stock",
    "estimatedCostInCents": 613
  }
]


/* harmony default export */ __webpack_exports__["default"] = (ingredientsData);


/***/ }),

/***/ "./src/dom-updates.js":
/*!****************************!*\
  !*** ./src/dom-updates.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {

  greetUser(name) {
    const userName = document.querySelector('.user-name');
    userName.innerHTML =
    `${name}`.split(' ')[0] + ' ' + `${name}`.split(' ')[1];
  },

  populateCards(recipes, cardArea, userFavorites) {
    cardArea.innerHTML = '';
    if (cardArea.classList.contains('all')) {
      cardArea.classList.remove('all')
    }
    if (recipes) {
      recipes.forEach(recipe => {
        this.renderCards(recipe, cardArea, userFavorites);
      });
    } else {
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
        .then(response => response.json())
        .then(data => {
          data.recipeData.forEach(recipe => {
            this.renderCards(recipe, cardArea, userFavorites);
          });
        })
        .catch(err => console.log("err", err));
    }
  },

  renderCards(recipe, cardArea, userFavorites) {
    let isFavorite;
    if (userFavorites && userFavorites.find(favoriteRecipe => favoriteRecipe.id === recipe.id)) {
      isFavorite = 'favorite-active';
    } else {
      isFavorite = '';
    }
    cardArea.insertAdjacentHTML('afterbegin', 
      `<article id='${recipe.id}-card' class='card'>
        <header id='${recipe.id}-header' class='card-header'>
            <label for='add-button' class='hidden'>Click to add recipe</label>
            <button id='${recipe.id}-add' aria-label='add-button' class='add-button card-button'></button>
            <button class='cook-button' id='${recipe.id}-cook'>Cook This!</button>
            <label for='favorite-button' class='hidden'>Click to favorite recipe</label>
            <button id='${recipe.id}-favorite' aria-label='favorite-button' class='favorite ${isFavorite} card-button'></button>
        </header>
        <section class="card-body">
          <article id='${recipe.id}-recipie-name' class='recipe-name'>${recipe.name}
            <img id='${recipe.id}-picture' tabindex='0' class='card-picture' src='${recipe.image}' alt='click to view recipe for ${recipe.name}'>
          </article>
        </section>
      </article>`)
  },

  removeAll(cardArea) {
    cardArea.classList.remove('all')
  },

  showNoFavorites(favButton) {
    favButton.innerHTML = 'You have no favorites!';
  },

  showNoCookList(recipesToCookButton) {
    recipesToCookButton.innerHTML = "You have no cooklist!";
  },

  displayDirections(recipe, cost, cardArea) {
    cardArea.classList.add('all');
    cardArea.innerHTML = 
      `<h3>${recipe.name}</h3>
      <p class='all-recipe-info'>
          <strong>It will cost: </strong>
          <span class='cost recipe-info'>$${cost}</span>
          <br><br>
        <strong>You will need: </strong>
        <span class='ingredients recipe-info'></span>
        <strong>Instructions: </strong>
        <ol>
          <span class='instructions recipe-info'>
          </span>
        </ol>
      </p>`;
    let ingredientsSpan = document.querySelector('.ingredients');
    let instructionsSpan = document.querySelector('.instructions');
    recipe.ingredients.forEach(ingredient => {
      ingredientsSpan.insertAdjacentHTML('afterbegin', `<ul><li>
      ${ingredient.quantity.amount.toFixed(2)} ${ingredient.quantity.unit}
      ${ingredient.name}</li></ul>
      `)
    })
    recipe.instructions.forEach(instruction => {
      instructionsSpan.insertAdjacentHTML('beforebegin', 
        `<li>${instruction.instruction}</li>`)
    })
  },

  favoritesAdd(target) {
    target.classList.add('favorite-active');
  },

  favoritesRemove(target) {
    target.classList.remove('favorite-active');
  },

  refreshFavorites(favButton) {
    favButton.innerHTML = 'Refresh Favorites';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/pantry.js":
/*!***********************!*\
  !*** ./src/pantry.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Pantry {
  constructor(userIngredients) {
    this.contents = userIngredients;
  }
  doIHaveEnoughForThis(nameOrId, recipeData) {
    let toggle = "Yes";
    let thisRecipe = recipeData.find(index => {
      return index.id === nameOrId || index.name === nameOrId;
    }).ingredients;
    thisRecipe.forEach(i => {
      if (!this.contents[i]) {
        toggle = "No"
      } else {
        this.contents.forEach(index => {
          if (index.amount >= index.quantity.amount) {
            toggle === "Yes";
          }
        })
      }
    });
    return toggle;
  }

  howManyIngredientsLeft(nameOrId, recipeData) {
    let contentsIds = this.contents.map(index => {
      return index.ingredient;
    })
    let notInThere = [];
    let ingredientFromRecipe = recipeData.find(index => {
      return index.id  === nameOrId || index.name === nameOrId;
    });
    ingredientFromRecipe.ingredients.forEach(index => {
      if (!contentsIds.includes(index.id)) {
        notInThere.push(index);
      }
    });
    return notInThere.length;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Pantry);


/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_ingredients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/ingredients */ "./src/data/ingredients.js");


class Recipe {
  constructor(recipe, ingredientsData) {
    this.name = recipe.name;
    this.id = recipe.id;
    this.ingredients = this.gatherIngredients(recipe.ingredients);
    this.instructions = recipe.instructions;
    this.tags = recipe.tags;
    this.ingredientsData = ingredientsData;
  }

  calculateCost() {
    let costCounter = 0;
    this.ingredients.forEach(ingredient => {
      this.ingredientsData.find(specificIngredient => {
        if (specificIngredient.id === ingredient.id) {
          costCounter += (Number(specificIngredient.estimatedCostInCents) *
          Number(ingredient.quantity.amount))
        }
      })
    });
    return costCounter;
  }

  gatherIngredients(ingredients) {
    return  ingredients.map(ingredient => {
      return {
        id: ingredient.id,
        quantity: ingredient.quantity,
        name: _data_ingredients__WEBPACK_IMPORTED_MODULE_0__["default"].find(ingredientItem => ingredientItem.id === ingredient.id).name
      }
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Recipe);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pantry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pantry */ "./src/pantry.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _dom_updates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-updates */ "./src/dom-updates.js");








let homeButton = document.querySelector('.home');
let favButton = document.querySelector('.view-favorites');
let recipesToCookButton = document.querySelector('.view-recipies-to-cook');
let cardArea = document.querySelector('.all-cards');
let searchButtons = document.querySelector('.search-buttons');
let searchBar = document.querySelector('.search-any');

let user, pantry, userData, recipeData, ingredientsData;
let userId = (Math.floor(Math.random() * 49) + 1);

window.onload = 
  fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/recipes/recipeData')
    .then(response => response.json())
    .then(data => recipeData = data.recipeData)
    .then(
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/ingredients/ingredientsData')
        .then(response => response.json())
        .then(data => ingredientsData = data)
        .then(
          fetch("https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData")
            .then(response => response.json())
            .then(data => {
              userData = data.wcUsersData.find(user => {
                return user.id === Number(userId);
              })
              onStartup()
            })
            .catch(err => console.log("err", err))
        )
        .catch(err => console.log("err", err))
    )
    .catch(err => console.log("err", err));
homeButton.addEventListener('click', cardButtonConditionals);
favButton.addEventListener('click', viewFavorites);
cardArea.addEventListener('click', cardButtonConditionals);
recipesToCookButton.addEventListener('click', viewRecipiesToCook);
searchButtons.addEventListener('click', searchRecipes);

function onStartup() {
  setUserData();
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].populateCards(recipeData, cardArea);
}

function setUserData() {
  user = new _user__WEBPACK_IMPORTED_MODULE_4__["default"](userId, userData.name, userData.pantry);
  pantry = new _pantry__WEBPACK_IMPORTED_MODULE_2__["default"](userData.pantry);
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].populateCards(recipeData, cardArea, user.favoriteRecipes);
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].greetUser(user.name);
  getFavorites();
}

function searchRecipes(event) {
  if (event.target.classList.contains('search-name')) {
  searchStuff('name')
  } else if (event.target.classList.contains('search-tag')) {
    searchStuff('tags')
    }
}


function searchStuff(value) {
  let searchedData = recipeData.filter(recipe => recipe[`${value}`].includes(searchBar.value));
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].populateCards(searchedData, cardArea, user.favoriteRecipes);
}

function getFavorites() {
  if (user.favoriteRecipes.length) {
    user.favoriteRecipes.forEach(recipe => {
      document.querySelector(`.favorite${recipe.id}`).classList.add('favorite-active')
    })
  }
}

function cardButtonConditionals(event) {
  if (event.target.classList.contains('favorite')) {
    favoriteCard(event);
  } else if (event.target.classList.contains('card-picture')) {
    getDirections(event);
  } else if (event.target.classList.contains('home')) {
    favButton.innerHTML = 'View Favorites';
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].populateCards(recipeData, cardArea, user.favoriteRecipes);
  } else if (event.target.classList.contains('add-button')) {
    addRecipeToCookList(event);
  } else if (event.target.classList.contains('cook-button')) {
    cookCard(event);
  }
}

function viewFavorites() {
  if (cardArea.classList.contains('all')) {
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].removeAll(cardArea);
  }
  if (!user.favoriteRecipes.length) {
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].showNoFavorites(favButton);
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].populateCards(recipeData, cardArea);
    return
  } else {
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].populateCards(user.favoriteRecipes, cardArea, user.favoriteRecipes);
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].refreshFavorites(favButton);
  }
}

function viewRecipiesToCook() {
  favButton.innerHTML = 'View Favorites';
  if (cardArea.classList.contains('all')) {
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].removeAll(cardArea);
  }
  if (!user.recipesToCook.length) {
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].showNoCookList(recipesToCookButton);
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].populateCards(recipeData, cardArea);
    return
  } else {
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].populateCards(user.recipesToCook, cardArea, user.favoriteRecipes);
    // domUpdates.refreshFavorites(favButton);
  }
}

function favoriteCard(event) {
  let targetedID = event.target.id.slice(0, event.target.id.indexOf('-'));
  let specificRecipe = recipeData.find(recipe => recipe.id  === Number(targetedID));
  if (!event.target.classList.contains('favorite-active')) {
    // is the above line using the DOM to update the data model? Should be an easy fix
    user.addToCategory(specificRecipe, "favoriteRecipes");
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].favoritesAdd(event.target);
  } else {
    user.removeFromCategory(specificRecipe, "favoriteRecipes");
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].favoritesRemove(event.target);
  }
}

function cookCard(event) {
  let targetedID = parseInt(event.target.id.slice(0, event.target.id.indexOf('-')));
  let currentRecipe = recipeData.find(recipe => recipe.id === targetedID);
  if (user.checkPantry(currentRecipe.ingredients)) {
    user.cook(targetedID, recipeData, userId);
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].populateCards(recipeData, cardArea, user.favoriteRecipes);
    alert("You cooked it! Sending you back to the home page...");
  } else {
    alert('You don\'t have all the ingredients for this recipe!');
  }
}

function addRecipeToCookList(event) {
  let targetedID = event.target.id.slice(0, event.target.id.indexOf('-'));
  let specificRecipe = recipeData.find(recipe => recipe.id  === Number(targetedID));
  if (!user.recipesToCook.includes(specificRecipe)) {
    user.addToCategory(specificRecipe, "recipesToCook");
  }
}

function getDirections(event) {
  let targetedID = event.target.id.slice(0, event.target.id.indexOf('-'))
  let newRecipeInfo = recipeData.find(recipe => recipe.id === Number(targetedID))
  let recipeObject = new _recipe__WEBPACK_IMPORTED_MODULE_3__["default"](newRecipeInfo, ingredientsData.ingredientsData);
  let cost = recipeObject.calculateCost();
  let costInDollars = (cost / 100).toFixed(2);
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayDirections(recipeObject, costInDollars, cardArea);
}

/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addToCategory(recipe, property) {
    if (!this[property].includes(recipe)) {
      this[property].push(recipe);
    }
  }

  removeFromCategory(recipe, property) {
    const i = this[property].indexOf(recipe);
    this[property].splice(i, 1)
  }

  filterRecipes(tag, property) {
    return this[property].filter(recipe => {
      return recipe.tags.includes(tag);
    });
  }

  findInCategory(strgToSrch, property) {
    return this[property].filter(recipe => {
      return recipe.name.includes(strgToSrch)
      || recipe.ingredients.find(ingredient => {
        return ingredient.name.includes(strgToSrch)
      });
    });
  }

  checkPantry(recipeIngredients) {
    let toggle = false;
    let toggleArray = []
    let recipeIngredientsForRecipe = this.returnAmount(recipeIngredients)
    let recipeIds = recipeIngredients.map(index => {
      return index.id;
    });
    let pantryIngredientsInRecipe = this.pantry.filter(ingredient => {
      let foundIngredients = recipeIds.find(recipeID => {
        return ingredient.ingredient === recipeID;
      });
      return foundIngredients !== undefined; 
    });

    let sortedPantryIngredients = pantryIngredientsInRecipe.sort((ingredientA, ingredientB) => {
      return ingredientA.ingredient - ingredientB.ingredient;
    })
    let sortedRecipeIngredients = recipeIngredientsForRecipe.sort((ingredientA, ingredientB) => {
      return ingredientA.ingredientID - ingredientB.ingredientID;
    });
    sortedRecipeIngredients.forEach((ingredient, index) => {
      if (sortedPantryIngredients[index] && sortedPantryIngredients[index].amount + parseInt(ingredient.ingredientModification) >= 0) {
        toggleArray.push(true);
      } else {
        toggleArray.push(false);
      }
    })
    let toggleDecider = toggleArray.find(element => {
      return element === false;
    });
    if (toggleDecider === undefined) {
      toggle = true;
    }
    return toggle;
  }

  returnAmount(recipeIngredients) {
    let recipeIngredientsFromPantry = [];
    recipeIngredients.forEach(ingredient => {
      var ingredientData = {
        userID: this.id,
        ingredientID: ingredient.id,
        ingredientModification: -ingredient.quantity.amount
      }
      recipeIngredientsFromPantry.push(ingredientData);
    })
    return recipeIngredientsFromPantry;
  }

  returnShoppingList(recipeIngredients, ingredientsData) {
    let groceries = this.returnAmount(recipeIngredients);
    let notEnoughGroceries = groceries.filter(ingredient => {
      return ingredient.ingredientModification < 0
    })
    let foundIngredients = [];
    let shoppingList = notEnoughGroceries.map(negativeGrocery => {
      let foundIngredient = ingredientsData.find(ingredient => {
        return ingredient.id === negativeGrocery.id;
      });
      foundIngredients.push(foundIngredient);
      negativeGrocery.groceryListCost = foundIngredients[foundIngredients.length - 1].estimatedCostInCents * negativeGrocery.ingredientModification;
      return negativeGrocery;
    });
    return shoppingList;
  }

  cook(recipeID, recipeData, userId) {
    this.recipesToCook.forEach((recipeToCook, index) => {
      if (recipeToCook.id === recipeID) {
        this.recipesToCook.splice(index, 1);
      }
    });
    let currentRecipe = recipeData.find(recipe => recipe.id === recipeID)
    let ingredientsToRemove = this.returnAmount(currentRecipe.ingredients)
    ingredientsToRemove.forEach(ingredient => {
      let int = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ingredient)
      }
      fetch('https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData', int)
        .then(response => response.json())
        .then(data => data)
        .then(
          fetch("https://fe-apps.herokuapp.com/api/v1/whats-cookin/1911/users/wcUsersData")
            .then(response => response.json())
            .then(data => {
              let userData = data.wcUsersData.find(user => {
                return user.id === Number(userId);
              });
              this.pantry = userData.pantry;
            })
            .catch(err => console.log("err", err))
        )
        .catch(err => console.log(err));
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2EyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzcz8xM2IxIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2luZ3JlZGllbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20tdXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFp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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZSw4RUFBZSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDcnRDL0I7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEtBQUssMkJBQTJCLEtBQUs7QUFDNUMsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQyxzQkFBc0IsVUFBVTtBQUNoQztBQUNBLDBCQUEwQixVQUFVO0FBQ3BDLDhDQUE4QyxVQUFVO0FBQ3hEO0FBQ0Es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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZSxtRUFBSSxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rOyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzUxNUM7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM4NTE1YywgIzQwNTg2NCwgIzQ4NjA2YiwgIzUxNjc3MywgIzU5NmY3YiwgIzU5NzI3ZSwgIzU5NzY4MiwgIzU5Nzk4NSwgIzUwNzg4NCwgIzQ1Nzc4MiwgIzNhNzY4MCwgIzJlNzU3ZCk7IH1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IGF1dG87XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzODUxNWMsICM0MDU4NjQsICM0ODYwNmIsICM1MTY3NzMsICM1OTZmN2IsICM1OTcyN2UsICM1OTc2ODIsICM1OTc5ODUsICM1MDc4ODQsICM0NTc3ODIsICMzYTc2ODAsICMyZTc1N2QpOyB9XFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzc1MTVDO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzg1MTVjLCAjNDA1ODY0LCAjNDg2MDZiLCAjNTE2NzczLCAjNTk2ZjdiLCAjNTk3MjdlLCAjNTk3NjgyLCAjNTk3OTg1LCAjNTA3ODg0LCAjNDU3NzgyLCAjM2E3NjgwLCAjMmU3NTdkKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuaDEge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzAwMDtcXG4gIGZvbnQtc2l6ZTogYXV0bztcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMzAlO1xcbiAgZm9udC1mYW1pbHk6ICdZZWxsb3d0YWlsJywgY3Vyc2l2ZTtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzY0N0E4NTsgfVxcblxcbi5tYWluLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUU2O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDk1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ubWFpbi1oZWFkZXIgPiBidXR0b24ge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDY1cHg7XFxuICBmb250LXNpemU6IDY1JTsgfVxcblxcbi5tYWluLWhlYWRlciA+IGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogNjUlOyB9XFxuXFxuLm5hdkJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUU2O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzAwMDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgZm9udC1zaXplOiAxMzAlO1xcbiAgbWFyZ2luOiAxJTtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzY0N0E4NTsgfVxcblxcbi51c2VyLWluZm8ge1xcbiAgZm9udC1zaXplOiAxNDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDM1JTsgfVxcblxcbi5zZWFyY2gtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xcbiAgd2lkdGg6IGF1dG87IH1cXG5cXG4uc2VhcmNoLXRhZzpob3ZlcixcXG4uc2VhcmNoLW5hbWU6aG92ZXIsXFxuLnNlYXJjaC10YWc6aG92ZXIsXFxuLnNlYXJjaC1pbWFnZTpob3ZlcixcXG4uY2FyZC1idXR0b246aG92ZXIsXFxuLm5hdkJ1dHRvbjpob3ZlcixcXG4uc2VhcmNoLWJ1dHRvbjpob3ZlcixcXG4uY29vay1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkYzNlYjtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzY0N0E4NTtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jb29rLWJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogJ1llbGxvd3RhaWwnLCBjdXJzaXZlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0MzQzJDNjtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzY0N0E4NTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUU2O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNyU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNyU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxJTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxJTsgfVxcblxcbi5zZWFyY2gtdGFnOmFjdGl2ZSxcXG4uc2VhcmNoLW5hbWU6YWN0aXZlLFxcbi5zZWFyY2gtdGFnOmFjdGl2ZSxcXG4uc2VhcmNoLWltYWdlOmFjdGl2ZSxcXG4uY2FyZC1idXR0b246YWN0aXZlLFxcbi5uYXZCdXR0b246YWN0aXZlLFxcbi5zZWFyY2gtYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDMkM2O1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjNjQ3QTg1OyB9XFxuXFxuLmNhcmQtYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDI3cHg7XFxuICBtYXJnaW46IDNweDtcXG4gIHdpZHRoOiAyN3B4O1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjNjQ3QTg1OyB9XFxuXFxuLmFkZC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFFNjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMzIvMzIzMzkuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM2NDdBODU7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZmF2b3JpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFFNjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvMTQ5LzE0OTIyMi5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxcblxcbi5hbGwtY2FyZHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAzMDBweCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMwcHggMCAzMHB4IDMwcHg7XFxuICB3aWR0aDogOTUuNXZ3OyB9XFxuXFxuaW1nIHtcXG4gIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRTY7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjNjQ3QTg1O1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNyU7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNyU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxJTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxJTsgfVxcblxcbi5jYXJkLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUU2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGNzU3RDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5hbGwge1xcbiAgZ3JpZC1nYXA6IDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7IH1cXG5cXG4uYWxsLXJlY2lwZS1pbmZvLFxcbm9sIHtcXG4gIGNvbG9yOiAjRjFGMUU2O1xcbiAgZm9udC1zaXplOiAyMjAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5oMyB7XFxuICBjb2xvcjogI0YxRjFFNjtcXG4gIGZvbnQtc2l6ZTogMjUwJTsgfVxcblxcbi5yZWNpcGUtbmFtZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5jYXJkLXBpY3R1cmU6aG92ZXIge1xcbiAgb3BhY2l0eTogMC43OyB9XFxuXFxuLmNhcmQtYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA5MCU7IH1cXG5cXG4uY2FyZC1waWN0dXJlOmFjdGl2ZSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwOyB9XFxuXFxuLmNhcmQtcGljdHVyZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbjogMTBweCAzJSA4cHggMi42JTtcXG4gIHdpZHRoOiA5NCU7XFxuICBib3JkZXItcmFkaXVzOiAyJTtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzY0N0E4NTsgfVxcblxcbi5mYXZvcml0ZS1hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDgvMTQ4ODQxLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyB9XFxuXFxuLnNlYXJjaC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDsgfVxcblxcbi5zZWFyY2gtbmFtZSwgLnNlYXJjaC10YWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzY0N0E4NTsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJsZXQgaW5ncmVkaWVudHNEYXRhID0gW1xuICB7XG4gICAgXCJpZFwiOiAyMDA4MSxcbiAgICBcIm5hbWVcIjogXCJ3aGVhdCBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE4MzcyLFxuICAgIFwibmFtZVwiOiBcImJpY2FyYm9uYXRlIG9mIHNvZGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU4MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTIzLFxuICAgIFwibmFtZVwiOiBcImVnZ3NcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ3MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTMzNSxcbiAgICBcIm5hbWVcIjogXCJzdWNyb3NlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkyMDYsXG4gICAgXCJuYW1lXCI6IFwiaW5zdGFudCB2YW5pbGxhIHB1ZGRpbmdcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTMzNCxcbiAgICBcIm5hbWVcIjogXCJicm93biBzdWdhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDcsXG4gICAgXCJuYW1lXCI6IFwic2FsdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjgwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTIwNDcsXG4gICAgXCJuYW1lXCI6IFwiZmluZSBzZWEgc2FsdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTI4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE5OTAzLFxuICAgIFwibmFtZVwiOiBcInNlbWkgc3dlZXQgY2hpcHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI1M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTQ1LFxuICAgIFwibmFtZVwiOiBcInVuc2FsdGVkIGJ1dHRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjE3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNTAsXG4gICAgXCJuYW1lXCI6IFwidmFuaWxsYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDkwMTYsXG4gICAgXCJuYW1lXCI6IFwiYXBwbGUgY2lkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ2OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDAzLFxuICAgIFwibmFtZVwiOiBcImFwcGxlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwMjcsXG4gICAgXCJuYW1lXCI6IFwiY29ybiBzdGFyY2hcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIzNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDQ2LFxuICAgIFwibmFtZVwiOiBcImRpam9uIHN0eWxlIG11c3RhcmRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxOVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTIxNSxcbiAgICBcIm5hbWVcIjogXCJ3aG9sZSBnYXJsaWMgY2xvdmVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIyMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDEyMDQ2LFxuICAgIFwibmFtZVwiOiBcIndob2xlIGdyYWluIGRpam9uIG11c3RhcmRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTkxMSxcbiAgICBcIm5hbWVcIjogXCJtYXBsZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQ5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MTEyLFxuICAgIFwibmFtZVwiOiBcIm1pc29cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMDA2MixcbiAgICBcIm5hbWVcIjogXCJwb3JrIGNob3BcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgIFwibmFtZVwiOiBcInMmcFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTI0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MTI0LFxuICAgIFwibmFtZVwiOiBcInNveSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTYxNjgsXG4gICAgXCJuYW1lXCI6IFwic3JpcmFjaGEgc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU3NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgIFwibmFtZVwiOiBcImJsYWNrIHBlcHBlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDEsXG4gICAgXCJuYW1lXCI6IFwiYnV0dGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDU4MixcbiAgICBcIm5hbWVcIjogXCJvaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgwN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDMxLFxuICAgIFwibmFtZVwiOiBcInJlZCBwZXBwZXIgcG93ZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1ODNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTEwMCxcbiAgICBcIm5hbWVcIjogXCJjaGlja2VuIHdpbmdcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU5M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDA5LFxuICAgIFwibmFtZVwiOiBcInJlZCBjaGlsaSBwb3dkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgIFwibmFtZVwiOiBcImdhcmxpYyBwb3dkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM0NFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MTY4LFxuICAgIFwibmFtZVwiOiBcInRhYmFzY28gc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MTc2LFxuICAgIFwibmFtZVwiOiBcIm1hbmdvZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQyNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDI2LFxuICAgIFwibmFtZVwiOiBcIm9uaW9uIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTk3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNDIwNDcsXG4gICAgXCJuYW1lXCI6IFwic2Vhc29uZWQgc2FsdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzM0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE4MzcxLFxuICAgIFwibmFtZVwiOiBcImJha2luZyBwb3dkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM0NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDQwLFxuICAgIFwibmFtZVwiOiBcInJpcGUgYmFuYW5hXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwMTEsXG4gICAgXCJuYW1lXCI6IFwiYnVjayB3aGVhdCBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODY1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMzAsXG4gICAgXCJuYW1lXCI6IFwiYnV0dGVybWlsa1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzczXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5Mjk2LFxuICAgIFwibmFtZVwiOiBcInJ1bm55IGhvbmV5XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYwOTgsXG4gICAgXCJuYW1lXCI6IFwicGVhbnV0IGJ1dHRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDkwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDgsXG4gICAgXCJuYW1lXCI6IFwiYXBwbGUgY2lkZXIgdmluZWdhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTMyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDkwLFxuICAgIFwibmFtZVwiOiBcImJyb3duIHJpY2UgZmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5Mzc4NCxcbiAgICBcIm5hbWVcIjogXCJicm93biByaWNlIHN5cnVwXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyNCxcbiAgICBcIm5hbWVcIjogXCJlZ2cgYWxidW1lblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjI1LFxuICAgIFwibmFtZVwiOiBcImV2YXBvcmF0ZWQgY2FuZSBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTE4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMjIwLFxuICAgIFwibmFtZVwiOiBcImZsYXggbWVhbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjk2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTE4Mzc1LFxuICAgIFwibmFtZVwiOiBcImluc3RhbnQgeWVhc3RcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM4M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTMwNCxcbiAgICBcIm5hbWVcIjogXCJ1bnN1bGZ1cmVkIG1vbGFzc2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE0MTMsXG4gICAgXCJuYW1lXCI6IFwiUG90YXRvIFN0YXJjaCBGbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODk1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjk2LFxuICAgIFwibmFtZVwiOiBcInRhcGlvY2Egc3RhcmNoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM3NjAsXG4gICAgXCJuYW1lXCI6IFwiV2hvbGUgR3JhaW4gVGVmZiBGbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTM5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE0NDEyLFxuICAgIFwibmFtZVwiOiBcImljZSB3YXRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjI1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjI2LFxuICAgIFwibmFtZVwiOiBcInhhbnRoYW4gZ3VtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MjVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkzNTAsXG4gICAgXCJuYW1lXCI6IFwiY29ybiBzeXJ1cFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwOTksXG4gICAgXCJuYW1lXCI6IFwiZnJ1aXQgY29ja3RhaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk1M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjA2MSxcbiAgICBcIm5hbWVcIjogXCJ3aG9sZSBhbG1vbmRzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDI5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTA0LFxuICAgIFwibmFtZVwiOiBcImNvY29udXRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkxOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjExNSxcbiAgICBcIm5hbWVcIjogXCJjb2NvbnV0IGNyZWFtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDA0NyxcbiAgICBcIm5hbWVcIjogXCJjb2NvbnV0IG9pbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTUyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE5MDcxLFxuICAgIFwibmFtZVwiOiBcImRhcmsgY2hvY29sYXRlIG1vcnNlbHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA4MjEyLFxuICAgIFwibmFtZVwiOiBcImdyYW5vbGEgY2VyZWFsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzODFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogODEyMSxcbiAgICBcIm5hbWVcIjogXCJvYXRtZWFsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxNDIsXG4gICAgXCJuYW1lXCI6IFwicGVjYW5cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMxNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5Mzc0MCxcbiAgICBcIm5hbWVcIjogXCJibGFuY2hlZCBhbG1vbmQgZmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI1LFxuICAgIFwibmFtZVwiOiBcImVnZyB5b2xrc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODg5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMDIzLFxuICAgIFwibmFtZVwiOiBcInNlc2FtZSBzZWVkc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTUwNjIsXG4gICAgXCJuYW1lXCI6IFwiY2hpY2tlbiB0ZW5kZXJzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTExMDksXG4gICAgXCJuYW1lXCI6IFwic2xhdyBtaXhcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY4MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExNjA5OCxcbiAgICBcIm5hbWVcIjogXCJjcmVhbXkgcGVhbnV0IGJ1dHRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTUyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNjQsXG4gICAgXCJuYW1lXCI6IFwibWludFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTc1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMjEsXG4gICAgXCJuYW1lXCI6IFwicG93ZGVyZWQgZ2luZ2VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3ODNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTE2MCxcbiAgICBcIm5hbWVcIjogXCJqdWljZSBvZiBsaW1lXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NzdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTI2NixcbiAgICBcIm5hbWVcIjogXCJwaW5lYXBwbGVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTEzNSxcbiAgICBcIm5hbWVcIjogXCJjYXVsaWZsb3dlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDYxNzIsXG4gICAgXCJuYW1lXCI6IFwiY2hpY2tlbiBzdG9ja1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDU0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjMyLFxuICAgIFwibmFtZVwiOiBcImdoZWVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM3MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjEyMCxcbiAgICBcIm5hbWVcIjogXCJoYXplbG51dFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODEyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjkwLFxuICAgIFwibmFtZVwiOiBcIm51dHJpdGlvbmFsIHllYXN0IGZsYWtlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjgyLFxuICAgIFwibmFtZVwiOiBcIm9uaW9uc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDM5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDEwMTIzLFxuICAgIFwibmFtZVwiOiBcInByb3NjdWl0dG9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIxN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTA5NixcbiAgICBcIm5hbWVcIjogXCJyYXBpbmlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg0NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2MTUwLFxuICAgIFwibmFtZVwiOiBcImJhciBiIHF1ZSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDYxOTQsXG4gICAgXCJuYW1lXCI6IFwiY2hpY2tlbiBicm90aFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTgzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjI3LFxuICAgIFwibmFtZVwiOiBcImxpcXVpZCBzbW9rZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDEyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMjgsXG4gICAgXCJuYW1lXCI6IFwicGFwcmlrYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzAyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDcyLFxuICAgIFwibmFtZVwiOiBcInBvcmsgc2hvdWxkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk2OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2OTcxLFxuICAgIFwibmFtZVwiOiBcIndvcmNlc3RlcnNoaXJlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzYwNyxcbiAgICBcIm5hbWVcIjogXCJhbG1vbmRtaWxrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3ODdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTg5NDIsXG4gICAgXCJuYW1lXCI6IFwiZ3JhaGFtIGNyYWNrZXIgY3J1c3RcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDEyMDEwLFxuICAgIFwibmFtZVwiOiBcImdyb3VuZCBjaW5uYW1vblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMjUsXG4gICAgXCJuYW1lXCI6IFwibnV0bWVnIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDgwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQzMjc0LFxuICAgIFwibmFtZVwiOiBcImxvdyBmYXQgY3JlYW0gY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDQ4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDgxMjAsXG4gICAgXCJuYW1lXCI6IFwid2hvbGUgZ3JhaW4gcm9sbGVkIG9hdHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDI0LFxuICAgIFwibmFtZVwiOiBcImNhbm5lZCBwdW1wa2luXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTAxNixcbiAgICBcIm5hbWVcIjogXCJhcHBsZSBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzEwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE4MDQ3LFxuICAgIFwibmFtZVwiOiBcInJhaXNpbiBicmVhZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjIyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwODkwMDMsXG4gICAgXCJuYW1lXCI6IFwiZ3Jhbm55c21pdGggYXBwbGVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDc3LFxuICAgIFwibmFtZVwiOiBcImZ1bGwtZmF0IG1pbGtcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI3NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI5NyxcbiAgICBcIm5hbWVcIjogXCJmbGF0IGxlYWYgcGFyc2xleSBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMzBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAzMjAwOSxcbiAgICBcIm5hbWVcIjogXCJkcmllZCByZWQgY2hpbGlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTUxNTIsXG4gICAgXCJuYW1lXCI6IFwianVtYm8gc2hyaW1wXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MDRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyOTQsXG4gICAgXCJuYW1lXCI6IFwidmlkYWxpYSBvbmlvblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTk1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMDA3LFxuICAgIFwibmFtZVwiOiBcImFydGljaG9rZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MTUwLFxuICAgIFwibmFtZVwiOiBcImxlbW9uXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTE1NixcbiAgICBcIm5hbWVcIjogXCJsZW1vbiBwZWVsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTgwNjksXG4gICAgXCJuYW1lXCI6IFwiZ2x1dGVuLWZyZWUgd2hpdGUgc2FuZHdpY2ggYnJlYWRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDMzLFxuICAgIFwibmFtZVwiOiBcInBhcm1lc2FuIGNoZWVzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzk4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMjcsXG4gICAgXCJuYW1lXCI6IFwib3JlZ2Fub1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODM1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMzQwNTMsXG4gICAgXCJuYW1lXCI6IFwiZXh0cmEgdmlyZ2luIG9saXZlIG9pbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDQsXG4gICAgXCJuYW1lXCI6IFwiYmF5IGxlYXZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzg1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MzM2LFxuICAgIFwibmFtZVwiOiBcInBvd2RlcmVkIHN1Z2FyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MDNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExNDMsXG4gICAgXCJuYW1lXCI6IFwiY2VsZXJ5XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NDBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyOSxcbiAgICBcIm5hbWVcIjogXCJoYXJkY29va2VkIGVnZ3NcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0NjQxLFxuICAgIFwibmFtZVwiOiBcInJlZHVjZWQgZmF0IG1heW9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY5N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExMjU2LFxuICAgIFwibmFtZVwiOiBcInNraW0gZ3JlZWsgeW9ndXJ0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNjNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE5NDQsXG4gICAgXCJuYW1lXCI6IFwiaG90ZG9nIHJlbGlzaFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzkxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDExMjgyLFxuICAgIFwibmFtZVwiOiBcInJlZCBvbmlvblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjM4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMzUzLFxuICAgIFwibmFtZVwiOiBcImlkYWhvIHBvdGF0b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjExODIxLFxuICAgIFwibmFtZVwiOiBcImJlbGwgcGVwcGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjAwNDgsXG4gICAgXCJuYW1lXCI6IFwiYnJvd24gbWludXRlIHJpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM4NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzY1MSxcbiAgICBcIm5hbWVcIjogXCJpdGFsaWFuIGNoZWVzZSBibGVuZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjMzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDc5MjcsXG4gICAgXCJuYW1lXCI6IFwic3dlZXQgaXRhbGlhbiB0dXJrZXkgc2F1c2FnZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjE2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNTQ5LFxuICAgIFwibmFtZVwiOiBcImNhbm5lZCB0b21hdG8gc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYyMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDEyMDEyOSxcbiAgICBcIm5hbWVcIjogXCJicmVhZCBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTE0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNTMsXG4gICAgXCJuYW1lXCI6IFwiY3JlYW1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY0NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0MDUzLFxuICAgIFwibmFtZVwiOiBcInB1cmUgb2xpdmUgb2lsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MDVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTk5MTIsXG4gICAgXCJuYW1lXCI6IFwiYWdhdmUgc3lydXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY0MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDA4MCxcbiAgICBcIm5hbWVcIjogXCJwYXN0cnkgZmxvdXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxOTMzNCxcbiAgICBcIm5hbWVcIjogXCJkYXJrIGJyb3duIHN1Z2FyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM4MTQsXG4gICAgXCJuYW1lXCI6IFwibGlnaHRseSBzd2VldGVuZWQgd2hpcHBlZCBjcmVhbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyMDYsXG4gICAgXCJuYW1lXCI6IFwiY3VjdW1iZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI2MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDAzNSxcbiAgICBcIm5hbWVcIjogXCJxdWlub2FcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUxNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTUyOSxcbiAgICBcIm5hbWVcIjogXCJoZWlybG9vbSB0b21hdG9lc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzIxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE0MjQyLFxuICAgIFwibmFtZVwiOiBcImNyYW5iZXJyeSBqdWljZSBjb2NrdGFpbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzM1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE0MTMwLFxuICAgIFwibmFtZVwiOiBcImNyZWFtIHNvZGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU4NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTE3NyxcbiAgICBcIm5hbWVcIjogXCJnZWxhdGluZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAxMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzY0NSxcbiAgICBcIm5hbWVcIjogXCJoYWxsb3dlZW4gc3ByaW5rbGVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQwNTEsXG4gICAgXCJuYW1lXCI6IFwiZ3JleSBnb29zZSB2b2RrYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzczXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNTQsXG4gICAgXCJuYW1lXCI6IFwid2hpcHBlZCBjcmVhbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjg5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzODI4LFxuICAgIFwibmFtZVwiOiBcIm1hcmluYXRlZCBhcnRpY2hva2UgaGVhcnRzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5ODJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyNjYsXG4gICAgXCJuYW1lXCI6IFwiY3JpbWluaSBtdXNocm9vbXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDE3LFxuICAgIFwibmFtZVwiOiBcImNyZWFtIGNoZWVzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTU1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTksXG4gICAgXCJuYW1lXCI6IFwiZmV0YVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIyMDI3LFxuICAgIFwibmFtZVwiOiBcIm1peGVkIGl0YWxpYW4gaGVyYnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI1M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDgyMDQ3LFxuICAgIFwibmFtZVwiOiBcImtvc2hlciBzYWx0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NzJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTE0NTcsXG4gICAgXCJuYW1lXCI6IFwic3BpbmFjaFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzM2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDQsXG4gICAgXCJuYW1lXCI6IFwiZnJlc2ggYmFzaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA3MDM2LFxuICAgIFwibmFtZVwiOiBcIml0YWxpYW4gc2F1c2FnZSBsaW5rc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAxMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExMTU0OSxcbiAgICBcIm5hbWVcIjogXCJtYXJpbmFyYSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTcxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMzgsXG4gICAgXCJuYW1lXCI6IFwicGVjb3Jpbm8gcm9tYW5vIGNoZWVzZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEzMDQsXG4gICAgXCJuYW1lXCI6IFwicGVhc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzY4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNjc3LFxuICAgIFwibmFtZVwiOiBcInNoYWxsb3RzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2OTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEwMjA0MjAsXG4gICAgXCJuYW1lXCI6IFwicGFzdGEgc2hlbGxzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTAyNixcbiAgICBcIm5hbWVcIjogXCJzaHJlZGRlZCBtb3p6YXJlbGxhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxODRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MzAsXG4gICAgXCJuYW1lXCI6IFwic2tpbSBtaWxrIHJpY290dGEgY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzOTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQxMDYsXG4gICAgXCJuYW1lXCI6IFwid2hpdGUgd2luZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjc1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDYzLFxuICAgIFwibmFtZVwiOiBcImZyb3plbiBzcGluYWNoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MzBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyNSxcbiAgICBcIm5hbWVcIjogXCJwZXBwZXJqYWNrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTQ2MjMsXG4gICAgXCJuYW1lXCI6IFwiYmxhY2tiZXJyeSBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjU2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzMDIsXG4gICAgXCJuYW1lXCI6IFwicmFzcGJlcnJ5XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM1NCxcbiAgICBcIm5hbWVcIjogXCJwaW5lYXBwbGUgd2l0aCBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwNzAsXG4gICAgXCJuYW1lXCI6IFwic3dlZXQgY2hlcnJpZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE4NFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNDE4MSxcbiAgICBcIm5hbWVcIjogXCJjaG9jb2xhdGUgc3lydXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUzMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxODYxNyxcbiAgICBcIm5hbWVcIjogXCJncmFoYW0gY3JhY2tlciBjcnVtYnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjEzNSxcbiAgICBcIm5hbWVcIjogXCJudXRzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NzhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTAzNyxcbiAgICBcIm5hbWVcIjogXCJoYWFzIGF2b2NhZG9zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYwNTcsXG4gICAgXCJuYW1lXCI6IFwiZ2FyYmFuem9zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDQ1LFxuICAgIFwibmFtZVwiOiBcImRpbGx3ZWVkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTI1NixcbiAgICBcIm5hbWVcIjogXCJncmVlayB5b2d1cnRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIzMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MTUyLFxuICAgIFwibmFtZVwiOiBcImxlbW9uIGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNzRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyOTEsXG4gICAgXCJuYW1lXCI6IFwic3ByaW5nIG9uaW9uc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTIzNixcbiAgICBcIm5hbWVcIjogXCJwZWFjaGVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkwOTUsXG4gICAgXCJuYW1lXCI6IFwiaWNlY3JlYW1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDg2MixcbiAgICBcIm5hbWVcIjogXCJjb29rZWQgYmFjb24gc3RyaXBzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTExNCxcbiAgICBcIm5hbWVcIjogXCJyb2FzdGVkIGNoaWNrZW5cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcwOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTMzMyxcbiAgICBcIm5hbWVcIjogXCJncmVlbiBwZXBwZXJzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyNixcbiAgICBcIm5hbWVcIjogXCJmcmVzaCBtb3p6YXJlbGxhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMTE1MjksXG4gICAgXCJuYW1lXCI6IFwiaXRhbGlhbiB0b21hdG9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExMDA5LFxuICAgIFwibmFtZVwiOiBcIndoaXRlIGNoZWRkYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcwOVxuICB9LFxuICB7XG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTg5OTgsXG4gICAgXCJuYW1lXCI6IFwiYmFsc2FtaWMgZ2xhemVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA4MDMwLFxuICAgIFwibmFtZVwiOiBcImZydWl0IGxvb3BzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxOTFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkxMTYsXG4gICAgXCJuYW1lXCI6IFwibWFyc2htYWxsb3dcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQyNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjE1OCxcbiAgICBcIm5hbWVcIjogXCJodW1tdXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ5MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDQ2LFxuICAgIFwibmFtZVwiOiBcInByZXBhcmVkIHllbGxvdyBtdXN0YXJkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxNCxcbiAgICBcIm5hbWVcIjogXCJldmFwb3JhdGVkIG1pbGtcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkyMTQsXG4gICAgXCJuYW1lXCI6IFwib3JhbmdlIGp1aWNlIGNvbmNlbnRyYXRlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNzlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTIxNixcbiAgICBcIm5hbWVcIjogXCJvcmFuZ2UgcGVlbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODgyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTIzLFxuICAgIFwibmFtZVwiOiBcImJhY29uIHNsaWNlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODE3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMDUyLFxuICAgIFwibmFtZVwiOiBcInN0cmluZyBiZWFuc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTAyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExOTU5LFxuICAgIFwibmFtZVwiOiBcImJhYnkgYXJ1Z3VsYSBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDA0LFxuICAgIFwibmFtZVwiOiBcImJsdWUgY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NDZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTI1MixcbiAgICBcIm5hbWVcIjogXCJwZWFyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NjdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDM0MDgsXG4gICAgXCJuYW1lXCI6IFwicGVhciBqdWljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTYzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDksXG4gICAgXCJuYW1lXCI6IFwiZnJlc2ggdGh5bWUgbGVhdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2ODFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxNTUsXG4gICAgXCJuYW1lXCI6IFwid2FsbnV0IGhhbHZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODk1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDExNjkzLFxuICAgIFwibmFtZVwiOiBcImNhbm5lZCB0b21hdG9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE3MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTEyNCxcbiAgICBcIm5hbWVcIjogXCJjYXJyb3RzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMzZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAxMixcbiAgICBcIm5hbWVcIjogXCJjb3JpYW5kZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMTQsXG4gICAgXCJuYW1lXCI6IFwiY29taW5vXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE5MTMsXG4gICAgXCJuYW1lXCI6IFwiZnJvemVuIGNvcm5cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU1OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTQ3NyxcbiAgICBcIm5hbWVcIjogXCJ6dWNjaGluaSBzcXVhc2hcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIyMDQ0NSxcbiAgICBcIm5hbWVcIjogXCJzdGVhbWVkIHJpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwNDBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwMyxcbiAgICBcIm5hbWVcIjogXCJncm91bmQgYmFzaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE5OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjAxOCxcbiAgICBcIm5hbWVcIjogXCJjYW5uZWQgYmxhY2sgYmVhbnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM1NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5OTIyMyxcbiAgICBcIm5hbWVcIjogXCJjYW5uZWQgY2hpcG90bGUgY2hpbGllcyBpbiBhZG9ib1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjk5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTY1LFxuICAgIFwibmFtZVwiOiBcImNpbGFudHJvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMTgzNjQsXG4gICAgXCJuYW1lXCI6IFwiZmxvdXIgdG9ydGlsbGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDYxMTI4MixcbiAgICBcIm5hbWVcIjogXCJ3aGl0ZSBvbmlvbnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTQ1NyxcbiAgICBcIm5hbWVcIjogXCJiYWJ5IHNwaW5hY2ggbGVhdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyNjgsXG4gICAgXCJuYW1lXCI6IFwiZHJpZWQgc2hpaXRha2UgbXVzaHJvb21cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgwNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDAwNSxcbiAgICBcIm5hbWVcIjogXCJmYXJyb1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNTExMjgyLFxuICAgIFwibmFtZVwiOiBcInllbGxvdyBvbmlvblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjQxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNjksXG4gICAgXCJuYW1lXCI6IFwiYmFsc2FtaWMgdmluZWdhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTE4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjUwLFxuICAgIFwibmFtZVwiOiBcImJvc3RvbiBiaWJiIGxldHR1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTU2LFxuICAgIFwibmFtZVwiOiBcImZyZXNoIGNoaXZlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDAyNSxcbiAgICBcIm5hbWVcIjogXCJtYXlvbm5haXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExMTksXG4gICAgXCJuYW1lXCI6IFwibmFwYSBjYWJiYWdlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDA5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTEyLFxuICAgIFwibmFtZVwiOiBcInJlZCBjYWJiYWdlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTg5NjIsXG4gICAgXCJuYW1lXCI6IFwic3dlZXQgY2hpbGkgc2F1Y2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0MixcbiAgICBcIm5hbWVcIjogXCJkcmllZCB0aHltZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMjAsXG4gICAgXCJuYW1lXCI6IFwiZ3JhbnVsYXRlZCBnYXJsaWNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIyOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMzU3MixcbiAgICBcIm5hbWVcIjogXCJncm91bmQgY2h1Y2tcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYwMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMTI1MCxcbiAgICBcIm5hbWVcIjogXCJidXR0ZXJoZWFkIGxldHR1Y2UgbGVhdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNTA2NCxcbiAgICBcIm5hbWVcIjogXCJiYWtlZCBjaGlja2VuIGJyZWFzdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAyMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDE1LFxuICAgIFwibmFtZVwiOiBcImN1cnJ5IHNlYXNvbmluZ1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzEyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDkxNTksXG4gICAgXCJuYW1lXCI6IFwibGltZSBwZWVsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTg5OTEsXG4gICAgXCJuYW1lXCI6IFwibWludCBjaHV0bmV5XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTMxNixcbiAgICBcIm5hbWVcIjogXCJzdHJhd2JlcnJ5XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEwOTAsXG4gICAgXCJuYW1lXCI6IFwiYnJvY2NvbGkgY3Jvd25zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTE4MjEsXG4gICAgXCJuYW1lXCI6IFwic3dlZXQgb3JhbmdlIHBlcHBlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjE4LFxuICAgIFwibmFtZVwiOiBcInBvcmsgdGVuZGVybG9pblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODQ1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MTU3LFxuICAgIFwibmFtZVwiOiBcIm1pbmkgbSZtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTg4NzEsXG4gICAgXCJuYW1lXCI6IFwiaGF3YWlpYW4gc3dlZXQgcm9sbHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUzNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDU1MDYyLFxuICAgIFwibmFtZVwiOiBcImJvbmVsZXNzIHNraW5sZXNzIGNoaWNrZW4gYnJlYXN0c1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODk3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE5MTUxLFxuICAgIFwibmFtZVwiOiBcInJlZXNlIHBpZWNlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzIxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNDEwMDksXG4gICAgXCJuYW1lXCI6IFwiY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTg0MTMsXG4gICAgXCJuYW1lXCI6IFwiZmxhdGJyZWFkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMTE1MjksXG4gICAgXCJuYW1lXCI6IFwiZ3JhcGUgdG9tYXRvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTAxOSxcbiAgICBcIm5hbWVcIjogXCJ1bnN3ZWV0ZW5lZCBhcHBsZSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTU0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE4MDc5LFxuICAgIFwibmFtZVwiOiBcImRyeSBicmVhZGNydW1ic1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTY3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MDY5LFxuICAgIFwibmFtZVwiOiBcImxlZ3VtZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDc5LFxuICAgIFwibmFtZVwiOiBcImRyaWVkIGNyYW5iZXJyaWVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE5MzUsXG4gICAgXCJuYW1lXCI6IFwiY2F0c3VwXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxNTEsXG4gICAgXCJuYW1lXCI6IFwicGlzdGFjaGlvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MTNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE4MjEsXG4gICAgXCJuYW1lXCI6IFwicmVkIHN3ZWV0IHBlcHBlcnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMjdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjYxNSxcbiAgICBcIm5hbWVcIjogXCJ2ZWdldGFibGUgc3RvY2tcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxM1xuICB9XG5dXG5cblxuZXhwb3J0IGRlZmF1bHQgaW5ncmVkaWVudHNEYXRhO1xuIiwibGV0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgZ3JlZXRVc2VyKG5hbWUpIHtcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKTtcbiAgICB1c2VyTmFtZS5pbm5lckhUTUwgPVxuICAgIGAke25hbWV9YC5zcGxpdCgnICcpWzBdICsgJyAnICsgYCR7bmFtZX1gLnNwbGl0KCcgJylbMV07XG4gIH0sXG5cbiAgcG9wdWxhdGVDYXJkcyhyZWNpcGVzLCBjYXJkQXJlYSwgdXNlckZhdm9yaXRlcykge1xuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9ICcnO1xuICAgIGlmIChjYXJkQXJlYS5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbCcpKSB7XG4gICAgICBjYXJkQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdhbGwnKVxuICAgIH1cbiAgICBpZiAocmVjaXBlcykge1xuICAgICAgcmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyQ2FyZHMocmVjaXBlLCBjYXJkQXJlYSwgdXNlckZhdm9yaXRlcyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS9yZWNpcGVzL3JlY2lwZURhdGEnKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgIGRhdGEucmVjaXBlRGF0YS5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNhcmRzKHJlY2lwZSwgY2FyZEFyZWEsIHVzZXJGYXZvcml0ZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycikpO1xuICAgIH1cbiAgfSxcblxuICByZW5kZXJDYXJkcyhyZWNpcGUsIGNhcmRBcmVhLCB1c2VyRmF2b3JpdGVzKSB7XG4gICAgbGV0IGlzRmF2b3JpdGU7XG4gICAgaWYgKHVzZXJGYXZvcml0ZXMgJiYgdXNlckZhdm9yaXRlcy5maW5kKGZhdm9yaXRlUmVjaXBlID0+IGZhdm9yaXRlUmVjaXBlLmlkID09PSByZWNpcGUuaWQpKSB7XG4gICAgICBpc0Zhdm9yaXRlID0gJ2Zhdm9yaXRlLWFjdGl2ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzRmF2b3JpdGUgPSAnJztcbiAgICB9XG4gICAgY2FyZEFyZWEuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgXG4gICAgICBgPGFydGljbGUgaWQ9JyR7cmVjaXBlLmlkfS1jYXJkJyBjbGFzcz0nY2FyZCc+XG4gICAgICAgIDxoZWFkZXIgaWQ9JyR7cmVjaXBlLmlkfS1oZWFkZXInIGNsYXNzPSdjYXJkLWhlYWRlcic+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPSdhZGQtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBhZGQgcmVjaXBlPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9JyR7cmVjaXBlLmlkfS1hZGQnIGFyaWEtbGFiZWw9J2FkZC1idXR0b24nIGNsYXNzPSdhZGQtYnV0dG9uIGNhcmQtYnV0dG9uJz48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9J2Nvb2stYnV0dG9uJyBpZD0nJHtyZWNpcGUuaWR9LWNvb2snPkNvb2sgVGhpcyE8L2J1dHRvbj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9J2Zhdm9yaXRlLWJ1dHRvbicgY2xhc3M9J2hpZGRlbic+Q2xpY2sgdG8gZmF2b3JpdGUgcmVjaXBlPC9sYWJlbD5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9JyR7cmVjaXBlLmlkfS1mYXZvcml0ZScgYXJpYS1sYWJlbD0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0nZmF2b3JpdGUgJHtpc0Zhdm9yaXRlfSBjYXJkLWJ1dHRvbic+PC9idXR0b24+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgIDxhcnRpY2xlIGlkPScke3JlY2lwZS5pZH0tcmVjaXBpZS1uYW1lJyBjbGFzcz0ncmVjaXBlLW5hbWUnPiR7cmVjaXBlLm5hbWV9XG4gICAgICAgICAgICA8aW1nIGlkPScke3JlY2lwZS5pZH0tcGljdHVyZScgdGFiaW5kZXg9JzAnIGNsYXNzPSdjYXJkLXBpY3R1cmUnIHNyYz0nJHtyZWNpcGUuaW1hZ2V9JyBhbHQ9J2NsaWNrIHRvIHZpZXcgcmVjaXBlIGZvciAke3JlY2lwZS5uYW1lfSc+XG4gICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2FydGljbGU+YClcbiAgfSxcblxuICByZW1vdmVBbGwoY2FyZEFyZWEpIHtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdhbGwnKVxuICB9LFxuXG4gIHNob3dOb0Zhdm9yaXRlcyhmYXZCdXR0b24pIHtcbiAgICBmYXZCdXR0b24uaW5uZXJIVE1MID0gJ1lvdSBoYXZlIG5vIGZhdm9yaXRlcyEnO1xuICB9LFxuXG4gIHNob3dOb0Nvb2tMaXN0KHJlY2lwZXNUb0Nvb2tCdXR0b24pIHtcbiAgICByZWNpcGVzVG9Db29rQnV0dG9uLmlubmVySFRNTCA9IFwiWW91IGhhdmUgbm8gY29va2xpc3QhXCI7XG4gIH0sXG5cbiAgZGlzcGxheURpcmVjdGlvbnMocmVjaXBlLCBjb3N0LCBjYXJkQXJlYSkge1xuICAgIGNhcmRBcmVhLmNsYXNzTGlzdC5hZGQoJ2FsbCcpO1xuICAgIGNhcmRBcmVhLmlubmVySFRNTCA9IFxuICAgICAgYDxoMz4ke3JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8cCBjbGFzcz0nYWxsLXJlY2lwZS1pbmZvJz5cbiAgICAgICAgICA8c3Ryb25nPkl0IHdpbGwgY29zdDogPC9zdHJvbmc+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9J2Nvc3QgcmVjaXBlLWluZm8nPiQke2Nvc3R9PC9zcGFuPlxuICAgICAgICAgIDxicj48YnI+XG4gICAgICAgIDxzdHJvbmc+WW91IHdpbGwgbmVlZDogPC9zdHJvbmc+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdpbmdyZWRpZW50cyByZWNpcGUtaW5mbyc+PC9zcGFuPlxuICAgICAgICA8c3Ryb25nPkluc3RydWN0aW9uczogPC9zdHJvbmc+XG4gICAgICAgIDxvbD5cbiAgICAgICAgICA8c3BhbiBjbGFzcz0naW5zdHJ1Y3Rpb25zIHJlY2lwZS1pbmZvJz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvb2w+XG4gICAgICA8L3A+YDtcbiAgICBsZXQgaW5ncmVkaWVudHNTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZ3JlZGllbnRzJyk7XG4gICAgbGV0IGluc3RydWN0aW9uc1NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5zdHJ1Y3Rpb25zJyk7XG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBpbmdyZWRpZW50c1NwYW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDx1bD48bGk+XG4gICAgICAke2luZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50LnRvRml4ZWQoMil9ICR7aW5ncmVkaWVudC5xdWFudGl0eS51bml0fVxuICAgICAgJHtpbmdyZWRpZW50Lm5hbWV9PC9saT48L3VsPlxuICAgICAgYClcbiAgICB9KVxuICAgIHJlY2lwZS5pbnN0cnVjdGlvbnMuZm9yRWFjaChpbnN0cnVjdGlvbiA9PiB7XG4gICAgICBpbnN0cnVjdGlvbnNTcGFuLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBcbiAgICAgICAgYDxsaT4ke2luc3RydWN0aW9uLmluc3RydWN0aW9ufTwvbGk+YClcbiAgICB9KVxuICB9LFxuXG4gIGZhdm9yaXRlc0FkZCh0YXJnZXQpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtYWN0aXZlJyk7XG4gIH0sXG5cbiAgZmF2b3JpdGVzUmVtb3ZlKHRhcmdldCkge1xuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmYXZvcml0ZS1hY3RpdmUnKTtcbiAgfSxcblxuICByZWZyZXNoRmF2b3JpdGVzKGZhdkJ1dHRvbikge1xuICAgIGZhdkJ1dHRvbi5pbm5lckhUTUwgPSAnUmVmcmVzaCBGYXZvcml0ZXMnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCJjbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3Rvcih1c2VySW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLmNvbnRlbnRzID0gdXNlckluZ3JlZGllbnRzO1xuICB9XG4gIGRvSUhhdmVFbm91Z2hGb3JUaGlzKG5hbWVPcklkLCByZWNpcGVEYXRhKSB7XG4gICAgbGV0IHRvZ2dsZSA9IFwiWWVzXCI7XG4gICAgbGV0IHRoaXNSZWNpcGUgPSByZWNpcGVEYXRhLmZpbmQoaW5kZXggPT4ge1xuICAgICAgcmV0dXJuIGluZGV4LmlkID09PSBuYW1lT3JJZCB8fCBpbmRleC5uYW1lID09PSBuYW1lT3JJZDtcbiAgICB9KS5pbmdyZWRpZW50cztcbiAgICB0aGlzUmVjaXBlLmZvckVhY2goaSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY29udGVudHNbaV0pIHtcbiAgICAgICAgdG9nZ2xlID0gXCJOb1wiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgIGlmIChpbmRleC5hbW91bnQgPj0gaW5kZXgucXVhbnRpdHkuYW1vdW50KSB7XG4gICAgICAgICAgICB0b2dnbGUgPT09IFwiWWVzXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0b2dnbGU7XG4gIH1cblxuICBob3dNYW55SW5ncmVkaWVudHNMZWZ0KG5hbWVPcklkLCByZWNpcGVEYXRhKSB7XG4gICAgbGV0IGNvbnRlbnRzSWRzID0gdGhpcy5jb250ZW50cy5tYXAoaW5kZXggPT4ge1xuICAgICAgcmV0dXJuIGluZGV4LmluZ3JlZGllbnQ7XG4gICAgfSlcbiAgICBsZXQgbm90SW5UaGVyZSA9IFtdO1xuICAgIGxldCBpbmdyZWRpZW50RnJvbVJlY2lwZSA9IHJlY2lwZURhdGEuZmluZChpbmRleCA9PiB7XG4gICAgICByZXR1cm4gaW5kZXguaWQgID09PSBuYW1lT3JJZCB8fCBpbmRleC5uYW1lID09PSBuYW1lT3JJZDtcbiAgICB9KTtcbiAgICBpbmdyZWRpZW50RnJvbVJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgIGlmICghY29udGVudHNJZHMuaW5jbHVkZXMoaW5kZXguaWQpKSB7XG4gICAgICAgIG5vdEluVGhlcmUucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vdEluVGhlcmUubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbnRyeTtcbiIsImltcG9ydCBpbmdyZWRpZW50c0RhdGEgZnJvbSAnLi9kYXRhL2luZ3JlZGllbnRzJztcblxuY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLmlkID0gcmVjaXBlLmlkO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSB0aGlzLmdhdGhlckluZ3JlZGllbnRzKHJlY2lwZS5pbmdyZWRpZW50cyk7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhID0gaW5ncmVkaWVudHNEYXRhO1xuICB9XG5cbiAgY2FsY3VsYXRlQ29zdCgpIHtcbiAgICBsZXQgY29zdENvdW50ZXIgPSAwO1xuICAgIHRoaXMuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhLmZpbmQoc3BlY2lmaWNJbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKHNwZWNpZmljSW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgIGNvc3RDb3VudGVyICs9IChOdW1iZXIoc3BlY2lmaWNJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzKSAqXG4gICAgICAgICAgTnVtYmVyKGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gY29zdENvdW50ZXI7XG4gIH1cblxuICBnYXRoZXJJbmdyZWRpZW50cyhpbmdyZWRpZW50cykge1xuICAgIHJldHVybiAgaW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGluZ3JlZGllbnQuaWQsXG4gICAgICAgIHF1YW50aXR5OiBpbmdyZWRpZW50LnF1YW50aXR5LFxuICAgICAgICBuYW1lOiBpbmdyZWRpZW50c0RhdGEuZmluZChpbmdyZWRpZW50SXRlbSA9PiBpbmdyZWRpZW50SXRlbS5pZCA9PT0gaW5ncmVkaWVudC5pZCkubmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlO1xuIiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb20tdXBkYXRlcyc7XG5cbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbmxldCBmYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mYXZvcml0ZXMnKTtcbmxldCByZWNpcGVzVG9Db29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctcmVjaXBpZXMtdG8tY29vaycpO1xubGV0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1jYXJkcycpO1xubGV0IHNlYXJjaEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbnMnKTtcbmxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFueScpO1xuXG5sZXQgdXNlciwgcGFudHJ5LCB1c2VyRGF0YSwgcmVjaXBlRGF0YSwgaW5ncmVkaWVudHNEYXRhO1xubGV0IHVzZXJJZCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0OSkgKyAxKTtcblxud2luZG93Lm9ubG9hZCA9IFxuICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3JlY2lwZXMvcmVjaXBlRGF0YScpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gcmVjaXBlRGF0YSA9IGRhdGEucmVjaXBlRGF0YSlcbiAgICAudGhlbihcbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvaW5ncmVkaWVudHMvaW5ncmVkaWVudHNEYXRhJylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IGluZ3JlZGllbnRzRGF0YSA9IGRhdGEpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3VzZXJzL3djVXNlcnNEYXRhXCIpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgdXNlckRhdGEgPSBkYXRhLndjVXNlcnNEYXRhLmZpbmQodXNlciA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIuaWQgPT09IE51bWJlcih1c2VySWQpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBvblN0YXJ0dXAoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKSlcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycikpXG4gICAgKVxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKSk7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FyZEJ1dHRvbkNvbmRpdGlvbmFscyk7XG5mYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB2aWV3RmF2b3JpdGVzKTtcbmNhcmRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FyZEJ1dHRvbkNvbmRpdGlvbmFscyk7XG5yZWNpcGVzVG9Db29rQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlld1JlY2lwaWVzVG9Db29rKTtcbnNlYXJjaEJ1dHRvbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hSZWNpcGVzKTtcblxuZnVuY3Rpb24gb25TdGFydHVwKCkge1xuICBzZXRVc2VyRGF0YSgpO1xuICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMocmVjaXBlRGF0YSwgY2FyZEFyZWEpO1xufVxuXG5mdW5jdGlvbiBzZXRVc2VyRGF0YSgpIHtcbiAgdXNlciA9IG5ldyBVc2VyKHVzZXJJZCwgdXNlckRhdGEubmFtZSwgdXNlckRhdGEucGFudHJ5KTtcbiAgcGFudHJ5ID0gbmV3IFBhbnRyeSh1c2VyRGF0YS5wYW50cnkpO1xuICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMocmVjaXBlRGF0YSwgY2FyZEFyZWEsIHVzZXIuZmF2b3JpdGVSZWNpcGVzKTtcbiAgZG9tVXBkYXRlcy5ncmVldFVzZXIodXNlci5uYW1lKTtcbiAgZ2V0RmF2b3JpdGVzKCk7XG59XG5cbmZ1bmN0aW9uIHNlYXJjaFJlY2lwZXMoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaC1uYW1lJykpIHtcbiAgc2VhcmNoU3R1ZmYoJ25hbWUnKVxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaC10YWcnKSkge1xuICAgIHNlYXJjaFN0dWZmKCd0YWdzJylcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gc2VhcmNoU3R1ZmYodmFsdWUpIHtcbiAgbGV0IHNlYXJjaGVkRGF0YSA9IHJlY2lwZURhdGEuZmlsdGVyKHJlY2lwZSA9PiByZWNpcGVbYCR7dmFsdWV9YF0uaW5jbHVkZXMoc2VhcmNoQmFyLnZhbHVlKSk7XG4gIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhzZWFyY2hlZERhdGEsIGNhcmRBcmVhLCB1c2VyLmZhdm9yaXRlUmVjaXBlcyk7XG59XG5cbmZ1bmN0aW9uIGdldEZhdm9yaXRlcygpIHtcbiAgaWYgKHVzZXIuZmF2b3JpdGVSZWNpcGVzLmxlbmd0aCkge1xuICAgIHVzZXIuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mYXZvcml0ZSR7cmVjaXBlLmlkfWApLmNsYXNzTGlzdC5hZGQoJ2Zhdm9yaXRlLWFjdGl2ZScpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjYXJkQnV0dG9uQ29uZGl0aW9uYWxzKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmYXZvcml0ZScpKSB7XG4gICAgZmF2b3JpdGVDYXJkKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkLXBpY3R1cmUnKSkge1xuICAgIGdldERpcmVjdGlvbnMoZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hvbWUnKSkge1xuICAgIGZhdkJ1dHRvbi5pbm5lckhUTUwgPSAnVmlldyBGYXZvcml0ZXMnO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhyZWNpcGVEYXRhLCBjYXJkQXJlYSwgdXNlci5mYXZvcml0ZVJlY2lwZXMpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1idXR0b24nKSkge1xuICAgIGFkZFJlY2lwZVRvQ29va0xpc3QoZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nvb2stYnV0dG9uJykpIHtcbiAgICBjb29rQ2FyZChldmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlld0Zhdm9yaXRlcygpIHtcbiAgaWYgKGNhcmRBcmVhLmNsYXNzTGlzdC5jb250YWlucygnYWxsJykpIHtcbiAgICBkb21VcGRhdGVzLnJlbW92ZUFsbChjYXJkQXJlYSk7XG4gIH1cbiAgaWYgKCF1c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbiAgICBkb21VcGRhdGVzLnNob3dOb0Zhdm9yaXRlcyhmYXZCdXR0b24pO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhyZWNpcGVEYXRhLCBjYXJkQXJlYSk7XG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKHVzZXIuZmF2b3JpdGVSZWNpcGVzLCBjYXJkQXJlYSwgdXNlci5mYXZvcml0ZVJlY2lwZXMpO1xuICAgIGRvbVVwZGF0ZXMucmVmcmVzaEZhdm9yaXRlcyhmYXZCdXR0b24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdSZWNpcGllc1RvQ29vaygpIHtcbiAgZmF2QnV0dG9uLmlubmVySFRNTCA9ICdWaWV3IEZhdm9yaXRlcyc7XG4gIGlmIChjYXJkQXJlYS5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbCcpKSB7XG4gICAgZG9tVXBkYXRlcy5yZW1vdmVBbGwoY2FyZEFyZWEpO1xuICB9XG4gIGlmICghdXNlci5yZWNpcGVzVG9Db29rLmxlbmd0aCkge1xuICAgIGRvbVVwZGF0ZXMuc2hvd05vQ29va0xpc3QocmVjaXBlc1RvQ29va0J1dHRvbik7XG4gICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKHJlY2lwZURhdGEsIGNhcmRBcmVhKTtcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHModXNlci5yZWNpcGVzVG9Db29rLCBjYXJkQXJlYSwgdXNlci5mYXZvcml0ZVJlY2lwZXMpO1xuICAgIC8vIGRvbVVwZGF0ZXMucmVmcmVzaEZhdm9yaXRlcyhmYXZCdXR0b24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZhdm9yaXRlQ2FyZChldmVudCkge1xuICBsZXQgdGFyZ2V0ZWRJRCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpKTtcbiAgbGV0IHNwZWNpZmljUmVjaXBlID0gcmVjaXBlRGF0YS5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgID09PSBOdW1iZXIodGFyZ2V0ZWRJRCkpO1xuICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zhdm9yaXRlLWFjdGl2ZScpKSB7XG4gICAgLy8gaXMgdGhlIGFib3ZlIGxpbmUgdXNpbmcgdGhlIERPTSB0byB1cGRhdGUgdGhlIGRhdGEgbW9kZWw/IFNob3VsZCBiZSBhbiBlYXN5IGZpeFxuICAgIHVzZXIuYWRkVG9DYXRlZ29yeShzcGVjaWZpY1JlY2lwZSwgXCJmYXZvcml0ZVJlY2lwZXNcIik7XG4gICAgZG9tVXBkYXRlcy5mYXZvcml0ZXNBZGQoZXZlbnQudGFyZ2V0KTtcbiAgfSBlbHNlIHtcbiAgICB1c2VyLnJlbW92ZUZyb21DYXRlZ29yeShzcGVjaWZpY1JlY2lwZSwgXCJmYXZvcml0ZVJlY2lwZXNcIik7XG4gICAgZG9tVXBkYXRlcy5mYXZvcml0ZXNSZW1vdmUoZXZlbnQudGFyZ2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb29rQ2FyZChldmVudCkge1xuICBsZXQgdGFyZ2V0ZWRJRCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpKSk7XG4gIGxldCBjdXJyZW50UmVjaXBlID0gcmVjaXBlRGF0YS5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IHRhcmdldGVkSUQpO1xuICBpZiAodXNlci5jaGVja1BhbnRyeShjdXJyZW50UmVjaXBlLmluZ3JlZGllbnRzKSkge1xuICAgIHVzZXIuY29vayh0YXJnZXRlZElELCByZWNpcGVEYXRhLCB1c2VySWQpO1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhyZWNpcGVEYXRhLCBjYXJkQXJlYSwgdXNlci5mYXZvcml0ZVJlY2lwZXMpO1xuICAgIGFsZXJ0KFwiWW91IGNvb2tlZCBpdCEgU2VuZGluZyB5b3UgYmFjayB0byB0aGUgaG9tZSBwYWdlLi4uXCIpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdZb3UgZG9uXFwndCBoYXZlIGFsbCB0aGUgaW5ncmVkaWVudHMgZm9yIHRoaXMgcmVjaXBlIScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFJlY2lwZVRvQ29va0xpc3QoZXZlbnQpIHtcbiAgbGV0IHRhcmdldGVkSUQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMCwgZXZlbnQudGFyZ2V0LmlkLmluZGV4T2YoJy0nKSk7XG4gIGxldCBzcGVjaWZpY1JlY2lwZSA9IHJlY2lwZURhdGEuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkICA9PT0gTnVtYmVyKHRhcmdldGVkSUQpKTtcbiAgaWYgKCF1c2VyLnJlY2lwZXNUb0Nvb2suaW5jbHVkZXMoc3BlY2lmaWNSZWNpcGUpKSB7XG4gICAgdXNlci5hZGRUb0NhdGVnb3J5KHNwZWNpZmljUmVjaXBlLCBcInJlY2lwZXNUb0Nvb2tcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGlyZWN0aW9ucyhldmVudCkge1xuICBsZXQgdGFyZ2V0ZWRJRCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpKVxuICBsZXQgbmV3UmVjaXBlSW5mbyA9IHJlY2lwZURhdGEuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBOdW1iZXIodGFyZ2V0ZWRJRCkpXG4gIGxldCByZWNpcGVPYmplY3QgPSBuZXcgUmVjaXBlKG5ld1JlY2lwZUluZm8sIGluZ3JlZGllbnRzRGF0YS5pbmdyZWRpZW50c0RhdGEpO1xuICBsZXQgY29zdCA9IHJlY2lwZU9iamVjdC5jYWxjdWxhdGVDb3N0KCk7XG4gIGxldCBjb3N0SW5Eb2xsYXJzID0gKGNvc3QgLyAxMDApLnRvRml4ZWQoMik7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheURpcmVjdGlvbnMocmVjaXBlT2JqZWN0LCBjb3N0SW5Eb2xsYXJzLCBjYXJkQXJlYSk7XG59IiwiY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBwYW50cnkpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IHBhbnRyeTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICB9XG5cbiAgYWRkVG9DYXRlZ29yeShyZWNpcGUsIHByb3BlcnR5KSB7XG4gICAgaWYgKCF0aGlzW3Byb3BlcnR5XS5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5XS5wdXNoKHJlY2lwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRnJvbUNhdGVnb3J5KHJlY2lwZSwgcHJvcGVydHkpIHtcbiAgICBjb25zdCBpID0gdGhpc1twcm9wZXJ0eV0uaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXNbcHJvcGVydHldLnNwbGljZShpLCAxKVxuICB9XG5cbiAgZmlsdGVyUmVjaXBlcyh0YWcsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHRoaXNbcHJvcGVydHldLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZyk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kSW5DYXRlZ29yeShzdHJnVG9TcmNoLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzW3Byb3BlcnR5XS5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKVxuICAgICAgfHwgcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoc3RyZ1RvU3JjaClcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tQYW50cnkocmVjaXBlSW5ncmVkaWVudHMpIHtcbiAgICBsZXQgdG9nZ2xlID0gZmFsc2U7XG4gICAgbGV0IHRvZ2dsZUFycmF5ID0gW11cbiAgICBsZXQgcmVjaXBlSW5ncmVkaWVudHNGb3JSZWNpcGUgPSB0aGlzLnJldHVybkFtb3VudChyZWNpcGVJbmdyZWRpZW50cylcbiAgICBsZXQgcmVjaXBlSWRzID0gcmVjaXBlSW5ncmVkaWVudHMubWFwKGluZGV4ID0+IHtcbiAgICAgIHJldHVybiBpbmRleC5pZDtcbiAgICB9KTtcbiAgICBsZXQgcGFudHJ5SW5ncmVkaWVudHNJblJlY2lwZSA9IHRoaXMucGFudHJ5LmZpbHRlcihpbmdyZWRpZW50ID0+IHtcbiAgICAgIGxldCBmb3VuZEluZ3JlZGllbnRzID0gcmVjaXBlSWRzLmZpbmQocmVjaXBlSUQgPT4ge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5pbmdyZWRpZW50ID09PSByZWNpcGVJRDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZvdW5kSW5ncmVkaWVudHMgIT09IHVuZGVmaW5lZDsgXG4gICAgfSk7XG5cbiAgICBsZXQgc29ydGVkUGFudHJ5SW5ncmVkaWVudHMgPSBwYW50cnlJbmdyZWRpZW50c0luUmVjaXBlLnNvcnQoKGluZ3JlZGllbnRBLCBpbmdyZWRpZW50QikgPT4ge1xuICAgICAgcmV0dXJuIGluZ3JlZGllbnRBLmluZ3JlZGllbnQgLSBpbmdyZWRpZW50Qi5pbmdyZWRpZW50O1xuICAgIH0pXG4gICAgbGV0IHNvcnRlZFJlY2lwZUluZ3JlZGllbnRzID0gcmVjaXBlSW5ncmVkaWVudHNGb3JSZWNpcGUuc29ydCgoaW5ncmVkaWVudEEsIGluZ3JlZGllbnRCKSA9PiB7XG4gICAgICByZXR1cm4gaW5ncmVkaWVudEEuaW5ncmVkaWVudElEIC0gaW5ncmVkaWVudEIuaW5ncmVkaWVudElEO1xuICAgIH0pO1xuICAgIHNvcnRlZFJlY2lwZUluZ3JlZGllbnRzLmZvckVhY2goKGluZ3JlZGllbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoc29ydGVkUGFudHJ5SW5ncmVkaWVudHNbaW5kZXhdICYmIHNvcnRlZFBhbnRyeUluZ3JlZGllbnRzW2luZGV4XS5hbW91bnQgKyBwYXJzZUludChpbmdyZWRpZW50LmluZ3JlZGllbnRNb2RpZmljYXRpb24pID49IDApIHtcbiAgICAgICAgdG9nZ2xlQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZ2dsZUFycmF5LnB1c2goZmFsc2UpO1xuICAgICAgfVxuICAgIH0pXG4gICAgbGV0IHRvZ2dsZURlY2lkZXIgPSB0b2dnbGVBcnJheS5maW5kKGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmICh0b2dnbGVEZWNpZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRvZ2dsZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0b2dnbGU7XG4gIH1cblxuICByZXR1cm5BbW91bnQocmVjaXBlSW5ncmVkaWVudHMpIHtcbiAgICBsZXQgcmVjaXBlSW5ncmVkaWVudHNGcm9tUGFudHJ5ID0gW107XG4gICAgcmVjaXBlSW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHZhciBpbmdyZWRpZW50RGF0YSA9IHtcbiAgICAgICAgdXNlcklEOiB0aGlzLmlkLFxuICAgICAgICBpbmdyZWRpZW50SUQ6IGluZ3JlZGllbnQuaWQsXG4gICAgICAgIGluZ3JlZGllbnRNb2RpZmljYXRpb246IC1pbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudFxuICAgICAgfVxuICAgICAgcmVjaXBlSW5ncmVkaWVudHNGcm9tUGFudHJ5LnB1c2goaW5ncmVkaWVudERhdGEpO1xuICAgIH0pXG4gICAgcmV0dXJuIHJlY2lwZUluZ3JlZGllbnRzRnJvbVBhbnRyeTtcbiAgfVxuXG4gIHJldHVyblNob3BwaW5nTGlzdChyZWNpcGVJbmdyZWRpZW50cywgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgbGV0IGdyb2NlcmllcyA9IHRoaXMucmV0dXJuQW1vdW50KHJlY2lwZUluZ3JlZGllbnRzKTtcbiAgICBsZXQgbm90RW5vdWdoR3JvY2VyaWVzID0gZ3JvY2VyaWVzLmZpbHRlcihpbmdyZWRpZW50ID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50LmluZ3JlZGllbnRNb2RpZmljYXRpb24gPCAwXG4gICAgfSlcbiAgICBsZXQgZm91bmRJbmdyZWRpZW50cyA9IFtdO1xuICAgIGxldCBzaG9wcGluZ0xpc3QgPSBub3RFbm91Z2hHcm9jZXJpZXMubWFwKG5lZ2F0aXZlR3JvY2VyeSA9PiB7XG4gICAgICBsZXQgZm91bmRJbmdyZWRpZW50ID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50LmlkID09PSBuZWdhdGl2ZUdyb2NlcnkuaWQ7XG4gICAgICB9KTtcbiAgICAgIGZvdW5kSW5ncmVkaWVudHMucHVzaChmb3VuZEluZ3JlZGllbnQpO1xuICAgICAgbmVnYXRpdmVHcm9jZXJ5Lmdyb2NlcnlMaXN0Q29zdCA9IGZvdW5kSW5ncmVkaWVudHNbZm91bmRJbmdyZWRpZW50cy5sZW5ndGggLSAxXS5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIG5lZ2F0aXZlR3JvY2VyeS5pbmdyZWRpZW50TW9kaWZpY2F0aW9uO1xuICAgICAgcmV0dXJuIG5lZ2F0aXZlR3JvY2VyeTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2hvcHBpbmdMaXN0O1xuICB9XG5cbiAgY29vayhyZWNpcGVJRCwgcmVjaXBlRGF0YSwgdXNlcklkKSB7XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rLmZvckVhY2goKHJlY2lwZVRvQ29vaywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChyZWNpcGVUb0Nvb2suaWQgPT09IHJlY2lwZUlEKSB7XG4gICAgICAgIHRoaXMucmVjaXBlc1RvQ29vay5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBjdXJyZW50UmVjaXBlID0gcmVjaXBlRGF0YS5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IHJlY2lwZUlEKVxuICAgIGxldCBpbmdyZWRpZW50c1RvUmVtb3ZlID0gdGhpcy5yZXR1cm5BbW91bnQoY3VycmVudFJlY2lwZS5pbmdyZWRpZW50cylcbiAgICBpbmdyZWRpZW50c1RvUmVtb3ZlLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgaW50ID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudClcbiAgICAgIH1cbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnLCBpbnQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICBmZXRjaChcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YVwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IGRhdGEud2NVc2Vyc0RhdGEuZmluZCh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlci5pZCA9PT0gTnVtYmVyKHVzZXJJZCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLnBhbnRyeSA9IHVzZXJEYXRhLnBhbnRyeTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycikpXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJzb3VyY2VSb290IjoiIn0=