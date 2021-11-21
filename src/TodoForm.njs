import Nullstack from 'nullstack';

class TodoForm extends Nullstack {

  description = '';

  addTodo({ todos }) {
    todos.push({
      description: this.description,
      complete: false
    })
    this.description = '';
  }

  render() {
    return (
      <form onsubmit={this.addTodo}>
        <input bind={this.description} required autocomplete="off" />
        <button> Add todo </button>
      </form>
    )
  }

}

export default TodoForm;