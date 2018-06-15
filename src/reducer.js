import {
    MARK_COMPLETE,
    ADD_TODO,
    DELETE_TODO,
    CLEAR_COMPLETED
} from "./actions.js";
import todoList from "./todos.json";

const initialState = {
    todos : todoList
};

export default function todoAppReducer(state = initialState, action) {
    switch (action.type) {
        case MARK_COMPLETE:
            return Object.assign({}, state, {
                todos: state.todos.map(
                    todo =>
                      todo.id === action.id
                        ? {
                            ...todo,
                            completed: !todo.completed
                          }
                        : todo
                  )
            });
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos,
                    {
                        userId: 1,
                        id: state.todos.length ? state.todos[state.todos.length - 1].id + 1 : 1,
                        title: action.title,
                        completed: false
                    }
                ]
            });
        case DELETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => todo.id !== action.id)
            })
        case CLEAR_COMPLETED:
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => !todo.completed)
            })
        default:
            return state;
    }
};

 