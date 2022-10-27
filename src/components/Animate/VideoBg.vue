<template>
  <video
    class="video-bg"
    src="@/assets/videos/video-1.mp4"
    autoPlay
    loop
    muted
  ></video>
</template>

<style>
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: auto;
  pointer-events: none;
}
</style>