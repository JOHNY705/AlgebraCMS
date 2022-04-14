<template>
  <transition name="modal-transition">
    <div v-if="show" class="modal-backdrop">
      <div class="modal-wrapper">
        <div class="modal">
          <header class="modal-header">
            <div class="header">
              <img
                v-if="!!error"
                class="fas fa-exclamation-triangle danger-icon"
              />
            </div>
          </header>
          <section class="modal-body">
            <h2 class="body-title"></h2>
            <h3 class="body-description"></h3>
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
    message: {
      type: String,
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
