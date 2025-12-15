import React, { useState } from "react";
import {
  Calendar03Icon,
  Time01Icon,
  UserGroupIcon,
  ArrowRight01Icon,
} from "hugeicons-react";
import { gymRooms } from "../../data/mockData";
import { format } from "date-fns";

const BookingPanel: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(
    format(new Date(), "yyyy-MM-dd")
  );
  const [selectedTime, setSelectedTime] = useState<string>("08:00");
  const [selectedRoom, setSelectedRoom] = useState<string>(gymRooms[0].id);
  const [capacity, setCapacity] = useState<number>(1);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
            <Calendar03Icon size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Booking Cepat Sesi
            </h2>
            <p className="text-sm text-gray-500">
              Pesan jadwal gym Anda dengan cepat dan mudah
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Date Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Tanggal
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Calendar03Icon size={18} />
              </div>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent sm:text-sm transition-shadow"
              />
            </div>
          </div>

          {/* Time Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Waktu
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Time01Icon size={18} />
              </div>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent sm:text-sm appearance-none bg-white transition-shadow"
              >
                <option value="08:00">08:00</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </select>
            </div>
          </div>

          {/* Room Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Fasilitas
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <UserGroupIcon size={18} />
              </div>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="block w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent sm:text-sm appearance-none bg-white transition-shadow"
              >
                {gymRooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Capacity/People */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Jumlah Orang
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="10"
                value={capacity}
                onChange={(e) => setCapacity(parseInt(e.target.value))}
                className="block w-full px-3 py-2.5 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent sm:text-sm transition-shadow"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-0.5">
            Cek Ketersediaan
            <ArrowRight01Icon className="ml-2 -mr-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPanel;
