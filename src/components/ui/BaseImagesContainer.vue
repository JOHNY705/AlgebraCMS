<template>
  <div class="images-container">
    <h3 class="images-title">
      {{ $t("currentImagesOnTablet") }}
    </h3>
    <div v-if="pictures.length > 0" class="images">
      <div class="image-card" v-for="picture in pictures" :key="picture.id">
        <div>
          <img
            class="tablet-image"
            :src="`data:image/png;base64,${picture.base64Encoded}`"
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
      <h2>{{ $t("noImagesForClassroom") }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pictures: {
      type: Array,
      required: true,
    },
  },
  methods: {
    showDeleteDialog(pictureId) {
      this.$emit("showDeleteDialog", pictureId);
    },
  },
};
</script>

<style scoped>
.images-container {
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

.image-card {
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

@media screen and (max-width: 1279px) {
  .images-container {
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
