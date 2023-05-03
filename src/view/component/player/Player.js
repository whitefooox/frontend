import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import Select from "../select/Select";
import { useGetSource, useListenerAnime, useListenerSource, useListenerSourceStatus } from "../../../state/redux/api/apiAnime";
import classes from './Player.module.css';

function Player(props){

    const anime = useListenerAnime();
    const [season, setSeason] = useState(Object.keys(anime.data)[0]);
    const [seria, setSeria] = useState(Object.keys(anime.data[season])[0]);

    const status = useListenerSourceStatus();
    const source = useListenerSource();
    const getSource = useGetSource();

    useEffect(() => {
        getSource(anime.data[season][seria]);
    }, [anime, season, seria])

    return (
        <div className={classes.player__container}>
            <div className={classes.select__container}>
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
                    name="Смотреть"
                    onClick={() => getSource(anime.data[season][seria])}
                />
            </div>
            {status === "ok" && <iframe style={{borderRadius: "8px"}} title="This is a unique title" allowFullScreen width="720" height="405" src={source}></iframe>}
        </div>
    )
}

export default Player;