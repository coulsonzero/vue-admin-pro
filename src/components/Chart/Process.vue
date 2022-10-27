<template>
  <div class="process-wrapper">
    <div class="chart-container">
      <div class="chart-container-header">
        <div>Acquisitions</div>
        <span href="#">This month</span>
      </div>

      <div class="acquisitions-bar">
        <span
          v-for="(item, index) in info"
          :key="index"
          class="bar-progress"
          :style="{ width: item.amount, background: item.color }"
        ></span>
      </div>

      <div class="progress-bar-info" v-for="(item, index) in info" :key="index">
        <span
          :class="['progress-color']"
          :style="{ background: item.color }"
        ></span>
        <span class="progress-type">{{ item.type }}</span>
        <span class="progress-amount">{{ item.amount }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChartProcess",
  data: () => ({
    info: [
      { type: "applications", amount: "64%", color: "#ff7dcb" },
      { type: "shortlisted", amount: "18%", color: "#00cfde" },
      { type: "on-hold", amount: "10%", color: "#fdac42" },
      { type: "rejected", amount: "8%", color: "#ff5c5c" },
    ],
  }),
};
</script>

<style lang="scss">
.process-wrapper {
  color: #fff;
  margin: 20px;
  .chart-container {
    width: 300px;
    border-radius: 10px;
    background-color: #01081f;
    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .chart-container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 14px;
    margin-bottom: 12px;
  }

  .acquisitions-bar {
    width: 100%;
    height: 4px;
    border-radius: 4px;
    margin-top: 16px;
    margin-bottom: 8px;
    display: flex;
  }

  .progress-bar-info {
    display: flex;
    align-items: center;
    margin-top: 8px;
    width: 100%;
  }

  .progress-color {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .progress-type {
    color: #5e6a81;
    font-size: 12px;
    line-height: 16px;
  }
  .progress-amount {
    color: #5e6a81;
    font-size: 12px;
    line-height: 16px;
    margin-left: auto;
  }
}
</style>