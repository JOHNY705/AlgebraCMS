<template>
  <transition name="modal-transition">
    <div v-if="show" class="modal-backdrop">
      <div class="modal-wrapper">
        <div class="modal">
          <div class="close-icon-container" @click="close">
            <img class="fa solid fa-xmark close-icon"/>
          </div>
          <header class="modal-header">
            <section class="header">
              <img
                v-if="!!dialogError"
                class="fas fa-exclamation-triangle danger-icon"
              />
            </section>
          </header>
          <section class="modal-body">
            <h2 class="body-title">{{ title }}</h2>
            <h3 class="body-description"> {{ message }}</h3>
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
    dialogError: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    close() {
      console.log("Klik");
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
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
  height: 30rem;
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
  display: flex;
  flex-direction: column;
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
  margin: 1.4rem
}

.body-description {
  margin-top: 0.5rem;
  font-size: 1.9rem;
  font-weight: 400;
}

.modal-footer {
  justify-content: space-around;
}

.confirm-delete-btn,
.cancel-delete-btn {
  font-family: 'Stolzl-Book';
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
  color:white;
}

.confirm-delete-btn {
  background: rgb(18, 70, 9);
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
