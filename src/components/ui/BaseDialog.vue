<template>
  <transition name="modal-transition">
    <div v-if="show" class="modal-backdrop">
      <div class="modal-wrapper">
        <div v-if="!!dialogTVMapLocations" class="modal-tv-map-locations" @clickout="close">
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
            <div class="modal-tv-map-locations-card">
              <h2 class="modal-tv-map-locations-card-title">Etaža -1 (A)</h2>
              <div class="modal-tv-map-locations-card-title-delimiter"></div>
              <div
                class="modal-tv-map-locations-card-locations-image-A"
                :style="{
                  'background-image': `url(${require('@/assets/-1.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV010A"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV0190A1"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV0190A2"></router-link>
                </div>
              </div>
            </div>
            <div class="modal-tv-map-locations-card">
              <h2 class="modal-tv-map-locations-card-title">Etaža 0 (B)</h2>
              <div class="modal-tv-map-locations-card-title-delimiter"></div>
              <div
                class="modal-tv-map-locations-card-locations-image-B"
                :style="{
                  'background-image': `url(${require('@/assets/0.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV430B1"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV430B2"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV430B3"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV430B4"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV020B1"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV020B2"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV020B3"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV020B4"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV020B5"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV470B1"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV470B2"></router-link>
                </div>
              </div>
            </div>
            <div class="modal-tv-map-locations-card">
              <h2 class="modal-tv-map-locations-card-title">Etaža 1 (C)</h2>
              <div class="modal-tv-map-locations-card-title-delimiter"></div>
              <div
                class="modal-tv-map-locations-card-locations-image-C"
                :style="{
                  'background-image': `url(${require('@/assets/1.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV180C1"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV180C2"></router-link>
                </div>
              </div>
            </div>
            <div class="modal-tv-map-locations-card">
              <h2 class="modal-tv-map-locations-card-title">Etaža 2 (D)</h2>
              <div class="modal-tv-map-locations-card-title-delimiter"></div>
              <div
                class="modal-tv-map-locations-card-locations-image-D"
                :style="{
                  'background-image': `url(${require('@/assets/2.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV180D1"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV180D2"></router-link>
                </div>
              </div>
            </div>
            <div class="modal-tv-map-locations-card">
              <h2 class="modal-tv-map-locations-card-title">Etaža 3 (E)</h2>
              <div class="modal-tv-map-locations-card-title-delimiter"></div>
              <div
                class="modal-tv-map-locations-card-locations-image-E"
                :style="{
                  'background-image': `url(${require('@/assets/3.jpg')})`,
                }"
              >
                <div class="modal-tv-map-locations-card-locations">
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV180E1"></router-link>
                  <router-link :to="'/'" class="modal-tv-map-locations-card-locations-tv-TV180E2"></router-link>
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
  /* width: 98rem; */
  width: 110rem;
  /* height: 93vh; */
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
  overflow-y: initial;
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
  overflow-y: scroll;
  overflow-x: hidden;
  margin-left: 0.6rem;
}

.modal-tv-map-locations-card {
  display: flex;
  flex-direction: column;
  width: 105rem;
  height: 53rem;
}

.modal-tv-map-locations-card:not(:first-child) {
  margin-top: 1rem;
}

/* -----------------------------PRIVREMENO----------------------------- */
.modal-tv-map-locations-card:first-child, .modal-tv-map-locations-card:nth-child(2), 
.modal-tv-map-locations-card:nth-child(3), .modal-tv-map-locations-card:nth-child(4) {
  display: none;
}
/* -----------------------------PRIVREMENO----------------------------- */

.modal-tv-map-locations-card-title {
  font-size: 1.9rem;
  text-align: center;
  margin-bottom: 0.5rem;
}

.modal-tv-map-locations-card-title-delimiter {
  width: 90%;
  height: 0.3rem;
  align-self: center;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
}

[class^='modal-tv-map-locations-card-locations-image'] {
  width: 100%;
  height: 51rem;
  background: white;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

/* .modal-tv-map-locations-card-locations-image-A {
  height: 51rem;
}

.modal-tv-map-locations-card-locations-image-B {
  height: 51rem;
} */

.modal-tv-map-locations-card-locations {
  position: relative;
  width: 100%;
  height: 100%;
}

[class^='modal-tv-map-locations-card-locations-tv'] {
  position: absolute;
  width: 4rem;
  height: 1rem;
  border-radius: 0.3rem;
  background: rgb(227, 118, 38, 1);
  transition: 0.3s;
  z-index: 100;
}

[class^='modal-tv-map-locations-card-locations-tv']:hover {
  transform: scale(1.5);
  background: rgb(195, 14, 96, 1);
  z-index: 101;
}

.modal-tv-map-locations-card-locations-tv-TV010A {
  right: 23rem;
  top: 17.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV0190A1 {
  right: 42.5rem;
  bottom: 18.6rem;
}

.modal-tv-map-locations-card-locations-tv-TV0190A2 {
  right: 38.4rem;
  bottom: 18.6rem;
}

.modal-tv-map-locations-card-locations-tv-TV430B1 {
  left: 43.9rem;
  bottom: 21.1rem;
}

.modal-tv-map-locations-card-locations-tv-TV430B2 {
  left: 45.8rem;
  bottom: 22.3rem;
}

.modal-tv-map-locations-card-locations-tv-TV430B3 {
  width: 2.6rem;
  left: 43.1rem;
  bottom: 22.3rem;
}

.modal-tv-map-locations-card-locations-tv-TV430B4 {
  height: 4rem;
  width: 1rem;
  right: 45.1rem;
  top: 14.5rem;
}

.modal-tv-map-locations-card-locations-tv-TV020B1 {
  width: 2.6rem;
  right: 25.6rem;
  bottom: 24.6rem;
}

.modal-tv-map-locations-card-locations-tv-TV020B2 {
  width: 2.6rem;
  right: 28.3rem;
  bottom: 24.6rem;
}

.modal-tv-map-locations-card-locations-tv-TV020B3 {
  width: 2.6rem;
  right: 31rem;
  bottom: 24.6rem;
}

.modal-tv-map-locations-card-locations-tv-TV020B4 {
  right: 17.8rem;
  bottom: 25.3rem;
}

.modal-tv-map-locations-card-locations-tv-TV020B5 {
  right: 22.6rem;
  top: 15.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV470B1 {
  right: 34.1rem;
  bottom: 21.5rem;
}

.modal-tv-map-locations-card-locations-tv-TV470B2 {
  right: 38.2rem;
  bottom: 21.5rem;
}

.modal-tv-map-locations-card-locations-tv-TV180C1 {
  right: 38.3rem;
  bottom: 22.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV180C2 {
  right: 34.1rem;
  bottom: 22.8rem;
}

.modal-tv-map-locations-card-locations-tv-TV180D1 {
  right: 38.3rem;
  bottom: 23rem;
}

.modal-tv-map-locations-card-locations-tv-TV180D2 {
  right: 34.2rem;
  bottom: 23rem;
}

.modal-tv-map-locations-card-locations-tv-TV180E1 {
  right: 39.3rem;
  bottom: 23rem;
}

.modal-tv-map-locations-card-locations-tv-TV180E2 {
  right: 35.2rem;
  bottom: 23rem;
}

/* ----------------------------------------TELEVIZORI---------------------------------------- */

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
