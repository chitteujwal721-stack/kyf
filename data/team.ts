import { TeamMember } from '@/types';

export const initialTeam: TeamMember[] = [
  {
    id: 'tm-founder',
    name: 'Kshitij Kiran Salunke',
    role: 'Founder & Past President (संस्थापक आणि मा. अध्यक्ष)',
    bio: 'Visionary founder dedicated to empowering youth, building local opportunities, and driving modern swarajya through youth leadership.',
    image: '/Kshitij salunke  (1).png',
    order: 1
  },
  {
    id: 'tm-cofounder',
    name: 'Dipesh Shyam Agrawal',
    role: 'Co-Founder & President (सह संस्थापक आणि अध्यक्ष)',
    bio: 'Co-founder driving grassroots community upliftment, youth mobilization, and sustainable social impact across Khandesh.',
    image: '/Dipesh Agrawal.png',
    order: 2
  },
  {
    id: 'tm-1',
    name: 'Bhushan Patil',
    role: 'Vice President & Youth Coordinator',
    bio: 'Passionate social activist dedicated to youth development and community empowerment across Khandesh.',
    image: '/education2.jpg',
    order: 3
  },
  {
    id: 'tm-2',
    name: 'Priyanka Chaudhari',
    role: 'Vice President & Women Wing Lead',
    bio: 'Advocate for women health, education, and rural self-help group mentorship.',
    image: '/women.jpg',
    order: 4
  },
  {
    id: 'tm-3',
    name: 'Rahul Deshmukh',
    role: 'General Secretary',
    bio: 'Coordinates foundation operations, blood donation helplines, and volunteer networks.',
    image: '/education3.jpg',
    order: 5
  },
  {
    id: 'tm-4',
    name: 'Sachin Mali',
    role: 'Head of Environmental Cell',
    bio: 'Leads green drives, water conservation, and tree plantation projects.',
    image: '/tree.jpg',
    order: 6
  }
];
