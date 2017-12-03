import React, { Component } from 'react';
class ComponentLifeCycle extends Component{

    constructor(props){
        super(props);

        this.state = {
            data:0,
            msg: 'Initial Data...',
            newmsg: 'Nodata'
        }

        this.setNewNumber=this.setNewNumber.bind(this);
        this.updateState=this.updateState.bind(this);
    }

    setNewNumber(){
        this.setState({data:this.state.data+1})
    }

    updateState(e){
        this.setState({msg:e.target.value});
    }

    render(){
        return (
            <div className="text-center">
                <button className="btn-success" onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data} ></Content>
                <br/>

                <input type = "text" value = {this.state.msg} onChange ={this.updateState} />
                <h3> {this.state.msg} </h3>
            </div>
        )
    }
}

class Content extends Component {
        componentWillMount(){
            //loca data from cache (Local storage or make AJAX calls)
            console.log('Component WILL MOUNT! -Make ajax calls here');
        }

        componentDidMount(){
            console.log('Component DID MOUNT!-');
        }

        componentWillReceiveProps(){
            console.log('WILL RECEIVE PROPS! set default props here and validate props here')
        }
        
        shouldComponentUpdate(newProps, newState){
            console.log('Decide whether to re-render or not')
            console.log('New state is: '+ newState)
            return true;
        }

        componentWillUpdate(nextProps, nextState){
            //-check propstate before updating state
            console.log('Component WILL UPDATE!')
        }

        componentDidUpdate(prevProps, prevState){
            console.log('Component DID UPDATE! - you can roll back state here to previous state')
        }

        componentWillUnmount(){
            console.log('Component WILL UNMOUNT! - release the resources here or cache data here')
        }

        render(){
            return (
                <div>
                    <h3>{this.props.myNumber}</h3>
                </div>
            )
        }

}
export default ComponentLifeCycle