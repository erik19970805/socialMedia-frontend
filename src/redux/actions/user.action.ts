import { Dispatch } from 'redux';
import { ConstantActions } from '../../interfaces/constant.interface';
import api from '../api';

// eslint-disable-next-line import/prefer-default-export
export const searchUser = (search: string) => async (
  dispatch: Dispatch<ConstantActions>,
  getState: Function
): Promise<void> => {
  const { auth } = getState();
  const { data } = await api(dispatch, 'GET', `/user/search?username=${search}`, undefined, {
    Authorization: auth.token,
  });
  dispatch({ type: 'USER', payload: { searchUser: data.users } });
};
