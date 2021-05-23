/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IProps } from '../interfaces/props.interfaces';

const PrivateRouter = (props: IProps): JSX.Element => {
  const firstLogin = localStorage.getItem('firstLogin');
  return firstLogin ? <Route {...props} /> : <Redirect to="/" />;
};

export default PrivateRouter;
