import regeneratorRuntime from "regenerator-runtime";
import { loadInProgress, loadSuccess, loadFailure } from "./actions";

export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadInProgress());
        const response = await fetch("http://localhost:8080/todos");
        const todos = await response.json();
        dispatch(loadSuccess(todos));
    } catch (e) {
        dispatch(loadFailure());
        dispatch(displayAlert(`Failed to load todos: ${e}`));
    }
};

export const displayAlert = text => () => {
    alert(text);
};