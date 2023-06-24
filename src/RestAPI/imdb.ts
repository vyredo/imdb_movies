import { MoviesMockData } from "../mockData/movies";

const defaultLang = 'en';
const apiKey = 'k_84kkttat'

export async function getMovies(lang: string = defaultLang){
    // const notification = useNotification();

    const url = `https://imdb-api.com/${lang}/API/Top250Movies/${apiKey}`;
    return MoviesMockData
    return fetch(url).then(res => res.json())
    .catch(err => {
        console.log(err);
        // notification.error({})
    })
}

