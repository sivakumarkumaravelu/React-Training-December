import React from 'react';

export default class ChildPropsDemo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="text-danger text-center">
                <h2>{this.props.data}</h2>
            </div>
        );
    }

}