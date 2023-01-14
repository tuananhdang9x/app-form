<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>
    <ToastList />
    <LoadingSpinner v-if="getLoading" />
  </div>
</template>

<script>
import LoadingSpinner from "@/components/share/loadingSpinner/LoadingSpinner.vue";
import ToastList from "@/components/share/toastMessage/ToastList.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    ToastList,
    LoadingSpinner,
  },
  computed: {
    ...mapGetters("loading", ["getLoading"]),
  },
};
</script>

<style >
#app {
  font-family: "Noto Sans JP";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
