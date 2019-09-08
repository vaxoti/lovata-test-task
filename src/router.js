import Vue from 'vue';
import Router from 'vue-router';
import Movies from './views/Movies.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/movies',
            name: 'movies',
            component: Movies
        },
        {
            path: '/movies/:movieID',
            name: 'aboutMovie',
            component: () => import(/* webpackChunkName: "about" */ './views/AboutMovie.vue')
        },
        {
            path: '/previous-searches',
            name: 'previousSearches',
            component: () => import(/* webpackChunkName: "about" */ './views/PreviousSearches.vue')
        }
    ]
});
