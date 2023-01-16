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
import GetOrdersByEmployee from "../data/OrderService";

// import { MartAry, OrderArray } from "../data/ArticleTestData";
import { MartAry } from "../data/ArticleTestData";
import Article from "../data/Article";

// import ColorToggleButton from "../components/ToggleButton";

//TODO: auslagern!
class FilteredList {
  constructor(private _filter: String, private _filtered: ArticleWithOrder[]) {}

  public get filter() {
    return this._filter;
  }
  public get filtered() {
    return this._filtered;
  }
}

class ArticleWithOrder {
  constructor(private _order: Order, private _article: Article) {}

  public get order() {
    return this._order;
  }
  public set order(order: Order) {
    this._order = order;
  }

  public get article() {
    return this._article;
  }
  public set article(article: Article) {
    this._article = article;
  }
}

const FILTER_MART = "FILTER_MART";
const FILTER_MART_FUNCTION = (article: ArticleWithOrder, entry: string) => {
  return article.article.mart.toLowerCase() == entry.toLowerCase();
};

const FILTER_SENIOR = "FILTER_SENIOR";
const FILTER_SENIOR_FUNCTION = (article: ArticleWithOrder, entry: string) => {
  return article.order.seniorId.toLowerCase() == entry.toLowerCase();
};

let activeFilterType = FILTER_MART;
let activeFilter: Function = FILTER_MART_FUNCTION;
let filterList = MartAry;

const EkhPage = () => {
  // TODO aus authContext holen
  const employeeId = "emp001";

  const orderByEmp: Order[] = GetOrdersByEmployee(employeeId);

  const allArticlesByEmp: ArticleWithOrder[] = [].concat(
    ...orderByEmp.map((order) =>
      order.articleList.map((article) => new ArticleWithOrder(order, article))
    )
  );

  // Set Filter: Mart or Senior ( From Exclusive Toggle Button )
  function setFilter(filterType: string) {
    activeFilterType = filterType;
    if (activeFilterType == FILTER_MART) {
      filterList = MartAry;
      activeFilter = FILTER_MART_FUNCTION;
    }
    if (activeFilterType == FILTER_SENIOR) {
      filterList = [
        ...new Set(
          allArticlesByEmp.map((article: ArticleWithOrder) => {
            return article.order.seniorId;
          })
        ),
      ];
      activeFilter = FILTER_SENIOR_FUNCTION;
    }
  }

  // ArticleWithOrder Lists for every available subFilter in current filter. E.g.: Filter for Marts, available SubFilters = Rewe, Aldi, etc
  let filteredLists = filterList.map((entry) => {
    return new FilteredList(
      entry,
      allArticlesByEmp.filter((article: ArticleWithOrder) =>
        activeFilter(article, entry)
      )
    );
  });

  // probably unused
  // const mappedArticleByEmp = allArticlesByEmp.map(
  //   (article: ArticleWithOrder) => {
  //     return (
  //       <Grid>
  //         <ArticleCard
  //           title={article.article.name}
  //           description={article.article.note}
  //           amount={article.article.amount}
  //           route={"/ekh"}
  //           mart={article.article.mart}
  //         ></ArticleCard>
  //       </Grid>
  //     );
  //   }
  // );

  let allFiltered = filteredLists
    .filter((filtered) => filtered.filtered.length > 0)
    .map((filteredList: FilteredList) => {
      return (
        <Grid>
          <h1>{filteredList.filter.toString()}</h1>
          {orderByFilter(filteredList.filtered)}
        </Grid>
      );
    });

  function orderByFilter(filtered: ArticleWithOrder[]) {
    return filtered.map((article: ArticleWithOrder) => {
      return (
        <Grid>
          <ArticleCard
            title={article.article.name}
            description={article.article.note}
            amount={article.article.amount}
            route={"/ekh"}
            mart={article.article.mart}
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

  // let secondLevelFilter = filterList;
  // const [secLvlFilter, setSecLvlFilter] = React.useState(secondLevelFilter);

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
    <div>
      <div>
        <FlexBox>
          {/* <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        > */}
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
            <InputLabel id="demo-simple-select-label">Einzelauswahl</InputLabel>
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
          {/* </Grid> */}
        </FlexBox>
      </div>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        {allFiltered}
        {/* {orderByFilter(allArticlesByEmp)} */}
      </Grid>
    </div>
  );
};

export default EkhPage;
