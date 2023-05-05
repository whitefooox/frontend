import {React} from "react";
import { useListenerAnime, useListenerSearchStatus } from "../../../state/redux/api/apiAnime";
import classes from './Info.module.css';

function Info(props){

    const anime = useListenerAnime();
    const statusSearch = useListenerSearchStatus();

    if(statusSearch === "search"){
        return (
            <div className={classes.anime_card}>
                <img className={classes.anime_card__image} src="https://vk.com/sticker/1-75577-256" alt="Anime Image"></img>
                <h2 className={classes.anime_card__title}>Поиск</h2>
            </div>
        )
    } else if (statusSearch === "ok"){
        return (
            <div className={classes.anime_card}>
                <img className={classes.anime_card__image} src={anime.image} alt="Anime Image"></img>
                <h2 className={classes.anime_card__title}>{anime.name}</h2>
                <span className={classes.anime_card__description}>
                    {anime.description}
                </span>
            </div>
        )
    } else if(statusSearch === "error"){
        return (
            <div className={classes.anime_card}>
                <img className={classes.anime_card__image} src="https://vk.com/sticker/1-86063-256" alt="Anime Image"></img>
                <h2 className={classes.anime_card__title}>Не найдено</h2>
            </div>
        )
    } else {
        return (
            <div className={classes.anime_card}>
                <img className={classes.anime_card__hello} src="https://vk.com/sticker/1-86078-256" alt="Anime Image"></img>
                <h1>Добро пожаловать!</h1>
                <p>Мы рады приветствовать вас на нашем сайте по просмотру аниме! Здесь вы найдете самые популярные и интересные аниме-сериалы, а также сможете делиться своими впечатлениями с другими пользователями.</p>
            </div>
        )
    }
}

export default Info;