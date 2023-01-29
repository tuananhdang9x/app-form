export default {
    namespaced: true,
    state: {
        files: [
        ],
        fileRaws: [],
    },
    getters: {
        getFiles: state => state.files,
        getFileRaws: state => state.fileRaws
    },
    actions: {
        addFile({ commit }, payload) {
            commit('ADD_FILE', payload)
        },
        deleteFile({ commit }, id) {
            commit('DELETE_FILE', id)
        },
        addFileRaw({ commit }, file) {
            commit('ADD_FILE_RAW', file)
        },
        deleteFileRaw({ commit }, id) {
            commit('DELETE_FILE_RAW', id)
        },
        clearFile({ commit }) {
            commit('CLEAR_FILE')
        },
        clearFileRaw({ commit }) {
            commit('CLEAR_FILE_RAW')
        }
    },
    mutations: {
        ADD_FILE(state, payload) {
            state.files.unshift({
                id: payload.id,
                name: payload.name,
                size: payload.size,
                extType: payload.extType
            })
        },
        ADD_FILE_RAW(state, file) {
            state.fileRaws.unshift(file)
        },
        DELETE_FILE(state, id) {
            state.files = state.files.filter(file => file.id !== id)
        },
        DELETE_FILE_RAW(state, id) {
            state.fileRaws = state.fileRaws.filter(file => file.id !== id)
        },
        CLEAR_FILE(state) {
            state.files = []
        },
        CLEAR_FILE_RAW(state) {
            state.fileRaws = []
        }
    }
}