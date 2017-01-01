import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Request from 'superagent';

import '!style!css!codemirror/theme/dracula.css';
import '!style!css!bootstrap/dist/css/bootstrap.min.css';

import 'codemirror/mode/clike/clike';
import 'codemirror/mode/sql/sql';
import '!style!css!./css/app.css';

import { ActionBar } from './action-bar';
import { CodeEditor } from './code-editor';
import { QueryResult } from './query-result';

interface AppState
{
    Query: string;
    TranslatedScript: string;
    QueryResult: Array<any>;
}

class App extends React.Component<any, AppState> 
{
    _query: string = 'db.Orders';
    _codeEditor: CodeEditor;

    constructor(props: any)
    {
        super(props);

        this.state = {
            Query: this._query,
            TranslatedScript: '',
            QueryResult: []
        }
    }

    run = (linq: string) => {
        var $this = this;
        Request
            .get('/api/query/db')
            .query({ linq: $this._query })
            .set('Accept', 'application/json')
            .end(function(err, res) {
                var result = res.body.result.map((o: any) => o) as Array<any>;
                console.log(result.length);
                $this.setState({
                    Query: $this._query,
                    TranslatedScript: res.body.sql,
                    QueryResult: result
                });
            });
    }

    onCodeChanged = (newCode: string) => {
        this._query = newCode;
    }

    render()
    {
        return (
            <div className="container-style">
                <div className="row-style">
                    <div className="col-style">
                        <CodeEditor style={{width: '100%', height: '95%'}} Theme="dracula" Mode="text/x-csharp" ReadOnly={false}
                                    Code={this.state.Query} OnCodeChange={(c: string) => this.onCodeChanged(c)}/>
                        <ActionBar style={{ width: '100%', height: '5%'}} className="dracula" onRunHandler={this.run}/>
                    </div>
                    <div className="col-style">
                        <CodeEditor style={{width: '100%', height: '100%'}} Theme="dracula" Mode="text/x-sql" ReadOnly={false}
                                    Code={this.state.TranslatedScript} OnCodeChange={() =>{}}/>
                    </div>
                </div>
                <div className="row-style">
                    <div className="full-col-style" style={{ overflow: 'scroll' }}>
                        <QueryResult style={{width: '100%', height: '100%'}} className="dracula" Result={this.state.QueryResult}></QueryResult>
                    </div>
                </div>
            </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));