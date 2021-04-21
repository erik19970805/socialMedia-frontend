import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IAuthSignin } from '../interfaces/auth.interface';
import { signin } from '../redux/actions/auth.action';

const Signin = (): JSX.Element => {
  const [userData, setUserData] = useState<IAuthSignin>({ email: '', password: '' });
  const [typePassword, setTypePassword] = useState<boolean>(false);
  const { email, password } = userData;

  const dispatch = useDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signin(userData));
  };

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Red Social</h3>
        <div className="mb-3">
          <label htmlFor="emailLabel" className="form-label">
            Correo Electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="emailLabel"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordLabel">Contraseña</label>
          <div className="pass">
            <input
              type={typePassword ? 'text' : 'password'}
              className="form-control"
              id="passwordLabel"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
            <small onClick={() => setTypePassword(!typePassword)}>
              {typePassword ? 'ocultar' : 'ver'}
            </small>
          </div>
        </div>
        <button type="submit" className="btn btn-dark w-100" disabled={!(email && password)}>
          Iniciar Sesión
        </button>
        <p className="my-2">
          ¿Aun no no tiene una cuenta?
          <Link to="/signup" style={{ color: 'crimson', marginLeft: '0.5rem' }}>
            Registrarse Ahora
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
