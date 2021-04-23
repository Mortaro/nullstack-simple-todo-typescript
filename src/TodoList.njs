import Nullstack from 'nullstack';
import TodoForm from './TodoForm';

class TodoList extends Nullstack {

  prepare(context) {
    context.todos = []
  }

  renderTodo({ todo }) {
    return (
      <li>
        <label>
          <input type="checkbox" bind={todo.complete} /> 
          {todo.description}
        </label>
      </li>
    )
  }
  
  render({ todos }) {
    return (
      <div>
        <TodoForm />
        <ul> 
          {todos.map((todo) => <Todo todo={todo} />)}
        </ul>
      </div>
    )
  }

}

export default TodoList;