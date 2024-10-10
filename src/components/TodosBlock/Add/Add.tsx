import './Add.css'
import { useState } from 'react'
import useTaskAction from '../../../utils/useTaskAction'

// type SearchProps = {
// }

function Add() {
	const [taskTitle, setTaskTitle] = useState('')
	const { handleAdd } = useTaskAction()
	return (
		<div className='add_container'>
			<input
				className='add_input'
				placeholder='What needs to be done?'
				value={taskTitle}
				onChange={(e) => setTaskTitle(e.target.value)}
			/>
			{
				taskTitle &&
				<button className='add_button' onClick={() => {
					handleAdd({ description: taskTitle })
					setTaskTitle('')
				}}>
					Add
				</button>
			}
		</div>
	)
}

export default Add