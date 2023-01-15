import { PurchaseArray } from "../data/PurchaseTestData";
import Purchase from "../data/Purchase";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import FlexBox from "../components/FlexBox";
import ArticleCard from "../components/ArticleCard";
import Order from "../data/Order";
import { MartAry, OrderArray } from "../data/ArticleTestData";

// import ColorToggleButton from "../components/ToggleButton";

//TODO: auslagern!
class FilteredList {
  constructor(private _filter: String, private _filtered: Order[]) {}

  public get filter() {
    return this._filter;
  }
  public get filtered() {
    return this._filtered;
  }
}
const FILTER_MART = "FILTER_MART";
const FILTER_MART_FUNCTION = (order: Order, entry: string) => {
  return order.mart.toLowerCase() == entry.toLowerCase();
};

const FILTER_SENIOR = "FILTER_SENIOR";
const FILTER_SENIOR_FUNCTION = (order: Order, entry: string) => {
  return order.seniorId.toLowerCase() == entry.toLowerCase();
};

let activeFilterType = FILTER_MART;
let activeFilter: Function = FILTER_MART_FUNCTION;
let filterList = MartAry;

const EkhPage = () => {
  const [OrderAry, addOrderAry] = React.useState<Order[] | null>(OrderArray);

  console.log("EkgPage wird neu geladen");

  function setFilter(filterType: string) {
    console.log("1. übergeben: " + filterType + " aktiv: " + activeFilterType);
    activeFilterType = filterType;
    console.log("2. übergeben: " + filterType + " aktiv: " + activeFilterType);
    if (activeFilterType == FILTER_MART) {
      filterList = MartAry;
      activeFilter = FILTER_MART_FUNCTION;
    }
    if (activeFilterType == FILTER_SENIOR) {
      filterList = [
        ...new Set(
          OrderAry.map((order: Order) => {
            return order.seniorId;
          })
        ),
      ];
      activeFilter = FILTER_SENIOR_FUNCTION;
    }
  }

  let filteredLists = filterList.map((entry) => {
    return new FilteredList(
      entry,
      OrderAry.filter((order: Order) => activeFilter(order, entry))
    );
  });

  const mappedOrderAry = OrderAry.map((order: Order) => {
    return (
      <Grid>
        <ArticleCard
          title={order.article.name}
          description={order.article.note}
          amount={order.amount}
          route={"/ekh"}
          mart={order.mart}
        ></ArticleCard>
      </Grid>
    );
  });

  let allFiltered = filteredLists.map((filteredList: FilteredList) => {
    return (
      <Grid>
        <h1>{filteredList.filter.toString()}</h1>
        {orderByFilter(filteredList.filtered)}
      </Grid>
    );
  });

  function orderByFilter(filtered: Order[]) {
    return filtered.map((order: Order) => {
      return (
        <Grid>
          <ArticleCard
            title={order.article.name}
            description={order.article.note}
            amount={order.amount}
            route={"/ekh"}
            mart={order.mart}
          ></ArticleCard>
        </Grid>
      );
    });
  }

  const [alignment, setAlignment] = React.useState(activeFilterType);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    setFilter(newAlignment);
  };

  let secondLevelFilter = filterList;
  const [secLvlFilter, setSecLvlFilter] = React.useState(secondLevelFilter);

  const onSelect = (event: SelectChangeEvent) => {
    // setSecLvlFilter(event.target.value as string);
    console.log(event.target.value);
  };

  //1. TODO forEach in JSX für jede option in filterList --
  //2. TODO in der onSelect auf basis des select wertes die filterList anpassen (wenn ausgewählter wert in filterList vorhanden, nur wert nutzen, ansonsten alle?)
  //    -> value = senior1, filterList = [senior1, senior2, ...] -> filterList = [senior1]
  //    -> value = all, filterList = [senior1, senior2, ...] -> all nicht in liste, also alle zeigen

  // 2. Filterstufe für Dienstag?
  // Datenmodellanpassung
  // Auslagern der Components (!) --> Dominik brauchts

  return (
    <FlexBox>
      <FlexBox>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value={FILTER_MART}>Marts</ToggleButton>
            <ToggleButton value={FILTER_SENIOR}>Seniors</ToggleButton>
          </ToggleButtonGroup>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={"10"}
              label="Age"
              onChange={onSelect}
            >
              <MenuItem value={"all"}>Alle</MenuItem>
              {/* TODO Fix ForEach for TODO 1 */}
              {/* filterList.forEach(element => { */}
              <MenuItem value={"element"}>element</MenuItem>
              {/* });  */}
            </Select>
          </FormControl>
        </Grid>
      </FlexBox>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        {allFiltered}
      </Grid>
    </FlexBox>
  );
};

export default EkhPage;
