import React from 'react'

const Form = ({setInputText,inputText, setTodos, todos}) => {
    const inputTextHanlder = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                text: inputText, 
                completed: false,
                id: Math.random()*10000

            }
        ])

        setInputText('')
    }

  return (
    <form >
        <input value={inputText} onChange={inputTextHanlder} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        {/* <div className="select">
            <select name="todos" className="filter-todo">
                <option vaule="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">uncompleted</option>
            </select>
        </div> */}
    </form>
  )
}

export default Form