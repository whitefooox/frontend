import React, { useEffect, useState } from "react";
import AnimeServiceFactory from "../../model/services/AnimeServices";
import Chat from "../component/func/Chat";
import Info from "../component/func/Info";
import Player from "../component/func/Player";
import SearchBar from "../component/simple/SearchBar";
import AnimeContext from "../context/AnimeContext";
import { useNavigate } from "react-router-dom";
import { useIsAuthListener, useLogoutDispatcher } from "../../state/redux/api";

function Main(props){

    const navigate = useNavigate();

    const [status, setStatus] = useState('');
    const [anime, setAnime] = useState(null);

    const isAuth = useIsAuthListener();
    const useLogout = useLogoutDispatcher();

    useEffect(() => {
        if(!isAuth){
            navigate('/auth');
        }
    }, [isAuth]);

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
        <AnimeContext.Provider value = {{anime: anime}} >
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
                <button onClick={() => useLogout()}>Logout</button>
                    <Chat></Chat>
                </div>
            </div>
        </AnimeContext.Provider>
    )
}

export default Main;