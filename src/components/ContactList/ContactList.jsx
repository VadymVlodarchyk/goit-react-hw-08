import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../../redux/contacts/operations';
import { selectTasks } from '../../redux/contacts/selectors';
import css from './ContactList.module.css';
// 1
const ContactList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  return (
    <ul className={css.list}>
      {tasks.map(({ id, name }) => (
        <li key={id} className={css.item}>
          <span>{name}</span>
          <button
            onClick={() => dispatch(deleteTask(id))}
            className={css.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
