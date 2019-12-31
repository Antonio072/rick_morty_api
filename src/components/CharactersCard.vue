<template>
    <div class="card" >
            <div class="card-header">
              <img :src="character.image" :alt="character.name">
          
            </div>
            <div class="card-content">
              <h3 class="title is-size-4">{{character.name}}</h3>
              <button class="button is-success">
                Ver más
              </button>
            </div>
          </div>
</template>

<script>
export default {
    props: ['character']
}
</script>