import { TaskT } from '../types/tasks'

type addTaskProps = {
	newTask: TaskT
}

export function addTaskStorage({ newTask }: addTaskProps) {

	const tasks: TaskT[] = JSON.parse(localStorage.getItem('tasks') || '[]')
	tasks.push(newTask)
	localStorage.setItem('tasks', JSON.stringify(tasks))
}
