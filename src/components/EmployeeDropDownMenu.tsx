import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import User from "../data/User";

interface Props {
  userList: User[];
  isOpen: boolean;
  handleClose: (user?: User) => void;
  anchorElement: HTMLElement;
}

export default function EmployeeDropDownMenu(props: Props) {
  return (
    <Menu
      id="basic-menu"
      anchorEl={props.anchorElement}
      open={props.anchorElement ? true : false}
      onClose={props.handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {props.userList.map((user) => {
        return (
          <MenuItem onClick={() => props.handleClose(user)}>
            {user.empID + ": " + user.firstName + " " + user.lastName}
          </MenuItem>
        );
      })}
      <MenuItem onClick={() => props.handleClose(null)}>Keiner!</MenuItem>
    </Menu>
  );
}
