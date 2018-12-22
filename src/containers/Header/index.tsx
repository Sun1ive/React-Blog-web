import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

export const Header: React.FunctionComponent<{}> = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/signin">SignIn</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
