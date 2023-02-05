
import { useAuth } from '../context/authContext';

const Home = () => {
  const { user, logout, loading } = useAuth();
  //cerrar sesion
  const handleLogout = async () => {
    await logout();
  };

  //poner un cargando para el error del null en el user

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1> Welcome {user.email} </h1>;
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
