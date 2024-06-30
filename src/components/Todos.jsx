import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { removeTodo } from '../features/todos/todoSlice';
import { FaTrashAlt } from "react-icons/fa";

function Todos() {

    const todos = useSelector((state)=> state.todos)
    const dispatch = useDispatch();

  return (
    <>
     <div className='text-white mt-3 justify-center'>Todos</div>
     <ul className='list-none'>
        {todos.map((todo) => (
            <li
                className='mt-4 flex justify-center items-center bg-zinc-400 px-4 py-2 hover:bg-sky-700'
                key={todo.id}>
                 <div className='text-white'>{todo.text}</div>
                    <button
                    onClick={()=>dispatch(removeTodo(todo.id))}
                    className='ml-auto flex-shrink-0'>
                  <FaTrashAlt />
                    </button>
            </li>
        ))}
     </ul>
    </>
 )
}

export default Todos