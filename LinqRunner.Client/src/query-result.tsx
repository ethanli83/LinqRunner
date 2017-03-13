import * as React from 'react';

require('!style-loader!css-loader!./css/query-result.css');

interface QueryResultProps extends React.HTMLProps<HTMLDivElement>
{
    Result?: any,
    Running?: boolean,
    Error?: string
}

export default class QueryResult extends React.Component<QueryResultProps, any>
{
    constructor(props: QueryResultProps) 
    {
        super();
    }

    componentDidUpdate()
    {
        if (!this.props.Running && this.props.Result)
        {
            ($('ul.tabs') as any).tabs();
        }
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
            var keys = Object.keys(this.props.Result);
            var tabHeaders = keys
                .map((tableName: string, ti: number) => {
                    return (
                        <li className="tab teal lighten-2" key={ti}>
                            <a href={'#result_table_' + ti}>{ tableName }</a>
                        </li>
                    );
                });

            var tabs = keys
                .map((tableName: string, ti: number) => {
                    var result = this.props.Result[tableName];
                    
                    var heads = Object
                        .keys(result[0])
                        .map((p, pi) => {
                            return <th key={pi}>{p}</th>
                        });

                    var rows = result
                        .map((r: any, ri: number)=> {
                            var items = Object.keys(r).map((k, ki )=> <td key={ki}>{r[k]}</td>);
                            return <tr key={ri}>{items}</tr>;
                        });

                    return (
                        <div id={'result_table_' + ti} key={ti} style={{ width: '100%', overflow: 'auto', flexGrow: 1 }}>
                            <table className={'result-table'} style={{ width: '100%' }}>
                                <thead><tr>{heads}</tr></thead>
                                <tbody>{rows}</tbody>
                            </table>
                        </div>);
                });

            table = (
                <div style={{ width: '100%', display: 'flex', flexFlow: 'column' }}>
                    <div style={{ width: '100%', flexGrow: 0 }} className="teal lighten-2">
                        <ul className="tabs teal lighten-2">
                            {tabHeaders}
                        </ul>
                    </div>
                    {tabs}
                </div>
            );
        }

        var style: React.CSSProperties = { 
            ...this.props.style,
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