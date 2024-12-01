import React from 'react'

export default function ToDoCard(props) {
    const { todo, todoIndex, handleDeleteTodos, handleComplete, todos, filtered } = props

    function findIndex(index) {
        const toFind = filtered[index].input
        const finalIndex = todos.findIndex((val) => val.input === toFind)
        return (finalIndex)
    }

  return (
    <div className="card todo-item">
        <p>{todo.input}</p>
        <div className="todo-buttons">
            <button onClick={() => {
                handleComplete(findIndex(todoIndex))
            }} disabled={todo.complete}>
                <h6>Done</h6>
            </button>
            <button onClick={() => {
                handleDeleteTodos(findIndex(todoIndex))
            }}>
                <h6>Delete</h6>
            </button>
        </div>
    </div>
  )
}
