import { ConstantActions } from '../../interfaces/constant.interface';
import { IDefaultState } from '../../interfaces/state.interface';
import { USER } from '../constants/contant';

const searchUser = (state: IDefaultState = {}, action: ConstantActions): IDefaultState => {
  switch (action.type) {
    case USER:
      return action.payload;
    default:
      return state;
  }
};

export default searchUser;
