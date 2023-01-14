import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)

import file from './modules/file.js'
import list from './modules/list.js'
import place from './modules/place.js'
import form from './modules/form.js'
import toast from './modules/toast.js'
import loading from './modules/loading.js'
const storeData = {
        modules: {
                file,
                list,
                place,
                form,
                toast,
                loading
        }
}

const store = new Vuex.Store(storeData)

export default store