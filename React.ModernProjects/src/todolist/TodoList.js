import React from 'react';
import { connect } from "react-redux";
import { removeTodo, completeTodo } from "./actions";
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemoveClicked, onCompleteClicked }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        { todos.map(todo => <TodoListItem todo={ todo } onRemoveClicked={ onRemoveClicked } onCompleteClicked={ onCompleteClicked } />) }
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemoveClicked: text => dispatch(removeTodo(text)),
    onCompleteClicked: text => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);