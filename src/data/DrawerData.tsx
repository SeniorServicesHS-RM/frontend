import HouseIcon from "@mui/icons-material/House";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccessibleIcon from "@mui/icons-material/Accessible";
import LoginIcon from '@mui/icons-material/Login';

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
];

export default DrawerData;
