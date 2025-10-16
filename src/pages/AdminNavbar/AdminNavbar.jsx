import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(result => { console.log(result) })
            .catch(error => console.log(error))
    }

    return (
        <div className="mt-20 fixed top-0 flex w-full ">
            <div className="navbar bg-base-300 flex justify-around">
                <button className="btn btn-ghost text-xl">Admin Panel</button>
                {
                    user &&
                    <button className=''><Link to="/addProduct">Add Product</Link></button>

                }
                {
                    user &&
                    <button><Link to="/showProductsAdmin">Show Product</Link></button>
                }

                <div className="navbar-end">
                    {user ?
                        <button onClick={handleLogOut} className='btn btn-primary text-black'>Log Out</button>
                        :
                        <Link to="/login" className='btn btn-info'>Login</Link>}
                </div>
            </div>


        </div>
    );
};

export default AdminNavbar;