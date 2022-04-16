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

export const COMPLETE_TODO = 'COMPLETE_TODO';
export const completeTodo = text => ({
    type: COMPLETE_TODO,
    payload: {text}
});

export const LOAD_IN_PROGRESS = 'LOAD_IN_PROGRESS';
export const loadInProgress = () => ({
    type: LOAD_IN_PROGRESS
});

export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const loadSuccess = todos => ({
    type: LOAD_SUCCESS,
    payload: {todos}
});

export const LOAD_FAILURE = 'LOAD_FAILURE';
export const loadFailure = () => ({
    type: LOAD_FAILURE
});