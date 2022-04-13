<template>
  <nav class="sidebar">
    <div class="sidebar-title">{{ $t("sidebarTitle") }}</div>
    <ul v-if="locations">
      <li>
        <a @click.prevent="toggleSlikeTabletiDDL" href="#">
          <img class="fas fa-tablet-alt tablet-icon" />
          {{ $t("contentForTablets") }}
          <div
            class="span tableti"
            :class="{ rotate: isSlikeTabletiDDLActive }"
          >
            <span class="fas fa-caret-down"></span>
          </div>
        </a>
        <ul
          class="slike-tableti-show"
          :class="{ showTableti: isSlikeTabletiDDLActive }"
        >
          <li v-for="location in locations" :key="location.id">
            <a
              class="tableti-slike-ddl-item"
              :class="{ active: location.isActive }"
              href="#"
              @clickout="closeSlikeTabletiMenu"
              @click.prevent="toggleSlikeTabletiMenu(location.id)"
              >{{ location.city + ", " + location.name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div v-else>
      <base-spinner></base-spinner>
    </div>
    <div
      v-for="location in locations"
      :key="location.id"
      class="slike-tableti-menu"
      :class="{ active: location.isActive }"
    >
      <ul class="slike-tableti-menu-ul">
        <li v-for="classroom in location.classrooms" :key="classroom.id">
          <router-link
            :to="'/Media/' + location.id + '/Classroom/' + classroom.id"
          >
            {{ classroom.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="dev-info">Algebra Dev Team&copy; 2022</div>
    <div class="app-info">{{ $t("version") }} 0.1.0</div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isSlikeTabletiDDLActive: false,
    };
  },
  computed: {
    locations() {
      return this.$store.getters["locations/locations"];
    },
  },
  methods: {
    toggleSlikeTabletiDDL() {
      this.isSlikeTabletiDDLActive = !this.isSlikeTabletiDDLActive;
    },
    toggleSlikeTabletiMenu(id) {
      this.locations.forEach((location) => {
        if (location.id !== id) {
          location.isActive = false;
        }
      });
      this.locations.find((location) => location.id === id).isActive =
        !this.locations.find((location) => location.id === id).isActive;
    },
    closeSlikeTabletiMenu() {
      this.locations.forEach((location) => {
        location.isActive = false;
      });
    },
    async loadLocations() {
      try {
        await this.$store.dispatch("locations/loadLocations");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.loadLocations();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  user-select: none;
  box-sizing: border-box;
}

.sidebar {
  position: fixed;
  min-width: 30rem;
  width: 19.5%;
  height: 90%;
  left: 0;
  bottom: 0;
  background: rgb(29, 32, 41);
  z-index: 99;
}

.sidebar-title {
  margin-top: 5%;
  padding: 1.5rem 0rem;
  color: white;
  font-weight: 400;
  font-size: 1.7rem;
  text-align: center;
}

.tablet-icon {
  height: 2rem;
  margin-right: 0.8rem;
}

nav ul {
  height: auto;
  width: 100%;
  list-style: none;
}

nav ul li {
  line-height: 5rem;
  border-bottom: 0.1rem solid rgb(204, 204, 204);
}

nav ul li a {
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 1.7rem;
  padding-left: 1rem;
  display: block;
  width: 100%;
  font-weight: 400;
  transition: 0.3s;
}

nav ul li.active a {
  border-left-color: transparent;
}

nav ul ul {
  position: static;
  display: none;
}

nav ul .slike-tableti-show.showTableti {
  display: block;
}

nav ul li ul li a {
  border-left-color: transparent;
}

nav ul ul li {
  line-height: 4rem;
  border-bottom: none;
}

nav ul ul li a {
  font-size: 1.6rem;
  padding-left: 4.8rem;
}

nav ul li.active ul li a {
  border-left-color: transparent;
  border: 0;
}

nav ul ul li a:hover {
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  color: white;
}

nav ul ul li a.active {
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  color: white;
}

nav ul li a .span {
  position: absolute;
  top: 50%;
  right: 2rem;
  font-size: 2.5rem;
  transform: translateY(-50%);
  transition: transform 0.3s;
}

nav ul li a .span.rotate {
  transform: translateY(-50%) rotate(-180deg);
}

.slike-tableti-menu {
  position: absolute;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  top: 15rem;
  z-index: 98;
  left: 100%;
  height: 100%;
  min-width: 30rem;
  width: 100%;
  padding-top: 5%;
  background: rgb(40, 45, 59);
  overflow-y: auto;
  transition: 0.5s;
}

::-webkit-scrollbar {
  width: 0.6rem;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  /* border-radius: 0.5rem; */
}

.slike-tableti-menu ul {
  padding-top: 2rem;
  height: 100%;
}

.slike-tableti-menu ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 4rem;
  border-bottom: 0rem solid white;
}

.slike-tableti-menu ul li a {
  width: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  text-align: center;
  color: white;
  border-left: 0;
  transition: 0.5s;
}

.slike-tableti-menu.active {
  visibility: visible;
  top: 0;
  opacity: 0.99;
}

.slike-tableti-menu ul li a:hover {
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  color: white;
}

.slike-tableti-menu ul li a.active {
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
}

.nav ul li a.active {
  background: white;
  color: rgb(195, 30, 97);
}

.nav ul li ul li a.active {
  background: white;
  color: rgb(195, 30, 97);
}

.dev-info {
  position: absolute;
  color: rgb(98, 104, 122);
  text-align: center;
  bottom: 2.2rem;
  left: 0;
  width: 100%;
  font-size: 1.1rem;
}

.app-info {
  position: absolute;
  color: rgb(98, 104, 122);
  text-align: center;
  height: 15px;
  width: 100%;
  bottom: 0.8rem;
  left: 0;
  font-size: 1.1rem;
}
</style>
