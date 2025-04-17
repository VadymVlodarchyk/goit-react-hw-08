import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from '../redux/contacts/operations';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';

import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Tasks</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
