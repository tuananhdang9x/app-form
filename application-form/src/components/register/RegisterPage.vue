<template>
  <div class="register-page">
    <MultiFormHome @handleSubmit="handleSubmit" />
  </div>
</template>

<script>
import MultiFormHome from "@/components/share/multiForm/MultiFormHome.vue";
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
import { v4 } from "uuid";
export default {
  components: {
    MultiFormHome,
  },
  methods: {
    ...mapActions("form", ["clearForm"]),
    ...mapActions("file", ["clearFileRaw", "clearFile"]),
    ...mapActions("list", ["clearChoseList"]),
    ...mapActions("toast", ["showToast"]),
    ...mapActions("loading", ["activeLoading"]),
    async handleSubmit() {
      let form = new FormData();
      form.append("file", this.getFileRaws[0]);
      const res = await axios.post("http://localhost:8081/users/upload", form);
      let data = {
        id: v4(),
        status: 0,
      };
      this.getMultiForm.forEach((list) => {
        list.data.forEach((item) => {
          switch (item.key) {
            case "position":
              data[item.key] = item.value.length ? item.value.join(", ") : "";
              break;
            case "avatar":
              data[item.key] = item.value.length
                ? res.data.filename
                : "default.jpeg";
              break;
            case "repeat_password":
              break;
            default:
              data[item.key] = item.value;
              break;
          }
        });
      });
      const res2 = await axios.post("http://localhost:8081/auth/signup", data);
      console.log(res2)
      this.clearForm();
      this.clearChoseList();
      this.clearFileRaw();
      this.clearFile();
      this.activeLoading();
      if (res2.data.success) {
        setTimeout(() => {
          this.showToast({
            id: v4(),
            type: "success",
            message: "Submit form successfully",
            position: "top-center",
          });
          this.$router.push("/");
        }, 2000);
      } else {
        setTimeout(() => {
          this.showToast({
            id: v4(),
            type: "error",
            message: "Duplicate username was found",
            position: "top-center",
          });
          this.$router.push("/");
        }, 2000);
      }
    },
  },
  computed: {
    ...mapGetters("file", ["getFileRaws"]),
    ...mapGetters("form", ["getMultiForm"]),
  },
};
</script>

<style lang="scss" scoped>
.register-page {
  background: url("@/assets/image/background.jpg") no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>