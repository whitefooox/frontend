import React, { useContext, useState } from "react";
import Button from "../simple/Button";
import Select from "../simple/Select";
import AnimeServiceFactory from "../../../model/services/AnimeServices";
import AnimeContext from "../../context/AnimeContext";

function Player(props){

    const [season, setSeason] = useState(null);
    const [seria, setSeria] = useState(null);
    const [status, setStatus] = useState(null);
    const [source, setSource] = useState(null);

    const {anime} = useContext(AnimeContext);

    const animeService = AnimeServiceFactory.createInstance();

    function hundleButton(){
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
                getValue={(targetSeason) => {setSeason(targetSeason)}}
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