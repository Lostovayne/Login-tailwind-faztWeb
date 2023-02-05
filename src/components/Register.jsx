import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // Guardar los datos del formulario register
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  //mandar al usuario al home

  const navigate = useNavigate();

  //hook para los errores
  const [ error, setError  ] = useState() 
  
  
  
  //Traer contexto para registrar
  const { signup } = useAuth();

  //Capturar valores del formulario register

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  // Al hacer click en el formulario

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await signup(user.email, user.password);
      navigate('/');
    } catch (error) {
      setError(error.message)
    }
  };

  return (
   <div>
    
    {/* Mostrar el error  */}
    {error && <p>{error}</p>}
    
    
    
     <form onSubmit={handleSubmit}>
       <label htmlFor='email'>Email</label>
       <input
         type='email'
         placeholder='your@gmail.com'
         name='email'
         onChange={handleChange}
       />
    
       <label htmlFor='password'>Password</label>
       <input
         type='password'
         placeholder='*********'
         name='password'
         onChange={handleChange}
       />
    
       <button type='submit'>Register</button>
     </form>
   </div>
  );
};

export default Register;
