import React from 'react'

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#" className="text-2xl font-bold text-indigo-600">AlumniHub</a>
                    <nav className="flex items-center gap-6">
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Directory</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Events</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Donations</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Login</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600">Register</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
