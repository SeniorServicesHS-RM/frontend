import { PurchaseArray } from "../data/PurchaseTestData";
import Purchase from "../data/Purchase";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const EkhPage = () => {
  return (
    //<h1>Hallo EKH Page </h1>

    <Box sx={{ width: "100%" }}>
      <Stack spacing={3}>
        <Item>new String("fünf") </Item>
      </Stack>
    </Box>
  );
  console.log("Test");
};

export default EkhPage;
