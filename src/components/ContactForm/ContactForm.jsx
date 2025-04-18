import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations'; // пізніше перейменуємо на addTask, якщо треба
import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedNumber = number.trim();
    if (!trimmedName || !trimmedNumber) return;

    const newContact = {
      name: trimmedName,
      number: trimmedNumber,
    };

    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        className={css.input}
        placeholder="Ім’я"
      />
      <input
        type="tel"
        value={number}
        onChange={e => setNumber(e.target.value)}
        className={css.input}
        placeholder="Номер телефону"
      />
      <button type="submit" className={css.button}>
        Додати контакт
      </button>
    </form>
  );
};

export default ContactForm;
