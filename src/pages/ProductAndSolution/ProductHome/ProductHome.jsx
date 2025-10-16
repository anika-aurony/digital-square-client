// import React from 'react';

import { NavLink, Outlet } from "react-router-dom";

const ProductHome = () => {
    return (
        <div className="mt-20 flex">
            <div className="w-64 bg-orange-200 p-2">
                    <ul>
                        <li><NavLink to="/product/pon">PON Module</NavLink></li>
                    </ul>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ProductHome;