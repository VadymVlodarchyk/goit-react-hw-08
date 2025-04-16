import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts" className={css.link}>Tasks</NavLink>}
    </nav>
  );
};

export default Navigation;
