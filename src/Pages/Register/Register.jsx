import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {

    const { createUser, setUser, createGoogleUser } = useContext(AuthContext);

    const [ErrorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();



    const HandleGoogle = () => {

        createGoogleUser()
            .then(result => {
                console.log(result.user);
                setUser(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log('ERROR', error.message)
                setErrorMessage(error.message)
            })
    }


    const HandleRegister = (e) => {

        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, name, password);



        setErrorMessage('')


        if (password.length < 6) {

            setErrorMessage('password should be 6 characters or longer');
            return;

        }

        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).{8,}$/;

        if (!passwordRegex.test(password)) {
            setErrorMessage('Use Uppercase and alphanumeric number and special characters')
            return;

        }



        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
                toast.success("Congratulation ! Account created successfully", {
                    position: "top-center"
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch(Error => {
                console.log("ERROR", Error.message);
                setErrorMessage(Error.message);
            })

    }
    return (
        <div className=" gap-4  background">
            <div className=" flex justify-between gap-4  rounded-3xl text-center background-content">
                <div className="card  w-full max-w-lg shrink-0 shadow-2xl ">
                    <form onSubmit={HandleRegister} className="card-body">
                        <div className="form-control  ">
                            <label className="label ">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text" placeholder="Name" className="input input-bordered rounded-3xl text-black" required />
                        </div>
                        <div className="form-control  ">
                            <label className="label ">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <input type="text"
                                name='photo'
                                placeholder="Photo" className="input input-bordered rounded-3xl text-black" required />
                        </div>
                        <div className="form-control  ">
                            <label className="label ">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                name='email'
                                type="email" placeholder="email" className="input input-bordered rounded-3xl text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                name='password'
                                type="password" placeholder="password" className="input input-bordered rounded-3xl text-black" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary rounded-3xl">Register</button>
                            <button onClick={HandleGoogle} className='btn btn-ghost border border-white mt-3 rounded-3xl '><FcGoogle></FcGoogle> Log in with Google</button>

                        </div>
                    </form>

                    {
                        ErrorMessage && <p className='text-red-700 mb-3'>{ErrorMessage}</p>
                    }

                    <p>Don't have an  account? <Link className='text-red-700' to={'/login'}>Login</Link></p>
                </div>
                <div>
                    <div class="h1-container py-28 ">
                        <h1 class="animated-text text-white text-5xl font-bold ">Together, We Make a Difference – </h1>
                        <p>Help, Donate, Transform Lives</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Register;