import {
  type RemixiconComponentType,
  RiBarChartBoxLine,
  RiCalendarScheduleLine,
  RiInbox2Line,
  RiMindMap,
  RiPulseAiLine,
  RiQuestionLine,
  RiRobot3Line,
  RiSettingsLine,
} from '@remixicon/react';

export interface sidebarItem {
  title: string;
  url: string;
  isActive?: boolean;
  icon: RemixiconComponentType;
  items?: sidebarItem[];
}

export const sidebarMain: sidebarItem[] = [
  {
    title: 'Overview',
    url: '/',
    icon: RiPulseAiLine,
  },
  {
    title: 'Content',
    url: '/content',
    icon: RiBarChartBoxLine,
    items: [
      {
        title: 'Posts',
        url: '/content/posts',
        icon: RiBarChartBoxLine,
      },
      {
        title: 'Stories',
        url: '/content/stories',
        icon: RiBarChartBoxLine,
      },
      {
        title: 'Videos',
        url: '/content/videos',
        icon: RiBarChartBoxLine,
      },
    ],
  },
  {
    title: 'Schedule',
    url: '/schedule',
    icon: RiCalendarScheduleLine,
  },
  {
    title: 'Analytics',
    url: '/analytics',
    icon: RiBarChartBoxLine,
  },
];

export const sidebarSecondary: sidebarItem[] = [
  {
    title: 'Inbox',
    url: '/inbox',
    icon: RiInbox2Line,
  },
  {
    title: 'Agents',
    url: '/agents',
    icon: RiRobot3Line,
  },
  {
    title: 'Integrations',
    url: '/integrations',
    icon: RiMindMap,
  },
];

export const sidebarBottom: sidebarItem[] = [
  {
    title: 'Help Center',
    url: '/help',
    icon: RiQuestionLine,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: RiSettingsLine,
  },
];
