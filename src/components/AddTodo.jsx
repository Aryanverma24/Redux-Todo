import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todos/todoSlice';

function AddTodo() {
    const [input,setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }

  return (
    <form 
    onSubmit={addTodoHandler}
    className='space-x-3' >
        <input  
            type="text"
            placeholder='add todo...'
            className='bg-gray-300 border border-gray-100 rounded-lg px-2 py-0.5 focus:outline-none focus:ring-1 focus:ring-indigo-700 focus:border-indigo-50 
             w-1/2'
            value={input} 
            onChange={(e)=>setInput(e.target.value)}/>
        <button
            type='submit'
            className='bg-indigo-300 rounded-lg px-3 py-1 hover:bg-indigo-500 hover:text-white focus:outline-none focus:ring-2 focus:border-sky-500 sm:mx-auto'
            >Add Todo
        </button>
    </form>
  )
}

export default AddTodo