import Nullstack from 'nullstack';
import TodoList from './TodoList';
import './Application.scss';
import TodoCounter from './TodoCounter';

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  render() {
    return (
      <main>
        <TodoList />
        <TodoCounter />
      </main>
    )
  }

}

export default Application;