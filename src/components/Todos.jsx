import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todoState } from '../state/atoms/TodoState'
import Todo from './Todo'
import { totalTodos } from '../state/selectors/TotalTodos'

const Todos = () => {
    const [ todo, setTodo ] = useRecoilState(todoState)
    const [inputText, setInputText] = useState('')
    const totalTds = useRecoilValue(totalTodos)
    function addTodo(){
        setTodo((prevState)=> [
            ...prevState,
            {
                id: Math.random(),
                text: inputText
            }
        ])
        setInputText('')
    }

    function handleChange(e){
        setInputText(e.target.value)
    }

    function clearTodo(){
        setTodo([])
    }
    console.log(todo)
    console.log(inputText)
    return (
    <div>
        <input type="text" id='todoInput' value={inputText} onChange={handleChange}/>
        <button onClick={addTodo}>Add Todo</button>
        <button onClick={clearTodo}>Clear Todo</button>
        {
            todo.map((item) => {
                return (
                    <Todo key={item.id} text={item.text} id={item.id}/>
                )
            })
        }
        <h3>{totalTds}</h3>   
    </div>
  )
}

export default Todos