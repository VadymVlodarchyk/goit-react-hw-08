import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => dispatch(logout());

  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>Welcome, {user.email}</p>
      <button className={css.logoutBtn} onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
