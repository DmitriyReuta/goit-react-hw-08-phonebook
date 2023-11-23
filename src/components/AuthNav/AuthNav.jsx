import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <p><NavLink to="/register"  activeStyle={{ color: 'black' }}>
        Register
      </NavLink> or <NavLink to="/login"  activeStyle={{ color: 'black' }}>
        LogIn
      </NavLink> </p>

    </div>
  );
};

