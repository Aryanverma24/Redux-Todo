import '../src/app.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <div className='bg-gray-800 w-full h-screen max-h-screen flex justify-center'>
      <div className='py-12'>
          <AddTodo />  
          <Todos />    
      </div>
    </div>
  )
}

export default App
