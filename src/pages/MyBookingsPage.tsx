import React from "react";
import { myBookings } from "../data/mockData";
import { Calendar03Icon, Location01Icon, Time01Icon } from "hugeicons-react";
import clsx from "clsx";

const MyBookingsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Bookings</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {myBookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={booking.image}
                alt={booking.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {booking.title}
                </h3>
                <span
                  className={clsx(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    booking.status === "Confirmed"
                      ? "bg-green-100 text-green-700"
                      : booking.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  )}
                >
                  {booking.status}
                </span>
              </div>

              <div className="space-y-3 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar03Icon size={18} className="text-primary-500" />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Time01Icon size={18} className="text-primary-500" />
                  <span>{booking.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Location01Icon size={18} className="text-primary-500" />
                  <span>{booking.location}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 py-2 border border-gray-200 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                  Reschedule
                </button>
                <button className="flex-1 py-2 border border-red-100 text-red-600 rounded-xl font-medium hover:bg-red-50 transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {myBookings.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">You have no upcoming bookings.</p>
          <button className="mt-4 text-primary-600 font-medium hover:text-primary-700">
            Book a session now
          </button>
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
