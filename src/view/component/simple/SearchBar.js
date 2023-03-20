import React, { useState } from "react";
import Button from "./Button";
import LabelInput from "./LabelInput";

function SearchBar(props){

    const [query, setQuery] = useState('');

    function handleLabelInput(query){
        setQuery(query);
    }

    function handleButton(){
        props.getValue(query);
    }

    return (
        <div>
            <LabelInput
                name="Enter the name of the anime"
                type="text"
                getValue={handleLabelInput}
            />
            <Button
                name="Search"
                onClick={handleButton}
            />
        </div>
    )
}

export default SearchBar;