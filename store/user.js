import { Promise } from "core-js";

export const state = () => ({
    user: {
        loggedIn: false,
        data: null
    }
})

export const getters = {
    user(state){
        return state.user
    }
}

export const mutations = {
    SET_USER(state, data) {
        state.user.data = data;
        state.user.loggedIn = !!data
    }
}

export const actions = {
    setUser({ commit }, { data }){
        return new Promise((resolve) => {
            commit("SET_USER", data.user)
            resolve()
        })
    }
}