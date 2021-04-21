import { ConstantActions } from '../../interfaces/constant.interface';
import { IDefaultState } from '../../interfaces/state.interface';
import { THEME } from '../constants/contant';

const theme = (state: IDefaultState = {}, action: ConstantActions): IDefaultState => {
  switch (action.type) {
    case THEME:
      return action.payload;
    default:
      return state;
  }
};

export default theme;
