import { fireEvent, render, screen } from '@testing-library/react'
import TodosBlock from '../components/TodosBlock/TodosBlock'


describe('add action', () => {
	it('add task', async () => {
		render(<TodosBlock />)
		const addInput = await screen.findByPlaceholderText('What needs to be done?')
		fireEvent.change(addInput, { target: { value: 'test' } })
		const addTask = await screen.findByText('Add')
		fireEvent.click(addTask)
		expect(await screen.findByText('test')).toBeInTheDocument()
		expect(addInput).toHaveValue('')

	})
	it('set completed task', async () => {
		localStorage.setItem('tasks', JSON.stringify([
			{
				id: '1',
				description: 'test',
				status: 'active'
			}
		]
		))
		render(<TodosBlock />)
		const task = await screen.findByText('test')
		fireEvent.click(task)
		expect(task).toHaveClass('task_complete')
	})

	it('delete completed task', async () => {
		localStorage.setItem('tasks', JSON.stringify([
			{
				id: '1',
				description: 'test',
				status: 'completed'
			}
		]
		))
		render(<TodosBlock />)
		const task = await screen.findByText('test')
		const deleteTask = await screen.findByText('Clear completed')
		fireEvent.click(deleteTask)
		expect(task).not.toBeInTheDocument()
	})

})