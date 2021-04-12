import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PagesRender from './PagesRender';

import './App.scss';

const App = (): JSX.Element => (
  <Router>
    <input type="checkbox" id="theme" />
    <div className="App">
      <div className="main">
        <Route exact path="/:page" component={PagesRender} />
        <Route exact path="/:page/:id" component={PagesRender} />
      </div>
    </div>
  </Router>
);

export default App;
