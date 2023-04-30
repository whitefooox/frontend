import React, { useState } from "react";
import Button from "../simple/button/Button";
import Select from "../simple/Select";
import { useGetSource, useListenerAnime, useListenerSource, useListenerSourceStatus } from "../../../state/redux/api/apiAnime";

function Player(props){

    const anime = useListenerAnime();
    const [season, setSeason] = useState(Object.keys(anime.data)[0]);
    const [seria, setSeria] = useState(Object.keys(anime.data[season])[0]);

    const status = useListenerSourceStatus();
    const source = useListenerSource();
    const getSource = useGetSource();

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