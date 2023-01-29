<template>
  <div id="container-multiform">
    <div class="form-item">
      <NavBar
        :data="getMultiForm"
        :step="stepNum"
        @onChangeStep="onChangeStep"
      />
      <MultiStepForm :stepData="stepData" />
    </div>
  </div>
</template>
    
    <script>
import MultiStepForm from "./components/MultiStepForm.vue";
import NavBar from "./components/share/NavBar.vue";
import { mapGetters } from "vuex";
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
  props: {
    id: {
      type: String,
      default: () => "",
    },
  },
  watch: {
    stepNum: {
      handler() {
        const userDetail = this.listUsers.find((item) => item.id === this.id);
        this.stepData.data.forEach((item) => {
          item.value = userDetail[item.key];
        });
      },
      immediate: true,
    },
  },
  computed: {
    ...mapGetters("form", ["getMultiForm", "listUsers"]),
    stepData() {
      return this.getMultiForm.find((item) => item.step === this.stepNum);
    },
  },
  methods: {
    onChangeStep(choseStep) {
      this.stepNum = choseStep;
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