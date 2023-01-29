<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <div class="input-salary" :class="{ error: errorMsg }">
      <input
        v-model="salary"
        type="text"
        :readonly="isAdminPage"
        @keyup="onChange(salary)"
      />
      <div class="input-text">VNĐ</div>
    </div>
    <div class="msg" v-if="errorMsg">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script>
import InputRequire from "./InputRequire.vue";
export default {
  data() {
    return {
      salary: this.value,
    };
  },
  components: {
    InputRequire,
  },
  props: {
    requireItem: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: () => "",
    },
    value: {
      type: String,
      default: () => "",
    },
    errorMsg: {
      type: String,
      default: () => "",
    },
    isAdminPage: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChange(salary) {
      this.$emit("onChange", salary);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-item {
  margin-bottom: 16px;
  .error {
    border: 1px solid red !important;
  }
  .msg {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: red;
    margin-top: 6px;
  }
  .input-title {
    display: flex;
    margin-bottom: 6px;
    .input-name {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #333;
    }
  }
  .input-salary {
    padding: 10px 8px;
    display: flex;
    align-items: center;
    width: 140px;
    height: 40px;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    .input-text {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
    }
    input {
      width: 86px;
      height: 20px;
      outline: none;
      border: none;
      margin-right: 10px;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>