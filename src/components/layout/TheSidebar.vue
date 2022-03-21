<template>
  <nav class="sidebar">
    <div class="sidebar-title">Upravljanje sadržajem</div>
    <ul>
      <li>
        <a @click.prevent="showTabletiDDL" href="#"
          ><img class="fas fa-tablet-alt tablet-icon" />Slike za tablete
          <div class="span tableti">
            <span class="fas fa-caret-down"></span></div
        ></a>
        <ul class="slike-tableti-show">
          <li>
            <a
              class="gradiscanska-tableti-slike-link"
              :class="{ active: isActive }"
              href="#"
              @clickout="closeGradiscanskaSlikeTabletiMenu"
              @click.prevent="toggleGradiscanskaSlikeTabletiMenu"
              >Zagreb, Gradišćanska</a
            >
          </li>
        </ul>
      </li>
    </ul>
    <div class="gradiscanska-slike-tableti-menu" :class="{ active: isActive }">
      <ul class="gradiscanska-slike-tableti-menu-ul">
        <li v-for="classroom in classrooms" :key="classroom.id">
          <router-link :to="'/Media/Classroom/' + classroom.id">{{
            classroom.classroomName
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="dev-info">Algebra Dev Team&copy; 2022</div>
    <div class="app-info">Verzija 0.1.0</div>
  </nav>
</template>

<script>
import 'clickout-event';
import jQuery from 'jquery';
const $ = jQuery;

export default {
  props: ['id', 'classroomName'],
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    classrooms() {
      return this.$store.getters['classrooms/classrooms'];
    },
  },
  methods: {
    showTabletiDDL() {
      $('.slike-tableti-show').toggleClass('showTableti');
      $('.tableti').toggleClass('rotate');
      this.toggleActive();
    },
    toggleActive() {
      $('nav ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('nav ul li ul li').removeClass('active');
      });
    },
    toggleGradiscanskaSlikeTabletiMenu() {
      this.isActive = !this.isActive;
    },
    closeGradiscanskaSlikeTabletiMenu() {
      this.isActive = false;
    },
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
  width: 30rem;
  height: 100%;
  left: 0;
  background: rgb(29, 32, 41);
  z-index: 99;
}

.sidebar-title {
  margin-top: 8rem;
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

nav ul .slike-televizori-show.showTelevizori {
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

.gradiscanska-slike-tableti-menu {
  position: absolute;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  top: 15rem;
  z-index: 98;
  left: 30rem;
  height: 100%;
  width: 300px;
  padding-top: 8rem;
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
  border-radius: 0.5rem;
}

.gradiscanska-slike-tableti-menu ul {
  padding-top: 2rem;
  height: 100%;
}

.gradiscanska-slike-tableti-menu ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 4rem;
  border-bottom: 0rem solid white;
}

.gradiscanska-slike-tableti-menu ul li a {
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

.gradiscanska-slike-tableti-menu.active {
  visibility: visible;
  top: 0;
  opacity: 0.99;
}

.gradiscanska-slike-tableti-menu ul li a:hover {
  background: linear-gradient(45deg, rgb(227, 118, 38, 1), rgb(195, 14, 96, 1));
  background: -webkit-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  background: -moz-linear-gradient(left bottom, #e37526 0%, #c30e5f 100%);
  color: white;
}

.gradiscanska-slike-tableti-menu ul li a.active {
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
