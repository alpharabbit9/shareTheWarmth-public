import React, { useContext, useState } from 'react';
import './Login.css'
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const {UserLogIn,setUser , createGoogleUser} = useContext(AuthContext);
    const [ErrorMessage , setErrorMessage] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    const HandleGoogle = () =>{
        
        createGoogleUser()
        .then(result => {
            console.log(result.user);
            setUser(result.user)
            navigate(location?.state ? location.state : "/")
        })
        .catch(error =>{
            console.log('ERROR',error.message)
            setErrorMessage(error.message)
        })
    }



    const HandleLogin = (e) =>{
        e.preventDefault();

        

        
       
        
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password);

        setErrorMessage('')

        UserLogIn(email,password)
        .then(result => {
            console.log(result.user);
            setUser(result.user);
            navigate(location?.state ? location.state : "/")

        })
        .catch(error =>{
            console.log('ERROR' , error.message);
            setErrorMessage(error.message);
        })



        
    }
    return (
        <div className=" gap-4  background">
            <div className=" flex justify-between gap-4  rounded-3xl text-center background-content">

                <div className="card  w-full max-w-lg shrink-0 shadow-2xl text-white">
                    <form onSubmit={HandleLogin} className="card-body">
                        <div className="form-control  ">
                            <label className="label ">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email"  name='email' placeholder="email" className="input input-bordered rounded-3xl text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered rounded-3xl text-black" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-3xl">Login</button>
                            <button onClick={HandleGoogle} className='btn btn-ghost border border-white mt-3 rounded-3xl '><FcGoogle></FcGoogle> Log in with Google</button>
                        </div>
                    </form>

                    {
                        ErrorMessage && <p className='text-red-700 mb-3'>{'Wrong Password'}</p>
                    }

                    <p>Don't have an  account? <Link className='text-red-700' to={'/register'}>Register</Link></p>
                </div>
                <div>
                    <div class="h1-container py-20  ">
                        <h1 class="animated-text text-white text-5xl font-bold ">Together, We Make a Difference – </h1>
                        <p>Help, Donate, Transform Lives</p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Login;