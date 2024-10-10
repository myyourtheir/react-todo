import { TaskT } from '../types/tasks'
import { addTaskStorage } from '../utils/addTaskStorage'

it('new task is added to storage', () => {
	const newTask: TaskT = {
		id: new Date().toString(),
		description: 'test',
		status: 'active'
	}
	addTaskStorage({ newTask })
	expect(localStorage.getItem('tasks')).toEqual(JSON.stringify([newTask]))
})