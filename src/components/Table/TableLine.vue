<template>
  <div class="table-wrapper">
    <div class="table-title">Becklyn Basics</div>
    <ul>
      <li class="table-row-wrapper" v-for="(item, index) in tableData" :key="index">
        <div class="table-row">
          <div class="table-cell">{{item.descript}}</div>
          <div class="table-cell flex-right">{{item.place}}</div>
          <div class="table-cell cell-right">{{item.code}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    tableData: [
      {descript: "Our old building office is quite nice.", place: "Office", code: "01"},
      {descript: "However, (almost) all of us also do hybrid work (and it works.)", place: "Workplace", code: "02"},
      {descript: "Our work is diverse.", place: "Projects", code: "03"},
      {descript: "OOvertime is and will remain an exception.", place: "Workload", code: "04"},
      {descript: "Sometimes we do sports together.", place: "Teamevents", code: "05"},
      {descript: "Or we meet for a vino.", place: "Dolce Vita", code: "06"},
      {descript: "(But it's not a must)", place: "Easyyy", code: "07"},
    ]
  })
};
</script>

<style>
:root {
  --gray100: #1a1a1a;
  --gray200: #3b3b3b;
  --gray250: #4b4b4b;
  --gray300: #606060;
}

.table-wrapper {
  max-width: 136.1rem;
  width: calc(100% - 8rem);
  border-radius: 10px;
  margin: 40px auto;
  padding: 20px;
  /* background: var(--gray100); */
  background: hsla(0, 0%, 10%, 0.31);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 6px 6px 16px hsla(20, 20%, 12%, 0.659);
  border-top: 1px solid #323232;
  border-left: 1px solid #323232;
}

.table-title {
  margin-bottom: 3rem;
  font-size: 2rem;
}

.table-row-wrapper {
  display: list-item;
  text-align: -webkit-match-parent;
  border-bottom: 1px solid rgb(96, 96, 96);
}

.table-row-wrapper:first-child {
  border-top: 1px solid rgb(96, 96, 96);
}

.table-row {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  row-gap: 2rem;
  column-gap: 2rem;
  padding: 20px 0;
  font-size: 2rem;
  letter-spacing: -0.05rem;
  line-height: 1.15;
  pointer-events: none;
}

.table-cell {
  font-size: 20px;
  letter-spacing: -0.05rem;
  line-height: 1.15;
  pointer-events: none;
}

.flex-right {
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  text-align: right;
}
.cell-right {
  width: calc(-1.3rem + 16.6vw);
  text-align: right;
}
</style>