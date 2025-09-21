import React from 'react';
import { FaIdCard, FaKey, FaStar, FaQrcode, FaShieldAlt, FaUsers, FaWrench } from 'react-icons/fa';
import { MdNfc, MdAdminPanelSettings } from "react-icons/md";

// A small component for feature cards to keep the code DRY
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className="text-4xl text-blue-600 mb-3">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

// A component for the different membership cards
const MembershipCard = ({ title, userType, perks, color = 'blue' }) => (
    <div className={`border-l-4 border-${color}-500 bg-white p-6 rounded-lg shadow-lg`}>
        <h3 className={`text-2xl font-bold text-${color}-600`}>{title}</h3>
        <p className="text-gray-500 font-medium mb-4">{userType}</p>
        <ul className="space-y-2">
            {perks.map((perk, index) => (
                <li key={index} className="flex items-center">
                    <FaStar className={`text-${color}-400 mr-2 flex-shrink-0`} />
                    <span className="text-gray-700">{perk}</span>
                </li>
            ))}
        </ul>
    </div>
);

const SmartId = () => {
  return (
    <section className='min-h-[calc(100vh-64px)] bg-gray-50 px-4 sm:px-8 md:px-12 lg:px-20 py-12'>
        <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                The SangJog <span className='text-blue-600'>Smart ID</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
                Your all-in-one digital and physical pass for a connected campus and alumni experience. One card for identity, access, payments, and exclusive perks.
            </p>
        </div>

        {/* Features Section */}
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Unlock a Seamless Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard icon={<FaKey />} title="Unified Access">
                    One tap or scan for entry to the library, labs, career fairs, and exclusive events.
                </FeatureCard>
                <FeatureCard icon={<FaStar />} title="Exclusive Perks">
                    Enjoy special offers, merchandise discounts, and early notifications for all events.
                </FeatureCard>
                <FeatureCard icon={<FaShieldAlt />} title="Secure & Verifiable">
                    Integrated with advanced encryption for secure identity verification and transactions.
                </FeatureCard>
                <FeatureCard icon={<FaUsers />} title="Effortless Networking">
                    Easily connect with peers, mentors, and industry leaders at official gatherings.
                </FeatureCard>
                 <FeatureCard icon={<FaIdCard />} title="Integrated Systems">
                    Seamlessly works with payment gateways, mentorship portals, and donation systems.
                </FeatureCard>
                 <FeatureCard icon={<FaWrench />} title="Account Management">
                    Quickly recover your lost account or manage your profile right from the platform.
                </FeatureCard>
            </div>
        </div>

        {/* Card Tiers Section */}
        <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">A Card for Every Role</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                <MembershipCard 
                    title="Smart Core Membership"
                    userType="For Alumni & Students"
                    perks={[
                        "Help to recover lost account",
                        "Permission to attend events & programs",
                        "Early notification of all events",
                        "Extra offers from the merchandise shop"
                    ]}
                    color="blue"
                />
                <MembershipCard 
                    title="Smart Faculty Membership"
                    userType="For Esteemed Faculty"
                    perks={[
                        "Help to recover lost account",
                        "Free access to specific events",
                        "Exciting discounts on merchandise",
                        "Priority access to select resources"
                    ]}
                    color="green"
                />
                <div className="lg:col-span-2">
                 <MembershipCard 
                    title="Smart Head Authority"
                    userType="For Institute Heads & Admins"
                    perks={[
                        "Full power to suspend, block, and recover any user account",
                        "Access to platform-wide analytics and dashboards",
                        "Administrative control over events and user permissions",
                    ]}
                    color="purple"
                />
                </div>
            </div>
        </div>

        {/* Technology Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Powered by Modern Technology</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <MdNfc className="text-6xl text-blue-500"/>
                    <div className="ml-4 text-left">
                        <h4 className="text-xl font-bold">NFC Enabled</h4>
                        <p className="text-gray-600">Tap-and-go for quick and secure access.</p>
                    </div>
                </div>
                <div className="flex items-center bg-white p-4 rounded-lg shadow-md">
                    <FaQrcode className="text-6xl text-gray-700"/>
                    <div className="ml-4 text-left">
                        <h4 className="text-xl font-bold">QR Code Support</h4>
                        <p className="text-gray-600">Scan your digital ID from your phone.</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  );
}

export default SmartId;