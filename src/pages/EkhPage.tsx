import { PurchaseArray } from "../data/PurchaseTestData";
import Purchase from "../data/Purchase";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import {
  Button,
  CardActionArea,
  CardActions,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FlexBox from "../components/FlexBox";
import ArticleCard from "../components/ArticleCard";
import Order from "../data/Order";
import { GetOrdersByEmployee } from "../data/OrderService";

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
// let filterList: String[] = ["Rewe"];

const EkhPage = () => {
  // TODO aus authContext holen
  const employeeId = "emp001";
  const orderByEmp: Order[] = GetOrdersByEmployee(employeeId);

  const allArticles: ArticleWithOrder[] = [].concat(
    ...orderByEmp.map((order) =>
      order.articleList.map((article) => new ArticleWithOrder(order, article))
    )
  );

  const [allArticlesByEmp, setAllArticlesByEmp] = React.useState(
    () => allArticles
  );

  // const [filteredArticlesBySen, setFilteredArticlesBySen] = React.useState(
  //   () => allArticlesByEmp
  // );

  const [martFilterValue, setMartFilterValue] = React.useState(() => "all");
  const [martFilter, setMartFilter] = React.useState(() => MartAry);

  const senList = [
    ...new Set(
      allArticlesByEmp.map((article: ArticleWithOrder) => {
        return article.order.seniorId;
      })
    ),
  ];

  const [oldieFilterValue, setOldieFilterValue] = React.useState(() => "all");
  const [senFilter, setSenFilter] = React.useState(() => senList);

  let filteredArticlesBySen = allArticlesByEmp.filter((article) =>
    senFilter.includes(article.order.seniorId)
  );

  // ArticleWithOrder Lists for every available subFilter in current filter. E.g.: Filter for Marts, available SubFilters = Rewe, Aldi, etc
  let filteredLists = martFilter.map((mart) => {
    return new FilteredList(
      mart,
      filteredArticlesBySen.filter((article: ArticleWithOrder) =>
        activeFilter(article, mart)
      )
    );
  });

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
      function editHandler(article: ArticleWithOrder) {
        article.article.done = !article.article.done;

        //aktualisieren der view nach onCLick
        const arrayIndex = allArticlesByEmp.indexOf(article);
        const newList = [...allArticlesByEmp];
        // newList[arrayIndex] = article;
        setAllArticlesByEmp(newList);
      }

      return (
        <Grid>
          <CardActionArea
            onClick={() => {
              editHandler(article);
            }}
          >
            <ArticleCard
              title={article.article.name}
              description={article.article.note}
              amount={article.article.amount}
              mart={article.article.mart}
              done={article.article.done}
              route={"/ekh"}
            ></ArticleCard>
          </CardActionArea>
        </Grid>
      );
    });
  }

  const onMartSelect = (event: SelectChangeEvent) => {
    setMartFilterValue(event.target.value);
    setMartFilter(
      MartAry.includes(event.target.value) ? [event.target.value] : MartAry
    );
  };

  function onOldieSelect(event: SelectChangeEvent) {
    setOldieFilterValue(event.target.value);
    setSenFilter(
      senList.includes(event.target.value) ? [event.target.value] : senList
    );
  }

  return (
    <div>
      <div>
        <FlexBox>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Mart</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={martFilterValue}
              label="Mart"
              onChange={onMartSelect}
            >
              <MenuItem value={"all"}>Alle</MenuItem>
              {/* TODO Fix ForEach for TODO 1 */}
              {MartAry.map((element) => {
                return (
                  <MenuItem value={element.toString()}>{element}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Oldie</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={oldieFilterValue}
              label="Oldie"
              onChange={onOldieSelect}
            >
              <MenuItem value={"all"}>Alle</MenuItem>
              {/* TODO Fix ForEach for TODO 1 */}
              {senList.map((element) => {
                return (
                  <MenuItem value={element.toString()}>{element}</MenuItem>
                );
              })}
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
