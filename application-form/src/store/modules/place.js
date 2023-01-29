import { formatAddress, formatAddressCode } from "@/utils/index.js";
import axios from 'axios'

export default {
    namespaced: true,
    state: {
        options: [],
    },
    getters: {
        listOptions: state => state.options,
    },
    actions: {
        async getOptions({ commit }) {
            try {
                const res = await axios.get('https://Provinces.open-api.vn/api/?depth=1')
                commit('GET_OPTIONS', res.data)
            } catch (error) {
                throw Error(error)
            }
        }
    },
    mutations: {
        GET_OPTIONS(state, data) {
            const listOptions = data.map(item => {
                return {id: item.code, codename: formatAddressCode(item.codename), name: formatAddress(item.name)}
                }   
            )
            state.options = listOptions
        },
    }
}