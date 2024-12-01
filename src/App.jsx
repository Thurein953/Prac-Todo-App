import Header from "./components/Header"
import Tabs from "./components/Tabs"
import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import { useState, useEffect } from "react"

function App() {
  const [todos, setTodos] = useState([])
  const [selectedTab, setSelectedTab] = useState('All')

  function handleAddTodos(newtodo) {
    const newTodoList = [...todos, { input: newtodo, complete: false }]
    setTodos(newTodoList)
    handleSave(newTodoList)
  }
  
  function handleComplete(index) {
    let newList = [...todos]
    let completed = todos[index]
    completed['complete'] = true
    newList[index] = completed
    setTodos(newList)
    handleSave(newList)
  }

  function handleDeleteTodos(index) {
    const newList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newList)
    handleSave(newList)
  }

  function handleSave(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {return}
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
    <Header todos={todos} />
    <Tabs todos={todos} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    <ToDoList todos={todos} selectedTab={selectedTab} handleDeleteTodos={handleDeleteTodos} handleComplete={handleComplete} />
    <ToDoInput handleAddTodos={handleAddTodos} />
    </>
  )
}

export default App
