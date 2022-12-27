import Purchase from "./Purchase";
import Article from "./Article";
import Order from "./Order";
import { OrderArray } from "./ArticleTestData";

export const PurchaseArray: Purchase[] = [
  new Purchase("p1", OrderArray, "peter01", new Date()),
  new Purchase("p2", OrderArray, "peter02", new Date()),
  new Purchase("p3", OrderArray, "peter03", new Date()),
  new Purchase("p4", OrderArray, "peter04", new Date()),
];
