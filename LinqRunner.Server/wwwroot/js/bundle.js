webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(1);
	const ReactDOM = __webpack_require__(32);
	const Request = __webpack_require__(178);
	__webpack_require__(185);
	__webpack_require__(189);
	__webpack_require__(191);
	__webpack_require__(193);
	__webpack_require__(194);
	const action_bar_1 = __webpack_require__(196);
	const code_editor_1 = __webpack_require__(197);
	const query_result_1 = __webpack_require__(204);
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
	        return (React.createElement("div", { className: "container-style" },
	            React.createElement("div", { className: "row-style" },
	                React.createElement("div", { className: "col-style" },
	                    React.createElement(code_editor_1.CodeEditor, { style: { width: '100%', height: '95%' }, Theme: "dracula", Mode: "text/x-csharp", ReadOnly: false, Code: this.state.Query, OnCodeChange: (c) => this.onCodeChanged(c) }),
	                    React.createElement(action_bar_1.ActionBar, { style: { width: '100%', height: '5%' }, className: "dracula", onRunHandler: this.run })),
	                React.createElement("div", { className: "col-style" },
	                    React.createElement(code_editor_1.CodeEditor, { style: { width: '100%', height: '100%' }, Theme: "dracula", Mode: "text/x-sql", ReadOnly: false, Code: this.state.TranslatedScript, OnCodeChange: () => { } }))),
	            React.createElement("div", { className: "row-style" },
	                React.createElement("div", { className: "full-col-style", style: { overflow: 'scroll' } },
	                    React.createElement(query_result_1.QueryResult, { style: { width: '100%', height: '100%' }, className: "dracula", Result: this.state.QueryResult })))));
	    }
	}
	ReactDOM.render(React.createElement(App, null), document.getElementById("app"));


/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(186);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(188)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./dracula.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./dracula.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(187)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\n\n    Name:       dracula\n    Author:     Michael Kaminsky (http://github.com/mkaminsky11)\n\n    Original dracula color scheme by Zeno Rocha (https://github.com/zenorocha/dracula-theme)\n\n*/\n\n\n.cm-s-dracula.CodeMirror, .cm-s-dracula .CodeMirror-gutters {\n  background-color: #282a36 !important;\n  color: #f8f8f2 !important;\n  border: none;\n}\n.cm-s-dracula .CodeMirror-gutters { color: #282a36; }\n.cm-s-dracula .CodeMirror-cursor { border-left: solid thin #f8f8f0; }\n.cm-s-dracula .CodeMirror-linenumber { color: #6D8A88; }\n.cm-s-dracula .CodeMirror-selected { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::selection, .cm-s-dracula .CodeMirror-line > span::selection, .cm-s-dracula .CodeMirror-line > span > span::selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula .CodeMirror-line::-moz-selection, .cm-s-dracula .CodeMirror-line > span::-moz-selection, .cm-s-dracula .CodeMirror-line > span > span::-moz-selection { background: rgba(255, 255, 255, 0.10); }\n.cm-s-dracula span.cm-comment { color: #6272a4; }\n.cm-s-dracula span.cm-string, .cm-s-dracula span.cm-string-2 { color: #f1fa8c; }\n.cm-s-dracula span.cm-number { color: #bd93f9; }\n.cm-s-dracula span.cm-variable { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-2 { color: white; }\n.cm-s-dracula span.cm-def { color: #ffb86c; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-operator { color: #ff79c6; }\n.cm-s-dracula span.cm-keyword { color: #ff79c6; }\n.cm-s-dracula span.cm-atom { color: #bd93f9; }\n.cm-s-dracula span.cm-meta { color: #f8f8f2; }\n.cm-s-dracula span.cm-tag { color: #ff79c6; }\n.cm-s-dracula span.cm-attribute { color: #50fa7b; }\n.cm-s-dracula span.cm-qualifier { color: #50fa7b; }\n.cm-s-dracula span.cm-property { color: #66d9ef; }\n.cm-s-dracula span.cm-builtin { color: #50fa7b; }\n.cm-s-dracula span.cm-variable-3 { color: #50fa7b; }\n\n.cm-s-dracula .CodeMirror-activeline-background { background: rgba(255,255,255,0.1); }\n.cm-s-dracula .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n", ""]);
	
	// exports


/***/ },

/***/ 187:
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

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

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
		if(false) {
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

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(190);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(188)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./bootstrap.min.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./bootstrap.min.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(187)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Bootstrap v4.0.0-alpha.5 (https://getbootstrap.com)\n * Copyright 2011-2016 The Bootstrap Authors\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v4.2.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}progress{vertical-align:baseline}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}button,input,optgroup,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}@media print{*,::after,::before,::first-letter,blockquote::first-line,div::first-line,li::first-line,p::first-line{text-shadow:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}a,a:visited{text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.tag{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,::after,::before{-webkit-box-sizing:inherit;box-sizing:inherit}@-ms-viewport{width:device-width}html{font-size:16px;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}body{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-size:1rem;line-height:1.5;color:#373a3c;background-color:#fff}[tabindex=\"-1\"]:focus{outline:0!important}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #818a91}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}a{color:#0275d8;text-decoration:none}a:focus,a:hover{color:#014c8c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle}[role=button]{cursor:pointer}[role=button],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}table{border-collapse:collapse;background-color:transparent}caption{padding-top:.75rem;padding-bottom:.75rem;color:#818a91;text-align:left;caption-side:bottom}th{text-align:left}label{display:inline-block;margin-bottom:.5rem}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,select,textarea{line-height:inherit}input[type=checkbox]:disabled,input[type=radio]:disabled{cursor:not-allowed}input[type=date],input[type=time],input[type=datetime-local],input[type=month]{-webkit-appearance:listbox}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit}input[type=search]{-webkit-appearance:none}output{display:inline-block}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300}.display-2{font-size:5.5rem;font-weight:300}.display-3{font-size:4.5rem;font-weight:300}.display-4{font-size:3.5rem;font-weight:300}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:5px}.initialism{font-size:90%;text-transform:uppercase}.blockquote{padding:.5rem 1rem;margin-bottom:1rem;font-size:1.25rem;border-left:.25rem solid #eceeef}.blockquote-footer{display:block;font-size:80%;color:#818a91}.blockquote-footer::before{content:\"\\2014   \\A0\"}.blockquote-reverse{padding-right:1rem;padding-left:0;text-align:right;border-right:.25rem solid #eceeef;border-left:0}.blockquote-reverse .blockquote-footer::before{content:\"\"}.blockquote-reverse .blockquote-footer::after{content:\"\\A0   \\2014\"}dl.row>dd+dt{clear:left}.carousel-inner>.carousel-item>a>img,.carousel-inner>.carousel-item>img,.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #ddd;border-radius:.25rem;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#818a91}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}code{padding:.2rem .4rem;font-size:90%;color:#bd4147;background-color:#f7f7f9;border-radius:.25rem}kbd{padding:.2rem .4rem;font-size:90%;color:#fff;background-color:#333;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;margin-top:0;margin-bottom:1rem;font-size:90%;color:#373a3c}pre code{padding:0;font-size:inherit;color:inherit;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px}.container::after{content:\"\";display:table;clear:both}@media (min-width:576px){.container{width:540px;max-width:100%}}@media (min-width:768px){.container{width:720px;max-width:100%}}@media (min-width:992px){.container{width:960px;max-width:100%}}@media (min-width:1200px){.container{width:1140px;max-width:100%}}.container-fluid{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px}.container-fluid::after{content:\"\";display:table;clear:both}.row{margin-right:-15px;margin-left:-15px}.row::after{content:\"\";display:table;clear:both}@media (min-width:576px){.row{margin-right:-15px;margin-left:-15px}}@media (min-width:768px){.row{margin-right:-15px;margin-left:-15px}}@media (min-width:992px){.row{margin-right:-15px;margin-left:-15px}}@media (min-width:1200px){.row{margin-right:-15px;margin-left:-15px}}.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}@media (min-width:576px){.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{padding-right:15px;padding-left:15px}}@media (min-width:768px){.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{padding-right:15px;padding-left:15px}}@media (min-width:992px){.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{padding-right:15px;padding-left:15px}}@media (min-width:1200px){.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{padding-right:15px;padding-left:15px}}.col-xs-1{float:left;width:8.333333%}.col-xs-2{float:left;width:16.666667%}.col-xs-3{float:left;width:25%}.col-xs-4{float:left;width:33.333333%}.col-xs-5{float:left;width:41.666667%}.col-xs-6{float:left;width:50%}.col-xs-7{float:left;width:58.333333%}.col-xs-8{float:left;width:66.666667%}.col-xs-9{float:left;width:75%}.col-xs-10{float:left;width:83.333333%}.col-xs-11{float:left;width:91.666667%}.col-xs-12{float:left;width:100%}.pull-xs-0{right:auto}.pull-xs-1{right:8.333333%}.pull-xs-2{right:16.666667%}.pull-xs-3{right:25%}.pull-xs-4{right:33.333333%}.pull-xs-5{right:41.666667%}.pull-xs-6{right:50%}.pull-xs-7{right:58.333333%}.pull-xs-8{right:66.666667%}.pull-xs-9{right:75%}.pull-xs-10{right:83.333333%}.pull-xs-11{right:91.666667%}.pull-xs-12{right:100%}.push-xs-0{left:auto}.push-xs-1{left:8.333333%}.push-xs-2{left:16.666667%}.push-xs-3{left:25%}.push-xs-4{left:33.333333%}.push-xs-5{left:41.666667%}.push-xs-6{left:50%}.push-xs-7{left:58.333333%}.push-xs-8{left:66.666667%}.push-xs-9{left:75%}.push-xs-10{left:83.333333%}.push-xs-11{left:91.666667%}.push-xs-12{left:100%}.offset-xs-1{margin-left:8.333333%}.offset-xs-2{margin-left:16.666667%}.offset-xs-3{margin-left:25%}.offset-xs-4{margin-left:33.333333%}.offset-xs-5{margin-left:41.666667%}.offset-xs-6{margin-left:50%}.offset-xs-7{margin-left:58.333333%}.offset-xs-8{margin-left:66.666667%}.offset-xs-9{margin-left:75%}.offset-xs-10{margin-left:83.333333%}.offset-xs-11{margin-left:91.666667%}@media (min-width:576px){.col-sm-1{float:left;width:8.333333%}.col-sm-2{float:left;width:16.666667%}.col-sm-3{float:left;width:25%}.col-sm-4{float:left;width:33.333333%}.col-sm-5{float:left;width:41.666667%}.col-sm-6{float:left;width:50%}.col-sm-7{float:left;width:58.333333%}.col-sm-8{float:left;width:66.666667%}.col-sm-9{float:left;width:75%}.col-sm-10{float:left;width:83.333333%}.col-sm-11{float:left;width:91.666667%}.col-sm-12{float:left;width:100%}.pull-sm-0{right:auto}.pull-sm-1{right:8.333333%}.pull-sm-2{right:16.666667%}.pull-sm-3{right:25%}.pull-sm-4{right:33.333333%}.pull-sm-5{right:41.666667%}.pull-sm-6{right:50%}.pull-sm-7{right:58.333333%}.pull-sm-8{right:66.666667%}.pull-sm-9{right:75%}.pull-sm-10{right:83.333333%}.pull-sm-11{right:91.666667%}.pull-sm-12{right:100%}.push-sm-0{left:auto}.push-sm-1{left:8.333333%}.push-sm-2{left:16.666667%}.push-sm-3{left:25%}.push-sm-4{left:33.333333%}.push-sm-5{left:41.666667%}.push-sm-6{left:50%}.push-sm-7{left:58.333333%}.push-sm-8{left:66.666667%}.push-sm-9{left:75%}.push-sm-10{left:83.333333%}.push-sm-11{left:91.666667%}.push-sm-12{left:100%}.offset-sm-0{margin-left:0%}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md-1{float:left;width:8.333333%}.col-md-2{float:left;width:16.666667%}.col-md-3{float:left;width:25%}.col-md-4{float:left;width:33.333333%}.col-md-5{float:left;width:41.666667%}.col-md-6{float:left;width:50%}.col-md-7{float:left;width:58.333333%}.col-md-8{float:left;width:66.666667%}.col-md-9{float:left;width:75%}.col-md-10{float:left;width:83.333333%}.col-md-11{float:left;width:91.666667%}.col-md-12{float:left;width:100%}.pull-md-0{right:auto}.pull-md-1{right:8.333333%}.pull-md-2{right:16.666667%}.pull-md-3{right:25%}.pull-md-4{right:33.333333%}.pull-md-5{right:41.666667%}.pull-md-6{right:50%}.pull-md-7{right:58.333333%}.pull-md-8{right:66.666667%}.pull-md-9{right:75%}.pull-md-10{right:83.333333%}.pull-md-11{right:91.666667%}.pull-md-12{right:100%}.push-md-0{left:auto}.push-md-1{left:8.333333%}.push-md-2{left:16.666667%}.push-md-3{left:25%}.push-md-4{left:33.333333%}.push-md-5{left:41.666667%}.push-md-6{left:50%}.push-md-7{left:58.333333%}.push-md-8{left:66.666667%}.push-md-9{left:75%}.push-md-10{left:83.333333%}.push-md-11{left:91.666667%}.push-md-12{left:100%}.offset-md-0{margin-left:0%}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg-1{float:left;width:8.333333%}.col-lg-2{float:left;width:16.666667%}.col-lg-3{float:left;width:25%}.col-lg-4{float:left;width:33.333333%}.col-lg-5{float:left;width:41.666667%}.col-lg-6{float:left;width:50%}.col-lg-7{float:left;width:58.333333%}.col-lg-8{float:left;width:66.666667%}.col-lg-9{float:left;width:75%}.col-lg-10{float:left;width:83.333333%}.col-lg-11{float:left;width:91.666667%}.col-lg-12{float:left;width:100%}.pull-lg-0{right:auto}.pull-lg-1{right:8.333333%}.pull-lg-2{right:16.666667%}.pull-lg-3{right:25%}.pull-lg-4{right:33.333333%}.pull-lg-5{right:41.666667%}.pull-lg-6{right:50%}.pull-lg-7{right:58.333333%}.pull-lg-8{right:66.666667%}.pull-lg-9{right:75%}.pull-lg-10{right:83.333333%}.pull-lg-11{right:91.666667%}.pull-lg-12{right:100%}.push-lg-0{left:auto}.push-lg-1{left:8.333333%}.push-lg-2{left:16.666667%}.push-lg-3{left:25%}.push-lg-4{left:33.333333%}.push-lg-5{left:41.666667%}.push-lg-6{left:50%}.push-lg-7{left:58.333333%}.push-lg-8{left:66.666667%}.push-lg-9{left:75%}.push-lg-10{left:83.333333%}.push-lg-11{left:91.666667%}.push-lg-12{left:100%}.offset-lg-0{margin-left:0%}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl-1{float:left;width:8.333333%}.col-xl-2{float:left;width:16.666667%}.col-xl-3{float:left;width:25%}.col-xl-4{float:left;width:33.333333%}.col-xl-5{float:left;width:41.666667%}.col-xl-6{float:left;width:50%}.col-xl-7{float:left;width:58.333333%}.col-xl-8{float:left;width:66.666667%}.col-xl-9{float:left;width:75%}.col-xl-10{float:left;width:83.333333%}.col-xl-11{float:left;width:91.666667%}.col-xl-12{float:left;width:100%}.pull-xl-0{right:auto}.pull-xl-1{right:8.333333%}.pull-xl-2{right:16.666667%}.pull-xl-3{right:25%}.pull-xl-4{right:33.333333%}.pull-xl-5{right:41.666667%}.pull-xl-6{right:50%}.pull-xl-7{right:58.333333%}.pull-xl-8{right:66.666667%}.pull-xl-9{right:75%}.pull-xl-10{right:83.333333%}.pull-xl-11{right:91.666667%}.pull-xl-12{right:100%}.push-xl-0{left:auto}.push-xl-1{left:8.333333%}.push-xl-2{left:16.666667%}.push-xl-3{left:25%}.push-xl-4{left:33.333333%}.push-xl-5{left:41.666667%}.push-xl-6{left:50%}.push-xl-7{left:58.333333%}.push-xl-8{left:66.666667%}.push-xl-9{left:75%}.push-xl-10{left:83.333333%}.push-xl-11{left:91.666667%}.push-xl-12{left:100%}.offset-xl-0{margin-left:0%}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;max-width:100%;margin-bottom:1rem}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #eceeef}.table thead th{vertical-align:bottom;border-bottom:2px solid #eceeef}.table tbody+tbody{border-top:2px solid #eceeef}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #eceeef}.table-bordered td,.table-bordered th{border:1px solid #eceeef}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table-success,.table-success>td,.table-success>th{background-color:#dff0d8}.table-hover .table-success:hover{background-color:#d0e9c6}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#d0e9c6}.table-info,.table-info>td,.table-info>th{background-color:#d9edf7}.table-hover .table-info:hover{background-color:#c4e3f3}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#c4e3f3}.table-warning,.table-warning>td,.table-warning>th{background-color:#fcf8e3}.table-hover .table-warning:hover{background-color:#faf2cc}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#faf2cc}.table-danger,.table-danger>td,.table-danger>th{background-color:#f2dede}.table-hover .table-danger:hover{background-color:#ebcccc}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#ebcccc}.thead-inverse th{color:#fff;background-color:#373a3c}.thead-default th{color:#55595c;background-color:#eceeef}.table-inverse{color:#eceeef;background-color:#373a3c}.table-inverse td,.table-inverse th,.table-inverse thead th{border-color:#55595c}.table-inverse.table-bordered{border:0}.table-responsive{display:block;width:100%;min-height:0%;overflow-x:auto}.table-reflow thead{float:left}.table-reflow tbody{display:block;white-space:nowrap}.table-reflow td,.table-reflow th{border-top:1px solid #eceeef;border-left:1px solid #eceeef}.table-reflow td:last-child,.table-reflow th:last-child{border-right:1px solid #eceeef}.table-reflow tbody:last-child tr:last-child td,.table-reflow tbody:last-child tr:last-child th,.table-reflow tfoot:last-child tr:last-child td,.table-reflow tfoot:last-child tr:last-child th,.table-reflow thead:last-child tr:last-child td,.table-reflow thead:last-child tr:last-child th{border-bottom:1px solid #eceeef}.table-reflow tr{float:left}.table-reflow tr td,.table-reflow tr th{display:block!important;border:1px solid #eceeef}.form-control{display:block;width:100%;padding:.5rem .75rem;font-size:1rem;line-height:1.25;color:#55595c;background-color:#fff;background-image:none;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#55595c;background-color:#fff;border-color:#66afe9;outline:0}.form-control::-webkit-input-placeholder{color:#999;opacity:1}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999;opacity:1}.form-control::placeholder{color:#999;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#eceeef;opacity:1}.form-control:disabled{cursor:not-allowed}select.form-control:not([size]):not([multiple]){height:calc(2.5rem - 2px)}select.form-control:focus::-ms-value{color:#55595c;background-color:#fff}.form-control-file,.form-control-range{display:block}.col-form-label{padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0}.col-form-label-lg{padding-top:.75rem;padding-bottom:.75rem;font-size:1.25rem}.col-form-label-sm{padding-top:.25rem;padding-bottom:.25rem;font-size:.875rem}.col-form-legend{padding-top:.5rem;padding-bottom:.5rem;margin-bottom:0;font-size:1rem}.form-control-static{padding-top:.5rem;padding-bottom:.5rem;line-height:1.25;border:solid transparent;border-width:1px 0}.form-control-static.form-control-lg,.form-control-static.form-control-sm,.input-group-lg>.form-control-static.form-control,.input-group-lg>.form-control-static.input-group-addon,.input-group-lg>.input-group-btn>.form-control-static.btn,.input-group-sm>.form-control-static.form-control,.input-group-sm>.form-control-static.input-group-addon,.input-group-sm>.input-group-btn>.form-control-static.btn{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-sm>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),.input-group-sm>select.input-group-addon:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:1.8125rem}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.input-group-lg>.input-group-btn>select.btn:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),.input-group-lg>select.input-group-addon:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:3.166667rem}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-check{position:relative;display:block;margin-bottom:.75rem}.form-check+.form-check{margin-top:-.25rem}.form-check.disabled .form-check-label{color:#818a91;cursor:not-allowed}.form-check-label{padding-left:1.25rem;margin-bottom:0;cursor:pointer}.form-check-input{position:absolute;margin-top:.25rem;margin-left:-1.25rem}.form-check-input:only-child{position:static}.form-check-inline{position:relative;display:inline-block;padding-left:1.25rem;margin-bottom:0;vertical-align:middle;cursor:pointer}.form-check-inline+.form-check-inline{margin-left:.75rem}.form-check-inline.disabled{color:#818a91;cursor:not-allowed}.form-control-feedback{margin-top:.25rem}.form-control-danger,.form-control-success,.form-control-warning{padding-right:2.25rem;background-repeat:no-repeat;background-position:center right .625rem;-webkit-background-size:1.25rem 1.25rem;background-size:1.25rem 1.25rem}.has-success .custom-control,.has-success .form-check-inline,.has-success .form-check-label,.has-success .form-control-feedback,.has-success .form-control-label{color:#5cb85c}.has-success .form-control{border-color:#5cb85c}.has-success .form-control:focus{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #a3d7a3;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #a3d7a3}.has-success .input-group-addon{color:#5cb85c;border-color:#5cb85c;background-color:#eaf6ea}.has-success .form-control-success{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#5cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\")}.has-warning .custom-control,.has-warning .form-check-inline,.has-warning .form-check-label,.has-warning .form-control-feedback,.has-warning .form-control-label{color:#f0ad4e}.has-warning .form-control{border-color:#f0ad4e}.has-warning .form-control:focus{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #f8d9ac;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #f8d9ac}.has-warning .input-group-addon{color:#f0ad4e;border-color:#f0ad4e;background-color:#fff}.has-warning .form-control-warning{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\")}.has-danger .custom-control,.has-danger .form-check-inline,.has-danger .form-check-label,.has-danger .form-control-feedback,.has-danger .form-control-label{color:#d9534f}.has-danger .form-control{border-color:#d9534f}.has-danger .form-control:focus{-webkit-box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #eba5a3;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #eba5a3}.has-danger .input-group-addon{color:#d9534f;border-color:#d9534f;background-color:#fdf7f7}.has-danger .form-control-danger{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='#d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\")}@media (min-width:576px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;width:auto;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .form-control-label{margin-bottom:0;vertical-align:middle}.form-inline .form-check{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .form-check-label{padding-left:0}.form-inline .form-check-input{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.btn{display:inline-block;font-weight:400;line-height:1.25;text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.5rem 1rem;font-size:1rem;border-radius:.25rem}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn:focus,.btn:hover{text-decoration:none}.btn.focus{text-decoration:none}.btn.active,.btn:active{background-image:none;outline:0}.btn.disabled,.btn:disabled{cursor:not-allowed;opacity:.65}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-primary:hover{color:#fff;background-color:#025aa5;border-color:#01549b}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#025aa5;border-color:#01549b}.btn-primary.active,.btn-primary:active,.open>.btn-primary.dropdown-toggle{color:#fff;background-color:#025aa5;border-color:#01549b;background-image:none}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.btn-primary.dropdown-toggle.focus,.open>.btn-primary.dropdown-toggle:focus,.open>.btn-primary.dropdown-toggle:hover{color:#fff;background-color:#014682;border-color:#01315a}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary:disabled.focus,.btn-primary:disabled:focus{background-color:#0275d8;border-color:#0275d8}.btn-primary.disabled:hover,.btn-primary:disabled:hover{background-color:#0275d8;border-color:#0275d8}.btn-secondary{color:#373a3c;background-color:#fff;border-color:#ccc}.btn-secondary:hover{color:#373a3c;background-color:#e6e6e6;border-color:#adadad}.btn-secondary.focus,.btn-secondary:focus{color:#373a3c;background-color:#e6e6e6;border-color:#adadad}.btn-secondary.active,.btn-secondary:active,.open>.btn-secondary.dropdown-toggle{color:#373a3c;background-color:#e6e6e6;border-color:#adadad;background-image:none}.btn-secondary.active.focus,.btn-secondary.active:focus,.btn-secondary.active:hover,.btn-secondary:active.focus,.btn-secondary:active:focus,.btn-secondary:active:hover,.open>.btn-secondary.dropdown-toggle.focus,.open>.btn-secondary.dropdown-toggle:focus,.open>.btn-secondary.dropdown-toggle:hover{color:#373a3c;background-color:#d4d4d4;border-color:#8c8c8c}.btn-secondary.disabled.focus,.btn-secondary.disabled:focus,.btn-secondary:disabled.focus,.btn-secondary:disabled:focus{background-color:#fff;border-color:#ccc}.btn-secondary.disabled:hover,.btn-secondary:disabled:hover{background-color:#fff;border-color:#ccc}.btn-info{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#2aabd2}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#2aabd2}.btn-info.active,.btn-info:active,.open>.btn-info.dropdown-toggle{color:#fff;background-color:#31b0d5;border-color:#2aabd2;background-image:none}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.btn-info.dropdown-toggle.focus,.open>.btn-info.dropdown-toggle:focus,.open>.btn-info.dropdown-toggle:hover{color:#fff;background-color:#269abc;border-color:#1f7e9a}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info:disabled.focus,.btn-info:disabled:focus{background-color:#5bc0de;border-color:#5bc0de}.btn-info.disabled:hover,.btn-info:disabled:hover{background-color:#5bc0de;border-color:#5bc0de}.btn-success{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#419641}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#419641}.btn-success.active,.btn-success:active,.open>.btn-success.dropdown-toggle{color:#fff;background-color:#449d44;border-color:#419641;background-image:none}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.btn-success.dropdown-toggle.focus,.open>.btn-success.dropdown-toggle:focus,.open>.btn-success.dropdown-toggle:hover{color:#fff;background-color:#398439;border-color:#2d672d}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success:disabled.focus,.btn-success:disabled:focus{background-color:#5cb85c;border-color:#5cb85c}.btn-success.disabled:hover,.btn-success:disabled:hover{background-color:#5cb85c;border-color:#5cb85c}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#eb9316}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#eb9316}.btn-warning.active,.btn-warning:active,.open>.btn-warning.dropdown-toggle{color:#fff;background-color:#ec971f;border-color:#eb9316;background-image:none}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.btn-warning.dropdown-toggle.focus,.open>.btn-warning.dropdown-toggle:focus,.open>.btn-warning.dropdown-toggle:hover{color:#fff;background-color:#d58512;border-color:#b06d0f}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning:disabled.focus,.btn-warning:disabled:focus{background-color:#f0ad4e;border-color:#f0ad4e}.btn-warning.disabled:hover,.btn-warning:disabled:hover{background-color:#f0ad4e;border-color:#f0ad4e}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#c12e2a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#c12e2a}.btn-danger.active,.btn-danger:active,.open>.btn-danger.dropdown-toggle{color:#fff;background-color:#c9302c;border-color:#c12e2a;background-image:none}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.btn-danger.dropdown-toggle.focus,.open>.btn-danger.dropdown-toggle:focus,.open>.btn-danger.dropdown-toggle:hover{color:#fff;background-color:#ac2925;border-color:#8b211e}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger:disabled.focus,.btn-danger:disabled:focus{background-color:#d9534f;border-color:#d9534f}.btn-danger.disabled:hover,.btn-danger:disabled:hover{background-color:#d9534f;border-color:#d9534f}.btn-outline-primary{color:#0275d8;background-image:none;background-color:transparent;border-color:#0275d8}.btn-outline-primary:hover{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-outline-primary.focus,.btn-outline-primary:focus{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-outline-primary.active,.btn-outline-primary:active,.open>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#0275d8;border-color:#0275d8}.btn-outline-primary.active.focus,.btn-outline-primary.active:focus,.btn-outline-primary.active:hover,.btn-outline-primary:active.focus,.btn-outline-primary:active:focus,.btn-outline-primary:active:hover,.open>.btn-outline-primary.dropdown-toggle.focus,.open>.btn-outline-primary.dropdown-toggle:focus,.open>.btn-outline-primary.dropdown-toggle:hover{color:#fff;background-color:#014682;border-color:#01315a}.btn-outline-primary.disabled.focus,.btn-outline-primary.disabled:focus,.btn-outline-primary:disabled.focus,.btn-outline-primary:disabled:focus{border-color:#43a7fd}.btn-outline-primary.disabled:hover,.btn-outline-primary:disabled:hover{border-color:#43a7fd}.btn-outline-secondary{color:#ccc;background-image:none;background-color:transparent;border-color:#ccc}.btn-outline-secondary:hover{color:#fff;background-color:#ccc;border-color:#ccc}.btn-outline-secondary.focus,.btn-outline-secondary:focus{color:#fff;background-color:#ccc;border-color:#ccc}.btn-outline-secondary.active,.btn-outline-secondary:active,.open>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#ccc;border-color:#ccc}.btn-outline-secondary.active.focus,.btn-outline-secondary.active:focus,.btn-outline-secondary.active:hover,.btn-outline-secondary:active.focus,.btn-outline-secondary:active:focus,.btn-outline-secondary:active:hover,.open>.btn-outline-secondary.dropdown-toggle.focus,.open>.btn-outline-secondary.dropdown-toggle:focus,.open>.btn-outline-secondary.dropdown-toggle:hover{color:#fff;background-color:#a1a1a1;border-color:#8c8c8c}.btn-outline-secondary.disabled.focus,.btn-outline-secondary.disabled:focus,.btn-outline-secondary:disabled.focus,.btn-outline-secondary:disabled:focus{border-color:#fff}.btn-outline-secondary.disabled:hover,.btn-outline-secondary:disabled:hover{border-color:#fff}.btn-outline-info{color:#5bc0de;background-image:none;background-color:transparent;border-color:#5bc0de}.btn-outline-info:hover{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-outline-info.focus,.btn-outline-info:focus{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-outline-info.active,.btn-outline-info:active,.open>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#5bc0de;border-color:#5bc0de}.btn-outline-info.active.focus,.btn-outline-info.active:focus,.btn-outline-info.active:hover,.btn-outline-info:active.focus,.btn-outline-info:active:focus,.btn-outline-info:active:hover,.open>.btn-outline-info.dropdown-toggle.focus,.open>.btn-outline-info.dropdown-toggle:focus,.open>.btn-outline-info.dropdown-toggle:hover{color:#fff;background-color:#269abc;border-color:#1f7e9a}.btn-outline-info.disabled.focus,.btn-outline-info.disabled:focus,.btn-outline-info:disabled.focus,.btn-outline-info:disabled:focus{border-color:#b0e1ef}.btn-outline-info.disabled:hover,.btn-outline-info:disabled:hover{border-color:#b0e1ef}.btn-outline-success{color:#5cb85c;background-image:none;background-color:transparent;border-color:#5cb85c}.btn-outline-success:hover{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-outline-success.focus,.btn-outline-success:focus{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-outline-success.active,.btn-outline-success:active,.open>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#5cb85c;border-color:#5cb85c}.btn-outline-success.active.focus,.btn-outline-success.active:focus,.btn-outline-success.active:hover,.btn-outline-success:active.focus,.btn-outline-success:active:focus,.btn-outline-success:active:hover,.open>.btn-outline-success.dropdown-toggle.focus,.open>.btn-outline-success.dropdown-toggle:focus,.open>.btn-outline-success.dropdown-toggle:hover{color:#fff;background-color:#398439;border-color:#2d672d}.btn-outline-success.disabled.focus,.btn-outline-success.disabled:focus,.btn-outline-success:disabled.focus,.btn-outline-success:disabled:focus{border-color:#a3d7a3}.btn-outline-success.disabled:hover,.btn-outline-success:disabled:hover{border-color:#a3d7a3}.btn-outline-warning{color:#f0ad4e;background-image:none;background-color:transparent;border-color:#f0ad4e}.btn-outline-warning:hover{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning.focus,.btn-outline-warning:focus{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning.active,.btn-outline-warning:active,.open>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#f0ad4e;border-color:#f0ad4e}.btn-outline-warning.active.focus,.btn-outline-warning.active:focus,.btn-outline-warning.active:hover,.btn-outline-warning:active.focus,.btn-outline-warning:active:focus,.btn-outline-warning:active:hover,.open>.btn-outline-warning.dropdown-toggle.focus,.open>.btn-outline-warning.dropdown-toggle:focus,.open>.btn-outline-warning.dropdown-toggle:hover{color:#fff;background-color:#d58512;border-color:#b06d0f}.btn-outline-warning.disabled.focus,.btn-outline-warning.disabled:focus,.btn-outline-warning:disabled.focus,.btn-outline-warning:disabled:focus{border-color:#f8d9ac}.btn-outline-warning.disabled:hover,.btn-outline-warning:disabled:hover{border-color:#f8d9ac}.btn-outline-danger{color:#d9534f;background-image:none;background-color:transparent;border-color:#d9534f}.btn-outline-danger:hover{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger.focus,.btn-outline-danger:focus{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger.active,.btn-outline-danger:active,.open>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#d9534f;border-color:#d9534f}.btn-outline-danger.active.focus,.btn-outline-danger.active:focus,.btn-outline-danger.active:hover,.btn-outline-danger:active.focus,.btn-outline-danger:active:focus,.btn-outline-danger:active:hover,.open>.btn-outline-danger.dropdown-toggle.focus,.open>.btn-outline-danger.dropdown-toggle:focus,.open>.btn-outline-danger.dropdown-toggle:hover{color:#fff;background-color:#ac2925;border-color:#8b211e}.btn-outline-danger.disabled.focus,.btn-outline-danger.disabled:focus,.btn-outline-danger:disabled.focus,.btn-outline-danger:disabled:focus{border-color:#eba5a3}.btn-outline-danger.disabled:hover,.btn-outline-danger:disabled:hover{border-color:#eba5a3}.btn-link{font-weight:400;color:#0275d8;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link:disabled{background-color:transparent}.btn-link,.btn-link:active,.btn-link:focus{border-color:transparent}.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#014c8c;text-decoration:underline;background-color:transparent}.btn-link:disabled:focus,.btn-link:disabled:hover{color:#818a91;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;-o-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-timing-function:ease;-o-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.35s;-o-transition-duration:.35s;transition-duration:.35s;-webkit-transition-property:height;-o-transition-property:height;transition-property:height}.dropdown,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.3em;vertical-align:middle;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-left:.3em solid transparent}.dropdown-toggle:focus{outline:0}.dropup .dropdown-toggle::after{border-top:0;border-bottom:.3em solid}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#373a3c;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-divider{height:1px;margin:.5rem 0;overflow:hidden;background-color:#e5e5e5}.dropdown-item{display:block;width:100%;padding:3px 1.5rem;clear:both;font-weight:400;color:#373a3c;text-align:inherit;white-space:nowrap;background:0 0;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#2b2d2f;text-decoration:none;background-color:#f5f5f5}.dropdown-item.active,.dropdown-item.active:focus,.dropdown-item.active:hover{color:#fff;text-decoration:none;background-color:#0275d8;outline:0}.dropdown-item.disabled,.dropdown-item.disabled:focus,.dropdown-item.disabled:hover{color:#818a91}.dropdown-item.disabled:focus,.dropdown-item.disabled:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:\"progid:DXImageTransform.Microsoft.gradient(enabled = false)\"}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#818a91;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:\"\";border-top:0;border-bottom:.3em solid}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:.125rem}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left;margin-bottom:0}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:2}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-.5rem}.btn-toolbar::after{content:\"\";display:table;clear:both}.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:.5rem}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn+.dropdown-toggle-split::after{margin-left:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:1.125rem;padding-left:1.125rem}.btn .caret{margin-left:0}.btn-group-lg>.btn .caret,.btn-lg .caret{border-width:.3em .3em 0;border-bottom-width:0}.dropup .btn-group-lg>.btn .caret,.dropup .btn-lg .caret{border-width:0 .3em .3em}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group::after{content:\"\";display:table;clear:both}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-right-radius:0;border-top-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-right-radius:0;border-top-left-radius:0}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;width:100%;display:table;border-collapse:separate}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:active,.input-group .form-control:focus,.input-group .form-control:hover{z-index:3}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.25;color:#55595c;text-align:center;background-color:#eceeef;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.input-group-addon.form-control-sm,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.input-group-addon.btn{padding:.25rem .5rem;font-size:.875rem;border-radius:.2rem}.input-group-addon.form-control-lg,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.input-group-addon.btn{padding:.75rem 1.5rem;font-size:1.25rem;border-radius:.3rem}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:not(:last-child),.input-group-addon:not(:last-child),.input-group-btn:not(:first-child)>.btn-group:not(:last-child)>.btn,.input-group-btn:not(:first-child)>.btn:not(:last-child):not(.dropdown-toggle),.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group>.btn,.input-group-btn:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-top-right-radius:0}.input-group-addon:not(:last-child){border-right:0}.input-group .form-control:not(:first-child),.input-group-addon:not(:first-child),.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group>.btn,.input-group-btn:not(:first-child)>.dropdown-toggle,.input-group-btn:not(:last-child)>.btn-group:not(:first-child)>.btn,.input-group-btn:not(:last-child)>.btn:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.form-control+.input-group-addon:not(:first-child){border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:3}.input-group-btn:not(:last-child)>.btn,.input-group-btn:not(:last-child)>.btn-group{margin-right:-1px}.input-group-btn:not(:first-child)>.btn,.input-group-btn:not(:first-child)>.btn-group{z-index:2;margin-left:-1px}.input-group-btn:not(:first-child)>.btn-group:active,.input-group-btn:not(:first-child)>.btn-group:focus,.input-group-btn:not(:first-child)>.btn-group:hover,.input-group-btn:not(:first-child)>.btn:active,.input-group-btn:not(:first-child)>.btn:focus,.input-group-btn:not(:first-child)>.btn:hover{z-index:3}.custom-control{position:relative;display:inline-block;padding-left:1.5rem;cursor:pointer}.custom-control+.custom-control{margin-left:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-indicator{color:#fff;background-color:#0074d9}.custom-control-input:focus~.custom-control-indicator{-webkit-box-shadow:0 0 0 .075rem #fff,0 0 0 .2rem #0074d9;box-shadow:0 0 0 .075rem #fff,0 0 0 .2rem #0074d9}.custom-control-input:active~.custom-control-indicator{color:#fff;background-color:#84c6ff}.custom-control-input:disabled~.custom-control-indicator{cursor:not-allowed;background-color:#eee}.custom-control-input:disabled~.custom-control-description{color:#767676;cursor:not-allowed}.custom-control-indicator{position:absolute;top:.25rem;left:0;display:block;width:1rem;height:1rem;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#ddd;background-repeat:no-repeat;background-position:center center;-webkit-background-size:50% 50%;background-size:50% 50%}.custom-checkbox .custom-control-indicator{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-indicator{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-indicator{background-color:#0074d9;background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='#fff' d='M0 2h4'/%3E%3C/svg%3E\")}.custom-radio .custom-control-indicator{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-indicator{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='#fff'/%3E%3C/svg%3E\")}.custom-controls-stacked .custom-control{float:left;clear:left}.custom-controls-stacked .custom-control+.custom-control{margin-left:0}.custom-select{display:inline-block;max-width:100%;height:calc(2.5rem - 2px);padding:.375rem 1.75rem .375rem .75rem;padding-right:.75rem\\9;color:#55595c;vertical-align:middle;background:#fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='#333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right .75rem center;background-image:none\\9;-webkit-background-size:8px 10px;background-size:8px 10px;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-moz-appearance:none;-webkit-appearance:none}.custom-select:focus{border-color:#51a7e8;outline:0}.custom-select:focus::-ms-value{color:#55595c;background-color:#fff}.custom-select:disabled{color:#818a91;cursor:not-allowed;background-color:#eceeef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{padding-top:.375rem;padding-bottom:.375rem;font-size:75%}.custom-file{position:relative;display:inline-block;max-width:100%;height:2.5rem;cursor:pointer}.custom-file-input{min-width:14rem;max-width:100%;margin:0;filter:alpha(opacity=0);opacity:0}.custom-file-control{position:absolute;top:0;right:0;left:0;z-index:5;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#555;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#fff;border:1px solid #ddd;border-radius:.25rem}.custom-file-control:lang(en)::after{content:\"Choose file...\"}.custom-file-control::before{position:absolute;top:-1px;right:-1px;bottom:-1px;z-index:6;display:block;height:2.5rem;padding:.5rem 1rem;line-height:1.5;color:#555;background-color:#eee;border:1px solid #ddd;border-radius:0 .25rem .25rem 0}.custom-file-control:lang(en)::before{content:\"Browse\"}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:inline-block}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#818a91}.nav-link.disabled,.nav-link.disabled:focus,.nav-link.disabled:hover{color:#818a91;cursor:not-allowed;background-color:transparent}.nav-inline .nav-item{display:inline-block}.nav-inline .nav-item+.nav-item,.nav-inline .nav-link+.nav-link{margin-left:1rem}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs::after{content:\"\";display:table;clear:both}.nav-tabs .nav-item{float:left;margin-bottom:-1px}.nav-tabs .nav-item+.nav-item{margin-left:.2rem}.nav-tabs .nav-link{display:block;padding:.5em 1em;border:1px solid transparent;border-top-right-radius:.25rem;border-top-left-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#eceeef #eceeef #ddd}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link.disabled:focus,.nav-tabs .nav-link.disabled:hover{color:#818a91;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.open .nav-link,.nav-tabs .nav-item.open .nav-link:focus,.nav-tabs .nav-item.open .nav-link:hover,.nav-tabs .nav-link.active,.nav-tabs .nav-link.active:focus,.nav-tabs .nav-link.active:hover{color:#55595c;background-color:#fff;border-color:#ddd #ddd transparent}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-right-radius:0;border-top-left-radius:0}.nav-pills::after{content:\"\";display:table;clear:both}.nav-pills .nav-item{float:left}.nav-pills .nav-item+.nav-item{margin-left:.2rem}.nav-pills .nav-link{display:block;padding:.5em 1em;border-radius:.25rem}.nav-pills .nav-item.open .nav-link,.nav-pills .nav-item.open .nav-link:focus,.nav-pills .nav-item.open .nav-link:hover,.nav-pills .nav-link.active,.nav-pills .nav-link.active:focus,.nav-pills .nav-link.active:hover{color:#fff;cursor:default;background-color:#0275d8}.nav-stacked .nav-item{display:block;float:none}.nav-stacked .nav-item+.nav-item{margin-top:.2rem;margin-left:0}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;padding:.5rem 1rem}.navbar::after{content:\"\";display:table;clear:both}@media (min-width:576px){.navbar{border-radius:.25rem}}.navbar-full{z-index:1000}@media (min-width:576px){.navbar-full{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:576px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0}.navbar-fixed-bottom{bottom:0}.navbar-sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1030;width:100%}@media (min-width:576px){.navbar-sticky-top{border-radius:0}}.navbar-brand{float:left;padding-top:.25rem;padding-bottom:.25rem;margin-right:1rem;font-size:1.25rem;line-height:inherit}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-divider{float:left;width:1px;padding-top:.425rem;padding-bottom:.425rem;margin-right:1rem;margin-left:1rem;overflow:hidden}.navbar-divider::before{content:\"\\A0\"}.navbar-text{display:inline-block;padding-top:.425rem;padding-bottom:.425rem}.navbar-toggler{width:2.5em;height:2em;padding:.5rem .75rem;font-size:1.25rem;line-height:1;background:transparent no-repeat center center;-webkit-background-size:24px 24px;background-size:24px 24px;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggleable-xs::after{content:\"\";display:table;clear:both}@media (max-width:575px){.navbar-toggleable-xs .navbar-brand{display:block;float:none;margin-top:.5rem;margin-right:0}.navbar-toggleable-xs .navbar-nav{margin-top:.5rem;margin-bottom:.5rem}.navbar-toggleable-xs .navbar-nav .dropdown-menu{position:static;float:none}}@media (min-width:576px){.navbar-toggleable-xs{display:block}}.navbar-toggleable-sm::after{content:\"\";display:table;clear:both}@media (max-width:767px){.navbar-toggleable-sm .navbar-brand{display:block;float:none;margin-top:.5rem;margin-right:0}.navbar-toggleable-sm .navbar-nav{margin-top:.5rem;margin-bottom:.5rem}.navbar-toggleable-sm .navbar-nav .dropdown-menu{position:static;float:none}}@media (min-width:768px){.navbar-toggleable-sm{display:block}}.navbar-toggleable-md::after{content:\"\";display:table;clear:both}@media (max-width:991px){.navbar-toggleable-md .navbar-brand{display:block;float:none;margin-top:.5rem;margin-right:0}.navbar-toggleable-md .navbar-nav{margin-top:.5rem;margin-bottom:.5rem}.navbar-toggleable-md .navbar-nav .dropdown-menu{position:static;float:none}}@media (min-width:992px){.navbar-toggleable-md{display:block}}.navbar-toggleable-lg::after{content:\"\";display:table;clear:both}@media (max-width:1199px){.navbar-toggleable-lg .navbar-brand{display:block;float:none;margin-top:.5rem;margin-right:0}.navbar-toggleable-lg .navbar-nav{margin-top:.5rem;margin-bottom:.5rem}.navbar-toggleable-lg .navbar-nav .dropdown-menu{position:static;float:none}}@media (min-width:1200px){.navbar-toggleable-lg{display:block}}.navbar-toggleable-xl{display:block}.navbar-toggleable-xl::after{content:\"\";display:table;clear:both}.navbar-toggleable-xl .navbar-brand{display:block;float:none;margin-top:.5rem;margin-right:0}.navbar-toggleable-xl .navbar-nav{margin-top:.5rem;margin-bottom:.5rem}.navbar-toggleable-xl .navbar-nav .dropdown-menu{position:static;float:none}.navbar-nav .nav-item{float:left}.navbar-nav .nav-link{display:block;padding-top:.425rem;padding-bottom:.425rem}.navbar-nav .nav-link+.nav-link{margin-left:1rem}.navbar-nav .nav-item+.nav-item{margin-left:1rem}.navbar-light .navbar-brand,.navbar-light .navbar-toggler{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover,.navbar-light .navbar-toggler:focus,.navbar-light .navbar-toggler:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .active>.nav-link:focus,.navbar-light .navbar-nav .active>.nav-link:hover,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.active:focus,.navbar-light .navbar-nav .nav-link.active:hover,.navbar-light .navbar-nav .nav-link.open,.navbar-light .navbar-nav .nav-link.open:focus,.navbar-light .navbar-nav .nav-link.open:hover,.navbar-light .navbar-nav .open>.nav-link,.navbar-light .navbar-nav .open>.nav-link:focus,.navbar-light .navbar-nav .open>.nav-link:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");border-color:rgba(0,0,0,.1)}.navbar-light .navbar-divider{background-color:rgba(0,0,0,.075)}.navbar-dark .navbar-brand,.navbar-dark .navbar-toggler{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover,.navbar-dark .navbar-toggler:focus,.navbar-dark .navbar-toggler:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .active>.nav-link:focus,.navbar-dark .navbar-nav .active>.nav-link:hover,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.active:focus,.navbar-dark .navbar-nav .nav-link.active:hover,.navbar-dark .navbar-nav .nav-link.open,.navbar-dark .navbar-nav .nav-link.open:focus,.navbar-dark .navbar-nav .nav-link.open:hover,.navbar-dark .navbar-nav .open>.nav-link,.navbar-dark .navbar-nav .open>.nav-link:focus,.navbar-dark .navbar-nav .open>.nav-link:hover{color:#fff}.navbar-dark .navbar-toggler{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-divider{background-color:rgba(255,255,255,.075)}.navbar-toggleable-xs::after{content:\"\";display:table;clear:both}@media (max-width:575px){.navbar-toggleable-xs .navbar-nav .nav-item{float:none;margin-left:0}}@media (min-width:576px){.navbar-toggleable-xs{display:block!important}}.navbar-toggleable-sm::after{content:\"\";display:table;clear:both}@media (max-width:767px){.navbar-toggleable-sm .navbar-nav .nav-item{float:none;margin-left:0}}@media (min-width:768px){.navbar-toggleable-sm{display:block!important}}.navbar-toggleable-md::after{content:\"\";display:table;clear:both}@media (max-width:991px){.navbar-toggleable-md .navbar-nav .nav-item{float:none;margin-left:0}}@media (min-width:992px){.navbar-toggleable-md{display:block!important}}.card{position:relative;display:block;margin-bottom:.75rem;background-color:#fff;border-radius:.25rem;border:1px solid rgba(0,0,0,.125)}.card-block{padding:1.25rem}.card-block::after{content:\"\";display:table;clear:both}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card>.list-group:first-child .list-group-item:first-child{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:#f5f5f5;border-bottom:1px solid rgba(0,0,0,.125)}.card-header::after{content:\"\";display:table;clear:both}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:#f5f5f5;border-top:1px solid rgba(0,0,0,.125)}.card-footer::after{content:\"\";display:table;clear:both}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-primary{background-color:#0275d8;border-color:#0275d8}.card-primary .card-footer,.card-primary .card-header{background-color:transparent}.card-success{background-color:#5cb85c;border-color:#5cb85c}.card-success .card-footer,.card-success .card-header{background-color:transparent}.card-info{background-color:#5bc0de;border-color:#5bc0de}.card-info .card-footer,.card-info .card-header{background-color:transparent}.card-warning{background-color:#f0ad4e;border-color:#f0ad4e}.card-warning .card-footer,.card-warning .card-header{background-color:transparent}.card-danger{background-color:#d9534f;border-color:#d9534f}.card-danger .card-footer,.card-danger .card-header{background-color:transparent}.card-outline-primary{background-color:transparent;border-color:#0275d8}.card-outline-secondary{background-color:transparent;border-color:#ccc}.card-outline-info{background-color:transparent;border-color:#5bc0de}.card-outline-success{background-color:transparent;border-color:#5cb85c}.card-outline-warning{background-color:transparent;border-color:#f0ad4e}.card-outline-danger{background-color:transparent;border-color:#d9534f}.card-inverse .card-footer,.card-inverse .card-header{border-color:rgba(255,255,255,.2)}.card-inverse .card-blockquote,.card-inverse .card-footer,.card-inverse .card-header,.card-inverse .card-title{color:#fff}.card-inverse .card-blockquote .blockquote-footer,.card-inverse .card-link,.card-inverse .card-subtitle,.card-inverse .card-text{color:rgba(255,255,255,.65)}.card-inverse .card-link:focus,.card-inverse .card-link:hover{color:#fff}.card-blockquote{padding:0;margin-bottom:0;border-left:0}.card-img{border-radius:calc(.25rem - 1px)}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img-top{border-top-right-radius:calc(.25rem - 1px);border-top-left-radius:calc(.25rem - 1px)}.card-img-bottom{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}@media (min-width:576px){.card-deck{display:table;width:100%;margin-bottom:.75rem;table-layout:fixed;border-spacing:1.25rem 0}.card-deck .card{display:table-cell;margin-bottom:0;vertical-align:top}.card-deck-wrapper{margin-right:-1.25rem;margin-left:-1.25rem}}@media (min-width:576px){.card-group{display:table;width:100%;table-layout:fixed}.card-group .card{display:table-cell;vertical-align:top}.card-group .card+.card{margin-left:0;border-left:0}.card-group .card:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.card-group .card:first-child .card-img-top{border-top-right-radius:0}.card-group .card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group .card:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.card-group .card:last-child .card-img-top{border-top-left-radius:0}.card-group .card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group .card:not(:first-child):not(:last-child){border-radius:0}.card-group .card:not(:first-child):not(:last-child) .card-img-bottom,.card-group .card:not(:first-child):not(:last-child) .card-img-top{border-radius:0}}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%}}.breadcrumb{padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#eceeef;border-radius:.25rem}.breadcrumb::after{content:\"\";display:table;clear:both}.breadcrumb-item{float:left}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;padding-left:.5rem;color:#818a91;content:\"/\"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#818a91}.pagination{display:inline-block;padding-left:0;margin-top:1rem;margin-bottom:1rem;border-radius:.25rem}.page-item{display:inline}.page-item:first-child .page-link{margin-left:0;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.page-item:last-child .page-link{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.page-item.active .page-link,.page-item.active .page-link:focus,.page-item.active .page-link:hover{z-index:2;color:#fff;cursor:default;background-color:#0275d8;border-color:#0275d8}.page-item.disabled .page-link,.page-item.disabled .page-link:focus,.page-item.disabled .page-link:hover{color:#818a91;pointer-events:none;cursor:not-allowed;background-color:#fff;border-color:#ddd}.page-link{position:relative;float:left;padding:.5rem .75rem;margin-left:-1px;color:#0275d8;text-decoration:none;background-color:#fff;border:1px solid #ddd}.page-link:focus,.page-link:hover{color:#014c8c;background-color:#eceeef;border-color:#ddd}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem}.pagination-lg .page-item:first-child .page-link{border-bottom-left-radius:.3rem;border-top-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-bottom-right-radius:.3rem;border-top-right-radius:.3rem}.pagination-sm .page-link{padding:.275rem .75rem;font-size:.875rem}.pagination-sm .page-item:first-child .page-link{border-bottom-left-radius:.2rem;border-top-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-bottom-right-radius:.2rem;border-top-right-radius:.2rem}.tag{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.tag:empty{display:none}.btn .tag{position:relative;top:-1px}a.tag:focus,a.tag:hover{color:#fff;text-decoration:none;cursor:pointer}.tag-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.tag-default{background-color:#818a91}.tag-default[href]:focus,.tag-default[href]:hover{background-color:#687077}.tag-primary{background-color:#0275d8}.tag-primary[href]:focus,.tag-primary[href]:hover{background-color:#025aa5}.tag-success{background-color:#5cb85c}.tag-success[href]:focus,.tag-success[href]:hover{background-color:#449d44}.tag-info{background-color:#5bc0de}.tag-info[href]:focus,.tag-info[href]:hover{background-color:#31b0d5}.tag-warning{background-color:#f0ad4e}.tag-warning[href]:focus,.tag-warning[href]:hover{background-color:#ec971f}.tag-danger{background-color:#d9534f}.tag-danger[href]:focus,.tag-danger[href]:hover{background-color:#c9302c}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#eceeef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-hr{border-top-color:#d0d5d8}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:2.5rem}.alert-dismissible .close{position:relative;top:-.125rem;right:-1.25rem;color:inherit}.alert-success{background-color:#dff0d8;border-color:#d0e9c6;color:#3c763d}.alert-success hr{border-top-color:#c1e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{background-color:#d9edf7;border-color:#bcdff1;color:#31708f}.alert-info hr{border-top-color:#a6d5ec}.alert-info .alert-link{color:#245269}.alert-warning{background-color:#fcf8e3;border-color:#faf2cc;color:#8a6d3b}.alert-warning hr{border-top-color:#f7ecb5}.alert-warning .alert-link{color:#66512c}.alert-danger{background-color:#f2dede;border-color:#ebcccc;color:#a94442}.alert-danger hr{border-top-color:#e4b9b9}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@-o-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:block;width:100%;height:1rem;margin-bottom:1rem}.progress[value]{background-color:#eee;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:.25rem}.progress[value]::-ms-fill{background-color:#0074d9;border:0}.progress[value]::-moz-progress-bar{background-color:#0074d9;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.progress[value]::-webkit-progress-value{background-color:#0074d9;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.progress[value=\"100\"]::-moz-progress-bar{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.progress[value=\"100\"]::-webkit-progress-value{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.progress[value]::-webkit-progress-bar{background-color:#eee;border-radius:.25rem}.progress[value],base::-moz-progress-bar{background-color:#eee;border-radius:.25rem}@media screen and (min-width:0\\0){.progress{background-color:#eee;border-radius:.25rem}.progress-bar{display:inline-block;height:1rem;text-indent:-999rem;background-color:#0074d9;border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.progress[width=\"100%\"]{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}}.progress-striped[value]::-webkit-progress-value{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:1rem 1rem;background-size:1rem 1rem}.progress-striped[value]::-moz-progress-bar{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-striped[value]::-ms-fill{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}@media screen and (min-width:0\\0){.progress-bar-striped{background-image:-webkit-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:-o-linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);-webkit-background-size:1rem 1rem;background-size:1rem 1rem}}.progress-animated[value]::-webkit-progress-value{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-animated[value]::-moz-progress-bar{animation:progress-bar-stripes 2s linear infinite}@media screen and (min-width:0\\0){.progress-animated .progress-bar-striped{-webkit-animation:progress-bar-stripes 2s linear infinite;-o-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}}.progress-success[value]::-webkit-progress-value{background-color:#5cb85c}.progress-success[value]::-moz-progress-bar{background-color:#5cb85c}.progress-success[value]::-ms-fill{background-color:#5cb85c}@media screen and (min-width:0\\0){.progress-success .progress-bar{background-color:#5cb85c}}.progress-info[value]::-webkit-progress-value{background-color:#5bc0de}.progress-info[value]::-moz-progress-bar{background-color:#5bc0de}.progress-info[value]::-ms-fill{background-color:#5bc0de}@media screen and (min-width:0\\0){.progress-info .progress-bar{background-color:#5bc0de}}.progress-warning[value]::-webkit-progress-value{background-color:#f0ad4e}.progress-warning[value]::-moz-progress-bar{background-color:#f0ad4e}.progress-warning[value]::-ms-fill{background-color:#f0ad4e}@media screen and (min-width:0\\0){.progress-warning .progress-bar{background-color:#f0ad4e}}.progress-danger[value]::-webkit-progress-value{background-color:#d9534f}.progress-danger[value]::-moz-progress-bar{background-color:#d9534f}.progress-danger[value]::-ms-fill{background-color:#d9534f}@media screen and (min-width:0\\0){.progress-danger .progress-bar{background-color:#d9534f}}.media,.media-body{overflow:hidden}.media-body{width:10000px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right{padding-left:10px}.media-left{padding-right:10px}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:0}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#818a91;cursor:not-allowed;background-color:#eceeef}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#818a91}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;text-decoration:none;background-color:#0275d8;border-color:#0275d8}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#a8d6fe}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-item-action{width:100%;color:#555;text-align:inherit}.list-group-item-action .list-group-item-heading{color:#333}.list-group-item-action:focus,.list-group-item-action:hover{color:#555;text-decoration:none;background-color:#f5f5f5}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9{padding-bottom:42.857143%}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.embed-responsive-1by1{padding-bottom:100%}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;opacity:.5}button.close{padding:0;cursor:pointer;background:0 0;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;transition:-webkit-transform .3s ease-out;-o-transition:-o-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out,-o-transform .3s ease-out;-webkit-transform:translate(0,-25%);-ms-transform:translate(0,-25%);-o-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.in{opacity:.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header::after{content:\"\";display:table;clear:both}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.5}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer::after{content:\"\";display:table;clear:both}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:600px;margin:30px auto}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.in{opacity:.9}.tooltip.bs-tether-element-attached-bottom,.tooltip.tooltip-top{padding:5px 0;margin-top:-3px}.tooltip.bs-tether-element-attached-bottom .tooltip-inner::before,.tooltip.tooltip-top .tooltip-inner::before{bottom:0;left:50%;margin-left:-5px;content:\"\";border-width:5px 5px 0;border-top-color:#000}.tooltip.bs-tether-element-attached-left,.tooltip.tooltip-right{padding:0 5px;margin-left:3px}.tooltip.bs-tether-element-attached-left .tooltip-inner::before,.tooltip.tooltip-right .tooltip-inner::before{top:50%;left:0;margin-top:-5px;content:\"\";border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.bs-tether-element-attached-top,.tooltip.tooltip-bottom{padding:5px 0;margin-top:3px}.tooltip.bs-tether-element-attached-top .tooltip-inner::before,.tooltip.tooltip-bottom .tooltip-inner::before{top:0;left:50%;margin-left:-5px;content:\"\";border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bs-tether-element-attached-right,.tooltip.tooltip-left{padding:0 5px;margin-left:-3px}.tooltip.bs-tether-element-attached-right .tooltip-inner::before,.tooltip.tooltip-left .tooltip-inner::before{top:50%;right:0;margin-top:-5px;content:\"\";border-width:5px 0 5px 5px;border-left-color:#000}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.tooltip-inner::before{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;padding:1px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-style:normal;font-weight:400;letter-spacing:normal;line-break:auto;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;white-space:normal;word-break:normal;word-spacing:normal;font-size:.875rem;word-wrap:break-word;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover.bs-tether-element-attached-bottom,.popover.popover-top{margin-top:-10px}.popover.bs-tether-element-attached-bottom::after,.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::after,.popover.popover-top::before{left:50%;border-bottom-width:0}.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::before{bottom:-11px;margin-left:-11px;border-top-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-bottom::after,.popover.popover-top::after{bottom:-10px;margin-left:-10px;border-top-color:#fff}.popover.bs-tether-element-attached-left,.popover.popover-right{margin-left:10px}.popover.bs-tether-element-attached-left::after,.popover.bs-tether-element-attached-left::before,.popover.popover-right::after,.popover.popover-right::before{top:50%;border-left-width:0}.popover.bs-tether-element-attached-left::before,.popover.popover-right::before{left:-11px;margin-top:-11px;border-right-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-left::after,.popover.popover-right::after{left:-10px;margin-top:-10px;border-right-color:#fff}.popover.bs-tether-element-attached-top,.popover.popover-bottom{margin-top:10px}.popover.bs-tether-element-attached-top::after,.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::after,.popover.popover-bottom::before{left:50%;border-top-width:0}.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::before{top:-11px;margin-left:-11px;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-top::after,.popover.popover-bottom::after{top:-10px;margin-left:-10px;border-bottom-color:#f7f7f7}.popover.bs-tether-element-attached-top .popover-title::before,.popover.popover-bottom .popover-title::before{position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:\"\";border-bottom:1px solid #f7f7f7}.popover.bs-tether-element-attached-right,.popover.popover-left{margin-left:-10px}.popover.bs-tether-element-attached-right::after,.popover.bs-tether-element-attached-right::before,.popover.popover-left::after,.popover.popover-left::before{top:50%;border-right-width:0}.popover.bs-tether-element-attached-right::before,.popover.popover-left::before{right:-11px;margin-top:-11px;border-left-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-right::after,.popover.popover-left::after{right:-10px;margin-top:-10px;border-left-color:#fff}.popover-title{padding:8px 14px;margin:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:.2375rem .2375rem 0 0}.popover-title:empty{display:none}.popover-content{padding:9px 14px}.popover::after,.popover::before{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover::before{content:\"\";border-width:11px}.popover::after{content:\"\";border-width:10px}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.carousel-item{position:relative;display:none;-webkit-transition:.6s ease-in-out left;-o-transition:.6s ease-in-out left;transition:.6s ease-in-out left}.carousel-inner>.carousel-item>a>img,.carousel-inner>.carousel-item>img{line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner>.carousel-item{-webkit-transition:-webkit-transform .6s ease-in-out;transition:-webkit-transform .6s ease-in-out;-o-transition:-o-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out,-o-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.carousel-item.active.right,.carousel-inner>.carousel-item.next{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner>.carousel-item.active.left,.carousel-inner>.carousel-item.prev{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner>.carousel-item.active,.carousel-inner>.carousel-item.next.left,.carousel-inner>.carousel-item.prev.right{left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);opacity:.5}.carousel-control.left{background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5) 0%,rgba(0,0,0,.0001) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.5) 0%,rgba(0,0,0,.0001) 100%);background-image:linear-gradient(to right,rgba(0,0,0,.5) 0%,rgba(0,0,0,.0001) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1)}.carousel-control.right{right:0;left:auto;background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));background-image:-webkit-linear-gradient(left,rgba(0,0,0,.0001) 0%,rgba(0,0,0,.5) 100%);background-image:-o-linear-gradient(left,rgba(0,0,0,.0001) 0%,rgba(0,0,0,.5) 100%);background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0%,rgba(0,0,0,.5) 100%);background-repeat:repeat-x;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1)}.carousel-control:focus,.carousel-control:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block;width:20px;height:20px;margin-top:-10px;font-family:serif;line-height:1}.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-prev::before{content:\"\\2039\"}.carousel-control .icon-next::before{content:\"\\203A\"}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:transparent;border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media (min-width:576px){.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-15px;font-size:30px}.carousel-control .icon-prev{margin-left:-15px}.carousel-control .icon-next{margin-right:-15px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-faded{background-color:#f7f7f9}.bg-primary{background-color:#0275d8!important}a.bg-primary:focus,a.bg-primary:hover{background-color:#025aa5!important}.bg-success{background-color:#5cb85c!important}a.bg-success:focus,a.bg-success:hover{background-color:#449d44!important}.bg-info{background-color:#5bc0de!important}a.bg-info:focus,a.bg-info:hover{background-color:#31b0d5!important}.bg-warning{background-color:#f0ad4e!important}a.bg-warning:focus,a.bg-warning:hover{background-color:#ec971f!important}.bg-danger{background-color:#d9534f!important}a.bg-danger:focus,a.bg-danger:hover{background-color:#c9302c!important}.bg-inverse{background-color:#373a3c!important}a.bg-inverse:focus,a.bg-inverse:hover{background-color:#1f2021!important}.rounded{border-radius:.25rem}.rounded-top{border-top-right-radius:.25rem;border-top-left-radius:.25rem}.rounded-right{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.rounded-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.rounded-left{border-bottom-left-radius:.25rem;border-top-left-radius:.25rem}.rounded-circle{border-radius:50%}.clearfix::after{content:\"\";display:table;clear:both}.d-block{display:block!important}.d-inline-block{display:inline-block!important}.d-inline{display:inline!important}.float-xs-left{float:left!important}.float-xs-right{float:right!important}.float-xs-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.w-100{width:100%!important}.h-100{height:100%!important}.mx-auto{margin-right:auto!important;margin-left:auto!important}.m-0{margin:0 0!important}.mt-0{margin-top:0!important}.mr-0{margin-right:0!important}.mb-0{margin-bottom:0!important}.ml-0{margin-left:0!important}.mx-0{margin-right:0!important;margin-left:0!important}.my-0{margin-top:0!important;margin-bottom:0!important}.m-1{margin:1rem 1rem!important}.mt-1{margin-top:1rem!important}.mr-1{margin-right:1rem!important}.mb-1{margin-bottom:1rem!important}.ml-1{margin-left:1rem!important}.mx-1{margin-right:1rem!important;margin-left:1rem!important}.my-1{margin-top:1rem!important;margin-bottom:1rem!important}.m-2{margin:1.5rem 1.5rem!important}.mt-2{margin-top:1.5rem!important}.mr-2{margin-right:1.5rem!important}.mb-2{margin-bottom:1.5rem!important}.ml-2{margin-left:1.5rem!important}.mx-2{margin-right:1.5rem!important;margin-left:1.5rem!important}.my-2{margin-top:1.5rem!important;margin-bottom:1.5rem!important}.m-3{margin:3rem 3rem!important}.mt-3{margin-top:3rem!important}.mr-3{margin-right:3rem!important}.mb-3{margin-bottom:3rem!important}.ml-3{margin-left:3rem!important}.mx-3{margin-right:3rem!important;margin-left:3rem!important}.my-3{margin-top:3rem!important;margin-bottom:3rem!important}.p-0{padding:0 0!important}.pt-0{padding-top:0!important}.pr-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.pl-0{padding-left:0!important}.px-0{padding-right:0!important;padding-left:0!important}.py-0{padding-top:0!important;padding-bottom:0!important}.p-1{padding:1rem 1rem!important}.pt-1{padding-top:1rem!important}.pr-1{padding-right:1rem!important}.pb-1{padding-bottom:1rem!important}.pl-1{padding-left:1rem!important}.px-1{padding-right:1rem!important;padding-left:1rem!important}.py-1{padding-top:1rem!important;padding-bottom:1rem!important}.p-2{padding:1.5rem 1.5rem!important}.pt-2{padding-top:1.5rem!important}.pr-2{padding-right:1.5rem!important}.pb-2{padding-bottom:1.5rem!important}.pl-2{padding-left:1.5rem!important}.px-2{padding-right:1.5rem!important;padding-left:1.5rem!important}.py-2{padding-top:1.5rem!important;padding-bottom:1.5rem!important}.p-3{padding:3rem 3rem!important}.pt-3{padding-top:3rem!important}.pr-3{padding-right:3rem!important}.pb-3{padding-bottom:3rem!important}.pl-3{padding-left:3rem!important}.px-3{padding-right:3rem!important;padding-left:3rem!important}.py-3{padding-top:3rem!important;padding-bottom:3rem!important}.pos-f-t{position:fixed;top:0;right:0;left:0;z-index:1030}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-xs-left{text-align:left!important}.text-xs-right{text-align:right!important}.text-xs-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-normal{font-weight:400}.font-weight-bold{font-weight:700}.font-italic{font-style:italic}.text-white{color:#fff!important}.text-muted{color:#818a91!important}a.text-muted:focus,a.text-muted:hover{color:#687077!important}.text-primary{color:#0275d8!important}a.text-primary:focus,a.text-primary:hover{color:#025aa5!important}.text-success{color:#5cb85c!important}a.text-success:focus,a.text-success:hover{color:#449d44!important}.text-info{color:#5bc0de!important}a.text-info:focus,a.text-info:hover{color:#31b0d5!important}.text-warning{color:#f0ad4e!important}a.text-warning:focus,a.text-warning:hover{color:#ec971f!important}.text-danger{color:#d9534f!important}a.text-danger:focus,a.text-danger:hover{color:#c9302c!important}.text-gray-dark{color:#373a3c!important}a.text-gray-dark:focus,a.text-gray-dark:hover{color:#1f2021!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.invisible{visibility:hidden!important}.hidden-xs-up{display:none!important}@media (max-width:575px){.hidden-xs-down{display:none!important}}@media (min-width:576px){.hidden-sm-up{display:none!important}}@media (max-width:767px){.hidden-sm-down{display:none!important}}@media (min-width:768px){.hidden-md-up{display:none!important}}@media (max-width:991px){.hidden-md-down{display:none!important}}@media (min-width:992px){.hidden-lg-up{display:none!important}}@media (max-width:1199px){.hidden-lg-down{display:none!important}}@media (min-width:1200px){.hidden-xl-up{display:none!important}}.hidden-xl-down{display:none!important}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}\n/*# sourceMappingURL=bootstrap.min.css.map */", ""]);
	
	// exports


/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE
	
	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(192));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";
	
	function Context(indented, column, type, info, align, prev) {
	  this.indented = indented;
	  this.column = column;
	  this.type = type;
	  this.info = info;
	  this.align = align;
	  this.prev = prev;
	}
	function pushContext(state, col, type, info) {
	  var indent = state.indented;
	  if (state.context && state.context.type == "statement" && type != "statement")
	    indent = state.context.indented;
	  return state.context = new Context(indent, col, type, info, null, state.context);
	}
	function popContext(state) {
	  var t = state.context.type;
	  if (t == ")" || t == "]" || t == "}")
	    state.indented = state.context.indented;
	  return state.context = state.context.prev;
	}
	
	function typeBefore(stream, state, pos) {
	  if (state.prevToken == "variable" || state.prevToken == "variable-3") return true;
	  if (/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(stream.string.slice(0, pos))) return true;
	  if (state.typeAtEndOfLine && stream.column() == stream.indentation()) return true;
	}
	
	function isTopScope(context) {
	  for (;;) {
	    if (!context || context.type == "top") return true;
	    if (context.type == "}" && context.prev.info != "namespace") return false;
	    context = context.prev;
	  }
	}
	
	CodeMirror.defineMode("clike", function(config, parserConfig) {
	  var indentUnit = config.indentUnit,
	      statementIndentUnit = parserConfig.statementIndentUnit || indentUnit,
	      dontAlignCalls = parserConfig.dontAlignCalls,
	      keywords = parserConfig.keywords || {},
	      types = parserConfig.types || {},
	      builtin = parserConfig.builtin || {},
	      blockKeywords = parserConfig.blockKeywords || {},
	      defKeywords = parserConfig.defKeywords || {},
	      atoms = parserConfig.atoms || {},
	      hooks = parserConfig.hooks || {},
	      multiLineStrings = parserConfig.multiLineStrings,
	      indentStatements = parserConfig.indentStatements !== false,
	      indentSwitch = parserConfig.indentSwitch !== false,
	      namespaceSeparator = parserConfig.namespaceSeparator,
	      isPunctuationChar = parserConfig.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
	      numberStart = parserConfig.numberStart || /[\d\.]/,
	      number = parserConfig.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
	      isOperatorChar = parserConfig.isOperatorChar || /[+\-*&%=<>!?|\/]/;
	
	  var curPunc, isDefKeyword;
	
	  function tokenBase(stream, state) {
	    var ch = stream.next();
	    if (hooks[ch]) {
	      var result = hooks[ch](stream, state);
	      if (result !== false) return result;
	    }
	    if (ch == '"' || ch == "'") {
	      state.tokenize = tokenString(ch);
	      return state.tokenize(stream, state);
	    }
	    if (isPunctuationChar.test(ch)) {
	      curPunc = ch;
	      return null;
	    }
	    if (numberStart.test(ch)) {
	      stream.backUp(1)
	      if (stream.match(number)) return "number"
	      stream.next()
	    }
	    if (ch == "/") {
	      if (stream.eat("*")) {
	        state.tokenize = tokenComment;
	        return tokenComment(stream, state);
	      }
	      if (stream.eat("/")) {
	        stream.skipToEnd();
	        return "comment";
	      }
	    }
	    if (isOperatorChar.test(ch)) {
	      while (!stream.match(/^\/[\/*]/, false) && stream.eat(isOperatorChar)) {}
	      return "operator";
	    }
	    stream.eatWhile(/[\w\$_\xa1-\uffff]/);
	    if (namespaceSeparator) while (stream.match(namespaceSeparator))
	      stream.eatWhile(/[\w\$_\xa1-\uffff]/);
	
	    var cur = stream.current();
	    if (contains(keywords, cur)) {
	      if (contains(blockKeywords, cur)) curPunc = "newstatement";
	      if (contains(defKeywords, cur)) isDefKeyword = true;
	      return "keyword";
	    }
	    if (contains(types, cur)) return "variable-3";
	    if (contains(builtin, cur)) {
	      if (contains(blockKeywords, cur)) curPunc = "newstatement";
	      return "builtin";
	    }
	    if (contains(atoms, cur)) return "atom";
	    return "variable";
	  }
	
	  function tokenString(quote) {
	    return function(stream, state) {
	      var escaped = false, next, end = false;
	      while ((next = stream.next()) != null) {
	        if (next == quote && !escaped) {end = true; break;}
	        escaped = !escaped && next == "\\";
	      }
	      if (end || !(escaped || multiLineStrings))
	        state.tokenize = null;
	      return "string";
	    };
	  }
	
	  function tokenComment(stream, state) {
	    var maybeEnd = false, ch;
	    while (ch = stream.next()) {
	      if (ch == "/" && maybeEnd) {
	        state.tokenize = null;
	        break;
	      }
	      maybeEnd = (ch == "*");
	    }
	    return "comment";
	  }
	
	  function maybeEOL(stream, state) {
	    if (parserConfig.typeFirstDefinitions && stream.eol() && isTopScope(state.context))
	      state.typeAtEndOfLine = typeBefore(stream, state, stream.pos)
	  }
	
	  // Interface
	
	  return {
	    startState: function(basecolumn) {
	      return {
	        tokenize: null,
	        context: new Context((basecolumn || 0) - indentUnit, 0, "top", null, false),
	        indented: 0,
	        startOfLine: true,
	        prevToken: null
	      };
	    },
	
	    token: function(stream, state) {
	      var ctx = state.context;
	      if (stream.sol()) {
	        if (ctx.align == null) ctx.align = false;
	        state.indented = stream.indentation();
	        state.startOfLine = true;
	      }
	      if (stream.eatSpace()) { maybeEOL(stream, state); return null; }
	      curPunc = isDefKeyword = null;
	      var style = (state.tokenize || tokenBase)(stream, state);
	      if (style == "comment" || style == "meta") return style;
	      if (ctx.align == null) ctx.align = true;
	
	      if (curPunc == ";" || curPunc == ":" || (curPunc == "," && stream.match(/^\s*(?:\/\/.*)?$/, false)))
	        while (state.context.type == "statement") popContext(state);
	      else if (curPunc == "{") pushContext(state, stream.column(), "}");
	      else if (curPunc == "[") pushContext(state, stream.column(), "]");
	      else if (curPunc == "(") pushContext(state, stream.column(), ")");
	      else if (curPunc == "}") {
	        while (ctx.type == "statement") ctx = popContext(state);
	        if (ctx.type == "}") ctx = popContext(state);
	        while (ctx.type == "statement") ctx = popContext(state);
	      }
	      else if (curPunc == ctx.type) popContext(state);
	      else if (indentStatements &&
	               (((ctx.type == "}" || ctx.type == "top") && curPunc != ";") ||
	                (ctx.type == "statement" && curPunc == "newstatement"))) {
	        pushContext(state, stream.column(), "statement", stream.current());
	      }
	
	      if (style == "variable" &&
	          ((state.prevToken == "def" ||
	            (parserConfig.typeFirstDefinitions && typeBefore(stream, state, stream.start) &&
	             isTopScope(state.context) && stream.match(/^\s*\(/, false)))))
	        style = "def";
	
	      if (hooks.token) {
	        var result = hooks.token(stream, state, style);
	        if (result !== undefined) style = result;
	      }
	
	      if (style == "def" && parserConfig.styleDefs === false) style = "variable";
	
	      state.startOfLine = false;
	      state.prevToken = isDefKeyword ? "def" : style || curPunc;
	      maybeEOL(stream, state);
	      return style;
	    },
	
	    indent: function(state, textAfter) {
	      if (state.tokenize != tokenBase && state.tokenize != null || state.typeAtEndOfLine) return CodeMirror.Pass;
	      var ctx = state.context, firstChar = textAfter && textAfter.charAt(0);
	      if (ctx.type == "statement" && firstChar == "}") ctx = ctx.prev;
	      if (parserConfig.dontIndentStatements)
	        while (ctx.type == "statement" && parserConfig.dontIndentStatements.test(ctx.info))
	          ctx = ctx.prev
	      if (hooks.indent) {
	        var hook = hooks.indent(state, ctx, textAfter);
	        if (typeof hook == "number") return hook
	      }
	      var closing = firstChar == ctx.type;
	      var switchBlock = ctx.prev && ctx.prev.info == "switch";
	      if (parserConfig.allmanIndentation && /[{(]/.test(firstChar)) {
	        while (ctx.type != "top" && ctx.type != "}") ctx = ctx.prev
	        return ctx.indented
	      }
	      if (ctx.type == "statement")
	        return ctx.indented + (firstChar == "{" ? 0 : statementIndentUnit);
	      if (ctx.align && (!dontAlignCalls || ctx.type != ")"))
	        return ctx.column + (closing ? 0 : 1);
	      if (ctx.type == ")" && !closing)
	        return ctx.indented + statementIndentUnit;
	
	      return ctx.indented + (closing ? 0 : indentUnit) +
	        (!closing && switchBlock && !/^(?:case|default)\b/.test(textAfter) ? indentUnit : 0);
	    },
	
	    electricInput: indentSwitch ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
	    blockCommentStart: "/*",
	    blockCommentEnd: "*/",
	    lineComment: "//",
	    fold: "brace"
	  };
	});
	
	  function words(str) {
	    var obj = {}, words = str.split(" ");
	    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
	    return obj;
	  }
	  function contains(words, word) {
	    if (typeof words === "function") {
	      return words(word);
	    } else {
	      return words.propertyIsEnumerable(word);
	    }
	  }
	  var cKeywords = "auto if break case register continue return default do sizeof " +
	    "static else struct switch extern typedef union for goto while enum const volatile";
	  var cTypes = "int long char short double float unsigned signed void size_t ptrdiff_t";
	
	  function cppHook(stream, state) {
	    if (!state.startOfLine) return false
	    for (var ch, next = null; ch = stream.peek();) {
	      if (ch == "\\" && stream.match(/^.$/)) {
	        next = cppHook
	        break
	      } else if (ch == "/" && stream.match(/^\/[\/\*]/, false)) {
	        break
	      }
	      stream.next()
	    }
	    state.tokenize = next
	    return "meta"
	  }
	
	  function pointerHook(_stream, state) {
	    if (state.prevToken == "variable-3") return "variable-3";
	    return false;
	  }
	
	  function cpp14Literal(stream) {
	    stream.eatWhile(/[\w\.']/);
	    return "number";
	  }
	
	  function cpp11StringHook(stream, state) {
	    stream.backUp(1);
	    // Raw strings.
	    if (stream.match(/(R|u8R|uR|UR|LR)/)) {
	      var match = stream.match(/"([^\s\\()]{0,16})\(/);
	      if (!match) {
	        return false;
	      }
	      state.cpp11RawStringDelim = match[1];
	      state.tokenize = tokenRawString;
	      return tokenRawString(stream, state);
	    }
	    // Unicode strings/chars.
	    if (stream.match(/(u8|u|U|L)/)) {
	      if (stream.match(/["']/, /* eat */ false)) {
	        return "string";
	      }
	      return false;
	    }
	    // Ignore this hook.
	    stream.next();
	    return false;
	  }
	
	  function cppLooksLikeConstructor(word) {
	    var lastTwo = /(\w+)::(\w+)$/.exec(word);
	    return lastTwo && lastTwo[1] == lastTwo[2];
	  }
	
	  // C#-style strings where "" escapes a quote.
	  function tokenAtString(stream, state) {
	    var next;
	    while ((next = stream.next()) != null) {
	      if (next == '"' && !stream.eat('"')) {
	        state.tokenize = null;
	        break;
	      }
	    }
	    return "string";
	  }
	
	  // C++11 raw string literal is <prefix>"<delim>( anything )<delim>", where
	  // <delim> can be a string up to 16 characters long.
	  function tokenRawString(stream, state) {
	    // Escape characters that have special regex meanings.
	    var delim = state.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&');
	    var match = stream.match(new RegExp(".*?\\)" + delim + '"'));
	    if (match)
	      state.tokenize = null;
	    else
	      stream.skipToEnd();
	    return "string";
	  }
	
	  function def(mimes, mode) {
	    if (typeof mimes == "string") mimes = [mimes];
	    var words = [];
	    function add(obj) {
	      if (obj) for (var prop in obj) if (obj.hasOwnProperty(prop))
	        words.push(prop);
	    }
	    add(mode.keywords);
	    add(mode.types);
	    add(mode.builtin);
	    add(mode.atoms);
	    if (words.length) {
	      mode.helperType = mimes[0];
	      CodeMirror.registerHelper("hintWords", mimes[0], words);
	    }
	
	    for (var i = 0; i < mimes.length; ++i)
	      CodeMirror.defineMIME(mimes[i], mode);
	  }
	
	  def(["text/x-csrc", "text/x-c", "text/x-chdr"], {
	    name: "clike",
	    keywords: words(cKeywords),
	    types: words(cTypes + " bool _Complex _Bool float_t double_t intptr_t intmax_t " +
	                 "int8_t int16_t int32_t int64_t uintptr_t uintmax_t uint8_t uint16_t " +
	                 "uint32_t uint64_t"),
	    blockKeywords: words("case do else for if switch while struct"),
	    defKeywords: words("struct"),
	    typeFirstDefinitions: true,
	    atoms: words("null true false"),
	    hooks: {"#": cppHook, "*": pointerHook},
	    modeProps: {fold: ["brace", "include"]}
	  });
	
	  def(["text/x-c++src", "text/x-c++hdr"], {
	    name: "clike",
	    keywords: words(cKeywords + " asm dynamic_cast namespace reinterpret_cast try explicit new " +
	                    "static_cast typeid catch operator template typename class friend private " +
	                    "this using const_cast inline public throw virtual delete mutable protected " +
	                    "alignas alignof constexpr decltype nullptr noexcept thread_local final " +
	                    "static_assert override"),
	    types: words(cTypes + " bool wchar_t"),
	    blockKeywords: words("catch class do else finally for if struct switch try while"),
	    defKeywords: words("class namespace struct enum union"),
	    typeFirstDefinitions: true,
	    atoms: words("true false null"),
	    dontIndentStatements: /^template$/,
	    hooks: {
	      "#": cppHook,
	      "*": pointerHook,
	      "u": cpp11StringHook,
	      "U": cpp11StringHook,
	      "L": cpp11StringHook,
	      "R": cpp11StringHook,
	      "0": cpp14Literal,
	      "1": cpp14Literal,
	      "2": cpp14Literal,
	      "3": cpp14Literal,
	      "4": cpp14Literal,
	      "5": cpp14Literal,
	      "6": cpp14Literal,
	      "7": cpp14Literal,
	      "8": cpp14Literal,
	      "9": cpp14Literal,
	      token: function(stream, state, style) {
	        if (style == "variable" && stream.peek() == "(" &&
	            (state.prevToken == ";" || state.prevToken == null ||
	             state.prevToken == "}") &&
	            cppLooksLikeConstructor(stream.current()))
	          return "def";
	      }
	    },
	    namespaceSeparator: "::",
	    modeProps: {fold: ["brace", "include"]}
	  });
	
	  def("text/x-java", {
	    name: "clike",
	    keywords: words("abstract assert break case catch class const continue default " +
	                    "do else enum extends final finally float for goto if implements import " +
	                    "instanceof interface native new package private protected public " +
	                    "return static strictfp super switch synchronized this throw throws transient " +
	                    "try volatile while"),
	    types: words("byte short int long float double boolean char void Boolean Byte Character Double Float " +
	                 "Integer Long Number Object Short String StringBuffer StringBuilder Void"),
	    blockKeywords: words("catch class do else finally for if switch try while"),
	    defKeywords: words("class interface package enum"),
	    typeFirstDefinitions: true,
	    atoms: words("true false null"),
	    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
	    hooks: {
	      "@": function(stream) {
	        stream.eatWhile(/[\w\$_]/);
	        return "meta";
	      }
	    },
	    modeProps: {fold: ["brace", "import"]}
	  });
	
	  def("text/x-csharp", {
	    name: "clike",
	    keywords: words("abstract as async await base break case catch checked class const continue" +
	                    " default delegate do else enum event explicit extern finally fixed for" +
	                    " foreach goto if implicit in interface internal is lock namespace new" +
	                    " operator out override params private protected public readonly ref return sealed" +
	                    " sizeof stackalloc static struct switch this throw try typeof unchecked" +
	                    " unsafe using virtual void volatile while add alias ascending descending dynamic from get" +
	                    " global group into join let orderby partial remove select set value var yield"),
	    types: words("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func" +
	                 " Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32" +
	                 " UInt64 bool byte char decimal double short int long object"  +
	                 " sbyte float string ushort uint ulong"),
	    blockKeywords: words("catch class do else finally for foreach if struct switch try while"),
	    defKeywords: words("class interface namespace struct var"),
	    typeFirstDefinitions: true,
	    atoms: words("true false null"),
	    hooks: {
	      "@": function(stream, state) {
	        if (stream.eat('"')) {
	          state.tokenize = tokenAtString;
	          return tokenAtString(stream, state);
	        }
	        stream.eatWhile(/[\w\$_]/);
	        return "meta";
	      }
	    }
	  });
	
	  function tokenTripleString(stream, state) {
	    var escaped = false;
	    while (!stream.eol()) {
	      if (!escaped && stream.match('"""')) {
	        state.tokenize = null;
	        break;
	      }
	      escaped = stream.next() == "\\" && !escaped;
	    }
	    return "string";
	  }
	
	  def("text/x-scala", {
	    name: "clike",
	    keywords: words(
	
	      /* scala */
	      "abstract case catch class def do else extends final finally for forSome if " +
	      "implicit import lazy match new null object override package private protected return " +
	      "sealed super this throw trait try type val var while with yield _ : = => <- <: " +
	      "<% >: # @ " +
	
	      /* package scala */
	      "assert assume require print println printf readLine readBoolean readByte readShort " +
	      "readChar readInt readLong readFloat readDouble " +
	
	      ":: #:: "
	    ),
	    types: words(
	      "AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either " +
	      "Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable " +
	      "Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering " +
	      "Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder " +
	      "StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector " +
	
	      /* package java.lang */
	      "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable " +
	      "Compiler Double Exception Float Integer Long Math Number Object Package Pair Process " +
	      "Runtime Runnable SecurityManager Short StackTraceElement StrictMath String " +
	      "StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"
	    ),
	    multiLineStrings: true,
	    blockKeywords: words("catch class do else finally for forSome if match switch try while"),
	    defKeywords: words("class def object package trait type val var"),
	    atoms: words("true false null"),
	    indentStatements: false,
	    indentSwitch: false,
	    hooks: {
	      "@": function(stream) {
	        stream.eatWhile(/[\w\$_]/);
	        return "meta";
	      },
	      '"': function(stream, state) {
	        if (!stream.match('""')) return false;
	        state.tokenize = tokenTripleString;
	        return state.tokenize(stream, state);
	      },
	      "'": function(stream) {
	        stream.eatWhile(/[\w\$_\xa1-\uffff]/);
	        return "atom";
	      },
	      "=": function(stream, state) {
	        var cx = state.context
	        if (cx.type == "}" && cx.align && stream.eat(">")) {
	          state.context = new Context(cx.indented, cx.column, cx.type, cx.info, null, cx.prev)
	          return "operator"
	        } else {
	          return false
	        }
	      }
	    },
	    modeProps: {closeBrackets: {triples: '"'}}
	  });
	
	  function tokenKotlinString(tripleString){
	    return function (stream, state) {
	      var escaped = false, next, end = false;
	      while (!stream.eol()) {
	        if (!tripleString && !escaped && stream.match('"') ) {end = true; break;}
	        if (tripleString && stream.match('"""')) {end = true; break;}
	        next = stream.next();
	        if(!escaped && next == "$" && stream.match('{'))
	          stream.skipTo("}");
	        escaped = !escaped && next == "\\" && !tripleString;
	      }
	      if (end || !tripleString)
	        state.tokenize = null;
	      return "string";
	    }
	  }
	
	  def("text/x-kotlin", {
	    name: "clike",
	    keywords: words(
	      /*keywords*/
	      "package as typealias class interface this super val " +
	      "var fun for is in This throw return " +
	      "break continue object if else while do try when !in !is as? " +
	
	      /*soft keywords*/
	      "file import where by get set abstract enum open inner override private public internal " +
	      "protected catch finally out final vararg reified dynamic companion constructor init " +
	      "sealed field property receiver param sparam lateinit data inline noinline tailrec " +
	      "external annotation crossinline const operator infix"
	    ),
	    types: words(
	      /* package java.lang */
	      "Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable " +
	      "Compiler Double Exception Float Integer Long Math Number Object Package Pair Process " +
	      "Runtime Runnable SecurityManager Short StackTraceElement StrictMath String " +
	      "StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"
	    ),
	    intendSwitch: false,
	    indentStatements: false,
	    multiLineStrings: true,
	    blockKeywords: words("catch class do else finally for if where try while enum"),
	    defKeywords: words("class val var object package interface fun"),
	    atoms: words("true false null this"),
	    hooks: {
	      '"': function(stream, state) {
	        state.tokenize = tokenKotlinString(stream.match('""'));
	        return state.tokenize(stream, state);
	      }
	    },
	    modeProps: {closeBrackets: {triples: '"'}}
	  });
	
	  def(["x-shader/x-vertex", "x-shader/x-fragment"], {
	    name: "clike",
	    keywords: words("sampler1D sampler2D sampler3D samplerCube " +
	                    "sampler1DShadow sampler2DShadow " +
	                    "const attribute uniform varying " +
	                    "break continue discard return " +
	                    "for while do if else struct " +
	                    "in out inout"),
	    types: words("float int bool void " +
	                 "vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 " +
	                 "mat2 mat3 mat4"),
	    blockKeywords: words("for while do if else struct"),
	    builtin: words("radians degrees sin cos tan asin acos atan " +
	                    "pow exp log exp2 sqrt inversesqrt " +
	                    "abs sign floor ceil fract mod min max clamp mix step smoothstep " +
	                    "length distance dot cross normalize ftransform faceforward " +
	                    "reflect refract matrixCompMult " +
	                    "lessThan lessThanEqual greaterThan greaterThanEqual " +
	                    "equal notEqual any all not " +
	                    "texture1D texture1DProj texture1DLod texture1DProjLod " +
	                    "texture2D texture2DProj texture2DLod texture2DProjLod " +
	                    "texture3D texture3DProj texture3DLod texture3DProjLod " +
	                    "textureCube textureCubeLod " +
	                    "shadow1D shadow2D shadow1DProj shadow2DProj " +
	                    "shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod " +
	                    "dFdx dFdy fwidth " +
	                    "noise1 noise2 noise3 noise4"),
	    atoms: words("true false " +
	                "gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex " +
	                "gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 " +
	                "gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 " +
	                "gl_FogCoord gl_PointCoord " +
	                "gl_Position gl_PointSize gl_ClipVertex " +
	                "gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor " +
	                "gl_TexCoord gl_FogFragCoord " +
	                "gl_FragCoord gl_FrontFacing " +
	                "gl_FragData gl_FragDepth " +
	                "gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix " +
	                "gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse " +
	                "gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse " +
	                "gl_TexureMatrixTranspose gl_ModelViewMatrixInverseTranspose " +
	                "gl_ProjectionMatrixInverseTranspose " +
	                "gl_ModelViewProjectionMatrixInverseTranspose " +
	                "gl_TextureMatrixInverseTranspose " +
	                "gl_NormalScale gl_DepthRange gl_ClipPlane " +
	                "gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel " +
	                "gl_FrontLightModelProduct gl_BackLightModelProduct " +
	                "gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ " +
	                "gl_FogParameters " +
	                "gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords " +
	                "gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats " +
	                "gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits " +
	                "gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits " +
	                "gl_MaxDrawBuffers"),
	    indentSwitch: false,
	    hooks: {"#": cppHook},
	    modeProps: {fold: ["brace", "include"]}
	  });
	
	  def("text/x-nesc", {
	    name: "clike",
	    keywords: words(cKeywords + "as atomic async call command component components configuration event generic " +
	                    "implementation includes interface module new norace nx_struct nx_union post provides " +
	                    "signal task uses abstract extends"),
	    types: words(cTypes),
	    blockKeywords: words("case do else for if switch while struct"),
	    atoms: words("null true false"),
	    hooks: {"#": cppHook},
	    modeProps: {fold: ["brace", "include"]}
	  });
	
	  def("text/x-objectivec", {
	    name: "clike",
	    keywords: words(cKeywords + "inline restrict _Bool _Complex _Imaginary BOOL Class bycopy byref id IMP in " +
	                    "inout nil oneway out Protocol SEL self super atomic nonatomic retain copy readwrite readonly"),
	    types: words(cTypes),
	    atoms: words("YES NO NULL NILL ON OFF true false"),
	    hooks: {
	      "@": function(stream) {
	        stream.eatWhile(/[\w\$]/);
	        return "keyword";
	      },
	      "#": cppHook,
	      indent: function(_state, ctx, textAfter) {
	        if (ctx.type == "statement" && /^@\w/.test(textAfter)) return ctx.indented
	      }
	    },
	    modeProps: {fold: "brace"}
	  });
	
	  def("text/x-squirrel", {
	    name: "clike",
	    keywords: words("base break clone continue const default delete enum extends function in class" +
	                    " foreach local resume return this throw typeof yield constructor instanceof static"),
	    types: words(cTypes),
	    blockKeywords: words("case catch class else for foreach if switch try while"),
	    defKeywords: words("function local class"),
	    typeFirstDefinitions: true,
	    atoms: words("true false null"),
	    hooks: {"#": cppHook},
	    modeProps: {fold: ["brace", "include"]}
	  });
	
	  // Ceylon Strings need to deal with interpolation
	  var stringTokenizer = null;
	  function tokenCeylonString(type) {
	    return function(stream, state) {
	      var escaped = false, next, end = false;
	      while (!stream.eol()) {
	        if (!escaped && stream.match('"') &&
	              (type == "single" || stream.match('""'))) {
	          end = true;
	          break;
	        }
	        if (!escaped && stream.match('``')) {
	          stringTokenizer = tokenCeylonString(type);
	          end = true;
	          break;
	        }
	        next = stream.next();
	        escaped = type == "single" && !escaped && next == "\\";
	      }
	      if (end)
	          state.tokenize = null;
	      return "string";
	    }
	  }
	
	  def("text/x-ceylon", {
	    name: "clike",
	    keywords: words("abstracts alias assembly assert assign break case catch class continue dynamic else" +
	                    " exists extends finally for function given if import in interface is let module new" +
	                    " nonempty object of out outer package return satisfies super switch then this throw" +
	                    " try value void while"),
	    types: function(word) {
	        // In Ceylon all identifiers that start with an uppercase are types
	        var first = word.charAt(0);
	        return (first === first.toUpperCase() && first !== first.toLowerCase());
	    },
	    blockKeywords: words("case catch class dynamic else finally for function if interface module new object switch try while"),
	    defKeywords: words("class dynamic function interface module object package value"),
	    builtin: words("abstract actual aliased annotation by default deprecated doc final formal late license" +
	                   " native optional sealed see serializable shared suppressWarnings tagged throws variable"),
	    isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
	    isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
	    numberStart: /[\d#$]/,
	    number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
	    multiLineStrings: true,
	    typeFirstDefinitions: true,
	    atoms: words("true false null larger smaller equal empty finished"),
	    indentSwitch: false,
	    styleDefs: false,
	    hooks: {
	      "@": function(stream) {
	        stream.eatWhile(/[\w\$_]/);
	        return "meta";
	      },
	      '"': function(stream, state) {
	          state.tokenize = tokenCeylonString(stream.match('""') ? "triple" : "single");
	          return state.tokenize(stream, state);
	        },
	      '`': function(stream, state) {
	          if (!stringTokenizer || !stream.match('`')) return false;
	          state.tokenize = stringTokenizer;
	          stringTokenizer = null;
	          return state.tokenize(stream, state);
	        },
	      "'": function(stream) {
	        stream.eatWhile(/[\w\$_\xa1-\uffff]/);
	        return "atom";
	      },
	      token: function(_stream, state, style) {
	          if ((style == "variable" || style == "variable-3") &&
	              state.prevToken == ".") {
	            return "variable-2";
	          }
	        }
	    },
	    modeProps: {
	        fold: ["brace", "import"],
	        closeBrackets: {triples: '"'}
	    }
	  });
	
	});


/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE
	
	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(192));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	"use strict";
	
	CodeMirror.defineMode("sql", function(config, parserConfig) {
	  "use strict";
	
	  var client         = parserConfig.client || {},
	      atoms          = parserConfig.atoms || {"false": true, "true": true, "null": true},
	      builtin        = parserConfig.builtin || {},
	      keywords       = parserConfig.keywords || {},
	      operatorChars  = parserConfig.operatorChars || /^[*+\-%<>!=&|~^]/,
	      support        = parserConfig.support || {},
	      hooks          = parserConfig.hooks || {},
	      dateSQL        = parserConfig.dateSQL || {"date" : true, "time" : true, "timestamp" : true};
	
	  function tokenBase(stream, state) {
	    var ch = stream.next();
	
	    // call hooks from the mime type
	    if (hooks[ch]) {
	      var result = hooks[ch](stream, state);
	      if (result !== false) return result;
	    }
	
	    if (support.hexNumber &&
	      ((ch == "0" && stream.match(/^[xX][0-9a-fA-F]+/))
	      || (ch == "x" || ch == "X") && stream.match(/^'[0-9a-fA-F]+'/))) {
	      // hex
	      // ref: http://dev.mysql.com/doc/refman/5.5/en/hexadecimal-literals.html
	      return "number";
	    } else if (support.binaryNumber &&
	      (((ch == "b" || ch == "B") && stream.match(/^'[01]+'/))
	      || (ch == "0" && stream.match(/^b[01]+/)))) {
	      // bitstring
	      // ref: http://dev.mysql.com/doc/refman/5.5/en/bit-field-literals.html
	      return "number";
	    } else if (ch.charCodeAt(0) > 47 && ch.charCodeAt(0) < 58) {
	      // numbers
	      // ref: http://dev.mysql.com/doc/refman/5.5/en/number-literals.html
	          stream.match(/^[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/);
	      support.decimallessFloat && stream.eat('.');
	      return "number";
	    } else if (ch == "?" && (stream.eatSpace() || stream.eol() || stream.eat(";"))) {
	      // placeholders
	      return "variable-3";
	    } else if (ch == "'" || (ch == '"' && support.doubleQuote)) {
	      // strings
	      // ref: http://dev.mysql.com/doc/refman/5.5/en/string-literals.html
	      state.tokenize = tokenLiteral(ch);
	      return state.tokenize(stream, state);
	    } else if ((((support.nCharCast && (ch == "n" || ch == "N"))
	        || (support.charsetCast && ch == "_" && stream.match(/[a-z][a-z0-9]*/i)))
	        && (stream.peek() == "'" || stream.peek() == '"'))) {
	      // charset casting: _utf8'str', N'str', n'str'
	      // ref: http://dev.mysql.com/doc/refman/5.5/en/string-literals.html
	      return "keyword";
	    } else if (/^[\(\),\;\[\]]/.test(ch)) {
	      // no highlighting
	      return null;
	    } else if (support.commentSlashSlash && ch == "/" && stream.eat("/")) {
	      // 1-line comment
	      stream.skipToEnd();
	      return "comment";
	    } else if ((support.commentHash && ch == "#")
	        || (ch == "-" && stream.eat("-") && (!support.commentSpaceRequired || stream.eat(" ")))) {
	      // 1-line comments
	      // ref: https://kb.askmonty.org/en/comment-syntax/
	      stream.skipToEnd();
	      return "comment";
	    } else if (ch == "/" && stream.eat("*")) {
	      // multi-line comments
	      // ref: https://kb.askmonty.org/en/comment-syntax/
	      state.tokenize = tokenComment;
	      return state.tokenize(stream, state);
	    } else if (ch == ".") {
	      // .1 for 0.1
	      if (support.zerolessFloat && stream.match(/^(?:\d+(?:e[+-]?\d+)?)/i)) {
	        return "number";
	      }
	      // .table_name (ODBC)
	      // // ref: http://dev.mysql.com/doc/refman/5.6/en/identifier-qualifiers.html
	      if (support.ODBCdotTable && stream.match(/^[a-zA-Z_]+/)) {
	        return "variable-2";
	      }
	    } else if (operatorChars.test(ch)) {
	      // operators
	      stream.eatWhile(operatorChars);
	      return null;
	    } else if (ch == '{' &&
	        (stream.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) || stream.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/))) {
	      // dates (weird ODBC syntax)
	      // ref: http://dev.mysql.com/doc/refman/5.5/en/date-and-time-literals.html
	      return "number";
	    } else {
	      stream.eatWhile(/^[_\w\d]/);
	      var word = stream.current().toLowerCase();
	      // dates (standard SQL syntax)
	      // ref: http://dev.mysql.com/doc/refman/5.5/en/date-and-time-literals.html
	      if (dateSQL.hasOwnProperty(word) && (stream.match(/^( )+'[^']*'/) || stream.match(/^( )+"[^"]*"/)))
	        return "number";
	      if (atoms.hasOwnProperty(word)) return "atom";
	      if (builtin.hasOwnProperty(word)) return "builtin";
	      if (keywords.hasOwnProperty(word)) return "keyword";
	      if (client.hasOwnProperty(word)) return "string-2";
	      return null;
	    }
	  }
	
	  // 'string', with char specified in quote escaped by '\'
	  function tokenLiteral(quote) {
	    return function(stream, state) {
	      var escaped = false, ch;
	      while ((ch = stream.next()) != null) {
	        if (ch == quote && !escaped) {
	          state.tokenize = tokenBase;
	          break;
	        }
	        escaped = !escaped && ch == "\\";
	      }
	      return "string";
	    };
	  }
	  function tokenComment(stream, state) {
	    while (true) {
	      if (stream.skipTo("*")) {
	        stream.next();
	        if (stream.eat("/")) {
	          state.tokenize = tokenBase;
	          break;
	        }
	      } else {
	        stream.skipToEnd();
	        break;
	      }
	    }
	    return "comment";
	  }
	
	  function pushContext(stream, state, type) {
	    state.context = {
	      prev: state.context,
	      indent: stream.indentation(),
	      col: stream.column(),
	      type: type
	    };
	  }
	
	  function popContext(state) {
	    state.indent = state.context.indent;
	    state.context = state.context.prev;
	  }
	
	  return {
	    startState: function() {
	      return {tokenize: tokenBase, context: null};
	    },
	
	    token: function(stream, state) {
	      if (stream.sol()) {
	        if (state.context && state.context.align == null)
	          state.context.align = false;
	      }
	      if (stream.eatSpace()) return null;
	
	      var style = state.tokenize(stream, state);
	      if (style == "comment") return style;
	
	      if (state.context && state.context.align == null)
	        state.context.align = true;
	
	      var tok = stream.current();
	      if (tok == "(")
	        pushContext(stream, state, ")");
	      else if (tok == "[")
	        pushContext(stream, state, "]");
	      else if (state.context && state.context.type == tok)
	        popContext(state);
	      return style;
	    },
	
	    indent: function(state, textAfter) {
	      var cx = state.context;
	      if (!cx) return CodeMirror.Pass;
	      var closing = textAfter.charAt(0) == cx.type;
	      if (cx.align) return cx.col + (closing ? 0 : 1);
	      else return cx.indent + (closing ? 0 : config.indentUnit);
	    },
	
	    blockCommentStart: "/*",
	    blockCommentEnd: "*/",
	    lineComment: support.commentSlashSlash ? "//" : support.commentHash ? "#" : null
	  };
	});
	
	(function() {
	  "use strict";
	
	  // `identifier`
	  function hookIdentifier(stream) {
	    // MySQL/MariaDB identifiers
	    // ref: http://dev.mysql.com/doc/refman/5.6/en/identifier-qualifiers.html
	    var ch;
	    while ((ch = stream.next()) != null) {
	      if (ch == "`" && !stream.eat("`")) return "variable-2";
	    }
	    stream.backUp(stream.current().length - 1);
	    return stream.eatWhile(/\w/) ? "variable-2" : null;
	  }
	
	  // variable token
	  function hookVar(stream) {
	    // variables
	    // @@prefix.varName @varName
	    // varName can be quoted with ` or ' or "
	    // ref: http://dev.mysql.com/doc/refman/5.5/en/user-variables.html
	    if (stream.eat("@")) {
	      stream.match(/^session\./);
	      stream.match(/^local\./);
	      stream.match(/^global\./);
	    }
	
	    if (stream.eat("'")) {
	      stream.match(/^.*'/);
	      return "variable-2";
	    } else if (stream.eat('"')) {
	      stream.match(/^.*"/);
	      return "variable-2";
	    } else if (stream.eat("`")) {
	      stream.match(/^.*`/);
	      return "variable-2";
	    } else if (stream.match(/^[0-9a-zA-Z$\.\_]+/)) {
	      return "variable-2";
	    }
	    return null;
	  };
	
	  // short client keyword token
	  function hookClient(stream) {
	    // \N means NULL
	    // ref: http://dev.mysql.com/doc/refman/5.5/en/null-values.html
	    if (stream.eat("N")) {
	        return "atom";
	    }
	    // \g, etc
	    // ref: http://dev.mysql.com/doc/refman/5.5/en/mysql-commands.html
	    return stream.match(/^[a-zA-Z.#!?]/) ? "variable-2" : null;
	  }
	
	  // these keywords are used by all SQL dialects (however, a mode can still overwrite it)
	  var sqlKeywords = "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ";
	
	  // turn a space-separated list into an array
	  function set(str) {
	    var obj = {}, words = str.split(" ");
	    for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
	    return obj;
	  }
	
	  // A generic SQL Mode. It's not a standard, it just try to support what is generally supported
	  CodeMirror.defineMIME("text/x-sql", {
	    name: "sql",
	    keywords: set(sqlKeywords + "begin"),
	    builtin: set("bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric"),
	    atoms: set("false true null unknown"),
	    operatorChars: /^[*+\-%<>!=]/,
	    dateSQL: set("date time timestamp"),
	    support: set("ODBCdotTable doubleQuote binaryNumber hexNumber")
	  });
	
	  CodeMirror.defineMIME("text/x-mssql", {
	    name: "sql",
	    client: set("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
	    keywords: set(sqlKeywords + "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec"),
	    builtin: set("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),
	    atoms: set("false true null unknown"),
	    operatorChars: /^[*+\-%<>!=]/,
	    dateSQL: set("date datetimeoffset datetime2 smalldatetime datetime time"),
	    hooks: {
	      "@":   hookVar
	    }
	  });
	
	  CodeMirror.defineMIME("text/x-mysql", {
	    name: "sql",
	    client: set("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
	    keywords: set(sqlKeywords + "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
	    builtin: set("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
	    atoms: set("false true null unknown"),
	    operatorChars: /^[*+\-%<>!=&|^]/,
	    dateSQL: set("date time timestamp"),
	    support: set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
	    hooks: {
	      "@":   hookVar,
	      "`":   hookIdentifier,
	      "\\":  hookClient
	    }
	  });
	
	  CodeMirror.defineMIME("text/x-mariadb", {
	    name: "sql",
	    client: set("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
	    keywords: set(sqlKeywords + "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
	    builtin: set("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
	    atoms: set("false true null unknown"),
	    operatorChars: /^[*+\-%<>!=&|^]/,
	    dateSQL: set("date time timestamp"),
	    support: set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
	    hooks: {
	      "@":   hookVar,
	      "`":   hookIdentifier,
	      "\\":  hookClient
	    }
	  });
	
	  // the query language used by Apache Cassandra is called CQL, but this mime type
	  // is called Cassandra to avoid confusion with Contextual Query Language
	  CodeMirror.defineMIME("text/x-cassandra", {
	    name: "sql",
	    client: { },
	    keywords: set("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),
	    builtin: set("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),
	    atoms: set("false true infinity NaN"),
	    operatorChars: /^[<>=]/,
	    dateSQL: { },
	    support: set("commentSlashSlash decimallessFloat"),
	    hooks: { }
	  });
	
	  // this is based on Peter Raganitsch's 'plsql' mode
	  CodeMirror.defineMIME("text/x-plsql", {
	    name:       "sql",
	    client:     set("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),
	    keywords:   set("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),
	    builtin:    set("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),
	    operatorChars: /^[*+\-%<>!=~]/,
	    dateSQL:    set("date time timestamp"),
	    support:    set("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")
	  });
	
	  // Created to support specific hive keywords
	  CodeMirror.defineMIME("text/x-hive", {
	    name: "sql",
	    keywords: set("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external false fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger true unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with"),
	    builtin: set("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype"),
	    atoms: set("false true null unknown"),
	    operatorChars: /^[*+\-%<>!=]/,
	    dateSQL: set("date timestamp"),
	    support: set("ODBCdotTable doubleQuote binaryNumber hexNumber")
	  });
	
	  CodeMirror.defineMIME("text/x-pgsql", {
	    name: "sql",
	    client: set("source"),
	    // http://www.postgresql.org/docs/9.5/static/sql-keywords-appendix.html
	    keywords: set(sqlKeywords + "a abort abs absent absolute access according action ada add admin after aggregate all allocate also always analyse analyze any are array array_agg array_max_cardinality asensitive assertion assignment asymmetric at atomic attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli binary bit_length blob blocked bom both breadth c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain characteristics characters character_length character_set_catalog character_set_name character_set_schema char_length check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column columns column_name command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constraint constraints constraint_catalog constraint_name constraint_schema constructor contains content continue control conversion convert copy corr corresponding cost covar_pop covar_samp cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datetime_interval_code datetime_interval_precision day db deallocate dec declare default defaults deferrable deferred defined definer degree delimiter delimiters dense_rank depth deref derived describe descriptor deterministic diagnostics dictionary disable discard disconnect dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain dynamic dynamic_function dynamic_function_code each element else empty enable encoding encrypted end end-exec end_frame end_partition enforced enum equals escape event every except exception exclude excluding exclusive exec execute exists exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreign fortran forward found frame_row free freeze fs full function functions fusion g general generated get global go goto grant granted greatest grouping groups handler header hex hierarchy hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import including increment indent index indexes indicator inherit inherits initially inline inner inout input insensitive instance instantiable instead integrity intersect intersection invoker isnull isolation k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like_regex link listen ln load local localtime localtimestamp location locator lock locked logged lower m map mapping match matched materialized max maxvalue max_cardinality member merge message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized nothing notify notnull nowait nth_value ntile null nullable nullif nulls number object occurrences_regex octets octet_length of off offset oids old only open operator option options ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password percent percentile_cont percentile_disc percent_rank period permission placing plans pli policy portion position position_regex power precedes preceding prepare prepared preserve primary prior privileges procedural procedure program public quote range rank read reads reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns revoke right role rollback rollup routine routine_catalog routine_name routine_schema row rows row_count row_number rule savepoint scale schema schema_name scope scope_catalog scope_name scope_schema scroll search second section security selective self sensitive sequence sequences serializable server server_name session session_user setof sets share show similar simple size skip snapshot some source space specific specifictype specific_name sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset substring substring_regex succeeds sum symmetric sysid system system_time system_user t tables tablesample tablespace table_name temp template temporary then ties timezone_hour timezone_minute to token top_level_count trailing transaction transactions_committed transactions_rolled_back transaction_active transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted unique unknown unlink unlisten unlogged unnamed unnest until untyped upper uri usage user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of varbinary variadic var_pop var_samp verbose version versioning view views volatile when whenever whitespace width_bucket window within work wrapper write xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes loop repeat"),
	    // http://www.postgresql.org/docs/9.5/static/datatype.html
	    builtin: set("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
	    atoms: set("false true null unknown"),
	    operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
	    dateSQL: set("date time timestamp"),
	    support: set("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
	  });
	
	  // Google's SQL-like query language, GQL
	  CodeMirror.defineMIME("text/x-gql", {
	    name: "sql",
	    keywords: set("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),
	    atoms: set("false true"),
	    builtin: set("blob datetime first key __key__ string integer double boolean null"),
	    operatorChars: /^[*+\-%<>!=]/
	  });
	}());
	
	});
	
	/*
	  How Properties of Mime Types are used by SQL Mode
	  =================================================
	
	  keywords:
	    A list of keywords you want to be highlighted.
	  builtin:
	    A list of builtin types you want to be highlighted (if you want types to be of class "builtin" instead of "keyword").
	  operatorChars:
	    All characters that must be handled as operators.
	  client:
	    Commands parsed and executed by the client (not the server).
	  support:
	    A list of supported syntaxes which are not common, but are supported by more than 1 DBMS.
	    * ODBCdotTable: .tableName
	    * zerolessFloat: .1
	    * doubleQuote
	    * nCharCast: N'string'
	    * charsetCast: _utf8'string'
	    * commentHash: use # char for comments
	    * commentSlashSlash: use // for comments
	    * commentSpaceRequired: require a space after -- for comments
	  atoms:
	    Keywords that must be highlighted as atoms,. Some DBMS's support more atoms than others:
	    UNKNOWN, INFINITY, UNDERFLOW, NaN...
	  dateSQL:
	    Used for date/time SQL standard syntax, because not all DBMS's support same temporal types.
	*/


/***/ },

/***/ 194:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(195);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(188)(content, {});
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

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(187)();
	// imports
	
	
	// module
	exports.push([module.id, "html, body {\n    width: 100%;\n    height: 100%;\n}\n\n.dracula {\n  background-color: #282a36;\n  color: #f8f8f2;\n}\n\ndiv.CodeMirror {\n  height: 100%;\n  width: 100%;\n}\n\n.container-style {\n    width: 100%;\n    height: 100%;\n    margin: 0 0 0 0;\n    padding: 0 0 0 0;\n}\n\n.row-style {\n    width: 100%;\n    height: 50%;\n    margin: 0 0 0 0;\n    padding: 0 0 0 0;\n}\n\n.col-style {\n    float: left;\n    width: 50%;\n    height: 100%;\n    margin: 0 0 0 0;\n    padding: 5px;\n}\n\n.full-col-style {\n    float: right;\n    width: 100%;\n    height: 100%;\n    margin: 0 0 0 0;\n    padding: 5px;\n}", ""]);
	
	// exports


/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(1);
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
	        return (React.createElement("div", { style: this.props.style, className: this.props.className },
	            React.createElement("button", { style: buttonStyle, onClick: e => this.onRun() }, "RUN")));
	    }
	}
	exports.ActionBar = ActionBar;


/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(1);
	const CodeMirror = __webpack_require__(192);
	const superagent = __webpack_require__(178);
	__webpack_require__(198);
	__webpack_require__(200);
	__webpack_require__(202);
	__webpack_require__(203);
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
	            this.props.OnCodeChange(editor.getValue());
	        });
	    }
	    componentDidUpdate(prevProps, prevState) {
	        if (!this._editor)
	            return;
	        this._editor.setValue(this.props.Code);
	    }
	    getCode() {
	        return this._editor.getValue();
	    }
	    render() {
	        return (React.createElement("div", { className: this.props.className, style: this.props.style, ref: d => this._editorElement = d }));
	    }
	}
	exports.CodeEditor = CodeEditor;


/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(199);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(188)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./codemirror.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./codemirror.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(187)();
	// imports
	
	
	// module
	exports.push([module.id, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  width: auto;\n  border: 0;\n  -webkit-animation: blink 1.06s steps(1) infinite;\n  -moz-animation: blink 1.06s steps(1) infinite;\n  animation: blink 1.06s steps(1) infinite;\n  background-color: #7e7;\n}\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: -20px;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  padding-bottom: 30px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 30px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -30px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  overflow: auto;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", ""]);
	
	// exports


/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(201);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(188)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./show-hint.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./show-hint.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(187)();
	// imports
	
	
	// module
	exports.push([module.id, ".CodeMirror-hints {\n  position: absolute;\n  z-index: 10;\n  overflow: hidden;\n  list-style: none;\n\n  margin: 0;\n  padding: 2px;\n\n  -webkit-box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  -moz-box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  box-shadow: 2px 3px 5px rgba(0,0,0,.2);\n  border-radius: 3px;\n  border: 1px solid silver;\n\n  background: white;\n  font-size: 90%;\n  font-family: monospace;\n\n  max-height: 20em;\n  overflow-y: auto;\n}\n\n.CodeMirror-hint {\n  margin: 0;\n  padding: 0 4px;\n  border-radius: 2px;\n  white-space: pre;\n  color: black;\n  cursor: pointer;\n}\n\nli.CodeMirror-hint-active {\n  background: #08f;\n  color: white;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 202:
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE
	
	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(192));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";
	
	  var HINT_ELEMENT_CLASS        = "CodeMirror-hint";
	  var ACTIVE_HINT_ELEMENT_CLASS = "CodeMirror-hint-active";
	
	  // This is the old interface, kept around for now to stay
	  // backwards-compatible.
	  CodeMirror.showHint = function(cm, getHints, options) {
	    if (!getHints) return cm.showHint(options);
	    if (options && options.async) getHints.async = true;
	    var newOpts = {hint: getHints};
	    if (options) for (var prop in options) newOpts[prop] = options[prop];
	    return cm.showHint(newOpts);
	  };
	
	  CodeMirror.defineExtension("showHint", function(options) {
	    options = parseOptions(this, this.getCursor("start"), options);
	    var selections = this.listSelections()
	    if (selections.length > 1) return;
	    // By default, don't allow completion when something is selected.
	    // A hint function can have a `supportsSelection` property to
	    // indicate that it can handle selections.
	    if (this.somethingSelected()) {
	      if (!options.hint.supportsSelection) return;
	      // Don't try with cross-line selections
	      for (var i = 0; i < selections.length; i++)
	        if (selections[i].head.line != selections[i].anchor.line) return;
	    }
	
	    if (this.state.completionActive) this.state.completionActive.close();
	    var completion = this.state.completionActive = new Completion(this, options);
	    if (!completion.options.hint) return;
	
	    CodeMirror.signal(this, "startCompletion", this);
	    completion.update(true);
	  });
	
	  function Completion(cm, options) {
	    this.cm = cm;
	    this.options = options;
	    this.widget = null;
	    this.debounce = 0;
	    this.tick = 0;
	    this.startPos = this.cm.getCursor("start");
	    this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length;
	
	    var self = this;
	    cm.on("cursorActivity", this.activityFunc = function() { self.cursorActivity(); });
	  }
	
	  var requestAnimationFrame = window.requestAnimationFrame || function(fn) {
	    return setTimeout(fn, 1000/60);
	  };
	  var cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
	
	  Completion.prototype = {
	    close: function() {
	      if (!this.active()) return;
	      this.cm.state.completionActive = null;
	      this.tick = null;
	      this.cm.off("cursorActivity", this.activityFunc);
	
	      if (this.widget && this.data) CodeMirror.signal(this.data, "close");
	      if (this.widget) this.widget.close();
	      CodeMirror.signal(this.cm, "endCompletion", this.cm);
	    },
	
	    active: function() {
	      return this.cm.state.completionActive == this;
	    },
	
	    pick: function(data, i) {
	      var completion = data.list[i];
	      if (completion.hint) completion.hint(this.cm, data, completion);
	      else this.cm.replaceRange(getText(completion), completion.from || data.from,
	                                completion.to || data.to, "complete");
	      CodeMirror.signal(data, "pick", completion);
	      this.close();
	    },
	
	    cursorActivity: function() {
	      if (this.debounce) {
	        cancelAnimationFrame(this.debounce);
	        this.debounce = 0;
	      }
	
	      var pos = this.cm.getCursor(), line = this.cm.getLine(pos.line);
	      if (pos.line != this.startPos.line || line.length - pos.ch != this.startLen - this.startPos.ch ||
	          pos.ch < this.startPos.ch || this.cm.somethingSelected() ||
	          (pos.ch && this.options.closeCharacters.test(line.charAt(pos.ch - 1)))) {
	        this.close();
	      } else {
	        var self = this;
	        this.debounce = requestAnimationFrame(function() {self.update();});
	        if (this.widget) this.widget.disable();
	      }
	    },
	
	    update: function(first) {
	      if (this.tick == null) return
	      var self = this, myTick = ++this.tick
	      fetchHints(this.options.hint, this.cm, this.options, function(data) {
	        if (self.tick == myTick) self.finishUpdate(data, first)
	      })
	    },
	
	    finishUpdate: function(data, first) {
	      if (this.data) CodeMirror.signal(this.data, "update");
	
	      var picked = (this.widget && this.widget.picked) || (first && this.options.completeSingle);
	      if (this.widget) this.widget.close();
	
	      if (data && this.data && isNewCompletion(this.data, data)) return;
	      this.data = data;
	
	      if (data && data.list.length) {
	        if (picked && data.list.length == 1) {
	          this.pick(data, 0);
	        } else {
	          this.widget = new Widget(this, data);
	          CodeMirror.signal(data, "shown");
	        }
	      }
	    }
	  };
	
	  function isNewCompletion(old, nw) {
	    var moved = CodeMirror.cmpPos(nw.from, old.from)
	    return moved > 0 && old.to.ch - old.from.ch != nw.to.ch - nw.from.ch
	  }
	
	  function parseOptions(cm, pos, options) {
	    var editor = cm.options.hintOptions;
	    var out = {};
	    for (var prop in defaultOptions) out[prop] = defaultOptions[prop];
	    if (editor) for (var prop in editor)
	      if (editor[prop] !== undefined) out[prop] = editor[prop];
	    if (options) for (var prop in options)
	      if (options[prop] !== undefined) out[prop] = options[prop];
	    if (out.hint.resolve) out.hint = out.hint.resolve(cm, pos)
	    return out;
	  }
	
	  function getText(completion) {
	    if (typeof completion == "string") return completion;
	    else return completion.text;
	  }
	
	  function buildKeyMap(completion, handle) {
	    var baseMap = {
	      Up: function() {handle.moveFocus(-1);},
	      Down: function() {handle.moveFocus(1);},
	      PageUp: function() {handle.moveFocus(-handle.menuSize() + 1, true);},
	      PageDown: function() {handle.moveFocus(handle.menuSize() - 1, true);},
	      Home: function() {handle.setFocus(0);},
	      End: function() {handle.setFocus(handle.length - 1);},
	      Enter: handle.pick,
	      Tab: handle.pick,
	      Esc: handle.close
	    };
	    var custom = completion.options.customKeys;
	    var ourMap = custom ? {} : baseMap;
	    function addBinding(key, val) {
	      var bound;
	      if (typeof val != "string")
	        bound = function(cm) { return val(cm, handle); };
	      // This mechanism is deprecated
	      else if (baseMap.hasOwnProperty(val))
	        bound = baseMap[val];
	      else
	        bound = val;
	      ourMap[key] = bound;
	    }
	    if (custom)
	      for (var key in custom) if (custom.hasOwnProperty(key))
	        addBinding(key, custom[key]);
	    var extra = completion.options.extraKeys;
	    if (extra)
	      for (var key in extra) if (extra.hasOwnProperty(key))
	        addBinding(key, extra[key]);
	    return ourMap;
	  }
	
	  function getHintElement(hintsElement, el) {
	    while (el && el != hintsElement) {
	      if (el.nodeName.toUpperCase() === "LI" && el.parentNode == hintsElement) return el;
	      el = el.parentNode;
	    }
	  }
	
	  function Widget(completion, data) {
	    this.completion = completion;
	    this.data = data;
	    this.picked = false;
	    var widget = this, cm = completion.cm;
	
	    var hints = this.hints = document.createElement("ul");
	    hints.className = "CodeMirror-hints";
	    this.selectedHint = data.selectedHint || 0;
	
	    var completions = data.list;
	    for (var i = 0; i < completions.length; ++i) {
	      var elt = hints.appendChild(document.createElement("li")), cur = completions[i];
	      var className = HINT_ELEMENT_CLASS + (i != this.selectedHint ? "" : " " + ACTIVE_HINT_ELEMENT_CLASS);
	      if (cur.className != null) className = cur.className + " " + className;
	      elt.className = className;
	      if (cur.render) cur.render(elt, data, cur);
	      else elt.appendChild(document.createTextNode(cur.displayText || getText(cur)));
	      elt.hintId = i;
	    }
	
	    var pos = cm.cursorCoords(completion.options.alignWithWord ? data.from : null);
	    var left = pos.left, top = pos.bottom, below = true;
	    hints.style.left = left + "px";
	    hints.style.top = top + "px";
	    // If we're at the edge of the screen, then we want the menu to appear on the left of the cursor.
	    var winW = window.innerWidth || Math.max(document.body.offsetWidth, document.documentElement.offsetWidth);
	    var winH = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);
	    (completion.options.container || document.body).appendChild(hints);
	    var box = hints.getBoundingClientRect(), overlapY = box.bottom - winH;
	    var scrolls = hints.scrollHeight > hints.clientHeight + 1
	    var startScroll = cm.getScrollInfo();
	
	    if (overlapY > 0) {
	      var height = box.bottom - box.top, curTop = pos.top - (pos.bottom - box.top);
	      if (curTop - height > 0) { // Fits above cursor
	        hints.style.top = (top = pos.top - height) + "px";
	        below = false;
	      } else if (height > winH) {
	        hints.style.height = (winH - 5) + "px";
	        hints.style.top = (top = pos.bottom - box.top) + "px";
	        var cursor = cm.getCursor();
	        if (data.from.ch != cursor.ch) {
	          pos = cm.cursorCoords(cursor);
	          hints.style.left = (left = pos.left) + "px";
	          box = hints.getBoundingClientRect();
	        }
	      }
	    }
	    var overlapX = box.right - winW;
	    if (overlapX > 0) {
	      if (box.right - box.left > winW) {
	        hints.style.width = (winW - 5) + "px";
	        overlapX -= (box.right - box.left) - winW;
	      }
	      hints.style.left = (left = pos.left - overlapX) + "px";
	    }
	    if (scrolls) for (var node = hints.firstChild; node; node = node.nextSibling)
	      node.style.paddingRight = cm.display.nativeBarWidth + "px"
	
	    cm.addKeyMap(this.keyMap = buildKeyMap(completion, {
	      moveFocus: function(n, avoidWrap) { widget.changeActive(widget.selectedHint + n, avoidWrap); },
	      setFocus: function(n) { widget.changeActive(n); },
	      menuSize: function() { return widget.screenAmount(); },
	      length: completions.length,
	      close: function() { completion.close(); },
	      pick: function() { widget.pick(); },
	      data: data
	    }));
	
	    if (completion.options.closeOnUnfocus) {
	      var closingOnBlur;
	      cm.on("blur", this.onBlur = function() { closingOnBlur = setTimeout(function() { completion.close(); }, 100); });
	      cm.on("focus", this.onFocus = function() { clearTimeout(closingOnBlur); });
	    }
	
	    cm.on("scroll", this.onScroll = function() {
	      var curScroll = cm.getScrollInfo(), editor = cm.getWrapperElement().getBoundingClientRect();
	      var newTop = top + startScroll.top - curScroll.top;
	      var point = newTop - (window.pageYOffset || (document.documentElement || document.body).scrollTop);
	      if (!below) point += hints.offsetHeight;
	      if (point <= editor.top || point >= editor.bottom) return completion.close();
	      hints.style.top = newTop + "px";
	      hints.style.left = (left + startScroll.left - curScroll.left) + "px";
	    });
	
	    CodeMirror.on(hints, "dblclick", function(e) {
	      var t = getHintElement(hints, e.target || e.srcElement);
	      if (t && t.hintId != null) {widget.changeActive(t.hintId); widget.pick();}
	    });
	
	    CodeMirror.on(hints, "click", function(e) {
	      var t = getHintElement(hints, e.target || e.srcElement);
	      if (t && t.hintId != null) {
	        widget.changeActive(t.hintId);
	        if (completion.options.completeOnSingleClick) widget.pick();
	      }
	    });
	
	    CodeMirror.on(hints, "mousedown", function() {
	      setTimeout(function(){cm.focus();}, 20);
	    });
	
	    CodeMirror.signal(data, "select", completions[0], hints.firstChild);
	    return true;
	  }
	
	  Widget.prototype = {
	    close: function() {
	      if (this.completion.widget != this) return;
	      this.completion.widget = null;
	      this.hints.parentNode.removeChild(this.hints);
	      this.completion.cm.removeKeyMap(this.keyMap);
	
	      var cm = this.completion.cm;
	      if (this.completion.options.closeOnUnfocus) {
	        cm.off("blur", this.onBlur);
	        cm.off("focus", this.onFocus);
	      }
	      cm.off("scroll", this.onScroll);
	    },
	
	    disable: function() {
	      this.completion.cm.removeKeyMap(this.keyMap);
	      var widget = this;
	      this.keyMap = {Enter: function() { widget.picked = true; }};
	      this.completion.cm.addKeyMap(this.keyMap);
	    },
	
	    pick: function() {
	      this.completion.pick(this.data, this.selectedHint);
	    },
	
	    changeActive: function(i, avoidWrap) {
	      if (i >= this.data.list.length)
	        i = avoidWrap ? this.data.list.length - 1 : 0;
	      else if (i < 0)
	        i = avoidWrap ? 0  : this.data.list.length - 1;
	      if (this.selectedHint == i) return;
	      var node = this.hints.childNodes[this.selectedHint];
	      node.className = node.className.replace(" " + ACTIVE_HINT_ELEMENT_CLASS, "");
	      node = this.hints.childNodes[this.selectedHint = i];
	      node.className += " " + ACTIVE_HINT_ELEMENT_CLASS;
	      if (node.offsetTop < this.hints.scrollTop)
	        this.hints.scrollTop = node.offsetTop - 3;
	      else if (node.offsetTop + node.offsetHeight > this.hints.scrollTop + this.hints.clientHeight)
	        this.hints.scrollTop = node.offsetTop + node.offsetHeight - this.hints.clientHeight + 3;
	      CodeMirror.signal(this.data, "select", this.data.list[this.selectedHint], node);
	    },
	
	    screenAmount: function() {
	      return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
	    }
	  };
	
	  function applicableHelpers(cm, helpers) {
	    if (!cm.somethingSelected()) return helpers
	    var result = []
	    for (var i = 0; i < helpers.length; i++)
	      if (helpers[i].supportsSelection) result.push(helpers[i])
	    return result
	  }
	
	  function fetchHints(hint, cm, options, callback) {
	    if (hint.async) {
	      hint(cm, callback, options)
	    } else {
	      var result = hint(cm, options)
	      if (result && result.then) result.then(callback)
	      else callback(result)
	    }
	  }
	
	  function resolveAutoHints(cm, pos) {
	    var helpers = cm.getHelpers(pos, "hint"), words
	    if (helpers.length) {
	      var resolved = function(cm, callback, options) {
	        var app = applicableHelpers(cm, helpers);
	        function run(i) {
	          if (i == app.length) return callback(null)
	          fetchHints(app[i], cm, options, function(result) {
	            if (result && result.list.length > 0) callback(result)
	            else run(i + 1)
	          })
	        }
	        run(0)
	      }
	      resolved.async = true
	      resolved.supportsSelection = true
	      return resolved
	    } else if (words = cm.getHelper(cm.getCursor(), "hintWords")) {
	      return function(cm) { return CodeMirror.hint.fromList(cm, {words: words}) }
	    } else if (CodeMirror.hint.anyword) {
	      return function(cm, options) { return CodeMirror.hint.anyword(cm, options) }
	    } else {
	      return function() {}
	    }
	  }
	
	  CodeMirror.registerHelper("hint", "auto", {
	    resolve: resolveAutoHints
	  });
	
	  CodeMirror.registerHelper("hint", "fromList", function(cm, options) {
	    var cur = cm.getCursor(), token = cm.getTokenAt(cur);
	    var to = CodeMirror.Pos(cur.line, token.end);
	    if (token.string && /\w/.test(token.string[token.string.length - 1])) {
	      var term = token.string, from = CodeMirror.Pos(cur.line, token.start);
	    } else {
	      var term = "", from = to;
	    }
	    var found = [];
	    for (var i = 0; i < options.words.length; i++) {
	      var word = options.words[i];
	      if (word.slice(0, term.length) == term)
	        found.push(word);
	    }
	
	    if (found.length) return {list: found, from: from, to: to};
	  });
	
	  CodeMirror.commands.autocomplete = CodeMirror.showHint;
	
	  var defaultOptions = {
	    hint: CodeMirror.hint.auto,
	    completeSingle: true,
	    alignWithWord: true,
	    closeCharacters: /[\s()\[\]{};:>,]/,
	    closeOnUnfocus: true,
	    completeOnSingleClick: true,
	    container: null,
	    customKeys: null,
	    extraKeys: null
	  };
	
	  CodeMirror.defineOption("hintOptions", null);
	});


/***/ },

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

	// CodeMirror, copyright (c) by Marijn Haverbeke and others
	// Distributed under an MIT license: http://codemirror.net/LICENSE
	
	(function(mod) {
	  if (true) // CommonJS
	    mod(__webpack_require__(192), __webpack_require__(193));
	  else if (typeof define == "function" && define.amd) // AMD
	    define(["../../lib/codemirror", "../../mode/sql/sql"], mod);
	  else // Plain browser env
	    mod(CodeMirror);
	})(function(CodeMirror) {
	  "use strict";
	
	  var tables;
	  var defaultTable;
	  var keywords;
	  var CONS = {
	    QUERY_DIV: ";",
	    ALIAS_KEYWORD: "AS"
	  };
	  var Pos = CodeMirror.Pos, cmpPos = CodeMirror.cmpPos;
	
	  function isArray(val) { return Object.prototype.toString.call(val) == "[object Array]" }
	
	  function getKeywords(editor) {
	    var mode = editor.doc.modeOption;
	    if (mode === "sql") mode = "text/x-sql";
	    return CodeMirror.resolveMode(mode).keywords;
	  }
	
	  function getText(item) {
	    return typeof item == "string" ? item : item.text;
	  }
	
	  function wrapTable(name, value) {
	    if (isArray(value)) value = {columns: value}
	    if (!value.text) value.text = name
	    return value
	  }
	
	  function parseTables(input) {
	    var result = {}
	    if (isArray(input)) {
	      for (var i = input.length - 1; i >= 0; i--) {
	        var item = input[i]
	        result[getText(item).toUpperCase()] = wrapTable(getText(item), item)
	      }
	    } else if (input) {
	      for (var name in input)
	        result[name.toUpperCase()] = wrapTable(name, input[name])
	    }
	    return result
	  }
	
	  function getTable(name) {
	    return tables[name.toUpperCase()]
	  }
	
	  function shallowClone(object) {
	    var result = {};
	    for (var key in object) if (object.hasOwnProperty(key))
	      result[key] = object[key];
	    return result;
	  }
	
	  function match(string, word) {
	    var len = string.length;
	    var sub = getText(word).substr(0, len);
	    return string.toUpperCase() === sub.toUpperCase();
	  }
	
	  function addMatches(result, search, wordlist, formatter) {
	    if (isArray(wordlist)) {
	      for (var i = 0; i < wordlist.length; i++)
	        if (match(search, wordlist[i])) result.push(formatter(wordlist[i]))
	    } else {
	      for (var word in wordlist) if (wordlist.hasOwnProperty(word)) {
	        var val = wordlist[word]
	        if (!val || val === true)
	          val = word
	        else
	          val = val.displayText ? {text: val.text, displayText: val.displayText} : val.text
	        if (match(search, val)) result.push(formatter(val))
	      }
	    }
	  }
	
	  function cleanName(name) {
	    // Get rid name from backticks(`) and preceding dot(.)
	    if (name.charAt(0) == ".") {
	      name = name.substr(1);
	    }
	    return name.replace(/`/g, "");
	  }
	
	  function insertBackticks(name) {
	    var nameParts = getText(name).split(".");
	    for (var i = 0; i < nameParts.length; i++)
	      nameParts[i] = "`" + nameParts[i] + "`";
	    var escaped = nameParts.join(".");
	    if (typeof name == "string") return escaped;
	    name = shallowClone(name);
	    name.text = escaped;
	    return name;
	  }
	
	  function nameCompletion(cur, token, result, editor) {
	    // Try to complete table, column names and return start position of completion
	    var useBacktick = false;
	    var nameParts = [];
	    var start = token.start;
	    var cont = true;
	    while (cont) {
	      cont = (token.string.charAt(0) == ".");
	      useBacktick = useBacktick || (token.string.charAt(0) == "`");
	
	      start = token.start;
	      nameParts.unshift(cleanName(token.string));
	
	      token = editor.getTokenAt(Pos(cur.line, token.start));
	      if (token.string == ".") {
	        cont = true;
	        token = editor.getTokenAt(Pos(cur.line, token.start));
	      }
	    }
	
	    // Try to complete table names
	    var string = nameParts.join(".");
	    addMatches(result, string, tables, function(w) {
	      return useBacktick ? insertBackticks(w) : w;
	    });
	
	    // Try to complete columns from defaultTable
	    addMatches(result, string, defaultTable, function(w) {
	      return useBacktick ? insertBackticks(w) : w;
	    });
	
	    // Try to complete columns
	    string = nameParts.pop();
	    var table = nameParts.join(".");
	
	    var alias = false;
	    var aliasTable = table;
	    // Check if table is available. If not, find table by Alias
	    if (!getTable(table)) {
	      var oldTable = table;
	      table = findTableByAlias(table, editor);
	      if (table !== oldTable) alias = true;
	    }
	
	    var columns = getTable(table);
	    if (columns && columns.columns)
	      columns = columns.columns;
	
	    if (columns) {
	      addMatches(result, string, columns, function(w) {
	        var tableInsert = table;
	        if (alias == true) tableInsert = aliasTable;
	        if (typeof w == "string") {
	          w = tableInsert + "." + w;
	        } else {
	          w = shallowClone(w);
	          w.text = tableInsert + "." + w.text;
	        }
	        return useBacktick ? insertBackticks(w) : w;
	      });
	    }
	
	    return start;
	  }
	
	  function eachWord(lineText, f) {
	    if (!lineText) return;
	    var excepted = /[,;]/g;
	    var words = lineText.split(" ");
	    for (var i = 0; i < words.length; i++) {
	      f(words[i]?words[i].replace(excepted, '') : '');
	    }
	  }
	
	  function findTableByAlias(alias, editor) {
	    var doc = editor.doc;
	    var fullQuery = doc.getValue();
	    var aliasUpperCase = alias.toUpperCase();
	    var previousWord = "";
	    var table = "";
	    var separator = [];
	    var validRange = {
	      start: Pos(0, 0),
	      end: Pos(editor.lastLine(), editor.getLineHandle(editor.lastLine()).length)
	    };
	
	    //add separator
	    var indexOfSeparator = fullQuery.indexOf(CONS.QUERY_DIV);
	    while(indexOfSeparator != -1) {
	      separator.push(doc.posFromIndex(indexOfSeparator));
	      indexOfSeparator = fullQuery.indexOf(CONS.QUERY_DIV, indexOfSeparator+1);
	    }
	    separator.unshift(Pos(0, 0));
	    separator.push(Pos(editor.lastLine(), editor.getLineHandle(editor.lastLine()).text.length));
	
	    //find valid range
	    var prevItem = null;
	    var current = editor.getCursor()
	    for (var i = 0; i < separator.length; i++) {
	      if ((prevItem == null || cmpPos(current, prevItem) > 0) && cmpPos(current, separator[i]) <= 0) {
	        validRange = {start: prevItem, end: separator[i]};
	        break;
	      }
	      prevItem = separator[i];
	    }
	
	    var query = doc.getRange(validRange.start, validRange.end, false);
	
	    for (var i = 0; i < query.length; i++) {
	      var lineText = query[i];
	      eachWord(lineText, function(word) {
	        var wordUpperCase = word.toUpperCase();
	        if (wordUpperCase === aliasUpperCase && getTable(previousWord))
	          table = previousWord;
	        if (wordUpperCase !== CONS.ALIAS_KEYWORD)
	          previousWord = word;
	      });
	      if (table) break;
	    }
	    return table;
	  }
	
	  CodeMirror.registerHelper("hint", "sql", function(editor, options) {
	    tables = parseTables(options && options.tables)
	    var defaultTableName = options && options.defaultTable;
	    var disableKeywords = options && options.disableKeywords;
	    defaultTable = defaultTableName && getTable(defaultTableName);
	    keywords = getKeywords(editor);
	
	    if (defaultTableName && !defaultTable)
	      defaultTable = findTableByAlias(defaultTableName, editor);
	
	    defaultTable = defaultTable || [];
	
	    if (defaultTable.columns)
	      defaultTable = defaultTable.columns;
	
	    var cur = editor.getCursor();
	    var result = [];
	    var token = editor.getTokenAt(cur), start, end, search;
	    if (token.end > cur.ch) {
	      token.end = cur.ch;
	      token.string = token.string.slice(0, cur.ch - token.start);
	    }
	
	    if (token.string.match(/^[.`\w@]\w*$/)) {
	      search = token.string;
	      start = token.start;
	      end = token.end;
	    } else {
	      start = end = cur.ch;
	      search = "";
	    }
	    if (search.charAt(0) == "." || search.charAt(0) == "`") {
	      start = nameCompletion(cur, token, result, editor);
	    } else {
	      addMatches(result, search, tables, function(w) {return w;});
	      addMatches(result, search, defaultTable, function(w) {return w;});
	      if (!disableKeywords)
	        addMatches(result, search, keywords, function(w) {return w.toUpperCase();});
	    }
	
	    return {list: result, from: Pos(cur.line, start), to: Pos(cur.line, end)};
	  });
	});


/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(1);
	__webpack_require__(205);
	class QueryResult extends React.Component {
	    constructor(props) {
	        super();
	    }
	    render() {
	        if (this.props.Result.length === 0)
	            return React.createElement("table", { style: this.props.style, className: this.props.className });
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
	        var style = Object.assign({ overflow: 'auto' }, this.props.style);
	        return (React.createElement("div", { style: style, className: this.props.className },
	            React.createElement("table", { style: { width: '100%', height: 'auto' }, className: 'result-table' },
	                React.createElement("thead", null,
	                    React.createElement("tr", null, heads)),
	                React.createElement("tbody", null, rows))));
	    }
	}
	exports.QueryResult = QueryResult;


/***/ },

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(206);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(188)(content, {});
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

/***/ 206:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(187)();
	// imports
	
	
	// module
	exports.push([module.id, ".result-table\n{\n\tfont-family: \"Lucida Sans Unicode\", \"Lucida Grande\", Sans-Serif;\n\tfont-size: 12px;\n\ttext-align: left;\n\tborder-collapse: collapse;\n\t/*border: 1px solid #50fa7b;*/\n}\n\n.result-table th\n{\n\t/*padding: 12px 17px 12px 17px;*/\n    padding-right: 7px;\n\tfont-weight: normal;\n\tfont-size: 13px;\n\tcolor: #50fa7b;\n\tborder-bottom: 1px dashed #50fa7b;\n}\n\n.result-table td\n{\n\t/*padding: 7px 17px 7px 17px;*/\n\tcolor: #50fa7b;\n}\n\n.result-table tbody tr:hover td\n{\n\t/*color: #339;*/\n\tbackground: darkslategray;\n}", ""]);
	
	// exports


/***/ }

});
//# sourceMappingURL=bundle.js.map