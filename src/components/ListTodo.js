import React from 'react'
import CompleteTodo from '../components/CompleteTodo'
import DeleteTodo from './DeleteTodo'


function ListTodo({ setTodos, filteredTodos, todos,setFlag}) {
    const handleEditTodo = (id, item) => {
        // setupdateTodo(item)
        console.log(id, item)
    }
  return (
    <div className=''>
        <ul className='p-1 space-y-2 '>
            {filteredTodos.map( todo => (
                <li className='flex px-3 py-2 my-2 bg-base-100 rounded-lg justify-between' 
                    key={todo._id} onDoubleClick={handleEditTodo(todo.id, todo.title)}>

                    <CompleteTodo todo={todo} setTodos={setTodos} todos={todos}/>

                    <DeleteTodo id={todo._id} setTodos={setTodos} todos={todos} setFlag={setFlag}/>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default ListTodo