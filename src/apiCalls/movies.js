import axios from 'axios';
import { MOVIES_API_URL, MOVIES_API_TOKEN } from '@/utils/constants';

export function getMoviesFromAPI(searchText, page) {
    const url = `${MOVIES_API_URL}?s=${searchText}&apikey=${MOVIES_API_TOKEN}&page=${page}`;
    return axios.get(url).then(res => {
        return res.data;
    });
}
export function getMovieFromAPI(id) {
    const url = `${MOVIES_API_URL}?i=${id}&apikey=${MOVIES_API_TOKEN}`;
    return axios.get(url).then(res => {
        return res.data;
    });
}
