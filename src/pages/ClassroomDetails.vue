<template>
  <base-page-container>
    <div class="loading-spinner-container" v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <base-container v-else>
      <base-titles-container
        :locationType="locationType"
        :locationTitle="selectedTablet"
        :cityLocationTitle="selectedCityAndAddress"
        :mediaType="selectedTabletMedia"
        :orientationType="selectedTabletContentOrientation"
        :resolutionType="selectedTabletContentResolution"
      >
      </base-titles-container>
      <base-media-and-upload-container :locationType="locationType">
        <base-media-container
          :locationType="locationType"
          :mediaType="selectedTabletMedia"
          :pictures="pictures"
          @showDeleteDialog="showDeleteDialog"
        ></base-media-container>
        <base-upload-media-container :location="locationType" :contentOrientationType="selectedTabletContentOrientation">
          <div class="image-upload-tooltip-label">
            <div class="tooltip-container">
              <img class="fas fa-exclamation-circle tooltip" />
              <span class="tooltiptext">
                {{ $t("tooltipAddingNewTabletImage") }}
              </span>
            </div>
            <label class="choose-image-lbl">
              {{ $t("addingNewTabletMedia") }}
            </label>
          </div>
          <label class="image-upload"
            ><input
              class="image-select"
              ref="fileInput"
              type="file"
              accept="image/jpeg, image/png, image/gif"
              @input="pickFile"
              @change="clearFileSelection"
            /><img class="fas fa-image" />{{ $t("chooseImage") }}</label
          >
          <div
            id="image-preview"
            class="image-preview"
            @dragenter.prevent="toggleDropzone"
            @dragleave.prevent="toggleDropzone"
            @dragover.prevent
            @drop.prevent="dragnDropFile"
            :class="{ dropzone: isDropzoneActive }"
            :style="{
              'background-image': previewImage
                ? `url(${previewImage})`
                : `url(${require('@/assets/image-icon.png')})`,
            }"
          ></div>
          <div class="add-image-btn-container">
            <button
              class="add-image-btn"
              :class="{ active: previewImage && pictures.length < 5 }"
              @click="uploadPicture"
              :disabled="!previewImage || pictures.length === 5"
            >
              <span
                v-if="pictures.length === 5 && selectedTablet === 'Dijeljene slike'"
                class="add-image-btn-tooltiptext"
                >{{ $t("tooltipMaxNumberOfSharedTabletImage") }}
              </span>

              <span
                v-else-if="pictures.length === 5"
                class="add-image-btn-tooltiptext"
                >{{ $t("tooltipMaxNumberOfTabletImage") }}
              </span>

              <img class="fa-solid fa-circle-plus" />{{ $t("addImage") }}
            </button>
          </div>
        </base-upload-media-container>
      </base-media-and-upload-container>
      <base-spinner
        v-if="isLoadingAddDelete"
        :spinnerWithBackground="isLoadingAddDelete"
      ></base-spinner>
      <base-dialog
        :show="error || isDeleteDialogShown"
        :title="dialogTitle"
        :message="dialogMessage"
        :dialogWarning="error || isDeleteDialogShown"
        @close="handleDialog"
      >
        <template v-slot:footer v-if="error">
          <button class="close-dialog-btn" @click="handleDialog">
            Zatvori
          </button>
        </template>
        <template v-slot:footer v-else>
          <button class="confirm-delete-btn" @click="deletePicture">
            {{ $t("confirm") }}
          </button>
          <button class="cancel-delete-btn" @click="handleDialog">
            {{ $t("cancel") }}
          </button>
        </template>
      </base-dialog>
    </base-container>
  </base-page-container>
</template>

<script>
import i18n from "@/i18n";
import { Location } from "./../enums/location.js";

export default {
  data() {
    return {
      locationType: Location.Tablet,
      error: false,
      dialogTitle: null,
      dialogMessage: null,
      images: null,
      previewImage: null,
      previewImageType: null,
      isDeleteDialogShown: false,
      selectedPictureID: null,
      isLoading: true,
      isLoadingAddDelete: false,
      isImageSelected: false,
      isDropzoneActive: false,
    };
  },
  computed: {
    pictures() {
      return this.$store.getters["pictures/pictures"];
    },
    locations() {
      return this.$store.getters["tabletLocations/tabletLocations"];
    },
    selectedTabletID() {
      return parseInt(this.$route.params.classroomID);
    },
    selectedLocationID() {
      return parseInt(this.$route.params.locationID);
    },
    selectedLocation() {
      return this.locations.find((l) => l.id === this.selectedLocationID);
    },
    selectedTablet() {
      return this.selectedLocation.classrooms.find(
        (c) => c.id === this.selectedTabletID
      ).name;
    },
    selectedCityAndAddress() {
      return this.selectedLocation.city + ", " + this.selectedLocation.name;
    },
    selectedTabletContentOrientation() {
      return this.selectedLocation.classrooms.find(
        (tablet) => tablet.id === this.selectedTabletID
      ).contentOrientation;
    },
    selectedTabletMedia() {
      return this.selectedLocation.classrooms.find(
        (tablet) => tablet.id === this.selectedTabletID
      ).contentType;
    },
    selectedTabletContentResolution() {
      return this.selectedLocation.classrooms.find(
        (tablet) => tablet.id === this.selectedTabletID
      ).contentResolution;
    }
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
  methods: {
    async loadPicturesForClassroom() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("pictures/loadPictures", {
          classroomID: this.selectedTabletID,
        });
      } catch (error) {
        this.error = true;
        this.dialogTitle = i18n.global.t("error");
        this.dialogMessage = error.message;
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
    handleDialog() {
      this.error = false;
      this.isDeleteDialogShown = false;
      this.dialogTitle = null;
      this.dialogMessage = null;
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files[0];
      this.setBackgroundImage(file);
    },
    dragnDropFile(e) {
      let file = e.dataTransfer.files[0];
      this.setBackgroundImage(file);
      this.toggleDropzone();
    },
    showDeleteDialog(pictureID) {
      this.selectedPictureID = pictureID;
      this.isDeleteDialogShown = true;
      this.dialogTitle = i18n.global.t("deleteImage");
      this.dialogMessage = i18n.global.t("confirmDeleteImage");
    },
    async deletePicture() {
      this.handleDialog();
      this.previewImage = null;
      this.isLoadingAddDelete = true;
      try {
        await this.$store.dispatch("pictures/deletePicture", {
          classroomID: this.selectedTabletID,
          pictureID: this.selectedPictureID,
          pictures: this.pictures,
        });
      } catch (error) {
        this.error = true;
        this.dialogTitle = i18n.global.t("error");
        this.dialogMessage = error.message;
      }
      this.isLoadingAddDelete = false;
    },
    async uploadPicture() {
      if (this.previewImage) {
        this.isLoadingAddDelete = true;
        try {
          await this.$store.dispatch("pictures/addPicture", {
            classroomID: this.selectedTabletID,
            picture: this.previewImage,
          });
        } catch (error) {
          this.error = true;
          this.dialogTitle = i18n.global.t("error");
          this.dialogMessage = error.message;
        }
        this.previewImage = null;
        this.isLoadingAddDelete = false;
      }
    },
    clearFileSelection(event) {
      event.target.value = null;
    },
    setBackgroundImage(file) {
      const allowedFileTypes = ["image/jpeg", "image/png", "image/gif"];
      if (file) {
        if (allowedFileTypes.includes(file.type)) {
          let reader = new FileReader();
          this.isImageSelected = true;
          reader.onload = (e) => {
            var img = new Image();
            img.src = e.target.result;
            img.onload = () => {
              if (img.width === 800 && img.height === 1240) {
                this.previewImage = e.target.result;
                this.previewImageType = e.target.result.type;
              } else {
                this.error = true;
                this.dialogTitle = i18n.global.t("error");
                this.dialogMessage = i18n.global.t(
                  "errorWrongImageResolutionForTablet"
                );
              }
            };
          };
          reader.readAsDataURL(file);
          this.$emit("input", file);
        } else {
          this.error = true;
          this.dialogTitle = i18n.global.t("error");
          this.dialogMessage = i18n.global.t("errorWrongFileFormat");
        }
      }
    },
    toggleDropzone() {
      this.isDropzoneActive = !this.isDropzoneActive;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
}

.header-buffer {
  min-height: 8rem;
  height: 10%;
}

.loading-spinner-container {
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: max(30rem, 19.5%);
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

.add-image-btn-container {
  width: 77.61%;
}

.add-image-btn {
  font-family: "Stolzl-Book";
  position: relative;
  font-size: 1.6rem;
  color: white;
  width: 100%;
  height: 2.9rem;
  border: 0;
  background: rgb(223, 224, 231);
  text-align: center;
  border-radius: 0.5rem;
  transition: 0.3s;
}

.add-image-btn-tooltiptext {
  visibility: hidden;
  background: black;
  width: inherit;
  bottom: 3.5rem;
  left: 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.3rem;
  text-align: center;
  position: absolute;
  transition: 0.2s ease-in-out;
  opacity: 0;
}

.add-image-btn:hover .add-image-btn-tooltiptext {
  visibility: visible;
  opacity: 1;
}

.add-image-btn.active {
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
}

.add-image-btn.active:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.add-image-btn.active:hover .add-image-btn-tooltiptext {
  visibility: hidden;
  opacity: 0;
}

.fa-circle-plus {
  margin-right: 0.6rem;
}

.image-select {
  color: black;
  font-size: 1.4rem;
}

.image-preview {
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 0.5rem;
  height: 75%;
  width: 77.61%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.image-preview.dropzone {
  border: 3px dashed rgb(203, 204, 214);
  border-radius: 0.5rem;
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

.fa-image {
  margin-right: 0.6rem;
  width: 1.8rem;
  height: 1.8rem;
  padding-top: 0.2rem;
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
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
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
  .image-card {
    margin: 1%;
    margin: max(0.5rem, 1%);
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

  .add-image-btn-container {
    width: 30%;
  }

  .add-image-btn {
    width: 100%;
  }
}

@media screen and (max-width: 900px) {
  .image-preview {
    width: 31%;
    margin: 1rem 0;
  }

  .image-upload,
  .add-image-btn {
    min-width: 18rem;
  }

  .add-image-btn-container {
    display: flex;
    justify-content: center;
  }
}
</style>
