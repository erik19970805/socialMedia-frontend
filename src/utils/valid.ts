import { IAuthSignup } from '../interfaces/auth.interface';

const validateEmail = (email: string): boolean => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// eslint-disable-next-line import/prefer-default-export
export const valid = (
  userData: IAuthSignup
): { errorMessage: IAuthSignup; errorLength: number } => {
  const error: IAuthSignup = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    cfPassword: '',
    gender: '',
  };
  const { fullname, username, email, password, cfPassword } = userData;

  if (!fullname) {
    error.fullname = 'Por favor, ponga el nombre completo';
  } else if (fullname && fullname?.length > 50) {
    error.fullname = 'El nombre completo debe ser manor a 50 caracteres';
  }

  if (!username) {
    error.username = 'Por favor, ponga el nombre de usuario';
  } else if (username && username?.replace(/ /g, '').length > 25) {
    error.username = 'El nombre de usuario debe ser manor a 25 caracteres';
  }

  if (!email) {
    error.email = 'Por favor, ponga el correo electrónico';
  } else if (email && !validateEmail(email)) {
    error.email = 'El formato del correo electrónico es incorrecto';
  }

  if (!password) {
    error.password = 'Por favor, ponga la contraseña';
  } else if (password && password.length < 6) {
    error.password = 'La contraseña debe tener almenos 6 caracteres';
  }

  if (password !== cfPassword) {
    error.cfPassword = 'La confirmacion de la contraseña no coincide con la contraseña';
  }

  return { errorMessage: error, errorLength: Object.keys(error).length };
};
