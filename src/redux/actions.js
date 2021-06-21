import axios from 'axios';
import { FILTER_BY_NAME, GET_VIDEOGAMES, FILTER_BY_GENRES, SEARCH_BY_NAME, SORT_BY_ALPHABET, SORT_BY_RATING, GET_VIDEOGAME_DETAIL } from './actionsNames';

export function getVideogames() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/videogames');
        dispatch({ type: GET_VIDEOGAMES, payload: response.data });
    }
}
export function getVideogameDetail(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogame/${id}`);
        dispatch({ type: GET_VIDEOGAME_DETAIL, payload: response.data });
    }
}
export function searchByName(name) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        dispatch({ type: SEARCH_BY_NAME, payload: response.data });
    }
}
export function filterByName(input) {
    return { type: FILTER_BY_NAME, payload: input };
}

export function filterByGenres(genre) {
    return { type: FILTER_BY_GENRES, payload: genre };
}

export function sortByAlphabet(payload) {
    return { type: SORT_BY_ALPHABET, payload: payload };
}

export function sortByRating(payload) {
    return { type: SORT_BY_RATING, payload: payload };
}