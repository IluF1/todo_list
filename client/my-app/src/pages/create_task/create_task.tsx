import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../components/store/hooks'
import { TodoSlice } from '../../components/store/reducers/todos.slice'
import { Button } from '../../components/ui/button/button'
import { Input } from '../../components/ui/input/input'
import styles from './create_task.module.scss'

export const CreateTask = () => {
	const [todoName, setTodoName] = useState('')
	const dispatch = useAppDispatch()

	const submit = (e: FormEvent) => {
		e.preventDefault()
		dispatch(
			TodoSlice.actions.addTodo({
				name: todoName,
				id: Date.now(),
				isSuccess: false,
			})
		)
		setTodoName('')
	}

	return (
		<div className={styles.container}>
			<form onSubmit={submit} className={styles.form}>
				<Input
					placeholder='Введите название задачи...'
					style='default'
					value={todoName}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setTodoName(e.target.value)
					}
				/>
				<div className={styles.button}>
					<Button style='default'>Добавить</Button>
				</div>
			</form>
		</div>
	)
}
