import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPass = () => {

    const { resetPass } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleForgot = (e) => {

        e.preventDefault();

        const email = e.target.email.value ;

        resetPass(email)
        .then(result =>{
            toast.success("Congratulation ! Account created successfully", {
                position: "top-center"
            })
            
        })
        .catch(error =>{
            console.log(error.message)
        })

    }
    return (
        <div className=" gap-4  background">
            <div className=" flex justify-between gap-4  rounded-3xl text-center background-content">

                <div className="card  w-full max-w-lg shrink-0 shadow-2xl text-white">

                    <h1 className="text-5xl font-bold text-center mb-5">
                        Reset Password
                    </h1>

                    <div class="card  w-full max-w-lg shrink-0 ">
                        <form onSubmit={handleForgot} class="card-body">

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' class="input input-bordered text-black" required />

                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Reset Password</button>
                            </div>
                        </form>
                    </div>



                </div>

            </div>

        </div>
    );
};

export default ForgotPass;