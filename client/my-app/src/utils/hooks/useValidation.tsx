import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../components/store/hooks';
import { auth } from '../../components/store/reducers/auth.slice';

export const useValidation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailError, setIsEmailError] = useState('');
  const [isPasswordError, setIsPasswordError] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [dataError, setDataError] = useState('');
  const dispatch = useAppDispatch();
  const error = useAppSelector(state => state.authSlice.error);

  useEffect(() => {
    if (isEmailError || isPasswordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
    if (error) {
      setDataError(error);

    } else {
      setDataError('');
    }
  }, [error, isEmailError, isPasswordError]);

  const blurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length <= 0) {
      setIsPasswordError('Пароль не может быть пустым');
    } else {
      setIsPasswordError('');
    }
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setIsEmailError('Некорректный email');
    } else if (e.target.value.length <= 0) {
      setIsEmailError('Email не может быть пустым');
    } else {
      setIsEmailError('');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setEmailDirty(true);
    setPasswordDirty(true);
    dispatch(auth({ email, password }));
  };

  return {
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
    blurHandler,
    passwordDirty,
    isPasswordError,
    isEmailError,
    formValid,
    emailDirty,
    email,
    password,
    dataError
  };
};
