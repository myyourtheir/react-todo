import { TaskT } from '../types/tasks'
import setTasksStorage from '../utils/setTasksStorage'

const tasks: TaskT[] = [
	{
		id: '1',
		description: 'test',
		status: 'active'
	},
	{
		id: '2',
		description: 'test2',
		status: 'active'
	}
]
describe('set tasks to localstorage', () => {
	it('set tasks to empty localstorage', () => {
		setTasksStorage({ tasks })
		expect(localStorage.getItem('tasks')).toEqual(JSON.stringify(tasks))
	})

	localStorage.setItem('tasks', JSON.stringify(tasks.map(task => task.id + 1)))
	it('set tasks to not empty localstorage', () => {
		setTasksStorage({ tasks })
		expect(localStorage.getItem('tasks')).toEqual(JSON.stringify(tasks))
	})
})

