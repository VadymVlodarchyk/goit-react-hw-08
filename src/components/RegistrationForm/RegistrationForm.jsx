import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';


const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введіть ім’я"),
  email: Yup.string().email("Введіть коректний email").required("Введіть email"),
  password: Yup.string().min(7, "Пароль має містити щонайменше 7 символів").required("Введіть пароль"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Ім'я
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>

        <label className={css.label}>
          Пароль
          <Field className={css.input} type="password" name="password" />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>

        <button className={css.button} type="submit">
          Зареєструватися
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
