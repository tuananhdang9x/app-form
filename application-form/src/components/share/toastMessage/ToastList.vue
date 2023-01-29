<template>
  <div class="noti-list">
    <ToastMessage
      v-for="toast in getToastMessage"
      :key="toast.id"
      :toast="toast"
      :position="toast.position"
      @handleDetele="removeToast(toast)"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ToastMessage from "./ToastMessage.vue";
export default {
  components: {
    ToastMessage,
  },
  computed: {
    ...mapGetters("toast", ["getToastMessage"]),
  },
  methods: {
    ...mapActions("toast", ["removeToast"]),
  },
};
</script>

<style lang="scss" scoped>
</style>