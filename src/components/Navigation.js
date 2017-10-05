import React from 'react';
import { NavLink, IndexLink } from 'react-router-dom';

export default () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Time App</li>
          <li><NavLink exact to='/' activeClassName="active">Timer</NavLink></li>
          <li><NavLink to='/countdown' activeClassName="active">Countdown</NavLink></li>
        </ul>
      </div>
      <div className="top-bar-right">
          <ul className="menu">
            <li>Created by Igor Orszanski</li>
          </ul>
      </div>
    </div>
  );
}
