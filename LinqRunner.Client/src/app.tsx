import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Request from 'superagent';

declare var Materialize: any;

import '!style-loader!css-loader!./css/app.css';

import ActionBar from './action-bar';
import CodeEditor from './code-editor';
import QueryResult from './query-result';
import Panel from './panel';

interface AppState {
    Query: string;
    TranslatedScript: string;
    ReportingIssue?: boolean;
    QueryResult?: {
        Result?: Array<any>;
        Running?: boolean;
        Error?: string;
    }
}

class App extends React.Component<any, AppState>
{
    _query: string = 'db.Orders.Select(o => o)';

    constructor(props: any) {
        super(props);

        this.state = {
            Query: this._query,
            TranslatedScript: ''
        }
    }

    run = () => {
        this.setState({
            ...this.state,
            Query: this._query,
            QueryResult: {
                Running: true,
                Error: null,
                Result: null
            }
        })

        var $this = this;

        Request
            .get('/api/query/db')
            .query({ linq: $this._query })
            .set('Accept', 'application/json')
            .end(function (err, res) {
                var msg: any = {
                    Running: false
                };

                if (err) {
                    msg.Error = err.response.body.Details;
                }
                else if (res.body.result) {
                    var result = res.body.result.map((o: any) => o) as Array<any>;
                    msg.Result = result;
                }

                $this.setState({
                    Query: $this._query,
                    TranslatedScript: res.body.sql || '',
                    QueryResult: msg
                });
            });
    }

    reportIssue = () => {
        if (!this.state.QueryResult || !this.state.QueryResult.Error)
            return;

        var description = `Query:
${this.state.Query}

Error:
${this.state.QueryResult.Error}`;

            var issue = {
                "title": "Issue with a query",
                "body": description,
                "assignee": "ethanli83",
                "labels": [
                    "bug"
                ]
            };

            Request
                .post('/api/issue/create')
                .set('Accept', 'application/json')
                .send(issue)
                .end(function (err, res) {
                    if (err) {
                        Materialize.toast('Fail to report', 2000);
                    } else {
                        Materialize.toast('Issue reported', 2000);
                    }
                });
    }

    onCodeChanged = (newCode: string) => {
        this._query = newCode;
    }

    render() {
        const flexBox: React.CSSProperties = {
            display: 'flex',
            flexFlow: 'column',
            height: '100%',
            minHeight: '1000px'
        };

        const flexColumn: React.CSSProperties = {
            display: 'flex',
            flexFlow: 'row wrap',
            flexGrow: 1
        };

        const flexItem: React.CSSProperties = {
            flexGrow: 1,
            flexBasis: 1,
            minWidth: '300px',
            minHeight: '200px'
        };

        var popout = <div/>;
        var hasIssue = this.state.QueryResult != null && this.state.QueryResult.Error != null;
        if (hasIssue) {
            popout = (
                <div style={{ maxHeight: '400px' }}>
                    <div className="modal-content">
                        <h4>Query</h4>
                        <p>{this.state.Query}</p>
                        <h4>Error</h4>
                        <p>{this.state.QueryResult.Error}</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.reportIssue}>Send</a>
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
                    </div>
                </div>
            );
        }

        return (
            <div style={flexBox}>
                <nav>
                    <div className="nav-wrapper teal lighten-2">
                        <a href="#" style={{ marginLeft: '7px' }} className="brand-logo">Linq Runner</a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <a href="https://github.com/ethanli83/EFSqlTranslator" target="_blank">
                                    <i style={{ display: 'block' }} className="fa fa-github small"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div style={flexColumn}>
                    <Panel style={flexItem} Title="Linq">
                        <CodeEditor className="dracula"
                            Theme='dracula' Mode='text/x-csharp' Code={this.state.Query}
                            OnChange={this.onCodeChanged} OnRun={this.run} />
                        <ActionBar onRunHandler={this.run} ReportIssueModal="modal1" HasIssue={hasIssue} />
                    </Panel>
                    <Panel style={flexItem} Title="Sql">
                        <CodeEditor className="dracula"
                            Theme='dracula' Mode='text/x-sql' ReadOnly={true}
                            Code={this.state.TranslatedScript} />
                    </Panel>
                </div>
                <div style={flexColumn}>
                    <Panel style={flexItem} Title="Result">
                        <QueryResult className='dracula' {...this.state.QueryResult}>
                        </QueryResult>
                    </Panel>
                </div>
                <div id="modal1" className="modal modal-fixed-footer">
                    {popout}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));