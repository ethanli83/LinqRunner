"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const Request = require("superagent");
require("!style!css!codemirror/theme/dracula.css");
require("!style!css!bootstrap/dist/css/bootstrap.min.css");
require("codemirror/mode/clike/clike");
require("codemirror/mode/sql/sql");
require("!style!css!./css/app.css");
const action_bar_1 = require("./action-bar");
const code_editor_1 = require("./code-editor");
const query_result_1 = require("./query-result");
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
//# sourceMappingURL=app.js.map