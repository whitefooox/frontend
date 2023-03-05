import React from "react";

class LabelInput extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.getValue(e.target.value);
    }

    render(){
        return (
            <>
                <label>{this.props.name}</label>
                <br/>
                <input type={this.props.type} onChange={this.handleChange}></input>
            </>
        )
    }
}

export default LabelInput;