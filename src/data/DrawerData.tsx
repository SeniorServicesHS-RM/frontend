import AccessibleIcon from "@mui/icons-material/Accessible";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HouseIcon from "@mui/icons-material/House";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ReactNode, useContext } from "react";
import { UserContext } from "../store/UserContext";

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
    title: "Planning",
    path: "/planning",
    icon: <CalendarMonthIcon />,
  },
  {
    title: "Login",
    path: "/login",
    icon: <LoginIcon />,
  },
  {
    title: "Logout",
    path: "/",
    icon: <LogoutIcon />,
  },
];

export default DrawerData;

interface DrawerDataInterface {
  title: string;
  path: string;
  icon: ReactNode;
}

export const GetDrawerData = () => {
  const { role } = useContext(UserContext);
  const drawerData: DrawerDataInterface[] = [];
  console.log(role);
  if (role === 0) {
    drawerData.push({
      title: "Login",
      path: "/login",
      icon: <LoginIcon />,
    });
  }
  if (role === 3) {
    drawerData.push({
      title: "Services",
      path: "/services",
      icon: <AccessibleIcon />,
    });
  }
  if (role === 2) {
    drawerData.push({
      title: "Assistant",
      path: "/assistant",
      icon: <AccessibleIcon />,
    }); //Employee Page still needed!!!
  }
  if (role === 1) {
    drawerData.push({
      title: "Planning",
      path: "/planning",
      icon: <CalendarMonthIcon />,
    });
  }
  return drawerData;
};
