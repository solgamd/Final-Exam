import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface TemplateProps extends RouteComponentProps{ }
export interface TemplateState {
    
 }

class Template extends React.Component<TemplateProps, TemplateState> {
    constructor(props: TemplateProps) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        return (
            <div>
                <h1>Template</h1>
            </div>
        );
    }
};

export default Template;