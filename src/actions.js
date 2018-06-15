export const MARK_COMPLETE = 'MARK_COMPLETE';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export function markCompleted(id) {
    return ({
        type: MARK_COMPLETE, 
        id
    })
}
export function addTodo(title) {
    return ({
        type: ADD_TODO, 
        title
    })
}
export function deleteTodo(id) {
    return ({
        type: DELETE_TODO, 
        id
    })
}
export function clearCompleted() {
    return ({
        type: CLEAR_COMPLETED
    })
}
