import { TaskT } from '../types/tasks'
import { addTaskStorage } from '../utils/addTaskStorage'


const newTask: TaskT = {
	id: new Date().toString(),
	description: 'test',
	status: 'active'
}
describe('add task to local storage', () => {
	it('to empty localStorage', () => {
		addTaskStorage({ newTask })
		expect(localStorage.getItem('tasks')).toEqual(JSON.stringify([newTask]))
	})

	const existingTasks = [newTask, { ...newTask, id: '2' }]
	it('to not empty localStorage', () => {
		const newTask: TaskT = {
			id: '2',
			description: 'test',
			status: 'active'
		}
		addTaskStorage({ newTask })
		expect(localStorage.getItem('tasks')).toEqual(JSON.stringify(existingTasks))
	})
}
)