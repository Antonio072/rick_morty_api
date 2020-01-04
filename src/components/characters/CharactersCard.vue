<template>
  <div class="card column is-half is-offset-one-quarter">
    <div class="card-header is-centered">
        <figure class="image">

      <img class="is-rounded" :src="character.image" :alt="character.name" />
        </figure>
    </div>
    <div class="card-content">
      <h3 class="title is-size-4">{{character.name}}</h3>
      <button class="button is-success" @click="showMore(character.id)">Ver más</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["character"],
  methods: {
    showMore(id) {
        console.log(id)
      this.$emit("showCharacterModal", id);
    }
  }
};
</script>