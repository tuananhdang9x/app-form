<template>
  <div id="container-multiform">
    <div class="form-item">
      <NavBar
        :data="getMultiForm"
        :step="stepNum"
        @onChangeStep="onChangeStep"
      />
      <MultiStepForm
        :stepData="stepData"
        :formData="getMultiForm"
        @onPrevStep="onPrevStep"
        @onChange="onChange"
        @handleNextStep="handleNextStep"
        @handleBackLogin="handleBackLogin"
      />
    </div>
  </div>
</template>
  
  <script>
import MultiStepForm from "./components/MultiStepForm.vue";
import NavBar from "./components/share/NavBar.vue";
import { mapGetters } from "vuex";
import {
  validateNextStep,
  validateRequireItem,
  validateMaxLength,
  validateDoB,
  validateSalary,
  validateDuplicatePassword,
  resetError,
} from "@/utils/validateMultiForm.js";
export default {
  components: {
    MultiStepForm,
    NavBar,
  },
  data() {
    return {
      stepNum: 1,
    };
  },
  computed: {
    ...mapGetters("form", ["getMultiForm"]),
    ...mapGetters("list", ["listChoseOptions"]),
    ...mapGetters("file", ["getFiles"]),
    stepData() {
      return this.getMultiForm.find((item) => item.step === this.stepNum);
    },
  },
  methods: {
    async onNextStep() {
      if (validateNextStep(this.stepData)) {
        if (this.stepNum < this.getMultiForm.length) {
          this.stepNum++;
        } else {
          this.$emit("handleSubmit");
        }
      }
    },
    onPrevStep() {
      if (this.stepNum > 1) {
        this.stepNum--;
      }
    },
    handleBackLogin() {
      this.$router.push("/");
    },
    onChangeStep(choseStep) {
      if (choseStep > this.stepNum) {
        this.handleNextStep();
        if (validateNextStep(this.stepData, this.stepNum)) {
          this.stepNum = choseStep;
        }
      } else {
        this.stepNum = choseStep;
      }
    },
    onChange(payload) {
      let item = this.stepData.data[payload.index];
      item.value = payload.e;
      resetError(this.stepData);

      if (item.inputType === "inputDob") {
        item.value = payload.e.target.value;
      }

      if (item.inputType === "inputCity") {
        item.value = payload.e.target.value;
      }

      if (item.inputType === "inputJobPosition") {
        item.value = this.listChoseOptions;
      }

      if (item.inputType === "inputImage") {
        item.value = this.getFiles;
      }
    },
    handleNextStep() {
      this.stepData.data.forEach((item) => {
        if (item.requireItem === true) {
          validateRequireItem(item);
        }
        if (item.wordLimit) {
          validateMaxLength(item);
        }
        if (item.passwordField === true) {
          validateDuplicatePassword(this.stepData, item);
        }
        if (item.inputType === "inputDob") {
          validateDoB(item);
        }
        if (item.inputType === "inputSalary") {
          validateSalary(item);
        }
      });
      this.onNextStep();
    },
  },
};
</script>
  
<style lang="scss" scoped>
#container-multiform {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-item {
    position: absolute;
    width: 596px;
    max-height: 683px;
    padding: 24px 32px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
}
</style>  