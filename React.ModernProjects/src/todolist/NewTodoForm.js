import React, {useState} from 'react';
import "./NewTodoForm.css";

const NewTodoForm = () => {
    const [inputValue, setInputValue] = useState("");
    return (
        <div className="new-todo-form">
            <input
                type="text"
                className="new-todo-input"
                placeholder="New todo item"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}/>
            <button className="new-todo-button">Add</button>
        </div>
    )
};

export default NewTodoForm;