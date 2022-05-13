<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.content-container {
  padding: 0.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
}
</style>
