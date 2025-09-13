import React, { useState } from 'react';
import Header from '../Component/common/Header';

// --- DUMMY DATA ---
const dashboardStats = {
    totalAlumni: '1,50,000+',
    totalDonations: '₹12.5 Cr',
    placementsThisYear: 850,
    eventParticipation: '22,000+',
};

// New data for graphs
const alumniGrowthData = [
    { year: '2021', count: 120 }, { year: '2022', count: 135 }, { year: '2023', count: 140 },
    { year: '2024', count: 145 }, { year: '2025', count: 150 },
];

const donationHistoryData = [
    { year: '2021', amount: 8.5 }, { year: '2022', amount: 9.8 }, { year: '2023', amount: 11.2 },
    { year: '2024', amount: 10.5 }, { year: '2025', amount: 12.5 },
];

const placementHistoryData = [
    { year: '2021', count: 750 }, { year: '2022', count: 810 }, { year: '2023', count: 820 },
    { year: '2024', count: 880 }, { year: '2025', count: 850 },
];

const eventParticipationHistoryData = [
    { year: '2021', count: 15 }, { year: '2022', count: 18 }, { year: '2023', count: 20 },
    { year: '2024', count: 25 }, { year: '2025', count: 22 },
];

const donationInflowData = [
    { month: 'Apr', amount: 80 }, { month: 'May', amount: 95 }, { month: 'Jun', amount: 150 },
    { month: 'Jul', amount: 120 }, { month: 'Aug', amount: 250 }, { month: 'Sep', amount: 180 }
];

const fundAllocationData = [
    { id: 1, fund: 'Student Scholarship Fund', allocated: '₹4.2 Cr', status: 'Ongoing' },
    { id: 2, fund: 'Campus Innovation Hub', allocated: '₹3.5 Cr', status: 'Ongoing' },
    { id: 3, fund: 'Sports Infrastructure', allocated: '₹2.8 Cr', status: 'Completed' },
    { id: 4, fund: 'Global Alumni Chapters', allocated: '₹2.0 Cr', status: 'Planning' },
];

const pendingApprovalsData = [
    { id: 1, type: 'Scholarship', title: 'Merit-Based Engineering Scholarship 2026', details: 'Proposed budget: ₹50 Lakhs for 100 students.', submittedBy: 'Finance Committee' },
    { id: 2, type: 'Mentorship Program', title: 'Global Leaders Mentorship Initiative', details: 'Connects 50 students with CXOs in Fortune 500 companies.', submittedBy: 'Alumni Relations' },
    { id: 3, type: 'Award', title: 'Distinguished Alumni Award for Social Impact', details: 'Annual award to recognize outstanding contributions to society.', submittedBy: 'Faculty Council' },
];

const placementStats = {
    placementRate: '92%',
    averagePackage: '₹18 LPA',
    topRecruiters: ['Google', 'Microsoft', 'Tata Group', 'Reliance Industries', 'ISRO']
};

const currentPlacementProgressData = {
    studentsPlaced: 650,
    totalStudents: 950,
    companiesVisited: 45,
    ongoingInterviews: 120,
};

const currentYearCompanyData = [
    { name: 'Google' }, { name: 'Microsoft' }, { name: 'Tata Consultancy Services' },
    { name: 'Reliance Industries' }, { name: 'ISRO' }, { name: 'Infosys' },
    { name: 'Wipro' }, { name: 'HDFC Bank' }
];


// --- SVG ICONS ---
const HomeIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>);
const DollarSignIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>);
const CheckSquareIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>);
const SendIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>);
const BarChartIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" /></svg>);
const BellIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>);
const MenuIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>);
const XIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>);

// --- VIEWS / SECTIONS ---

const GraphCard = ({ title, currentValue, data, color, unit = '' }) => {
    const maxValue = Math.max(...data.map(d => d.value));
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-3xl font-bold text-gray-800">{currentValue}</p>
            <div className="h-24 mt-4 flex items-end justify-around border-t pt-2">
                {data.map((d, index) => (
                    <div key={index} className="flex flex-col items-center group">
                        <div
                            className={`w-7 rounded-t-sm transition-all duration-300 ${color} group-hover:opacity-80`}
                            style={{ height: `${(d.value / maxValue) * 100}%` }}
                            title={`${d.label}: ${d.value}${unit}`}
                        ></div>
                        <span className="text-xs mt-1 text-gray-400">{d.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DashboardOverview = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Overall Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GraphCard
                title="Total Alumni (in Thousands)"
                currentValue={dashboardStats.totalAlumni}
                data={alumniGrowthData.map(d => ({ label: d.year.slice(-2), value: d.count }))}
                color="bg-blue-500"
                unit="K"
            />
            <GraphCard
                title="Total Donations (in Cr)"
                currentValue={dashboardStats.totalDonations}
                data={donationHistoryData.map(d => ({ label: d.year.slice(-2), value: d.amount }))}
                color="bg-green-500"
                unit=" Cr"
            />
            <GraphCard
                title="Placements This Year"
                currentValue={dashboardStats.placementsThisYear}
                data={placementHistoryData.map(d => ({ label: d.year.slice(-2), value: d.count }))}
                color="bg-yellow-500"
            />
            <GraphCard
                title="Event Participation (in Thousands)"
                currentValue={dashboardStats.eventParticipation}
                data={eventParticipationHistoryData.map(d => ({ label: d.year.slice(-2), value: d.count }))}
                color="bg-purple-500"
                unit="K"
            />
        </div>
    </div>
);


const DonationTracking = () => (
    <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Donation Tracking</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 text-gray-700">Donation Inflow (Last 6 Months)</h3>
                {/* Chart Placeholder */}
                <div className="h-64 flex items-end justify-around p-4 border rounded-lg">
                    {donationInflowData.map(d => (
                        <div key={d.month} className="flex flex-col items-center">
                            <div className="w-8 bg-blue-500 rounded-t-md" style={{ height: `${d.amount / 300 * 100}%` }}></div>
                            <span className="text-xs mt-2">{d.month}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 text-gray-700">Fund Allocation</h3>
                <ul className="space-y-3">
                    {fundAllocationData.map(item => (
                        <li key={item.id}>
                            <div className="flex justify-between text-sm">
                                <span className="font-medium text-gray-700">{item.fund}</span>
                                <span className="font-bold text-gray-800">{item.allocated}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const Approvals = () => {
    const [approvals, setApprovals] = useState(pendingApprovalsData);

    const handleAction = (id, action) => {
        alert(`${action} action taken for item ${id}.`);
        setApprovals(approvals.filter(a => a.id !== id));
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Pending Approvals</h2>
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                {approvals.length > 0 ? approvals.map(item => (
                    <div key={item.id} className="p-4 border rounded-lg">
                        <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${item.type === 'Scholarship' ? 'bg-green-100 text-green-800' : item.type === 'Award' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>{item.type}</span>
                        <h3 className="font-bold text-lg text-gray-800 mt-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.details}</p>
                        <p className="text-xs text-gray-400 mt-2">Submitted by: {item.submittedBy}</p>
                        <div className="flex space-x-2 mt-4">
                            <button onClick={() => handleAction(item.id, 'Approved')} className="bg-green-500 text-white px-4 py-1 rounded-md text-sm hover:bg-green-600">Approve</button>
                            <button onClick={() => handleAction(item.id, 'Rejected')} className="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:bg-red-600">Reject</button>
                        </div>
                    </div>
                )) : <p className="text-gray-500">No pending approvals.</p>}
            </div>
        </div>
    );
};


const ProgramMonitoring = () => {
    const placementProgressPercent = Math.round((currentPlacementProgressData.studentsPlaced / currentPlacementProgressData.totalStudents) * 100);
    const maxPlacements = Math.max(...placementHistoryData.map(d => d.count));

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Program Monitoring</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Left side: Graph and Top Recruiters */}
                <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg text-gray-700 mb-1">Placement History</h3>
                    <p className="text-sm text-gray-500 mb-4">Annual student placements</p>
                    <div className="h-64 flex items-end justify-around p-4 border rounded-lg">
                        {placementHistoryData.map(d => (
                            <div key={d.year} className="flex flex-col items-center group w-1/5">
                                <div className="relative w-8">
                                    <div
                                        className="w-full bg-yellow-500 rounded-t-md transition-all duration-300 group-hover:bg-yellow-600"
                                        style={{ height: `${(d.count / maxPlacements) * 100}%` }}
                                    ></div>
                                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">{d.count}</span>
                                </div>
                                <span className="text-xs mt-2">{d.year}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6">
                        <h4 className="font-semibold text-center text-gray-600">All-Time Top Recruiters</h4>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                            {placementStats.topRecruiters.map(c => <span key={c} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">{c}</span>)}
                        </div>
                    </div>
                </div>

                {/* Right side: Current Progress */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg text-gray-700 mb-4">Current Year (2025) Progress</h3>

                    {/* Progress Bar */}
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">Students Placed</span>
                            <span className="text-sm font-medium text-gray-700">{currentPlacementProgressData.studentsPlaced} / {currentPlacementProgressData.totalStudents}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${placementProgressPercent}%` }}></div>
                        </div>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                        <div>
                            <p className="text-2xl font-bold text-blue-600">{placementStats.placementRate}</p>
                            <p className="text-sm text-gray-500">Placement Rate</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-blue-600">{placementStats.averagePackage}</p>
                            <p className="text-sm text-gray-500">Average Package</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-blue-600">{currentPlacementProgressData.companiesVisited}</p>
                            <p className="text-sm text-gray-500">Companies Visited</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-blue-600">{currentPlacementProgressData.ongoingInterviews}</p>
                            <p className="text-sm text-gray-500">Ongoing Interviews</p>
                        </div>
                    </div>

                    <div className="mt-6 border-t pt-4">
                        <h4 className="font-semibold text-gray-600 text-center">Recruiting Partners (2025)</h4>
                        <div className="flex flex-wrap justify-center gap-2 mt-2">
                            {currentYearCompanyData.map(c => <span key={c.name} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">{c.name}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Announcements = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (!subject || !message) {
            alert('Please fill out both subject and message.');
            return;
        }
        alert(`Announcement Sent!\nSubject: ${subject}`);
        setSubject('');
        setMessage('');
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Platform-Wide Announcements</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div>
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="subject">Subject</label>
                    <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mt-4">
                    <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
                    <textarea id="message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                </div>
                <div className="mt-4 text-right">
                    <button onClick={handleSend} className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 flex items-center ml-auto">
                        <SendIcon className="h-4 w-4 mr-2" /> Send to All Members & Faculty
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Helper icons for dashboard stats ---
const UsersIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg>);
const BriefcaseIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>);
const CalendarIcon = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>);


// --- MAIN APP COMPONENT ---
const DashBoardForHeadAuthority = () => {
    const [activeView, setActiveView] = useState('dashboard');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const renderView = () => {
        switch (activeView) {
            case 'dashboard': return <DashboardOverview />;
            case 'donations': return <DonationTracking />;
            case 'approvals': return <Approvals />;
            case 'monitoring': return <ProgramMonitoring />;
            case 'announcements': return <Announcements />;
            default: return <DashboardOverview />;
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
                        <h1 className="text-xl font-bold">Authority Panel</h1>
                        <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white"><XIcon className="h-6 w-6" /></button>
                    </div>
                    <nav className="p-4 space-y-2">
                        <NavLink view="dashboard" icon={<HomeIcon className="h-5 w-5" />}>Dashboard</NavLink>
                        <NavLink view="donations" icon={<DollarSignIcon className="h-5 w-5" />}>Donations</NavLink>
                        <NavLink view="approvals" icon={<CheckSquareIcon className="h-5 w-5" />}>Approvals</NavLink>
                        <NavLink view="monitoring" icon={<BarChartIcon className="h-5 w-5" />}>Monitoring</NavLink>
                        <NavLink view="announcements" icon={<BellIcon className="h-5 w-5" />}>Announcements</NavLink>
                    </nav>
                </aside>

                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="bg-white shadow-sm p-4 lg:hidden flex justify-between items-center">
                        <h1 className="text-xl font-bold text-gray-800">Authority Panel</h1>
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

export default DashBoardForHeadAuthority;

