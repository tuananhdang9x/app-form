<template>
  <div class="admin-page">
    <SideBar @handleLogout="handleLogout" :user="userDetail" />
    <div class="main-content">
      <div class="table-container">
        <table class="table-item" cellspacing="0">
          <tr class="table-header">
            <th v-for="item in header" :key="item.id">
              <p>{{ item.lable }}</p>
            </th>
          </tr>
          <UserItem
            v-for="form in filterdForm"
            :key="form.id"
            :form="form"
            @onDetailUser="onDetailUser(form.id)"
          />
        </table>
      </div>
      <FooterTable
        @handleBack="handleBack"
        @handleNext="handleNext"
        :currentPage="currentPage"
        :start="start"
        :end="end"
      />
    </div>
  </div>
</template>

<script>
import UserItem from "./components/UserItem.vue";
import FooterTable from "./components/FooterTable.vue";
import SideBar from "./components/SideBar.vue";
import { mapActions, mapGetters } from "vuex";
import { USER_PER_PAGE } from "@/const/multiForm.js";
export default {
  data() {
    return {
      currentPage: 1,
      start: 0,
      end: 0,
      header:[{id:1,lable:'Fullname'},
      {id:2,lable:'City'},
      {id:3,lable:'Wish Salary'},
      {id:4,lable:'Created at'},
      {id:5,lable:'Status'}]
    };
  },
  components: {
    SideBar,
    UserItem,
    FooterTable,
  },
  created() {
    this.getUser();
  },
  methods: {
    ...mapActions("form", ["getUser", "clearForm"]),
    ...mapActions("list", ["clearChoseList"]),
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
    onDetailUser(id) {
      this.$router.push({ name: "Detail", params: { id } });
    },
    handleNext() {
      this.currentPage++;
    },
    handleBack() {
      this.currentPage--;
    },
  },
  watch:{
    currentPage:{
      handler(){
        this.start = (this.currentPage - 1) * USER_PER_PAGE + 1;
        this.end = this.start + USER_PER_PAGE -1;
      },
      immediate:true
    }
  }
  ,
  computed: {
    ...mapGetters("form", ["listUsers"]),
    filterdForm() {
      let start = (this.currentPage - 1) * USER_PER_PAGE;
      let end = start + USER_PER_PAGE;
      if (end > this.listUsers.length) {
        end = this.listUsers.length;
      }
      return this.listUsers.slice(start, end);
    },
    userDetail() {
      return this.listUsers.find(
        (item) => item.id === localStorage.getItem("id")
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-page {
  display: flex;

  .main-content {
    padding: 24px;
    width: 1046px;
    height: 780px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-left: 282px;
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    .table-container {
      width: 998px;
      height: 558px;
      position: relative;
      .table-item {
        width: 100%;
        border-top: 2px solid #e4e7eb;
        border-bottom: 2px solid #e4e7eb;
        padding-left: 54px;
        &::after {
          content: "";
          width: 100%;
          height: 2px;
          position: absolute;
          top: 54px;
          left: 0;
          background-color: #e4e7eb;
          z-index: 1;
        }
        .table-header {
          text-align: start;
          th {
            p {
              margin-top: 16px;
              margin-bottom: 16px;
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
            }
          }
        }

        th {
          text-align: left;
        }
      }
    }
  }
}
</style>