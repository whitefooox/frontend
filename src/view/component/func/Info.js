import {React} from "react";
import Text from "../simple/Text";
import { useAnimeListener } from "../../../state/redux/api";

function Info(props){

    const anime = useAnimeListener();

    if(props.status === "search"){
        return (
            <Text color="black" text="Wait, the search is underway 🔎"/>
        )
    } else if (props.status === "ok"){
        return (
            <>
                <Text color="green" text="Found ✅"/>
                <h2>{anime.name}</h2>
                <img src={anime.image} alt=""/>
            </>
        )
    } else if(props.status === "error"){
        return (
            <Text color="red" text="Not found ❌"/>
        )
    }
}

export default Info;