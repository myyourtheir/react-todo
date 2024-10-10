import { TaskT } from '../types/tasks'

export function getTasks(): TaskT[] {
	return JSON.parse(localStorage.getItem('tasks') || '[]')
}
