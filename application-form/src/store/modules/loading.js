export default {
    namespaced: true,
    state: {
        loadingProcess: false
    },
    getters: {
        getLoading: state => state.loadingProcess
    },
    actions: {
        activeLoading({ commit }) {
            commit('ACTIVE_LOADING')
        }
    },
    mutations: {
        ACTIVE_LOADING(state) {
            state.loadingProcess = true
            setTimeout(() => {
                state.loadingProcess = false
            }, 2000);
        }
    }
}