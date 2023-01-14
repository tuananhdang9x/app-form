<template>
  <div class="register">
    <div class="list-item">
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div class="register-btn" @click="handleRegister">
        <p>Register</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => "Don't have an account?",
    },
  },
  methods: {
    handleRegister() {
      this.$emit("handleRegister");
    },
  },
};
</script>

<style lang="scss" scoped>
.register {
  position: absolute;
  left: 0;
  top: 103px;
  width: 768px;
  height: 270px;
  padding: 32px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  gap: 10px;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  .list-item {
    width: 171px;
    height: 162px;
    margin: 22px 0 22px 0;
    .title {
      position: absolute;
      top: 105px;
      width: 171px;
      margin-bottom: 8px;
      p {
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        width: 100%;
      }
    }
    .register-btn {
      cursor: pointer;
      position: absolute;
      bottom: 104px;
      padding: 10px;
      width: 171px;
      height: 32px;
      border: 1px solid #555555;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #555555;
      }
    }
  }
}
</style>