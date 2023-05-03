import { useState } from "react";
import classes from './SearchBar.module.css';
import Button from "../button/Button";

function SearchBar(props){
    
    const [query, setQuery] = useState('');

    return (
        <div className={classes.search__container}> 
            <input
                type="text"
                placeholder="Поиск аниме"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button onClick={() => props.getValue(query)} name="Найти"></Button>
        </div>
    )
}

export default SearchBar;