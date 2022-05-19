<template>
  <div class="page-container">
      <slot></slot>
  </div>
</template>

<style scoped>
* {
    margin: 0;
}

.page-container {
  height: min(calc(100vh - 80px), 90%);
  width: 100%;
  position: absolute;
  bottom: 0;
  background: rgb(223, 224, 231);
  overflow: scroll;
}
</style>
