import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DashboardPage from "./pages/DashboardPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import ClassesPage from "./pages/ClassesPage";
import EventsPage from "./pages/EventsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 antialiased">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/bookings" element={<MyBookingsPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
