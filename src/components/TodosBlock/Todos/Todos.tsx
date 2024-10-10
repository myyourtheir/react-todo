
// type TodosProps = {
// 	searchString: string
// }
import './Todos.css'
import { useTasks } from '../TasksContext'
import Task from './Task/Task'

function Todos() {
	const { tasks } = useTasks()

	return (
		<ul className='tasks_list'>
			{
				tasks.map((task) => (
					<Task key={task.id} task={task} />
				))
			}
		</ul>
	)
}

export default Todos