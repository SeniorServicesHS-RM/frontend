import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import FlexBox from "../components/FlexBox";

const PlanningPage = () => {
  //needs to other pages: EditSeniorOrders und AllocateShoppingAssistants
  return (
    <FlexBox>
      <NavLink to="">
        <Button>Offene Bestellungen Ueberpruefen</Button>
      </NavLink>
      <NavLink to="">
        <Button>Einkaufshelfer zuweisen</Button>
      </NavLink>
    </FlexBox>
  );
};
export default PlanningPage;
