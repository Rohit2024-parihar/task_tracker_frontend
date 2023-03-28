import React from 'react'
import axios from 'axios'



function CompleteTodo( { todo,todos, setTodos }) {
 const BASE_URL='http://localhost:8000/api/todo'
  const handleTodoCompletion = async (id, active) => {
    await axios.put(`${BASE_URL}/${id}/`, { active: active });
    setTodos(todos.map(todo => (todo._id === id ? { ...todo, active } : todo)));
    };


  return (
    <div className='flex'>
    <input 
      className='checkbox checkbox-success checkbox-sm mx-2'
        type="checkbox" 
        checked={todo.active} 
        onChange={() => handleTodoCompletion(todo._id, !todo.active)} 
        
    />
      <p className='mx-2 text-stone-300 text-xl'>{todo.title}</p>
    </div>
  )
}

export default CompleteTodo