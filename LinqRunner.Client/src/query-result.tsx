import * as React from 'react';

require('!style-loader!css-loader!./css/query-result.css');

interface QueryResultProps extends React.HTMLProps<HTMLDivElement>
{
    Result?: Array<any>,
    Running?: boolean,
    Error?: string
}

export default class QueryResult extends React.Component<QueryResultProps, any>
{
    constructor(props: QueryResultProps) 
    {
        super();
    }

    render() 
    {
        var table;
        if (this.props.Running)
        {
            table = (
                <div className="progress" style={{ alignSelf: 'center', margin: '0px 77px' }}>
                    <div className="indeterminate"></div>
                </div>
            );
        }
        else if (this.props.Error)
        {
            table = (
                <div>
                    {this.props.Error}
                </div>
            )
        }
        else if (!this.props.Result)
        {
            table = <table className="result-table"/>
        }
        else
        {
            var heads = Object
                .keys(this.props.Result[0])
                .map((p, pi) => {
                    return <th key={pi}>{p}</th>
                });

            var rows = this.props.Result
                .map((r, ri)=> {
                    var items = Object.keys(r).map((k, ki )=> <td key={ki}>{r[k]}</td>);
                    return <tr key={ri}>{items}</tr>;
                });

            table = (
                <table className={'result-table'}>
                    <thead><tr>{heads}</tr></thead>
                    <tbody>{rows}</tbody>
                </table>
            );
        }

        var style: React.CSSProperties = { 
            ...this.props.style,
            overflow: 'auto',
            display: 'flex',
            justifyContent: 'center'
        };

        return (
            <div className={this.props.className} style={style}>
                {table}
            </div>
        );
    }
}