<template>
  <image-bg></image-bg>
  <setting-button></setting-button>
  <header>
    <div class="wrapper">
      <h1>向 未来 航行</h1>
      <nav class="nav-router glass-nav">
        <router-link
          :to="item.path"
          class="nav-item"
          v-for="(item, index) in links"
          :key="index"
          >{{ item.name }}</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
import routes from "@/router/routes";
import { RouterLink } from "vue-router";
import ImageBg from "../components/Animate/ImageBg.vue";
import SettingButton from '../components/Button/SettingButton.vue';

export default {
  components: { ImageBg, SettingButton },
  computed: {
    links() {
      return routes.filter(
        (item) => item.path !== "/" && !item.path.includes("(.*)")
      );
    },
  },
};
</script>

<style>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
header h1 {
  color: rgb(199, 199, 199);
  text-align: center;
  font-family: serif;
  margin-bottom: 60px;
}

.nav-router {
  /* border: 1px solid #323232; */
  border-radius: 30px;
  overflow: hidden;
}

.glass-nav {
  background: rgba(40, 41, 42, 0.2);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(8px);
  border-top: 0.5px solid #323232;
  border-left: 0.5px solid #323232;
  box-shadow: 5px 5px 10px rgba(1, 5, 16, 0.8);
}

.nav-router .nav-item {
  display: inline-block;
  padding: 20px 40px;
  transition: all 0.15s ease;
  letter-spacing: 1.5px;
  user-select: none;
  -webkit-user-select: none;
  transition: all 0.15s ease;
  color: #b5b5b5;
  font-weight: 400;
  text-transform: capitalize;
  letter-spacing: 2px;
}
.nav-item:hover {
  color: #5d8bc0;
  background: #39393982;
}



h1,
.nav-router {
  margin: 40px;
}
</style>