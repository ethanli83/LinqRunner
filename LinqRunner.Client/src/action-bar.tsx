import * as React from 'react';

export interface ActionBarProps extends React.HTMLProps<HTMLDivElement> {
    onRunHandler: Function,
    ReportIssueModal: string,
    HasIssue: boolean
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
            <nav style={iconStyle}>
                <div className="nav-wrapper teal lighten-2">
                    <ul className="left">
                        <li>
                            <a href="#" onClick={() => this.props.onRunHandler()} className="btn-flat" style={linkStyle}>
                                <i className="material-icons left" style={iconStyle}>play_arrow</i>Run
                            </a>
                        </li>
                        <li>
                            <a href={'#' + this.props.ReportIssueModal} className={'btn-flat' + (this.props.HasIssue ? '' : ' disabled')} style={linkStyle}>
                                <i className="material-icons left" style={iconStyle}>error_outline</i>Report a issue
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}