import { useTasks } from '../components/TodosBlock/TasksContext'
import { TaskT } from '../types/tasks'
import { addTaskStorage } from './addTaskStorage'
import setTasksStorage from './setTasksStorage'

function useTaskAction() {
	const { setTasks, tasks } = useTasks()

	const handleAdd = ({ description }: { description: string }) => {
		const newTask: TaskT = {
			id: Date.now().toString(),
			description: description,
			status: 'active'
		}
		setTasks([...tasks, newTask])
		addTaskStorage({ newTask })
	}

	const handleEdit = ({ editedTask }: { editedTask: TaskT }) => {
		const editedTasks = tasks.map((t) => {
			if (t.id === editedTask.id) {
				return editedTask
			}
			return t
		})
		setTasks(editedTasks)
		setTasksStorage({ tasks: editedTasks })
	}
	const handleDeleteCompleted = () => {
		const editedTasks = tasks.filter(task => task.status !== 'completed')
		setTasks(editedTasks)
		setTasksStorage({ tasks: editedTasks })
	}

	return {
		handleAdd, handleEdit, handleDeleteCompleted
	}
}

export default useTaskAction