<template>
  <div class="page-container">
    <div class="content-container">
      <h2 class="content-title">{{ $t("accessDenied") }}</h2>
      <div class="title-underline"></div>
      <p class="content-description">
        {{ $t("accessDeniedDescription") }}
      </p>
      <router-link class="content-button" :to="'/'">
        Povratak na početnu stranicu
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.content-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: 55rem;
}

.content-title {
  font-size: 3rem;
  margin: 0;
  padding: 1rem;
}

.title-underline {
  height: 0.3rem;
  width: 100%;
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
}

.content-description {
  text-align: center;
  font-size: 1.8rem;
  margin: 0;
  padding: 2rem 1rem;
}

.content-button {
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  padding: .5rem 1rem;
}
</style>
