"use strict";
const React = require("react");
require('!style!css!./css/query-result.css');
class QueryResult extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        if (this.props.Result.length === 0)
            return React.createElement("table", { style: this.props.style, className: this.props.className });
        var heads = Object
            .keys(this.props.Result[0])
            .map((p, pi) => {
            return React.createElement("th", { key: pi }, p);
        });
        var rows = this.props.Result
            .map((r, ri) => {
            var items = Object.keys(r).map((k, ki) => React.createElement("td", { key: ki }, r[k]));
            return React.createElement("tr", { key: ri }, items);
        });
        var style = Object.assign({ overflow: 'auto' }, this.props.style);
        return (React.createElement("div", { style: style, className: this.props.className },
            React.createElement("table", { style: { width: '100%', height: 'auto' }, className: 'result-table' },
                React.createElement("thead", null,
                    React.createElement("tr", null, heads)),
                React.createElement("tbody", null, rows))));
    }
}
exports.QueryResult = QueryResult;
//# sourceMappingURL=query-result.js.map