import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Request from 'superagent';

import '!style!css!./css/app.css';

import ActionBar from './action-bar';
import CodeEditor from './code-editor';
import QueryResult from './query-result';

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
        const flexBox: React.CSSProperties = {
            display: 'flex',
            height: '100%',
            flexFlow: 'column'
        };

        const flexColumn: React.CSSProperties = {
            display: 'flex',
            flexFlow: 'row',
            height: '50%',
            flexGrow: 1
        };

        const flexItem: React.CSSProperties = {
            flexGrow: 1,
            width: '100%',
            height: '100%'
        };

        return (
            <div style={flexBox}>
                <div style={flexColumn}>
                    <div style={flexItem}>
                        <CodeEditor className="dracula" Theme='dracula' Mode='text/x-csharp' Code={this.state.Query} 
                                    OnChange={this.onCodeChanged} OnRun={this.run}/>
                    </div>
                    <div style={flexItem}>
                        <CodeEditor Theme='dracula' Mode='text/x-sql' ReadOnly={true}
                                    Code={this.state.TranslatedScript}/>
                    </div>
                </div>
                <div style={flexColumn}>
                    <QueryResult style={flexItem} className='dracula' Result={this.state.QueryResult}></QueryResult>
                </div>
            </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));