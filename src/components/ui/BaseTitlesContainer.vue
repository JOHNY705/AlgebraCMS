<template>
  <div class="tablet-titles-container">
    <h2 class="location-title">{{ $t(locationType) }} {{ locationTitle }}</h2>
    <div class="tablet-details-titles-container">
      <div class="tablet-details-titles-left">
        <h2 class="city-location-title">{{ $t("location")}}: {{ cityLocationTitle }}</h2>
        <h2 class="tablet-details-title">{{ $t("orientation") }}: {{ orientationType }}</h2>
      </div>
      <div class="tablet-details-titles-right">
        <h2 class="tablet-details-title">{{ $t("media") }}: {{ $t(mediaType) }}</h2>
        <h2 class="tablet-details-title">{{ $t("resolution") }}: {{ resolutionType }}</h2>
      </div>
    </div>
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
    };
  },
  props: {
    locationType: {
      type: String,
      required: true,
    },
    locationTitle: {
      type: String,
      required: true,
    },
    cityLocationTitle: {
      type: String,
      required: true,
    },
    orientationType: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      required: true,
    },
    resolutionType: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
.tablet-titles-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
}

.location-title {
  width: 100%;
  font-size: 2rem;
  font-weight: 400;
  color: black;
  margin: 0;
}

.city-location-title {
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  color: rgb(104, 101, 101);
  margin: 0;
}

.tv-titles-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
}

.tv-details-titles-container, .tablet-details-titles-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.tv-details-title, .tablet-details-title {
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;
  color: rgb(104, 101, 101);
}

.tv-details-titles-left, .tablet-details-titles-left {
  margin-right: 4rem;
}
</style>
