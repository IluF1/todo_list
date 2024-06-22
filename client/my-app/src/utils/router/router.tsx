import { FC, ReactNode } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { App } from '../../App';
import { useAppSelector } from '../../components/store/hooks';
import { CreateTask } from '../../pages/create_task/create_task';
import Profile from '../../pages/profile/profile';
import Sign_in from '../../pages/sign_in/sign_in';
import Sign_up from '../../pages/sign_up/sign_up';

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const isAuth = useAppSelector(state => state.authSlice.isAuth);

	if (!isAuth) {
		return <Navigate to="/sign_in" />;
	}

	return <>{children}</>;
};

const Redirect: FC<ProtectedRouteProps> = ({ children }) => {
	const isAuth = useAppSelector(state => state.authSlice.isAuth);

	if (isAuth) {
		return <Navigate to="/" />;
	}

	return <>{children}</>;
};

export const Router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<App />
			</ProtectedRoute>
		),
	},
	{
		path: '/profile',
		element: (
			<ProtectedRoute>
				<Profile />
			</ProtectedRoute>
		),
	},
	{
		path: '/create_task',
		element: (
			<ProtectedRoute>
				<CreateTask />
			</ProtectedRoute>
		),
	},
	{
		path: '/sign_in',
		element: (
			<Redirect>
				<Sign_in />
			</Redirect>
		),
	},
	{
		path: '/sign_up',
		element: (
			<Redirect>
				<Sign_up />
			</Redirect>
		),
	},
]);
