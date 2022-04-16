import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { removeTodo, completeTodo } from "./actions";
import { displayAlert, loadTodos } from "./thunks";
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { isLoading } from "./reducers";

const TodoList = ({ todos = [], onRemoveClicked, onCompleteClicked, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading...</div>;
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            { todos.map(todo => <TodoListItem todo={ todo } onRemoveClicked={ onRemoveClicked } onCompleteClicked={ onCompleteClicked } />) }
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemoveClicked: text => dispatch(removeTodo(text)),
    onCompleteClicked: text => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);