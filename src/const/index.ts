import { MenuItem, Socials } from '../@types';

export const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Main',
    link: '/',
  },
  {
    name: 'Authors',
    link: '/authors',
  },
  {
    name: 'Tags',
    link: '/tags',
  },
  {
    name: 'About',
    link: '/about',
  },
];

export const SOCIALS: Socials[] = [
  {
    name: 'Facebook',
    color: '#1877F2',
    link: 'https://www.facebook.com/doktorGrin/',
    showInHeader: true,
  },
  {
    name: 'YouTube',
    color: '#FF0000',
    link: 'https://www.youtube.com/channel/UCg83jkm7aM3OKTAWMoSpf2A',
    showInHeader: true,
  },
  {
    name: 'Viber',
    color: '#665CAC',
    link: 'viber://chat?number=ххххххххх',
    showInHeader: true,
  },
  {
    name: 'Telegram',
    color: '#2CA5E0',
    link: 'tg://resolve?domain=<USERNAME>',
    showInHeader: true,
  },
  {
    name: 'Skype',
    color: '#00AFF0',
    link: 'skype:username?chat',
    showInHeader: true,
  },
];
