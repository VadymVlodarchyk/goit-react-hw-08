import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selectors';

import LoginForm from '../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Увійти</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
