<template>
    <div class="container">
        <div class="columns">
            <div class="column" style="padding:50px" v-for="item in cards" :key="item.id">
                 <home-card   :homeCard="item"></home-card>
            </div>
        </div>
       
    </div>
</template>

<script>
/* eslint-disable */
import HomeCard from './HomeCard.vue';

export default {
    components: {
        HomeCard,
    },
    data() {
        return {
            cards: [
                {id : 1, title:"Personajes" ,  path:"/personajes", description : "Ver los personajes", image:"https://images-na.ssl-images-amazon.com/images/I/71JthPvKpML._AC_SY741_.jpg"},
                {id : 2, title:"Lugares" , path:"/lugares", description : "Ver los lugares", image : "https://vignette.wikia.nocookie.net/rickandmorty/images/3/39/S3e5_resort.png/revision/latest?cb=20171119203200"},
                {id : 3, title:"Episodios" ,   path:"/episodios", description : "Ver los episodios", image: "https://img1.looper.com/img/gallery/the-real-reason-rick-and-morty-season-4-only-has-five-episodes/intro-1573391090.jpg" },
            ]
        }
    },
}
</script>