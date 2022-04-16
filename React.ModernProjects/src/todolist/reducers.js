import { COMPLETE_TODO, CREATE_TODO, REMOVE_TODO, LOAD_IN_PROGRESS, LOAD_SUCCESS, LOAD_FAILURE } from "./actions";

export const isLoading = (state = false, action) => {
    const { type } = action; 
    
    switch (type) {
        case LOAD_IN_PROGRESS:
            return true;
        case LOAD_SUCCESS:
        case LOAD_FAILURE:
            return false;
        default:
            return state;
    }
};

export const todos = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case CREATE_TODO: {
            const {text} = payload;
            const newTodo = {
                text,
                isCompleted: false
            }
            return state.concat(newTodo);
            // BKTODO Use newer syntax after getting stuff working
            //return [...state, newTodo];
        }
        case REMOVE_TODO: {
            const {text} = payload;
            return state.filter(todo => todo.text !== text);
        }
        case COMPLETE_TODO: {
            const {text} = payload;
            return state.map(todo => {
                if (todo.text === text) {
                    return { ...todo, isCompleted: true };
                }
                return todo;
            });
        }
        default:
            return state;
    }
    
}

