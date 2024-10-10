import Add from './Add/Add'
import { TasksContextProvider } from './TasksContext'
import Todos from './Todos/Todos'
import './todosBlock.css'
import TodosFooter from './TodosFooter/TodosFooter'

function TodosBlock() {

	return (
		<TasksContextProvider>
			<main className='todosBlock'>
				<Add />
				<Todos />
				<TodosFooter />
			</main>
		</TasksContextProvider>
	)
}

export default TodosBlock