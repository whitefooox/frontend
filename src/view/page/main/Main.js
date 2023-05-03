import React, { useEffect } from "react";
import Info from "../../component/info/Info";
import Player from "../../component/player/Player";
import SearchBar from "../../component/searchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useListenerIsAuth, useLogout } from "../../../state/redux/api/apiUser";
import { useListenerSearchStatus, useSearchAnime } from "../../../state/redux/api/apiAnime";
import classes from './Main.module.css';
import Button from "../../component/button/Button";
import Chat from "../../component/chat/Chat";

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
        <div className={classes.main_page__wrapper}>
            <header>
                <SearchBar
                    getValue={(name) => searchAnime(name)}
                />
                <div className={classes.button_logout__wrapper}>
                    <Button onClick={logout} name="Выйти"></Button>
                </div>
            </header>
            <div className={classes.content__wrapper}>
                <div className={classes.info__wrapper}>
                    <Info></Info>
                    {searchStatus === "ok" && <Player/>}
                </div>
                <Chat></Chat>
            </div>
        </div>
    )
}

export default Main;