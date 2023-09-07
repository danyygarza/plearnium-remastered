import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext';
import './Signup.scss'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await createUser(email, password);
            navigate("/home");
        } catch (err){
            console.log(err);
            setError(err);
        }
    };

  return (
    <div className='content'>
        <h1 className='head-text'>Crear Cuenta</h1>
        <form onSubmit={handleSubmit} className='app__login-form app__flex'>
            <div className='app__flex'>
                <input onChange={(e) => setEmail(e.target.value)} className='p-text' type='email' placeholder='Correo Electrónico' />
            </div>
            <div className='app__flex'>
                <input onChange={(e) => setPassword(e.target.value)} className='p-text' type='password' placeholder='Contraseña' />
            </div>
            <button className='app__login-button p-text'>Crear Cuenta</button>
            <p className='app__login_p-text'>Ya tienes una cuenta? {'  '}
            <Link to='/' className='app__login_p-text' >Iniciar Sesión</Link> </p>
        </form> 
    </div>
  )
}

export default Signup