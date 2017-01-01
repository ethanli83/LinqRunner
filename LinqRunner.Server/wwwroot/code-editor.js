"use strict";
const React = require("react");
const CodeMirror = require("codemirror");
require("!style!css!codemirror/lib/codemirror.css");
require("!style!css!codemirror/addon/hint/show-hint.css");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/sql-hint");
class CodeEditor extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        var gs = {
            types: {
                network: {},
                tier: {
                    web: {},
                    database: {}
                },
                host: {}
            }
        };
        const options = {
            mode: this.props.Mode,
            theme: this.props.Theme,
            value: this.props.Code,
            lineNumbers: true,
            matchBrackets: true,
            indentUnit: 4,
            completeSingle: false,
            hint: CodeMirror.hint.sql,
            extraKeys: {
                "Cmd-Space": "autocomplete",
                "Ctrl-Space": "autocomplete"
            },
            hintOptions: {
                tables: {
                    "table1": ["col_A", "col_B", "col_C"],
                    "table2": ["other_columns1", "other_columns2"]
                }
            }
        };
        this._editor = CodeMirror(this._editorElement, options);
        this._editor.on("change", (editor, change) => {
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
//# sourceMappingURL=code-editor.js.map