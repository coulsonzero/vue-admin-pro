<template>
  <div class="setting-btn-wrapper">
    <a href="#" class="union-btn glass-effect w-inline-block"
      ><div class="sr-only">Work with a small studio</div>
      <div class="union__gradient gradient--yellow-green-right"></div>
      <div
        class="icon--union--large w-embed"
        style="
          transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
            rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
          transform-style: preserve-3d;
        "
      >
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
        </svg></div
    ></a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.setting-btn-wrapper {
    position: fixed;
    right: 10px;
    bottom: 10px;
    
}
.union-btn {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 6.4rem;
  height: 6.4rem;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 0.1);
}
.glass-effect {
  z-index: 5;
  display: block;
  overflow: hidden;
  border-radius: 1.6rem;
  background-color: rgba(0, 0, 0, 0.35);
  background-image: url("https://uploads-ssl.webflow.com/6245af090b875ce53c027435/6245af090b875c55ce02750c_Grain%20Sample%20Large.png"),
    linear-gradient(125deg, hsla(0, 0%, 100%, 0.2), transparent);
  background-position: 50% 50%, 0 0;
  background-size: 26rem 26rem, auto;
  background-repeat: repeat, repeat;
  box-shadow: inset 0 0 80px 0 hsla(0, 0%, 100%, 0.1);
  -webkit-backdrop-filter: blur(3rem);
  backdrop-filter: blur(3rem);
}

.w-inline-block {
  max-width: 100%;
  display: inline-block;
}

.union-btn:before {
  border-radius: 50% !important;
  border: 2px solid transparent;
}

.glass-effect:before,
.glass-effect-2:before,
.glass-card:before,
.glass-card--hover:before,
.avc__project:before,
.union-btn:before {
  border-radius: 1.6rem;
  content: "";
  position: absolute;
  z-index: 6;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  pointer-events: none;
  border: 1px solid transparent;
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.1)
    )
    border-box;
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.icon--union--large {
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 4rem;
  height: 4rem;
}

.w-embed:after,
.w-embed:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}

.w-embed:after,
.w-embed:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
}

.w-embed:after {
  clear: both;
}
</style>