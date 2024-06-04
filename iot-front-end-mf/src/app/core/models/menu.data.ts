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
    name: 'Dashboard Gas',
    code: '',
    path: '/private/dashboard',
    icon: 'fa-solid fa-chart-column',
  },
  {
    name: 'Dashboard Energia T',
    code: '',
    path: '/private/dashboard-termica',
    icon: 'fa-solid fa-chart-column',
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
