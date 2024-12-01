import React from 'react'

export default function Header(props) {
  const { todos } = props
  const todosLength = todos.length

  return (
    <header>
      <h1 className="text-gradient">You have {todosLength} {todos.length != 1 ? 'tasks' : 'task'}.</h1>
    </header>
  )
}
