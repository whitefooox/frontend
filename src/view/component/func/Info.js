import {useContext, React} from "react";
import ColorText from "../simple/ColorText";
import AnimeContext from "../../context/AnimeContext";

function Info(props){

    const {anime} = useContext(AnimeContext);

    if(props.status === "search"){
        return (
            <ColorText color="black" text="Wait, the search is underway 🔎"/>
        )
    } else if (props.status === "ok"){
        return (
            <>
                <ColorText color="green" text="Found ✅"/>
                <h2>{anime.name}</h2>
                <img src={anime.image} alt=""/>
            </>
        )
    } else if(props.status === "error"){
        return (
            <ColorText color="red" text="Not found ❌"/>
        )
    }
}

export default Info;