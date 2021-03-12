import { createStore } from 'vuex'

const store = createStore({
    state: () => {
        return {
            lang: 'rus'
        }
    },
    mutations: {
        setLang(state, value: string) {
            state.lang = value
        }
    },
    actions: {

    },
    getters: {
        getLang: state => state.lang
    }
})

export default store
