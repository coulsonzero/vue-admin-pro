<template>
  <router-link to="nav">
    <div class="nav-btn">Back</div>
  </router-link>
</template>

<script>
import { RouterLink } from "vue-router";
</script>

<style>
.nav-btn {
  position: fixed;
  z-index: 10;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid rgb(97, 97, 97);
  display: grid;
  place-content: center;
  transition: all 0.15s ease;
  background: rgba(40, 41, 42, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 0px 5px 6px rgba(1, 5, 16, .8);
  opacity: .3;

  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;

}
.nav-btn:hover {
  border-color: rgb(195, 252, 189);
  opacity: 1;
}
</style>