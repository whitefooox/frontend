import React from "react";

class Select extends React.Component {

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.props.getValue(e.target.value);
    }

    render(){
        const options = []
        for(const element in this.props.data){
            options.push(<option value={element} key={element}>{element}</option>)
        }
        return (
            <select onChange={this.onChange}>
                {options}
            </select>
        )
    }
}

export default Select;