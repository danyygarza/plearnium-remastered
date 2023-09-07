import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../../contexts/AuthContext'


import './Login.scss'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setError("");
        try {
            await signIn(email, password)
            navigate('/home')
        }catch(e){
            setError(e.message);
            console.log(e.message);
        }
    };

  return (
    <div className='content'>
        <h1 className='head-text'>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className='app__login-form app__flex'>
            <div className='app__flex'>
                <input onChange={(e) => setEmail(e.target.value)} className='p-text' type='email' placeholder='Correo Electrónico' />
            </div>
            <div className='app__flex'>
                <input onChange={(e) => setPassword(e.target.value)} className='p-text' type='password' placeholder='Contraseña' />
            </div>
            <button className='app__login-button p-text'>Iniciar Sesión</button>
            <p className='app__login_p-text'>Aún no tienes una cuenta? {'  '}
            <Link to='/signup' className='app__login_p-text' >Crear Cuenta</Link> </p>
        </form> 
    </div>
  );
};

export default Login