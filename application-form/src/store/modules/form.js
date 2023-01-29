import { formData } from '@/components/share/multiForm/components/formData.js'
import {getUser} from '@/components/service/userService.js'
export default {
    namespaced: true,
    state: {
        formData: JSON.parse(JSON.stringify(formData)),
        users: [],
    },
    getters: {
        getMultiForm: state => state.formData,
        listUsers: state => state.users,
    },
    actions: {
        async getUser({ commit }) {
            try {
                const res = await getUser();
                commit('GET_USER', res.data)
            } catch (error) {
                console.log(error)
            }
        },
        clearForm({ commit }) {
            commit('CLEAR_FORM')
        },
    },
    mutations: {
        GET_USER(state, data) {
            state.users = data
        },
        CLEAR_FORM(state) {
            state.formData = JSON.parse(JSON.stringify(formData))
        },
    }
}