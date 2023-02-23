<template>
  <div class="wrapper">
    <image-bg></image-bg>
    <nav-back></nav-back>

    <div class="ele-container">
      <button-social></button-social>
    </div>

    <div class="ele-container">

    </div>
  </div>
</template>

<script setup>
</script>

<script setup>
import ImageBg from "@/components/Animate/ImageBg.vue";
import NavBack from "@/components/Button/NavBack.vue";

import MyButton from "@/components/Button/MyButton.vue";
import NavButton from "@/components/Button/NavButton.vue";
import ButtonSocial from "@/components/Button/ButtonSocial.vue";

</script>


<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: -1;
}

.ele-container {
  border: 1px solid #323232;
  padding: 20px 20px 30px;
  margin-top: 30px;
  border-radius: 12px;
  transition: border 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  /* background-color: #f8f8f8; */
  background: hsla(0, 0%, 100%, 0.12);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
}
</style>
