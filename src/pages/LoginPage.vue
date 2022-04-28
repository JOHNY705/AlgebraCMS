<template>
  <div class="page-container">
    <div class="login-container">
      <img class="algebra-logo" src="@/assets/algebra_logo_color-black_v.png" />
      <h2>{{ $t("contentManagementSystem") }}</h2>
      <div class="login-username-container">
        <input type="text" name="text" autocomplete="off" required />
        <label for="text" class="label-name">
          <span class="content-name"> {{ $t("username") }} </span>
        </label>
      </div>
      <div class="login-password-container">
        <input type="password" name="text" autocomplete="off" required />
        <label for="text" class="label-name">
          <span class="content-name"> {{ $t("password") }} </span>
        </label>
      </div>
      <button class="btn-login">{{ $t("login") }}</button>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  background: rgb(236, 237, 241);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}

.login-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50rem;
  width: 45rem;
  border-radius: 0.5rem;
  background: white;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
}

.algebra-logo {
  width: 17rem;
}

.login-container h2 {
    font-size: 1.8rem;
}

.login-username-container {
    margin-top: 1rem;
}

.login-username-container,
.login-password-container {
  position: relative;
  overflow: hidden;
  width: 80%;
  height: 5rem;
  margin-bottom: 2rem;
}

.login-username-container input,
.login-password-container input {
  font-size: 1.6rem;
  font-family: "Stolzl-Book";
  width: 100%;
  height: 100%;
  color: black;
  padding-top: 2rem;
  border: none;
  margin-bottom: 0.5rem;
}

.login-username-container label,
.login-password-container label {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 2px solid rgb(209, 212, 222);
}

.login-container label::after,
.login-password-container::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-bottom: 3px solid #005587;
  transform: translateX(-100%);
  transition: all 0.3s ease;
}

.content-name {
  position: absolute;
  bottom: 0px;
  left: 0px;
  color: rgb(209, 212, 222);
  font-size: 1.8rem;
  padding-bottom: 5px;
  transition: all 0.3s ease;
}

.login-container input:focus {
  outline: none;
}

.login-container input:focus + .label-name .content-name,
.login-container input:valid + .label-name .content-name {
  transform: translateY(-120%);
  font-size: 1.4rem;
  left: 0px;
  color: #005587;
}
.login-container input:focus + .label-name::after,
.login-container input:valid + .label-name::after {
  transform: translateX(0%);
}

.btn-login {
  width: 80%;
  border: 0;
  background-color: #005587;
  height: 5rem;
  border-radius: 0.5rem;
  font-family: "Stolzl-Book";
  font-size: 1.8rem;
  color: white;
  margin-top: 2.5rem;
  margin-bottom: 2rem;
  transition: 0.3s ease-in-out;
}

.btn-login:hover {
  cursor: pointer;
  background: #046198;
}
</style>
