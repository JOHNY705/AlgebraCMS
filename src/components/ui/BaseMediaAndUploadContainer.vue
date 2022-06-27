<template>
  <div class="media-and-upload-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.media-and-upload-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding-top: 1rem;
}

@media screen and (max-width: 1279px) {
  .media-and-upload-container {
    flex-direction: column;
  }
}
</style>
