import { ConstantActions } from '../../interfaces/constant.interface';
import { IDefaultState } from '../../interfaces/state.interface';
import { AUTH } from '../constants/contant';

const auth = (state: IDefaultState = {}, action: ConstantActions): IDefaultState => {
  switch (action.type) {
    case AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default auth;
