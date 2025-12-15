import React from "react";
import { sportEvents } from "../../data/mockData";
import {
  Calendar01Icon,
  Location01Icon,
  ArrowRight01Icon,
} from "hugeicons-react";
import { Link } from "react-router-dom";

const EventCard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Event Mendatang</h2>
          <p className="text-gray-500">
            Jangan lewatkan keseruan event olahraga kampus
          </p>
        </div>
        <Link
          to="/events"
          className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1"
        >
          Lihat Semua <ArrowRight01Icon size={16} />
        </Link>
      </div>

      <div className="grid gap-6">
        {sportEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-white/90">
                  <div className="flex items-center gap-1.5">
                    <Calendar01Icon size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Location01Icon size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {event.description}
              </p>
              <button className="w-full py-2.5 border border-primary-200 text-primary-600 rounded-xl font-medium hover:bg-primary-50 transition-colors">
                Daftar Minat
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
