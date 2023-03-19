import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  console.log(user)
  return !user ? <Navigate to='/signIn' /> : children;
};

export default PrivateRoute;
