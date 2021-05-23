/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotFound from '../components/NotFound';
import { IState } from '../interfaces/state.interface';

const generatePage = (pageName: string) => {
  const component = () => require(`../pages/${pageName}`).default;
  try {
    return React.createElement(component());
  } catch (error) {
    return <NotFound />;
  }
};

const PagesRender = (): JSX.Element => {
  const { page, id } = useParams<{ page: string; id: string }>();
  const { auth } = useSelector<IState, IState>((state) => state);
  let pageName = '';
  if (auth.token) {
    pageName = id ? `${page}/[id]` : `${page}`;
    pageName = id ? pageName : pageName.charAt(0).toUpperCase() + pageName.slice(1);
  }
  return generatePage(pageName);
};

export default PagesRender;
