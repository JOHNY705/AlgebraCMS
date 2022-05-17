<template>
  <div class="container">
    <div class="content-container">
      <slot></slot>
    </div>
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

.content-container {
  padding: 0.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
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
