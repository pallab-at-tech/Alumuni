import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
    return (
        <section className="min-h-[calc(100vh-416px)] px-[70px] py-12 bg-gray-50">
            
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
                <p className="text-gray-500 mt-2">
                    Have questions or need assistance? Reach out to our alumni office.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <FiMapPin className="text-indigo-600 text-2xl mt-1" />
                        <div>
                            <h2 className="font-semibold text-gray-900">Address</h2>
                            <p className="text-gray-600">123 Alumni Street, College City, India</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FiPhone className="text-indigo-600 text-2xl mt-1" />
                        <div>
                            <h2 className="font-semibold text-gray-900">Phone</h2>
                            <p className="text-gray-600">+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <FiMail className="text-indigo-600 text-2xl mt-1" />
                        <div>
                            <h2 className="font-semibold text-gray-900">Email</h2>
                            <p className="text-gray-600">alumni@college.edu</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6 flex flex-col gap-2">
                        <div className="flex gap-4">
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">LinkedIn</a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">Facebook</a>
                            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-semibold">Instagram</a>
                        </div>
                        <p className="text-gray-500 mt-2 text-sm">
                            Make sure you subscribe to our social handles. We provide all updates here!
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={(e)=>e.preventDefault()} className="bg-[#f3f6fa] shadow-md rounded-2xl p-8 flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
                    />
                    <textarea
                        placeholder="Message"
                        rows="5"
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none bg-white"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 mt-2"
                    >
                        Send Message
                    </button>
                </form>

            </div>

        </section>
    );
};

export default Contact;
