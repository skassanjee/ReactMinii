import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';
import React, {useState} from 'react'

function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>Sahil's Todo List</h1>
        
        </header>    
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
        <TodoList todos={setTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
