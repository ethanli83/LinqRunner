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
        const codeMirrorStyle: React.CSSProperties = {
            flexGrow: 1,
            flexBasis: 0
        };

        const ButtonStyle: React.CSSProperties = {
            flexGrow: 0,
            marginBottom: '7px'
        };

        const style: React.CSSProperties = {
            ...this.props.style,
            display: 'flex',
            flexFlow: 'column',
            padding: '7px',
            margin: '7px',
            borderBottomLeftRadius: '3px',
            borderBottomRightRadius: '3px',
            borderTopLeftRadius: '3px',
            borderTopRightRadius: '3px'
        }

        var children = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
            return React.cloneElement(child, { style: codeMirrorStyle });
        });

        return (
            <div style={style} className="teal lighten-2 z-depth-3">
                <div style={ButtonStyle}>
                    {this.props.Title}
                </div>
                {children}
            </div>
        );
    }
}