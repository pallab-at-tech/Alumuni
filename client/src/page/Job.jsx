import React from "react";
import { FiMapPin, FiBriefcase } from "react-icons/fi";

const JobPortal = () => {
    const jobs = [
        {
            id: 1,
            title: "Frontend Developer",
            company: "TechCorp",
            logo: "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
            location: "Bangalore, India",
            type: "Full-time",
            posted: "2 days ago",
            postedBy: {
                name: "Rohit Sharma",
                avatar: "https://i.pravatar.cc/40?img=1",
            },
        },
        {
            id: 2,
            title: "Data Analyst",
            company: "DataWorks",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA60Kk0lMCmziobLsrB7nakPdRChkXXsThzA&s",
            location: "Hyderabad, India",
            type: "Internship",
            posted: "1 week ago",
            postedBy: {
                name: "Ananya Gupta",
                avatar: "https://i.pravatar.cc/40?img=2",
            },
        },
        {
            id: 3,
            title: "UI/UX Designer",
            company: "Designify",
            logo: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?semt=ais_incoming&w=740&q=80",
            location: "Remote",
            type: "Contract",
            posted: "3 days ago",
            postedBy: {
                name: "Vikram Patel",
                avatar: "https://i.pravatar.cc/40?img=3",
            },
        },
    ];

    return (
        <section className="min-h-[calc(100vh-416px)] px-[70px] py-10 bg-gradient-to-b from-gray-50 to-white">
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-gray-900">Explore Opportunities</h1>
                <p className="text-gray-500 mt-2">Find jobs and internships shared by our alumni network</p>
            </div>

            {/* Search + Filters */}
            <div className="bg-white shadow-md rounded-2xl p-6 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
                <input
                    type="text"
                    placeholder="🔍 Search jobs, companies, or skills..."
                    className="w-full md:w-2/3 px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
                />

                <select className="px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none">
                    <option>All Job Types</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Internship</option>
                    <option>Contract</option>
                </select>
            </div>

            {/* Job Listings */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col justify-between"
                    >
                        {/* Top section */}
                        <div className="flex items-center justify-between gap-4 mb-4">
                            <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg border" />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">{job.title}</h2>
                                <p className="text-gray-500 text-sm">{job.company}</p>
                            </div>

                            <p className=" text-sky-600 underline text-sm font-bold rounded-md py-1 px-1.5 cursor-pointer">See deatails</p>
                        </div>

                        {/* Details */}
                        <div className="flex flex-col gap-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-2">
                                <FiMapPin className="text-indigo-500" />
                                {job.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <FiBriefcase className="text-indigo-500" />
                                {job.type}
                            </div>
                            <span className="text-xs text-gray-400">Posted {job.posted}</span>
                        </div>

                        {/* Posted by */}
                        <div className="flex items-center gap-3 mt-auto mb-4">
                            <img
                                src={job.postedBy.avatar}
                                alt={job.postedBy.name}
                                className="w-8 h-8 rounded-full border"
                            />
                            <span className="text-sm text-gray-700">{job.postedBy.name}</span>
                        </div>

                        {/* Apply button */}
                        <button className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer">
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default JobPortal;
