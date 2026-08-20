import { InitiativeItem } from '@/types';

export const initialInitiatives: InitiativeItem[] = [
  {
    id: 'init-1',
    title: 'Youth Empowerment & Leadership',
    description: 'Nurturing young minds through mentorship, career guidance, skill building, and civic leadership programs.',
    fullContent: 'Our Youth Empowerment initiative aims to groom young leaders in Khandesh. We organize career counseling seminars, public speaking bootcamps, and digital literacy workshops to help students unlock their potential.',
    category: 'Youth',
    image: '/education1.jpg',
    iconName: 'UserCheck',
    impactMetrics: [
      { label: 'Youth Mentored', value: '3,500+' },
      { label: 'Workshops Conducted', value: '45+' }
    ],
    featured: true
  },
  {
    id: 'init-2',
    title: 'Quality Education for All',
    description: 'Providing educational support, books, school kits, and digital infrastructure to rural schools.',
    fullContent: 'We believe education is the key to breaking generational poverty. Through our free book banks, scholarship assistance, and digital classroom support, we empower rural students across Dhule and Jalgaon districts.',
    category: 'Education',
    image: '/education.jpg',
    iconName: 'BookOpen',
    impactMetrics: [
      { label: 'Students Assisted', value: '5,000+' },
      { label: 'Schools Supported', value: '30+' }
    ],
    featured: true
  },
  {
    id: 'init-3',
    title: 'Raktadaan Mahadaan (Blood Drives)',
    description: 'Emergency blood donation helplines and regular blood donation camps across Khandesh region.',
    fullContent: 'Our 24/7 emergency blood donation network connects voluntary donors directly with patients in urgent need. We organize quarterly camps to ensure blood banks maintain adequate supplies.',
    category: 'Blood Donation',
    image: '/blood.jpg',
    iconName: 'HeartPulse',
    impactMetrics: [
      { label: 'Units Collected', value: '2,800+' },
      { label: 'Lives Impacted', value: '7,500+' }
    ],
    featured: true
  },
  {
    id: 'init-4',
    title: 'Green Khandesh Plantation Drive',
    description: 'Large-scale afforestation drives, sapling distribution, and environmental awareness campaigns.',
    fullContent: 'To combat deforestation and rising summer temperatures in Khandesh, we plant native tree species, construct tree guards, and engage local youth in long-term tree maintenance.',
    category: 'Environment',
    image: '/tree.jpg',
    iconName: 'Trees',
    impactMetrics: [
      { label: 'Trees Planted', value: '12,000+' },
      { label: 'Green Volunteers', value: '1,200+' }
    ],
    featured: true
  },
  {
    id: 'init-5',
    title: 'Women Skill & Self-Reliance',
    description: 'Vocational training, health awareness camps, and self-help group mentoring for local women.',
    fullContent: 'Empowering women empowers the entire family. We offer tailoring training, sanitary hygiene awareness drives, and financial literacy workshops tailored for rural women.',
    category: 'Women Empowerment',
    image: '/women.jpg',
    iconName: 'Smile',
    impactMetrics: [
      { label: 'Women Trained', value: '1,500+' },
      { label: 'Health Camps', value: '25+' }
    ],
    featured: false
  }
];
