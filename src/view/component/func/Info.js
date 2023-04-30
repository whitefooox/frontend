import {React} from "react";
import Text from "../simple/Text";
import { useListenerAnime, useListenerSearchStatus } from "../../../state/redux/api/apiAnime";

function Info(props){

    const anime = useListenerAnime();
    const statusSearch = useListenerSearchStatus();

    if(statusSearch === "search"){
        return (
            <Text color="black" text="Wait, the search is underway 🔎"/>
        )
    } else if (statusSearch === "ok"){
        return (
            <>
                <Text color="green" text="Found ✅"/>
                <h2>{anime.name}</h2>
                <img src={anime.image} alt=""/>
            </>
        )
    } else if(statusSearch === "error"){
        return (
            <Text color="red" text="Not found ❌"/>
        )
    }
}

export default Info;