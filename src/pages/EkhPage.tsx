import {
  CardActionArea,
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
import { MartAry } from "../data/ArticleTestData";
import Article from "../data/Article";
import React from "react";

//Frage an Marcel: macht es Sinn, diese spezielle Klassen auszulagern?
//IN: Markt als String, Artikelarray; OUT: Marktbezeichnung; Artikel aus ausgewähltem Markt
class MartFilteredList {
  constructor(private _mart: String, private _articles: ArticleWithOrder[]) {}

  public get mart() {
    return this._mart;
  }
  public get articles() {
    return this._articles;
  }
}

//Frage an Marcel: macht es Sinn, diese spezielle Klassen auszulagern?
//new class with injected Order to Article (only reference) for 2nd-level Filter with an option in order after Filter (mapping) with an option from article
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

//JAN: EINLAGERN, da nur 1x benutzt?
//const FILTER_MART = "FILTER_MART";
const FILTER_MART_FUNCTION = (article: ArticleWithOrder, entry: String) => {
  return article.article.mart.toLowerCase() === entry.toLowerCase();
};

const EkhPage = () => {
  // TODO: aus authContext holen
  const employeeId = "emp001";
  const orderByEmp: Order[] = GetOrdersByEmployee(employeeId);

  const allArticles: ArticleWithOrder[] = [].concat(
    ...orderByEmp.map((order) =>
      order.articleList.map((article) => new ArticleWithOrder(order, article))
    )
  );

  //reaktives Update falls sich Articles/Orders des EKH (empID) ändern
  const [allArticlesByEmp, setAllArticlesByEmp] = React.useState(
    () => allArticles
  );

  // martFilter ist Array, sodass nach einzelnen und auch nach mehreren Märkten gefiltert werden kann & ResponsiveAktualisierung nach Auswahl
  const [martFilter, setMartFilter] = React.useState(() => MartAry);

  // Liste aller Senioren erstellen
  // damit nur die Senioren im Dropdown und in den Filterungen erscheinen,
  // die auch Artikel im Einkauf des EKH enthalten sind, angezeigt werden
  const senList = [
    ...new Set(
      allArticlesByEmp.map((article: ArticleWithOrder) => {
        return article.order.seniorId;
      })
    ),
  ];

  // reaktives Update, falls sich senFilter ändert (durch Nutzen des Dropdown Menüs "Senior" --> initial => senList (alle Senioren))
  const [senFilter, setSenFilter] = React.useState(() => senList);

  // Filterung: SeniorenID in senFilter enthalten?
  let filteredArticlesBySen = allArticlesByEmp.filter((article) =>
    senFilter.includes(article.order.seniorId)
  );

  // Erstelle Liste von MartFilteredLlists, für jeden Supermarkt einen Eintrag mit Liste aller Artikel aus jenem
  let martArticles = MartAry.map((mart) => {
    return new MartFilteredList(
      mart,
      filteredArticlesBySen.filter((article: ArticleWithOrder) =>
        FILTER_MART_FUNCTION(article, mart)
      )
    );
  }).filter((martFilteredList) => martFilteredList.articles.length > 0);

  // Liste aller Supermärkte mit jeweiligen Artikeln nach martFilter filtern (Selection Dropdown)
  let filteredLists = martArticles.filter((martArt) =>
    martFilter.includes(martArt.mart)
  );

  //Filterung
  let allFiltered = filteredLists.map((filteredList: MartFilteredList) => {
    return (
      <Grid>
        <h1>{filteredList.mart.toString()}</h1>
        {orderByFilter(filteredList.articles)}
      </Grid>
    );
  });

  function orderByFilter(filtered: ArticleWithOrder[]) {
    return filtered.map((article: ArticleWithOrder) => {
      function editHandler(article: ArticleWithOrder) {
        article.article.done = !article.article.done;

        const newList = [...allArticlesByEmp];
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

  // wenn Marktauswahl getroffen wird --> Logik siehe Kommentar onSeniorsSelect
  const onMartSelect = (event: SelectChangeEvent) => {
    setMartFilter(
      MartAry.includes(event.target.value) ? [event.target.value] : MartAry
    );
  };

  //wenn Seniorenauswahl getroffen wird --> setSenFilter auf den ausgewählten Wert,
  //falls dieser unter allen Senioren enthalten ist, ansonsten auf alle (senList)
  //es werden alle vorhanden Senioren als Dropdownitem erstellt, die der EmployeeID zugewiesen sind,
  //nur alle ist voreingestellt, ist somit nicht der senList enthalten und zeigt dann senList (alle) an
  function onSeniorSelect(event: SelectChangeEvent) {
    setSenFilter(
      senList.includes(event.target.value) ? [event.target.value] : senList
    );
  }

  return (
    <div>
      <div>
        <FlexBox>
          {/* MarktDropdown */}
          <FormControl fullWidth>
            <InputLabel id="Marktauswahl">Markt</InputLabel>
            <Select
              labelId="Marktauswahl"
              id="marktauswahl"
              value={martFilter.join("-")} //Voreinstellung für Dropdown
              label="Mart"
              onChange={onMartSelect}
            >
              {/* MenüItem voreingestellt Alle Märkte*/}
              <MenuItem value={MartAry.join("-")}>Alle</MenuItem>

              {/* mapping aller Supermärkte als Dropdownmenü Item */}
              {martArticles.map((mart) => {
                return (
                  <MenuItem value={mart.mart.toString()}>{mart.mart}</MenuItem>
                );
              })}
            </Select>
          </FormControl>

          {/* SeniorenDropdown */}
          <FormControl fullWidth>
            <InputLabel id="Seniorenauswahl">Senior</InputLabel>
            <Select
              labelId="Seniorenauswahl"
              id="seniorenauswahl"
              value={senFilter.join("-")} //Voreinstellung für Dropdown
              label="Oldie"
              onChange={onSeniorSelect}
            >
              {/* MenüItem voreingestellt für Alle Senioren*/}
              <MenuItem value={senList.join("-")}>Alle</MenuItem>
              {/* mapping Dropdownmenü Item für alle Senioren */}
              {senList.map((seniorId) => {
                return <MenuItem value={seniorId}>{seniorId}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </FlexBox>
      </div>

      {/* Anzeige der gefilterten Objecte als Article Cards untereinander in einem Grid */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        {allFiltered}
      </Grid>
    </div>
  );
};

export default EkhPage;
