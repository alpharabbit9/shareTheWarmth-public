import React from 'react';
import './Login.css'
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=" gap-4  background">
            <div className=" flex justify-between gap-4  rounded-3xl text-center background-content">

                <div className="card  w-full max-w-lg shrink-0 shadow-2xl text-white">
                    <form className="card-body">
                        <div className="form-control  ">
                            <label className="label ">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered rounded-3xl" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-3xl">Login</button>
                            <button className='btn btn-ghost border border-white mt-3 rounded-3xl '><FcGoogle></FcGoogle> Log in with Google</button>
                        </div>
                    </form>

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