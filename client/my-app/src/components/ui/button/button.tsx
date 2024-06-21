import { FC, MouseEventHandler } from 'react'
import './button.scss'

type buttonStyles = 'default'

interface IButtonProps {
	big?: boolean
	style: buttonStyles
	children: string
	center?: boolean
	onClick?: MouseEventHandler
	disabled?: boolean
}

export const Button: FC<IButtonProps> = ({
	children,
	disabled,
	onClick,
	center,
	style,
	big,
	...props
}) => {
	const rootClasses = ['my-button']

	if (center) {
		rootClasses.push('center-button')
	}

	if (style === 'default') {
		rootClasses.push('default-button')
	}

	if (big) {
		rootClasses.push('big-button')
	}

	return (
		<button
			type='submit'
			disabled={disabled}
			{...props}
			onClick={onClick}
			className={rootClasses.join(' ')}
		>
			{children}
		</button>
	)
}
