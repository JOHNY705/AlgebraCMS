<template>
  <the-header v-if="$route.meta.componentsEnabled"></the-header>
  <the-sidebar v-if="$route.meta.componentsEnabled"></the-sidebar>
  <router-view v-slot="slotProps" :key="$route.fullPath">
      <component :is="slotProps.Component"></component>
  </router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheSidebar from "./components/layout/TheSidebar.vue";

export default {
  components: {
    TheHeader,
    TheSidebar,
  },
  // created() {
  //   this.loadLocations();
  // },
  // methods: {
  //   async loadLocations() {
  //     try {
  //       await this.$store.dispatch("locations/loadLocations");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // },
};
</script>

<style>
@font-face {
  font-family: "Stolzl-Book";
  src: local("Stolzl-Book"),
    url("./fonts/The Northern Block Ltd - Stolzl-Book.otf") format("opentype");
}

* {
  box-sizing: border-box;
}

html {
  font-family: "Stolzl-Book";
  font-size: 62.5%;
}

body {
  margin: 0;
}
</style>
