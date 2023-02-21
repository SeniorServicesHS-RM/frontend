import { Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import FlexBox from "../components/FlexBox";

const PlanningPage = () => {
  return (
    <FlexBox>
      <Typography>
        <NavLink style={{ textDecoration: "none" }} to="/planning/openorders">
          <Button
            variant="contained"
            sx={{
              display: "flex",
              marginBottom: 2,
              textAlign: "left",
              width: "100%",
              p: 1.5,
            }}
            size="large"
          >
            Offene Bestellungen Ueberpruefen
          </Button>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/planning/closedorders">
          <Button
            variant="contained"
            sx={{
              display: "flex",
              marginBottom: 2,
              textAlign: "left",
              width: "100%",
              p: 1.5,
            }}
            size="large"
          >
            Vergangene Bestellungen einsehen
          </Button>
        </NavLink>
      </Typography>
    </FlexBox>
  );
};
export default PlanningPage;
