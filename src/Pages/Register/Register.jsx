import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaUser  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Register = () => {
    return (
        <div className="bg-center bg-cover h-[100vh] bg-no-repeat object-fill"
            style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("../../../public/images/login/login-4.jpg")' }}
        >
            <div className="hero min-h-screen">
                <div className="hero-content border border-primary rounded-xl flex-col lg:flex-row-reverse">

                    <div className="card  w-80 max-w-sm shadow-2xl">
                    <h1 className='font-bold text-center text-2xl text-black pt-2'>Sign Up</h1>
                        <form className="card-body">
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Name</span>
                                </label>
                                <div className='flex relative'>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full rounded-full " required />
                                    <FaUser className='absolute right-3 bottom-4 ' />
                                </div>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Email</span>
                                </label>
                                <div className='flex relative'>
                                    <input type="text" placeholder="Type here" className="input input-bordered w-full rounded-full z-2" required />
                                    <MdEmail className='absolute right-3 bottom-4 ' />
                                </div>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Password</span>
                                </label>
                                <div className='flex relative'>
                                    <input type="password" placeholder="password" className="input input-bordered w-full rounded-full" required />
                                    <FaLock className='absolute right-3 bottom-4 ' />
                                </div>
                                <label className="label">
                                    <p className='cursor-pointer'>Show Password</p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-full">Login</button>
                            </div>
                            <p className='text-center'>Already Register?<Link className='text-primary' to='/login'> Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;