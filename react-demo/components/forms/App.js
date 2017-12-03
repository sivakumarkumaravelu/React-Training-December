
	//controlled component with form control

    import React, { Component } from 'react'
    import TextBox from './TextBox'
    
    class FormApp extends Component {
        constructor(props){
            super(props)
            this.state={ 
                form: { firstName: 'Sivakumar', lastName: 'Kumaravelu'} 
            }
        }
    
    onChange(event){
        this.state.form[event.target.name] = event.target.value;
        this.setState({form: this.state.form});
    }
    
    onSubmit(event) {
        event.preventDefault();
      alert(
       'Form submitted:'+ this.state.form.firstName+' '+
            this.state.form.lastName);
      }
    render(){
        var self = this;
        return (		
            <form onSubmit={this.onSubmit.bind(this)}>
            <h3 className='bg-success'>Employee Form</h3>
            <TextBox name='firstName'
                value={this.state.form.firstName}
                onChange={this.onChange.bind(this)}/>
    
            <TextBox name='lastName'
                value={this.state.form.lastName}
                onChange={this.onChange.bind(this)}/>
    
            <button className='btn btn-success'
                type='submit'>Submit</button>
            </form>		
        );
      }
    }
    export default FormApp