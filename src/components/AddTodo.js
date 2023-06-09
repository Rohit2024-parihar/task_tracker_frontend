import React, { useState } from 'react'
import axios from 'axios'
import { MdAdd } from 'react-icons/md'

// import { BASE_URL } from '../config'

function AddTodo({ setTodos, todos,setFlag}) {
  console.log(todos,setTodos)
    const [newTodo, setNewTodo] = useState('');
    const BASE_URL='https://backend-todo-2.onrender.com/api/todo'

    const handleAddTodo = async () => {
        if (!newTodo) return;
    
        const res = await axios.post(`${BASE_URL}`,{ title: newTodo, active: true });
        setFlag(res.data)
        // setTodos([res.data, ...todos]);
        setNewTodo('');
    };
  return (
    <div className='mx-auto text-center content-center'>
        <input type="text" className="input input-success rounded-l-full w-full max-w-xs m-5" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
        <button   onClick={handleAddTodo} className="btn rounded-r-full text-base-300 font-weight bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80" >
        <MdAdd size="20px" className='mr-2'/>
        </button>
       
    </div>
  )
}

export default AddTodo