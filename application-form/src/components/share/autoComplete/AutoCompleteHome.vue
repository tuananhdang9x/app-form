<template>
  <AutoCompleteItem
    :placeholder="'Chọn các vị trí mà bạn muốn...'"
    :listOptions="listOptions"
    @onChangeJob="onChangeJob"
    :value="value"
    :show="show"
  />
</template>
  
  <script>
import AutoCompleteItem from "./components/AutoCompleteItem.vue";
import { LIST_JOB } from "@/const/multiForm.js";
export default {
  data() {
    return {
      listOptions: LIST_JOB,
    };
  },
  components: {
    AutoCompleteItem,
  },
  methods: {
    onChangeJob() {
      this.$emit("onChangeJob");
    },
  },
  props: {
    type: {
      type: String,
      default: () => "",
    },
    value: {
      type: Array,
      default: () => [],
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
</style>