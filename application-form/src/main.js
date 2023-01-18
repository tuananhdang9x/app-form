import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import store from './store/store.js'
import { BootstrapVue, } from 'bootstrap-vue'
import { firebaseConfig } from './firebase-config.js'
import { getStorage, ref } from 'firebase/storage'
import { initializeApp } from 'firebase/app'
import '@/components/api/axios.js'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.isAuthenticate) {
    if (localStorage.getItem('id')) {
      next();
    } else {
      next('/')
    }
  } else {
    next()
  }
})
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const storageRef = ref(storage);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
