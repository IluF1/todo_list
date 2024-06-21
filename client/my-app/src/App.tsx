import { useAppSelector } from './components/store/hooks'
import './assets/styles/App.scss'

export const App = () => {
	const selector = useAppSelector(state => state.todosSlice.todos)
	return (
		<div className='container'>
			<ul>
				{selector.map(todo => (
					<li key={todo.id} className='todo'>
						<p className='text'>{todo.name}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
