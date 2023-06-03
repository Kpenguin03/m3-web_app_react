import React, { useState } from 'react';
import './styles.css';

function App() {
  // Define state variables
  const [todos, setTodos] = useState([]); // State variable to store the todo items
  const [inputValue, setInputValue] = useState(''); // State variable to store the value entered in the input field

  // Function to handle input field changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to add a new todo item
  const addTodo = () => {
    if (inputValue.trim() !== '') { // Check if input value is not empty (ignoring whitespace)
      setTodos([...todos, { text: inputValue, completed: false }]); // Add new todo item to the todos array
      setInputValue(''); // Reset the input value
    }
  };

  // Function to toggle the completion status of a todo item
  const toggleTodo = (index) => {
    const newTodos = [...todos]; // Create a copy of the todos array
    newTodos[index].completed = !newTodos[index].completed; // Toggle the completed property of the clicked todo item
    setTodos(newTodos); // Update the todos state with the modified array
  };

  // Function to delete a todo item
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Create a new array by filtering out the todo item at the given index
    setTodos(newTodos); // Update the todos state with the new array
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
