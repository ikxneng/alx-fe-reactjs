import React, {useState} from "react";

const AddTodoForm = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()) {
            addTodo(inputValue.trim());
            setInputValue('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a new todo" value={inputValue} onChange={(e) => setInputValue(e.target.value)}  />
            <button type="submit">Add</button>
        </form>
    );

};

export default AddTodoForm;