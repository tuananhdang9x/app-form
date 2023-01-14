export default {
    namespaced: true,
    state: {
        toastMessage: [
        ],
    },
    getters: {
        getToastMessage: state => state.toastMessage,
    },
    actions: {
        showToast({ commit }, toast) {
            commit('SHOW_TOAST', toast)
        },
        removeToast({ commit }, toast) {
            commit('REMOVE_TOAST', toast)
        }
    },
    mutations: {
        SHOW_TOAST(state, toast) {
            state.toastMessage.push(toast)
        },
        REMOVE_TOAST(state, toast) {
            state.toastMessage = state.toastMessage.filter(item => item.id !== toast.id)
        },
    }
}