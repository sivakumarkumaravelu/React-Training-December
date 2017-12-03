import React from 'react';
import ChildPropsDemo from './ChildPropsDemo';

export default class PropsDemo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="text-danger text-center">
                <h2>{this.props.headerProp}</h2> 
                <ChildPropsDemo data={this.props.headerProp}></ChildPropsDemo>
            </div>
        );
    }
}