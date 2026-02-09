import React, { useState } from 'react';
import '../styles/TodosPage.css';

function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getFilteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter(todo => todo.completed);
    } else if (filter === 'incomplete') {
      return todos.filter(todo => !todo.completed);
    }
    return todos;
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="todos-page">
      <h2>My Todo List</h2>
      
      <div className="todos-container">
        <div className="add-todo-section">
          <h3>Add New Task</h3>
          <form onSubmit={addTodo} className="add-todo-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a new task..."
              className="todo-input"
            />
            <button type="submit" className="add-button">Add Task</button>
          </form>
        </div>

        <div className="todos-list-section">
          <div className="filter-buttons">
            <button 
              className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={filter === 'incomplete' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('incomplete')}
            >
              Incomplete
            </button>
            <button 
              className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>

          <ul className="todo-list">
            {filteredTodos.length === 0 ? (
              <p className="no-todos">No tasks to display</p>
            ) : (
              filteredTodos.map(todo => (
                <li key={todo.id} className="todo-item">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleComplete(todo.id)}
                    className="todo-checkbox"
                  />
                  <span className={todo.completed ? 'todo-text completed' : 'todo-text'}>
                    {todo.text}
                  </span>
                  <button 
                    onClick={() => deleteTodo(todo.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodosPage;