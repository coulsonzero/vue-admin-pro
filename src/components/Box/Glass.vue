<template>
  <div class="glass glass-wrapper">
    <div>hello</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.glass-wrapper {
  width: 90%;
  height: 300px;
  margin: 20px;
  border-radius: 10px;
}
.glass {
  /* background: rgba(211, 211, 211, 0.5); */
  background: rgba(59, 59, 59, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 3px 3px 10px #2c2c2ca8;
  border-top: 1px solid #323232;
  border-left: 1px solid #323232;

  /* background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid #323232; */
}
</style>