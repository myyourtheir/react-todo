import { TaskT } from '../../../../types/tasks'
import useTaskAction from '../../../../utils/useTaskAction'
import './Task.css'
import CustomCheckbox from '../../../CustomCheckbox/CustomCheckbox'
type TaskProps = {
	task: TaskT
}

function Task({ task }: TaskProps) {
	const { handleEdit } = useTaskAction()
	const condition = task.status === 'completed'
	return (
		<li className={`task`}>
			<CustomCheckbox
				checked={condition}
				onClick={(e) => {
					handleEdit({ editedTask: { ...task, status: task.status === 'active' ? 'completed' : 'active' } })
				}} />
			<span className={`task_description ${task.status === 'completed' ? 'task_complete' : ''}`}>
				{task.description}
			</span>
		</li>
	)
}

export default Task