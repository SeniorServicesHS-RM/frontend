import React, { ReactNode, useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";

import { firestore } from "./Firebase";
import Article from "../data/Article";
import Order from "../data/Order";

interface ImportedArticle {
  id: string;
  beginDate?: Date; //all 3 necessarz? -> one should be enough!
  changeDate?: Date;
  endDate?: Date;
  name: string;
  //description: string;  there is no such thing as a description at the moment :/
  note: string;
  amount: number;
  mart: string;
  // categorie: string; not needed
  picture?: string; //Datatype? gotta check!
}

interface ImportedOrder {
  id: string;
  seniorId: string;
  orderDone: boolean;
  articleList: String[];
  // amount: number;
  date: Date;
  //unit?: string;
  additionalServices?: string[];
  // mart: string;
  planDate?: Date | string;
  employeeId?: string;
  actualPrice?: number;
  estimatedPrice?: number;
  signDate?: Date;
  signature?: string;
}
interface DataBaseContextInterface {
  articles: ImportedArticle[];
  changeArticles: () => void;
  openOrders: Order[];
}

interface Props {
  children?: ReactNode | ReactNode[];
}

export const DataBaseContext =
  React.createContext<DataBaseContextInterface | null>(null);

export const DataBaseProvider = ({ children }: Props) => {
  const [articles, setArticles] = useState<ImportedArticle[] | null>(null);
  const [openOrders, setOpenOrders] = useState<Order[] | null>(null);
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
    const unsub = onSnapshot(collection(firestore, "Order"), (snapshot) => {
      const receivedOrders: ImportedOrder[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ImportedOrder[];
      // console.log(receivedOrders);
      const newOrders: Order[] = [];
      for (const order of receivedOrders) {
        let article: Article;
        let articleAry: Article[] = [];
        // console.log(articles);
        if (articles) {
          // console.log(order);
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
              // articleToInsert.categorie && articleToInsert.categorie,
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

        newOrders.push(
          new Order(
            order.id,
            order.seniorId,
            articleAry,
            // order.amount,
            order.date,
            // order.unit && order.unit,
            // order.mart && order.mart,
            order.additionalServices && order.additionalServices,
            order.planDate instanceof Date && order.planDate,
            order.employeeId && order.employeeId,
            order.actualPrice && order.actualPrice,
            order.estimatedPrice && order.estimatedPrice,
            order.signDate && order.signDate,
            order.signature && order.signature
          )
        );
      }

      setOpenOrders(newOrders);
    });
    return unsub;
  }, [articles]);

  const changeArticles = () => {
    setArticles(null);
  };

  return (
    <DataBaseContext.Provider
      value={{
        articles: articles,
        changeArticles,
        openOrders,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};
