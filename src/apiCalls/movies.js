import axios from 'axios';
import { MOVIES_API_URL, MOVIES_API_TOKEN } from '@/utils/constants';

export function getMoviesFromAPI(searchText, page = '1') {
    const url = `${MOVIES_API_URL}?s=${searchText}&apikey=${MOVIES_API_TOKEN}&page=${page}`;
    return axios.get(url).then(res => {
        return res.data;
    });
}
