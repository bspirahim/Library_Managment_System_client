import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className=''>
           <div className="drawer lg:drawer-open bg-[#E1F2FF]">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  border-l-8 border-t-8  border-white ">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side bg-primary border-t-8 border-white">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu w-64 h-full border-r-2">
                        <li className='text-center '><Link to='/dashboard' className="text-lg mb-2 bg-success rounded-none rounded-r-full">Dashboard</Link></li>
                         
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;