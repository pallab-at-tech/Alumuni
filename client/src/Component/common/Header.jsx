import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiBell, FiGrid } from "react-icons/fi";

const Header = () => {
    const [careerOpen, setCareerOpen] = useState(false);
    const dropdownRef = useRef(null);

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

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-indigo-600">
                        AlumniHub
                    </Link>

                    {/* Navbar */}
                    <nav className="flex items-center gap-6">
                        <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
                        <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
                        <Link to="/directory" className="text-gray-700 hover:text-indigo-600">Directory</Link>
                        <Link to="/events" className="text-gray-700 hover:text-indigo-600">Events</Link>

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
                                    <Link onClick={()=>setCareerOpen(false)}
                                        to="/jobs"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                                    >
                                        Jobs
                                    </Link>
                                    <Link onClick={()=>setCareerOpen(false)}
                                        to="/mentorship"
                                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-50"
                                    >
                                        Mentorship
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link to="/donations" className="text-gray-700 hover:text-indigo-600">Donations</Link>
                        <Link to="/shop" className="text-gray-700 hover:text-indigo-600">Shop</Link>
                        <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>


                        {/* Dashboard Icon */}
                        <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 text-xl">
                            <FiGrid />
                        </Link>

                        {/* Notification Bell */}
                        <button className="relative text-gray-700 hover:text-indigo-600 text-xl cursor-pointer">
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
