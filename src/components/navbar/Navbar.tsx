import React, { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

import { useSelector } from "react-redux";

const Navbar: React.FC = (): ReactElement => {
    // get user from localStorage 
    const user: any = JSON.parse(localStorage.getItem('users') || 'null');


    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        console.log("before clearing")
        localStorage.clear();
        console.log("after clearing");
        
        navigate("/login");
    };

    // CartItems
    const cartItems = useSelector((state: any) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user && <li>
                <Link to={'/signup'}>Signup</Link>
            </li>}

            {/* Login */}
            {!user && <li>
                <Link to={'/login'}>Login</Link>
            </li>}

            {/* User */}
            {user?.role === "user" && <li className="font-bold uppercase text-">
                <Link to={'/user-dashboard'}>{user.name}</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* Logout */}
            {user && <li className="cursor-pointer" onClick={logout}>
                Logout
            </li>}

            {/* Cart */}
            <li>
                {
                    
                    <Link to={'/cart'}>
                    {
                     user?(`Cart(${cartItems.length})`):("Cart")
                    }
                 </Link>
                }
                
            </li>
        </ul>
    );

    return (
        <nav className="bg-blue-600 border shadow p-4 sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <div className="flex gap-2 relative">
                            <div >
                               
                            </div>
                            <h2 className="font-bold text-white text-4xl text-center">Mantra</h2>
                        </div>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
