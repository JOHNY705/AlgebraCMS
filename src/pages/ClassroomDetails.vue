<template>
  <div class="page-container" v-if="!isLoading">
    <div class="container">
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
            <div class="images-table">
              <div class="images-header">
                <div class="image-header-number"></div>
                <div class="image-header-image"></div>
                <h2 class="image-header-image-title">
                  {{ $t("pictureName") }}
                </h2>
                <h2 class="image-header-image-date">{{ $t("changeDate") }}</h2>
                <div class="image-header-image-delete"></div>
              </div>
              <div class="image-cards">
                <div class="image-card">
                  <div class="image-card-number">1</div>
                  <div class="image-card-image">
                    <img
                      class="tablet-image"
                      src="@/assets/NikolaTesla-2-01.jpg"
                    />
                  </div>
                  <div class="image-card-image-title">Nikola_Tesla.jpg</div>
                  <div class="image-card-image-date">28.12.2021. 12:00:00</div>
                  <div class="image-card-image-delete">
                    <a
                      href="#"
                      class="delete-image-btn"
                      @click.prevent="showDeleteDialog(12)"
                    >
                      <img class="far fa-trash-alt delete-icon" />
                    </a>
                  </div>
                </div>
              </div>
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
              <label class="odabir-slike-lbl">
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
              :style="{ 'background-image': `url(${previewImage})` }"
            ></div>
            <button class="add-image-btn">
              <img class="fa-solid fa-circle-plus" />{{ $t("addImage") }}
            </button>
          </div>
        </div>
      </div>
      <DeleteDialog v-show="isDeleteDialogShown" @close="closeDeleteDialog()">
        <template v-slot:footer>
          <button class="confirm-delete-btn" @click.prevent="closeDeleteDialog">
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

// window.addEventListener("resize", function () {
//   var imageImagePreview = document.getElementById("image-preview");
//   if (imageImagePreview !== null) {
//     imageImagePreview.style.height =
//       imageImagePreview.offsetWidth * 1.55 + "px";
//   }
// });

export default {
  data() {
    return {
      previewImage: null,
      isModalShown: false,
      isDeleteDialogShown: false,
      selectedImageId: null,
      loading: false,
    };
  },
  computed: {
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
        (c) => c.id === this.selectedClassroomID).name;
    },
    selectedCityAndAddress() {
      return this.selectedLocation.city + ", " + this.selectedLocation.name;
    },
  },
  created() {
    this.loadPicturesForClassroom();
  },
  mounted() {
    var imageImagePreview = document.getElementById("image-preview");
    if (imageImagePreview !== null) {
      imageImagePreview.style.height =
        imageImagePreview.offsetWidth * 1.55 + "px";
    }

    window.addEventListener("resize", function () {
      if (imageImagePreview !== null) {
        imageImagePreview.style.height =
          imageImagePreview.offsetWidth * 1.55 + "px";
      }
    });
  },
  components: {
    DeleteDialog,
  },
  methods: {
    async loadPicturesForClassroom() {
      this.loading = true;
      try {
        await this.$store.dispatch("pictures/loadPictures", {
          classroomID: this.selectedClassroomID,
        });
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
    showDeleteModal(id) {
      this.selectedImageId = id;
      this.isModalShown = !this.isModalShown;
      console.log(this.selectedImageId);
    },
    showDeleteDialog() {
      this.isDeleteDialogShown = true;
    },
    closeDeleteDialog() {
      this.isDeleteDialogShown = false;
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
  width: 100vw;
  position: absolute;
  bottom: 0;
  background: rgb(223, 224, 231);
}

.container {
  height: 100%;
  margin-left: max(30rem, 19.5%);
  display: flex;
  justify-content: center;
  padding: 2rem;
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

.tablet-image {
  width: 5.1rem;
  height: 7.9rem;
  object-fit: contain;
  border-radius: 0.5rem;
  transition: 0.3s;
}

.tablet-image:hover {
  transform: scale(3);
  z-index: 99999;
}

.tablet-image-name {
  text-align: center;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
}

.image-number {
  margin-right: 1rem;
}

.tablet-image-btn-delete {
  font-size: 1.6rem;
  color: white;
  padding: 0.5rem;
  margin-top: 0.5rem;
  width: 9.7rem;
  border-radius: 0.5rem;
  border: 0;
  background: rgb(189, 17, 17);
  transition: 0.3s;
}

.tablet-image-btn-delete:hover {
  transform: scale(0.95);
  cursor: pointer;
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
  background: rgb(223, 224, 231);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 0.5rem;
  height: 75%;
  width: 77.61%;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.odabir-slike-lbl {
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

.images-table {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.images-header {
  width: 100%;
  height: 2.9rem;
  background: rgb(221, 111, 38);
  border-radius: 0.5rem 0.5rem 0 0rem;
  display: flex;
  flex-direction: row;
}

.image-header-number {
  width: 8%;
}

.image-header-image {
  width: 14%;
  text-align: left;
}

.image-header-image-title {
  width: 34%;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
}

.image-header-image-date {
  width: 34%;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.6rem;
  font-weight: 400;
}

.image-header-image-delete {
  width: 10%;
}

.image-cards {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  overflow: scroll;
}

.image-card {
  display: flex;
  width: 100%;
  height: 10rem;
  padding-top: 0.5rem;
  padding-bottom: 0.3rem;
  background: white;
  align-items: center;
}

.image-card:nth-child(odd) {
  background: rgb(232, 233, 238);
}

.image-card:last-child {
  border-radius: 0 0 0.5rem 0.5rem;
}

.image-card-number {
  width: 8%;
  text-align: center;
  font-size: 1.3rem;
}

.image-card-image {
  width: 14%;
}

.image-card-image-title {
  width: 34%;
  font-size: 1.3rem;
}

.image-card-image-date {
  width: 34%;
  font-size: 1.3rem;
}

.image-card-image-delete {
  width: 10%;
  display: flex;
  justify-content: center;
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
  border-radius: 0.5rem;
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
  }

  .image-upload-container {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .odabir-slike-lbl {
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
