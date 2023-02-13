import { Theme } from "@mui/material";
import ekhTheme from "./ekhTheme";
import normalTheme from "./normalTheme";
import planningTheme from "./planningTheme";
import seniorTheme from "./seniorTheme";

export default function themeCreator(theme: string): Theme {
  return themeMap[theme];
}

const themeMap: { [key: string]: Theme } = {
  ekhTheme,
  planningTheme,
  seniorTheme,
  normalTheme,
};
