
import { Link } from 'react-router-dom';

const Header = () => {
    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allbook'>All Book</Link></li>
        <li><Link to='/addbook'>Add Book</Link></li>
    </>

    return (
        <div className='bg-primary shadow-xl drop-shadow-xl'>
            <div className="navbar z-10 text-white max-w-screen-lg mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="text-xl font-bold cursor-pointer">BookFlow</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-md">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='login'>Login</Link>/
                    <Link to='register'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;