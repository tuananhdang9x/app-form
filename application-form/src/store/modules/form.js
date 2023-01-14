import { formData } from '@/components/share/multiForm/components/formData.js'
import axios from 'axios'
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
                const res = await axios.get("http://localhost:8081/users");
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