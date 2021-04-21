import { ConstantActions } from '../../interfaces/constant.interface';
import { IDefaultState } from '../../interfaces/state.interface';
import { VALID } from '../constants/contant';

const valid = (state: IDefaultState = {}, action: ConstantActions): IDefaultState => {
  switch (action.type) {
    case VALID:
      return action.payload;
    default:
      return state;
  }
};

export default valid;
