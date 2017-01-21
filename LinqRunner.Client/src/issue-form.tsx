import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Request from 'superagent';

declare var Materialize: any;

interface IssueFormProps extends React.HTMLProps<HTMLDivElement>
{
    Linq: string,
    Error: string
}

interface IssueFormState
{
    Title: string,
    Description: string
}

export default class IssueForm extends React.Component<IssueFormProps, any>
{
    constructor(props: IssueFormProps) 
    {
        super();

        this.state = {
            Title: 'Issue with query',
            Description: ''
        }
    }

    reportIssue = () => {
        var description = `${this.state.Description}
        
Query:
<pre>${this.props.Linq}</pre>

Error:
${this.props.Error}`;

        var issue = {
            title: this.state.Title,
            body: description,
            assignee: 'ethanli83',
            labels: [
                'bug'
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

    onTitleChange = (evt: React.FormEvent<HTMLInputElement>) => {
        this.setState({ ...this.state, Title: evt.currentTarget.value});
    }

    onDescriptionChange = (evt: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({ ...this.state, Description: evt.currentTarget.value});
    }

    render() {
        return (
            <div style={{ maxHeight: '400px' }} className="row">
                <form className="modal-content">
                    <div className="input-field col s12">
                        <input id="issue_title" type="text" value={this.state.Title} onChange={this.onTitleChange}/>
                        <label htmlFor="issue_title" className="active">Title</label>
                    </div>
                    <div className="input-field col s12">
                        <textarea id="issue_des" type="text" className="materialize-textarea" value={this.state.Description || ''}
                                  onChange={this.onDescriptionChange}/>
                        <label htmlFor="issue_des">Description</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="issue_linq" type="text" value={this.props.Linq} disabled/>
                        <label htmlFor="issue_linq" className="active">Query</label>
                    </div>
                    <div className="input-field col s12" style={{ height: '100%' }}>
                        <textarea id="issue_error" type="text" className="materialize-textarea" style={{ height: '100%' }} value={this.props.Error || ''} disabled/>
                        <label htmlFor="issue_error" className="active">Error</label>
                    </div>
                </form>
                <div className="modal-footer">
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
                    <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat" onClick={this.reportIssue}>Send</a>
                </div>
            </div>
        );
    }
}