import { Box } from "@mui/system";
import { ReactNode } from "react";
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
      justifyContent={"center"}
      alignContent={"center"}
      display={"inline-flex"}
      width="95%"
    >
      {children}
    </Box>
  );
};
export default FlexBox;
