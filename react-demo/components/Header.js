import React from 'react'

export default class Header extends React.Component{
    constructor(){
        //Initializes the state with default JSON object
        super();
        //State is within the component.
        this.state = {message:'Hello Mr Kumar'};
        //Props is among components, this.props.title
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.state.message}</h1>
            </div>

        );
    }
}