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

        <div class="field has-addons is-pulled-right">
          <div class="control">
            <input
              type="text"
              class="input is-rounded"
              v-model="search"
              v-on:keyup.enter="searchData()"
            />
          </div>
          <div class="control">
            <button class="button is-success is-rounded" v-on:click="searchData()">
              <i class="material-icons">search</i>Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <div
          class="column is-12-mobile is-4-desktop is-4-tablet"
          v-for="character in characters"
          :key="character.id"
        >
          <CharactersCard @showCharacterModal="showCharacterModal" :character="character" />
        </div>
      </div>

      <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous" v-on:click="changePage(page-1)">Anterior</a>

        <ul class="pagination-list">
          <li>
            <a class="pagination-link is-current">{{page}}</a>
          </li>
        </ul>
        <a class="pagination-next" v-on:click="changePage(page+1)">Siguiente</a>
      </nav>
    </div>

    <div class="modal" :class="{ 'is-active': modal}" v-if="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <div class="columns is-centered">
            <div class="column">
              <div class="is-pulled-right">
                <span
                  v-if="currentCharacter.status == 'Alive'"
                  class="tag is-success is-medium"
                >Vivo</span>
                <span
                  v-else-if="currentCharacter.status == 'Dead'"
                  class="tag is-danger is-medium"
                >Muerto</span>
                <span v-else class="tag is-warning is-medium">Desconocido</span>
              </div>
              <figure class="image">
                <img class="is-rounded" :src="currentCharacter.image" :alt="currentCharacter.name" />
              </figure>

              <p class="modal-card-title">
                <strong>{{currentCharacter.name}}</strong>
              </p>
              <p class>
                Especie:
                <strong>{{currentCharacter.species}}</strong>
              </p>

              <p class>
                Genero:
                <strong>{{currentCharacter.gender}}</strong>
              </p>
              <p class>
                Ubicacion:
                <strong>{{currentCharacter.location.name}}</strong>
              </p>
              <p class>
                Episodes:
                <strong>{{currentCharacter.episode.length}}</strong>
              </p>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="modal = !modal">Cerrar</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import axios from "axios";
import CharactersCard from "@/components/CharactersCard.vue";

export default {
  name: "app",
  components: {
    CharactersCard
  },
  data() {
    return {
      characters: [],
      page: 1,
      pages: 1,
      search: "",
      modal: false,
      currentCharacter: {}
    };
  },

  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const params = {
        page: this.page,
        name: this.search
      };
      let result = axios
        .get("https://rickandmortyapi.com/api/character/", { params })
        .then(res => {
          this.characters = res.data.results;
          this.pages = res.data.info.pages;
        })
        .catch(error => {
          console.error(error);
        });
    },
    changePage(page) {
      this.page = page <= 0 || page >= this.pages ? this.page : page;
      this.fetchData();
    },
    searchData() {
      if (this.search.length != 0) {
        this.page = 1;
        this.fetchData();
      }
      console.log(this.search);
    },
    showCharacterModal(id) {
      console.log(id);
      this.fetchCharacter(id);
    },
    async fetchCharacter(id) {
      let result = await axios.get(
        "https://rickandmortyapi.com/api/character/" + id
      );

      this.currentCharacter = result.data;
      this.modal = true;

      console.log(this.currentCharacter);
    }
  }
};
/* eslint-enable */
</script>
