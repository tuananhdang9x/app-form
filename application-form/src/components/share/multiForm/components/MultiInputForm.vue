<template>
  <div class="step-item">
    <div v-for="(item, index) in data" :key="item.id">
      <InputItem :item="item" @onChange="(e) => onChange(e, index)" />
    </div>
  </div>
</template>

<script>
import InputItem from "./InputItem.vue";
export default {
  components: {
    InputItem,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onChange(e, index) {
      this.$emit("onChange", { e, index });
    },
  },
};
</script>

<style lang="scss" scoped>
.step-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  width: 530px;
  max-height: 418px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin-bottom: 24px;
  margin-top: 16px;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #ccc;
  }
}
</style>