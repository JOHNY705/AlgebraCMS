<template>
  <div class="media-and-upload-container">
    <slot></slot>
  </div>
</template>

<script>
import { ContentOrientation } from "../../enums/contentOrientation.js";
import { Location } from "./../../enums/location.js";

export default {
  data() {
    return {
      location: Location,
      tv: ContentOrientation,
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
