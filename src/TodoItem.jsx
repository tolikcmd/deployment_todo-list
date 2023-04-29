import PropTypes from 'prop-types';

const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {

  return (
    <ul className="container mx-auto bg-gray-200  rounded-xl">
      <li className="grid grid-cols-2 text-ml font-bold">
        <label className="">
          <input className="m-4" type='checkbox' checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)}
          />
          {title}

        </label>
        <button className="text-base font-bold px-4
         transition ease-in-out delay-150 bg-red-400 
         hover:-translate-y-1 hover:scale-110 hover:bg-red-600
         duration-300 border-2 rounded-2xl ml-80"
          onClick={() => deleteTodo(id)}
        >Delete</button>
      </li>
    </ul>
  )
}

export default TodoItem