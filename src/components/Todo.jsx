import React from 'react'
import { useSetRecoilState } from 'recoil'
import { todoState } from '../state/atoms/TodoState'

const Todo = ({text, id}) => {
  const setTodos = useSetRecoilState(todoState)
  function deleTodos(){
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id != id)
    })
  }
  
  return (
    <div>
      <p>{text}</p>
      <button onClick={deleTodos}>X</button>
    </div>
  )
}

export default Todo