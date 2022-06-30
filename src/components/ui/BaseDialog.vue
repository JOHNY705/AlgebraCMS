<template>
  <transition name="modal-transition">
    <div v-if="show" class="modal-backdrop">
      <div class="modal-wrapper">
        <div
          v-if="!!dialogTVMapLocations"
          class="modal-tv-map-locations"
          @clickout="close"
        >
          <div class="close-icon-container" @click="close">
            <img class="fa solid fa-xmark close-icon" />
          </div>
          <div class="modal-tv-map-locations-header">
            <h2 class="modal-tv-map-locations-header-title">
              Lokacije televizora
            </h2>
            <h2 class="modal-tv-map-locations-header-location">
              Zagreb, Gradišćanska
            </h2>
          </div>
          <div class="modal-tv-map-locations-body">
            <div class="floor-tabs">
              <button
                class="btn-tab-floor btn-floor-active"
                @click="openFloor($event, 'Floor A')"
              >
                {{ $t("floorA") }}
              </button>
              <button
                class="btn-tab-floor"
                @click="openFloor($event, 'Floor B')"
              >
                {{ $t("floorB") }}
              </button>
              <button
                class="btn-tab-floor"
                @click="openFloor($event, 'Floor C')"
              >
                {{ $t("floorC") }}
              </button>
              <button
                class="btn-tab-floor"
                @click="openFloor($event, 'Floor D')"
              >
                {{ $t("floorD") }}
              </button>
              <button
                class="btn-tab-floor"
                @click="openFloor($event, 'Floor E')"
              >
                {{ $t("floorE") }}
              </button>
              <button
                class="btn-tab-floor"
                @click="openFloor($event, 'Floor F')"
              >
                {{ $t("floorF") }}
              </button>
            </div>
            <div
              id="Floor A"
              class="modal-tv-map-locations-card-floor"
              style="display: flex"
            >
              <div
                class="modal-tv-map-locations-card-locations-image-A"
                :style="{
                  'background-image': `url(${require('@/assets/-1.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link
                    :to="'/Media/233/TV/43'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV010A"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/96'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV0190A1"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/97'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV0190A2"
                  ></router-link>
                </div>
              </div>
            </div>
            <div id="Floor B" class="modal-tv-map-locations-card-floor">
              <div
                class="modal-tv-map-locations-card-locations-image-B"
                :style="{
                  'background-image': `url(${require('@/assets/0.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link
                    :to="'/Media/233/TV/106'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV430B1"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/107'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV430B2"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/108'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV430B3"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/43'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV430B4R"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/100'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV020B1"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/101'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV020B2"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/102'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV020B3"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/98'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV020B4"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/99'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV020B5"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/103'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV470B1"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/43'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV470B2"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/121'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV-Totem"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/0'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV430B4"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/0'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV030B1"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/0'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV031B1"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/0'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV033B1"
                  ></router-link>
                </div>
              </div>
            </div>
            <div id="Floor C" class="modal-tv-map-locations-card-floor">
              <div
                class="modal-tv-map-locations-card-locations-image-C"
                :style="{
                  'background-image': `url(${require('@/assets/1.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link
                    :to="'/Media/233/TV/43'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV180C1"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/113'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV180C2"
                  ></router-link>
                </div>
              </div>
            </div>
            <div id="Floor D" class="modal-tv-map-locations-card-floor">
              <div
                class="modal-tv-map-locations-card-locations-image-D"
                :style="{
                  'background-image': `url(${require('@/assets/2.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link
                    :to="'/Media/233/TV/43'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV180D1"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/115'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV180D2"
                  ></router-link>
                </div>
              </div>
            </div>
            <div id="Floor E" class="modal-tv-map-locations-card-floor">
              <div
                class="modal-tv-map-locations-card-locations-image-E"
                :style="{
                  'background-image': `url(${require('@/assets/3.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link
                    :to="'/Media/233/TV/43'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV180E1"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/117'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV180E2"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/0'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV180E3"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/0'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV180E4"
                  ></router-link>
                </div>
              </div>
            </div>
            <div id="Floor F" class="modal-tv-map-locations-card-floor">
              <div
                class="modal-tv-map-locations-card-locations-image-E"
                :style="{
                  'background-image': `url(${require('@/assets/4.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link
                    :to="'/Media/233/TV/43'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV190F1"
                  ></router-link>
                  <router-link
                    :to="'/Media/233/TV/127'"
                    active-class="modal-tv-map-locations-card-locations-tv-active"
                    class="modal-tv-map-locations-card-locations-tv-TV190F2"
                  ></router-link>
                </div>
              </div>
            </div>
            <div class="modal-tv-map-locations-card"></div>
          </div>
          <footer class="modal-footer">
            <slot name="footer"></slot>
          </footer>
        </div>
        <div v-else class="modal">
          <div class="close-icon-container" @click="close">
            <img class="fa solid fa-xmark close-icon" />
          </div>
          <header class="modal-header">
            <section class="header">
              <img
                v-if="!!dialogWarning"
                class="fas fa-exclamation-triangle danger-icon"
              />
            </section>
          </header>
          <section class="modal-body">
            <h2 class="body-title">{{ title }}</h2>
            <h3 class="body-description">{{ message }}</h3>
            <slot name="body"></slot>
          </section>
          <footer class="modal-footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    dialogWarning: {
      type: Boolean,
      required: false,
    },
    dialogTVMapLocations: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    openFloor(event, floorName) {
      var i, floors, tablinks;

      floors = document.getElementsByClassName(
        "modal-tv-map-locations-card-floor"
      );
      for (i = 0; i < floors.length; i++) {
        floors[i].style.display = "none";
      }

      tablinks = document.getElementsByClassName("btn-tab-floor");
      for (i = 0; i < floors.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(
          " btn-floor-active",
          ""
        );
      }
      document.getElementById(floorName).style.display = "flex";
      event.currentTarget.className += " btn-floor-active";
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 45rem;
  height: auto;
  margin: 0rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
}

.modal-tv-map-locations {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 110rem;
  height: 70rem;
  min-width: 110rem;
  min-height: 70rem;
  margin: 0rem auto;
  padding: 1.5rem;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-y: hidden;
}

.modal-tv-map-locations-header-title {
  font-size: 2.3rem;
  text-align: center;
  margin: 0;
}

.modal-tv-map-locations-header-location {
  font-size: 1.7rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: rgb(104, 101, 101);
}

.modal-tv-map-locations-body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  width: 105rem;
  height: 85%;
  overflow-y: hidden;
  overflow-x: hidden;
}

.floor-tabs {
  display: flex;
  width: 100%;
  justify-content: center;
  background: linear-gradient(45deg, rgb(221, 111, 38), rgb(195, 30, 97)) center
    bottom no-repeat;
  background: -webkit-linear-gradient(left bottom, #dd6f26 0%, #c31e61 100%)
    center bottom no-repeat;
  background: -moz-linear-gradient(left bottom, #dd6f26 0%, #c31e61 100%) center
    bottom no-repeat;
  background-size: 92% 0.3rem;
}

[class^="btn-tab-floor"] {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border: 0;
  font-family: "Stolzl-Book";
  font-size: 1.8rem;
  font-weight: 600;
  background: transparent;
  padding: 0.5rem 1rem;
  transition: 0.3s;
  margin-bottom: 0.2rem;
}

[class^="btn-tab-floor"]:hover {
  cursor: pointer;
  color: white;
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
}

.btn-floor-active {
  color: white;
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
}

[class^="modal-tv-map-locations-card-floor"] {
  display: none;
  flex-direction: column;
  width: 105rem;
  height: 53rem;
}

[class^="modal-tv-map-locations-card-locations-image"] {
  width: 100%;
  height: 51rem;
  background: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.modal-tv-map-locations-card-locations {
  position: relative;
  width: 100%;
  height: 100%;
}

[class^="modal-tv-map-locations-card-locations-tv"] {
  position: absolute;
  width: 4rem;
  height: 1rem;
  border-radius: 0.3rem;
  background: rgb(227, 118, 38, 1);
  transition: 0.3s;
  z-index: 100;
}

[class^="modal-tv-map-locations-card-locations-tv"]:hover {
  transform: scale(1.5);
  background: rgb(195, 14, 96, 1);
  z-index: 101;
}

.modal-tv-map-locations-card-locations-tv-active {
  position: absolute;
  transform: scale(1.2);
  background: rgb(195, 14, 96, 1);
  z-index: 102;
}

.modal-tv-map-locations-card-locations-tv-active:hover {
  background: rgb(195, 14, 96, 1);
}

.modal-tv-map-locations-card-locations-tv-TV010A {
  right: 23rem;
  top: 19.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV0190A1 {
  right: 42.7rem;
  bottom: 19.5rem;
}

.modal-tv-map-locations-card-locations-tv-TV0190A2 {
  right: 38.5rem;
  bottom: 19.5rem;
}

.modal-tv-map-locations-card-locations-tv-TV430B1 {
  left: 46.8rem;
  bottom: 22.7rem;
}

.modal-tv-map-locations-card-locations-tv-TV430B2 {
  left: 48.7rem;
  bottom: 23.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV430B3 {
  width: 2.6rem;
  left: 46rem;
  bottom: 23.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV430B4R {
  height: 3.5rem;
  width: 1rem;
  right: 43.3rem;
  top: 16.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV020B1 {
  width: 2.6rem;
  right: 24.5rem;
  bottom: 26rem;
}

.modal-tv-map-locations-card-locations-tv-TV020B2 {
  width: 2.6rem;
  right: 27.2rem;
  bottom: 26rem;
}

.modal-tv-map-locations-card-locations-tv-TV020B3 {
  width: 2.6rem;
  right: 29.9rem;
  bottom: 26rem;
}

.modal-tv-map-locations-card-locations-tv-TV020B4 {
  right: 17rem;
  bottom: 26.9rem;
}

.modal-tv-map-locations-card-locations-tv-TV020B5 {
  right: 21.8rem;
  top: 17.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV470B1 {
  right: 32.6rem;
  bottom: 23rem;
}

.modal-tv-map-locations-card-locations-tv-TV470B2 {
  right: 36.8rem;
  bottom: 23rem;
}

.modal-tv-map-locations-card-locations-tv-TV-Totem {
  left: 1.4rem;
  top: 10.5rem;
}

.modal-tv-map-locations-card-locations-tv-TV430B4 {
  height: 3.5rem;
  width: 1rem;
  left: 39.5rem;
  top: 18.5rem;
}

.modal-tv-map-locations-card-locations-tv-TV030B1 {
  height: 3.5rem;
  width: 1rem;
  left: 39.5rem;
  top: 28.3rem;
}

.modal-tv-map-locations-card-locations-tv-TV031B1 {
  height: 3.5rem;
  width: 1rem;
  left: 51rem;
  top: 28.7rem;
}

.modal-tv-map-locations-card-locations-tv-TV033B1 {
  height: 3.5rem;
  width: 1rem;
  left: 62.9rem;
  top: 28.6rem;
}

.modal-tv-map-locations-card-locations-tv-TV180C1 {
  right: 38.5rem;
  bottom: 24.3rem;
}

.modal-tv-map-locations-card-locations-tv-TV180C2 {
  right: 34.3rem;
  bottom: 24.3rem;
}

.modal-tv-map-locations-card-locations-tv-TV180D1 {
  right: 38.6rem;
  bottom: 24.6rem;
}

.modal-tv-map-locations-card-locations-tv-TV180D2 {
  right: 34.5rem;
  bottom: 24.6rem;
}

.modal-tv-map-locations-card-locations-tv-TV180E1 {
  right: 39rem;
  bottom: 26.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV180E2 {
  right: 34.8rem;
  bottom: 26.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV180E3 {
  left: 27rem;
  bottom: 23.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV180E4 {
  left: 31.2rem;
  bottom: 23.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV190F1 {
  right: 38.6rem;
  bottom: 27.5rem;
}

.modal-tv-map-locations-card-locations-tv-TV190F2 {
  right: 34.5rem;
  bottom: 27.5rem;
}

.close-icon-container {
  position: absolute;
  right: 1rem;
  top: 0.8rem;
  height: 2.2rem;
  width: 2.2rem;
}

.close-icon {
  color: black;
  font-size: 2rem;
  height: 100%;
  width: 100%;
}

.close-icon:hover {
  cursor: pointer;
  background: red;
  border-radius: 30%;
  color: white;
  transition: 0.3s ease-in-out;
}

.modal-header,
.modal-footer {
  display: flex;
}

.modal-header {
  width: 100%;
  font-size: 7rem;
  height: 7rem;
  align-items: center;
  justify-content: center;
  color: rgb(185, 19, 19);
}

.modal-body {
  margin-top: 0.5rem;
  display: flex;
  text-align: center;
  flex-direction: column;
}

.body-title {
  font-size: 2.6rem;
  font-weight: 400;
  margin: 1.4rem;
}

.body-description {
  margin-top: 0.5rem;
  font-size: 1.9rem;
  font-weight: 400;
  margin-bottom: 2rem;
}

.modal-footer {
  justify-content: space-around;
}

.confirm-delete-btn,
.cancel-delete-btn,
.close-dialog-btn {
  font-family: "Stolzl-Book";
  border-radius: 0.5rem;
  color: white;
  text-align: center;
  width: 12rem;
  height: 3.5rem;
  font-size: 1.8rem;
  transition: 0.3s;
  border: 0;
}

.confirm-delete-btn:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.cancel-delete-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
  background: rgb(185, 19, 19);
  color: white;
}

.confirm-delete-btn {
  background: rgb(18, 70, 9);
}

.close-dialog-btn {
  background: rgb(29, 32, 41);
}

.close-dialog-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.cancel-delete-btn {
  background: rgb(214, 211, 211);
  color: black;
  box-shadow: 0 0 1px rgb(0 0 0 / 0.2);
}

.modal-transition-enter-from,
.modal-transition-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.modal-transition-enter-active {
  transition: all 0.3s ease-out;
}

.modal-transition-leave-active {
  transition: all 0.3s ease-in;
}

.modal-transition-enter-to,
.modal-transition-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
