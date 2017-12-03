import React from 'react';
class InputBox extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <input type="text" valueLink={this.props.valueLink} />
        )
    }
}
export default InputBox