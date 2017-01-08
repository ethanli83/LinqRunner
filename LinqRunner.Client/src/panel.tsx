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
        const containerStyle: React.CSSProperties = {
            ...this.props.style,
            display: 'flex',
            flexFlow: 'column'
        };

        const codeMirrorStyle: React.CSSProperties = {
            flexGrow: 1,
            flexBasis: 0
        };

        const ButtonStyle: React.CSSProperties = {
            flexGrow: 0
        };

        const style: React.CSSProperties = {
            ...this.props.style,
            display: 'flex',
            flexFlow: 'column',
            padding: '7px'
        }

        var children = React.Children.map(this.props.children, (child: React.ReactElement<any>) => {
            return React.cloneElement(child, { style: codeMirrorStyle });
        });

        return (
            <div style={style}>
                <div style={ButtonStyle}>
                    {this.props.Title}
                </div>
                {children}
            </div>
        );
    }
}