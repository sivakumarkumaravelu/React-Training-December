import React, { Component } from 'react'
import InputBox from './inputbox'

//Using ReactLink type approach - Do not use Mixin as it is obsolete now.
export default class Twowaybinding extends Component{

    constructor(){
        super();
        this.state={value:"siva"};
        console.log(this.state.value)
    }

    update(modifiedValue){
        this.setState({value:modifiedValue});
    }

    render(){
        //json prop
        var customValueLink={
            //value and requestChange are reserved keywords
            value: this.state.value,
            requestChange: this.update.bind(this)
        };

        return (
            <div className="well bg-success">
            <h2 className="text-sucess"> Two way binding in React </h2>
                <h4>{this.state.value}</h4>
                <InputBox customValueLink={customValueLink} />
            </div>

        );
    }


}