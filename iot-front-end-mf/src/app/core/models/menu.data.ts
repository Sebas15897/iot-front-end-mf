export interface MenuData {
  name: string;
  icon?: string;
  active?: boolean;
  code?: string | string[];
  option?: string;
  id?: string;
  path?: string;
  items?: MenuData[];
}

export const MenuConfig: MenuData[] = [
  {
    name: 'Home',
    code: '',
    path: '/private/home',
    icon: 'fa-solid fa-house-user',
  },
  {
    name: 'Dashboard',
    code: '',
    path: '/private/dashboard',
    icon: 'fa-solid fa-chart-column',
  },
  {
    name: 'Admin',
    code: '',
    path: '/admin/config',
    icon: 'fa-solid fa-screwdriver-wrench',
    items: [
      {
        name: 'Security',
        icon: 'fa-solid fa-user-shield',
      },
      {
        name: 'Settings',
        icon: 'fa-solid fa-sliders',
      },
      {
        name: 'Companies',
        path: '/admin/config/companies',
        icon: 'fa-regular fa-building',
      },
      {
        name: 'Company',
        path: '/admin/config/company',
        icon: 'fa-regular fa-building',
      },
    ],
  },
  {
    name: 'Jobs',
    path: '/admin/jobs',
    icon: 'fa-solid fa-briefcase',
  },
  {
    name: 'Reports',
    path: '/admin/reports',
    icon: 'fa-regular fa-folder-open',
  },
  {
    name: 'Employees',
    path: '/admin/config/employees',
    icon: 'fa-regular fa-building',
  },
];
