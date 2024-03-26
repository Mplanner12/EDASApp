// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Logout = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/auth/signin');
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
