import React, { useContext, useEffect, useState } from "react";
import Button from "../simple/Button";
import Select from "../simple/Select";
import AnimeServiceFactory from "../../../model/services/AnimeServices";
import AnimeContext from "../../context/AnimeContext";

function Player(props){

    const {anime} = useContext(AnimeContext);

    const [season, setSeason] = useState(Object.keys(anime.data)[0]);
    const [seria, setSeria] = useState(Object.keys(anime.data[season])[0]);
    const [status, setStatus] = useState(null);
    const [source, setSource] = useState(null);

    function hundleButton(){
        const animeService = AnimeServiceFactory.createInstance();
        animeService.getSource(anime.data[season][seria])
        .then((url) => {
           setSource(url);
           setStatus('ok');
        })
        .catch(() => {
            setStatus('error');
        })
    }

    return (
        <>
            <Select 
                data={anime.data}
                getValue={(targetSeason) => {
                    setSeason(targetSeason);
                    setSeria(Object.keys(anime.data[targetSeason])[0]);
                }}
            />
            <Select 
                data={anime.data[season]}
                getValue={(targetSeria) => {setSeria(targetSeria)}}
            />
            <Button
                name="Play"
                onClick={hundleButton}
            />
            <br/>
            {status === "ok" && <iframe title="This is a unique title" allowFullScreen width="720" height="405" src={source}></iframe>}
        </>
    )
}

export default Player;