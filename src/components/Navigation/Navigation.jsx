import React from 'react';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';
import { NavLink } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const isLogin = useSelector(isAuth);

  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      {isLogin && <NavLink to="/contacts">Contacts</NavLink>}
      {isLogin ? <UserMenu /> : <AuthNav />}
    </nav>
  );
};