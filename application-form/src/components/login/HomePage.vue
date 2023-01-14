<template>
  <div class="home-page">
    <div class="form-container">
      <RegisterItem @handleRegister="handleRegister" />
      <LoginItem @handleLogin="handleLogin" />
    </div>
  </div>
</template>

<script>
import LoginItem from "./LoginItem.vue";
import RegisterItem from "./RegisterItem.vue";
import { mapActions } from "vuex";
import axios from "axios";
import { v4 } from "uuid";
export default {
  components: {
    RegisterItem,
    LoginItem,
  },
  created() {
    this.getUser();
  },

  methods: {
    ...mapActions("form", ["clearForm", "getUser"]),
    ...mapActions("list", ["clearChoseList"]),
    ...mapActions("toast", ["showToast"]),
    ...mapActions("loading", ["activeLoading"]),
    handleRegister() {
      this.$router.push("/register");
    },
    async handleLogin(payload) {
      try {
        const res = await axios.post("http://localhost:8081/auth/login", {
          username: payload.userName,
          password: payload.password,
        });
        localStorage.setItem("id", res.data.id);
        this.activeLoading();
        setTimeout(() => {
          this.showToast({
            id: v4(),
            type: "success",
            message: "Login successfully !",
            position: "top-center",
          });
          this.$router.push("/admin");
        }, 2000);
      } catch {
        this.showToast({
          id: v4(),
          type: "error",
          message: "Username or password not correct !",
          position: "top-center",
        });
      }
      this.clearForm();
      this.clearChoseList();
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  background: url("@/assets/image/background.jpg") no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .form-container {
    position: relative;
    width: 768px;
    height: 476px;
  }
}
</style>