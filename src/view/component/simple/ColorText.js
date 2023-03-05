import React from "react";

class ColorText extends React.Component {

    render(){
        return (
            <p style={{color: this.props.color}}>{this.props.text}</p>
        )
    }
}

export default ColorText;