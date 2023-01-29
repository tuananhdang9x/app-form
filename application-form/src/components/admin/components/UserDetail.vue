<template>
  <div class="detail-page" v-if="loadingProcess">
    <SideBar @handleLogout="handleLogout" :user="userDetail" />
    <div class="table-container">
      <div class="back-icon" @click="handleBack">
        <IconBackArrow />
      </div>
      <div class="header">
        <img :src="imgUrl" alt="avatar" />
        <div class="info">
          <p class="name">{{ listForm.fullname }}</p>
          <p class="title">{{ listForm.position }}</p>
        </div>
      </div>
      <div class="multi-form">
        <MultiFormAdmin :id="id" />
      </div>
      <div class="approve-btn" @click="handleApprove">
        <p>Approve</p>
      </div>
      <div class="reject-btn" @click="handleReject">
        <p>Reject</p>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import IconBackArrow from "@/assets/icon/IconBackArrow.vue";
import MultiFormAdmin from "@/components/share/multiForm/MultiFormAdmin.vue";
import { mapActions, mapGetters } from "vuex";
import { v4 } from "uuid";
import {setStatus} from '@/components/service/userService.js'
import {STATUS} from '@/const/multiForm.js'
export default {
  data() {
    return {
      loadingProcess: false,
      STATUS
    };
  },
  async created() {
    await this.getUser();
    this.loadingProcess = true;
  },
  components: {
    SideBar,
    IconBackArrow,
    MultiFormAdmin,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions("form", ["clearForm", "getUser"]),
    ...mapActions("list", ["clearChoseList"]),
    ...mapActions("toast", ["showToast"]),
    ...mapActions("loading", ["activeLoading"]),
    handleLogout() {
      localStorage.setItem("id", "");
      this.clearForm();
      this.clearChoseList();
      this.activeLoading();
      setTimeout(() => {
        this.$router.push("/");
      }, 2000);
    },
     async handleApprove() {
      await setStatus({
        id:this.id,
        status:STATUS.APPROVED
      });
      this.activeLoading();
      setTimeout(() => {
        this.showToast({
          id: v4(),
          type: "success",
          message: "Application was approved !",
          position: "top-right",
        });
        this.$router.push("/admin");
      }, 2000);
    },
    async handleReject() {
      await setStatus({
        id: this.id,
        status: STATUS.REJECTED,
      });
      this.activeLoading();
      setTimeout(() => {
        this.showToast({
          id: v4(),
          type: "error",
          message: "Application was rejected !",
          position: "top-right",
        });
        this.$router.push("/admin");
      }, 2000);
    },
    handleBack() {
      this.$router.push("/admin");
    },
  },
  computed: {
    ...mapGetters("form", ["listUsers"]),
    listForm() {
      return this.listUsers.find((item) => item.id === this.id);
    },
    userDetail() {
      return this.listUsers.find(
        (item) => item.id === localStorage.getItem("id")
      );
    },
    imgUrl() {
      return this.listForm.avatar
        ? `http://localhost:8081/uploads/${this.listForm.avatar}`
        : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-page {
  display: flex;
  .table-container {
    position: relative;
    margin-top: 48px;
    width: 1046px;
    max-height: 722px;
    overflow: hidden;
    padding: 24px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-left: 282px;
    ::v-deep #container-multiform {
      .form-item {
        width: 100%;
        height: 100%;
        margin-bottom: 270px;
      }
    }
    ::v-deep .nav-container {
      .header {
        display: none;
      }
    }
    ::v-deep .footer {
      display: none;
    }

    ::v-deep .step-item {
      max-height: 358px;
      width: 998px;
    }

    .back-icon {
      cursor: pointer;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .header {
      width: 998px;
      height: 82px;
      padding: 16px;
      background: #f7f7f7;
      margin: 48px 24px 24px 24px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 48px;
        height: 48px;
        border-radius: 5px;
      }
      .info {
        margin-left: 10px;
        .name {
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          color: #333333;
        }
        .title {
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
          color: #333333;
        }
      }
    }
    .approve-btn {
      cursor: pointer;
      position: absolute;
      bottom: 24px;
      left: 24px;
      padding: 0px 16px;
      width: 102px;
      height: 40px;
      background: #48647f;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
      }
    }
    .reject-btn {
      cursor: pointer;
      position: absolute;
      bottom: 24px;
      left: 142px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 12px;
      width: 102px;
      height: 40px;
      border: 1px solid #ffbdbd;
      border-radius: 4px;
      background: #ffffff;
      p {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #f86868;
      }
    }
  }
}
</style>