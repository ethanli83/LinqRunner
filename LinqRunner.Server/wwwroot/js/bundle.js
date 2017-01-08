/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = React;

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = superagent;

/***/ },
/* 2 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 3 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
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

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
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

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = __webpack_require__(0);
const CodeMirror = __webpack_require__(13);
const superagent = __webpack_require__(1);
const action_bar_1 = __webpack_require__(9);
class CodeEditor extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var CM = CodeMirror;
        CM.registerHelper("hint", "roslyn", function (mirror, callback, options) {
            var cur = mirror.getCursor();
            var tok = mirror.getTokenAt(cur);
            console.log(cur, tok);
            superagent
                .get('/api/query/autocomplete')
                .query({ linq: mirror.getValue(), start: tok.start, end: tok.end, line: cur.line })
                .set('Accept', 'application/json')
                .end(function (err, res) {
                if (err) {
                    return;
                }
                callback({ list: res.body,
                    from: CodeMirror.Pos(cur.line, tok.string === '.' ? tok.start + 1 : tok.start),
                    to: CodeMirror.Pos(cur.line, tok.end)
                });
            });
        });
        CM.commands.autocomplete = function (cm) {
            CM.showHint(cm, CM.hint.roslyn, { async: true });
        };
        const options = {
            mode: this.props.Mode,
            theme: this.props.Theme,
            value: this.props.Code,
            lineNumbers: true,
            matchBrackets: true,
            indentUnit: 4,
            completeSingle: false,
            readOnly: this.props.ReadOnly,
            hint: CM.hint.roslyn,
            extraKeys: {
                'Cmd-Space': 'autocomplete',
                'Ctrl-Space': 'autocomplete'
            },
            hintOptions: {
                tables: {
                    'table1': ['col_A', 'col_B', 'col_C'],
                    'table2': ['other_columns1', 'other_columns2']
                }
            }
        };
        this._editor = CodeMirror(this._editorElement, options);
        this._editor.on('change', (editor, change) => {
            if (!this.props.OnChange)
                return;
            this.props.OnChange(editor.getValue());
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if (!this._editor)
            return;
        this._editor.setValue(this.props.Code.trim());
    }
    getCode() {
        return this._editor.getValue();
    }
    render() {
        const containerStyle = __assign({}, this.props.style, { display: 'flex', flexFlow: 'column' });
        const codeMirrorStyle = {
            flexGrow: 1,
            flexBasis: 0
        };
        const ButtonStyle = {
            flexGrow: 0
        };
        var button = !this.props.ReadOnly
            ? (React.createElement(action_bar_1.default, { style: ButtonStyle, className: this.props.className, onRunHandler: this.props.OnRun }))
            : "";
        return (React.createElement("div", { style: containerStyle },
            React.createElement("div", { style: codeMirrorStyle, ref: d => this._editorElement = d }),
            button));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CodeEditor;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = __webpack_require__(0);
class Panel extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const codeMirrorStyle = {
            flexGrow: 1,
            flexBasis: 0
        };
        const ButtonStyle = {
            flexGrow: 0,
            marginBottom: '7px'
        };
        const style = __assign({}, this.props.style, { display: 'flex', flexFlow: 'column', padding: '7px', margin: '7px', borderBottomLeftRadius: '3px', borderBottomRightRadius: '3px', borderTopLeftRadius: '3px', borderTopRightRadius: '3px' });
        var children = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { style: codeMirrorStyle });
        });
        return (React.createElement("div", { style: style, className: "teal lighten-2 z-depth-3" },
            React.createElement("div", { style: ButtonStyle }, this.props.Title),
            children));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Panel;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = __webpack_require__(0);
__webpack_require__(12);
class QueryResult extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        var table;
        if (this.props.Result.length === 0) {
            table = React.createElement("table", { className: "result-table" });
        }
        else {
            var heads = Object
                .keys(this.props.Result[0])
                .map((p, pi) => {
                return React.createElement("th", { key: pi }, p);
            });
            var rows = this.props.Result
                .map((r, ri) => {
                var items = Object.keys(r).map((k, ki) => React.createElement("td", { key: ki }, r[k]));
                return React.createElement("tr", { key: ri }, items);
            });
            table = (React.createElement("table", { className: 'result-table' },
                React.createElement("thead", null,
                    React.createElement("tr", null, heads)),
                React.createElement("tbody", null, rows)));
        }
        var style = __assign({}, this.props.style, { overflow: 'auto' });
        return (React.createElement("div", { className: this.props.className, style: style }, table));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QueryResult;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./app.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./app.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = ReactDOM;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = __webpack_require__(0);
const buttonStyle = {
    height: '100%'
};
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
class ActionBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SqlScript: "select * from 1111",
            Orders: []
        };
    }
    onRun() {
        this.props.onRunHandler();
    }
    render() {
        return (React.createElement("div", { style: __assign({}, this.props.style, { padding: '7px' }), className: this.props.className + ' z-depth-1' },
            React.createElement("button", { className: "waves-effect waves-teal btn-flat teal lighten-2", style: buttonStyle, onClick: e => this.onRun() }, "RUN")));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActionBar;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "html, body {\n    width: 100%;\n    height: 100%;\n}\n\n.dracula {\n  background-color: #282a36;\n  color: #f8f8f2;\n}\n\ndiv.CodeMirror {\n  height: 100%;\n  width: 100%;\n}\n\n.container-style {\n    width: 100%;\n    height: 100%;\n    margin: 0 0 0 0;\n    padding: 0 0 0 0;\n}\n\n.row-style {\n    width: 100%;\n    height: 50%;\n    margin: 0 0 0 0;\n    padding: 0 0 0 0;\n}\n\n.col-style {\n    float: left;\n    width: 50%;\n    height: 100%;\n    margin: 0 0 0 0;\n    padding: 5px;\n}\n\n.full-col-style {\n    float: right;\n    width: 100%;\n    height: 100%;\n    margin: 0 0 0 0;\n    padding: 5px;\n}", ""]);

// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".result-table\n{\n\tfont-family: \"Lucida Sans Unicode\", \"Lucida Grande\", Sans-Serif;\n\tfont-size: 12px;\n\ttext-align: left;\n\tborder-collapse: collapse;\n\t/*border: 1px solid #50fa7b;*/\n}\n\n.result-table th\n{\n\t/*padding: 12px 17px 12px 17px;*/\n    padding-right: 7px;\n\tfont-weight: normal;\n\tfont-size: 13px;\n\tcolor: #50fa7b;\n\tborder-bottom: 1px dashed #50fa7b;\n}\n\n.result-table td\n{\n\t/*padding: 7px 17px 7px 17px;*/\n\tcolor: #50fa7b;\n}\n\n.result-table tbody tr:hover td\n{\n\t/*color: #339;*/\n\tbackground: darkslategray;\n}", ""]);

// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./query-result.css", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./query-result.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = CodeMirror;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

const React = __webpack_require__(0);
const ReactDOM = __webpack_require__(8);
const Request = __webpack_require__(1);
__webpack_require__(7);
const code_editor_1 = __webpack_require__(4);
const query_result_1 = __webpack_require__(6);
const panel_1 = __webpack_require__(5);
class App extends React.Component {
    constructor(props) {
        super(props);
        this._query = 'db.Orders';
        this.run = (linq) => {
            var $this = this;
            Request
                .get('/api/query/db')
                .query({ linq: $this._query })
                .set('Accept', 'application/json')
                .end(function (err, res) {
                var result = res.body.result.map((o) => o);
                console.log(result.length);
                $this.setState({
                    Query: $this._query,
                    TranslatedScript: res.body.sql,
                    QueryResult: result
                });
            });
        };
        this.onCodeChanged = (newCode) => {
            this._query = newCode;
        };
        this.state = {
            Query: this._query,
            TranslatedScript: '',
            QueryResult: []
        };
    }
    render() {
        const flexBox = {
            display: 'flex',
            height: '100%',
            flexFlow: 'column'
        };
        const flexColumn = {
            display: 'flex',
            flexFlow: 'row wrap',
            height: '50%',
            flexGrow: 1
        };
        const flexItem = {
            flexGrow: 1,
            minWidth: '400px'
        };
        return (React.createElement("div", { style: flexBox },
            React.createElement("nav", null,
                React.createElement("div", { className: "nav-wrapper teal lighten-2" },
                    React.createElement("a", { href: "#", style: { marginLeft: '7px' }, className: "brand-logo" }, "Linq Runner"),
                    React.createElement("ul", { className: "right hide-on-med-and-down" },
                        React.createElement("li", null,
                            React.createElement("a", { href: "https://github.com/ethanli83/EFSqlTranslator", target: "_blank" },
                                React.createElement("i", { style: { display: 'block' }, className: "fa fa-github small" })))))),
            React.createElement("div", { style: flexColumn },
                React.createElement(panel_1.default, { style: flexItem, Title: "Linq" },
                    React.createElement(code_editor_1.default, { className: "dracula", Theme: 'dracula', Mode: 'text/x-csharp', Code: this.state.Query, OnChange: this.onCodeChanged, OnRun: this.run })),
                React.createElement(panel_1.default, { style: flexItem, Title: "Sql" },
                    React.createElement(code_editor_1.default, { className: "dracula", Theme: 'dracula', Mode: 'text/x-sql', ReadOnly: true, Code: this.state.TranslatedScript }))),
            React.createElement("div", { style: flexColumn },
                React.createElement(panel_1.default, { style: flexItem, Title: "Result" },
                    React.createElement(query_result_1.default, { className: 'dracula', Result: this.state.QueryResult })))));
    }
}
ReactDOM.render(React.createElement(App, null), document.getElementById('app'));


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map