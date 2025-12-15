import React from "react";
import { userProfile } from "../data/mockData";
import {
  UserCircleIcon,
  Settings02Icon,
  Logout03Icon,
  Mail01Icon,
  Call02Icon,
  Building03Icon,
  Camera01Icon,
  SecurityCheckIcon,
  Notification03Icon,
} from "hugeicons-react";

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="h-32 bg-gradient-to-r from-primary-500 to-primary-600 relative">
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <img
                      src={userProfile.avatar}
                      alt={userProfile.name}
                      className="w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
                    />
                    <button className="absolute bottom-0 right-0 bg-gray-900 text-white p-1.5 rounded-full hover:bg-gray-800 transition-colors border-2 border-white">
                      <Camera01Icon size={14} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-16 pb-8 px-6 text-center">
                <h2 className="text-xl font-bold text-gray-900">
                  {userProfile.name}
                </h2>
                <p className="text-primary-600 font-medium text-sm mb-1">
                  {userProfile.role}
                </p>
                <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
                  <Building03Icon size={14} />
                  {userProfile.department}
                </p>
              </div>

              <div className="border-t border-gray-100 p-4">
                <nav className="space-y-1">
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-primary-700 bg-primary-50 rounded-xl transition-colors">
                    <UserCircleIcon size={20} />
                    Personal Information
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors">
                    <SecurityCheckIcon size={20} />
                    Security
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors">
                    <Notification03Icon size={20} />
                    Notifications
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl transition-colors">
                    <Settings02Icon size={20} />
                    Settings
                  </button>
                </nav>
              </div>

              <div className="border-t border-gray-100 p-4">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors">
                  <Logout03Icon size={20} />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Personal Info Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">
                  Personal Information
                </h3>
                <button className="text-sm font-medium text-primary-600 hover:text-primary-700">
                  Edit
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="p-3 bg-gray-50 rounded-xl text-gray-900 text-sm font-medium border border-gray-100">
                    {userProfile.name}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Role
                  </label>
                  <div className="p-3 bg-gray-50 rounded-xl text-gray-900 text-sm font-medium border border-gray-100">
                    {userProfile.role}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="p-3 bg-gray-50 rounded-xl text-gray-900 text-sm font-medium border border-gray-100 flex items-center gap-2">
                    <Mail01Icon size={16} className="text-gray-400" />
                    {userProfile.email}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="p-3 bg-gray-50 rounded-xl text-gray-900 text-sm font-medium border border-gray-100 flex items-center gap-2">
                    <Call02Icon size={16} className="text-gray-400" />
                    {userProfile.phone}
                  </div>
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Department
                  </label>
                  <div className="p-3 bg-gray-50 rounded-xl text-gray-900 text-sm font-medium border border-gray-100 flex items-center gap-2">
                    <Building03Icon size={16} className="text-gray-400" />
                    {userProfile.department}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  12
                </div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Sessions Completed
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  4
                </div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Upcoming Bookings
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  2
                </div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Events Registered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
