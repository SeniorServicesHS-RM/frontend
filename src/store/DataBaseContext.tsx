import React, { ReactNode, useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";

import { firestore } from "./Firebase";
import Article from "../data/Article";
import Order from "../data/Order";
import { closeSync } from "fs";

interface ImportedArticle {
  id: string;
  beginDate?: Date; //all 3 necessarz? -> one should be enough!
  changeDate?: Date;
  endDate?: Date;
  name: string;
  note: string;
  amount: number;
  mart: string;
  picture?: string; //Datatype? gotta check!
}

interface ImportedOrder {
  id: string;
  seniorId: string;
  orderDone: string;
  articleList: string[];
  date: Date;
  additionalServices?: string[];
  planDate?: Date | string;
  employeeId?: string;
  actualPrice?: number;
  estimatedPrice?: number;
  signDate?: Date;
  signature?: string;
}

interface ImportedDate {
  id: string;
  date: string;
}
interface ImportedMarts {
  id: string;
  name: string;
}

interface DataBaseContextInterface {
  openOrders: Order[];
  closedOrders: Order[];
  nextShoppingDate: string;
  martList: string[];
}

interface Props {
  children?: ReactNode | ReactNode[];
}

export const DataBaseContext =
  React.createContext<DataBaseContextInterface | null>(null);

export const DataBaseProvider = ({ children }: Props) => {
  const [articles, setArticles] = useState<ImportedArticle[] | null>(null);
  const [openOrders, setOpenOrders] = useState<Order[] | null>(null);
  const [nextShoppingDate, setNextShoppingDate] = useState<string | null>(null);
  const [closedOrders, setClosedOrders] = useState<Order[] | null>(null);
  const [martList, setMarts] = useState<string[] | null>(null);
  useEffect(() => {
    const unsub = onSnapshot(collection(firestore, "Article"), (snapshot) => {
      const receivedArticles: ImportedArticle[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ImportedArticle[];
      setArticles(receivedArticles);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(collection(firestore, "Marts"), (snapshot) => {
      const recievedMarts: ImportedMarts[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ImportedMarts[];
      const martList: string[] = [];
      for (const mart of recievedMarts) {
        martList.push(mart.name);
        setMarts(martList);
      }
    });
  });
  useEffect(() => {
    const unsub = onSnapshot(
      collection(firestore, "ShoppingDates"),
      (snapshot) => {
        const receivedDates: ImportedDate[] = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as ImportedDate[];
        const findNewDate = receivedDates.find((date) => {
          return date.id === "nextDate";
        });
        setNextShoppingDate(findNewDate.date);
      }
    );
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(collection(firestore, "Order"), (snapshot) => {
      const receivedOrders: ImportedOrder[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ImportedOrder[];
      const newOrders: Order[] = [];
      const closedOrders: Order[] = [];
      for (const order of receivedOrders) {
        let article: Article;
        let articleAry: Article[] = [];
        if (articles) {
          for (const strArticle of order.articleList) {
            const articleToInsert: ImportedArticle = articles.find(
              (localArtical) => {
                return localArtical.id === strArticle;
              }
            );
            article = new Article(
              articleToInsert.id,
              articleToInsert.name,
              articleToInsert.amount,
              articleToInsert.mart,
              articleToInsert.note && articleToInsert.note,
              articleToInsert.picture && articleToInsert.picture
            );
            articleAry.push(article);
          }
        } else if (!article) {
          article = new Article(
            "UNDEFINED",
            "UNDEFINED",
            0,
            "UNDEFINED",
            "UNDEFINED",
            "UNDEFINED"
          );
          articleAry.push(article);
        }
        if (order.orderDone === "false" || !order.orderDone) {
          closedOrders.push(
            new Order(
              order.id,
              order.seniorId,
              articleAry,
              order.date,
              order.additionalServices && order.additionalServices,
              order.planDate instanceof Date && order.planDate,
              order.employeeId && order.employeeId,
              order.actualPrice && order.actualPrice,
              order.estimatedPrice && order.estimatedPrice,
              order.signDate && order.signDate,
              order.signature && order.signature,
              false
            )
          );
        } else {
          newOrders.push(
            new Order(
              order.id,
              order.seniorId,
              articleAry,
              order.date,
              order.additionalServices && order.additionalServices,
              order.planDate instanceof Date && order.planDate,
              order.employeeId && order.employeeId,
              order.actualPrice && order.actualPrice,
              order.estimatedPrice && order.estimatedPrice,
              order.signDate && order.signDate,
              order.signature && order.signature,
              true
            )
          );
        }
      }

      setOpenOrders(newOrders);
      setClosedOrders(closedOrders);
    });
    return unsub;
  }, [articles]);

  return (
    <DataBaseContext.Provider
      value={{
        openOrders,
        closedOrders,
        nextShoppingDate,
        martList,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};
