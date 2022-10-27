<template>
  <fieldset class="tab-wrapper">
    <legend>Choose your delivery preference</legend>
    <div class="tab-item" v-for="(item, index) in tabArr" :key="index">
      <input type="radio" :id="index" :checked="true" />
      <label :for="index">
        <span class="tab-title">{{ item }}</span>
      </label>
    </div>
    <div class="glider"></div>
  </fieldset>
</template>

<script>
export default {
  data: () => ({
    tabArr: ["Home", "About", "Docs"],
    flag: false,
  }),
};
</script>

<style lang="scss">
.tab-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsla(0, 0%, 100%, 0.72);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  /* box-shadow: 0 0 1px 0 rgba(24, 94, 224, 0.15),
    0 6px 12px 0 rgba(24, 94, 224, 0.15);
  padding: 10px 20px;
  border-radius: 40px; */
  width: 330px;
  padding: 20px;

  .tab-item {
    padding: 20px 30px;
    width: 100px;
    border: 1px solid #333;
    cursor: pointer;
    input[type="radio"] {
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      width: 100%;
      height: 100%;
    }
    .table-title {
      font-size: 20px;
    }
  }

  .glider {
    position: absolute;
    top: 0;
    left: 0;
    height: 60px;
    width: 100px;
    height: 100%;
    background-color: #e6eef9;
    z-index: -1;
    transition: 0.25s ease-out;
    /* transform: translateY(-50%); */
    opacity: 1;
  }

  input[id="1"]:checked ~ .glider {
    transform: translateX(-100%);
    background: red;
  }
  input[id="2"]:checked ~ .glider {
    transform: translateX(0%);
  }
  input[id="3"]:checked ~ .glider {
    transform: translateX(100%);
  }
}
</style>