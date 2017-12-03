import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class RefsApp extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    updateState(e){
        this.setState({data:e.target.value});
    }

    clearInput(){
        this.setState({data:''});
        //debugger;
        ReactDOM.findDOMNode(this.refs.username).focus;
    }

    render(){
        return(
            <div>
            <h3> Login form </h3>
            User name <input value={this.state.data} onChange={this.updateState} ref = "username" />
            <br/>
            Password: <input value = {this.state.data} onChange = {this.updateState} ref = "password" />

            <button className="btn-success" onClick = {this.clearInput}> CLEAR </button>
            <h4> {this.state.data} </h4>
            </div>
        )

    }
}

