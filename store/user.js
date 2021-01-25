export const strict = false

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
    SET_USER(state, { user, loggedIn}) {
        state.user.data = user;
        state.user.loggedIn = loggedIn
    }
}

export const actions = {
    setUser({ commit }, data){
        console.log(data)
        
        // return new Promise((resolve) => {
        //     console.log(data.user)
        //     resolve()
        // })
        commit("SET_USER", JSON.parse(JSON.stringify(data)))
    }
}