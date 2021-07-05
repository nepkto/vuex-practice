import { createStore } from "vuex";

export default createStore({
    state: {
        todos: [{
                id: 1,
                text: '123',
                done: true
            },
            {
                id: 2,
                text: '456',
                done: false
            },
            {
                id: 3,
                text: '789',
                done: true
            }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done);
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length

        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {},
    actions: {},
    modules: {},
});