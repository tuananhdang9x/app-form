export default {
    namespaced: true,
    state: {
        choseOptions: [],
    },
    getters: {
        listChoseOptions: state => state.choseOptions,
    },
    actions: {
        addChoseList({ commit }, item) {
            commit('ADD_CHOSE_LIST', item)
        },
        deleteChoseItem({ commit }, id) {
            commit('DELETE_CHOSE_ITEM', id)
        },
        clearChoseList({ commit }) {
            commit('CLEAR_CHOSE_LIST')
        }
    },
    mutations: {
        ADD_CHOSE_LIST(state, item) {
            state.choseOptions.push(item)
        },
        DELETE_CHOSE_ITEM(state, id) {
            state.choseOptions = state.choseOptions.filter(item => item.id !== id)
        },
        CLEAR_CHOSE_LIST(state) {
            state.choseOptions = []
        }
    }
}