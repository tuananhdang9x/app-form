<template>
  <div>
    <div>
      <InputText
        v-if="item.inputType === 'inputText'"
        :requireItem="item.requireItem"
        :title="item.title"
        :errorMsg="item.errorMsg"
        :value="item.value"
        :showInAdmin="item.showInAdmin"
        :isAdminPage="isAdminPage"
        :isPasswordField="item.isPasswordField"
        @onChange="onChange"
      />
      <InputDateOfBirth
        v-if="item.inputType === 'inputDob'"
        :requireItem="item.requireItem"
        :title="item.title"
        :errorMsg="item.errorMsg"
        :value="item.value"
        :isAdminPage="isAdminPage"
        @onChange="onChange"
      />
      <InputCity
        v-if="item.inputType === 'inputCity'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        :isAdminPage="isAdminPage"
        @onChange="onChange"
      />
      <InputJobPosition
        v-if="item.inputType === 'inputJobPosition'"
        :requireItem="item.requireItem"
        :title="item.title"
        :description="item.description"
        :value="jobPosition"
        :isAdminPage="isAdminPage"
        @onChange="onChange"
      />
      <InputDescription
        v-if="item.inputType === 'inputDescription'"
        :requireItem="item.requireItem"
        :title="item.title"
        :wordLimit="item.wordLimit"
        :errorMsg="item.errorMsg"
        :value="item.value"
        :isAdminPage="isAdminPage"
        @onChange="onChange"
      />
      <InputImage
        v-if="item.inputType === 'inputImage'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value.toString()"
        :placeholder="item.placeholder"
        :triggerText="item.triggerText"
        :isAdminPage="isAdminPage"
        @onChange="onChange"
      />
      <InputSalary
        v-if="item.inputType === 'inputSalary'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        :errorMsg="item.errorMsg"
        :isAdminPage="isAdminPage"
        @onChange="onChange"
      />
    </div>
  </div>
</template>

<script>
import InputText from "./share/InputText.vue";
import InputDateOfBirth from "./share/InputDateOfBirth.vue";
import InputCity from "./share/InputCity.vue";
import InputJobPosition from "./share/InputJobPosition.vue";
import InputDescription from "./share/InputDescription.vue";
import InputImage from "./share/InputImage.vue";
import InputSalary from "./share/InputSalary.vue";
export default {
  components: {
    InputText,
    InputDateOfBirth,
    InputCity,
    InputJobPosition,
    InputDescription,
    InputImage,
    InputSalary,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onChange(e) {
      this.$emit("onChange", e);
    },
  },
  computed: {
    showInAdmin() {
      return this.$route.name.includes("admin") ? this.item.showInAdmin : true;
    },
    isAdminPage() {
      return this.$route.name.includes("admin") ? true : false;
    },
    jobPosition() {
      return this.isAdminPage ? this.item.value.split(",") : this.item.value;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .input-item input {
  padding: 8px 10px;
  width: 450px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}
</style>