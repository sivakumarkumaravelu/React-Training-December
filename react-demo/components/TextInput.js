import React, {Component} from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component{
	constructor(props,context){
		super(props,context)
		this.state={inputText:'Murthy'}
	}
	handleChange(event){
	     	this.setState({
			inputText:event.target.value
		})
	}
	render(){
	return	(
		<div>
			<div>Enter Name</div>
			<input type="text" placeholder="Enter some name here"
			value={this.state.inputText}
			onChange={this.handleChange.bind(this)}	/>
			<TextDisplay text={this.state.inputText}/>
		</div>
		)	
	}
}
export default TextInput