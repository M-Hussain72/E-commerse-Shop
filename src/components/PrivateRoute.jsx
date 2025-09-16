import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/AuthContext';

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const { isLogin } = useContext(AuthContext);

  if (isLogin) {
    return children;
  }

  return <Navigate to="/" />;
};
