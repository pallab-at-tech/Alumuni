import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa"

const Directory = () => {
    const [openSections, setOpenSections] = useState({
        batch: true,
        course: true,
        dept: true,
        company: true,
        location: true,
    });

    const alumniData = [
        {
            year: 2018,
            data: [
                {
                    name: "John Doe",
                    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                    course: "CSE",
                    company: "Google",
                    location: "San Francisco, USA",
                },
                {
                    name: "Jane Smith",
                    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                    course: "ECE",
                    company: "Microsoft",
                    location: "Seattle, USA",
                },
            ]

        },
        {
            year: 2022,
            data: [
                {
                    name: "Raj Kumar",
                    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                    course: "Mechanical",
                    company: "Tata Motors",
                    location: "Pune, India",
                }
            ],
        },
        {

            year: 2023,
            data: [
                {
                    name: "Emily Brown",
                    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                    course: "IT",
                    company: "Amazon",
                    location: "New York, USA",
                },
            ]
        },
    ]

    const toggleSection = (key) => {
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section className="grid sm:grid-cols-[200px_1fr] lg:grid-cols-[300px_1fr] gap-6 pt-1 pl-2 min-h-[calc(100vh-416px)]">

            {/* Sidebar Filter */}
            <aside className="bg-white h-fit p-6 shadow-md sticky top-0">
                <h2 className="text-lg font-semibold mb-4">Filters</h2>

                {/* Name Search */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Batch / Year */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <button
                        onClick={() => toggleSection("batch")}
                        className="w-full flex justify-between items-center py-2 text-left"
                    >
                        <span className="font-medium text-gray-700">Batch / Year</span>
                        {openSections.batch ? (
                            <FaChevronUp className="w-3 h-3 text-gray-500" />
                        ) : (
                            <FaChevronDown className="w-3 h-3 text-gray-500" />
                        )}
                    </button>
                    {openSections.batch && (
                        <select className="w-full mt-2 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option value="">All</option>
                            <option>Class of 2010</option>
                            <option>Class of 2015</option>
                            <option>Class of 2020</option>
                        </select>
                    )}
                </div>

                {/* Course */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <button
                        onClick={() => toggleSection("course")}
                        className="w-full flex justify-between items-center py-2 text-left"
                    >
                        <span className="font-medium text-gray-700">Course</span>
                        {openSections.course ? (
                            <FaChevronUp className="w-3 h-3 text-gray-500" />
                        ) : (
                            <FaChevronDown className="w-3 h-3 text-gray-500" />
                        )}
                    </button>
                    {openSections.course && (
                        <div className="mt-2 space-y-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded text-indigo-600" /> B.Tech
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded text-indigo-600" /> M.Tech
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded text-indigo-600" /> MBA
                            </label>
                        </div>
                    )}
                </div>

                {/* Department */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <button
                        onClick={() => toggleSection("dept")}
                        className="w-full flex justify-between items-center py-2 text-left"
                    >
                        <span className="font-medium text-gray-700">Department</span>
                        {openSections.dept ? (
                            <FaChevronUp className="w-3 h-3 text-gray-500" />
                        ) : (
                            <FaChevronDown className="w-3 h-3 text-gray-500" />
                        )}
                    </button>
                    {openSections.dept && (
                        <div className="mt-2 space-y-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded text-indigo-600" /> Computer Science
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded text-indigo-600" /> Electrical
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded text-indigo-600" /> Mechanical
                            </label>
                        </div>
                    )}
                </div>

                {/* Company */}
                <div className="border-b border-gray-200 pb-4 mb-4">
                    <button
                        onClick={() => toggleSection("company")}
                        className="w-full flex justify-between items-center py-2 text-left"
                    >
                        <span className="font-medium text-gray-700">Company</span>
                        {openSections.company ? (
                            <FaChevronUp className="w-3 h-3 text-gray-500" />
                        ) : (
                            <FaChevronDown className="w-3 h-3 text-gray-500" />
                        )}
                    </button>
                    {openSections.company && (
                        <input
                            type="text"
                            placeholder="e.g. Google"
                            className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    )}
                </div>

                {/* Location */}
                <div>
                    <button
                        onClick={() => toggleSection("location")}
                        className="w-full flex justify-between items-center py-2 text-left"
                    >
                        <span className="font-medium text-gray-700">Location</span>
                        {openSections.location ? (
                            <FaChevronUp className="w-3 h-3 text-gray-500" />
                        ) : (
                            <FaChevronDown className="w-3 h-3 text-gray-500" />
                        )}
                    </button>
                    {openSections.location && (
                        <input
                            type="text"
                            placeholder="e.g. Bangalore"
                            className="w-full mt-2 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    )}
                </div>

                {/* Apply Button */}
                <button className="mt-6 w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                    Apply Filters
                </button>
            </aside>

            {/* Results */}
            <div className="px-4 py-6 grid sm:grid-cols-2 sm:h-[450px] lg:grid-cols-3 lg:h-[250px] gap-6">
                {alumniData.map((v, i) => (
                    <div
                        key={i}
                        className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition cursor-pointer from-gray-50 to-white border-2 border-gray-300"
                    >

                        {/* Content */}
                        <div className="relative p-6 text-gray-900 flex flex-col justify-between h-full">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <FaFolderOpen className="w-7 h-7 text-[#1d1c1c]" />
                                    <h2 className="text-xl font-bold">Class of {v.year}</h2>
                                </div>

                                <p className="text-sm">
                                    Result Found:{" "}
                                    <span className="px-2 py-0.5 bg-yellow-500 text-gray-900 rounded-md text-xs font-medium">
                                        {v.data.length}
                                    </span>
                                </p>
                            </div>

                            {/* Avatars preview */}
                            <div className="mt-4 flex -space-x-3">
                                {v.data.slice(0, 3).map((alumni, idx) => (
                                    <img
                                        key={idx}
                                        src={alumni.avatar}
                                        alt={alumni.name}
                                        className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                                    />
                                ))}
                                {v.data.length > 3 && (
                                    <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-700 shadow-sm">
                                        +{v.data.length - 3}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Directory;
