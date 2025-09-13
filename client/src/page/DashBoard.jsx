import React, { useState, useMemo } from 'react';
import Header from '../Component/common/Header';

// --- DUMMY DATA ---
// In a real application, this data would come from an API.
const initialAlumniData = [
  { id: 1, name: 'Aarav Sharma', gradYear: 2018, program: 'Computer Science', status: 'Verified', email: 'aarav.s@example.com' },
  { id: 2, name: 'Priya Patel', gradYear: 2020, program: 'Business Administration', status: 'Pending', email: 'priya.p@example.com' },
  { id: 3, name: 'Rohan Mehta', gradYear: 2019, program: 'Mechanical Engineering', status: 'Verified', email: 'rohan.m@example.com' },
  { id: 4, name: 'Sneha Verma', gradYear: 2021, program: 'Biotechnology', status: 'Pending', email: 'sneha.v@example.com' },
  { id: 5, name: 'Vikram Singh', gradYear: 2017, program: 'Civil Engineering', status: 'Verified', email: 'vikram.s@example.com' },
  { id: 6, name: 'Ananya Reddy', gradYear: 2022, program: 'Economics', status: 'Pending', email: 'ananya.r@example.com' },
];

const initialEventsData = [
  { id: 1, title: 'Annual Alumni Meet 2025', date: '2025-11-15', organizer: 'Aarav Sharma', status: 'Approved' },
  { id: 2, title: 'Startup Pitch Day', date: '2025-10-20', organizer: 'Alumni Association', status: 'Pending' },
  { id: 3, title: 'Guest Lecture: AI in Healthcare', date: '2025-09-30', organizer: 'Sneha Verma', status: 'Approved' },
  { id: 4, title: 'Campus Mentorship Day', date: '2025-11-05', organizer: 'Faculty Office', status: 'Pending' },
  { id: 5, title: 'Charity Run for Education', date: '2025-12-01', organizer: 'Vikram Singh', status: 'Rejected' },
];

const initialMentorshipsData = [
  { id: 1, mentor: 'Rohan Mehta', mentee: 'Suresh Kumar (Student)', topic: 'Career in Core Engineering', startDate: '2025-08-01', status: 'Active' },
  { id: 2, mentor: 'Priya Patel', mentee: 'Deepika Jain (Student)', topic: 'MBA Entrance Prep', startDate: '2025-09-10', status: 'Active' },
  { id: 3, mentor: 'Aarav Sharma', mentee: 'Amit Verma (Student)', topic: 'Software Development Internships', startDate: '2025-07-20', status: 'Completed' },
];

// --- SVG ICONS ---
// Using inline SVGs to avoid external dependencies like an icon library.
const HomeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const UsersIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const CalendarIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);
const SendIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);
const UserCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" />
  </svg>
);
const BarChartIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </svg>
);
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
  </svg>
);


// --- Reusable Components ---
const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
    <div className={`p-3 rounded-full mr-4 ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
    </div>
  </div>
);

const EngagementChart = () => {
  // Dummy data for the chart
  const data = [
    { month: 'Apr', value: 65 },
    { month: 'May', value: 59 },
    { month: 'Jun', value: 80 },
    { month: 'Jul', value: 81 },
    { month: 'Aug', value: 56 },
    { month: 'Sep', value: 75 },
  ];
  const maxVal = 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-bold text-lg text-gray-700 mb-4">Alumni Engagement (Last 6 Months)</h3>
      <div className="flex justify-around items-end h-64 space-x-4">
        {data.map(item => (
          <div key={item.month} className="flex flex-col items-center flex-1">
            <div className="w-full bg-blue-100 rounded-t-md flex items-end" style={{ height: `${maxVal}%` }}>
              <div className="w-full bg-blue-500 rounded-t-md hover:bg-blue-600 transition-all" style={{ height: `${item.value}%` }}></div>
            </div>
            <span className="text-xs text-gray-500 mt-2">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Views / Sections ---
const DashboardOverview = ({ alumni, events, mentorships }) => {
  const pendingAlumni = alumni.filter(a => a.status === 'Pending').length;
  const pendingEvents = events.filter(e => e.status === 'Pending').length;
  const activeMentorships = mentorships.filter(m => m.status === 'Active').length;

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Alumni" value={alumni.length} icon={<UsersIcon className="h-6 w-6 text-white" />} color="bg-blue-500" />
        <StatCard title="Pending Verifications" value={pendingAlumni} icon={<UserCheckIcon className="h-6 w-6 text-white" />} color="bg-yellow-500" />
        <StatCard title="Events to Moderate" value={pendingEvents} icon={<CalendarIcon className="h-6 w-6 text-white" />} color="bg-green-500" />
        <StatCard title="Active Mentorships" value={activeMentorships} icon={<UsersIcon className="h-6 w-6 text-white" />} color="bg-indigo-500" />
      </div>
      <div className="mt-8">
        <EngagementChart />
      </div>
    </div>
  );
};

const ManageAlumni = ({ alumni, setAlumni }) => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAlumni = useMemo(() => {
    return alumni
      .filter(a => filter === 'All' || a.status === filter)
      .filter(a => a.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [alumni, filter, searchTerm]);

  const handleVerify = (id) => {
    setAlumni(alumni.map(a => a.id === id ? { ...a, status: 'Verified' } : a));
  };

  const StatusPill = ({ status }) => {
    const color = {
      'Verified': 'bg-green-100 text-green-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
    }[status];
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${color}`}>{status}</span>;
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Alumni Profiles</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md pl-10"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <div className="flex space-x-2">
            {['All', 'Pending', 'Verified'].map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-4 py-2 rounded-md text-sm font-medium ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-4">Name</th>
                <th className="p-4">Graduation Year</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredAlumni.map(alum => (
                <tr key={alum.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">{alum.name}</td>
                  <td className="p-4 text-gray-600">{alum.gradYear}</td>
                  <td className="p-4"><StatusPill status={alum.status} /></td>
                  <td className="p-4">
                    {alum.status === 'Pending' && (
                      <button onClick={() => handleVerify(alum.id)} className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600">
                        Verify
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ModerateEvents = ({ events, setEvents }) => {
  const handleStatusChange = (id, status) => {
    setEvents(events.map(e => e.id === id ? { ...e, status } : e));
  };

  const StatusPill = ({ status }) => {
    const color = {
      'Approved': 'bg-green-100 text-green-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Rejected': 'bg-red-100 text-red-800',
    }[status];
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${color}`}>{status}</span>;
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Moderate Events</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          {events.map(event => (
            <div key={event.id} className="p-4 border rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="font-bold text-gray-800">{event.title}</h4>
                <p className="text-sm text-gray-500">Date: {event.date} | Organizer: {event.organizer}</p>
              </div>
              <div className="flex items-center gap-4">
                <StatusPill status={event.status} />
                {event.status === 'Pending' && (
                  <div className="flex space-x-2">
                    <button onClick={() => handleStatusChange(event.id, 'Approved')} className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600">Approve</button>
                    <button onClick={() => handleStatusChange(event.id, 'Rejected')} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600">Reject</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Communications = () => {
  const [messageSent, setMessageSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Communications</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Send Announcement</h3>
        {messageSent && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert"><p>Announcement sent successfully!</p></div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
            <input type="text" id="subject" className="w-full p-2 border border-gray-300 rounded-md" required />
          </div>
          <div className="mb-4">
            <label htmlFor="recipients" className="block text-gray-700 font-medium mb-2">Recipients</label>
            <select id="recipients" className="w-full p-2 border border-gray-300 rounded-md bg-white">
              <option>All Alumni</option>
              <option>All Students</option>
              <option>Alumni - Batch of 2020</option>
              <option>Computer Science Alumni</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" rows="6" className="w-full p-2 border border-gray-300 rounded-md" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold flex items-center justify-center">
            <SendIcon className="h-5 w-5 mr-2" /> Send Announcement
          </button>
        </form>
      </div>
    </div>
  );
};

const Mentorship = ({ mentorships }) => {
  const StatusPill = ({ status }) => {
    const color = {
      'Active': 'bg-blue-100 text-blue-800',
      'Completed': 'bg-gray-100 text-gray-800',
    }[status];
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${color}`}>{status}</span>;
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Track Mentorship Programs</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 border-b">
                <th className="p-4">Mentor</th>
                <th className="p-4">Mentee</th>
                <th className="p-4">Start Date</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {mentorships.map(m => (
                <tr key={m.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-800">{m.mentor}</td>
                  <td className="p-4 text-gray-600">{m.mentee}</td>
                  <td className="p-4 text-gray-600">{m.startDate}</td>
                  <td className="p-4"><StatusPill status={m.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Reports = () => (
  <div>
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Generate Reports</h2>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="reportType" className="block text-gray-700 font-medium mb-2">Report Type</label>
          <select id="reportType" className="w-full p-2 border border-gray-300 rounded-md bg-white">
            <option>Alumni Engagement</option>
            <option>Mentorship Program Success</option>
            <option>Event Attendance & Feedback</option>
            <option>Alumni Verification Stats</option>
          </select>
        </div>
        <div>
          <label htmlFor="dateRange" className="block text-gray-700 font-medium mb-2">Date Range</label>
          <input type="text" id="dateRange" className="w-full p-2 border border-gray-300 rounded-md" defaultValue="Last 90 Days" />
        </div>
      </div>
      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-semibold">
          Generate & Download Report
        </button>
      </div>
    </div>
  </div>
);


// --- App Component (Main Layout) ---
const App = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [alumni, setAlumni] = useState(initialAlumniData);
  const [events, setEvents] = useState(initialEventsData);
  const [mentorships, setMentorships] = useState(initialMentorshipsData);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardOverview alumni={alumni} events={events} mentorships={mentorships} />;
      case 'manage-alumni':
        return <ManageAlumni alumni={alumni} setAlumni={setAlumni} />;
      case 'moderate-events':
        return <ModerateEvents events={events} setEvents={setEvents} />;
      case 'communications':
        return <Communications />;
      case 'mentorship':
        return <Mentorship mentorships={mentorships} />;
      case 'reports':
        return <Reports />;
      default:
        return <DashboardOverview />;
    }
  };

  const NavLink = ({ view, icon, children }) => (
    <button
      onClick={() => {
        setActiveView(view)
        setSidebarOpen(false)
      }}
      className={`w-full flex items-center p-3 rounded-lg transition-colors ${activeView === view ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
    >
      {icon}
      <span className="ml-4">{children}</span>
    </button>
  );

  return (
    <>
    <Header/>
      <div className="flex h-[calc(100vh-64px)] bg-gray-100">
        {/* Sidebar */}
        <aside className={`bg-gray-800 text-white w-64 fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-30`}>
          <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Faculty Panel</h1>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white">
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-4 space-y-2">
            <NavLink view="dashboard" icon={<HomeIcon className="h-5 w-5" />}>Dashboard</NavLink>
            <NavLink view="manage-alumni" icon={<UsersIcon className="h-5 w-5" />}>Manage Alumni</NavLink>
            <NavLink view="moderate-events" icon={<CalendarIcon className="h-5 w-5" />}>Moderate Events</NavLink>
            <NavLink view="communications" icon={<SendIcon className="h-5 w-5" />}>Communications</NavLink>
            <NavLink view="mentorship" icon={<UserCheckIcon className="h-5 w-5" />}>Mentorship</NavLink>
            <NavLink view="reports" icon={<BarChartIcon className="h-5 w-5" />}>Reports</NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white shadow-sm p-4 lg:hidden flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Faculty Dashboard</h1>
            <button onClick={() => setSidebarOpen(true)} className="text-gray-600">
              <MenuIcon className="h-6 w-6" />
            </button>
          </header>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
            {renderView()}
          </main>
        </div>
      </div>
    </>

  );
}

export default App;
