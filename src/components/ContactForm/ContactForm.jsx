import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations'; // заміни назву action на addTask у майбутньому
import { useState } from 'react';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const newTask = {
      name: trimmedName,
    };

    dispatch(addContact(newTask));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        className={css.input}
        placeholder="New task"
      />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
};

export default ContactForm;
