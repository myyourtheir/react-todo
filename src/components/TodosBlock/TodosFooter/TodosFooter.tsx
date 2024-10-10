import { useState } from 'react'
import { getTasks } from '../../../utils/getTasks'
import { useTasks } from '../TasksContext'
import './TodosFooter.css'
import useTaskAction from '../../../utils/useTaskAction'
function TodosFooter() {
	const { tasks, setTasks } = useTasks()
	const [selectedMode, setSelectedMode] = useState<'all' | 'active' | 'complete'>('all')
	const { handleDeleteCompleted } = useTaskAction()
	return (
		<div className='footer_container'>
			<div>
				{tasks.filter(task => task.status !== 'completed').length} items left
			</div>
			<div>
				<button
					className={`${selectedMode === 'all' && 'button_selected'}`}
					onClick={() => {
						setSelectedMode('all')
						setTasks(getTasks())
					}}>
					All
				</button>
				<button
					className={`${selectedMode === 'active' && 'button_selected'}`}
					onClick={() => {
						setSelectedMode('active')
						setTasks(tasks => tasks.filter(task => task.status === 'active'))
					}}

				>
					Active
				</button>
				<button
					className={`${selectedMode === 'complete' && 'button_selected'}`}
					onClick={() => {
						setSelectedMode('complete')
						setTasks(tasks => tasks.filter(task => task.status === 'completed'))
					}
					}
				>
					Completed
				</button>
			</div>
			<div>
				<button
					onClick={() => handleDeleteCompleted()}
				>
					Clear completed
				</button>
			</div>
		</div>
	)
}

export default TodosFooter