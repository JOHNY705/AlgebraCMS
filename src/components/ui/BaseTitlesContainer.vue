<template>
  <div v-if="locationType === locationEnum.Tablet" class="titles-container">
    <h2 class="location-title">{{ $t(locationType) }} {{ locationTitle }}</h2>
    <h2 class="city-location-title">{{ cityLocationTitle }}</h2>
  </div>
  <div v-else-if="locationType === locationEnum.TV" class="tv-titles-container">
    <h2 class="location-title">{{ $t(locationType) }} {{ locationTitle }}</h2>
    <div class="tv-details-titles-container">
      <div class="tv-details-titles-left">
        <h2 class="tv-details-title">{{ $t("type") }}: {{ $t(tvType) }}</h2>
        <h2 v-if="tvType === tvEnum.Horizontal" class="tv-details-title">{{ $t("resolution") }}: 1920x1080</h2>
        <h2 v-else class="tv-details-title">{{ $t("resolution") }}: 1080x1920</h2>
      </div>
      <div class="tv-details-titles-right">
        <h2 class="tv-details-title">{{ $t("media") }}: {{ $t(mediaType) }}</h2>
        <h2 class="city-location-title">{{ cityLocationTitle }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { TV } from "./../../enums/tv.js";
import { Location } from "./../../enums/location.js";

export default {
  data() {
    return {
      locationEnum: Location,
      tvEnum: TV,
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
    tvType: {
      type: String,
      required: false,
    },
    mediaType: {
      type: String,
      required: false,
    }
  },
};
</script>

<style scoped>
.titles-container {
  width: 100%;
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

.tv-details-titles-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.tv-details-title {
  font-size: 1.6rem;
  font-weight: 400;
  margin: 0;
  margin-right: 4rem;
  color: rgb(104, 101, 101);
}
</style>
