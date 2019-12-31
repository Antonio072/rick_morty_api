<template>
  <div id="app">
    <div class="hero is-white is-gradient is-bold">
      <div class="hero-body">
        <div class="title">
          <h1 class="title">

          <span class="has-text-success">Rick and Morty</span>
            <span class="subtitle">Personajes</span>
          </h1>

          <button class="button is-success is-rounded" :click="fetchData()">
            Consultar
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <div class="column is-12-mobile is-4-desktop is-4-tablet" v-for="character in characters" :key="character.id">
          <div class="card" >
            <div class="card-header">
              <img :src="character.image" :alt="character.name">
          
            </div>
            <div class="card-content">
              <h3 class="title is-size-4">{{character.name}}</h3>
              <button class="button is-success is-rounded is-small">
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      characters: []
    };
  },

  created () {
    this.fetchData()
  },
  methods: {
    fetchData() {
      let result = axios
        .get("https://rickandmortyapi.com/api/character")
        .then(res => {
          this.characters = res.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
/* eslint-enable */
</script>
