import React from "react";
import Button from "../simple/Button";
import Select from "../simple/Select";
import AnimeServiceFactory from "../../../model/services/AnimeServices";

class Player extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            anime: this.props.anime,
            season: null,
            seria: null,
            source: null,
            status: null
        };
        this.animeService = AnimeServiceFactory.createInstance();
        this.animeService.subscribe((anime) => {
            this.getAnime(anime);
        })
        this.getSeason = this.getSeason.bind(this);
        this.getSeria = this.getSeria.bind(this);
        this.getSource = this.getSource.bind(this);
    }

    getSeason(season){
        this.setState({
            season: season
        });
    }

    getSeria(seria){
        this.setState({
            seria: seria
        });
    }

    getSource(){
        this.animeService.getSource(this.state.anime.data[this.state.season][this.state.seria])
        .then((url) => {
            this.setState({
                source: url,
                status: "ok"
            });
        })
        .catch(() => {
            this.setState({
                status: "error"
            })
        })
    }

    render(){
        return (
            <>
                <Select 
                    data={this.state.anime.data}
                    getValue={this.getSeason}
                />
                <Select 
                    data={this.state.anime.data[this.state.season]}
                    getValue={this.getSeria}
                />
                <Button
                    name="Play"
                    onClick={this.getSource}
                />
                <br/>
                {this.state.status === "ok" && <iframe title="This is a unique title" allowFullScreen width="720" height="405" src={this.state.source}></iframe>}
            </>
        )
    }
}

export default Player;