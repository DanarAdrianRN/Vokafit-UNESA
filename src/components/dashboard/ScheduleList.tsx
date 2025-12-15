import React, { useState } from "react";
import { gymClasses } from "../../data/mockData";
import {
  Clock01Icon,
  UserIcon,
  FireIcon,
  FilterHorizontalIcon,
} from "hugeicons-react";
import clsx from "clsx";

const ScheduleList: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Yoga", "Cardio", "Strength", "HIIT"];

  const filteredClasses =
    filter === "All"
      ? gymClasses
      : gymClasses.filter((c) => c.category === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Today's Classes</h2>
          <p className="text-gray-500">
            Join a group session led by expert instructors
          </p>
        </div>

        <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={clsx(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                filter === cat
                  ? "bg-white text-primary-600 shadow-sm ring-1 ring-gray-200"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {filteredClasses.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl p-4 border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300 flex flex-col sm:flex-row gap-4"
          >
            <div className="relative w-full sm:w-32 h-32 sm:h-auto flex-shrink-0 rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-primary-600">
                {item.category}
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <span
                  className={clsx(
                    "px-2.5 py-0.5 rounded-full text-xs font-medium",
                    item.spotsLeft > 0
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  )}
                >
                  {item.spotsLeft > 0 ? `${item.spotsLeft} spots left` : "Full"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1.5">
                  <Clock01Icon size={16} className="text-gray-400" />
                  <span>
                    {item.time} ({item.duration})
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <UserIcon size={16} className="text-gray-400" />
                  <span>{item.instructor}</span>
                </div>
              </div>

              <div className="mt-auto">
                <button
                  disabled={item.spotsLeft === 0}
                  className={clsx(
                    "w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    item.spotsLeft > 0
                      ? "bg-gray-900 text-white hover:bg-primary-600"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  )}
                >
                  {item.spotsLeft > 0 ? "Book Now" : "Join Waitlist"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleList;
