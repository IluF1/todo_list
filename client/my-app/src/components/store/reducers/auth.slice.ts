import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  email: string
  password: string
}

interface IAuth {
  isAuth: boolean
  error: string
}

const initialState: IAuth = {
  isAuth: JSON.parse(localStorage.getItem('auth') || 'false'),
  error: '',
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state, action: PayloadAction<IUser>) => {
      if (
        action.payload.email === 'test@test' &&
        action.payload.password === '12345'
      ) {
        state.isAuth = true;
        localStorage.setItem('auth', JSON.stringify(true));
        state.error = '';
      } else {
        state.error = 'Введены не существующие данные';
        state.isAuth = false;
      }
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.setItem('auth', JSON.stringify(false));
    }
  },
})

export const { auth, logout } = AuthSlice.actions
export default AuthSlice.reducer
