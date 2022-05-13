<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  margin-left: max(30rem, 19.5%);
  display: flex;
  justify-content: center;
  padding: 2rem;
}

@media screen and (max-width: 1279px) {
  .container {
    height: auto;
  }
}

@media screen and (max-width: 900px) {
  .container {
    height: auto;
  }
}
</style>
