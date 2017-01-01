import * as React from 'react';
import { findDOMNode } from 'react-dom';

import * as CodeMirror from 'codemirror';

import '!style!css!codemirror/lib/codemirror.css';
import '!style!css!codemirror/addon/hint/show-hint.css';

import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';

export interface CodeEditorProps extends React.HTMLProps<HTMLDivElement>
{
    Code: string,
    Mode: string,
    Theme: string,
    ReadOnly: boolean,
    OnCodeChange: Function
}

export class CodeEditor extends React.Component<CodeEditorProps, any>
{
    _editor: CodeMirror.Editor;
    _editorElement:HTMLDivElement;

    constructor(props: CodeEditorProps) {
        super(props);
    }

    componentDidMount () {
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
            hint: (CodeMirror as any).hint.sql,
            extraKeys: {
                "Cmd-Space": "autocomplete",
                "Ctrl-Space": "autocomplete"
            },
            hintOptions: {
                tables: {
                    "table1": [ "col_A", "col_B", "col_C" ],
                    "table2": [ "other_columns1", "other_columns2" ]
                }
            }
        };

		this._editor = CodeMirror(this._editorElement, options);

        this._editor.on("change", (editor: CodeMirror.Editor, change: CodeMirror.EditorChange) => {
            this.props.OnCodeChange(editor.getValue());
        });
    }

    componentDidUpdate(prevProps: CodeEditorProps, prevState: any) {
        if (!this._editor)
            return;

        this._editor.setValue(this.props.Code);
    }

    getCode() {
        return this._editor.getValue();
    }

    render() {
        return (
            <div className={this.props.className} style={this.props.style}
                 ref={d => this._editorElement = d}>
            </div>);
    }
}