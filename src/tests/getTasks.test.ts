import { getTasks } from '../utils/getTasks'

beforeAll(() => {
	localStorage.setItem('tasks', JSON.stringify([
		{
			id: '1',
			description: 'test',
			status: 'active'
		}
	]))
})

it('get all Tasks', () => {
	const tasks = getTasks()
	expect(tasks).toEqual([
		{
			id: '1',
			description: 'test',
			status: 'active'
		}
	])
})