import { addDays, format } from 'date-fns';
import profile from "../assets/profile.jpg";
import yogaFlowImg from "../assets/yoga-flow.png";
import yogaRelaxImg from "../assets/yoga-relaks.png";
import hiit from "../assets/hiit.jpg";
import cardio from "../assets/cardio.jpg";
import strength from "../assets/strength.jpg";
import marathon from "../assets/marathon.jpg";
import swimmingpool from "../assets/swimmingpool.jpg";

export interface GymClass {
  id: string;
  title: string;
  instructor: string;
  time: string;
  duration: string;
  category: 'Yoga' | 'Cardio' | 'Strength' | 'HIIT';
  image: string;
  spotsLeft: number;
  capacity: number;
}

export interface SportEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

export const gymClasses: GymClass[] = [
  {
    id: "1",
    title: "Morning Yoga Flow",
    instructor: "Jessica",
    time: "08:00 AM",
    duration: "60 min",
    category: "Yoga",
    image: yogaFlowImg,
    spotsLeft: 3,
    capacity: 20,
  },
  {
    id: "2",
    title: "Relax & Stretch Yoga",
    instructor: "Sarah",
    time: "09:00 AM",
    duration: "60 min",
    category: "Yoga",
    image: yogaRelaxImg,
    spotsLeft: 5,
    capacity: 20,
  },
  {
    id: "3",
    title: "HIIT Full Body",
    instructor: "Daddy Gee",
    time: "10:00 AM",
    duration: "45 min",
    category: "HIIT",
    image: hiit,
    spotsLeft: 2,
    capacity: 15,
  },
  {
    id: "4",
    title: "Low Impact Cardio",
    instructor: "Paris Pernandes",
    time: "05:00 PM",
    duration: "50 min",
    category: "Cardio",
    image: cardio,
    spotsLeft: 0,
    capacity: 25,
  },
  {
    id: "5",
    title: "Lower Body Strength",
    instructor: "Kris Putra",
    time: "07:00 PM",
    duration: "90 min",
    category: "Strength",
    image: strength,
    spotsLeft: 8,
    capacity: 12,
  },
];

export const sportEvents: SportEvent[] = [
  {
    id: "1",
    title: "University Marathon 2025",
    date: format(addDays(new Date(), 14), "MMMM dd, yyyy"),
    location: "Campus Main Track",
    image: marathon,
    description:
      "Join the annual university marathon. Open for all students and faculty members.",
  },
  {
    id: "2",
    title: "Inter-Faculty Swimming Competition",
    date: format(addDays(new Date(), 21), "MMMM dd, yyyy"),
    location: "University Swimming Pool",
    image: swimmingpool,
    description:
      "Support your faculty swimmers in the biggest swimming competition of the semester.",
  },
];

export const gymRooms = [
  { id: 'gym-a', name: 'Main Gym Hall', capacity: 50 },
  { id: 'studio-1', name: 'Yoga Studio', capacity: 20 },
  { id: 'studio-2', name: 'Spin Studio', capacity: 25 },
  { id: 'court-1', name: 'Basketball Court', capacity: 30 },
];

export interface Booking {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  image: string;
}

export const myBookings: Booking[] = [
  {
    id: 'b1',
    title: 'Morning Yoga Flow',
    date: format(addDays(new Date(), 1), 'MMMM dd, yyyy'),
    time: '08:00 AM',
    location: 'Yoga Studio',
    status: 'Confirmed',
    image: yogaFlowImg
  },
  {
    id: 'b2',
    title: 'Lower Body Strength',
    date: format(addDays(new Date(), 3), 'MMMM dd, yyyy'),
    time: '04:00 PM',
    location: 'Main Gym Hall',
    status: 'Pending',
    image: strength
  }
];

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning' | 'error';
}

export const notifications: Notification[] = [
  {
    id: 'n1',
    title: 'Booking Confirmed',
    message: 'Your Morning Yoga Flow session has been confirmed.',
    time: '2 hours ago',
    read: false,
    type: 'success'
  },
  {
    id: 'n2',
    title: 'Class Reminder',
    message: 'Don\'t forget your Lower Body Strength class tomorrow at 07:00 PM.',
    time: '5 hours ago',
    read: false,
    type: 'info'
  },
  {
    id: 'n3',
    title: 'New Event',
    message: 'Registration for the University Marathon is now open!',
    time: '1 day ago',
    read: true,
    type: 'info'
  },
  {
    id: 'n4',
    title: 'Payment Successful',
    message: 'Your monthly membership payment was successful.',
    time: '2 days ago',
    read: true,
    type: 'success'
  },
  {
    id: 'n5',
    title: 'Gym Maintenance',
    message: 'Main Gym Hall will be closed for maintenance on Sunday.',
    time: '3 days ago',
    read: true,
    type: 'warning'
  }
];

export const userProfile = {
  name: 'Alex Student',
  role: 'Student',
  department: 'Vokasi UNESA',
  email: 'alex.student@unesa.ac.id',
  phone: '+62 812 3456 7890',
  avatar: profile
};
