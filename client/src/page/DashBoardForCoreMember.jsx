import React, { useState, useMemo } from 'react';
import Header from '../Component/common/Header';
import { NavLink } from 'react-router-dom';

// --- DUMMY DATA ---
// Data specific to a logged-in Core Member.
const coreMemberProfile = {
    name: 'Rohan Mehta',
    gradYear: 2019,
    program: 'Mechanical Engineering',
    currentJob: 'Product Designer',
    company: 'Tata Motors',
    location: 'Pune, India',
    bio: 'Specializing in automotive design and sustainable engineering. A proud core member, happy to help our community.',
    profilePic: 'https://placehold.co/100x100/e2e8f0/64748b?text=RM'
};

const connectionsData = [
    { id: 1, name: 'Aarav Sharma', gradYear: 2018, currentJob: 'Software Engineer at Google' },
    { id: 2, name: 'Priya Patel', gradYear: 2020, currentJob: 'Marketing Manager at Innovate Inc.' },
    { id: 5, name: 'Vikram Singh', gradYear: 2017, currentJob: 'Project Manager at L&T' },
];

const registeredEventsData = [
    { id: 1, title: 'Annual Alumni Meet 2025', date: '2025-11-15', status: 'Registered' },
    { id: 6, title: 'Core Members Exclusive Dinner', date: '2025-10-25', status: 'Registered' },
];

const donationHistoryData = [
    { id: 1, cause: 'Student Scholarship Fund', amount: '₹15,000', date: '2025-08-10' },
    { id: 2, cause: 'New Engineering Lab Infrastructure', amount: '₹25,000', date: '2024-11-20' },
];

const mentorshipApplication = {
    status: 'Active',
    role: 'Mentor',
    mentee: 'Karan Sharma (Student)',
    topic: 'Automotive Design Careers'
};

// --- SVG ICONS ---
const HomeIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>);
const LinkIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" /></svg>);
const CalendarIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>);
const HeartIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>);
const BriefcaseIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>);
const StarIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>);
const MenuIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>);
const XIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>);
const AwardIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>);
const LogOutIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>);


// --- Main Views / Sections ---

const MembershipCard = () => (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-2xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full filter blur-xl"></div>
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-500/20 rounded-full filter blur-2xl"></div>

        <div className="relative z-10">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs tracking-widest uppercase text-gray-400">Premium Member</p>
                    <h3 className="text-2xl font-bold">{coreMemberProfile.name}</h3>
                </div>
                <AwardIcon className="w-10 h-10 text-yellow-400" />
            </div>
            <div className="mt-8">
                <p className="text-sm text-gray-400">Member Since</p>
                <p className="font-mono text-lg">{new Date(coreMemberProfile.gradYear + 2, 5, 1).getFullYear()}</p>
            </div>
        </div>
    </div>
);

const DashboardOverview = () => {
    const [profile, setProfile] = useState(coreMemberProfile);
    const [isSaved, setIsSaved] = useState(false);

    const handleSave = () => {
        setIsSaved(true);
        // In a real app, you'd also send this data to a server
        setTimeout(() => setIsSaved(false), 3000);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [id]: value
        }));
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Core Member Dashboard</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <MembershipCard />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg text-gray-700 mb-4">Your Benefits</h3>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-center"><StarIcon className="w-4 h-4 mr-2 text-yellow-500" />Early event notifications</li>
                        <li className="flex items-center"><StarIcon className="w-4 h-4 mr-2 text-yellow-500" />Shop discounts</li>
                        <li className="flex items-center"><StarIcon className="w-4 h-4 mr-2 text-yellow-500" />Exclusive event access</li>
                        <li className="flex items-center"><StarIcon className="w-4 h-4 mr-2 text-yellow-500" />Career recovery support</li>
                    </ul>
                </div>
            </div>

            {/* Merged Profile Update Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Your Profile</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    {isSaved && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert"><p>Profile updated successfully!</p></div>}
                    <div className="flex items-center mb-6">
                        <img src={profile.profilePic} alt="Profile" className="h-24 w-24 rounded-full mr-6" />
                        <div>
                            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-300">Change Photo</button>
                            <div className="mt-2 flex items-center bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                                <AwardIcon className="w-4 h-4 mr-1" />
                                CORE MEMBER
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Full Name</label>
                            <input type="text" id="name" value={profile.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="currentJob">Current Job Title</label>
                            <input type="text" id="currentJob" value={profile.currentJob} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="company">Company</label>
                            <input type="text" id="company" value={profile.company} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="location">Location</label>
                            <input type="text" id="location" value={profile.location} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="bio">Bio</label>
                            <textarea id="bio" rows="4" value={profile.bio} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                        </div>
                    </div>
                    <div className="mt-6 text-right">
                        <button onClick={handleSave} className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MyConnections = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Connections</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="space-y-4">
                {connectionsData.map(alumni => (
                    <div key={alumni.id} className="p-4 border rounded-lg flex items-center justify-between">
                        <div>
                            <p className="font-bold text-gray-800">{alumni.name} ({alumni.gradYear})</p>
                            <p className="text-sm text-gray-500">{alumni.currentJob}</p>
                        </div>
                        <button className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md text-sm hover:bg-gray-300">Message</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const MyEvents = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Events & Internships</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-gray-700 mb-4">Your Registered Events</h3>
            <div className="space-y-4">
                {registeredEventsData.map(event => (
                    <div key={event.id} className="p-4 border rounded-lg flex justify-between items-center">
                        <div>
                            <h4 className="font-bold text-gray-800">{event.title}</h4>
                            <p className="text-sm text-gray-500">Date: {event.date}</p>
                        </div>
                        <button className="bg-red-100 text-red-700 px-4 py-1 rounded-md text-sm hover:bg-red-200">Cancel Registration</button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const DonationHistory = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Donation History</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="p-4">Date</th>
                            <th className="p-4">Cause</th>
                            <th className="p-4 text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donationHistoryData.map(donation => (
                            <tr key={donation.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 text-gray-600">{donation.date}</td>
                                <td className="p-4 font-medium text-gray-800">{donation.cause}</td>
                                <td className="p-4 text-gray-600 text-right">{donation.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const Mentorship = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Mentorship</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-gray-700 mb-4">Application Status</h3>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p><span className="font-semibold">Status:</span> <span className="text-green-600 font-medium">{mentorshipApplication.status}</span></p>
                <p><span className="font-semibold">Role:</span> {mentorshipApplication.role}</p>
                <p><span className="font-semibold">Mentee:</span> {mentorshipApplication.mentee}</p>
                <p><span className="font-semibold">Topic:</span> {mentorshipApplication.topic}</p>
            </div>
        </div>
    </div>
);

// --- App Component (Main Layout) ---
const DashBoardForCoreMember = () => {
    const [activeView, setActiveView] = useState('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const renderView = () => {
        switch (activeView) {
            case 'dashboard': return <DashboardOverview />;
            case 'connections': return <MyConnections />;
            case 'events': return <MyEvents />;
            case 'donations': return <DonationHistory />;
            case 'mentorship': return <Mentorship />;
            default: return <DashboardOverview />;
        }
    };

    const NavLink = ({ view, icon, children }) => (
        <button onClick={() => { setActiveView(view); setSidebarOpen(false); }}
            className={`w-full flex items-center p-3 rounded-lg transition-colors cursor-pointer ${activeView === view ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
            {icon}
            <span className="ml-4">{children}</span>
        </button>
    );

    return (
        <>
        <Header/>
            <div className="flex h-[calc(100vh-64px)] bg-gray-100">
                <aside className={`bg-gray-800 text-white w-64 fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 flex flex-col`}>
                    <div className="p-4 flex justify-between items-center border-b border-gray-700">
                        <h1 className="text-xl font-bold">Core Portal</h1>
                        <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white"><XIcon className="h-6 w-6" /></button>
                    </div>
                    <nav className="p-4 space-y-2 flex-grow">
                        <NavLink view="dashboard"  icon={<HomeIcon className="h-5 w-5" />} >Dashboard & Profile</NavLink>
                        <NavLink view="connections" icon={<LinkIcon className="h-5 w-5" />} >Connections</NavLink>
                        <NavLink view="events" icon={<CalendarIcon className="h-5 w-5" />} >My Events</NavLink>
                        <NavLink view="donations" icon={<HeartIcon className="h-5 w-5" />} >Donation History</NavLink>
                        <NavLink view="mentorship" icon={<BriefcaseIcon className="h-5 w-5" />} >My Mentorship</NavLink>
                    </nav>
                    <div className="p-4 border-t border-gray-700">
                        <button
                            onClick={() => alert('Logged out!')}
                            className="w-full flex items-center cursor-pointer p-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
                        >
                            <LogOutIcon className="h-5 w-5" />
                            <span className="ml-4">Logout</span>
                        </button>
                    </div>
                </aside>

                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="bg-white shadow-sm p-4 lg:hidden flex justify-between items-center">
                        <h1 className="text-xl font-bold text-gray-800">Core Portal</h1>
                        <button onClick={() => setSidebarOpen(true)} className="text-gray-600"><MenuIcon className="h-6 w-6" /></button>
                    </header>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                        {renderView()}
                    </main>
                </div>
            </div>
        </>
    );
}

export default DashBoardForCoreMember;

