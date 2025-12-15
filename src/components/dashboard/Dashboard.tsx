import React from "react";
import BookingPanel from "./BookingPanel";
import ScheduleList from "./ScheduleList";
import EventCard from "./EventCard";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section with Booking Panel */}
      <div className="relative bg-secondary-900 pb-32">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://pixabay.com/get/g94f8634708aa41cbc9fcdb5caee4d47d2ef73787781d18dbb496337d235e6fbf36b99cbd4506e946f9b68dcd7df240535ac7f1a46517bd9ef3c0ba4c1dfa0740_1280.png"
            alt="Gym Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/50 to-secondary-900"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
          <div className="max-w-3xl mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Your Fitness Journey <br />
              <span className="text-primary-500">Starts Here</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Book gym sessions, join classes, and participate in sports events
              at Fakultas Vokasi UNESA.
            </p>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-12">
        {/* Booking Panel Overlapping Hero */}
        <div className="mb-12">
          <BookingPanel />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Schedule */}
          <div className="lg:col-span-2">
            <ScheduleList />
          </div>

          {/* Sidebar - Events */}
          <div className="lg:col-span-1">
            <EventCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
