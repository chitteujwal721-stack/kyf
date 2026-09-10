import { TeamMember } from '@/types';

export const initialTeam: TeamMember[] = [
  {
    id: 'tm-1',
    name: 'Bhushan Patil',
    role: 'Founder & President',
    bio: 'Passionate social activist dedicated to youth development and community empowerment across Khandesh.',
    image: '/education2.jpg',

    order: 1
  },
  {
    id: 'tm-2',
    name: 'Priyanka Chaudhari',
    role: 'Vice President & Women Wing Lead',
    bio: 'Advocate for women health, education, and rural self-help group mentorship.',
    image: '/women.jpg',

    order: 2
  },
  {
    id: 'tm-3',
    name: 'Rahul Deshmukh',
    role: 'General Secretary',
    bio: 'Coordinates foundation operations, blood donation helplines, and volunteer networks.',
    image: '/education3.jpg',
    /* socials: {
       linkedin: 'https://linkedin.com',
       email: 'rahul@khandeshyouthfoundation.org'
     },*/
    order: 3
  },
  {
    id: 'tm-4',
    name: 'Sachin Mali',
    role: 'Head of Environmental Cell',
    bio: 'Leads green drives, water conservation, and tree plantation projects.',
    image: '/tree.jpg',

    order: 4
  }
];
