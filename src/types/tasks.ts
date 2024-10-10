export type TaskT = {
	id: string
	description: string
	status: 'completed' | 'active'
}

export type Tasks = TaskT[]