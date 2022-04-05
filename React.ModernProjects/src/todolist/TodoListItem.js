import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemoveClicked }) => (
    <div className="todo-item-container">
        <h3>{ todo.text }</h3>
        <div className="buttons-container">
            <button className="completed-button">Completed</button>
            <button
                onClick={ () => onRemoveClicked(todo.text) }
                className="remove-button">Remove
            </button>
        </div>
    </div>
);

export default TodoListItem;