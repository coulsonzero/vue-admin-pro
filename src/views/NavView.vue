<template>
  <image-bg></image-bg>
  <header>
    <div class="wrapper">
      <h1>向 未来 航行</h1>
      <nav class="nav-router">
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

export default {
  components: { ImageBg },
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
  color: #fff;
  text-align: center;
  font-family: serif;
  margin-bottom: 60px;
}

.nav-router {
  border: 1px solid #323232;
  border-radius: 30px;
  overflow: hidden;
}
.nav-router .nav-item {
  display: inline-block;
  padding: 20px;
  color: #fff;
  transition: all 0.15s ease;
  letter-spacing: 1.5px;
  user-select: none;
  -webkit-user-select: none;
}
.nav-item:hover {
  color: #5d8bc0;
  background: #b5fbd0;
}

h1,
.nav-router {
  margin: 40px;
}
</style>