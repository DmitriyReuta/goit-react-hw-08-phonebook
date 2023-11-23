import React from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';
import { getUser } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <div>
      <span>Hello, {name}</span>
      <Button variant="contained" size="small" onClick={onLogOut} type="button">
        Log Out
      </Button>
    </div>
  );
};