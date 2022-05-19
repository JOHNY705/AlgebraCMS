<template>
  <div class="images-and-upload-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.images-and-upload-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding-top: 1rem;
}

@media screen and (max-width: 1279px) {
  .images-and-upload-container {
    flex-direction: column;
  }
}
</style>
