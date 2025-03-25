import AddLocationIcon from '@mui/icons-material/AddLocation';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BarChartIcon from '@mui/icons-material/BarChart';
import BusinessIcon from '@mui/icons-material/Business';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Navigation } from '@toolpad/core/AppProvider';

export const BRANDING = {
  logo: <img src='https://mui.com/static/logo.png' alt='MUI logo' />,
  title: 'PMS',
  homeUrl: '/',
};

export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Menu',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'companies',
    title: 'Companies',
    icon: <BusinessIcon />,
  },
  {
    segment: 'properties',
    title: 'Properties',
    icon: <ApartmentIcon />,
  },
  {
    segment: 'addresses',
    title: 'Addresses',
    icon: <AddLocationIcon />,
  },
  {
    segment: 'units',
    title: 'Units',
    icon: <MeetingRoomIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
      },
    ],
  },
];
