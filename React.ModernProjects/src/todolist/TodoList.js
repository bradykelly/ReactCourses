import React from 'react';
import { connect } from "react-redux";
import { removeTodo, completeTodo } from "./actions";
import { displayAlert } from "./thunks";
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemoveClicked, onCompleteClicked, onDisplayAlertClicked }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        { todos.map(todo => <TodoListItem todo={ todo } onRemoveClicked={ onRemoveClicked } onCompleteClicked={ onDisplayAlertClicked } />) }
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemoveClicked: text => dispatch(removeTodo(text)),
    onCompleteClicked: text => dispatch(completeTodo(text)),
    onDisplayAlertClicked: text => dispatch(displayAlert(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);