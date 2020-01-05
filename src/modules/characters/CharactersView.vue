<template>
  <div class="container">
      <main-title title="Personajes" v-on:searchData="searchData($event)"/>
      
    <div class="container">
      <pagination :page="page" v-on:changePage="changePage($event)" />
      <div class="columns is-desktop is-mobile is-tablet is-multiline is-centered">
        <div
          class="column is-12-mobile is-4-desktop is-4-tablet"
          v-for="character in characters"
          :key="character.id"
        >
          <CharactersCard @showCharacterModal="showCharacterModal" :character="character" />
        </div>
      </div>
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
                Episodios:
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

import CharactersCard from "./CharactersCard.vue";

import Pagination from "../global/Pagination.vue";
import MainTitle from "../global/Title.vue";

export default {
  components: {
    CharactersCard,
    Pagination,
    MainTitle
  },
  data() {
    return {
      characters: [],
      page: 1,
      pages: 1,
      modal: false,
      currentCharacter: {},
      search: ""
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
    searchData(search) {
        this.search = search
        this.page = 1;
        this.fetchData();
      
    },
    showCharacterModal(id) {
      this.fetchCharacter(id);
    },
    async fetchCharacter(id) {
      let result = await axios.get(
        "https://rickandmortyapi.com/api/character/" + id
      );

      this.currentCharacter = result.data;
      this.modal = true;
    }
  }
};
</script>