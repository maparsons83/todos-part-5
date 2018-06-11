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
            break;
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            });
            break;
        case DELETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => todo.id !== action.id)
            })
            break;
        case CLEAR_COMPLETED:
            return Object.assign({}, state, {
                todos: state.todos.filter(todo => !todo.completed)
            })
            break;
        default:
            return state;
    }
};

 