import React, { useContext } from 'react';
import './Dashboard.css'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className='font-poppins bg-black'>

            <header className='back rounded-2xl md:h-96 text-center banner-text flex items-center justify-center  '>

                <h1 className='text-5xl font-bold'>Welcome {user?.displayName}</h1>

            </header>

            <section className='flex justify-center items-center  p-3'>
                <div className="card border border-white w-1/3 shadow-xl -mt-36 mb-8 rounded-3xl">
                    <figure>
                        <img className='object-contain w-full '
                            src={user?.photoURL}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-left">
                        <h2 className="card-title text-white font-bold text-3xl">Name : {user?.displayName}</h2>
                        <p className='text-white mb-3 text-3xl'>Email : {user?.email}</p>
                        <div className="card-actions justify-start">
                            <Link to  ={'/updateProfile'} className="btn btn-primary">Update Profile</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Dashboard;