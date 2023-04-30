import React, { useState } from "react";
import Button from "../simple/button/Button";
import Select from "../simple/Select";
import { useAnimeListener, useGetSourceDispatcher, useSourceListener, useSourceStatusListener } from "../../../state/redux/api";

function Player(props){

    const anime = useAnimeListener();
    const [season, setSeason] = useState(Object.keys(anime.data)[0]);
    const [seria, setSeria] = useState(Object.keys(anime.data[season])[0]);

    const status = useSourceStatusListener();
    const source = useSourceListener();
    const getSource = useGetSourceDispatcher();

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
                onClick={() => getSource(anime.data[season][seria])}
            />
            <br/>
            {status === "ok" && <iframe title="This is a unique title" allowFullScreen width="720" height="405" src={source}></iframe>}
        </>
    )
}

export default Player;