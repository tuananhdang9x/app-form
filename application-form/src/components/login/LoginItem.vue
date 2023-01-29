<template>
  <div class="login">
    <div class="title">LOGIN</div>
    <input type="text" class="text" placeholder="Username" v-model="userName" />
    <input
      type="password"
      class="text"
      placeholder="Password"
      v-model="password"
    />
    <div class="login-btn" @click="handleLogin">
      <p>Login</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      this.$emit("handleLogin", {
        userName: this.userName,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 85px;
  width: 382px;
  height: 476px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
  .title {
    color: #333333;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    width: 100px;
    height: 39px;
    margin-top: 108px;
    margin-bottom: 24px;
  }
  input {
    margin-bottom: 24px;
    width: 317px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 10px;
  }
  .login-btn {
    background-color: #627d98;
    border-radius: 4px;
    padding: 10px;
    width: 317px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      color: #ffffff;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>