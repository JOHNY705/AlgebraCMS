<template>
  <div v-if="contentOrientationType !== contentOrientationEnum.Horizontal" class="vertical-media-upload-container">
    <slot></slot>
  </div>
  <div v-else-if="contentOrientationType === contentOrientationEnum.Horizontal" class="horizontal-media-upload-container">
    <slot></slot>
  </div>
</template>

<script>
import { ContentOrientation } from "./../../enums/contentOrientation.js";
import { Location } from "./../../enums/location.js";

export default {
  data() {
    return {
      locationEnum: Location,
      contentOrientationEnum: ContentOrientation,
    }
  },
  props: {
    location: {
      type: String,
      required: true
    },
    contentOrientationType: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.vertical-media-upload-container, .horizontal-media-upload-container {
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
  .vertical-media-upload-container, .horizontal-media-upload-container {
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
  .vertical-media-upload-container, .horizontal-media-upload-container {
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
