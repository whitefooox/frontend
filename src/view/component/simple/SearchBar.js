import React from "react";
import Button from "./Button";
import LabelInput from "./LabelInput";

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            query: ""
        }
        this.onChangeQuery = this.onChangeQuery.bind(this);
        this.onClickSearch = this.onClickSearch.bind(this);
    }

    onChangeQuery(query){
        this.setState({
            query: query
        });
    }

    onClickSearch(){
        this.props.getValue(this.state.query);
    }

    render(){
        return (
            <div>
                <LabelInput
                    name="Enter the name of the anime"
                    type="text"
                    getValue={this.onChangeQuery}
                />
                <Button
                    name="Search"
                    onClick={this.onClickSearch}
                />
            </div>
        )
    }
}

export default SearchBar;