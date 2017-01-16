import * as React from 'react';

interface PanelProps extends React.HTMLProps<HTMLDivElement>
{
    Title: string
}

export default class Panel extends React.Component<PanelProps, any>
{
    constructor(props: PanelProps) 
    {
        super();
    }

    render() 
    {
        const contentStyle: React.CSSProperties = {
            flexGrow: 1,
            flexBasis: 0
        };

        const titleStyle: React.CSSProperties = {
            flexGrow: 0,
            padding: '7px',
            color: '#ffffff'
        };

        const panel: React.CSSProperties = {
            ...this.props.style,
            display: 'flex',
            flexFlow: 'column',
            margin: '7px'
        }

        var children = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
            var style = { ...child.props.style, ...contentStyle };
            return React.cloneElement(child, { style: style });
        });

        return (
            <div style={panel} className="teal lighten-2 z-depth-3">
                <div style={titleStyle}>
                    {this.props.Title}
                </div>
                {children}
            </div>
        );
    }
}