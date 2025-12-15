import React from "react";
import EventCard from "../components/dashboard/EventCard";

const EventsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sports Events</h1>
        <p className="text-gray-500">
          Participate in university-wide sports competitions and events.
        </p>
      </div>
      <div className="max-w-3xl">
        <EventCard />
      </div>
    </div>
  );
};

export default EventsPage;
