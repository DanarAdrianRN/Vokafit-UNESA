import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu01Icon, Cancel01Icon } from "hugeicons-react";
import clsx from "clsx";
import { userProfile } from "../../data/mockData";
import NotificationDropdown from "./NotificationDropdown";

const Header: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Tutup menu mobile saat pindah route
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                Voka<span className="text-primary-500">Fit</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={clsx(
                "font-medium px-1 pt-1 transition-colors border-b-2",
                isActive("/")
                  ? "text-primary-600 border-primary-500"
                  : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"
              )}
            >
              Dashboard
            </Link>
            <Link
              to="/bookings"
              className={clsx(
                "font-medium px-1 pt-1 transition-colors border-b-2",
                isActive("/bookings")
                  ? "text-primary-600 border-primary-500"
                  : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"
              )}
            >
              My Bookings
            </Link>
            <Link
              to="/classes"
              className={clsx(
                "font-medium px-1 pt-1 transition-colors border-b-2",
                isActive("/classes")
                  ? "text-primary-600 border-primary-500"
                  : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"
              )}
            >
              Classes
            </Link>
            <Link
              to="/events"
              className={clsx(
                "font-medium px-1 pt-1 transition-colors border-b-2",
                isActive("/events")
                  ? "text-primary-600 border-primary-500"
                  : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300"
              )}
            >
              Events
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <NotificationDropdown />

            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900">
                  {userProfile.name}
                </p>
                <p className="text-xs text-gray-500">
                  {userProfile.department}
                </p>
              </div>
              <Link to="/profile" className="relative group">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover:border-primary-200 transition-all"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <Cancel01Icon size={24} />
              ) : (
                <Menu01Icon size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <div
        className={clsx(
          "md:hidden border-t border-gray-100 bg-white overflow-hidden transition-[max-height] duration-300",
          mobileOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            to="/"
            className={clsx(
              "block py-2 px-2 rounded-lg font-medium transition",
              isActive("/")
                ? "text-primary-600 bg-primary-50"
                : "text-gray-700 hover:bg-gray-50"
            )}
          >
            Dashboard
          </Link>
          <Link
            to="/bookings"
            className={clsx(
              "block py-2 px-2 rounded-lg font-medium transition",
              isActive("/bookings")
                ? "text-primary-600 bg-primary-50"
                : "text-gray-700 hover:bg-gray-50"
            )}
          >
            My Bookings
          </Link>
          <Link
            to="/classes"
            className={clsx(
              "block py-2 px-2 rounded-lg font-medium transition",
              isActive("/classes")
                ? "text-primary-600 bg-primary-50"
                : "text-gray-700 hover:bg-gray-50"
            )}
          >
            Classes
          </Link>
          <Link
            to="/events"
            className={clsx(
              "block py-2 px-2 rounded-lg font-medium transition",
              isActive("/events")
                ? "text-primary-600 bg-primary-50"
                : "text-gray-700 hover:bg-gray-50"
            )}
          >
            Events
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
