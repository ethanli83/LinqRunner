import * as React from 'react';
import * as CodeMirror from 'codemirror';
import * as superagent from 'superagent';

import ActionBar from './action-bar';

export interface CodeEditorProps extends React.HTMLProps<HTMLDivElement>
{
    Code: string,
    Mode: string,
    Theme: string,
    ReadOnly?: boolean,
    OnChange?: Function,
    OnRun?: Function
}

export default class CodeEditor extends React.Component<CodeEditorProps, any>
{
    _editor: CodeMirror.Editor;
    _editorElement:HTMLDivElement;

    constructor(props: CodeEditorProps) {
        super(props);
    }

    componentDidMount () {
        var CM = CodeMirror as any;

        CM.registerHelper(
            "hint", "roslyn",
            function (mirror: any, callback: any, options: any) {
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

        CM.commands.autocomplete = function (cm: any) {
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
                    'table1': [ 'col_A', 'col_B', 'col_C' ],
                    'table2': [ 'other_columns1', 'other_columns2' ]
                }
            }
        };

		this._editor = CodeMirror(this._editorElement, options);

        this._editor.on('change', (editor: CodeMirror.Editor, change: CodeMirror.EditorChange) => {
            if (!this.props.OnChange)
                return;
            
            this.props.OnChange(editor.getValue());
        });
    }

    componentDidUpdate(prevProps: CodeEditorProps, prevState: any) {
        if (!this._editor)
            return;

        this._editor.setValue(this.props.Code.trim());
    }

    getCode() {
        return this._editor.getValue();
    }

    render() {
        const containerStyle: React.CSSProperties = {
            ...this.props.style,
            display: 'flex',
            flexFlow: 'column'
        };

        const codeMirrorStyle: React.CSSProperties = {
            flexGrow: 1,
            flexBasis: 0
        };

        const ButtonStyle: React.CSSProperties = {
            flexGrow: 0
        };

        var button = !this.props.ReadOnly 
            ? (<ActionBar style={ButtonStyle} className={this.props.className} onRunHandler={this.props.OnRun}/>)
            : "";

        return (
            <div style={containerStyle}>
                <div style={codeMirrorStyle} ref={d => this._editorElement = d}></div>
                {button}
            </div>);
    }
}