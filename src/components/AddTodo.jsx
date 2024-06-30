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
            className='outline-none rounded-md px-3 py-1 focus:ring-2 focus:ring-indigo-500 focus:border-none'
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