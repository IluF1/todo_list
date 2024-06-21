import { ChangeEvent } from 'react'
import { Button } from '../../components/ui/button/button'
import { Input } from '../../components/ui/input/input'
import { useValidation } from '../../utils/hooks/useValidation'
import styles from './sign_in.module.scss'

export default function Sign_in() {
	const {
		handleChangeEmail,
		handleChangePassword,
		handleSubmit,
		emailDirty,
		passwordDirty,
		isEmailError,
		isPasswordError,
		formValid,
		email,
		dataError,
		password,
		blurHandler,
	} = useValidation()
	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h1 className={styles.text}>Войдите в ваш аккаунт</h1>
				<div className={styles.input_one}>
					{isEmailError && emailDirty && (
						<div className={styles.error}>{isEmailError}</div>
					)}
					<Input
						placeholder='Введите ваш email...'
						style='default'
						name='email'
						value={email}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleChangeEmail(e)
						}
						onBlur={(e: ChangeEvent<HTMLInputElement>) => blurHandler(e)}
					/>
				</div>
				<div className={styles.input_two}>
					{isPasswordError && passwordDirty && (
						<div className={styles.error}>{isPasswordError}</div>
					)}
					<Input
						placeholder='Введите пароль...'
						style='default'
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							handleChangePassword(e)
						}
						name='password'
						value={password}
						onBlur={(e: ChangeEvent<HTMLInputElement>) => blurHandler(e)}
					/>
				</div>

				{<div className={styles.error} style={{marginTop: '20px'}}>{dataError}</div>}
				<Button style='default' center disabled={!formValid}>
					Войти
				</Button>
			</form>
		</div>
	)
}
