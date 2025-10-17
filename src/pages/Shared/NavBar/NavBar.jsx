import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { MdOutlinePhoneCallback } from "react-icons/md";

const NavBar = () => {

    const navOption = <>
        <li><Link to="/">Home</Link></li>
        <li className="">
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
        <>
            <div className="navbar fixed top-0 left-0 bg-white z-10  lg:py-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOption}
                        </ul>
                    </div>
                    <Link to="/"><a className="btn btn-ghost text-l"><img src={logo} alt="Digital Square " className="w-2/3 " /></a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg">
                        {navOption}
                    </ul>
                </div>

                <div className="navbar-end">
                    {/* <div className="me-8">
                        <label className="input input-bordered flex items-center gap-1">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-3 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div> */}
                    <div >
                        <p className="flex "><a className="pr-3 mt-1 text-lg text-orange-300"><MdOutlinePhoneCallback /> </a>  <span className="text-orange-800">+8801332811580</span> </p>
                    </div>

                </div>
            </div>

        </>
    );
};

export default NavBar;