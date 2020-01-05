import Home from './modules/home/Home.vue';
import CharactersView from './modules/characters/CharactersView.vue';
import PlacesView from './modules/places/PlacesView.vue';
import EpisodesView from './modules/episodes/EpisodesView.vue';
import VueRouter from 'vue-router';

const routes = [
    { path:"/", component: Home},
    { path:"/personajes", component: CharactersView},
    { path:"/lugares", component: PlacesView},
    { path:"/episodios", component: EpisodesView}
]

const router = new VueRouter({
    routes
})

export default router