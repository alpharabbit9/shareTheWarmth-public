import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const {updateUserProfile} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleUpdate= (e) =>{
        e.preventDefault();

        const name = e.target.name.value ;
        const photo = e.target.photo.value ;

        updateUserProfile({displayName : name , photoURL : photo})
                .then(() =>{
                    navigate('/dashboard');
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
                        Update Profile
                    </h1>

                    <div class="card  w-full max-w-lg shrink-0 ">
                        <form onSubmit={handleUpdate} class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' class="input input-bordered text-black " required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text text-white">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photo' class="input input-bordered text-black" required />
                                
                            </div>
                            <div class="form-control mt-6">
                                <button  class="btn btn-primary">Update Profile</button>
                            </div>
                        </form>
                    </div>



                </div>

            </div>

        </div>
    );
};

export default UpdateProfile;