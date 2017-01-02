"use strict";
const React = require("react");
const CodeMirror = require("codemirror");
const superagent = require("superagent");
require("!style!css!codemirror/lib/codemirror.css");
require("!style!css!codemirror/addon/hint/show-hint.css");
require("codemirror/addon/hint/show-hint");
require("codemirror/addon/hint/sql-hint");
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
//# sourceMappingURL=code-editor.js.map