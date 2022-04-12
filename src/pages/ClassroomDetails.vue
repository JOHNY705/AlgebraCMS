<template>
  <div class="page-container">
    <div class="loading-spinner-container" v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <div class="container" v-else>
      <div class="content-container">
        <div class="titles-container">
          <h2 class="classroom-title">
            {{ $t("selectedClassroom") }} {{ selectedClassroom }}
          </h2>
          <h2 class="classroom-location-title">{{ selectedCityAndAddress }}</h2>
        </div>
        <div class="title-images-separator"></div>
        <div class="images-and-upload-container">
          <div class="images-container">
            <h3 class="images-title">
              {{ $t("currentImagesOnTablet") }}
            </h3>
            <div v-if="pictures.length > 0" class="images">
              <div
                class="image-card"
                v-for="picture in pictures"
                :key="picture.id"
              >
                <div class="image-card-image">
                  <img
                    class="tablet-image"
                    :src="`data:image/png;base64,${picture.base64Encoded}`"
                  />
                </div>
                <div class="image-card-image-delete">
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
          <div class="image-upload-container">
            <div class="image-upload-tooltip-label">
              <div class="tooltip-container">
                <img class="fas fa-exclamation-circle tooltip" />
                <span class="tooltiptext">
                  {{ $t("tooltipAddingNewImage") }}
                </span>
              </div>
              <label class="choose-image-lbl">
                {{ $t("addingNewImages") }}
              </label>
            </div>
            <label class="image-upload"
              ><input
                class="image-select"
                ref="fileInput"
                type="file"
                accept="image/*"
                @input="pickFile"
              /><img class="fas fa-image" />{{ $t("chooseImage") }}</label
            >
            <div
              id="image-preview"
              class="image-preview"
              :style="{
                'background-image': previewImage
                  ? `url(${previewImage})`
                  : `url(${require('@/assets/image-icon.png')})`,
              }"
            ></div>
            <button class="add-image-btn" @click="uploadPicture">
              <img class="fa-solid fa-circle-plus" />{{ $t("addImage") }}
            </button>
          </div>
        </div>
      </div>
      <DeleteDialog v-show="isDeleteDialogShown" @close="closeDeleteDialog()">
        <template v-slot:footer>
          <button class="confirm-delete-btn" @click.prevent="deletePicture()">
            {{ $t("confirm") }}
          </button>
          <button class="cancel-delete-btn" @click.prevent="closeDeleteDialog">
            {{ $t("cancel") }}
          </button>
        </template>
      </DeleteDialog>
    </div>
  </div>
</template>

<script>
import DeleteDialog from "../components/ui/DeleteDialog.vue";

export default {
  data() {
    return {
      previewImage: null,
      previewImageType: null,
      isDeleteDialogShown: false,
      selectedPictureID: null,
      isLoading: true,
      isImageSelected: false,
    };
  },
  computed: {
    pictures() {
      return this.$store.getters["pictures/pictures"];
    },
    locations() {
      return this.$store.getters["locations/locations"];
    },
    selectedClassroomID() {
      return parseInt(this.$route.params.classroomID);
    },
    selectedLocationID() {
      return parseInt(this.$route.params.locationID);
    },
    selectedLocation() {
      return this.locations.find((l) => l.id === this.selectedLocationID);
    },
    selectedClassroom() {
      return this.selectedLocation.classrooms.find(
        (c) => c.id === this.selectedClassroomID
      ).name;
    },
    selectedCityAndAddress() {
      return this.selectedLocation.city + ", " + this.selectedLocation.name;
    },
  },
  watch: {
    isLoading(value) {
      if (!value) {
        this.addWindowListener();
      }
    },
  },
  created() {
    this.loadPicturesForClassroom();
  },
  components: {
    DeleteDialog,
  },
  methods: {
    async loadPicturesForClassroom() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("pictures/loadPictures", {
          classroomID: this.selectedClassroomID,
        });
      } catch (error) {
        console.log(error);
      }
      this.isLoading = false;
    },
    addWindowListener() {
      this.$nextTick(() => {
        var imageImagePreview = document.getElementById("image-preview");
        if (imageImagePreview !== null) {
          imageImagePreview.style.height =
            imageImagePreview.offsetWidth * 1.55 + "px";
        }
      });

      window.addEventListener("resize", function () {
        let imageImagePreview = this.document.getElementById("image-preview");
        if (imageImagePreview !== null) {
          imageImagePreview.style.height =
            imageImagePreview.offsetWidth * 1.55 + "px";
        }
      });
    },
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
      if (file && file[0]) {
        if (allowedFileTypes.includes(file[0].type)) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.previewImage = e.target.result;
            this.previewImageType = e.target.result.type;
          };
          reader.readAsDataURL(file[0]);
          this.$emit("input", file[0]);
        }
      }
    },
    showDeleteDialog(pictureID) {
      this.selectedPictureID = pictureID;
      this.isDeleteDialogShown = true;
    },
    closeDeleteDialog() {
      this.isDeleteDialogShown = false;
    },
    async deletePicture() {
      this.closeDeleteDialog();
      this.previewImage = null;
      this.isLoading = true;
      try {
        await this.$store.dispatch("pictures/deletePicture", {
          classroomID: this.selectedClassroomID,
          pictureID: this.selectedPictureID,
        });
      } catch (error) {
        console.log(error);
      }
      this.loadPicturesForClassroom();
    },
    async uploadPicture() {
      if (this.previewImage) {
        this.isLoading = true;
        try {
          await this.$store.dispatch("pictures/addPicture", {
            classroomID: this.selectedClassroomID,
            picture: this.previewImage,
          });
        } catch (error) {
          console.log(error);
        }
        this.previewImage = null;
        this.loadPicturesForClassroom();
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}

.page-container {
  height: 90vh;
  width: 100%;
  position: absolute;
  bottom: 0;
  background: rgb(223, 224, 231);
  overflow: scroll;
}

.loading-spinner-container {
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: max(30rem, 19.5%);
}

.container {
  height: 100%;
  margin-left: max(30rem, 19.5%);
  display: flex;
  justify-content: center;
  padding: 2rem;
  padding-top: max(2rem, 1%);
}

.content-container {
  padding: 0.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0.5rem;
  width: 100%;
}

.titles-container {
  width: 100%;
  background: white;
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
}

.classroom-title {
  width: 100%;
  font-size: 2rem;
  font-weight: 400;
  color: black;
}

.classroom-location-title {
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  color: rgb(104, 101, 101);
}

.images-title {
  width: 100%;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  font-weight: 400;
  color: rgb(104, 101, 101);
}

.title-images-separator {
  width: 100%;
  background: rgb(223, 224, 231);
}

.images-and-upload-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 90%;
  padding-top: 1rem;
}

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

ul {
  padding: 1rem 2rem;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-radius: 0.5rem;
}

ul li {
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.fa-trash {
  margin-right: 0.6rem;
}

.add-image-btn {
  font-family: "Stolzl-Book";
  font-size: 1.6rem;
  color: white;
  width: 77.61%;
  height: 2.9rem;
  border: 0;
  text-align: center;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  transition: 0.3s;
}

.add-image-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.fa-circle-plus {
  margin-right: 0.6rem;
}

.image-select {
  color: black;
  font-size: 1.4rem;
}

.image-upload-container {
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

.image-preview {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 0.5rem;
  height: 75%;
  width: 77.61%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.choose-image-lbl {
  font-size: 1.6rem;
  font-weight: 400;
  width: auto;
  text-align: center;
  color: rgb(104, 101, 101);
}

input[type="file"] {
  display: none;
}

.image-upload {
  background: rgb(221, 111, 38);
  width: 77.61%;
  height: 2.9rem;
  padding-top: 0.4rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  align-items: center;
  color: white;
  transition: 0.3s;
}

.image-upload:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.delete-image-btn {
  background: transparent;
  border-color: transparent;
  border-style: none;
}

.fa-image {
  margin-right: 0.6rem;
  width: 1.8rem;
  height: 1.8rem;
  padding-top: 0.2rem;
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

.tablet-image {
  width: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
  transition: 0.3s;
  margin-bottom: 0.5rem;
}

.image-card:last-child {
  margin-right: 0;
}

.image-card:nth-child(5) {
  margin-right: 0;
}

.tablet-image:hover {
  transform: scale(1.8);
  border-radius: 0;
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

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
}

.tooltip-container {
  display: flex;
  flex-direction: row;
  margin: 0;
}

.tooltip {
  height: 1.7rem;
  width: 1.7rem;
  color: rgb(104, 101, 101);
  margin-right: 0.5rem;
}

.tooltiptext {
  visibility: hidden;
  background: black;
  width: 29rem;
  height: auto;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 10rem;
  color: white;
  font-size: 1.3rem;
  text-align: center;
  position: absolute;
  transition: 0.2s ease-in-out;
  opacity: 0;
}

.tooltip-container:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.image-upload-tooltip-label {
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
}

@media screen and (max-width: 1279px) {
  .container {
    height: auto;
  }

  .images-and-upload-container {
    flex-direction: column;
  }

  .images-container {
    width: 100%;
    margin: 0;
    height: auto;
  }

  .images {
    padding: 0;
  }

  .image-card {
    margin: 1%;
    margin: max(0.5rem, 1%);
  }

  .image-upload-container {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .choose-image-lbl {
    width: auto;
  }

  .image-upload {
    width: 30%;
  }

  .image-preview {
    width: 20%;
    margin: 0 2rem;
  }

  .add-image-btn {
    width: 30%;
  }
}
</style>
