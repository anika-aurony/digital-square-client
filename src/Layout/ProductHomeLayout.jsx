import { NavLink, Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";


const ProductHomeLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex flex-col md:flex-row mt-16 lg:mt-20  bg-white">
                {/* Mobile Top Bar */}
                <div className="md:hidden bg-orange-300 p-3 flex justify-between items-center shadow">
                    <h2 className="text-lg font-semibold text-gray-900">Products</h2>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-800">
                        {isOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Sidebar */}
                <div
                    className={`bg-orange-200 p-3 md:mt-20 md:w-60 transform md:transform-none transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          fixed md:fixed md:top-0 md:left-0 md:h-screen md:overflow-y-auto shadow-md z-50`} 
                >
                    <ul className="py-4 mt-10 md:mt-0 text-gray-950">
                        {[
                            { path: "/products/onu", label: "ONU" },
                            { path: "/products/splice", label: "Fusion Splicer" },
                            { path: "/products/cleaver", label: "Cleaver" },
                            { path: "/products/pon", label: "PON Module" },
                            { path: "/products/otdr", label: "OTDR" },
                            { path: "/products/sfp", label: "SFP Module" },                            
                            { path: "/products/patchcord", label: "Patch Cord" },                            
                        ].map((item) => (
                            <li key={item.path} className="mb-3 ml-3">
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `block px-2 py-1 rounded-md ${isActive ? "bg-orange-400 text-white font-semibold" : "hover:bg-orange-300"
                                        }`
                                    }
                                    onClick={() => setIsOpen(false)} // close on click mobile
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Overlay for mobile */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-40 md:hidden"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}

                {/* Main Content */}
                <div className="flex-1 p-4 mt-4 md:ml-60 md:mt-0 bg-white">
                    <Outlet />
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ProductHomeLayout;