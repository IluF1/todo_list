import { BiUserCircle } from 'react-icons/bi'
import { FaTasks } from 'react-icons/fa'
import { IoMdCreate } from 'react-icons/io'
import { useAppSelector } from '../../store/hooks'
import { HeaderElement } from '../../ui/headerElement/headerElement'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<div>
			{useAppSelector(
				state =>
					state.authSlice.isAuth &&
					location.pathname != '/sign_in' &&
					location.pathname != '/sign_up'
			) ? (
				<div className={styles.container}>
					<ul className={styles.list}>
						<li className={styles.elem_one}>
							<HeaderElement path='/' className={styles.elem_one_link}>
								<FaTasks className={styles.img_one} />
								Все задачи
							</HeaderElement>
						</li>
						<li>
							<HeaderElement path='/create_task' className={''}>
								<IoMdCreate className={styles.img_two} />
								Создать задачу
							</HeaderElement>
						</li>
						<li className={styles.elem_three}>
							<HeaderElement path='/profile' className={styles.elem_three_link}>
								<BiUserCircle className={styles.img_three} />
								Профиль
							</HeaderElement>
						</li>
					</ul>
				</div>
			) : (
				<div></div>
			)}
		</div>
	)
}
