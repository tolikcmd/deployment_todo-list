import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className='bg-red-100 mx-28'>
      {todos.length === 0 && 'No Todos'}
      {todos.map(todo => {
        return (
          <TodoItem {...todo} key={todo.id}
            toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          // <TodoItem id={todo.id} completed ={todo.completed}
          // title={todo.title} key={todo.key} />
        )
      })}
    </ul>
  )
}

export default TodoList