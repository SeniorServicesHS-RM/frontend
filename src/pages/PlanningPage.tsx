import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import FlexBox from "../components/FlexBox";

const PlanningPage = () => {
  return (
    <FlexBox>
      <NavLink to="/planning/openorders">
        <Button>Offene Bestellungen Ueberpruefen</Button>
      </NavLink>
      <NavLink to="/planning/closedorders">
        <Button>Vergangene Bestellungen einsehen</Button>
      </NavLink>
    </FlexBox>
  );
};
export default PlanningPage;
