<template>
  <div>
    <button class="button">Click Me</button>
    <a
      href="https://github.com/coulsonzero"
      target="_black"
      @load="loadAni"
      @click="calcTime"
      >Github</a
    >
  </div>
</template>

<script>
import getTiming from "@/utils/time";
export default {
  methods: {
    timeSpend() {
      console.log("clicked");
    },
    calcTime() {
      window.addEventListener("load", getTiming, false);
    },
    loadAni() {
      console.log("loaded");
    },
  },
};
</script>

<style>
button {
  width: 170px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  border: 1px solid #000;
}
.button:hover {
  background: #282829;
  color: aliceblue;
}
</style>