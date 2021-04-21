import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import PagesRender from './PagesRender';
import Signin from './pages/Signin';
import Alert from './components/alert/Alert';
import { IState } from './interfaces/state.interface';
import Home from './pages/Home';
import { refreshToken } from './redux/actions/auth.action';
import Header from './components/Header';

const App = (): JSX.Element => {
  const { auth } = useSelector<IState, IState>((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          {auth.token && <Header />}
          <Route exact path="/" component={auth.token ? Home : Signin} />
          <Route exact path="/:page" component={PagesRender} />
          <Route exact path="/:page/:id" component={PagesRender} />
        </div>
      </div>
    </Router>
  );
};

export default App;
