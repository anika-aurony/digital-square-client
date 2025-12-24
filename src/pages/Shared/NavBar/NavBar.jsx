import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png"
import smslogo from "../../../assets/bulksmslogo.jpg"
import { MdOutlinePhoneCallback } from "react-icons/md";

const NavBar = () => {

    const location = useLocation();

    let currentLogo = logo;

    if (location.pathname === "/bulkSMS") {
        currentLogo = smslogo;
    }
    const navOption = <>
        <li><Link to="/">Home</Link></li>
        <li>
            <a><Link to="/products/productHome">Product</Link></a>
        </li>
        <li><a>Solution</a></li>
        <li><a><Link to='/bulkSMS'>Bulk SMS</Link></a></li>
        <li><a><Link to='/contact'>Contact Us</Link></a></li>
        <li>
            <a><Link to="/aboutus">About Us</Link></a>
        </li>
        
    </>

    return (
        
            <div className="navbar fixed top-0 left-0 bg-white z-10  lg:py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-orange-800 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow text-lg">
                            {navOption}
                        </ul>
                    </div>
                    <Link to="/"><a className="btn btn-ghost text-l"><img src={currentLogo} alt="Digital Square " className="w-2/3 " /></a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-gray-950 text-lg">
                        {navOption}
                    </ul>
                </div>

                <div className="navbar-end">
                    
                    <div >
                        <p className="flex "><a className="pr-3 mt-1 text-lg text-orange-600"><MdOutlinePhoneCallback /> </a>  <span className="text-orange-800 mr-3 ">+8801332811580</span> </p>
                    </div>

                </div>
            </div>

        
    );
};

export default NavBar;