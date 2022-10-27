<template>
  <div class="slider-text">
    Detailed code can be viewed on
    <div class="mask">
      <span data-show="">github.</span>
      <span>CodePen.</span>
      <span>Gitee.</span>
      <span data-up="">Contact us.</span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.sliderChange();
  },
  methods: {
    sliderChange() {
      setInterval(function () {
        const show = document.querySelector("span[data-show]");
        const next =
          show.nextElementSibling || document.querySelector("span:first-child");
        const up = document.querySelector("span[data-up]");
        if (up) {
          up.removeAttribute("data-up");
        }
        show.removeAttribute("data-show");
        show.setAttribute("data-up", "");
        next.setAttribute("data-show", "");
      }, 2000);
    },
  },
};
</script>



<style>
:root {
  --offset: 6px;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.slider-text {
  width: 94%;
  font-size: 100px;
  font-family: Helvetica;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: #626263;
}

.nowrap {
  white-space: nowrap;
}

.mask {
  height: 106px;
  position: relative;
  overflow: hidden;
  margin-top: var(--offset);
}

.mask span {
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 100px;
  padding-bottom: var(--offset);

  background-size: 100% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
}

.mask span[data-show] {
  transform: translateY(-100%);
  transition: 0.5s transform ease-in-out;
}

.mask span[data-up] {
  transform: translateY(-200%);
  transition: 0.5s transform ease-in-out;
}

.mask span:nth-child(1) {
  background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
}

.mask span:nth-child(2) {
  background-image: linear-gradient(45deg, #18e198 50%, #0ec15d);
}

.mask span:nth-child(3) {
  background-image: linear-gradient(45deg, #8a7cfb 50%, #633e9c);
}

.mask span:nth-child(4) {
  background-image: linear-gradient(45deg, #fa7671 50%, #f45f7f);
}
</style>