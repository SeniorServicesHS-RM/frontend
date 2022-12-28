import HouseIcon from "@mui/icons-material/House";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessibleIcon from "@mui/icons-material/Accessible";
import LoginIcon from "@mui/icons-material/Login";
import BlindIcon from "@mui/icons-material/Blind";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";

const DrawerData = [
  {
    title: "Home",
    path: "/",
    icon: <HouseIcon />,
  },
  {
    title: "Shopping",
    path: "/shopping",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Services",
    path: "/services",
    icon: <AccessibleIcon />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <LoginIcon />,
  },
  {
    title: "DBTest",
    path: "/dbtest",
    icon: <BlindIcon />,
  },
  {
    title: "Planning",
    path: "/planning",
    icon: <CalendarMonthIcon />,
  },
  {
    title: "Einkaufshelfer",
    path: "/ekh",
    icon: <DeliveryDiningIcon />,
  },
];

export default DrawerData;
