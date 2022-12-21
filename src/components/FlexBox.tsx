import { Box } from "@mui/system";
import React, { ReactNode } from "react";
interface Props {
  children?: ReactNode | ReactNode[];
}
const FlexBox = ({ children }: Props) => {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      marginLeft="1rem"
      marginTop="1rem"
      marginRight="1rem"
      marginBottom="1rem"
    >
      {children}
    </Box>
  );
};
export default FlexBox;
