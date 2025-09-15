import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { FaUniversity, FaUsers, FaCity, FaCalendarAlt } from "react-icons/fa";

const Home = () => {

    const banner = [
        {
            img: "https://vaave.s3.amazonaws.com/assets/site_content/151568719/banners/1f68328568d05deec984879e89f12108.jpg",
            pos: "[object-position:100%_80%]",
            text: "",
            text_pos: "",
            route: ""
        },
        {
            img: "https://transitionsusa.org/wp-content/uploads/2024/12/shutterstock_2111420681-scaled.jpg",
            pos: "[object-position:100%_45%]",
            text: "Stay connected with your batchmates and professors.",
            text_pos: "top-[150px] bottom-0 left-0 right-0",
            route: "/directory"
        },
        {
            img: "https://image.lexica.art/full_webp/5e4d95c3-cfb9-4113-8b54-f8d7731454b3",
            pos: "[object-position:100%_30%]",
            text: "Discover mentorship, career opportunities",
            text_pos: "top-0 bottom-0 left-0 right-0",
            route: "/mentorship"
        },
        {
            img: "https://image.lexica.art/full_webp/59722cff-6004-4d68-a5a8-2fa34fcee43b",
            pos: "[object-position:100%_50%]",
            text: "Get all details of events",
            text_pos: "top-12 left-14 bottom-0",
            route: "/events"
        }
    ];

    const events = [
        {
            title: "Alumni Meet 2025",
            date: "October 15, 2025",
            description: "Reconnect with batchmates and professors at the annual alumni meet.",
            image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe",
            link: "/event",
        },
        {
            title: "Career Workshop",
            date: "September 28, 2025",
            description: "Gain insights from industry experts and enhance your career growth.",
            image: "https://image.lexica.art/full_webp/a51d4b71-d096-4a19-8863-554210ad9a57",
            link: "/event",
        },
    ];

    const [index, setIndex] = useState(0);

    // auto-slide every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % banner.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [banner.length]);

    return (
        <section className="relative min-h-[calc(100vh-64px)] px-[70px] py-6">

            {/* banner */}
            <div className="relative w-full h-[300px] overflow-hidden rounded-md shadow-md">
                {banner.map((item, i) => (
                    <Link to={item.route || ""}
                        key={i}
                        className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100 z-20" : "opacity-0 z-0"
                            }`}
                    >
                        {/* Banner Image */}
                        <img
                            src={item.img}
                            alt="Alumni Banner"
                            className={`h-full w-full object-cover ${item.pos} rounded-md`}
                        />

                        {/* Overlay for readability */}
                        <div className="absolute inset-0 bg-black/40 rounded-md"></div>

                        {/* Text */}
                        {item.text && (
                            <h1
                                className={`absolute ${item.text_pos} flex items-center justify-center text-center text-[#e9e9e9] text-2xl md:text-5xl font-bold px-4`}
                            >
                                {item.text}
                            </h1>
                        )}
                    </Link>
                ))}
            </div>

            {/* Stats Section */}
            <div className="bg-gray-50 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

                    <div className="flex flex-col items-center shadow-md rounded-2xl py-2 px-1.5">
                        <FaUniversity className="w-12 h-12 text-indigo-600 mb-3" />
                        <h3 className="text-4xl font-bold text-indigo-600">50+</h3>
                        <p className="mt-2 text-gray-700 text-lg">
                            Institutions Empowering Future Leaders
                        </p>
                    </div>

                    <div className="flex flex-col items-center shadow-md rounded-2xl py-2 px-1.5">
                        <FaUsers className="w-12 h-12 text-indigo-600 mb-3" />
                        <h3 className="text-4xl font-bold text-indigo-600">1,50,000+</h3>
                        <p className="mt-2 text-gray-700 text-lg">
                            Successful Alumni Shaping the World
                        </p>
                    </div>

                    <div className="flex flex-col items-center shadow-md rounded-2xl py-2 px-1.5">
                        <FaCity className="w-12 h-12 text-indigo-600 mb-3" />
                        <h3 className="text-4xl font-bold text-indigo-600">1000+</h3>
                        <p className="mt-2 text-gray-700 text-lg">
                            Cities Alumni Network
                        </p>
                    </div>

                    <div className="flex flex-col items-center shadow-md rounded-2xl py-2 px-1.5">
                        <FaCalendarAlt className="w-12 h-12 text-indigo-600 mb-3" />
                        <h3 className="text-4xl font-bold text-indigo-600">100+</h3>
                        <p className="mt-2 text-gray-700 text-lg">
                            Networking Events Annually
                        </p>
                    </div>

                </div>
            </div>

            {/* Find Your Batchmate Section */}
            <div className="bg-white py-14 px-6 md:px-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Find Your Batchmate
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Search and connect with your classmates, batchmates, and professors to
                            stay in touch and grow your network.
                        </p>
                        <button className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition">
                            Start Searching
                        </button>
                    </div>

                    {/* Image */}
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
                            alt="Find your batchmate"
                            className="rounded-xl shadow-lg w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Get Smart ID Section */}
            <div className="bg-gray-50 py-14 px-6 md:px-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Image on the left */}
                    <div>
                        <img
                            src="https://image.lexica.art/full_webp/c18fee4f-b39f-4fde-8b8e-bffdb2b90fae"
                            alt="Smart ID"
                            className="rounded-xl shadow-lg w-full object-cover"
                        />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Get Your Smart ID
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Access all alumni events, workshops, and networking opportunities with a
                            single Smart ID. Stay connected and make the most of your alumni
                            privileges.
                        </p>
                        <button className="bg-indigo-600 cursor-pointer text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 transition">
                            Get My ID
                        </button>
                    </div>
                </div>
            </div>

            {/* Events & Jobs Section */}
            <div className="py-8">
                <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* First card (65%) */}
                    <div className="md:col-span-8 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={events[0].image}
                            alt={events[0].title}
                            className="w-full h-50 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-2xl font-semibold mb-2">{events[0].title}</h3>
                            <p className="text-gray-500 text-sm mb-2">{events[0].date}</p>
                            <p className="text-gray-700 text-base mb-4">
                                {events[0].description}
                            </p>
                            <Link
                                to={events[0].link}
                                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>

                    {/* Second card (35%) */}
                    <div className="md:col-span-4 bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={events[1].image}
                            alt={events[1].title}
                            className="w-full h-50 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{events[1].title}</h3>
                            <p className="text-gray-500 text-sm mb-2">{events[1].date}</p>
                            <p className="text-gray-700 text-sm mb-4">
                                {events[1].description}
                            </p>
                            <Link
                                to={events[1].link}
                                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mentor Section and Alumni Testimonials section*/}
            <div className="w-full">
                {/* Meet Our Mentors Section */}
                <div className="bg-gradient-to-r from-amber-600 to-amber-800 py-16 px-6 md:px-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 flex items-center justify-center gap-3">
                        👨‍🏫 Meet Our Mentors
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {/* Mentor 1 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://randomuser.me/api/portraits/men/12.jpg"
                                alt="Mentor"
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-amber-500"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">Dr. Amit Mehra</h3>
                            <p className="text-sm text-amber-600 font-medium">Professor, Computer Science</p>
                            <p className="text-gray-600 mt-3 text-sm">
                                Passionate about guiding students in AI, ML, and research projects.
                            </p>
                        </div>

                        {/* Mentor 2 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://randomuser.me/api/portraits/women/24.jpg"
                                alt="Mentor"
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-amber-500"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">Neha Kapoor</h3>
                            <p className="text-sm text-amber-600 font-medium">Alumni Mentor, Software Engineer</p>
                            <p className="text-gray-600 mt-3 text-sm">
                                Helps fresh graduates with career growth, placements, and industry insights.
                            </p>
                        </div>

                        {/* Mentor 3 */}
                        <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
                            <img
                                src="https://randomuser.me/api/portraits/men/56.jpg"
                                alt="Mentor"
                                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-amber-500"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">Rahul Desai</h3>
                            <p className="text-sm text-amber-600 font-medium">Industry Mentor, Data Scientist</p>
                            <p className="text-gray-600 mt-3 text-sm">
                                Guides alumni in data-driven careers, research, and innovation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Alumni Testimonials Section */}
                <div className="bg-gray-50 py-16 px-6 md:px-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 flex items-center justify-center gap-3">
                        💬 Alumni Testimonials
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Testimonial Card 1 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition relative">
                            <span className="absolute top-4 left-4 text-5xl text-amber-500 opacity-20">“</span>
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="Alumni"
                                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Rohan Sharma</h3>
                                    <p className="text-sm text-gray-500">Batch of 2015</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "Being part of AlumniHub has been a wonderful experience. I reconnected with my mentors and found amazing career opportunities."
                            </p>
                        </div>

                        {/* Testimonial Card 2 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition relative">
                            <span className="absolute top-4 left-4 text-5xl text-amber-500 opacity-20">“</span>
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src="https://randomuser.me/api/portraits/women/45.jpg"
                                    alt="Alumni"
                                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Priya Nair</h3>
                                    <p className="text-sm text-gray-500">Batch of 2018</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "The events are amazing! I met old friends and built new professional connections that really boosted my career."
                            </p>
                        </div>

                        {/* Testimonial Card 3 */}
                        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition relative">
                            <span className="absolute top-4 left-4 text-5xl text-amber-500 opacity-20">“</span>
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src="https://randomuser.me/api/portraits/men/76.jpg"
                                    alt="Alumni"
                                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-500"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">Arjun Verma</h3>
                                    <p className="text-sm text-gray-500">Batch of 2020</p>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "AlumniHub gave me a chance to mentor juniors. It feels great to give back and share my journey with the community."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;
