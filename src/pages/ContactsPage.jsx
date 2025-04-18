import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchTasks } from '../redux/contacts/operations';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Contacts</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
