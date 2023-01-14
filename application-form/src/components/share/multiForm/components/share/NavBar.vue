<template>
  <div class="nav-container">
    <div class="header" v-if="!isAdminPage">{{ header }}</div>
    <div class="nav-bar">
      <div
        class="nav-item"
        v-for="item in data"
        :key="item.id"
        @click="onChangeStep(item.step)"
      >
        <div
          class="item-number"
          :class="{
            active: item.step === step,
            activePrevItem: item.step <= step,
          }"
        >
          <p>{{ item.step }}</p>
        </div>
        <p class="item-info">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: () => "Register",
    },
    data: {
      type: Array,
      default: () => [],
    },
    step: {
      type: Number,
      default: () => 1,
    },
  },
  methods: {
    onChangeStep(choseStep) {
      this.$emit("onChangeStep", choseStep);
    },
  },
  computed: {
    isAdminPage() {
      let isAdmin = this.$route.name.includes("admin") ? true : false;
      return isAdmin;
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-container {
  .header {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #333333;
    margin-bottom: 24px;
  }
  .nav-bar {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: flex-start;
    width: 530px;
    height: 67px;
    transform: translateX(-2%);
    padding-right: 185px;

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      &:not(:last-child):after {
        content: "";
        height: 3px;
        background-color: #dbdbdb;
        position: relative;
        width: 100%;
        top: -44px;
        left: 50%;
        z-index: -1;
      }
      cursor: pointer;
      .active {
        width: 40px;
        height: 40px;
        border-radius: 90px;
        background-color: #617d98 !important;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #fff;
      }
      .activePrevItem {
        width: 40px;
        height: 40px;
        border-radius: 90px;
        background-color: #617d98 !important;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #fff;
      }
      .activeFirstItem {
        width: 40px;
        height: 40px;
        border-radius: 90px;
        background-color: #617d98 !important;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #fff;
      }
      .item-number {
        width: 32px;
        height: 32px;
        border-radius: 90px;
        background-color: #dbdbdb;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        p {
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          color: #fff;
        }
      }
      .item-info {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #333;
      }
    }
  }
}
</style>