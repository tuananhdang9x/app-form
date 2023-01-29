<template>
  <div class="footer-table">
    <div class="footer-back-icon" @click="handleBack" v-if="currentPage !== 1">
      <IconBackArrow2 />
    </div>
    <p class="footer-desc">
      {{ start }}~{{ end }} trong tổng cộng {{ listUsers.length }} bản ghi
    </p>
    <div class="footer-icon" @click="handleNext" v-if="end < listUsers.length">
      <IconNextArrow />
    </div>
  </div>
</template>

<script>
import IconNextArrow from "@/assets/icon/IconNextArrow.vue";
import IconBackArrow2 from "@/assets/icon/IconBackArrow2.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    IconNextArrow,
    IconBackArrow2,
  },
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
    start: {
      type: Number,
      default: 0,
    },
    end: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handleBack() {
      this.$emit("handleBack");
    },
    handleNext() {
      this.$emit("handleNext");
    },
  },
  computed: {
    ...mapGetters("form", ["listUsers"]),
  },
};
</script>

<style lang="scss" scoped>
.footer-table {
  display: flex;
  align-items: center;
  justify-content: space-around;
  .footer-desc {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-right: 65px;
  }
  .footer-back-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    color: #e4e7eb;
    margin-right: 55px;
    opacity: 0.6;
  }
  .footer-icon {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    color: #e4e7eb;
  }
}
</style>