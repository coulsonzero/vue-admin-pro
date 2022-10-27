<template>
  <div class="chart-wrapper chart-container">
    <!-- <div class="chart-container"> -->
    <div class="chart-info">
      <div class="chart-title">Applications</div>
      <span>20.5 K</span>
    </div>
    <div class="chart-svg">
      <svg viewBox="0 0 36 36" class="circle-chart pink">
        <path
          class="circle-bg"
          :stroke="this.color.circle_bg"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <path
          class="circle"
          :stroke-dasharray="stroke_dasharray"
          :stroke="this.color.circle_color"
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
        ></path>
        <text x="18" y="20.35" class="percentage">{{ percent }}%</text>
      </svg>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  // 组件别名(import)
  name: "ChartCircle",
  // 父子组件通信
  props: {
    percent: {
      type: Number,
      required: true,
      default: () => 0,
    },
    color: {
      type: Object,
      required: false,
      default: () => {
        return {
          circle_color: "#ff9f00",
          circle_bg: "#776547",
        };
      },
    },
    // s: String,
    // flag: Boolean,
    // arr: Array,
  },
  // 组件挂载阶段
  created() {
    // console.log("created");
    // console.log(this.percent);
    // console.log(this.color);
  },
  data: () => ({
    // circle_color: "#ff7dcb",
    // circle_bg: "#6f5684",
    // circle_color: "#00cfde",
    // circle_bg: "#557b88",
    // circle_color: "#ff9f00",
    // circle_bg: "#776547",
  }),
  computed: {
    stroke_dasharray() {
      return this.percent + ", 100";
    },
  },
};
</script>

<style lang="scss" scoped>
/* :root {
  --circle-color: #00cfde;
  --circle-bg: #557b88;
} */

.chart-wrapper {
  width: 280px;
  height: 130px;
  padding: 8px;
  background: #000720;
  margin: 20px;

  &.chart-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 10px;
  }

  .chart-info {
    flex-shrink: 0;
    flex-basis: 120px;
    color: #fff;
  }

  .chart-title {
    color: #5e6a81;
    font-size: 12px;
    line-height: 16px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 8px 0;
    width: 160px;
  }

  .chart-info span {
    color: #fff;
    font-size: 24px;
    line-height: 32px;
    font-weight: 500;
  }

  .chart-svg {
    position: relative;
    max-width: 90px;
    min-width: 40px;
    flex: 1;
  }

  .circle {
    /* stroke: #ff7dcb; */
    fill: none;
    stroke-width: 1.6;
    stroke-linecap: round;
    -webkit-animation: progress 1.5s ease-out forwards;
    animation: progress 1.5s ease-out forwards;
  }

  .percentage {
    fill: #fff;
    font-size: 0.5em;
    text-anchor: middle;
    font-weight: 400;
  }
}
@-webkit-keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}
</style>