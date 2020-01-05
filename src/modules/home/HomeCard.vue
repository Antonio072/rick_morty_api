<template>
  <router-link :to="homeCard.path">
    <div class="card">
      <div class="card-image">
        <figure class="image is-1by1">
          <img :src="homeCard.image" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-header">
        <div class="media-content">
          <p class="title is-3 ">{{homeCard.title}}</p>
      <button class="button is-success is-pulled-right">

        <div class="content">{{homeCard.description}}</div>
      </button>
        </div>

      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["homeCard"]
};
</script>