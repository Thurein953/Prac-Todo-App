import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
    const { todos,selectedTab } = props
    const filtered = selectedTab === 'All' ? todos :
    selectedTab === 'Open' ? todos.filter(val => !val.complete) :  
            todos.filter(val => val.complete)

  return (
    <>
        {filtered.map((todo, todoIndex) => {
            return(
                <ToDoCard key={todoIndex} todoIndex={todoIndex} todo={todo} filtered={filtered} {...props} />
            )
        })}
    </>
  )
}
