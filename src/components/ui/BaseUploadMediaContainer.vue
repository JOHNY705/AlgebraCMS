<template>
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
        <span v-if="pictures.length === 5" class="add-image-btn-tooltiptext">{{
          $t("tooltipMaxNumberOfImages")
        }}</span>
        <img class="fa-solid fa-circle-plus" />{{ $t("addImage") }}
      </button>
    </div>
  </div>
</template>

<style scoped>
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

.image-upload-tooltip-label {
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
}

.tooltip-container {
  display: flex;
  flex-direction: row;
  margin: 0;
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

.tooltip {
  height: 1.7rem;
  width: 1.7rem;
  color: rgb(104, 101, 101);
  margin-right: 0.5rem;
}

.choose-image-lbl {
  font-size: 1.6rem;
  font-weight: 400;
  width: auto;
  text-align: center;
  color: rgb(104, 101, 101);
}

.image-upload {
  width: 30%;
}

.image-select {
  color: black;
  font-size: 1.4rem;
}

.fa-image {
  margin-right: 0.6rem;
  width: 1.8rem;
  height: 1.8rem;
  padding-top: 0.2rem;
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

@media screen and (max-width: 1279px) {
  .image-upload-container {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 50%;
  }

  .choose-image-lbl {
    width: auto;
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
  .image-upload-container {
    width: 100%;
    margin: 0;
    margin-top: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50%;
  }

  .image-upload,
  .add-image-btn {
    min-width: 18rem;
  }

  .image-preview {
    width: 31%;
    margin: 1rem 0;
  }

  .add-image-btn-container {
    display: flex;
    justify-content: center;
  }
}
</style>
