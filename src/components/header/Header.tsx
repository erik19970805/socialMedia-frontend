import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';

const Header = (): JSX.Element => (
  <div className="header bg-light">
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">
          <h1 className="navbar-brand text-uppercase p-0 m-0">Red Social</h1>
        </Link>
        <Search />
        <Menu />
      </div>
    </nav>
  </div>
);

export default Header;
