import React from 'react';
import {connect} from "react-redux";
import TodoListItem from './TodoListItem';
import NewTodoForm from "./NewTodoForm";
import {removeTodo} from "./actions";
import "./TodoList.css";

const TodoList = ({todos = [], onRemoveClicked}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem key={todo.text} todo={todo} onRemoveClicked={onRemoveClicked}/>)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemoveClicked: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);