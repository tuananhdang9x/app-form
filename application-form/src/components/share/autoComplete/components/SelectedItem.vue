<template>
  <div class="search-result">
    <span class="result-item">{{ item }}</span>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.search-result {
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin: 4px 8px 4px 0px;

  .result-item {
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    color: #627d98;
    font-weight: 400;
  }
  .result-icon {
    cursor: pointer;
    width: 14px;
    height: 24px;
    margin-left: 8px;
    display: flex;
    align-items: center;
  }
}
</style>