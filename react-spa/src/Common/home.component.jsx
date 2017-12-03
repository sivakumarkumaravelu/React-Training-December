import React, { Component } from 'react';

class Home extends Component {
    render(){
        return (
        <div>
        <h1 className='bg-success'>
        Welcome to Sivakumar Car Factory </h1>
        <br/>
        <h2>Login Form</h2>
        <form className="container bg-danger">
           User Name : <input type="text" value="Murthy"/>
           <br/><br/>
           Password : <input type="password" value="welcome"/>
           <br/>
           <input type="submit" className="btn btn-primary" value="Login"/>
        </form>
        
        </div>
        )
    }
}
export default Home