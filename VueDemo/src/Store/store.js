import { createStore } from 'vuex'
import axios from 'axios'

import VuexORM from '@vuex-orm/core'
import User from '../models/user'
import Post from '../models/post'

// Create a new instance of Database.
const database = new VuexORM.Database()

// Register Models to Database.
database.register(User)
database.register(Post)

export default createStore({
    state: {
        counter: 0,
        colorCode: 'red'
    },
    mutations: {
        incrementCounter(state, numberToIncrease) {
            state.counter += Number(numberToIncrease);
        },
        decrementCounter(state, numberToDecrease) {
            state.counter -= Number(numberToDecrease);
        },
        SetColorCode(state, newColorCode) {
            state.colorCode = newColorCode;
        }
    },
    actions: {
        incrementCounter({ commit }) {
            //axios('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1')
            axios('https://cors-anywhere.herokuapp.com/https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1')
                .then(response => {
                    console.log(response);
                    commit('incrementCounter', response.data);
                });
        },
        decrementCounter({ commit }) {
            axios('https://cors-anywhere.herokuapp.com/https://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1')
                .then(response => {
                    console.log(response);
                    commit('decrementCounter', response.data);
                });
        },
        SetColorCode({ commit }, newColorCode) {
            commit('SetColorCode',newColorCode);
        }
    },
    getters: {
        counterSquared(state) {
            return state.counter * state.counter;
        },
        getColorCode(state) {
            return state.colorCode;
        }
    },
    modules: {

    },
    plugins: [VuexORM.install(database)]
});