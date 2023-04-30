import React, { useEffect } from "react";
import Chat from "../component/func/Chat";
import Info from "../component/func/Info";
import Player from "../component/func/Player";
import SearchBar from "../component/simple/SearchBar";
import { useNavigate } from "react-router-dom";
import { useListenerIsAuth, useLogout } from "../../state/redux/api/apiUser";
import { useListenerSearchStatus, useSearchAnime } from "../../state/redux/api/apiAnime";

function Main(props){

    const navigate = useNavigate();

    const isAuth = useListenerIsAuth();
    const searchStatus = useListenerSearchStatus();
    const logout = useLogout();
    const searchAnime = useSearchAnime();

    useEffect(() => {
        if(!isAuth){
            navigate('/auth');
        }
    }, [isAuth, navigate]);

    return (
        <>
            <div style={{float: "right"}}>
                <button onClick={logout}>Logout</button>
                    <Chat></Chat>
            </div>
            <div style={{textAlign: "center"}}>
                <SearchBar
                    getValue={(name) => searchAnime(name)}
                />
                <Info/>
                <br/>
                {searchStatus === "ok" && <Player/>}
            </div>
        </>
    )
}

export default Main;