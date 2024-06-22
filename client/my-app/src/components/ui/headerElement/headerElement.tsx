import { FC } from 'react'

interface IHeaderElementProps {
	path: string
	children: any
	className: string
}

export const HeaderElement: FC<IHeaderElementProps> = ({
	path,
	children,
	className,
	...props
}) => {
	const default_color = '#333333 '
	const active_color = 'rgb(0, 217, 255)'
	return (
		<a
			href={path}
			{...props}
			style={{
				color: location.pathname == path ? active_color : default_color,
			}}
			className={className}
		>
			{children}
		</a>
	)
}
