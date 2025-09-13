import React from "react";
import { FaDonate, FaHandHoldingHeart } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";

const Donations = () => {
  const causes = [
    {
      id: 1,
      title: "Scholarship Fund",
      desc: "Support deserving students with scholarships and financial aid.",
      icon: <FaHandHoldingHeart className="text-indigo-600 text-2xl" />,
    },
    {
      id: 2,
      title: "Campus Development",
      desc: "Contribute to infrastructure, labs, and learning facilities.",
      icon: <FiTrendingUp className="text-indigo-600 text-2xl" />,
    },
    {
      id: 3,
      title: "Alumni Events",
      desc: "Help us organize reunions, networking meets, and mentorship programs.",
      icon: <FaDonate className="text-indigo-600 text-2xl" />,
    },
  ];

  return (
    <section className="min-h-[calc(100vh-416px)] px-[70px] py-12 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Support Your Alma Mater</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Your contributions help us provide scholarships, improve facilities, and
          strengthen alumni connections.
        </p>
      </div>

      {/* Donation Causes */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {causes.map((cause) => (
          <div
            key={cause.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col"
          >
            <div className="mb-4">{cause.icon}</div>
            <h2 className="text-lg font-semibold text-gray-900">{cause.title}</h2>
            <p className="text-sm text-gray-600 mt-2 mb-4">{cause.desc}</p>
            <button className="mt-auto bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer">
              Donate Now
            </button>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 rounded-2xl text-center py-10 px-6 shadow-md">
        <h2 className="text-2xl font-bold text-white mb-4">
          Every Contribution Counts
        </h2>
        <p className="text-indigo-100 mb-6">
          Whether it’s small or big, your donation makes a difference in shaping
          the future of our students and community.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer">
          Make a General Donation
        </button>
      </div>
    </section>
  );
};

export default Donations;
