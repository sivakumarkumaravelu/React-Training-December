import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component{
    render(){
        return (
        <div>
            <Header title="Siva kumar technologies"> </Header>
                <h1 className="text-success"> This is my Dashboard </h1>
            <Footer></Footer>
        </div>
        );
    }
}