import * as React from "react";
import DatePicker from "../components/DatePicker";
import FlexBox from "../components/FlexBox";

const PlanningPage = () => {
  return (
    <FlexBox>
      <DatePicker label="Naechster Einkaufstermin" />
    </FlexBox>
  );
};
export default PlanningPage;
