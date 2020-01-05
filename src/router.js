import Home from './modules/home/Home.vue';
import About from '@/components/About.vue';
import Profile from '@/components/Profile.vue';
import VueRouter from 'vue-router';

const routes = [
    { path:"/", component: Home},
    { path:"/about", component: About},
    { path:"/home", component: Home},
    { path:"/profile", component: Profile}
]

const router = new VueRouter({
    routes
})

export default router