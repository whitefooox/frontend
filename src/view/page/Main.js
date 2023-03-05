import React from "react";
import AnimeServiceFactory from "../../model/services/AnimeServices";
import Info from "../component/func/Info";
import Player from "../component/func/Player";
import SearchBar from "../component/simple/SearchBar";

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            status: null,
            anime: null,
        };
        this.animeService = AnimeServiceFactory.createInstance();
        this.animeService.subscribe((anime) => {
            this.getAnime(anime);
        })
        this.getSearch = this.getSearch.bind(this);
        this.getAnime = this.getAnime.bind(this);
    }

    getSearch(query){
        this.setState({
            status: "search"
        })
        this.animeService.search(query);
    }

    getAnime(anime){
        if(anime === null){
            this.setState({
                status: "error"
            })
        } else {
            this.setState({
                status: "ok"
            })
        }
        this.setState({
            anime: anime
        })
    }

    render(){
        return (
            <div style={{textAlign: "center"}}>
                <SearchBar
                    getValue={this.getSearch}
                />
                <Info
                    status={this.state.status}
                    name={this.state.status === "ok" ? this.state.anime.name : null}
                    img={this.state.status === "ok" ? this.state.anime.image : null}
                />
                <br/>
                {this.state.status === "ok" && <Player anime={this.state.anime}/>}
            </div>
        )
    }
}

export default Main;