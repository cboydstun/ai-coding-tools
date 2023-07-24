import React, { useState } from 'react';

// Individual Todo Item
const TodoItem = ({ todo, index, completeTodo, deleteTodo }) => {
    return (
        <div
            style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
            {todo.text}

            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
    );
};

// Main Todo App
const ChatWindow = () => {
    const [todos, setTodos] = useState([
        { text: "Learn React", isCompleted: false },
        { text: "Create a Todo app", isCompleted: false }
    ]);

    const [value, setValue] = useState("");

    const addTodo = text => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                />
            ))}

            <input
                type="text"
                value={value}
                placeholder="Add a new todo"
                onChange={e => setValue(e.target.value)}
            />

            <button onClick={() => addTodo(value)}>Add Todo</button>
        </div>
    );
};

export default ChatWindow;
