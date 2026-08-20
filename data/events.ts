import { EventItem } from '@/types';

export const initialEvents: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Mega Youth Blood Donation Camp 2026',
    description: 'Organizing a massive blood donation drive in collaboration with Dhule Civil Hospital to address blood bank scarcity.',
    date: '2026-08-15',
    time: '09:00 AM - 05:00 PM',
    location: 'District Hall, Dhule, Maharashtra',
    category: 'Blood Donation',
    image: '/blood.jpg',
    status: 'Upcoming',
    featured: true
  },
  {
    id: 'evt-2',
    title: 'Khandesh Vrukshotsav - 1000 Tree Plantation',
    description: 'Join hands to plant 1000 native trees across rural schools and public gardens in Dhule district.',
    date: '2026-08-28',
    time: '07:00 AM - 12:00 PM',
    location: 'Laling Hill Area & Rural Schools, Dhule',
    category: 'Environment',
    image: '/tree.jpg',
    status: 'Upcoming',
    featured: true
  },
  {
    id: 'evt-3',
    title: 'Student Education Kit Distribution Drive',
    description: 'Providing free school bags, books, and stationery kits to underprivileged students in rural Khandesh.',
    date: '2026-09-05',
    time: '10:30 AM - 03:00 PM',
    location: 'Z.P. High School, Shirpur',
    category: 'Education',
    image: '/education.jpg',
    status: 'Upcoming',
    featured: true
  },
  {
    id: 'evt-4',
    title: 'Youth Leadership & Skill Seminar',
    description: 'Interactive workshops on career counseling, soft skills, digital literacy, and civic leadership.',
    date: '2026-07-10',
    time: '10:00 AM - 04:00 PM',
    location: 'Auditorium, Engineering College, Dhule',
    category: 'Youth',
    image: '/education1.jpg',
    status: 'Completed',
    featured: false
  }
];
