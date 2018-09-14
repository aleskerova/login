import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuItem.css';

const MenuItem = props => {
  const { title, children, ...rest } = props;
  return (
    <li className="menuLi">
      <NavLink {...rest} className="menuA" activeClassName="activeMenuA">
        {children}
        <span className="menuText">{title}</span>
      </NavLink>
    </li>
  );
};

export default MenuItem;
