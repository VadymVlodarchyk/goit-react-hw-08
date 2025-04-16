import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label className={css.label}>
      Пошук контактів:
      <input
        className={css.input}
        type="text"
        onChange={handleChange}
        placeholder="Введіть ім'я"
      />
    </label>
  );
};

export default Filter;
