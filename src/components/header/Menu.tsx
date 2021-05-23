import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ConstantActions } from '../../interfaces/constant.interface';
import { IState } from '../../interfaces/state.interface';
import { signout } from '../../redux/actions/auth.action';
import Avatar from '../Avatar';

const Menu = (): JSX.Element => {
  const navLinks = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Menssage', icon: 'near_me', path: '/message' },
    { label: 'Discover', icon: 'explore', path: '/discover' },
    { label: 'Notify', icon: 'favorite', path: '/notify' },
  ];

  const { auth, theme } = useSelector<IState, IState>((state) => state);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isActive = (pn: string): string | undefined => {
    if (pn === pathname) return 'active';
    return undefined;
  };
  return (
    <div className="menu">
      <ul className="navbar-nav flex-row">
        {navLinks.map((link, index) => (
          <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
            <Link className="nav-link" to={link.path}>
              <span className="material-icons">{link.icon}</span>
            </Link>
          </li>
        ))}

        <li className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Avatar src={auth.user.avatar} size="medium-avatar" />
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>
              Perfil
            </Link>
            <label
              htmlFor="theme"
              className="dropdown-item"
              onClick={() => dispatch<ConstantActions>({ type: 'THEME', payload: !theme })}
            >
              {theme ? 'Modo Oscuro' : 'Modo Claro'}
            </label>
            <hr className="dropdown-divider" />
            <Link className="dropdown-item" to="/" onClick={() => dispatch(signout())}>
              Cerrar sesión
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
