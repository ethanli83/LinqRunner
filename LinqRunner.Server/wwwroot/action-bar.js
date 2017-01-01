"use strict";
const React = require("react");
const buttonStyle = {
    height: '100%'
};
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
class ActionBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SqlScript: "select * from 1111",
            Orders: []
        };
    }
    onRun() {
        this.props.onRunHandler();
    }
    render() {
        return (React.createElement("div", { style: this.props.style, className: this.props.className },
            React.createElement("button", { style: buttonStyle, onClick: e => this.onRun() }, "RUN")));
    }
}
exports.ActionBar = ActionBar;
//# sourceMappingURL=action-bar.js.map