import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { IAuthSignup } from '../interfaces/auth.interface';
import { IState } from '../interfaces/state.interface';
import { signup } from '../redux/actions/auth.action';

const Signup = (): JSX.Element => {
  const [userData, setUserData] = useState<IAuthSignup>({
    fullname: '',
    username: '',
    email: '',
    password: '',
    cfPassword: '',
    gender: 'male',
  });
  const { fullname, username, email, password, cfPassword } = userData;
  const [typePassword, setTypePassword] = useState<boolean>(false);
  const [typeCfPassword, setTypeCfPassword] = useState<boolean>(false);

  const { auth, valid } = useSelector<IState, IState>((state) => state);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signup(userData));
  };

  useEffect(() => {
    if (auth.token) history.push('/');
  }, [auth.token, history]);

  return (
    <div className="auth_page">
      <form onSubmit={handleSubmit}>
        <h3 className="text-uppercase text-center mb-4">Red Social</h3>
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Nombre Completo
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={handleChangeInput}
            style={{ background: `${valid.fullname ? '#fd2d6a14' : ''}` }}
          />
          <small className="form-text text-danger">{valid.fullname ? valid.fullname : ''}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Nombre de Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username?.toLocaleLowerCase().replace(/ /g, '')}
            onChange={handleChangeInput}
            style={{ background: `${valid.username ? '#fd2d6a14' : ''}` }}
          />
          <small className="form-text text-danger">{valid.username ? valid.username : ''}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
            style={{ background: `${valid.email ? '#fd2d6a14' : ''}` }}
          />
          <small className="form-text text-danger">{valid.email ? valid.email : ''}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <div className="pass">
            <input
              type={typePassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
              style={{ background: `${valid.password ? '#fd2d6a14' : ''}` }}
            />
            <small onClick={() => setTypePassword(!typePassword)}>
              {typePassword ? 'ocultar' : 'ver'}
            </small>
          </div>
          <small className="form-text text-danger">{valid.password ? valid.password : ''}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="cfPassword">Confirmar Contraseña</label>
          <div className="pass">
            <input
              type={typeCfPassword ? 'text' : 'password'}
              className="form-control"
              id="cfPassword"
              name="cfPassword"
              value={cfPassword}
              onChange={handleChangeInput}
              style={{ background: `${valid.cfPassword ? '#fd2d6a14' : ''}` }}
            />
            <small onClick={() => setTypeCfPassword(!typeCfPassword)}>
              {typeCfPassword ? 'ocultar' : 'ver'}
            </small>
          </div>
          <small className="form-text text-danger">
            {valid.cfPassword ? valid.cfPassword : ''}
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="genero">Genero</label>
          <div className="d-flex justify-content-between mt-1">
            <label htmlFor="male">
              Hombre:
              <input
                type="radio"
                id="male"
                className="ms-1"
                name="gender"
                value="male"
                defaultChecked
                onChange={handleChangeInput}
              />
            </label>
            <label htmlFor="female">
              Mujer:
              <input
                type="radio"
                id="female"
                className="ms-1"
                name="gender"
                value="female"
                onChange={handleChangeInput}
              />
            </label>
            <label htmlFor="other">
              Otros:
              <input
                type="radio"
                id="other"
                className="ms-1"
                name="gender"
                value="other"
                onChange={handleChangeInput}
              />
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-dark w-100">
          Registrarse
        </button>
        <p className="my-2">
          ¿Ya tienes una cuenta?
          <Link to="/" style={{ color: 'crimson', marginLeft: '0.5rem' }}>
            Inicia sesión ahora
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
