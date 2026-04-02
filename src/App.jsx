import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-4xl font-extrabold uppercase text-white bg-blue-900 flex justify-center py-7'> To-Do</div>
      <div className='mt-10 flex flex-col items-center justify-center gap-2'>
      <label htmlFor='todo-input' className='block text-lg font-medium text-gray-700'>
        Add Your To-Do:
      </label>
      <div className='w-4/7'>
      <input
        type='text'
        id='todo-input'
        className='relative mt-1 block pl-4  w-full h-10 border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
      />
      <button className='absolute mt-4 px-6 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
        Add
      </button>
      </div>
     </div>
    </>
  )
}

export default App
