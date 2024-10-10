import { createContext, useContext, useEffect, useState } from 'react'
import { TaskT } from '../../types/tasks'
import { getTasks } from '../../utils/getTasks'

type TasksContextProps = {
	tasks: TaskT[]
	setTasks: React.Dispatch<React.SetStateAction<TaskT[]>>
}

const TasksContext = createContext<TasksContextProps | null>(null)

function TasksContextProvider({ children }: { children: React.ReactNode }) {
	const [tasks, setTasks] = useState(getTasks())
	useEffect(() => {
		setTasks(getTasks())
	}, [])
	return (
		<TasksContext.Provider value={{
			tasks,
			setTasks
		}}
		>
			{children}
		</TasksContext.Provider>
	)
}

const useTasks = () => {
	const context = useContext(TasksContext) as TasksContextProps
	return context
}

export { TasksContextProvider, useTasks }