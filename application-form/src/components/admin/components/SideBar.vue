<template>
  <div class="side-bar">
    <div class="info">
      <div class="avatar">
        <img :src="imgUrl" alt="avatar" />
      </div>
      <div class="name">
        <p>{{ user.fullname }}</p>
      </div>
      <div class="description">
        <p>{{ user.position }}</p>
      </div>
    </div>
    <div class="request-item">
      <p>Requests</p>
    </div>
    <div class="logout-item" @click="handleLogout">
      <p>Logout</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleLogout() {
      this.$emit("handleLogout");
    },
  },
  
  computed: {
    imgUrl() {
      return this.user.avatar
        ? `http://localhost:8081/uploads/${this.user.avatar}`
        : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.side-bar {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #dcdcdc;
  z-index: 99;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .description {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #555555;
      margin-top: 12px;
      margin-bottom: 16px;
      padding: 0 10px;
      text-align: center;
      word-wrap: break-word;
    }
    .name {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #333333;
      margin-top: 12px;
    }
    .avatar {
      margin-top: 16px;
      img {
        width: 150px;
        height: 150px;
        border-radius: 100%;
      }
    }
  }
  .request-item {
    cursor: pointer;
    padding: 10px 126px 10px 24px;
    width: 250px;
    height: 40px;

    background: rgba(123, 189, 255, 0.16);
    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #0063c4;
    }
  }
  .logout-item {
    cursor: pointer;
    padding: 10px;
    margin-left: 14px;
    p {
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      color: #333333;
    }
  }
}
</style>