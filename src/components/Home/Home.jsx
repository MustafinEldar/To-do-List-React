import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'
import { useLocalStorage } from './LocalStorage'

const data = [
  {
    id: 'eldar98',
    title: 'Пройти доку 2',
    isCompleted: false,
  },
  {
    id: 'eldar97',
    title: 'Войти в топ 5000 по адекватности',
    isCompleted: false,
  },
  {
    id: 'eldar96',
    title: 'Устроиться в хорошую компанию',
    isCompleted: false,
  }
]

const Home = () => {
  const [todos, setTodos] = useLocalStorage('todos', data);

   
  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find(t => t.id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter(t => t.id !== id))
  } 

  
  return (
    <div className=' text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-10'>Список дел</h1>
      {todos.map(todo => (
      <TodoItem 
        key={todo.id} 
        todo={todo} 
        changeTodo={changeTodo} 
        removeTodo={removeTodo}   
      />
      ))}
        <CreateTodoField  setTodos={setTodos}/>
    </div>
  )
}

export default Home
