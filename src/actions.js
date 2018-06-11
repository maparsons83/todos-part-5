export const MARK_COMPLETE = 'MARK_COMPLETE';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export function markCompleted(index) {
    const action = {
        type: ADD_TODO, 
        index: index
    }
}
export function addTodo(text) {
    const action = {
        type: ADD_TODO, 
        text: text
    }
}
export function deleteTodo(id) {
    const action = {
        type: DELETE_TODO, 
        id: id
    }
}
export function clearCompleted() {
    const action = {
        type: CLEAR_COMPLETED
    }
}
