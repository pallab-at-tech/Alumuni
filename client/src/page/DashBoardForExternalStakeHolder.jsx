import React, { useState, useMemo } from 'react';
import Header from '../Component/common/Header';

// --- DUMMY DATA ---
const jobPostingsData = [
    { id: 1, title: 'Senior Software Engineer', type: 'Full-time', location: 'Bengaluru, KA', status: 'Active', applicants: 45 },
    { id: 2, title: 'Marketing Intern', type: 'Internship', location: 'Remote', status: 'Active', applicants: 120 },
    { id: 3, title: 'Data Analyst', type: 'Full-time', location: 'Mumbai, MH', status: 'Closed', applicants: 250 },
];

const alumniData = [
    { id: 1, name: 'Aarav Sharma', degree: 'B.Tech CSE', gradYear: 2020, skills: ['React', 'Node.js', 'AWS'], company: 'TechSolutions Inc.' },
    { id: 2, name: 'Diya Mehta', degree: 'MBA Marketing', gradYear: 2021, skills: ['Digital Marketing', 'SEO', 'Content Strategy'], company: 'MarketMinds Agency' },
    { id: 3, name: 'Vikram Singh', degree: 'B.E. Mechanical', gradYear: 2019, skills: ['AutoCAD', 'SolidWorks', 'Project Management'], company: 'Innovate Motors' },
    { id: 4, name: 'Ananya Reddy', degree: 'B.Tech IT', gradYear: 2022, skills: ['Python', 'Machine Learning', 'TensorFlow'], company: 'DataCorp' },
];

const careerEventsData = [
    { id: 1, name: 'Annual Tech Career Fair 2025', date: 'Oct 15, 2025', mode: 'Virtual', status: 'Upcoming' },
    { id: 2, name: 'Startup Recruitment Drive', date: 'Nov 05, 2025', mode: 'On-Campus', status: 'Upcoming' },
    { id: 3, name: 'Summer Internship Expo', date: 'Mar 10, 2025', mode: 'On-Campus', status: 'Completed' },
];

const sponsorshipOpportunitiesData = [
    { id: 1, title: 'Title Sponsor for "Innovate 2026"', type: 'Event', description: 'Headline sponsorship for our flagship annual tech festival, reaching over 10,000 students and alumni.' },
    { id: 2, title: 'Fund a "Future Leaders" Scholarship', type: 'Scholarship', description: 'Support 10 high-achieving, underprivileged students through their final year of study.' },
    { id: 3, title: 'Sponsor the "Alumni Connect" Campaign', type: 'Campaign', description: 'Become the official partner for our global alumni outreach campaign, enhancing your brand visibility.' },
];


// --- SVG ICONS ---
const HomeIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>);
const PlusCircleIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="16" /><line x1="8" x2="16" y1="12" y2="12" /></svg>);
const SearchIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>);
const CalendarIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>);
const HeartIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>);
const MenuIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>);
const XIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>);

// --- VIEWS / SECTIONS ---

const DashboardHome = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome, Recruiter!</h2>
        <p className="text-gray-600 mb-6">This is your hub for connecting with our institution's top talent.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-blue-600">2</p>
                <p className="text-sm text-gray-500 font-medium">Active Job Postings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-blue-600">250+</p>
                <p className="text-sm text-gray-500 font-medium">Alumni Profiles Viewed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-4xl font-bold text-blue-600">2</p>
                <p className="text-sm text-gray-500 font-medium">Upcoming Events</p>
            </div>
        </div>
    </div>
);

const JobManagement = () => (
    <div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Job Opportunities</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center">
                <PlusCircleIcon className="h-5 w-5 mr-2" /> Post New Job
            </button>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="w-full text-left">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="p-4 font-semibold">Job Title</th>
                        <th className="p-4 font-semibold">Type</th>
                        <th className="p-4 font-semibold">Status</th>
                        <th className="p-4 font-semibold">Applicants</th>
                        <th className="p-4 font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {jobPostingsData.map(job => (
                        <tr key={job.id}>
                            <td className="p-4 font-medium">{job.title}</td>
                            <td className="p-4">{job.type}</td>
                            <td className="p-4">
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{job.status}</span>
                            </td>
                            <td className="p-4">{job.applicants}</td>
                            <td className="p-4"><button className="text-blue-600 hover:underline">View</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const AlumniSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredAlumni = useMemo(() =>
        alumniData.filter(alumni =>
            alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            alumni.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
        ), [searchTerm]);

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Search Alumni Profiles</h2>
            <div className="relative mb-6">
                <input
                    type="text"
                    placeholder="Search by name, skills (e.g., React, SEO)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg"
                />
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAlumni.map(alumni => (
                    <div key={alumni.id} className="bg-white p-5 rounded-lg shadow-md">
                        <h3 className="font-bold text-lg text-gray-800">{alumni.name}</h3>
                        <p className="text-sm text-gray-600">{alumni.degree} ({alumni.gradYear})</p>
                        <p className="text-sm text-gray-500 mt-1">Works at {alumni.company}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {alumni.skills.map(skill => <span key={skill} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{skill}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CareerEvents = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Career Fairs & Recruitment Drives</h2>
        <div className="space-y-4">
            {careerEventsData.map(event => (
                <div key={event.id} className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-lg text-gray-800">{event.name}</h3>
                        <p className="text-sm text-gray-600">{event.date} • {event.mode}</p>
                    </div>
                    <button disabled={event.status !== 'Upcoming'} className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed">
                        {event.status === 'Upcoming' ? 'Register' : 'Completed'}
                    </button>
                </div>
            ))}
        </div>
    </div>
);

const Sponsorships = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Sponsorship Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sponsorshipOpportunitiesData.map(opp => (
                <div key={opp.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full self-start mb-3 ${opp.type === 'Event' ? 'bg-purple-100 text-purple-800' : opp.type === 'Scholarship' ? 'bg-yellow-100 text-yellow-800' : 'bg-pink-100 text-pink-800'}`}>{opp.type}</span>
                    <h3 className="font-bold text-lg text-gray-800">{opp.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 flex-grow">{opp.description}</p>
                    <button className="mt-4 bg-transparent border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50">
                        Learn More
                    </button>
                </div>
            ))}
        </div>
    </div>
);


// --- MAIN APP COMPONENT ---
const DashBoardForExternalStakeHolder = () => {
    const [activeView, setActiveView] = useState('home');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const renderView = () => {
        switch (activeView) {
            case 'home': return <DashboardHome />;
            case 'jobs': return <JobManagement />;
            case 'search': return <AlumniSearch />;
            case 'events': return <CareerEvents />;
            case 'sponsorships': return <Sponsorships />;
            default: return <DashboardHome />;
        }
    };

    const NavLink = ({ view, icon, children }) => (
        <button onClick={() => { setActiveView(view); setSidebarOpen(false); }}
            className={`w-full flex items-center p-3 rounded-lg transition-colors ${activeView === view ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            {icon}
            <span className="ml-4">{children}</span>
        </button>
    );

    return (
        <>
            <Header />
            <div className="flex h-[calc(100vh-64px)] bg-gray-100 font-sans">
                <aside className={`bg-gray-800 text-white w-64 fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-30`}>
                    <div className="p-4 flex justify-between items-center border-b border-gray-700">
                        <h1 className="text-xl font-bold">Recruiter Panel</h1>
                        <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white"><XIcon className="h-6 w-6" /></button>
                    </div>
                    <nav className="p-4 space-y-2">
                        <NavLink view="home" icon={<HomeIcon className="h-5 w-5" />}>Dashboard</NavLink>
                        <NavLink view="jobs" icon={<PlusCircleIcon className="h-5 w-5" />}>Manage Jobs</NavLink>
                        <NavLink view="search" icon={<SearchIcon className="h-5 w-5" />}>Search Alumni</NavLink>
                        <NavLink view="events" icon={<CalendarIcon className="h-5 w-5" />}>Career Events</NavLink>
                        <NavLink view="sponsorships" icon={<HeartIcon className="h-5 w-5" />}>Sponsorships</NavLink>
                    </nav>
                </aside>

                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="bg-white shadow-sm p-4 lg:hidden flex justify-between items-center">
                        <h1 className="text-xl font-bold text-gray-800">Recruiter Panel</h1>
                        <button onClick={() => setSidebarOpen(true)} className="text-gray-600"><MenuIcon className="h-6 w-6" /></button>
                    </header>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                        {renderView()}
                    </main>
                </div>
            </div>
        </>
    );
};

export default DashBoardForExternalStakeHolder;
