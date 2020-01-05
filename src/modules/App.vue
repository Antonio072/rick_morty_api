<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view></router-view>

  </div>
</template>

<script>
/* eslint-disable */

import axios from "axios";

// Global components
import Toolbar from './global/Toolbar.vue';

export default {
  name: "app",
  components: {
    Toolbar,
  },
  
};
</script>
