import { TaskT } from '../types/tasks'

function setTasksStorage({ tasks }: { tasks: TaskT[] }) {
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

export default setTasksStorage