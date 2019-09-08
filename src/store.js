import Vue from 'vue';
import Vuex from 'vuex';
import { getMoviesFromAPI, getMovieFromAPI } from '@/apiCalls/movies';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentSearch: {
            movies: [],
            totalPages: 0,
            currentPage: 1,
            searchText: ''
        },
        previosSearches: {},
        allMovies: {}
    },
    mutations: {
        setCurrentSearch(state, { Search, totalResults, searchText, page }) {
            state.currentSearch = {
                ...state.currentSearch,
                movies: Search,
                totalPages: Number(totalResults),
                searchText,
                currentPage: page
            };
        },
        changeCurrentPage(state, currentPage) {
            state.currentSearch = { ...state.currentSearch, currentPage };
        },
        addMovieToStore(state, { movie, id }) {
            state.allMovies[id] = movie;
        },
        addToPreviosSearches(state, { Search, totalResults, searchText, page, searchName }) {
            const data = {
                Search,
                totalResults: Number(totalResults),
                searchText,
                page
            };
            state.previosSearches[searchName] = data;
        }
    },
    actions: {
        async callMovies({ commit }, { searchText, page, searchName }) {
            const data = await getMoviesFromAPI(searchText, page);
            const defaultData = {
                Search: [],
                totalResults: 0,
                searchText: ''
            };
            if (data.Response === 'True') {
                commit('setCurrentSearch', { ...data, searchText, page });
                commit('addToPreviosSearches', { ...data, searchText, page, searchName });
            } else {
                commit('setCurrentSearch', defaultData);
            }
        },
        async callMovie({ commit }, id) {
            const movie = await getMovieFromAPI(id);
            const data = { movie, id };
            movie.Response === 'True' ? commit('addMovieToStore', data) : null;
        }
    }
});
