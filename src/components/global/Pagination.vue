<template>
          <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous" v-on:click="changePage(page-1)">Anterior</a>

        <ul class="pagination-list">
          <li>
            <a class="pagination-link is-current">{{page}}</a>
          </li>
        </ul>
        <a class="pagination-next" v-on:click="changePage(page+1)">Siguiente</a>
      </nav>
</template>

<script>
/* eslint-disable */
export default {
    props: ['page'],
    methods: {
        changePage(page) {
            this.$emit('changePage',page)
        }
    },
}
</script>