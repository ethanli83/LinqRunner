import * as React from 'react';

export interface ActionBarProps extends React.HTMLProps<HTMLDivElement> {
    onRunHandler: Function,
    ReportIssueModal: string
}

interface ActionBarState {
    SqlScript: string,
    Orders: Array<Order>
}

interface Order {
    OrderId: Number,
    CustomerId: string 
}

const buttonStyle: React.CSSProperties = {
    height: '100%',
    marginRight: '3px'
};
    
// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class ActionBar extends React.Component<ActionBarProps, ActionBarState> {

    constructor(props: ActionBarProps) {
        super(props);

        this.state = {
            SqlScript: "select * from 1111",
            Orders: []
        };
    }

    render() {
        const iconStyle: React.CSSProperties = { 
            height: '40px', 
            lineHeight: '40px',
            marginRight: '5px'
        };

        const linkStyle: React.CSSProperties = {
            ...iconStyle,
            color: '#fff',
            marginRight: '0px',
            marginLeft: '0px',
            padding: '0 1rem',
            textTransform: 'none'
        }
        
        return (
            <div style={iconStyle} className="teal lighten-2">
                <a className="waves-effect waves-teal btn-flat teal lighten-2" style={linkStyle}
                        onClick={() => this.props.onRunHandler()}>
                    <i className="material-icons left" style={iconStyle}>play_arrow</i>Run
                </a>
                <a href={'#' + this.props.ReportIssueModal} className="waves-effect waves-teal btn-flat teal lighten-2" style={linkStyle}>
                    <i className="material-icons left" style={iconStyle}>error_outline</i>Report a issue
                </a>
            </div>
        );
    }
}