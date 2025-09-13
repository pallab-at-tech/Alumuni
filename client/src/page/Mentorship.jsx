import React from "react";
import { FiBriefcase, FiMapPin, FiUser } from "react-icons/fi";

const Mentorship = () => {
  const mentors = [
    {
      id: 1,
      name: "Rohit Sharma",
      role: "Senior Frontend Engineer",
      company: "TechCorp",
      expertise: ["React", "JavaScript", "UI/UX"],
      location: "Bangalore, India",
      avatar: "https://i.pravatar.cc/100?img=6",
    },
    {
      id: 2,
      name: "Ananya Gupta",
      role: "Data Scientist",
      company: "DataWorks",
      expertise: ["Python", "Machine Learning", "Data Analysis"],
      location: "Hyderabad, India",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      id: 3,
      name: "Vikram Patel",
      role: "Product Designer",
      company: "Designify",
      expertise: ["Figma", "Prototyping", "UX Research"],
      location: "Remote",
      avatar: "https://i.pravatar.cc/100?img=7",
    },
  ];

  return (
    <section className="min-h-[calc(100vh-416px)] px-[70px] py-10 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Find a Mentor</h1>
        <p className="text-gray-500 mt-2">
          Connect with alumni mentors for guidance and career support
        </p>
      </div>

      {/* Search + Filters */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="🔍 Search by skill, role, or name..."
          className="w-full md:w-2/3 px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />

        <select className="px-4 py-3 border border-gray-200 rounded-lg cursor-pointer shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none">
          <option>All Expertise</option>
          <option>Frontend</option>
          <option>Data Science</option>
          <option>Design</option>
          <option>Management</option>
        </select>
      </div>

      {/* Mentor Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
          >
            {/* Avatar & Name */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">{mentor.name}</h2>
                <p className="text-sm text-gray-500">{mentor.role}</p>
              </div>
            </div>

            {/* Details */}
            <p className="text-sm text-gray-600 mb-2">
              <FiBriefcase className="inline mr-2 text-indigo-500" />
              {mentor.company}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <FiMapPin className="inline mr-2 text-indigo-500" />
              {mentor.location}
            </p>

            {/* Expertise */}
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {mentor.expertise.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Button */}
            <button className="mt-auto cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2">
              <FiUser /> Connect
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentorship;
