<template>
  <DropZoneItem
    @onAddItem="onAddItem"
    :files="getFiles"
    :maxSize="maxSize"
    :quantityFileUpload="quantityFileUpload"
    :listExtentions="listExtentions"
    :placeholder="placeholder"
    :triggerText="triggerText"
  />
</template>

<script>
import DropZoneItem from "./components/DropZoneItem.vue";
import { mapGetters } from "vuex";
import { maxSize, listExtentions } from "@/const/index.js";

export default {
  data() {
    return {
      maxSize,
      quantityFileUpload: 1,
      listExtentions,
    };
  },
  components: {
    DropZoneItem,
  },
  props: {
    placeholder: {
      type: String,
      default: () => "",
    },
    triggerText: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    onAddItem() {
      this.$emit("onAddItem");
    },
  },
  computed: {
    ...mapGetters("file", ["getFiles"]),
  },
};
</script>

<style>
</style>