import {CREATE_TODO, createToDo, REMOVE_TODO, removeTodo} from "./actions";

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
        default:
            return state;
    }
    
}

