<template>
  <a class="svg-wrapper">
    <div class="svg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M7.13528 9.5L0.957075 13.067L1.45708 13.933L7.63441 10.3665L4.06699 16.5455L4.93301 17.0455L8.5 10.8673V18H9.5V10.8673L13.067 17.0455L13.933 16.5455L10.3656 10.3665L16.5429 13.933L17.0429 13.067L10.8647 9.5H18V8.5H10.8673L17.0455 4.93301L16.5455 4.06699L10.3665 7.63447L13.933 1.45703L13.067 0.957031L9.5 7.13523V0H8.5V7.13523L4.93301 0.957031L4.06699 1.45703L7.63354 7.63447L1.45447 4.06699L0.954468 4.93301L7.13267 8.5H0V9.5H7.13528Z"
          clip-rule="evenodd"
        ></path>
        >
      </svg>
    </div>
  </a>
</template>

<script>
export default {
  mounted() {
    this.animationEffect();
  },

  methods: {
    animationEffect() {
      console.log("asas");
      const wrapper = document.querySelector(".svg-wrapper");
      const container = document.querySelector(".svg-container");
      wrapper.addEventListener("mouseenter", () => {
        container.classList.remove("svg-animate-leave");
        container.classList.add("svg-animate-enter");
      });
      wrapper.addEventListener("mouseleave", () => {
        container.classList.remove("svg-animate-enter");
        container.classList.add("svg-animate-leave");
      });
    },
  },
};
</script>

<style>
.svg-wrapper {
  position: fixed;
  right: 40px;
  bottom: 40px;

  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: hsla(0, 0%, 100%, 0.1);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  background-image: url("../../assets/images/svg-wrapper-bg.png"),
    linear-gradient(125deg, hsla(0, 0%, 100%, 0.2), transparent);
  background-position: 50% 50%, 0 0;
  background-size: 26rem 26rem, auto;
  background-repeat: repeat, repeat;
  box-shadow: inset 0 0 80px 0 hsla(0, 0%, 100%, 0.1);
}

.svg-wrapper::before {
  content: "";
  position: absolute;
  z-index: 6;
  top: 0;
  left: 0;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.1)
    )
    border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  border: 2px solid transparent;
}

.svg-wrapper:hover .svg-container {
  /* animation: svgEnter 1.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; */
  /* animation-delay: -.3s; */
  /* -webkit-animation: svgRotate .6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; */
}

.svg-animate-enter {
  animation: svgEnter 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.svg-animate-leave {
  animation: svgLeave 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

.svg-container {
  width: 40px;
  height: 40px;
  transform-style: preserve-3d;
  transition: all 0.8s ease;
}

@keyframes svgEnter {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(180deg);
  }
}

@keyframes svgLeave {
  0% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>