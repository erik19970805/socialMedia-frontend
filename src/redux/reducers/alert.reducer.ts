import { ConstantActions } from '../../interfaces/constant.interface';
import { IDefaultState } from '../../interfaces/state.interface';
import { ALERT } from '../constants/contant';

const alert = (state: IDefaultState = {}, action: ConstantActions): IDefaultState => {
  switch (action.type) {
    case ALERT:
      return action.payload;
    default:
      return state;
  }
};

export default alert;
