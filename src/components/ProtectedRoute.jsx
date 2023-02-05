import { Navigate } from 'react-router-dom';
// Rura protegida

import { useAuth } from '../context/authContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <h1>loading</h1>;
  if (!user) return <Navigate to='/login' />;

  return <>{children}</>;
};

export default ProtectedRoute;
