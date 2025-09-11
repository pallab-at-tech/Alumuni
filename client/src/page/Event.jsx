import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';

const Event = () => {

  const currentEvents = [
    {
      id: 1,
      title: "Tech Meetup 2025",
      date: "15th Sep 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Mumbai, India",
      venue: "Taj Hotel, Colaba",
      attendees: 150,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center",
      category: "Technology",
      description: "Join fellow tech enthusiasts for networking and insights into emerging technologies."
    },
    {
      id: 2,
      title: "Alumni Networking",
      date: "20th Sep 2025",
      time: "7:00 PM - 10:00 PM",
      location: "Online",
      venue: "Zoom Platform",
      attendees: 300,
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=250&fit=crop&crop=center",
      category: "Networking",
      description: "Connect with alumni from across the globe in this virtual networking session."
    },
    {
      id: 3,
      title: "AI Agent Workshop",
      date: "25th Sep 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Bangalore, India",
      venue: "IISc Campus",
      attendees: 80,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center",
      category: "Workshop",
      description: "Hands-on workshop covering latest trends in AI and machine learning applications."
    },
    {
      id: 4,
      title: "Startup Pitch Competition",
      date: "28th Sep 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Pune, India",
      venue: "WeWork Koregaon Park",
      attendees: 120,
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&crop=center",
      category: "Competition",
      description: "Witness innovative startups pitch their ideas to industry experts and investors."
    },
    // {
    //   id: 5,
    //   title: "Cybersecurity Awareness Seminar",
    //   date: "5th Oct 2025",
    //   time: "3:00 PM - 5:00 PM",
    //   location: "Hyderabad, India",
    //   venue: "Novotel Conference Hall",
    //   attendees: 90,
    //   image: "https://image.lexica.art/full_webp/d51df01d-8319-4e7e-a8e2-79a88e9d9a42",
    //   category: "Seminar",
    //   description: "Learn about latest cybersecurity threats and best practices for individuals and businesses."
    // },
    // {
    //   id: 6,
    //   title: "Entrepreneurship Panel Discussion",
    //   date: "10th Oct 2025",
    //   time: "6:00 PM - 8:00 PM",
    //   location: "Chennai, India",
    //   venue: "Tidel Park Auditorium",
    //   attendees: 200,
    //   image: "https://image.lexica.art/full_webp/ae621e5e-670c-49ba-a46c-1fea09a11250",
    //   category: "Networking",
    //   description: "Successful entrepreneurs share insights and answer questions from aspiring founders."
    // },
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Graduation Ceremony 2024",
      date: "10th Jun 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Delhi, India",
      venue: "India Gate Lawns",
      attendees: 500,
      image: "https://image.lexica.art/full_webp/8647d510-7390-4841-b487-e2880d8a1b3c",
      category: "Ceremony",
      description: "A memorable graduation ceremony celebrating academic achievements and new beginnings."
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Technology: "bg-blue-100 text-blue-800",
      Networking: "bg-green-100 text-green-800",
      Workshop: "bg-purple-100 text-purple-800",
      Competition: "bg-orange-100 text-orange-800",
      Ceremony: "bg-pink-100 text-pink-800",
      Festival: "bg-yellow-100 text-yellow-800",
      Summit: "bg-indigo-100 text-indigo-800",
      Cultural: "bg-red-100 text-red-800",
      Academic: "bg-teal-100 text-teal-800",
      Sports: "bg-emerald-100 text-emerald-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const EventCard = ({ event, isPast = false }) => (
    <div className="group bg-white rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
            {event.category}
          </span>
        </div>
        {!isPast && (
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
              <FaExternalLinkAlt className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        <div className="space-y-2 text-gray-500 text-sm">
          <div className="flex items-center">
            <FaCalendarAlt className="w-4 h-4 mr-2" />
            <span>{event.date}</span>
          </div>

          <div className="flex items-center">
            <FaClock className="w-4 h-4 mr-2" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-center">
            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
            <span>{event.venue}, {event.location}</span>
          </div>

          <div className="flex items-center">
            <FaUsers className="w-4 h-4 mr-2" />
            <span>{event.attendees} attendees</span>
          </div>
        </div>

        {!isPast && (
          <div className="mt-6">
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Register Now
            </button>
          </div>
        )}

        {isPast && (
          <div className="mt-4">
            <button className="w-full border border-gray-200 text-gray-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              View Gallery
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="min-h-[calc(100vh-64px)] px-6 py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">

      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">

          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Events & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gatherings</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Join our vibrant community through exciting events, workshops, and networking opportunities
            </p>
          </div>

          {/* Search Box */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto mt-4 md:mt-0 gap-2 md:gap-0">
            <input
              type="text"
              placeholder="Search events..."
              className="px-4 py-2 rounded-lg md:rounded-r-none outline-none ring-2 ring-blue-400 focus:border-transparent text-gray-700 w-full md:w-64 transition-all duration-200"
            />
            <button className="px-4 py-[10px] bg-blue-500 text-white font-semibold rounded-lg md:rounded-l-none hover:bg-blue-600 transition-colors w-full md:w-auto">
              Search
            </button>
          </div>


        </div>

        {/* Current Events */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>

            {/* More Events Button */}
            <button className="ml-4 px-4 py-2 cursor-pointer bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
              More Events
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {currentEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Past Events</h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full ml-8 max-w-xs"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {pastEvents.map(event => (
              <EventCard key={event.id} event={event} isPast={true} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default Event;
