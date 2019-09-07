import Vue from 'vue';
import Vuex from 'vuex';
import { getMoviesFromAPI } from '@/apiCalls/movies';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        movies: [1, 2]
    },
    mutations: {
        setMoviesToStore(state, data) {
            state.movies = data;
        }
    },
    actions: {
        async callMovies({ commit }, searchText) {
            const data = await getMoviesFromAPI(searchText);
            data.Response === 'True' ? commit('setMoviesToStore', data.Search) : commit('setMoviesToStore', []);
        }
    }
});
