<template>
  <header>
    <nav>
      <router-link to="/">
        <img class="algebra-logo" src="@/assets/Algebra_logo.png" />
      </router-link>
      <!-- <div @clickout="closeUserMenu" class="action">
        <div class="profile" @click="menuToggle">
          <img class="fas fa-user user-icon" />
          <p class="user-name">Pero Peric</p>
        </div>
        <div class="user-menu" :class="{ active: showUserMenu }">
          <ul>
            <li>
              <a href="#">
                <img class="fas fa-sign-out-alt menu-logout-icon" />{{ $t("logout") }}
              </a>
            </li>
          </ul>
        </div>
      </div> -->
    </nav>
  </header>
</template>

<script>
import "clickout-event";

export default {
  data() {
    return {
      showUserMenu: false,
    };
  },
  methods: {
    menuToggle() {
      this.showUserMenu = !this.showUserMenu;
    },
    closeUserMenu() {
      this.showUserMenu = false;
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  min-height: 8rem;
  height: 10%;
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
  min-width: 30rem;
  width: 19.5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

header nav {
  width: 100%;
  min-height: 8rem;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.algebra-logo {
  margin: 0;
  width: 60%;
  max-width: 21rem;
}

.action {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 32rem;
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
  text-align: center;
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
  top: 100%;
  right: -32rem;
  background: rgb(40, 45, 59);
  width: 32rem;
  transition: 0.5s;
  visibility: hidden;
  opacity: 0;
}

.user-menu.active {
  top: 100%;
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

.action .user-menu ul li:hover .menu-logout-icon {
  opacity: 1;
  color: white;
}

.action .user-menu ul li a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  text-decoration: none;
  color: white;
  width: 100%;
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
