import React from 'react'

//Dumb component
class TextBox extends React.Component {
render() {
	return (
		<input className='form-control'
			name={this.props.name}
			type='text'
			value={this.props.value}
			onChange={this.props.onChange}/>
  	 );
 	}
} 
export default TextBox
