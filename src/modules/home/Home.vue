<template>
    <div>
        <h1>Home</h1>
        <home-card  v-for="item in cards" :key="item.id" :homeCard="item"></home-card>
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
                {id : 1, title:"Personajes" ,descripcion : "Ver los personajes"},
                {id : 2, title:"Lugares" ,descripcion : "Ver los lugares"},
                {id : 3, title:"Episodios" ,descripcion : "Ver los episodios"},
            ]
        }
    },
}
</script>