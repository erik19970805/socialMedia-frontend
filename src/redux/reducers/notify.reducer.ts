import { constantActions } from '../../interfaces/constant.interface';
import { IDefaultState } from '../../interfaces/state.interface';
import { NOTIFY } from '../constants/contant';

const notify = (state: IDefaultState = {}, action: constantActions): IDefaultState => {
  switch (action.type) {
    case NOTIFY:
      return action.payload;
    default:
      return state;
  }
};

export default notify;
