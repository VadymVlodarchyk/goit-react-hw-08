import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.blockLabel}>
      <label>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
