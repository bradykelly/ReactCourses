export const CREATE_TODO = 'CREATE_TO_DO';
// BKTODO Add an id property to the todo payload (i.e. to the todo object)
export const createToDo = text => ({
    type: CREATE_TODO,
    payload: {text}
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: {text}
});