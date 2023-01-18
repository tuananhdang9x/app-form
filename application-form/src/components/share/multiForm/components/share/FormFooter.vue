<template>
  <div class="footer" v-if="!isAdminPage">
    <div class="footer-nav">
      <div class="nav-item">
        <div
          v-if="stepData.step === formData.length"
          class="finish-btn"
          @click="handleNextStep"
        >
          <p>Finish</p>
        </div>
        <div
          v-if="stepData.step !== formData.length"
          class="footer-next-item"
          @click="handleNextStep"
        >
          <p>Next</p>
        </div>
        <div
          v-if="stepData.step !== 1"
          class="footer-prev-item"
          @click="handlePrevStep"
        >
          <p>Back</p>
        </div>
      </div>
      <div class="back-login" @click="handleBackLogin">
        <p>Back to login</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stepData: {
      type: Object,
      default: () => {},
    },
    formData: {
      type: Array,
      default: () => [],
    },
    isAdminPage: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleNextStep() {
      this.$emit("handleNextStep");
    },
    handlePrevStep() {
      this.$emit("handlePrevStep");
    },
    handleBackLogin() {
      this.$emit("handleBackLogin");
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  .finish-btn {
    cursor: pointer;
    width: 102px;
    height: 40px;
    background: #627d98;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
    }
  }
  .footer-nav {
    display: flex;
    justify-content: space-between;
    .nav-item {
      display: flex;
      .footer-next-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 102px;
        height: 40px;
        background: #627d98;
        border-radius: 3px;
        p {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
        }
      }

      .footer-prev-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 102px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        margin-left: 16px;
        p {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #333333;
        }
      }
    }

    .back-login {
      cursor: pointer;
      width: 150px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #dcdcdc;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
  .add-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 151px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    margin-bottom: 24px;
    .add-icon {
      padding: 8px;
    }
    p {
      color: #48647f;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
  }
  .footer-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 102px;
    height: 40px;
    background: #dcdcdc;
    border-radius: 3px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    cursor: pointer;
  }
}
</style>