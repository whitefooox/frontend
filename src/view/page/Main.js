import React, { useEffect } from "react";
import Chat from "../component/func/Chat";
import Info from "../component/func/Info";
import Player from "../component/func/Player";
import SearchBar from "../component/simple/SearchBar";
import { useNavigate } from "react-router-dom";
import { useIsAuthListener, useLogoutDispatcher, useSearchAnimeDispatcher, useSearchStatusListener } from "../../state/redux/api";

function Main(props){

    const navigate = useNavigate();

    const searchStatus = useSearchStatusListener();
    const isAuth = useIsAuthListener();
    const useLogout = useLogoutDispatcher();
    const searchAnime = useSearchAnimeDispatcher();

    useEffect(() => {
        if(!isAuth){
            navigate('/auth');
        }
    }, [isAuth, navigate]);

    return (
        <>
            <div style={{float: "right"}}>
                <button onClick={useLogout}>Logout</button>
                    <Chat></Chat>
            </div>
            <div style={{textAlign: "center"}}>
                <SearchBar
                    getValue={(name) => searchAnime(name)}
                />
                <Info
                    status={searchStatus}
                />
                <br/>
                {searchStatus === "ok" && <Player/>}
            </div>
        </>
    )
}

export default Main;