<template>
  <div
    v-if="locationType === locationEnum.Tablet"
    class="vertical-images-container"
  >
    <h3 class="images-title">
      {{ $t("current" + locationType + "Content") }}
    </h3>
    <div v-if="pictures.length > 0" class="images">
      <div class="image-card" v-for="picture in pictures" :key="picture.id">
        <div>
          <img
            class="tablet-image"
            :src="`data:image/png;base64,${picture.contentBase64}`"
          />
        </div>
        <div>
          <a
            href="#"
            class="delete-image-btn"
            @click.prevent="showDeleteDialog(picture.id)"
          >
            <img class="far fa-trash-alt delete-icon" />
          </a>
        </div>
      </div>
    </div>
    <div v-else class="title-no-images">
      <h2>{{ $t("noContent" + tvType + locationType) }}</h2>
    </div>
  </div>
  <div
    v-if="locationType === locationEnum.TV  && tvType !== contentOrientationEnum.Horizontal"
    class="vertical-images-container"
  >
    <div class="button-tv-map-title-container">
      <button class="tv-map-btn" @click="showMapTVLocations">
        <img class="fa-solid fa-map  tv-maps-img" />{{ $t("mapWithTVs") }}
      </button>
      <!-- <h3 class="images-title-tv">
        {{ $t("current" + locationType + "Content") }}
      </h3> -->
    </div>
    <div v-if="pictures.length > 0" class="images">
      <div class="image-card" v-for="picture in pictures" :key="picture.id">
        <div>
          <img
            class="tablet-image"
            :src="`data:image/png;base64,${picture.contentBase64}`"
          />
        </div>
        <div>
          <a
            href="#"
            class="delete-image-btn"
            @click.prevent="showDeleteDialog(picture.id)"
          >
            <img class="far fa-trash-alt delete-icon" />
          </a>
        </div>
      </div>
    </div>
    <div v-else class="title-no-images">
      <h2>{{ $t("noContent" + locationType) }}</h2>
    </div>
  </div>
  <div
    v-else-if="tvType === contentOrientationEnum.Horizontal"
    class="vertical-images-container"
  >
    <div class="button-tv-map-title-container">
      <button class="tv-map-btn" @click="showMapTVLocations">
        <img class="fa-solid fa-map  tv-maps-img" />{{ $t("mapWithTVs") }}
      </button>
    </div>
    <div v-if="pictures.length > 0" class="images">
      <div class="horizontal-image-card" v-for="picture in pictures" :key="picture.id">
        <div>
          <img
            class="tablet-image"
            :src="`data:image/png;base64,${picture.contentBase64}`"
          />
        </div>
        <div>
          <a
            href="#"
            class="delete-image-btn"
            @click.prevent="showDeleteDialog(picture.id)"
          >
            <img class="far fa-trash-alt delete-icon" />
          </a>
        </div>
      </div>
    </div>
    <div v-else class="title-no-images">
      <h2>{{ $t("noContent" + locationType) }}</h2>
    </div>
  </div>
</template>

<script>
import { ContentOrientation } from "../../enums/contentOrientation.js";
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
    mediaType: {
      type: String,
      required: true,
    },
    tvType: {
      type: String,
      required: false,
      default: "",
    },
    pictures: {
      type: Array,
      required: false,
    },
  },
  emits: ['showDeleteDialog', 'showMapTVLocations'],
  methods: {
    showDeleteDialog(pictureId) {
      this.$emit("showDeleteDialog", pictureId);
    },
    showMapTVLocations() {
      this.$emit("showMapTVLocations");
    }
  },
};
</script>

<style scoped>
.vertical-images-container {
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  width: 70%;
  height: 100%;
  background: white;
  margin-right: 0.5rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
}

.images-title {
  width: 100%;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  margin-top: 0;
  font-weight: 400;
  color: rgb(104, 101, 101);
}

.images-title-tv {
  width: 100%;
  font-size: 1.6rem;
  margin: 0;
  font-weight: 400;
  color: rgb(104, 101, 101);
  align-self: center;
  margin-left: 1rem;
}

.images {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
}

.image-card, .horizontal-image-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 18%;
  min-width: 8rem;
  padding: 1rem;
  background: rgb(223, 224, 231);
  border-radius: 0.5rem;
  align-items: center;
  margin-right: 2%;
}

.horizontal-image-card {
  width: 30%;
  min-width: 18rem;
  margin-top: 0.5rem;
}

.image-card:last-child {
  margin-right: 0;
}

.image-card:nth-child(5) {
  margin-right: 0;
}

.tablet-image {
  width: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
  transition: 0.3s;
  margin-bottom: 0.5rem;
}

.tablet-image:hover {
  transform: scale(1.9);
  border-radius: 0;
}

.delete-image-btn {
  background: transparent;
  border-color: transparent;
  border-style: none;
}

.delete-icon {
  color: rgb(223, 15, 15);
  height: 2rem;
  width: 2rem;
  transition: 0.3s;
}

.delete-icon:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.title-no-images {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5rem;
}

.title-no-images h2 {
  font-size: 1.6rem;
  text-align: center;
  font-weight: 400;
}

.horizontal-media-container {
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  background: white;
  margin-right: 0.5rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
}

.button-tv-map-title-container {
  width: 100%;
  display: flex;
  text-align: left;
  align-items: flex-start;
  margin-bottom: 1rem;
}

/* .tooltip-tv-map-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0;
} */

/* .tooltip-tv-img {
  height: 1.7rem;
  width: 1.7rem;
  color: rgb(104, 101, 101);
  margin-right: 0.5rem;
}

.tooltip-tv-map-text {
  visibility: hidden;
  background: black;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.3rem;
  text-align: center;
  position: absolute;
  transition: 0.2s ease-in-out;
  opacity: 0;
} */

/* .tooltip-tv-map-container:hover .tooltip-tv-map-text {
  visibility: visible;
  opacity: 1;
  cursor: pointer;
} */

.tv-map-btn {
  border: 0;
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  color: white;
  font-family: 'Stolzl-Book';
  border-radius: 0.5rem;
  width: 21rem;
  min-width: 21rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
}

.tv-map-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.tv-maps-img {
  height: 2rem;
  color: white;
  margin-right: 1rem;
}

@media screen and (max-width: 1279px) {
  .vertical-images-container {
    width: 100%;
    margin: 0;
    height: 50%;
  }

  .images {
    padding: 0;
  }

  .image-card {
    margin: 1%;
    margin: max(0.5rem, 1%);
  }
}

@media screen and (max-width: 900px) {
  .image-card {
    width: 32%;
    min-width: 10rem;
    margin: max(0.5rem, 1%);
  }
}
</style>
