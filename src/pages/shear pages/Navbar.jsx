import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { CiBookmarkRemove } from 'react-icons/Ci';
import useCards from "../../Hooks/useCards";






const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const [card] = useCards()

    const handelLogout = () => {
        logOut()
            .then(result => console.log(result))
            .catch(err => console.log(err.message))
    }
    const list = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/order/salad'}>Order Food</Link></li>
        {
            user ?
                <li onClick={handelLogout}><Link to={'/'}>LogOut</Link></li>
                :
                <li><Link to={'/login'}>Login</Link></li>
        }
        <li>
            <Link to={'/dashboard/card'}>
                <button className="btn btn-sm">
                    <CiBookmarkRemove />
                    <div className="badge badge-secondary">+{card.length}</div>
                </button>
            </Link>
        </li>

    </>
    return (
        <>
            <div className="navbar fixed max-w-[1200px] z-30 opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {list}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro-Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {list}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </>
    );
};

export default Navbar;