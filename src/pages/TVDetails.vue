<template>
  <base-page-container>
    <div class="loading-spinner-container" v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <base-container v-else>
      <base-titles-container
        :locationType="locationType"
        :locationTitle="selectedTV"
        :cityLocationTitle="selectedCityAndAddress"
        :mediaType="selectedTVMedia"
        :orientationType="selectedTVContentOrientation"
        :resolutionType="selectedTVContentResolution"
      >
      </base-titles-container>
      <base-media-and-upload-container
        :locationType="locationType"
        :tvType="selectedTVContentOrientation"
      >
        <base-media-container
          :locationType="locationType"
          :mediaType="selectedTVMedia"
          :tvType="selectedTVContentOrientation"
          :pictures="pictures"
          @showDeleteDialog="showDeleteDialog"
          @showMapTVLocations="showMapTVLocations"
        ></base-media-container>
        <base-upload-media-container
          v-if="
            selectedTVContentOrientation === contentOrientationEnum.Vertical ||
            selectedTVContentOrientation === contentOrientationEnum.Schedule
          "
          :location="locationType"
          :contentOrientationType="selectedTVContentOrientation"
        >
          <div class="image-upload-tooltip-label">
            <div class="tooltip-container">
              <img class="fas fa-exclamation-circle tooltip" />
              <span class="tooltiptext">
                {{ $t("tooltipAddingNewContent") }}
                {{ selectedTVContentResolution }}
              </span>
            </div>
            <label class="choose-image-lbl">
              {{ $t("addingNewMedia") }}
            </label>
          </div>
          <label v-if="selectedTVMedia === mediaEnum.Video" class="image-upload"
            ><input
              class="image-select"
              ref="fileInput"
              type="file"
              accept="video/*"
              @input="pickVideo"
              @change="clearFileSelection"
            /><img class="fas fa-image" />{{ $t("chooseMedia") }}
          </label>

          <label
            v-else-if="selectedTVMedia === mediaEnum.Image"
            class="image-upload"
            ><input
              class="image-select"
              ref="fileInput"
              type="file"
              accept="image/jpeg, image/png, image/gif"
              @input="pickFile"
              @change="clearFileSelection"
            /><img class="fas fa-image" />{{ $t("chooseMedia") }}
          </label>

          <div
            v-if="selectedTVMedia === mediaEnum.Image"
            id="image-preview"
            class="image-preview"
            @dragenter.prevent="toggleDropzone"
            @dragleave.prevent="toggleDropzone"
            @dragover.prevent
            @drop.prevent="dragnDropImage"
            :class="{ dropzone: isDropzoneActive }"
            :style="{
              'background-image': previewImage
                ? `url(${previewImage})`
                : `url(${require('@/assets/image-icon.png')})`,
            }"
          ></div>

          <div
            v-else-if="selectedTVMedia === mediaEnum.Video"
            id="image-preview"
            class="image-preview"
            @dragenter.prevent="toggleDropzone"
            @dragleave.prevent="toggleDropzone"
            @dragover.prevent
            @drop.prevent="dragnDropVideo"
            :class="{ dropzone: isDropzoneActive }"
            :style="{
              'background-image': previewVideo
                ? ``
                : `url(${require('@/assets/film.png')})`,
            }"
          >
            <video class="video-container" autoplay loop id="video-tag">
              <source id="video-source" />
            </video>
          </div>

          <div
            v-if="selectedTV === 'Dijeljene slike' &&
              selectedTVContentOrientation === contentOrientationEnum.Vertical"
            class="add-media-btn-container"
          >
            <button
              class="add-image-btn"
              :class="{ active: previewImage && pictures.length < 4 }"
              @click="uploadPicture"
              :disabled="!previewImage || pictures.length === 4"
            >
              <span
                v-if="pictures.length === 4"
                class="add-image-btn-tooltiptext"
                >{{ $t("tooltipMaxNumberOfImagesForSharedVerticalTV") }}</span
              >
              <img class="fa-solid fa-circle-plus" />{{ $t("addContent") }}
            </button>
          </div>

          <div v-else-if="selectedTVMedia === mediaEnum.Image" class="add-media-btn-container">
            <button
              class="add-image-btn"
              :class="{ active: previewImage && pictures.length < 8 }"
              @click="uploadPicture"
              :disabled="!previewImage || pictures.length === 8"
            >
              <span
                v-if="pictures.length === 8"
                class="add-image-btn-tooltiptext"
                >{{
                  $t(
                    "tooltipMaxNumberOf" +
                      selectedTVContentOrientation +
                      locationType +
                      selectedTVMedia
                  )
                }}</span
              >
              <img class="fa-solid fa-circle-plus" />{{ $t("addContent") }}
            </button>
          </div>
        </base-upload-media-container>
        <base-upload-media-container
          v-else-if="
            selectedTVContentOrientation === contentOrientationEnum.Horizontal
          "
          :location="locationType"
          :contentOrientationType="selectedTVContentOrientation"
        >
          <div class="image-upload-tooltip-label">
            <div class="tooltip-container">
              <img class="fas fa-exclamation-circle tooltip" />
              <span class="tooltiptext">
                {{ $t("tooltipAddingNewContent") }}
                {{ selectedTVContentResolution }}
              </span>
            </div>
            <label class="choose-image-lbl">
              {{ $t("addingNewMedia") }}
            </label>
          </div>
          <label v-if="selectedTVMedia === mediaEnum.Image" class="image-upload"
            ><input
              class="image-select"
              ref="fileInput"
              type="file"
              accept="image/jpeg, image/png, image/gif"
              @input="pickFile"
              @change="clearFileSelection"
            /><img class="fas fa-image" />{{ $t("chooseMedia") }}
          </label>

          <label v-if="selectedTVMedia === mediaEnum.Video" class="image-upload"
            ><input
              class="image-select"
              ref="fileInput"
              type="file"
              accept="video/*"
              @input="pickVideo"
              @change="clearFileSelection"
            /><img class="fas fa-image" />{{ $t("chooseMedia") }}
          </label>

          <div
            v-if="selectedTVMedia === mediaEnum.Video"
            id="horizontal-media-preview"
            class="horizontal-media-preview"
            @dragenter.prevent="toggleDropzone"
            @dragleave.prevent="toggleDropzone"
            @dragover.prevent
            @drop.prevent="dragnDropVideo"
            :class="{ dropzone: isDropzoneActive }"
            :style="{
              'background-image': previewVideo
                ? ``
                : `url(${require('@/assets/film.png')})`,
            }"
          >
            <video class="video-container" autoplay loop id="video-tag">
              <source id="video-source" />
            </video>
          </div>

          <div
            v-else-if="selectedTVMedia === mediaEnum.Image"
            id="horizontal-media-preview"
            class="horizontal-media-preview"
            @dragenter.prevent="toggleDropzone"
            @dragleave.prevent="toggleDropzone"
            @dragover.prevent
            @drop.prevent="dragnDropImage"
            :class="{ dropzone: isDropzoneActive }"
            :style="{
              'background-image': previewImage
                ? `url(${previewImage})`
                : `url(${require('@/assets/image-icon.png')})`,
            }"
          ></div>

          <div v-if="selectedTVMedia === mediaEnum.Image" class="add-media-btn-container">
            <button
              class="add-image-btn"
              :class="{ active: previewImage && pictures.length < 8 }"
              @click="uploadPicture"
              :disabled="!previewImage || pictures.length === 8"
            >
              <span
                v-if="pictures.length === 8"
                class="add-image-btn-tooltiptext"
                >{{
                  $t(
                    "tooltipMaxNumberOf" +
                      selectedTVContentOrientation +
                      locationType +
                      selectedTVMedia
                  )
                }}</span
              >
              <img class="fa-solid fa-circle-plus" />{{ $t("addContent") }}
            </button>
          </div>
        </base-upload-media-container>
      </base-media-and-upload-container>
      <base-spinner
        v-if="isLoadingAddDelete"
        :spinnerWithBackground="isLoadingAddDelete"
      ></base-spinner>
      <base-dialog
        :show="error || isDeleteDialogShown || dialogTVMapLocations"
        :title="dialogTitle"
        :message="dialogMessage"
        :dialogWarning="error || isDeleteDialogShown"
        :dialogTVMapLocations="dialogTVMapLocations"
        @close="handleDialog"
      >
        <template v-slot:footer v-if="error || dialogTVMapLocations">
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
import { Media } from "./../enums/media.js";
import { ContentOrientation } from "../enums/contentOrientation.js";

export default {
  data() {
    return {
      contentOrientationEnum: ContentOrientation,
      locationType: Location.TV,
      mediaEnum: Media,
      error: false,
      errorVideo: false,
      dialogTitle: null,
      dialogMessage: null,
      dialogTVMapLocations: false,
      images: null,
      previewImage: null,
      previewVideo: null,
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
      return this.$store.getters["tvLocations/tvLocations"];
    },
    selectedDeviceID() {
      return parseInt(this.$route.params.deviceID);
    },
    selectedLocationID() {
      return parseInt(this.$route.params.locationID);
    },
    selectedLocation() {
      return this.locations.find((l) => l.id === this.selectedLocationID);
    },
    selectedTV() {
      return this.selectedLocation.devices.find(
        (tv) => tv.id === this.selectedDeviceID
      ).name;
    },
    selectedCityAndAddress() {
      return this.selectedLocation.city + ", " + this.selectedLocation.name;
    },
    selectedTVContentOrientation() {
      return this.selectedLocation.devices.find(
        (tv) => tv.id === this.selectedDeviceID
      ).contentOrientation;
    },
    selectedTVMedia() {
      return this.selectedLocation.devices.find(
        (tv) => tv.id === this.selectedDeviceID
      ).contentType;
    },
    selectedTVContentResolution() {
      return this.selectedLocation.devices.find(
        (tv) => tv.id === this.selectedDeviceID
      ).contentResolution;
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
  methods: {
    async loadPicturesForClassroom() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("pictures/loadPictures", {
          classroomID: this.selectedDeviceID,
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
            imageImagePreview.offsetWidth * 1.78 + "px";
        }
      });

      window.addEventListener("resize", function () {
        let imageImagePreview = this.document.getElementById("image-preview");
        if (imageImagePreview !== null) {
          imageImagePreview.style.height =
            imageImagePreview.offsetWidth * 1.78 + "px";
        }
      });

      this.$nextTick(() => {
        var imageImagePreview = document.getElementById(
          "horizontal-media-preview"
        );
        if (imageImagePreview !== null) {
          imageImagePreview.style.height =
            imageImagePreview.offsetWidth * 0.563 + "px";
        }
      });

      window.addEventListener("resize", function () {
        let imageImagePreview = this.document.getElementById(
          "horizontal-media-preview"
        );
        if (imageImagePreview !== null) {
          imageImagePreview.style.height =
            imageImagePreview.offsetWidth * 0.563 + "px";
        }
      });
    },
    handleDialog() {
      this.error = false;
      this.isDeleteDialogShown = false;
      this.dialogTVMapLocations = false;
      this.dialogTitle = null;
      this.dialogMessage = null;
    },
    pickFile() {
      let file = this.$refs.fileInput.files[0];
      this.setBackgroundImage(file);
    },
    pickVideo() {
      let file = this.$refs.fileInput.files[0];
      this.setBackgroundVideo(file);
    },
    dragnDropImage(e) {
      let file = e.dataTransfer.files[0];
      this.setBackgroundImage(file);
      this.toggleDropzone();
    },
    dragnDropVideo(e) {
      let file = e.dataTransfer.files[0];
      this.setBackgroundVideo(file);
      this.toggleDropzone();
    },
    showDeleteDialog(pictureID) {
      this.selectedPictureID = pictureID;
      this.isDeleteDialogShown = true;
      this.dialogTitle = i18n.global.t("deleteImage");
      this.dialogMessage = i18n.global.t("confirmDeleteImage");
    },
    showMapTVLocations() {
      this.dialogTVMapLocations = true;
    },
    async deletePicture() {
      this.handleDialog();
      this.previewImage = null;
      this.isLoadingAddDelete = true;
      try {
        await this.$store.dispatch("pictures/deletePicture", {
          classroomID: this.selectedDeviceID,
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
            classroomID: this.selectedDeviceID,
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
      var requiredWidth, requiredHeight;
      if (
        this.selectedTVContentOrientation ===
        this.contentOrientationEnum.Horizontal
      ) {
        requiredWidth = 1920;
        requiredHeight = 1080;
      } else {
        requiredWidth = 1080;
        requiredHeight = 1920;
      }

      if (file) {
        if (allowedFileTypes.includes(file.type)) {
          let reader = new FileReader();
          this.isImageSelected = true;
          reader.onload = (e) => {
            var img = new Image();
            img.src = e.target.result;
            img.onload = () => {
              if (
                img.width === requiredWidth &&
                img.height === requiredHeight
              ) {
                this.previewImage = e.target.result;
                this.previewImageType = e.target.result.type;
              } else {
                this.error = true;
                this.dialogTitle = i18n.global.t("error");
                this.dialogMessage = i18n.global.t(
                  "errorWrongContentResolutionFor" +
                    this.selectedTVContentOrientation +
                    "TV"
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
    setBackgroundVideo(file) {
      let videoSrc = document.querySelector("#video-source");
      let videoTag = document.querySelector("#video-tag");

      let requiredWidth, requiredHeight;
      if (
        this.selectedTVContentOrientation ===
        this.contentOrientationEnum.Horizontal
      ) {
        requiredWidth = 1920;
        requiredHeight = 1080;
      } else {
        requiredWidth = 1080;
        requiredHeight = 1920;
      }

      const allowedVideoTypes = ["video/mp4", "video/avi"];

      if (file) {
        if (allowedVideoTypes.includes(file.type)) {
          var reader = new FileReader();

          console.log(file.name);

          reader.onload = function (e) {
            videoSrc.src = e.target.result;
            videoTag.load();
          }.bind(this);

          var self = this;

          videoTag.addEventListener("loadedmetadata", function () {
            if (
              this.videoWidth === requiredWidth &&
              this.videoHeight === requiredHeight
            ) {
              this.previewVideo = true;
            } else {
              videoSrc.src = "";
              videoTag.load();
              self.handleVideoError();
            }
          });

          reader.readAsDataURL(file);
        } else {
          this.error = true;
          this.dialogTitle = i18n.global.t("error");
          this.dialogMessage = i18n.global.t("errorWrongVideoFileFormat");
        }
      }
    },
    toggleDropzone() {
      this.isDropzoneActive = !this.isDropzoneActive;
    },
    handleVideoError() {
      this.error = true;
      this.dialogTitle = i18n.global.t("error");
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

.add-media-btn-container {
  width: 77%;
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
  width: 69%;
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
  width: 77%;
  height: 2.9rem;
  font-size: 1.5rem;
  padding-top: 0.4rem;
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

.horizontal-media-icon {
  padding-top: 0.2rem;
}

.horizontal-media-preview {
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 0.5rem;
  width: 95%;
  margin: 38% 2rem;
}

.horizontal-media-preview.dropzone {
  border: 3px dashed rgb(203, 204, 214);
  border-radius: 0.5rem;
}

.add-horizontal-media-btn-container {
  width: 20%;
  min-width: 15rem;
}

.video-container {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}

.video-preview {
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 0.5rem;
  width: 69%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

@media screen and (min-width: 1800px) {
  .image-preview {
    width: 81%;
  }

  .add-media-btn-container {
    width: 81%;
  }

  .image-upload {
    width: 81%;
  }
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

  .horizontal-media-preview {
    width: 80%;
    margin: 1.5rem;
  }

  .add-media-btn-container {
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

  .add-media-btn-container {
    display: flex;
    justify-content: center;
  }
}
</style>
