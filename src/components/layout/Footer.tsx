import React from "react";
import {
  InstagramIcon,
  Facebook02Icon,
  TwitterIcon,
  Mail01Icon,
  Call02Icon,
} from "hugeicons-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                V
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Voka<span className="text-primary-500">Fit</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The official gym booking and sports management platform for
              Fakultas Vokasi UNESA. Stay fit, stay healthy.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary-400 transition-colors"
                >
                  Book a Session
                </Link>
              </li>
              <li>
                <Link
                  to="/classes"
                  className="hover:text-primary-400 transition-colors"
                >
                  Class Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-primary-400 transition-colors"
                >
                  Sports Events
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Facility Map
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-400 transition-colors"
                >
                  Contact Admin
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Call02Icon size={16} className="text-primary-500" />
                <span>+62 31 1234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail01Icon size={16} className="text-primary-500" />
                <span>vokafit@unesa.ac.id</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <InstagramIcon size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook02Icon size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <TwitterIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Fakultas Vokasi UNESA. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
