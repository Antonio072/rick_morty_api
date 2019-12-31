<template>
  <div id="app">
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <div class="title">
          <h1 class="title">

          <span class="has-text-success">Rick and Morty</span>
            <span class="subtitle">Personajes</span>
          </h1>

        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <div class="column is-12-mobile is-4-desktop is-4-tablet" v-for="character in characters" :key="character.id">
          <CharactersCard :character="character"/>
        </div>
      </div>

      <nav class="pagination" role="navigation" aria-label="pagination">

        <a class="pagination-previous" v-on:click="changePage(page-1)">Anterior</a>

        <ul class="pagination-list">
          <li><a  class="pagination-link is-current" >{{page}}</a></li>
        </ul>
        <a class="pagination-next" v-on:click="changePage(page+1)">Siguiente</a>
      </nav>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import axios from "axios";
import CharactersCard from '@/components/CharactersCard.vue';

export default {
  name: "app",
  components: {
    CharactersCard,
  },
  data() {
    return {
      characters: [],
      page: 1,
      pages: 1
    };
  },

  created () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const params ={
        page : this.page
      }
      let result = axios
        .get("https://rickandmortyapi.com/api/character/", {params})
        .then(res => {
          this.characters = res.data.results
          this.pages = res.data.info.pages
          
        })
        .catch(error => {
          console.error(error);
        });
    },
    changePage(page){
        this.page = page<=0 || page >=this.pages ? this.page : page
        this.fetchData()
    }
  }
};
/* eslint-enable */
</script>
