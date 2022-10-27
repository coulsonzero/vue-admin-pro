<template>
  <div class="kl-image-load-light-box">
    <img
      crossorigin="anonymous"
      :src="imgSrc"
      :class="[loading ? 'loading' : '', 'kl-image-load-light']"
      @error="imgError"
      @load="imgLoad"
      :alt="imgAlt"
    />
    <div :class="[loading ? 'show' : '', 'kl-image-load-light-mask']"></div>
  </div>
</template>
<script>
import { ref, watch } from "vue";

export default {
  name: "ImageLoadLight",
  props: {
    imgSrc: {
      default:
        "https://img1.baidu.com/it/u=2863108920,4275403644&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
    },
    imgAlt: {
      default: "图片加载失败",
    },
    width: {
      default: "100%",
    },
    height: {
      default: "auto",
    },
  },
  setup(props, ctx) {
    const loading = ref(true);
    watch(props.imgSrc, (c, v) => {
      loading.value = true;
    });
    const imgLoad = () => {
      loading.value = false;
    };
    return {
      imgLoad,
      imgError,
      loading,
    };
  },
};
</script>

<style scoped>
.kl-image-load-light-box {
  position: relative;
  display: inline-table;
  height: auto;
  width: auto;
}
.kl-image-load-light {
  max-width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
}
.kl-image-load-light-mask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: black;
  opacity: 0;
  transition: opacity 1s ease-in;
}
.kl-image-load-light-mask.show {
  opacity: 1;
  transition: opacity 1s ease-in;
}
.kl-image-load-light-mask::after {
  content: "";
  user-select: none;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    135deg,
    transparent 40%,
    #ffffff 50%,
    transparent 60%
  );
  background-size: 100% 100%;
  background-repeat: no-repeat;
  animation: au 1s linear infinite;
}
@keyframes au {
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
}
</style>

