import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAppDispatch, useAppSelector } from '../../components/store/hooks'
import { auth } from '../../components/store/reducers/auth.slice'
import { Button } from '../../components/ui/button/button'
import { Input } from '../../components/ui/input/input'
import styles from './sign_in.module.scss'

export default function Sign_in() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [success, setSuccess] = useState(false)
	const dispatch = useAppDispatch()
	const error = useAppSelector(state => state.authSlice.error)

	useEffect(() => {
		if (error) {
			toast.warn(error)
		}
	}, [error])

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		dispatch(auth({ email, password }))
	}

	return (
		<div className={styles.container}>
			<ToastContainer
				position='top-center'
				theme='dark'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			{success ? toast.success('Вы успешно вошли в аккаунт') : null}
			<form onSubmit={handleSubmit} className={styles.form}>
				<h1 className={styles.text}>Войдите в ваш аккаунт</h1>
				<div className={styles.input_one}>
					<Input
						placeholder='Введите ваш email...'
						value={email}
						onChange={handleEmailChange}
						style='default'
					/>
				</div>
				<div className={styles.input_two}>
					<Input
						placeholder='Введите пароль...'
						value={password}
						onChange={handlePasswordChange}
						style='default'
					/>
				</div>
				<a href='/'>
					<Button style='default' center >
						Войти
					</Button>
				</a>
			</form>
		</div>
	)
}
