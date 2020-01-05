<template>
  <div class="container">
    <main-title title="Lugares" v-on:searchData="searchData($event)"/>
    <paginaion :page="page" v-on:changePage="changePage($event)" />
    <table class="table is-bordered  is-hoverable is-striped is-fullwidth">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Dimension</th>
          <th>Residentes</th>
        </tr>
      </thead>
      <tbody>
        <tr style="color:$primary" v-for="location in locations" :key="location.id">
          <th>{{location.id}}</th>
          <td>{{location.name}}</td>
          <td>{{location.type}}</td>
          <td>{{location.dimension}}</td>
          <td>{{location.residents.length}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable*/

import axios from "axios";
// Global components
import MainTitle from "../global/Title.vue";
import Paginaion from "../global/Pagination.vue";

export default {
  components: {
    MainTitle,
    Paginaion
  },
  data() {
    return {
      page: 1,
      search: "",
      locations: [],
      pages: 1
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const params = {
        page: this.page,
        name: this.search,
      };
      let result = axios
        .get("https://rickandmortyapi.com/api/location/", { params })
        .then(res => {
          console.log(res);
          this.locations = res.data.results;
          this.pages = res.data.info.pages;
        })
        .catch(error => {
          console.error(error);
        });
    },
    searchData(search) {
        if(search.lenght!=0)
        {
            this.search = search
            this.page = 1;
            this.fetchData();
        }
      
    },
     changePage(page) {
      this.page = page <= 0 || page >= this.pages ? this.page : page;
      this.fetchData();
    },
  }
};
</script>