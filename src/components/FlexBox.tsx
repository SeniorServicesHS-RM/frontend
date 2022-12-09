import { Box } from "@mui/system";
import React, { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
const FlexBox = ({ children }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }} marginLeft="5rem" marginTop="1rem">
      {children}
    </Box>
  );
};
export default FlexBox;
