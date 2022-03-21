<template>
  <header>
    <nav>
      <router-link to="/"
        ><img class="algebra-logo" src="@/assets/Algebra_logo.png"
      /></router-link>
      <div @clickout="closeUserMenu" class="action">
        <div class="profile" @click="menuToggle">
          <img class="fas fa-user user-icon" />
          <p class="user-name">Pero Peric</p>
        </div>
        <div class="user-menu" :class="{ active: showUserMenu }">
          <ul>
            <!-- <li>
              <a href="#"
                ><img class="fas fa-user-circle menu-user-icon" />Profil</a
              >
            </li>
            <li>
              <a href="#"
                ><img class="fas fa-cog menu-settings-icon" />Postavke</a
              >
            </li> -->
            <li>
              <a href="#"
                ><img class="fas fa-sign-out-alt menu-logout-icon" />Odjava
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import 'clickout-event';

export default {
  data() {
    return {
      showUserMenu: false,
    }
  },
  methods: {
    menuToggle() {
      //document.querySelector('.user-menu').classList.toggle('active');
      this.showUserMenu = !this.showUserMenu;
    },
    closeUserMenu() {
      //document.querySelector('.user-menu').classList.remove('active');
      this.showUserMenu = false;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 8rem;
  z-index: 100;
  background-color: black;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: white;
  display: inline-block;
  width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

header nav {
  width: 100%;
  height: 8rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.algebra-logo {
  margin: 0;
  height: 5.5rem;
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  min-width: 30rem;
  background: black;
  transition: 0.3s;
}

.action:hover {
  background: rgb(29, 32, 41);
}

.user-icon {
  height: 2.1rem;
  width: 2.1rem;
  color: white;
}

.user-name {
  margin: 0;
  margin-left: 0.6rem;
  font-size: 1.7rem;
  color: white;
  transition: 0.3s;
  padding-top: 0.2rem;
}

.action .profile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0 2.5rem;
  cursor: pointer;
}

.action .user-menu {
  position: absolute;
  top: 8rem;
  right: -30rem;
  background: rgb(40, 45, 59);
  width: 30rem;
  transition: 0.5s;
  visibility: hidden;
  opacity: 0;
}

.user-menu.active {
  top: 8rem;
  right: 0;
  visibility: visible;
  opacity: 0.99;
  z-index: -100;
}

.action .user-menu ul {
  padding: 0;
  margin-top: 0;
}

.action .user-menu ul li {
  list-style: none;
}

.action .user-menu ul li:hover .menu-user-icon {
  opacity: 1;
  color: white;
}

.action .user-menu ul li:hover .menu-settings-icon {
  opacity: 1;
  color: white;
}

.action .user-menu ul li:hover .menu-logout-icon {
  opacity: 1;
  color: white;
}

.action .user-menu ul li a {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  text-decoration: none;
  color: white;
  font-size: 1.7rem;
  padding: 0.8rem 10rem;
  transition: 0.3s;
  height: 5rem;
}

.action .user-menu ul li:hover a {
  background: linear-gradient(45deg, rgb(221, 111, 38), rgb(195, 30, 97));
  background: -webkit-linear-gradient(left bottom, #dd6f26 0%, #c31e61 100%);
  background: -moz-linear-gradient(left bottom, #dd6f26 0%, #c31e61 100%);
  color: white;
}

.action .user-menu ul li:last-child:hover a {
  background: rgb(190, 14, 14);
  color: white;
}

.close {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.close-icon {
  color: white;
  width: 2.3rem;
  height: 2.3rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  transition: 0.3s;
  opacity: 0.8;
}

.close-icon:hover {
  cursor: pointer;
  background: red;
  border-radius: 0.4rem;
  opacity: 1;
}

.menu-user-icon,
.menu-settings-icon,
.menu-logout-icon {
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  color: white;
  margin-right: 0.6rem;
  opacity: 0.6;
  transition: 0.5s;
}
</style>
