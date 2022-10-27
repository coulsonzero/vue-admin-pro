<template>
  <div class="custom-table">
    <div class="table-header">
      <div
        class="column-header table-cell"
        v-for="(item, index) in columns"
        :key="index"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="table-row" v-for="(item, index) in tableData" :key="index">
      <div :class="['table-cell name-cell', item.file_type]">
        {{ item.name }}
      </div>
      <div class="table-cell">{{ item.file_size }}</div>
      <div class="table-cell">{{ item.update_time }}</div>
      <div class="table-cell action-cell">
        <button class="more-action">{{ item.action }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    columns: [
      { title: "Name", dataIndex: "name" },
      { title: "Size", dataIndex: "size" },
      { title: "Last Modified", dataIndex: "last_modified" },
      { title: "Action", dataIndex: "action" },
    ],
    tableData: [
      {
        name: "Brandenburg.pdf",
        file_size: "42 MB",
        update_time: "2022-05-28",
        // action: <FiMoreHorizontal />,
        file_type: "pdf",
      },
      {
        name: "TheLionsRoar.jpg",
        file_size: "500 KB",
        update_time: "2022-05-29",
        // action: <FiMoreHorizontal />,
        file_type: "jpg",
      },
      {
        name: "Tuyepolus.pdf",
        file_size: "23 MB",
        update_time: "2022-05-30",
        // action: <FiMoreHorizontal />,
        file_type: "pdf",
      },
      {
        name: "Aoausapq.png",
        file_size: "820 KB",
        update_time: "2022-05-31",
        // action: <FiMoreHorizontal />,
        file_type: "png",
      },
      {
        name: "Aoausapq.png",
        file_size: "820 KB",
        update_time: "2022-05-31",
        // action: <FiMoreHorizontal />,
        file_type: "png",
      },
      {
        name: "Aoausapq.png",
        file_size: "820 KB",
        update_time: "2022-05-31",
        // action: <FiMoreHorizontal />,
        file_type: "png",
      },
      {
        name: "Aoausapq.png",
        file_size: "820 KB",
        update_time: "2022-05-31",
        // action: <FiMoreHorizontal />,
        file_type: "png",
      },
      {
        name: "Aoausapq.png",
        file_size: "820 KB",
        update_time: "2022-05-31",
        // action: <FiMoreHorizontal />,
        file_type: "png",
      },
    ],
  }),
};
</script>

<style lang="scss">
/* max-width: 50%; */
.custom-table {
  margin: 30px 60px 60px;
  background: rgba(211, 211, 211, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 6px 0 rgb(136 148 171 / 20%),
    0 24px 20px -24px rgb(71 82 107 / 10%);
  border-radius: 12px;
  padding: 12px;
  display: table;
  table-layout: auto;
  width: calc(100% - 120px);
  .table-cell {
    display: table-cell;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    padding: 8px;
  }
  .table-header {
    display: table-header-group;
    .column-header {
      font-size: 12px;
      line-height: 16px;
      color: #888da9;
    }
    .size-cell {
      width: 20%;
    }
  }
  .table-row {
    display: table-row-group;
    .name-cell {
      width: 40%;
      word-break: break-all;
      &::before {
        border-radius: 4px;
        font-size: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 4px;
      }
      &.pdf::before {
        content: "PDF";
        background-color: #e2e9f8;
        color: #5a8ff7;
      }
      &.jpg:before {
        content: "JPG";
        background-color: #e4e2f1;
        color: #302d7d;
      }
      &.png::before {
        content: "JPG";
        background-color: #f8e8f6;
        color: #2caa7e;
      }
    }
    .more-action {
      border: none;
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      width: 24px;
      height: 16px;
      outline: none;
      cursor: pointer;
    }
  }
}
</style>