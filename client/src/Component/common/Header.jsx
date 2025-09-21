import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiBell, FiGrid } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [careerOpen, setCareerOpen] = useState(false);
    const dropdownRef = useRef(null);

    const [dashboardOption, setDashboardOption] = useState(false)
    const dashboardRef = useRef(null)

    // Close dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setCareerOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dashboardRef.current && !dashboardRef.current.contains(e.target)) {
                setDashboardOption(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-indigo-600">
                        SangJog
                    </Link>

                    {/* Navbar */}
                    <nav className="flex items-center xl:gap-6 gap-2">
                        {/* <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link> */}

                        <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>

                        <NavLink
                            to="/directory"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                                }`
                            }
                        >
                            Directory
                        </NavLink>

                        <NavLink
                            to="/events"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                                }`
                            }
                        >
                            Events
                        </NavLink>

                        {/* Career Dropdown (Click-based, no flicker) */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setCareerOpen((prev) => !prev)}
                                className="text-gray-700 hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
                            >
                                Career <span className={`${careerOpen ? "rotate-x-180" : "rotate-0"} transition-transform duration-300`}>▾</span>
                            </button>
                            {careerOpen && (
                                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md z-50">

                                    <Link onClick={() => setCareerOpen(false)}
                                        to="/jobs"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                                    >
                                        Jobs
                                    </Link>
                                    <Link onClick={() => setCareerOpen(false)}
                                        to="/mentorship"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                                    >
                                        Mentorship
                                    </Link>
                                </div>
                            )}
                        </div>

                        <NavLink
                            to="/donations"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                                }`
                            }
                        >
                            Donations
                        </NavLink>

                        <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                                }`
                            }
                        >
                            Shop
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `px-2.5 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive
                                    ? "bg-indigo-100 text-indigo-700 font-semibold"
                                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                                }`
                            }
                        >
                            Contact
                        </NavLink>



                        {/* Dashboard Icon */}
                        {/* <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 text-xl">
                            <FiGrid />
                        </Link> */}

                        {/* Dashboard Dropdown */}
                        <div className="relative" ref={dashboardRef}>
                            <button
                                onClick={() => setDashboardOption((prev) => !prev)}
                                className="text-gray-700 hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
                            >
                                <FiGrid /> <span className={`${careerOpen ? "rotate-x-180" : "rotate-0"} transition-transform duration-300`}>▾</span>
                            </button>
                            {dashboardOption && (
                                <div className="absolute right-0  mt-2 w-40 bg-white shadow-md rounded-md z-50">
                                    <Link onClick={() => setDashboardOption(false)}
                                        to="/core-member"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                                    >
                                        Core Member
                                    </Link>

                                    <Link onClick={() => setDashboardOption(false)}
                                        to="/moderator"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                                    >
                                        Moderator
                                    </Link>

                                    <Link onClick={() => setDashboardOption(false)}
                                        to="/head-authority"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                                    >
                                        Head Authority
                                    </Link>

                                    <Link onClick={() => setDashboardOption(false)}
                                        to="/stake-holder"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                                    >
                                        Stake holder
                                    </Link>

                                </div>
                            )}
                        </div>

                        {/* Notification Bell */}
                        <button className="relative text-gray-700 hover:text-indigo-600 text-xl cursor-pointer hidden xl:block">
                            <FiBell />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                    </nav>
                </div>

            </div>
        </header>
    );
};

export default Header;
