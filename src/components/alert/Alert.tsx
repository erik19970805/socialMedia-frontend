import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../interfaces/state.interface';
import Loading from './Loading';
import Toast from './Toast';

const Alert = (): JSX.Element => {
  const { alert }: IState = useSelector<IState, IState>((state) => state);
  return (
    <div>
      {alert.loading && <Loading />}
      {alert.success && <Toast title="Exitoso" message={alert.success} bgColor="bg-success" />}
      {alert.error && <Toast title="Error" message={alert.error} bgColor="bg-danger" />}
    </div>
  );
};

export default Alert;
