import * as React from 'react';

export interface ActionBarProps extends React.HTMLProps<HTMLDivElement> {
    onRunHandler: Function    
}

interface ActionBarState {
    SqlScript: string,
    Orders: Array<Order>
}

interface Order {
    OrderId: Number,
    CustomerId: string 
}

const buttonStyle = {
    height: '100%'
};
    
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class ActionBar extends React.Component<ActionBarProps, ActionBarState> {

    constructor(props: ActionBarProps) {
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
        return (<div style={this.props.style} className={this.props.className}>
            <button style={buttonStyle} onClick={e => this.onRun()}>RUN</button>
        </div>);
    }
}