<template>
  <div class="titles-container">
    <h2 class="location-title">
      {{ $t(locationType) }} {{ locationTitle }}
    </h2>
    <h2 class="city-location-title">{{ cityLocationTitle }}</h2>
  </div>
</template>

<script>
export default {
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
}

.city-location-title {
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  color: rgb(104, 101, 101);
}
</style>
