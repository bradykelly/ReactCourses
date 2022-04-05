import React from 'react';
import { connect } from "react-redux";
import { removeTodo } from "./actions";
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

const TodoList = ({ todos = [], onRemoveClicked }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        { todos.map(todo => <TodoListItem todo={ todo } onRemoveClicked={ onRemoveClicked } />) }
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemoveClicked: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);