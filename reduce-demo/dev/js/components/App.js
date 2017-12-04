//React with Redux

import 'babel-polyfill';
import React, { Component } from 'react'

import {User} from './User'
import {Main} from './Main'

import {connect} from 'react-redux'

//export class App extends React.Component{

class App extends Component{

    render(){
        return(
            <div className = "container">
                <Main changeUsername = {()=> this.props.setName("Siva") } />
                <User username = {this.props.username} />
            </div>
        )
    }
}

//connect properties of redux to app, only one mapStatetoProps allowed
const mapStateToProps = (state) => {
    return {
        username: state.name,
        math: state.math
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch(
                {
                    type:"SET_NAME",
                    payload:name
                }
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);