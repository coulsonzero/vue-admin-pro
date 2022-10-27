<template>
  <div class="sidebar-wrapper">
    <a class="side-logo">Dashboard</a>
    <div class="side-wrapper">
      <ul class="side-menu">
        <li
          :class="[currentLink === index ? 'active' : '']"
          @click="setCurLink(index)"
          v-for="(item, index) in links"
          :key="{ index }"
        >
          <a :href="['#', item.title]" class="side-item">
            <span class="side-title">{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Dashboard" },
      { title: "COVID-19" },
      { title: "Charts" },
      { title: "Analytics" },
      { title: "Works" },
      { title: "Ant Design" },
      { title: "Settings" },
    ],
  }),
};
</script>

<style lang="scss">
.sidebar-wrapper {
  width: 20%;
  height: 100%;
  background-color: rgba(229, 251, 225, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  padding: 30px;
  display: flex;
  flex-direction: column;
  // flex-shrink: 0;
  transition-duration: 0.2s;
  border-radius: var(--app-container-radius) 0 0 var(--app-container-radius);
  .side-logo {
    font-weight: 600;
    font-size: 1.4rem;
    margin-bottom: 40px;
    text-align: center;
    cursor: default;
  }
  .side-wrapper {
    border-bottom: 1px solid rgba(128, 129, 145, 0.24);
    .side-title {
      opacity: 0.6;
    }
    .side-menu {
      margin-top: 20px;
      li {
        position: relative;
        border-radius: 12px;
        transition: 0.3s ease;
        cursor: pointer;
        &::before {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          background: #dc885e;
          width: 4px;
          height: 60%;
          transform: translateY(12px) scaleY(0);
          transition: 0.2s ease;
        }
        &.active::before {
          height: 60%;
          transform: translateY(12px) scaleY(1);
        }
        &::after {
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          /* background: #d1e2e161; */
          background-color: rgba(43, 61, 95, 0.125);
          width: 0%;
          height: 60%;
          transform: translateY(12px);
          transition: width 0.5s ease-in-out;
          z-index: -1;
        }
        &:hover::after {
          width: 86%;
        }
        &:hover::before {
          height: 60%;
          transform: translateY(12px) scaleY(1);
          box-shadow: rgba(43, 61, 95, 0.125);
          background-color: #2b3d5f;
          transition-delay: 0.3s;
        }
        .side-item {
          display: flex;
          align-items: center;
          padding: 16px;
          cursor: pointer;
          .side-link {
            margin-right: 16px;
            display: flex;
            opacity: 0.5;
            font-size: 1.2rem;
          }
          .side-title {
            color: rgba(51, 51, 51, 0.7);
          }
        }
        &.active .side-link,
        &:hover .side-link {
          /* color: #ca824e; */
          opacity: 1;
        }
        &.active .side-title,
        &:hover .side-title {
          color: #000000;
        }
      }
    }
  }
}
</style>