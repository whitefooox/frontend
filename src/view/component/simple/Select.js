import React from "react";

function Select(props){

    function handleSelect(e){
        props.getValue(e.target.value);
    }

    const options = [];

    for(const element in props.data){
        options.push(<option value={element} key={element}>{element}</option>)
    }

    return (
        <select onChange={handleSelect}>
            {options}
        </select>
    )
}

export default Select;