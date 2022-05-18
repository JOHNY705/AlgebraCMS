<template>
  <div class="image-upload-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.image-upload-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5rem;
  align-items: center;
  width: 30%;
  margin-left: 0.5rem;
  height: 100%;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
}


@media screen and (max-width: 1279px) {
  .image-upload-container {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 50%;
  }
}

@media screen and (max-width: 900px) {
  .image-upload-container {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
  }
}
</style>
