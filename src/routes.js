import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Language from "@material-ui/icons/Language";
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
// core components/views for Admin layout
import DashboardPage from "./views/Dashboard/Dashboard.js";
import UserProfile from "./views/UserProfile/UserProfile.js";
import TableList from "./views/TableList/TableList.js";
import Typography from "./views/Typography/Typography.js";
import Icons from "./views/Icons/Icons.js";
import Maps from "./views/Maps/Maps.js";
import NotificationsPage from "./views/Notifications/Notifications.js";
// core components/views for RTL layout
import RTLPage from "./views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: '/search',
    name: 'Search',
    icon: SearchIcon,
    component: DashboardPage,
    layout: '/admin',
    displayOnMobileOnly: true,
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: SettingsIcon,
    component: DashboardPage,
    layout: '/admin',
    displayOnMobileOnly: true,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    component: DashboardPage,
    layout: '/admin',
    displayOnMobileOnly: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: Person,
    component: DashboardPage,
    layout: '/admin',
    displayOnMobileOnly: true,
  },
  {
    path: "/dashboard",
    name: "ECHO",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/user",
    name: "2",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/table",
    name: "3",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/typography",
    name: "4",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/icons",
    name: "5",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/maps",
    name: "6",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/notifications",
    name: "7",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
    displayOnMobileOnly: false,
  },
  {
    path: "/rtl-page",
    name: "8",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
    displayOnMobileOnly: false,
  },
];

export default dashboardRoutes;
