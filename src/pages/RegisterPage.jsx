import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Реєстрація</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
