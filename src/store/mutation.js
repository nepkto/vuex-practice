import { createStore } from "vuex";

export default createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state, num = 1) {
            state.count += num;
        },
        decrement(state, num) {
            state.count -= num;
        }
    },
    actions: {
        increment({ commit }) {
            console.log('ok')
            setTimeout(() => {
                commit('increment')

            }, 2000)
        },
        actionA({ commit }) {
            // return new Promise((resolve, reject) => {
            //     setTimeout(() => {
            //         commit('increment', 5)
            //         reject('Something Went Wrong')
            //     }, 1000)
            // })
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('increment', 5)
                    resolve()
                }, 1000)
            })
        },
        actionB({ dispatch, commit }) {
            return dispatch('actionA').then(() => {
                commit('someOtherMutation')
            })
        }
        // assuming `getData()` and `getOtherData()` return Promises

        // async actionA ({ commit }) {
        //     commit('gotData', await getData())
        //   },
        //   async actionB ({ dispatch, commit }) {
        //     await dispatch('actionA') // wait for `actionA` to finish
        //     commit('gotOtherData', await getOtherData())
        //   }
    }

});