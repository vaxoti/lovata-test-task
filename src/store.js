import Vue from 'vue';
import Vuex from 'vuex';
import { getMoviesFromAPI } from '@/apiCalls/movies';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentSearch: {
            movies: [],
            totalPages: 0,
            currentPage: 1,
            searchText: ''
        }
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
        }
    },
    actions: {
        async callMovies({ commit }, { searchText, page }) {
            const data = await getMoviesFromAPI(searchText, page);
            const defaultData = {
                Search: [],
                totalResults: 0,
                searchText: ''
            };
            data.Response === 'True'
                ? commit('setCurrentSearch', { ...data, searchText, page })
                : commit('setCurrentSearch', defaultData);
        }
    }
});
