<template>
  <div class="card">
    <div class="card-header">
      <div class="media-content">
        <p class="title is-4">{{homeCard.title}}</p>
      </div>
      <div class="content">{{homeCard.description}}</div>
    </div>
  </div>
</template>

<script>
export default {
    props:['homeCard']
}
</script>