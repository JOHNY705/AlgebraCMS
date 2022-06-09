<template>
  <div class="vertical-media-and-upload-container">
    <slot></slot>
  </div>
  <!-- <div v-else-if="tvType === tv.Horizontal" class="horizontal-media-and-upload-container">
    <slot></slot>
  </div> -->
</template>

<script>
import { TV } from "./../../enums/tv.js";
import { Location } from "./../../enums/location.js";

export default {
  data() {
    return {
      location: Location,
      tv: TV,
    }
  },
  props: {
    locationType: {
      type: String,
      required: true
    },
    tvType: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.vertical-media-and-upload-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding-top: 1rem;
}

.horizontal-media-and-upload-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 1rem;
}

@media screen and (max-width: 1279px) {
  .vertical-media-and-upload-container {
    flex-direction: column;
  }
}
</style>
