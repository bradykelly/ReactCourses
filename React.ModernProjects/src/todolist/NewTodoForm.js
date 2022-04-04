import React, {useState} from 'react';
import {connect} from "react-redux";
import {createTodo} from "./actions";
import "./NewTodoForm.css";

const NewTodoForm = ({todos, onCreateClicked}) => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="new-todo-form">
            <input
                type="text"
                className="new-todo-input"
                placeholder="New todo item"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}/>
            <button 
                onClick={() => {
                    const isDuplicate = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicate) {
                        onCreateClicked(inputValue);
                        setInputValue("");
                    }
                }}
                className="new-todo-button">
                Add
            </button>
        </div>
    )
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreateClicked: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);