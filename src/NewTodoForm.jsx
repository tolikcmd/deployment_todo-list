import './index.css'
import { useState } from 'react';

function NewTodoForm({ onSubmit }) {

  const [newItem, setnewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return
    onSubmit(newItem)
    setnewItem("")
  }

  return (

    <form onSubmit={handleSubmit}>
      <div className='grid grid-flow-col2 bg bg-lime-300 px-56'>
        <label className='text-4xl font-bold py-7 text-center'>New item</label>
        <input className="p-3 rounded-2xl"
          type='text'
          id='item'
          value={newItem}
          onChange={e => setnewItem(e.target.value)} />
        <br />
        <button className='text-xl font-bold p-3 
         transition ease-in-out delay-150 bg-indigo-500
         hover:-translate-y-1 hover:scale-110 hover:bg-amber-400
         duration-300 border-2 rounded-2xl'>Add</button>
      </div>



    </form>
  )
}

export default NewTodoForm