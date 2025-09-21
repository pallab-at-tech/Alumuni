import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">About Alumni Connect</h3>
                        <p className="text-gray-400">
                            Connecting alumni across the world. Stay updated with events, mentorship, and career opportunities.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-white transition">Home</a></li>
                            <li><a href="/events" className="hover:text-white transition">Events</a></li>
                            <li><a href="/mentorship" className="hover:text-white transition">Mentorship</a></li>
                            <li><a href="/donations" className="hover:text-white transition">Donate</a></li>
                            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="text-gray-400 mb-4">alumni@yourcollege.edu</p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition">LinkedIn</a>
                            <a href="#" className="hover:text-white transition">Facebook</a>
                            <a href="#" className="hover:text-white transition">Twitter</a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Alumni Connect. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer
