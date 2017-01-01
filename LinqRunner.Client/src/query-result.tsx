import * as React from 'react';

require('!style!css!./css/query-result.css');

interface QueryResultProps extends React.HTMLProps<HTMLDivElement>
{
    Result: Array<any>
}

export class QueryResult extends React.Component<QueryResultProps, any>
{
    constructor(props: QueryResultProps) 
    {
        super();
    }

    render() 
    {
        if (this.props.Result.length === 0)
            return <table style={this.props.style} className={this.props.className}/>;

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

        var style = Object.assign({ overflow: 'auto' }, this.props.style);
        return (<div style={style} className={this.props.className}>
            <table style={{ width: '100%', height: 'auto' }} className={'result-table'}>
                <thead><tr>{heads}</tr></thead>
                <tbody>{rows}</tbody>
            </table>
        </div>);
    }
}