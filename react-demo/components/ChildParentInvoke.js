import React, {Component} from 'react';

//Parent component
class ChildParentInvoke extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : 'Initial data...'
        }
        //Best practise, during initilization bind it, even in run time it can be binded but dont do it.
        this.updateState = this.updateState.bind(this);
    }

    // event handler in parent
    updateState(event){
        this.setState({data:event.target.value});
        console.log(event.target.value);
    }
    
    render(){

        return(
            <div>
                <h1 className = 'well'> Parent component </h1>
                <h2 className = 'text-danger bg-success'> {this.state.data} </h2>
                <br/>
                <h2 className = 'container'> Child component </h2> <br/>

                <Content myDataProp = {this.state.data} updateStateProp = {this.updateState}> </Content>
            </div>
        );
    }
}

//child component
class Content extends Component{
    render(){
        return(
            <div>
                <input type = "text" value = {this.props.myDataProp} onChange = {this.props.updateStateProp} />
                <h3> {this.props.myDataProp} </h3>
            </div>
        );
    }
}

export default ChildParentInvoke;