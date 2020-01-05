<template>
    <div class="hero is-primary">
        <div class="hero-body">
          <div class="columns">
            <div class="column">
              <h1 class="title">
                <span class="has-text-white">{{title}}</span>
              </h1>
            </div>
            <div class="column">
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
        </div>
      </div>
    
</template>

<script>
/* eslint-disable */
export default {
    props: ['title'],
    data() {
        return {
            search: ""
        }
    },
    methods: {
        searchData() {
            if(this.search.length> 0)
                this.$emit('searchData',this.search)
        }
    },
}
</script>