<template>
  <the-header v-if="$route.meta.header === 1"></the-header>
  <the-sidebar v-if="$route.meta.sidebar === 1"></the-sidebar>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheSidebar from './components/layout/TheSidebar.vue';

export default {
  components: {
    TheHeader,
    TheSidebar,
  },
};
</script>

<style>
@font-face {
  font-family: 'Stolzl-Book';
  src: local('Stolzl-Book'),
    url('./fonts/The Northern Block Ltd - Stolzl-Book.otf') format('opentype');
}

* {
  box-sizing: border-box;
}

html {
  font-family: 'Stolzl-Book';
  font-size: 62.5%;
}

body {
  margin: 0;
}
</style>
