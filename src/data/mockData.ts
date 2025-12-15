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
  category: "Yoga" | "Cardio" | "Strength" | "HIIT";
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
    title: "Yoga Flow Pagi",
    instructor: "Jessica",
    time: "08.00",
    duration: "60 menit",
    category: "Yoga",
    image: yogaFlowImg,
    spotsLeft: 3,
    capacity: 20,
  },
  {
    id: "2",
    title: "Yoga Relaksasi & Peregangan",
    instructor: "Sarah",
    time: "09.00",
    duration: "60 menit",
    category: "Yoga",
    image: yogaRelaxImg,
    spotsLeft: 5,
    capacity: 20,
  },
  {
    id: "3",
    title: "HIIT Full Body",
    instructor: "Daddy Gee",
    time: "10.00",
    duration: "45 menit",
    category: "HIIT",
    image: hiit,
    spotsLeft: 2,
    capacity: 15,
  },
  {
    id: "4",
    title: "Kardio Intensitas Rendah",
    instructor: "Paris Pernandes",
    time: "17.00",
    duration: "50 menit",
    category: "Cardio",
    image: cardio,
    spotsLeft: 0,
    capacity: 25,
  },
  {
    id: "5",
    title: "Latihan Kekuatan Tubuh Bawah",
    instructor: "Kris Putra",
    time: "19.00",
    duration: "90 menit",
    category: "Strength",
    image: strength,
    spotsLeft: 8,
    capacity: 12,
  },
];

export const sportEvents: SportEvent[] = [
  {
    id: "1",
    title: "Maraton Universitas 2025",
    date: format(addDays(new Date(), 14), "MMMM dd, yyyy"),
    location: "Lintasan Utama Kampus",
    image: marathon,
    description:
      "Ikuti maraton tahunan universitas yang terbuka untuk seluruh mahasiswa dan civitas akademika.",
  },
  {
    id: "2",
    title: "Kompetisi Renang Antar Fakultas",
    date: format(addDays(new Date(), 21), "MMMM dd, yyyy"),
    location: "Kolam Renang Universitas",
    image: swimmingpool,
    description:
      "Dukung perenang fakultas Anda dalam kompetisi renang terbesar semester ini.",
  },
];

export const gymRooms = [
  { id: "gym-a", name: "Aula Gym Utama", capacity: 50 },
  { id: "studio-1", name: "Studio Yoga", capacity: 20 },
  { id: "studio-2", name: "Studio Spin", capacity: 25 },
  { id: "court-1", name: "Lapangan Basket", capacity: 30 },
];

export interface Booking {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  image: string;
}

export const myBookings: Booking[] = [
  {
    id: "b1",
    title: "Yoga Pagi Flow",
    date: format(addDays(new Date(), 1), "MMMM dd, yyyy"),
    time: "08.00",
    location: "Studio Yoga",
    status: "Confirmed",
    image: yogaFlowImg,
  },
  {
    id: "b2",
    title: "Latihan Kekuatan Tubuh Bawah",
    date: format(addDays(new Date(), 3), "MMMM dd, yyyy"),
    time: "16.00",
    location: "Aula Gym Utama",
    status: "Pending",
    image: strength,
  },
];

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "info" | "success" | "warning" | "error";
}

export const notifications: Notification[] = [
  {
    id: "n1",
    title: "Pemesanan Dikonfirmasi",
    message: "Sesi Morning Yoga Flow Anda telah dikonfirmasi.",
    time: "2 jam yang lalu",
    read: false,
    type: "success",
  },
  {
    id: "n2",
    title: "Pengingat Kelas",
    message: "Jangan lupa kelas Lower Body Strength Anda besok pukul 19.00.",
    time: "5 jam yang lalu",
    read: false,
    type: "info",
  },
  {
    id: "n3",
    title: "Event Baru",
    message: "Pendaftaran untuk Marathon Universitas telah dibuka!",
    time: "1 hari yang lalu",
    read: true,
    type: "info",
  },
  {
    id: "n4",
    title: "Pembayaran Berhasil",
    message: "Pembayaran keanggotaan bulanan Anda berhasil diproses.",
    time: "2 hari yang lalu",
    read: true,
    type: "success",
  },
  {
    id: "n5",
    title: "Perawatan Gym",
    message: "Aula Gym Utama akan ditutup untuk perawatan pada hari Minggu.",
    time: "3 hari yang lalu",
    read: true,
    type: "warning",
  },
];

export const userProfile = {
  name: "Alex Student",
  role: "Mahasiswa",
  department: "Fakultas Vokasi UNESA",
  email: "alex.student@unesa.ac.id",
  phone: "+62 812 3456 7890",
  avatar: profile,
};
