import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogout = () => {
        logOut()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const navLinks = <>
        <li className="mr-6"><NavLink to={'/'}>Home</NavLink></li>
        <li className="mr-6"><NavLink to={'/about'}>About</NavLink></li>
        <li className="mr-6"><NavLink to={'/services'}>Services</NavLink></li>
        {
            user && <>
                <li className="mr-6"><NavLink to={'/profile'}>Profile</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to={'/'}><a className="btn btn-ghost normal-case text-3xl">Evento</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span className="mr-2">{user.displayName}</span>
                        <div className="rounded-full w-10'">
                            <img src={user.photo} alt="" />
                        </div>
                        <button onClick={handleLogout} className="btn normal-case">Log Out</button>
                    </>

                        :
                        <Link to={'/login'}><button className="btn normal-case">Login</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;