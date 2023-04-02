import React, { useState } from "react";
import AnimeServiceFactory from "../../model/services/AnimeServices";
import Chat from "../component/func/Chat";
import Info from "../component/func/Info";
import Player from "../component/func/Player";
import SearchBar from "../component/simple/SearchBar";
import AnimeContext from "../context/AnimeContext";

function Main(props){

    const [status, setStatus] = useState('');
    const [anime, setAnime] = useState(null);

    const animeService = AnimeServiceFactory.createInstance();
    animeService.subscribe((anime) => {
        if(anime === null){
            setStatus('error');
        } else {
            setStatus('ok');
            setAnime(anime);
        }
    })

    function handleSearch(query){
        setStatus("search");
        animeService.search(query);
    }

    return (
        <AnimeContext.Provider value= {{anime: anime}} >
            <div style={{display: "block"}}>
                <div style={{float: "left"}}>
                    <div style={{textAlign: "center"}}>
                        <SearchBar
                            getValue={handleSearch}
                        />
                        <Info
                            status={status}
                        />
                        <br/>
                        {status === "ok" && <Player/>}
                    </div>
                </div>
                <div style={{float: "right"}}>
                    <Chat></Chat>
                </div>
            </div>
        </AnimeContext.Provider>
    )
}

export default Main;