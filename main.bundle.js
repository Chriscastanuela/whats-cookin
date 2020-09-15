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
exports.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\nbody {\n  background-color: pink; }\n", ""]);



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
// import Recipe from './recipe';

// import scripts from './scripts';

// let favButton = document.querySelector('.view-favorites');
// let cardArea = document.querySelector('.all-cards');

let domUpdates = {

  greetUser(name) {
    const userName = document.querySelector('.user-name');
    //should pull this querySelector out of function into global
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

  // displayFavorites(userFavorites, cardArea) {
  //     cardArea.innerHTML = '';
  //     userFavorites.forEach(recipe => {
  //       cardArea.insertAdjacentHTML('afterbegin', 
  //         `<article id='${recipe.id}-card' class='card'>
  //           <header id='${recipe.id}-header' class='card-header'>
  //             <label for='add-button' class='hidden'>Click to add recipe</label>
  //             <button id='${recipe.id}-add' aria-label='add-button' class='add-button card-button'>
  //             <label for='favorite-button' class='hidden'>Click to favorite recipe
  //             </label>
  //             <button id='${recipe.id}-favorite-button' aria-label='favorite-button' class='favorite favorite-active card-button'>
  //             </button>
  //           </header>
  //           <article id='${recipe.id}-recipie-name' class='recipe-name'>${recipe.name}</article>
  //           <img id='${recipe.id}-picture' tabindex='0' class='card-picture' src='${recipe.image}' alt='Food from recipe'>
  //         </article>`)
  //     });
  //   // }
  // },

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
    // should find a way to either make these selectors global or remove them
    // if kept, change span and rename to not include element type in name
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
let userId = 1;

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
  // console.log('name', user.findInCategory(searchBar.value, 'name'))
  searchStuff('name')
  } else if (event.target.classList.contains('search-tag')) {
    // console.log('tag', user.findInCategory(searchBar.value, 'tag'))
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
    // we can use break if we are not trying to return anything
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
    // maybe populate with specific view
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


/*
searchRecipies(stringToSearch, property) {
  

}



*/



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzP2EyMzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzcz8xM2IxIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2luZ3JlZGllbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20tdXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFudHJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNpcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFp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O0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlLDhFQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNydEMvQjtBQUFBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLEtBQUssMkJBQTJCLEtBQUs7QUFDNUMsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQyxzQkFBc0IsVUFBVTtBQUNoQztBQUNBLDBCQUEwQixVQUFV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Q0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFZSxtRUFBSSxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhpcyBpcyBhbiBleGFtcGxlIG9mIHVzaW5nIFNhc3MsIG90aGVyd2lzZSBwbGFpbiBDU1Mgd29ya3MgdG9vKi9cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NTE1QztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzg1MTVjLCAjNDA1ODY0LCAjNDg2MDZiLCAjNTE2NzczLCAjNTk2ZjdiLCAjNTk3MjdlLCAjNTk3NjgyLCAjNTk3OTg1LCAjNTA3ODg0LCAjNDU3NzgyLCAjM2E3NjgwLCAjMmU3NTdkKTsgfVxcblxcbmJvZHkge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzM4NTE1YywgIzQwNTg2NCwgIzQ4NjA2YiwgIzUxNjc3MywgIzU5NmY3YiwgIzU5NzI3ZSwgIzU5NzY4MiwgIzU5Nzk4NSwgIzUwNzg4NCwgIzQ1Nzc4MiwgIzNhNzY4MCwgIzJlNzU3ZCk7IH1cXG5cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzUxNUM7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzODUxNWMsICM0MDU4NjQsICM0ODYwNmIsICM1MTY3NzMsICM1OTZmN2IsICM1OTcyN2UsICM1OTc2ODIsICM1OTc5ODUsICM1MDc4ODQsICM0NTc3ODIsICMzYTc2ODAsICMyZTc1N2QpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5oMSB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjMDAwO1xcbiAgZm9udC1zaXplOiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAzMCU7XFxuICBmb250LWZhbWlseTogJ1llbGxvd3RhaWwnLCBjdXJzaXZlO1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjNjQ3QTg1OyB9XFxuXFxuLm1haW4taGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRTY7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogOTVweDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5tYWluLWhlYWRlciA+IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNjVweDtcXG4gIGZvbnQtc2l6ZTogNjUlOyB9XFxuXFxuLm1haW4taGVhZGVyID4gaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiA2NSU7IH1cXG5cXG4ubmF2QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRTY7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMDAwO1xcbiAgd2lkdGg6IGF1dG87XFxuICBmb250LXNpemU6IDEzMCU7XFxuICBtYXJnaW46IDElO1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjNjQ3QTg1OyB9XFxuXFxuLnVzZXItaW5mbyB7XFxuICBmb250LXNpemU6IDE0MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMzUlOyB9XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XFxuICB3aWR0aDogYXV0bzsgfVxcblxcbi5zZWFyY2gtdGFnOmhvdmVyLFxcbi5zZWFyY2gtbmFtZTpob3ZlcixcXG4uc2VhcmNoLXRhZzpob3ZlcixcXG4uc2VhcmNoLWltYWdlOmhvdmVyLFxcbi5jYXJkLWJ1dHRvbjpob3ZlcixcXG4ubmF2QnV0dG9uOmhvdmVyLFxcbi5zZWFyY2gtYnV0dG9uOmhvdmVyLFxcbi5jb29rLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRjM2ViO1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjNjQ3QTg1O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNvb2stYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiAnWWVsbG93dGFpbCcsIGN1cnNpdmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzNDMkM2O1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjNjQ3QTg1O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRTY7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3JTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3JTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDElO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDElOyB9XFxuXFxuLnNlYXJjaC10YWc6YWN0aXZlLFxcbi5zZWFyY2gtbmFtZTphY3RpdmUsXFxuLnNlYXJjaC10YWc6YWN0aXZlLFxcbi5zZWFyY2gtaW1hZ2U6YWN0aXZlLFxcbi5jYXJkLWJ1dHRvbjphY3RpdmUsXFxuLm5hdkJ1dHRvbjphY3RpdmUsXFxuLnNlYXJjaC1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDM0MyQzY7XFxuICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM2NDdBODU7IH1cXG5cXG4uY2FyZC1idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXG4gIGhlaWdodDogMjdweDtcXG4gIG1hcmdpbjogM3B4O1xcbiAgd2lkdGg6IDI3cHg7XFxuICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM2NDdBODU7IH1cXG5cXG4uYWRkLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUU2O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8zMi8zMjMzOS5zdmcpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJveC1zaGFkb3c6IDVweCAxMHB4IDE4cHggIzY0N0E4NTsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5mYXZvcml0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUU2O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy8xNDkvMTQ5MjIyLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuXFxuLmFsbC1jYXJkcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDMwMHB4KTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMzBweCAwIDMwcHggMzBweDtcXG4gIHdpZHRoOiA5NS41dnc7IH1cXG5cXG5pbWcge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFFNjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMDA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBib3gtc2hhZG93OiA1cHggMTBweCAxOHB4ICM2NDdBODU7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3JTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3JTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDElO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDElOyB9XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRTY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY3NTdEO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuXFxuLmFsbCB7XFxuICBncmlkLWdhcDogMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTsgfVxcblxcbi5hbGwtcmVjaXBlLWluZm8sXFxub2wge1xcbiAgY29sb3I6ICNGMUYxRTY7XFxuICBmb250LXNpemU6IDIyMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmgzIHtcXG4gIGNvbG9yOiAjRjFGMUU2O1xcbiAgZm9udC1zaXplOiAyNTAlOyB9XFxuXFxuLnJlY2lwZS1uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLmNhcmQtcGljdHVyZTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjc7IH1cXG5cXG4uY2FyZC1ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDkwJTsgfVxcblxcbi5jYXJkLXBpY3R1cmU6YWN0aXZlIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7IH1cXG5cXG4uY2FyZC1waWN0dXJlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDMlIDhweCAyLjYlO1xcbiAgd2lkdGg6IDk0JTtcXG4gIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjNjQ3QTg1OyB9XFxuXFxuLmZhdm9yaXRlLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzE0OC8xNDg4NDEuc3ZnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cXG5cXG4uc2VhcmNoLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4OyB9XFxuXFxuLnNlYXJjaC1uYW1lLCAuc2VhcmNoLXRhZyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgYm94LXNoYWRvdzogNXB4IDEwcHggMThweCAjNjQ3QTg1OyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImxldCBpbmdyZWRpZW50c0RhdGEgPSBbXG4gIHtcbiAgICBcImlkXCI6IDIwMDgxLFxuICAgIFwibmFtZVwiOiBcIndoZWF0IGZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTgzNzIsXG4gICAgXCJuYW1lXCI6IFwiYmljYXJib25hdGUgb2Ygc29kYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTgyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjMsXG4gICAgXCJuYW1lXCI6IFwiZWdnc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDcyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MzM1LFxuICAgIFwibmFtZVwiOiBcInN1Y3Jvc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkwMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTIwNixcbiAgICBcIm5hbWVcIjogXCJpbnN0YW50IHZhbmlsbGEgcHVkZGluZ1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjYwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MzM0LFxuICAgIFwibmFtZVwiOiBcImJyb3duIHN1Z2FyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0NyxcbiAgICBcIm5hbWVcIjogXCJzYWx0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyODBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMjA0NyxcbiAgICBcIm5hbWVcIjogXCJmaW5lIHNlYSBzYWx0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTk5MDMsXG4gICAgXCJuYW1lXCI6IFwic2VtaSBzd2VldCBjaGlwc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjUzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDUsXG4gICAgXCJuYW1lXCI6IFwidW5zYWx0ZWQgYnV0dGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA1MCxcbiAgICBcIm5hbWVcIjogXCJ2YW5pbGxhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwOTAxNixcbiAgICBcIm5hbWVcIjogXCJhcHBsZSBjaWRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDY4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwMDMsXG4gICAgXCJuYW1lXCI6IFwiYXBwbGVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDAyNyxcbiAgICBcIm5hbWVcIjogXCJjb3JuIHN0YXJjaFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjM2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwNDYsXG4gICAgXCJuYW1lXCI6IFwiZGlqb24gc3R5bGUgbXVzdGFyZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjE5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjE1LFxuICAgIFwibmFtZVwiOiBcIndob2xlIGdhcmxpYyBjbG92ZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjIwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTIwNDYsXG4gICAgXCJuYW1lXCI6IFwid2hvbGUgZ3JhaW4gZGlqb24gbXVzdGFyZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODY3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5OTExLFxuICAgIFwibmFtZVwiOiBcIm1hcGxlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYxMTIsXG4gICAgXCJuYW1lXCI6IFwibWlzb1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTc4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDEwMDYyLFxuICAgIFwibmFtZVwiOiBcInBvcmsgY2hvcFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODM0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgXCJuYW1lXCI6IFwicyZwXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MjRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYxMjQsXG4gICAgXCJuYW1lXCI6IFwic295IHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0ODZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxNjE2OCxcbiAgICBcIm5hbWVcIjogXCJzcmlyYWNoYSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTc2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgXCJuYW1lXCI6IFwiYmxhY2sgcGVwcGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMSxcbiAgICBcIm5hbWVcIjogXCJidXR0ZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0NTgyLFxuICAgIFwibmFtZVwiOiBcIm9pbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODA3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMzEsXG4gICAgXCJuYW1lXCI6IFwicmVkIHBlcHBlciBwb3dkZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU4M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1MTAwLFxuICAgIFwibmFtZVwiOiBcImNoaWNrZW4gd2luZ1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTkzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDksXG4gICAgXCJuYW1lXCI6IFwicmVkIGNoaWxpIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDk5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjIwMjAsXG4gICAgXCJuYW1lXCI6IFwiZ2FybGljIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQ0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDYxNjgsXG4gICAgXCJuYW1lXCI6IFwidGFiYXNjbyBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkxNzYsXG4gICAgXCJuYW1lXCI6IFwibWFuZ29lc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDI1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMjYsXG4gICAgXCJuYW1lXCI6IFwib25pb24gcG93ZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1OTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA0MjA0NyxcbiAgICBcIm5hbWVcIjogXCJzZWFzb25lZCBzYWx0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTgzNzEsXG4gICAgXCJuYW1lXCI6IFwiYmFraW5nIHBvd2RlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQ2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwNDAsXG4gICAgXCJuYW1lXCI6IFwicmlwZSBiYW5hbmFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMzMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDAxMSxcbiAgICBcIm5hbWVcIjogXCJidWNrIHdoZWF0IGZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIzMCxcbiAgICBcIm5hbWVcIjogXCJidXR0ZXJtaWxrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NzNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkyOTYsXG4gICAgXCJuYW1lXCI6IFwicnVubnkgaG9uZXlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjA5OCxcbiAgICBcIm5hbWVcIjogXCJwZWFudXQgYnV0dGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0OTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0OCxcbiAgICBcIm5hbWVcIjogXCJhcHBsZSBjaWRlciB2aW5lZ2FyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwOTAsXG4gICAgXCJuYW1lXCI6IFwiYnJvd24gcmljZSBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjY3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNzg0LFxuICAgIFwibmFtZVwiOiBcImJyb3duIHJpY2Ugc3lydXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEyNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI0LFxuICAgIFwibmFtZVwiOiBcImVnZyBhbGJ1bWVuXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MjUsXG4gICAgXCJuYW1lXCI6IFwiZXZhcG9yYXRlZCBjYW5lIGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIyMjAsXG4gICAgXCJuYW1lXCI6IFwiZmxheCBtZWFsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMTgzNzUsXG4gICAgXCJuYW1lXCI6IFwiaW5zdGFudCB5ZWFzdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzgzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MzA0LFxuICAgIFwibmFtZVwiOiBcInVuc3VsZnVyZWQgbW9sYXNzZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTQxMyxcbiAgICBcIm5hbWVcIjogXCJQb3RhdG8gU3RhcmNoIEZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2OTYsXG4gICAgXCJuYW1lXCI6IFwidGFwaW9jYSBzdGFyY2hcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5Mzc2MCxcbiAgICBcIm5hbWVcIjogXCJXaG9sZSBHcmFpbiBUZWZmIEZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgXCJuYW1lXCI6IFwiaWNlIHdhdGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MjVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MjYsXG4gICAgXCJuYW1lXCI6IFwieGFudGhhbiBndW1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYyNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTM1MCxcbiAgICBcIm5hbWVcIjogXCJjb3JuIHN5cnVwXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTA5OSxcbiAgICBcIm5hbWVcIjogXCJmcnVpdCBjb2NrdGFpbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTUzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMDYxLFxuICAgIFwibmFtZVwiOiBcIndob2xlIGFsbW9uZHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMjlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIxMDQsXG4gICAgXCJuYW1lXCI6IFwiY29jb251dFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTE4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTE1LFxuICAgIFwibmFtZVwiOiBcImNvY29udXQgY3JlYW1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0MDQ3LFxuICAgIFwibmFtZVwiOiBcImNvY29udXQgb2lsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTkwNzEsXG4gICAgXCJuYW1lXCI6IFwiZGFyayBjaG9jb2xhdGUgbW9yc2Vsc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjMyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDgyMTIsXG4gICAgXCJuYW1lXCI6IFwiZ3Jhbm9sYSBjZXJlYWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM4MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA4MTIxLFxuICAgIFwibmFtZVwiOiBcIm9hdG1lYWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjE0MixcbiAgICBcIm5hbWVcIjogXCJwZWNhblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzE0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNzQwLFxuICAgIFwibmFtZVwiOiBcImJsYW5jaGVkIGFsbW9uZCBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjUsXG4gICAgXCJuYW1lXCI6IFwiZWdnIHlvbGtzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4ODlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTIwMjMsXG4gICAgXCJuYW1lXCI6IFwic2VzYW1lIHNlZWRzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4ODZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxNTA2MixcbiAgICBcIm5hbWVcIjogXCJjaGlja2VuIHRlbmRlcnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMTEwOSxcbiAgICBcIm5hbWVcIjogXCJzbGF3IG1peFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjgxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTE2MDk4LFxuICAgIFwibmFtZVwiOiBcImNyZWFteSBwZWFudXQgYnV0dGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA2NCxcbiAgICBcIm5hbWVcIjogXCJtaW50XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAyMSxcbiAgICBcIm5hbWVcIjogXCJwb3dkZXJlZCBnaW5nZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc4M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MTYwLFxuICAgIFwibmFtZVwiOiBcImp1aWNlIG9mIGxpbWVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ3N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MjY2LFxuICAgIFwibmFtZVwiOiBcInBpbmVhcHBsZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODM0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTM1LFxuICAgIFwibmFtZVwiOiBcImNhdWxpZmxvd2VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0ODZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjE3MixcbiAgICBcIm5hbWVcIjogXCJjaGlja2VuIHN0b2NrXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NTRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MzIsXG4gICAgXCJuYW1lXCI6IFwiZ2hlZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzcwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTIwLFxuICAgIFwibmFtZVwiOiBcImhhemVsbnV0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2OTAsXG4gICAgXCJuYW1lXCI6IFwibnV0cml0aW9uYWwgeWVhc3QgZmxha2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyODIsXG4gICAgXCJuYW1lXCI6IFwib25pb25zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MzlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTAxMjMsXG4gICAgXCJuYW1lXCI6IFwicHJvc2N1aXR0b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjE3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMDk2LFxuICAgIFwibmFtZVwiOiBcInJhcGluaVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODQ2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDYxNTAsXG4gICAgXCJuYW1lXCI6IFwiYmFyIGIgcXVlIHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNjE5NCxcbiAgICBcIm5hbWVcIjogXCJjaGlja2VuIGJyb3RoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5ODNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM2MjcsXG4gICAgXCJuYW1lXCI6IFwibGlxdWlkIHNtb2tlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAyOCxcbiAgICBcIm5hbWVcIjogXCJwYXByaWthXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwNzIsXG4gICAgXCJuYW1lXCI6IFwicG9yayBzaG91bGRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDY5NzEsXG4gICAgXCJuYW1lXCI6IFwid29yY2VzdGVyc2hpcmVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjA3LFxuICAgIFwibmFtZVwiOiBcImFsbW9uZG1pbGtcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc4N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxODk0MixcbiAgICBcIm5hbWVcIjogXCJncmFoYW0gY3JhY2tlciBjcnVzdFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTIwMTAsXG4gICAgXCJuYW1lXCI6IFwiZ3JvdW5kIGNpbm5hbW9uXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAyNSxcbiAgICBcIm5hbWVcIjogXCJudXRtZWcgcG93ZGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0ODBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNDMyNzQsXG4gICAgXCJuYW1lXCI6IFwibG93IGZhdCBjcmVhbSBjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwNDhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogODEyMCxcbiAgICBcIm5hbWVcIjogXCJ3aG9sZSBncmFpbiByb2xsZWQgb2F0c1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE0MjQsXG4gICAgXCJuYW1lXCI6IFwiY2FubmVkIHB1bXBraW5cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDE2LFxuICAgIFwibmFtZVwiOiBcImFwcGxlIGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MTBcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTgwNDcsXG4gICAgXCJuYW1lXCI6IFwicmFpc2luIGJyZWFkXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMjJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA4OTAwMyxcbiAgICBcIm5hbWVcIjogXCJncmFubnlzbWl0aCBhcHBsZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNzcsXG4gICAgXCJuYW1lXCI6IFwiZnVsbC1mYXQgbWlsa1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjc2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMjk3LFxuICAgIFwibmFtZVwiOiBcImZsYXQgbGVhZiBwYXJzbGV5IGxlYXZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAzMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDMyMDA5LFxuICAgIFwibmFtZVwiOiBcImRyaWVkIHJlZCBjaGlsaVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAxNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNTE1MixcbiAgICBcIm5hbWVcIjogXCJqdW1ibyBzaHJpbXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgwNFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI5NCxcbiAgICBcIm5hbWVcIjogXCJ2aWRhbGlhIG9uaW9uXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1OTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEwMDcsXG4gICAgXCJuYW1lXCI6IFwiYXJ0aWNob2tlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjAzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkxNTAsXG4gICAgXCJuYW1lXCI6IFwibGVtb25cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc2NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MTU2LFxuICAgIFwibmFtZVwiOiBcImxlbW9uIHBlZWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxODA2OSxcbiAgICBcIm5hbWVcIjogXCJnbHV0ZW4tZnJlZSB3aGl0ZSBzYW5kd2ljaCBicmVhZFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODYzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMzMsXG4gICAgXCJuYW1lXCI6IFwicGFybWVzYW4gY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzOThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAyNyxcbiAgICBcIm5hbWVcIjogXCJvcmVnYW5vXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAzNDA1MyxcbiAgICBcIm5hbWVcIjogXCJleHRyYSB2aXJnaW4gb2xpdmUgb2lsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjAwNCxcbiAgICBcIm5hbWVcIjogXCJiYXkgbGVhdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3ODVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkzMzYsXG4gICAgXCJuYW1lXCI6IFwicG93ZGVyZWQgc3VnYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTE0MyxcbiAgICBcIm5hbWVcIjogXCJjZWxlcnlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg0MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI5LFxuICAgIFwibmFtZVwiOiBcImhhcmRjb29rZWQgZWdnc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODgyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQ2NDEsXG4gICAgXCJuYW1lXCI6IFwicmVkdWNlZCBmYXQgbWF5b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjk3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTEyNTYsXG4gICAgXCJuYW1lXCI6IFwic2tpbSBncmVlayB5b2d1cnRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI2M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTk0NCxcbiAgICBcIm5hbWVcIjogXCJob3Rkb2cgcmVsaXNoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzOTFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTEyODIsXG4gICAgXCJuYW1lXCI6IFwicmVkIG9uaW9uXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEzNTMsXG4gICAgXCJuYW1lXCI6IFwiaWRhaG8gcG90YXRvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMTE4MjEsXG4gICAgXCJuYW1lXCI6IFwiYmVsbCBwZXBwZXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAyMDA0OCxcbiAgICBcIm5hbWVcIjogXCJicm93biBtaW51dGUgcmljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzg2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjUxLFxuICAgIFwibmFtZVwiOiBcIml0YWxpYW4gY2hlZXNlIGJsZW5kXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMzNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogNzkyNyxcbiAgICBcIm5hbWVcIjogXCJzd2VldCBpdGFsaWFuIHR1cmtleSBzYXVzYWdlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE1NDksXG4gICAgXCJuYW1lXCI6IFwiY2FubmVkIHRvbWF0byBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjIyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTIwMTI5LFxuICAgIFwibmFtZVwiOiBcImJyZWFkIGZsb3VyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMTRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA1MyxcbiAgICBcIm5hbWVcIjogXCJjcmVhbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjQ1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDQwNTMsXG4gICAgXCJuYW1lXCI6IFwicHVyZSBvbGl2ZSBvaWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcwNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTkxMixcbiAgICBcIm5hbWVcIjogXCJhZ2F2ZSBzeXJ1cFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMDgwLFxuICAgIFwibmFtZVwiOiBcInBhc3RyeSBmbG91clwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDk3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE5MzM0LFxuICAgIFwibmFtZVwiOiBcImRhcmsgYnJvd24gc3VnYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUwMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzgxNCxcbiAgICBcIm5hbWVcIjogXCJsaWdodGx5IHN3ZWV0ZW5lZCB3aGlwcGVkIGNyZWFtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTIwNixcbiAgICBcIm5hbWVcIjogXCJjdWN1bWJlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjYyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMDM1LFxuICAgIFwibmFtZVwiOiBcInF1aW5vYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTE0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNTI5LFxuICAgIFwibmFtZVwiOiBcImhlaXJsb29tIHRvbWF0b2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMjFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQyNDIsXG4gICAgXCJuYW1lXCI6IFwiY3JhbmJlcnJ5IGp1aWNlIGNvY2t0YWlsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTQxMzAsXG4gICAgXCJuYW1lXCI6IFwiY3JlYW0gc29kYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTg1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE5MTc3LFxuICAgIFwibmFtZVwiOiBcImdlbGF0aW5lXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDExXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkzNjQ1LFxuICAgIFwibmFtZVwiOiBcImhhbGxvd2VlbiBzcHJpbmtsZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5M1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNDA1MSxcbiAgICBcIm5hbWVcIjogXCJncmV5IGdvb3NlIHZvZGthXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNzNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA1NCxcbiAgICBcIm5hbWVcIjogXCJ3aGlwcGVkIGNyZWFtXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2ODlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTM4MjgsXG4gICAgXCJuYW1lXCI6IFwibWFyaW5hdGVkIGFydGljaG9rZSBoZWFydHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI2NixcbiAgICBcIm5hbWVcIjogXCJjcmltaW5pIG11c2hyb29tc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTUwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTcsXG4gICAgXCJuYW1lXCI6IFwiY3JlYW0gY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxOSxcbiAgICBcIm5hbWVcIjogXCJmZXRhXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDAzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjIwMjcsXG4gICAgXCJuYW1lXCI6IFwibWl4ZWQgaXRhbGlhbiBoZXJic1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjUzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwODIwNDcsXG4gICAgXCJuYW1lXCI6IFwia29zaGVyIHNhbHRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMTQ1NyxcbiAgICBcIm5hbWVcIjogXCJzcGluYWNoXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMzZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0NCxcbiAgICBcIm5hbWVcIjogXCJmcmVzaCBiYXNpbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjAzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDcwMzYsXG4gICAgXCJuYW1lXCI6IFwiaXRhbGlhbiBzYXVzYWdlIGxpbmtzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDEwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTExNTQ5LFxuICAgIFwibmFtZVwiOiBcIm1hcmluYXJhIHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNzFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAzOCxcbiAgICBcIm5hbWVcIjogXCJwZWNvcmlubyByb21hbm8gY2hlZXNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTMwNCxcbiAgICBcIm5hbWVcIjogXCJwZWFzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE2NzcsXG4gICAgXCJuYW1lXCI6IFwic2hhbGxvdHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY5NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTAyMDQyMCxcbiAgICBcIm5hbWVcIjogXCJwYXN0YSBzaGVsbHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMDI2LFxuICAgIFwibmFtZVwiOiBcInNocmVkZGVkIG1venphcmVsbGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE4NFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzYzMCxcbiAgICBcIm5hbWVcIjogXCJza2ltIG1pbGsgcmljb3R0YSBjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM5NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNDEwNixcbiAgICBcIm5hbWVcIjogXCJ3aGl0ZSB3aW5lXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NzVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE0NjMsXG4gICAgXCJuYW1lXCI6IFwiZnJvemVuIHNwaW5hY2hcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDI1LFxuICAgIFwibmFtZVwiOiBcInBlcHBlcmphY2tcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIxMlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxNDYyMyxcbiAgICBcIm5hbWVcIjogXCJibGFja2JlcnJ5IGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTMwMixcbiAgICBcIm5hbWVcIjogXCJyYXNwYmVycnlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI0N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzU0LFxuICAgIFwibmFtZVwiOiBcInBpbmVhcHBsZSB3aXRoIGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MjZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTA3MCxcbiAgICBcIm5hbWVcIjogXCJzd2VldCBjaGVycmllc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTg0XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE0MTgxLFxuICAgIFwibmFtZVwiOiBcImNob2NvbGF0ZSBzeXJ1cFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTMwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDE4NjE3LFxuICAgIFwibmFtZVwiOiBcImdyYWhhbSBjcmFja2VyIGNydW1ic1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjA1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEyMTM1LFxuICAgIFwibmFtZVwiOiBcIm51dHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDM3LFxuICAgIFwibmFtZVwiOiBcImhhYXMgYXZvY2Fkb3NcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI3NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxNjA1NyxcbiAgICBcIm5hbWVcIjogXCJnYXJiYW56b3NcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDUsXG4gICAgXCJuYW1lXCI6IFwiZGlsbHdlZWRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE2MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjU2LFxuICAgIFwibmFtZVwiOiBcImdyZWVrIHlvZ3VydFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjMxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkxNTIsXG4gICAgXCJuYW1lXCI6IFwibGVtb24ganVpY2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI3NFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI5MSxcbiAgICBcIm5hbWVcIjogXCJzcHJpbmcgb25pb25zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MjM2LFxuICAgIFwibmFtZVwiOiBcInBlYWNoZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwOVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTA5NSxcbiAgICBcIm5hbWVcIjogXCJpY2VjcmVhbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQ3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwODYyLFxuICAgIFwibmFtZVwiOiBcImNvb2tlZCBiYWNvbiBzdHJpcHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1MTE0LFxuICAgIFwibmFtZVwiOiBcInJvYXN0ZWQgY2hpY2tlblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzA4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMzMzLFxuICAgIFwibmFtZVwiOiBcImdyZWVuIHBlcHBlcnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDI2LFxuICAgIFwibmFtZVwiOiBcImZyZXNoIG1venphcmVsbGFcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIxMTUyOSxcbiAgICBcIm5hbWVcIjogXCJpdGFsaWFuIHRvbWF0b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTc4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMTEwMDksXG4gICAgXCJuYW1lXCI6IFwid2hpdGUgY2hlZGRhclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzA5XG4gIH0sXG4gIHtcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5ODk5OCxcbiAgICBcIm5hbWVcIjogXCJiYWxzYW1pYyBnbGF6ZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzU5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDgwMzAsXG4gICAgXCJuYW1lXCI6IFwiZnJ1aXQgbG9vcHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE5MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxOTExNixcbiAgICBcIm5hbWVcIjogXCJtYXJzaG1hbGxvd1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDI1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MTU4LFxuICAgIFwibmFtZVwiOiBcImh1bW11c1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDkxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwNDYsXG4gICAgXCJuYW1lXCI6IFwicHJlcGFyZWQgeWVsbG93IG11c3RhcmRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjE0LFxuICAgIFwibmFtZVwiOiBcImV2YXBvcmF0ZWQgbWlsa1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogOTIxNCxcbiAgICBcIm5hbWVcIjogXCJvcmFuZ2UganVpY2UgY29uY2VudHJhdGVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM3OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MjE2LFxuICAgIFwibmFtZVwiOiBcIm9yYW5nZSBwZWVsXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4ODJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAxMjMsXG4gICAgXCJuYW1lXCI6IFwiYmFjb24gc2xpY2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEwNTIsXG4gICAgXCJuYW1lXCI6IFwic3RyaW5nIGJlYW5zXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MDJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTE5NTksXG4gICAgXCJuYW1lXCI6IFwiYmFieSBhcnVndWxhIGxlYXZlc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjA3XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDQsXG4gICAgXCJuYW1lXCI6IFwiYmx1ZSBjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY0NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MjUyLFxuICAgIFwibmFtZVwiOiBcInBlYXJcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ2N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0MzQwOCxcbiAgICBcIm5hbWVcIjogXCJwZWFyIGp1aWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjNcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA0OSxcbiAgICBcIm5hbWVcIjogXCJmcmVzaCB0aHltZSBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY4MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjE1NSxcbiAgICBcIm5hbWVcIjogXCJ3YWxudXQgaGFsdmVzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTE2OTMsXG4gICAgXCJuYW1lXCI6IFwiY2FubmVkIHRvbWF0b1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTcxXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExMTI0LFxuICAgIFwibmFtZVwiOiBcImNhcnJvdHNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEzNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDEyLFxuICAgIFwibmFtZVwiOiBcImNvcmlhbmRlclwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjAxNCxcbiAgICBcIm5hbWVcIjogXCJjb21pbm9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU0N1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTkxMyxcbiAgICBcIm5hbWVcIjogXCJmcm96ZW4gY29yblwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTU4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDc3LFxuICAgIFwibmFtZVwiOiBcInp1Y2NoaW5pIHNxdWFzaFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMjIwNDQ1LFxuICAgIFwibmFtZVwiOiBcInN0ZWFtZWQgcmljZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTA0MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDAzLFxuICAgIFwibmFtZVwiOiBcImdyb3VuZCBiYXNpbFwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTk4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDE2MDE4LFxuICAgIFwibmFtZVwiOiBcImNhbm5lZCBibGFjayBiZWFuc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzU2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDk5MjIzLFxuICAgIFwibmFtZVwiOiBcImNhbm5lZCBjaGlwb3RsZSBjaGlsaWVzIGluIGFkb2JvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyOTlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExNjUsXG4gICAgXCJuYW1lXCI6IFwiY2lsYW50cm9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDIxODM2NCxcbiAgICBcIm5hbWVcIjogXCJmbG91ciB0b3J0aWxsYVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjUzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNjExMjgyLFxuICAgIFwibmFtZVwiOiBcIndoaXRlIG9uaW9uc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDQ5XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDExNDU3LFxuICAgIFwibmFtZVwiOiBcImJhYnkgc3BpbmFjaCBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTI2OCxcbiAgICBcIm5hbWVcIjogXCJkcmllZCBzaGlpdGFrZSBtdXNocm9vbVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODA2XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIwMDA1LFxuICAgIFwibmFtZVwiOiBcImZhcnJvXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyODZcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA1MTEyODIsXG4gICAgXCJuYW1lXCI6IFwieWVsbG93IG9uaW9uXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNDFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMjA2OSxcbiAgICBcIm5hbWVcIjogXCJiYWxzYW1pYyB2aW5lZ2FyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMThcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTEyNTAsXG4gICAgXCJuYW1lXCI6IFwiYm9zdG9uIGJpYmIgbGV0dHVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExNTYsXG4gICAgXCJuYW1lXCI6IFwiZnJlc2ggY2hpdmVcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcyOFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA0MDI1LFxuICAgIFwibmFtZVwiOiBcIm1heW9ubmFpc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzMFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTExOSxcbiAgICBcIm5hbWVcIjogXCJuYXBhIGNhYmJhZ2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMDlcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTExMTIsXG4gICAgXCJuYW1lXCI6IFwicmVkIGNhYmJhZ2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY1OVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5ODk2MixcbiAgICBcIm5hbWVcIjogXCJzd2VldCBjaGlsaSBzYXVjZVwiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAwMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAyMDQyLFxuICAgIFwibmFtZVwiOiBcImRyaWVkIHRoeW1lXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMjAyMCxcbiAgICBcIm5hbWVcIjogXCJncmFudWxhdGVkIGdhcmxpY1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjI4XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDIzNTcyLFxuICAgIFwibmFtZVwiOiBcImdyb3VuZCBjaHVja1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjAwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwMDExMjUwLFxuICAgIFwibmFtZVwiOiBcImJ1dHRlcmhlYWQgbGV0dHVjZSBsZWF2ZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM0MVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA1MDY0LFxuICAgIFwibmFtZVwiOiBcImJha2VkIGNoaWNrZW4gYnJlYXN0XCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDIwXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDIwMTUsXG4gICAgXCJuYW1lXCI6IFwiY3Vycnkgc2Vhc29uaW5nXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMTJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwOTE1OSxcbiAgICBcIm5hbWVcIjogXCJsaW1lIHBlZWxcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQzNVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5ODk5MSxcbiAgICBcIm5hbWVcIjogXCJtaW50IGNodXRuZXlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MzE2LFxuICAgIFwibmFtZVwiOiBcInN0cmF3YmVycnlcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTA5MCxcbiAgICBcIm5hbWVcIjogXCJicm9jY29saSBjcm93bnNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI1NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxMTgyMSxcbiAgICBcIm5hbWVcIjogXCJzd2VldCBvcmFuZ2UgcGVwcGVyXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjhcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAyMTgsXG4gICAgXCJuYW1lXCI6IFwicG9yayB0ZW5kZXJsb2luXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NDVcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTkxNTcsXG4gICAgXCJuYW1lXCI6IFwibWluaSBtJm1cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU1MlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5ODg3MSxcbiAgICBcIm5hbWVcIjogXCJoYXdhaWlhbiBzd2VldCByb2xsc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTM1XG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDEwNTUwNjIsXG4gICAgXCJuYW1lXCI6IFwiYm9uZWxlc3Mgc2tpbmxlc3MgY2hpY2tlbiBicmVhc3RzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTAwMTkxNTEsXG4gICAgXCJuYW1lXCI6IFwicmVlc2UgcGllY2VzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MjFcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTA0MTAwOSxcbiAgICBcIm5hbWVcIjogXCJjaGVlc2VcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1MFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDAxODQxMyxcbiAgICBcIm5hbWVcIjogXCJmbGF0YnJlYWRcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMyNlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMDExMTUyOSxcbiAgICBcIm5hbWVcIjogXCJncmFwZSB0b21hdG9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE2OFxuICB9LFxuICB7XG4gICAgXCJpZFwiOiA5MDE5LFxuICAgIFwibmFtZVwiOiBcInVuc3dlZXRlbmVkIGFwcGxlIHNhdWNlXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTRcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTgwNzksXG4gICAgXCJuYW1lXCI6IFwiZHJ5IGJyZWFkY3J1bWJzXCIsXG4gICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjdcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogMTYwNjksXG4gICAgXCJuYW1lXCI6IFwibGVndW1lc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTAzXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IDkwNzksXG4gICAgXCJuYW1lXCI6IFwiZHJpZWQgY3JhbmJlcnJpZXNcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyMVxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTkzNSxcbiAgICBcIm5hbWVcIjogXCJjYXRzdXBcIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2NlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMjE1MSxcbiAgICBcIm5hbWVcIjogXCJwaXN0YWNoaW9cIixcbiAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgxM1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiAxMTgyMSxcbiAgICBcIm5hbWVcIjogXCJyZWQgc3dlZXQgcGVwcGVyc1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAyN1xuICB9LFxuICB7XG4gICAgXCJpZFwiOiA2NjE1LFxuICAgIFwibmFtZVwiOiBcInZlZ2V0YWJsZSBzdG9ja1wiLFxuICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjEzXG4gIH1cbl1cblxuXG5leHBvcnQgZGVmYXVsdCBpbmdyZWRpZW50c0RhdGE7XG4iLCIvLyBpbXBvcnQgUmVjaXBlIGZyb20gJy4vcmVjaXBlJztcblxuLy8gaW1wb3J0IHNjcmlwdHMgZnJvbSAnLi9zY3JpcHRzJztcblxuLy8gbGV0IGZhdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWZhdm9yaXRlcycpO1xuLy8gbGV0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1jYXJkcycpO1xuXG5sZXQgZG9tVXBkYXRlcyA9IHtcblxuICBncmVldFVzZXIobmFtZSkge1xuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xuICAgIC8vc2hvdWxkIHB1bGwgdGhpcyBxdWVyeVNlbGVjdG9yIG91dCBvZiBmdW5jdGlvbiBpbnRvIGdsb2JhbFxuICAgIHVzZXJOYW1lLmlubmVySFRNTCA9XG4gICAgYCR7bmFtZX1gLnNwbGl0KCcgJylbMF0gKyAnICcgKyBgJHtuYW1lfWAuc3BsaXQoJyAnKVsxXTtcbiAgfSxcblxuICBwb3B1bGF0ZUNhcmRzKHJlY2lwZXMsIGNhcmRBcmVhLCB1c2VyRmF2b3JpdGVzKSB7XG4gICAgY2FyZEFyZWEuaW5uZXJIVE1MID0gJyc7XG4gICAgaWYgKGNhcmRBcmVhLmNsYXNzTGlzdC5jb250YWlucygnYWxsJykpIHtcbiAgICAgIGNhcmRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbCcpXG4gICAgfVxuICAgIGlmIChyZWNpcGVzKSB7XG4gICAgICByZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJDYXJkcyhyZWNpcGUsIGNhcmRBcmVhLCB1c2VyRmF2b3JpdGVzKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL3JlY2lwZXMvcmVjaXBlRGF0YScpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgZGF0YS5yZWNpcGVEYXRhLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyQ2FyZHMocmVjaXBlLCBjYXJkQXJlYSwgdXNlckZhdm9yaXRlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKSk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlckNhcmRzKHJlY2lwZSwgY2FyZEFyZWEsIHVzZXJGYXZvcml0ZXMpIHtcbiAgICBsZXQgaXNGYXZvcml0ZTtcbiAgICBpZiAodXNlckZhdm9yaXRlcyAmJiB1c2VyRmF2b3JpdGVzLmZpbmQoZmF2b3JpdGVSZWNpcGUgPT4gZmF2b3JpdGVSZWNpcGUuaWQgPT09IHJlY2lwZS5pZCkpIHtcbiAgICAgIGlzRmF2b3JpdGUgPSAnZmF2b3JpdGUtYWN0aXZlJztcbiAgICB9IGVsc2Uge1xuICAgICAgaXNGYXZvcml0ZSA9ICcnO1xuICAgIH1cbiAgICBjYXJkQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBcbiAgICAgIGA8YXJ0aWNsZSBpZD0nJHtyZWNpcGUuaWR9LWNhcmQnIGNsYXNzPSdjYXJkJz5cbiAgICAgICAgPGhlYWRlciBpZD0nJHtyZWNpcGUuaWR9LWhlYWRlcicgY2xhc3M9J2NhcmQtaGVhZGVyJz5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9J2FkZC1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGFkZCByZWNpcGU8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nJHtyZWNpcGUuaWR9LWFkZCcgYXJpYS1sYWJlbD0nYWRkLWJ1dHRvbicgY2xhc3M9J2FkZC1idXR0b24gY2FyZC1idXR0b24nPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz0nY29vay1idXR0b24nIGlkPScke3JlY2lwZS5pZH0tY29vayc+Q29vayBUaGlzITwvYnV0dG9uPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj0nZmF2b3JpdGUtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBmYXZvcml0ZSByZWNpcGU8L2xhYmVsPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nJHtyZWNpcGUuaWR9LWZhdm9yaXRlJyBhcmlhLWxhYmVsPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdmYXZvcml0ZSAke2lzRmF2b3JpdGV9IGNhcmQtYnV0dG9uJz48L2J1dHRvbj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgPGFydGljbGUgaWQ9JyR7cmVjaXBlLmlkfS1yZWNpcGllLW5hbWUnIGNsYXNzPSdyZWNpcGUtbmFtZSc+JHtyZWNpcGUubmFtZX1cbiAgICAgICAgICAgIDxpbWcgaWQ9JyR7cmVjaXBlLmlkfS1waWN0dXJlJyB0YWJpbmRleD0nMCcgY2xhc3M9J2NhcmQtcGljdHVyZScgc3JjPScke3JlY2lwZS5pbWFnZX0nIGFsdD0nY2xpY2sgdG8gdmlldyByZWNpcGUgZm9yICR7cmVjaXBlLm5hbWV9Jz5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYXJ0aWNsZT5gKVxuICB9LFxuXG4gIHJlbW92ZUFsbChjYXJkQXJlYSkge1xuICAgIGNhcmRBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbCcpXG4gIH0sXG5cbiAgc2hvd05vRmF2b3JpdGVzKGZhdkJ1dHRvbikge1xuICAgIGZhdkJ1dHRvbi5pbm5lckhUTUwgPSAnWW91IGhhdmUgbm8gZmF2b3JpdGVzISc7XG4gIH0sXG5cbiAgc2hvd05vQ29va0xpc3QocmVjaXBlc1RvQ29va0J1dHRvbikge1xuICAgIHJlY2lwZXNUb0Nvb2tCdXR0b24uaW5uZXJIVE1MID0gXCJZb3UgaGF2ZSBubyBjb29rbGlzdCFcIjtcbiAgfSxcblxuICAvLyBkaXNwbGF5RmF2b3JpdGVzKHVzZXJGYXZvcml0ZXMsIGNhcmRBcmVhKSB7XG4gIC8vICAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSAnJztcbiAgLy8gICAgIHVzZXJGYXZvcml0ZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAvLyAgICAgICBjYXJkQXJlYS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBcbiAgLy8gICAgICAgICBgPGFydGljbGUgaWQ9JyR7cmVjaXBlLmlkfS1jYXJkJyBjbGFzcz0nY2FyZCc+XG4gIC8vICAgICAgICAgICA8aGVhZGVyIGlkPScke3JlY2lwZS5pZH0taGVhZGVyJyBjbGFzcz0nY2FyZC1oZWFkZXInPlxuICAvLyAgICAgICAgICAgICA8bGFiZWwgZm9yPSdhZGQtYnV0dG9uJyBjbGFzcz0naGlkZGVuJz5DbGljayB0byBhZGQgcmVjaXBlPC9sYWJlbD5cbiAgLy8gICAgICAgICAgICAgPGJ1dHRvbiBpZD0nJHtyZWNpcGUuaWR9LWFkZCcgYXJpYS1sYWJlbD0nYWRkLWJ1dHRvbicgY2xhc3M9J2FkZC1idXR0b24gY2FyZC1idXR0b24nPlxuICAvLyAgICAgICAgICAgICA8bGFiZWwgZm9yPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdoaWRkZW4nPkNsaWNrIHRvIGZhdm9yaXRlIHJlY2lwZVxuICAvLyAgICAgICAgICAgICA8L2xhYmVsPlxuICAvLyAgICAgICAgICAgICA8YnV0dG9uIGlkPScke3JlY2lwZS5pZH0tZmF2b3JpdGUtYnV0dG9uJyBhcmlhLWxhYmVsPSdmYXZvcml0ZS1idXR0b24nIGNsYXNzPSdmYXZvcml0ZSBmYXZvcml0ZS1hY3RpdmUgY2FyZC1idXR0b24nPlxuICAvLyAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgLy8gICAgICAgICAgIDwvaGVhZGVyPlxuICAvLyAgICAgICAgICAgPGFydGljbGUgaWQ9JyR7cmVjaXBlLmlkfS1yZWNpcGllLW5hbWUnIGNsYXNzPSdyZWNpcGUtbmFtZSc+JHtyZWNpcGUubmFtZX08L2FydGljbGU+XG4gIC8vICAgICAgICAgICA8aW1nIGlkPScke3JlY2lwZS5pZH0tcGljdHVyZScgdGFiaW5kZXg9JzAnIGNsYXNzPSdjYXJkLXBpY3R1cmUnIHNyYz0nJHtyZWNpcGUuaW1hZ2V9JyBhbHQ9J0Zvb2QgZnJvbSByZWNpcGUnPlxuICAvLyAgICAgICAgIDwvYXJ0aWNsZT5gKVxuICAvLyAgICAgfSk7XG4gIC8vICAgLy8gfVxuICAvLyB9LFxuXG4gIGRpc3BsYXlEaXJlY3Rpb25zKHJlY2lwZSwgY29zdCwgY2FyZEFyZWEpIHtcbiAgICBjYXJkQXJlYS5jbGFzc0xpc3QuYWRkKCdhbGwnKTtcbiAgICBjYXJkQXJlYS5pbm5lckhUTUwgPSBcbiAgICAgIGA8aDM+JHtyZWNpcGUubmFtZX08L2gzPlxuICAgICAgPHAgY2xhc3M9J2FsbC1yZWNpcGUtaW5mbyc+XG4gICAgICAgICAgPHN0cm9uZz5JdCB3aWxsIGNvc3Q6IDwvc3Ryb25nPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPSdjb3N0IHJlY2lwZS1pbmZvJz4kJHtjb3N0fTwvc3Bhbj5cbiAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICA8c3Ryb25nPllvdSB3aWxsIG5lZWQ6IDwvc3Ryb25nPlxuICAgICAgICA8c3BhbiBjbGFzcz0naW5ncmVkaWVudHMgcmVjaXBlLWluZm8nPjwvc3Bhbj5cbiAgICAgICAgPHN0cm9uZz5JbnN0cnVjdGlvbnM6IDwvc3Ryb25nPlxuICAgICAgICA8b2w+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9J2luc3RydWN0aW9ucyByZWNpcGUtaW5mbyc+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L29sPlxuICAgICAgPC9wPmA7XG4gICAgbGV0IGluZ3JlZGllbnRzU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmdyZWRpZW50cycpO1xuICAgIGxldCBpbnN0cnVjdGlvbnNTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RydWN0aW9ucycpO1xuICAgIC8vIHNob3VsZCBmaW5kIGEgd2F5IHRvIGVpdGhlciBtYWtlIHRoZXNlIHNlbGVjdG9ycyBnbG9iYWwgb3IgcmVtb3ZlIHRoZW1cbiAgICAvLyBpZiBrZXB0LCBjaGFuZ2Ugc3BhbiBhbmQgcmVuYW1lIHRvIG5vdCBpbmNsdWRlIGVsZW1lbnQgdHlwZSBpbiBuYW1lXG4gICAgcmVjaXBlLmluZ3JlZGllbnRzLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBpbmdyZWRpZW50c1NwYW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYDx1bD48bGk+XG4gICAgICAke2luZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50LnRvRml4ZWQoMil9ICR7aW5ncmVkaWVudC5xdWFudGl0eS51bml0fVxuICAgICAgJHtpbmdyZWRpZW50Lm5hbWV9PC9saT48L3VsPlxuICAgICAgYClcbiAgICB9KVxuICAgIHJlY2lwZS5pbnN0cnVjdGlvbnMuZm9yRWFjaChpbnN0cnVjdGlvbiA9PiB7XG4gICAgICBpbnN0cnVjdGlvbnNTcGFuLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlYmVnaW4nLCBcbiAgICAgICAgYDxsaT4ke2luc3RydWN0aW9uLmluc3RydWN0aW9ufTwvbGk+YClcbiAgICB9KVxuICB9LFxuXG4gIGZhdm9yaXRlc0FkZCh0YXJnZXQpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnZmF2b3JpdGUtYWN0aXZlJyk7XG4gIH0sXG5cbiAgZmF2b3JpdGVzUmVtb3ZlKHRhcmdldCkge1xuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmYXZvcml0ZS1hY3RpdmUnKTtcbiAgfSxcblxuICByZWZyZXNoRmF2b3JpdGVzKGZhdkJ1dHRvbikge1xuICAgIGZhdkJ1dHRvbi5pbm5lckhUTUwgPSAnUmVmcmVzaCBGYXZvcml0ZXMnO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCJjbGFzcyBQYW50cnkge1xuICBjb25zdHJ1Y3Rvcih1c2VySW5ncmVkaWVudHMpIHtcbiAgICB0aGlzLmNvbnRlbnRzID0gdXNlckluZ3JlZGllbnRzO1xuICB9XG4gIGRvSUhhdmVFbm91Z2hGb3JUaGlzKG5hbWVPcklkLCByZWNpcGVEYXRhKSB7XG4gICAgbGV0IHRvZ2dsZSA9IFwiWWVzXCI7XG4gICAgbGV0IHRoaXNSZWNpcGUgPSByZWNpcGVEYXRhLmZpbmQoaW5kZXggPT4ge1xuICAgICAgcmV0dXJuIGluZGV4LmlkID09PSBuYW1lT3JJZCB8fCBpbmRleC5uYW1lID09PSBuYW1lT3JJZDtcbiAgICB9KS5pbmdyZWRpZW50cztcbiAgICB0aGlzUmVjaXBlLmZvckVhY2goaSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY29udGVudHNbaV0pIHtcbiAgICAgICAgdG9nZ2xlID0gXCJOb1wiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgIGlmIChpbmRleC5hbW91bnQgPj0gaW5kZXgucXVhbnRpdHkuYW1vdW50KSB7XG4gICAgICAgICAgICB0b2dnbGUgPT09IFwiWWVzXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0b2dnbGU7XG4gIH1cblxuICBob3dNYW55SW5ncmVkaWVudHNMZWZ0KG5hbWVPcklkLCByZWNpcGVEYXRhKSB7XG4gICAgbGV0IGNvbnRlbnRzSWRzID0gdGhpcy5jb250ZW50cy5tYXAoaW5kZXggPT4ge1xuICAgICAgcmV0dXJuIGluZGV4LmluZ3JlZGllbnQ7XG4gICAgfSlcbiAgICBsZXQgbm90SW5UaGVyZSA9IFtdO1xuICAgIGxldCBpbmdyZWRpZW50RnJvbVJlY2lwZSA9IHJlY2lwZURhdGEuZmluZChpbmRleCA9PiB7XG4gICAgICByZXR1cm4gaW5kZXguaWQgID09PSBuYW1lT3JJZCB8fCBpbmRleC5uYW1lID09PSBuYW1lT3JJZDtcbiAgICB9KTtcbiAgICBpbmdyZWRpZW50RnJvbVJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgIGlmICghY29udGVudHNJZHMuaW5jbHVkZXMoaW5kZXguaWQpKSB7XG4gICAgICAgIG5vdEluVGhlcmUucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5vdEluVGhlcmUubGVuZ3RoO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbnRyeTtcbiIsImltcG9ydCBpbmdyZWRpZW50c0RhdGEgZnJvbSAnLi9kYXRhL2luZ3JlZGllbnRzJztcblxuY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlLCBpbmdyZWRpZW50c0RhdGEpIHtcbiAgICB0aGlzLm5hbWUgPSByZWNpcGUubmFtZTtcbiAgICB0aGlzLmlkID0gcmVjaXBlLmlkO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSB0aGlzLmdhdGhlckluZ3JlZGllbnRzKHJlY2lwZS5pbmdyZWRpZW50cyk7XG4gICAgdGhpcy5pbnN0cnVjdGlvbnMgPSByZWNpcGUuaW5zdHJ1Y3Rpb25zO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZS50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhID0gaW5ncmVkaWVudHNEYXRhO1xuICB9XG5cbiAgY2FsY3VsYXRlQ29zdCgpIHtcbiAgICBsZXQgY29zdENvdW50ZXIgPSAwO1xuICAgIHRoaXMuaW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHRoaXMuaW5ncmVkaWVudHNEYXRhLmZpbmQoc3BlY2lmaWNJbmdyZWRpZW50ID0+IHtcbiAgICAgICAgaWYgKHNwZWNpZmljSW5ncmVkaWVudC5pZCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICAgIGNvc3RDb3VudGVyICs9IChOdW1iZXIoc3BlY2lmaWNJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzKSAqXG4gICAgICAgICAgTnVtYmVyKGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50KSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KTtcbiAgICByZXR1cm4gY29zdENvdW50ZXI7XG4gIH1cblxuICBnYXRoZXJJbmdyZWRpZW50cyhpbmdyZWRpZW50cykge1xuICAgIHJldHVybiAgaW5ncmVkaWVudHMubWFwKGluZ3JlZGllbnQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGluZ3JlZGllbnQuaWQsXG4gICAgICAgIHF1YW50aXR5OiBpbmdyZWRpZW50LnF1YW50aXR5LFxuICAgICAgICBuYW1lOiBpbmdyZWRpZW50c0RhdGEuZmluZChpbmdyZWRpZW50SXRlbSA9PiBpbmdyZWRpZW50SXRlbS5pZCA9PT0gaW5ncmVkaWVudC5pZCkubmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjaXBlO1xuIiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZXMuc2Nzcyc7XG5cbmltcG9ydCBQYW50cnkgZnJvbSAnLi9wYW50cnknO1xuaW1wb3J0IFJlY2lwZSBmcm9tICcuL3JlY2lwZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb20tdXBkYXRlcyc7XG5cbmxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbmxldCBmYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlldy1mYXZvcml0ZXMnKTtcbmxldCByZWNpcGVzVG9Db29rQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctcmVjaXBpZXMtdG8tY29vaycpO1xubGV0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC1jYXJkcycpO1xubGV0IHNlYXJjaEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbnMnKTtcbmxldCBzZWFyY2hCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWFueScpO1xuXG5sZXQgdXNlciwgcGFudHJ5LCB1c2VyRGF0YSwgcmVjaXBlRGF0YSwgaW5ncmVkaWVudHNEYXRhO1xubGV0IHVzZXJJZCA9IDE7XG5cbndpbmRvdy5vbmxvYWQgPSBcbiAgZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS9yZWNpcGVzL3JlY2lwZURhdGEnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHJlY2lwZURhdGEgPSBkYXRhLnJlY2lwZURhdGEpXG4gICAgLnRoZW4oXG4gICAgICBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3doYXRzLWNvb2tpbi8xOTExL2luZ3JlZGllbnRzL2luZ3JlZGllbnRzRGF0YScpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBpbmdyZWRpZW50c0RhdGEgPSBkYXRhKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICBmZXRjaChcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YVwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgIHVzZXJEYXRhID0gZGF0YS53Y1VzZXJzRGF0YS5maW5kKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLmlkID09PSBOdW1iZXIodXNlcklkKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgb25TdGFydHVwKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycikpXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIpKVxuICAgIClcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycikpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcmRCdXR0b25Db25kaXRpb25hbHMpO1xuZmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmlld0Zhdm9yaXRlcyk7XG5jYXJkQXJlYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhcmRCdXR0b25Db25kaXRpb25hbHMpO1xucmVjaXBlc1RvQ29va0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHZpZXdSZWNpcGllc1RvQ29vayk7XG5zZWFyY2hCdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoUmVjaXBlcyk7XG5cbmZ1bmN0aW9uIG9uU3RhcnR1cCgpIHtcbiAgc2V0VXNlckRhdGEoKTtcbiAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKHJlY2lwZURhdGEsIGNhcmRBcmVhKTtcbn1cblxuZnVuY3Rpb24gc2V0VXNlckRhdGEoKSB7XG4gIHVzZXIgPSBuZXcgVXNlcih1c2VySWQsIHVzZXJEYXRhLm5hbWUsIHVzZXJEYXRhLnBhbnRyeSk7XG4gIHBhbnRyeSA9IG5ldyBQYW50cnkodXNlckRhdGEucGFudHJ5KTtcbiAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKHJlY2lwZURhdGEsIGNhcmRBcmVhLCB1c2VyLmZhdm9yaXRlUmVjaXBlcyk7XG4gIGRvbVVwZGF0ZXMuZ3JlZXRVc2VyKHVzZXIubmFtZSk7XG4gIGdldEZhdm9yaXRlcygpO1xufVxuXG5mdW5jdGlvbiBzZWFyY2hSZWNpcGVzKGV2ZW50KSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtbmFtZScpKSB7XG4gIC8vIGNvbnNvbGUubG9nKCduYW1lJywgdXNlci5maW5kSW5DYXRlZ29yeShzZWFyY2hCYXIudmFsdWUsICduYW1lJykpXG4gIHNlYXJjaFN0dWZmKCduYW1lJylcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWFyY2gtdGFnJykpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndGFnJywgdXNlci5maW5kSW5DYXRlZ29yeShzZWFyY2hCYXIudmFsdWUsICd0YWcnKSlcbiAgICBzZWFyY2hTdHVmZigndGFncycpXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHNlYXJjaFN0dWZmKHZhbHVlKSB7XG4gIGxldCBzZWFyY2hlZERhdGEgPSByZWNpcGVEYXRhLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlW2Ake3ZhbHVlfWBdLmluY2x1ZGVzKHNlYXJjaEJhci52YWx1ZSkpO1xuICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMoc2VhcmNoZWREYXRhLCBjYXJkQXJlYSwgdXNlci5mYXZvcml0ZVJlY2lwZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRGYXZvcml0ZXMoKSB7XG4gIGlmICh1c2VyLmZhdm9yaXRlUmVjaXBlcy5sZW5ndGgpIHtcbiAgICB1c2VyLmZhdm9yaXRlUmVjaXBlcy5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZmF2b3JpdGUke3JlY2lwZS5pZH1gKS5jbGFzc0xpc3QuYWRkKCdmYXZvcml0ZS1hY3RpdmUnKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gY2FyZEJ1dHRvbkNvbmRpdGlvbmFscyhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUnKSkge1xuICAgIGZhdm9yaXRlQ2FyZChldmVudCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1waWN0dXJlJykpIHtcbiAgICBnZXREaXJlY3Rpb25zKGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lJykpIHtcbiAgICBmYXZCdXR0b24uaW5uZXJIVE1MID0gJ1ZpZXcgRmF2b3JpdGVzJztcbiAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMocmVjaXBlRGF0YSwgY2FyZEFyZWEsIHVzZXIuZmF2b3JpdGVSZWNpcGVzKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtYnV0dG9uJykpIHtcbiAgICBhZGRSZWNpcGVUb0Nvb2tMaXN0KGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb29rLWJ1dHRvbicpKSB7XG4gICAgY29va0NhcmQoZXZlbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdGYXZvcml0ZXMoKSB7XG4gIGlmIChjYXJkQXJlYS5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbCcpKSB7XG4gICAgZG9tVXBkYXRlcy5yZW1vdmVBbGwoY2FyZEFyZWEpO1xuICB9XG4gIGlmICghdXNlci5mYXZvcml0ZVJlY2lwZXMubGVuZ3RoKSB7XG4gICAgZG9tVXBkYXRlcy5zaG93Tm9GYXZvcml0ZXMoZmF2QnV0dG9uKTtcbiAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHMocmVjaXBlRGF0YSwgY2FyZEFyZWEpO1xuICAgIHJldHVyblxuICAgIC8vIHdlIGNhbiB1c2UgYnJlYWsgaWYgd2UgYXJlIG5vdCB0cnlpbmcgdG8gcmV0dXJuIGFueXRoaW5nXG4gIH0gZWxzZSB7XG4gICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKHVzZXIuZmF2b3JpdGVSZWNpcGVzLCBjYXJkQXJlYSwgdXNlci5mYXZvcml0ZVJlY2lwZXMpO1xuICAgIGRvbVVwZGF0ZXMucmVmcmVzaEZhdm9yaXRlcyhmYXZCdXR0b24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZpZXdSZWNpcGllc1RvQ29vaygpIHtcbiAgZmF2QnV0dG9uLmlubmVySFRNTCA9ICdWaWV3IEZhdm9yaXRlcyc7XG4gIGlmIChjYXJkQXJlYS5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbCcpKSB7XG4gICAgZG9tVXBkYXRlcy5yZW1vdmVBbGwoY2FyZEFyZWEpO1xuICB9XG4gIGlmICghdXNlci5yZWNpcGVzVG9Db29rLmxlbmd0aCkge1xuICAgIGRvbVVwZGF0ZXMuc2hvd05vQ29va0xpc3QocmVjaXBlc1RvQ29va0J1dHRvbik7XG4gICAgZG9tVXBkYXRlcy5wb3B1bGF0ZUNhcmRzKHJlY2lwZURhdGEsIGNhcmRBcmVhKTtcbiAgICByZXR1cm5cbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGVzLnBvcHVsYXRlQ2FyZHModXNlci5yZWNpcGVzVG9Db29rLCBjYXJkQXJlYSwgdXNlci5mYXZvcml0ZVJlY2lwZXMpO1xuICAgIC8vIGRvbVVwZGF0ZXMucmVmcmVzaEZhdm9yaXRlcyhmYXZCdXR0b24pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZhdm9yaXRlQ2FyZChldmVudCkge1xuICBsZXQgdGFyZ2V0ZWRJRCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpKTtcbiAgbGV0IHNwZWNpZmljUmVjaXBlID0gcmVjaXBlRGF0YS5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgID09PSBOdW1iZXIodGFyZ2V0ZWRJRCkpO1xuICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Zhdm9yaXRlLWFjdGl2ZScpKSB7XG4gICAgLy8gaXMgdGhlIGFib3ZlIGxpbmUgdXNpbmcgdGhlIERPTSB0byB1cGRhdGUgdGhlIGRhdGEgbW9kZWw/IFNob3VsZCBiZSBhbiBlYXN5IGZpeFxuICAgIHVzZXIuYWRkVG9DYXRlZ29yeShzcGVjaWZpY1JlY2lwZSwgXCJmYXZvcml0ZVJlY2lwZXNcIik7XG4gICAgZG9tVXBkYXRlcy5mYXZvcml0ZXNBZGQoZXZlbnQudGFyZ2V0KTtcbiAgfSBlbHNlIHtcbiAgICB1c2VyLnJlbW92ZUZyb21DYXRlZ29yeShzcGVjaWZpY1JlY2lwZSwgXCJmYXZvcml0ZVJlY2lwZXNcIik7XG4gICAgZG9tVXBkYXRlcy5mYXZvcml0ZXNSZW1vdmUoZXZlbnQudGFyZ2V0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb29rQ2FyZChldmVudCkge1xuICBsZXQgdGFyZ2V0ZWRJRCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpKSk7XG4gIGxldCBjdXJyZW50UmVjaXBlID0gcmVjaXBlRGF0YS5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IHRhcmdldGVkSUQpO1xuICBpZiAodXNlci5jaGVja1BhbnRyeShjdXJyZW50UmVjaXBlLmluZ3JlZGllbnRzKSkge1xuICAgIHVzZXIuY29vayh0YXJnZXRlZElELCByZWNpcGVEYXRhLCB1c2VySWQpO1xuICAgIC8vIG1heWJlIHBvcHVsYXRlIHdpdGggc3BlY2lmaWMgdmlld1xuICAgIGRvbVVwZGF0ZXMucG9wdWxhdGVDYXJkcyhyZWNpcGVEYXRhLCBjYXJkQXJlYSwgdXNlci5mYXZvcml0ZVJlY2lwZXMpO1xuICAgIGFsZXJ0KFwiWW91IGNvb2tlZCBpdCEgU2VuZGluZyB5b3UgYmFjayB0byB0aGUgaG9tZSBwYWdlLi4uXCIpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdZb3UgZG9uXFwndCBoYXZlIGFsbCB0aGUgaW5ncmVkaWVudHMgZm9yIHRoaXMgcmVjaXBlIScpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFJlY2lwZVRvQ29va0xpc3QoZXZlbnQpIHtcbiAgbGV0IHRhcmdldGVkSUQgPSBldmVudC50YXJnZXQuaWQuc2xpY2UoMCwgZXZlbnQudGFyZ2V0LmlkLmluZGV4T2YoJy0nKSk7XG4gIGxldCBzcGVjaWZpY1JlY2lwZSA9IHJlY2lwZURhdGEuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkICA9PT0gTnVtYmVyKHRhcmdldGVkSUQpKTtcbiAgaWYgKCF1c2VyLnJlY2lwZXNUb0Nvb2suaW5jbHVkZXMoc3BlY2lmaWNSZWNpcGUpKSB7XG4gICAgdXNlci5hZGRUb0NhdGVnb3J5KHNwZWNpZmljUmVjaXBlLCBcInJlY2lwZXNUb0Nvb2tcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGlyZWN0aW9ucyhldmVudCkge1xuICBsZXQgdGFyZ2V0ZWRJRCA9IGV2ZW50LnRhcmdldC5pZC5zbGljZSgwLCBldmVudC50YXJnZXQuaWQuaW5kZXhPZignLScpKVxuICBsZXQgbmV3UmVjaXBlSW5mbyA9IHJlY2lwZURhdGEuZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBOdW1iZXIodGFyZ2V0ZWRJRCkpXG4gIGxldCByZWNpcGVPYmplY3QgPSBuZXcgUmVjaXBlKG5ld1JlY2lwZUluZm8sIGluZ3JlZGllbnRzRGF0YS5pbmdyZWRpZW50c0RhdGEpO1xuICBsZXQgY29zdCA9IHJlY2lwZU9iamVjdC5jYWxjdWxhdGVDb3N0KCk7XG4gIGxldCBjb3N0SW5Eb2xsYXJzID0gKGNvc3QgLyAxMDApLnRvRml4ZWQoMik7XG4gIGRvbVVwZGF0ZXMuZGlzcGxheURpcmVjdGlvbnMocmVjaXBlT2JqZWN0LCBjb3N0SW5Eb2xsYXJzLCBjYXJkQXJlYSk7XG59IiwiY2xhc3MgVXNlciB7XG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBwYW50cnkpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IHBhbnRyeTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IFtdO1xuICAgIHRoaXMucmVjaXBlc1RvQ29vayA9IFtdO1xuICB9XG5cbiAgYWRkVG9DYXRlZ29yeShyZWNpcGUsIHByb3BlcnR5KSB7XG4gICAgaWYgKCF0aGlzW3Byb3BlcnR5XS5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5XS5wdXNoKHJlY2lwZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlRnJvbUNhdGVnb3J5KHJlY2lwZSwgcHJvcGVydHkpIHtcbiAgICBjb25zdCBpID0gdGhpc1twcm9wZXJ0eV0uaW5kZXhPZihyZWNpcGUpO1xuICAgIHRoaXNbcHJvcGVydHldLnNwbGljZShpLCAxKVxuICB9XG5cbiAgZmlsdGVyUmVjaXBlcyh0YWcsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHRoaXNbcHJvcGVydHldLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS50YWdzLmluY2x1ZGVzKHRhZyk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kSW5DYXRlZ29yeShzdHJnVG9TcmNoLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiB0aGlzW3Byb3BlcnR5XS5maWx0ZXIocmVjaXBlID0+IHtcbiAgICAgIHJldHVybiByZWNpcGUubmFtZS5pbmNsdWRlcyhzdHJnVG9TcmNoKVxuICAgICAgfHwgcmVjaXBlLmluZ3JlZGllbnRzLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWUuaW5jbHVkZXMoc3RyZ1RvU3JjaClcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuLypcbnNlYXJjaFJlY2lwaWVzKHN0cmluZ1RvU2VhcmNoLCBwcm9wZXJ0eSkge1xuICBcblxufVxuXG5cblxuKi9cblxuXG5cbiAgY2hlY2tQYW50cnkocmVjaXBlSW5ncmVkaWVudHMpIHtcbiAgICBsZXQgdG9nZ2xlID0gZmFsc2U7XG4gICAgbGV0IHRvZ2dsZUFycmF5ID0gW11cbiAgICBsZXQgcmVjaXBlSW5ncmVkaWVudHNGb3JSZWNpcGUgPSB0aGlzLnJldHVybkFtb3VudChyZWNpcGVJbmdyZWRpZW50cylcbiAgICBsZXQgcmVjaXBlSWRzID0gcmVjaXBlSW5ncmVkaWVudHMubWFwKGluZGV4ID0+IHtcbiAgICAgIHJldHVybiBpbmRleC5pZDtcbiAgICB9KTtcbiAgICBsZXQgcGFudHJ5SW5ncmVkaWVudHNJblJlY2lwZSA9IHRoaXMucGFudHJ5LmZpbHRlcihpbmdyZWRpZW50ID0+IHtcbiAgICAgIGxldCBmb3VuZEluZ3JlZGllbnRzID0gcmVjaXBlSWRzLmZpbmQocmVjaXBlSUQgPT4ge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5pbmdyZWRpZW50ID09PSByZWNpcGVJRDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZvdW5kSW5ncmVkaWVudHMgIT09IHVuZGVmaW5lZDsgXG4gICAgfSk7XG5cbiAgICBsZXQgc29ydGVkUGFudHJ5SW5ncmVkaWVudHMgPSBwYW50cnlJbmdyZWRpZW50c0luUmVjaXBlLnNvcnQoKGluZ3JlZGllbnRBLCBpbmdyZWRpZW50QikgPT4ge1xuICAgICAgcmV0dXJuIGluZ3JlZGllbnRBLmluZ3JlZGllbnQgLSBpbmdyZWRpZW50Qi5pbmdyZWRpZW50O1xuICAgIH0pXG4gICAgbGV0IHNvcnRlZFJlY2lwZUluZ3JlZGllbnRzID0gcmVjaXBlSW5ncmVkaWVudHNGb3JSZWNpcGUuc29ydCgoaW5ncmVkaWVudEEsIGluZ3JlZGllbnRCKSA9PiB7XG4gICAgICByZXR1cm4gaW5ncmVkaWVudEEuaW5ncmVkaWVudElEIC0gaW5ncmVkaWVudEIuaW5ncmVkaWVudElEO1xuICAgIH0pO1xuICAgIHNvcnRlZFJlY2lwZUluZ3JlZGllbnRzLmZvckVhY2goKGluZ3JlZGllbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoc29ydGVkUGFudHJ5SW5ncmVkaWVudHNbaW5kZXhdICYmIHNvcnRlZFBhbnRyeUluZ3JlZGllbnRzW2luZGV4XS5hbW91bnQgKyBwYXJzZUludChpbmdyZWRpZW50LmluZ3JlZGllbnRNb2RpZmljYXRpb24pID49IDApIHtcbiAgICAgICAgdG9nZ2xlQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvZ2dsZUFycmF5LnB1c2goZmFsc2UpO1xuICAgICAgfVxuICAgIH0pXG4gICAgbGV0IHRvZ2dsZURlY2lkZXIgPSB0b2dnbGVBcnJheS5maW5kKGVsZW1lbnQgPT4ge1xuICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IGZhbHNlO1xuICAgIH0pO1xuICAgIGlmICh0b2dnbGVEZWNpZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRvZ2dsZSA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0b2dnbGU7XG4gIH1cblxuICByZXR1cm5BbW91bnQocmVjaXBlSW5ncmVkaWVudHMpIHtcbiAgICBsZXQgcmVjaXBlSW5ncmVkaWVudHNGcm9tUGFudHJ5ID0gW107XG4gICAgcmVjaXBlSW5ncmVkaWVudHMuZm9yRWFjaChpbmdyZWRpZW50ID0+IHtcbiAgICAgIHZhciBpbmdyZWRpZW50RGF0YSA9IHtcbiAgICAgICAgdXNlcklEOiB0aGlzLmlkLFxuICAgICAgICBpbmdyZWRpZW50SUQ6IGluZ3JlZGllbnQuaWQsXG4gICAgICAgIGluZ3JlZGllbnRNb2RpZmljYXRpb246IC1pbmdyZWRpZW50LnF1YW50aXR5LmFtb3VudFxuICAgICAgfVxuICAgICAgcmVjaXBlSW5ncmVkaWVudHNGcm9tUGFudHJ5LnB1c2goaW5ncmVkaWVudERhdGEpO1xuICAgIH0pXG4gICAgcmV0dXJuIHJlY2lwZUluZ3JlZGllbnRzRnJvbVBhbnRyeTtcbiAgfVxuXG4gIHJldHVyblNob3BwaW5nTGlzdChyZWNpcGVJbmdyZWRpZW50cywgaW5ncmVkaWVudHNEYXRhKSB7XG4gICAgbGV0IGdyb2NlcmllcyA9IHRoaXMucmV0dXJuQW1vdW50KHJlY2lwZUluZ3JlZGllbnRzKTtcbiAgICBsZXQgbm90RW5vdWdoR3JvY2VyaWVzID0gZ3JvY2VyaWVzLmZpbHRlcihpbmdyZWRpZW50ID0+IHtcbiAgICAgIHJldHVybiBpbmdyZWRpZW50LmluZ3JlZGllbnRNb2RpZmljYXRpb24gPCAwXG4gICAgfSlcbiAgICBsZXQgZm91bmRJbmdyZWRpZW50cyA9IFtdO1xuICAgIGxldCBzaG9wcGluZ0xpc3QgPSBub3RFbm91Z2hHcm9jZXJpZXMubWFwKG5lZ2F0aXZlR3JvY2VyeSA9PiB7XG4gICAgICBsZXQgZm91bmRJbmdyZWRpZW50ID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50LmlkID09PSBuZWdhdGl2ZUdyb2NlcnkuaWQ7XG4gICAgICB9KTtcbiAgICAgIGZvdW5kSW5ncmVkaWVudHMucHVzaChmb3VuZEluZ3JlZGllbnQpO1xuICAgICAgbmVnYXRpdmVHcm9jZXJ5Lmdyb2NlcnlMaXN0Q29zdCA9IGZvdW5kSW5ncmVkaWVudHNbZm91bmRJbmdyZWRpZW50cy5sZW5ndGggLSAxXS5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIG5lZ2F0aXZlR3JvY2VyeS5pbmdyZWRpZW50TW9kaWZpY2F0aW9uO1xuICAgICAgcmV0dXJuIG5lZ2F0aXZlR3JvY2VyeTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2hvcHBpbmdMaXN0O1xuICB9XG5cbiAgY29vayhyZWNpcGVJRCwgcmVjaXBlRGF0YSwgdXNlcklkKSB7XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rLmZvckVhY2goKHJlY2lwZVRvQ29vaywgaW5kZXgpID0+IHtcbiAgICAgIGlmIChyZWNpcGVUb0Nvb2suaWQgPT09IHJlY2lwZUlEKSB7XG4gICAgICAgIHRoaXMucmVjaXBlc1RvQ29vay5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBjdXJyZW50UmVjaXBlID0gcmVjaXBlRGF0YS5maW5kKHJlY2lwZSA9PiByZWNpcGUuaWQgPT09IHJlY2lwZUlEKVxuICAgIGxldCBpbmdyZWRpZW50c1RvUmVtb3ZlID0gdGhpcy5yZXR1cm5BbW91bnQoY3VycmVudFJlY2lwZS5pbmdyZWRpZW50cylcbiAgICBpbmdyZWRpZW50c1RvUmVtb3ZlLmZvckVhY2goaW5ncmVkaWVudCA9PiB7XG4gICAgICBsZXQgaW50ID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5ncmVkaWVudClcbiAgICAgIH1cbiAgICAgIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvd2hhdHMtY29va2luLzE5MTEvdXNlcnMvd2NVc2Vyc0RhdGEnLCBpbnQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICBmZXRjaChcImh0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS93aGF0cy1jb29raW4vMTkxMS91c2Vycy93Y1VzZXJzRGF0YVwiKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgIGxldCB1c2VyRGF0YSA9IGRhdGEud2NVc2Vyc0RhdGEuZmluZCh1c2VyID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlci5pZCA9PT0gTnVtYmVyKHVzZXJJZCk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLnBhbnRyeSA9IHVzZXJEYXRhLnBhbnRyeTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycikpXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJzb3VyY2VSb290IjoiIn0=