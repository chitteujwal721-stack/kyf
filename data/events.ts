import { EventItem } from '@/types';

export const initialEvents: EventItem[] = [
  {
    id: 'evt-shabdabhushan-2026',
    title: 'शब्दभूषण २०२६',
    subtitle: 'खान्देशातील सर्वात भव्य खान्देशस्तरीय वक्तृत्व स्पर्धा',
    description:
      'खान्देश युथ फाउंडेशन आयोजित खान्देशातील सर्वात भव्य खान्देशस्तरीय वक्तृत्व स्पर्धा. वक्तृत्वातून विचारांची देवाणघेवाण, वैचारिक प्रगल्भता आणि युवक सक्षमीकरणासाठी एक भव्य व्यासपीठ.',
    date: '२९ ऑगस्ट ते २५ ऑक्टोबर २०२६',
    time: 'नोंदणी: २९ ऑगस्ट ते २० सप्टेंबर (मुदतवाढ)',
    location: 'खान्देश (धुळे, जळगाव, मालेगाव, नंदुरबार)',
    category: 'Youth',
    image: '/banner-marathi.png',
    status: 'Upcoming',
    featured: true,
    registrationUrl: 'https://forms.gle/xW3AqRnGNVKewGF4A',
    entryFee: '₹१५०/-',
    prizes: [
      { title: 'प्रथम पारितोषिक', amount: '₹१०,०००/-' },
      { title: 'द्वितीय पारितोषिक', amount: '₹७,०००/-' },
      { title: 'तृतीय पारितोषिक', amount: '₹५,०००/-' },
    ],
    topics: [
      'संवादाने भविष्य घडते.',
      'बलसागर भारत होवो, विश्वात शोभुनी राहो.',
      'वृक्षवल्ली आम्हा सोयरे वनचरे : माझी वसुंधरा, माझं कुटुंब.',
      'शाश्वत विकास : विकसित खान्देशाचे महत्त्वपूर्ण उद्दिष्ट.',
      'आजचा युवक खान्देशाचे भविष्य : शेती, उद्योग आणि विकास.',
      'शिक्षण हे वाघिणीचे दूध आहे: शिका, समृद्ध व्हा आणि देशाला नवी दिशा द्या.',
    ],
    rounds: [
      { name: 'नोंदणी मुदतवाढ', date: '२९ ऑगस्ट ते २० सप्टेंबर' },
      { name: 'प्राथमिक फेरी', date: '२६ व २७ सप्टेंबर' },
      { name: 'जिल्हास्तरीय फेरी', date: '२ ते ४ ऑक्टोबर' },
      { name: 'महाअंतिम फेरी', date: '२५ ऑक्टोबर' },
    ],
    contacts: [
      { district: 'धुळे जिल्हा', phone: '8208000141' },
      { district: 'जळगाव जिल्हा', phone: '9373159728' },
      { district: 'मालेगाव जिल्हा', phone: '9322141593' },
      { district: 'नंदुरबार जिल्हा', phone: '9561927351' },
    ],
    languages: ['मराठी', 'अहिराणी', 'इंग्रजी'],
    ageGroups: ['१४ ते १८', '१८ ते २५', '२५+ खुला'],

    // Exact English details
    titleEn: 'Shabdabhushan 2026',
    subtitleEn: "Khandesh's Grandest Khandesh-Level Elocution & Oratory Competition",
    descriptionEn:
      'Organized by Khandesh Youth Foundation, the grandest Khandesh-level elocution competition. A prestigious platform designed to foster thought leadership, articulate oratorical skills, and youth empowerment.',
    dateEn: '29 August to 25 October 2026',
    timeEn: 'Registration: 29 Aug to 20 Sep (Extended)',
    locationEn: 'Khandesh (Dhule, Jalgaon, Malegaon, Nandurbar)',
    entryFeeEn: '₹150/-',
    prizesEn: [
      { title: '1st Prize', amount: '₹10,000/-' },
      { title: '2nd Prize', amount: '₹7,000/-' },
      { title: '3rd Prize', amount: '₹5,000/-' },
    ],
    topicsEn: [
      'Dialogue shapes the future.',
      'Let India become mighty and shine across the universe.',
      'Trees and nature are our kin: My Earth, My Family.',
      'Sustainable Development: A crucial goal for a developed Khandesh.',
      "Today's Youth, Khandesh's Future: Agriculture, Industry, and Development.",
      "Education is a tiger's boon: Educate, prosper and direct the nation.",
    ],
    roundsEn: [
      { name: 'Registration Deadline (Extended)', date: '29 Aug to 20 Sep' },
      { name: 'Preliminary Round', date: '26 & 27 September' },
      { name: 'District Level Round', date: '2 to 4 October' },
      { name: 'Grand Finale', date: '25 October' },
    ],
    contactsEn: [
      { district: 'Dhule District', phone: '8208000141' },
      { district: 'Jalgaon District', phone: '9373159728' },
      { district: 'Malegaon District', phone: '9322141593' },
      { district: 'Nandurbar District', phone: '9561927351' },
    ],
    languagesEn: ['Marathi', 'Ahirani', 'English'],
    ageGroupsEn: ['14 to 18 Years', '18 to 25 Years', '25+ Open Category'],
  },
];

