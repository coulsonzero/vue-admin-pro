<template>
  <div class="sidebar-wrapper">
    <div class="sidebar sidebar-flex">
      <div>
        <img class="icon-logo" src="@/assets/icons/logo.png" alt="" />
        <div class="logo-title text-color">Tool</div>
      </div>
      <div class="svg-wrapper">
        <a
          href="#sidebar"
          class="svg-container"
          v-for="(icon, index) in icons"
          :key="index"
          @click="togglePage(index)"
        >
          <img
            class="icon-svg"
            :src="[iconpath + icon]"
            onload="SVGInject(this)"
            alt=""
          />
        </a>
      </div>
      <div>
        <div>Mode</div>
        <div class="mode-setting">
          <img class="icon-svg" src="@/assets/icons/sun.svg" alt="" />
          <img class="icon-svg" src="@/assets/icons/moon.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    moonIcon: "moon2.svg",
    girdIcon: "assets/icons/grid.svg",
    iconpath: "/src/assets/icons/",
    icons: ["grid.svg", "message.svg", "pay.svg", "task.svg", "edit.svg"],
  }),
  methods: {
    togglePage(index) {
      console.log("toggle page", index);
      console.log(document.querySelectorAll(".svg-container"));
      document.querySelectorAll(".svg-container").forEach((item, i, arr) => {
        item.classList.remove("active");
        arr[index].classList.add("active");
      });
    },
  },
  mounted() {
    document.querySelectorAll(".svg-container")[0].classList.add("active");
  },
};
</script>

<style lang="scss">
.sidebar-wrapper {
  background: #323232;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
.sidebar {
  width: 90px;
  height: calc(100vh - 40px);
  background: rgba(43, 43, 43, 0.85);
  margin: 20px;
  border-radius: 20px;
  box-shadow: 2px 2px 10px #3e3e3e20;
  padding: 40px 0;
}

.sidebar-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.svg-wrapper {
  display: flex;
  flex-direction: column;
}
.svg-container {
  cursor: pointer;
  padding: 0px 20px;
  background: transparent;
}

.icon-svg {
  width: 24px;
  height: 24px;
  margin: 12px 0;
}

.svg-container {
  /* margin-top: 10px; */

  /* .icon-svg g {
    fill: #fff;
  } */
}

.svg-container:hover .icon-svg g {
  fill: #9fe0ee;
}
.svg-container.active .icon-svg g {
  fill: rgb(143, 174, 245);
}

.icon-logo {
  width: 33px;
  height: 33px;
}

.logo-title {
  margin-top: 10px;
  letter-spacing: 1px;
}

.text-color {
  background: linear-gradient(120deg, rgb(169, 154, 255), rgb(241, 118, 116));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

.mode-setting {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #535353; */
  border-radius: 20px;
  margin-top: 20px;
  background: #212121;
}
</style>

