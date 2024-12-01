import { useState } from 'react'

export default function ToDoInput(props) {
    const { handleAddTodos } = props
    const [newtask, setNewTask] = useState('')

  return (
    <div className="input-container">
        <input value={newtask} onChange={(e) => {setNewTask(e.target.value)}} placeholder="Add Task" />
        <button onClick={() => {
            if (!newtask) { return }
            handleAddTodos(newtask)
            setNewTask('')
            }}>
            <i className="fa-solid fa-plus"></i>
        </button>
    </div>
  )
}
