<template>
  <div>
    <div>
      <MultiInputForm :data="stepData.data" @onChange="onChange" />
    </div>
    <FormFooter
      :isAdminPage="isAdminPage"
      :stepData="stepData"
      :formData="formData"
      @handleNextStep="handleNextStep"
      @handlePrevStep="handlePrevStep"
      @handleBackLogin="handleBackLogin"
    />
  </div>
</template>

<script>
import MultiInputForm from "./MultiInputForm.vue";
import FormFooter from "./share/FormFooter.vue";
export default {
  components: {
    MultiInputForm,
    FormFooter,
  },
  props: {
    stepData: {
      type: Object,
      default: () => {},
    },
    formData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleDelete(index) {
      this.$emit("handleDelete", index);
    },
    handleNextStep() {
      this.$emit("handleNextStep");
    },
    handlePrevStep() {
      this.$emit("onPrevStep");
    },
    handleBackLogin() {
      this.$emit("handleBackLogin");
    },
    onChange(payload) {
      this.$emit("onChange", payload);
    },
  },
  computed: {
    isAdminPage() {
      return this.$route.path.includes("admin") ? true : false;
    },
  },
};
</script>

<style>
</style>