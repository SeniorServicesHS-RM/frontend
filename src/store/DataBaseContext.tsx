import React, { ReactNode, useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";

import { firestore } from "./Firebase";
import Article from "../data/Article";
import Order from "../data/Order";

interface ImportedArticle {
  id: string;
  beginDate: Date; //all 3 necessarz? -> one should be enough!
  changeDate?: Date;
  endDate?: Date;
  name: string;
  //description: string;  there is no such thing as a description at the moment :/
  note: string;
  categorie: string;
  picture?: string; //Datatype? gotta check!
}

interface ImportedOrder {
  id: string;
  seniorId: string;
  orderDone: boolean;
  article: string;
  amount: number;
  date: Date;
  unit?: string;
  additionalServices?: string[];
  mart?: string;
  planDate?: Date | string;
  employeeId: string;
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
      console.log(receivedOrders);
      const newOrders: Order[] = [];
      for (const order of receivedOrders) {
        let article: Article;
        console.log(articles);
        if (articles) {
          const articleToInsert: ImportedArticle = articles.find((article) => {
            return article.id === order.article;
          });
          article = new Article(
            articleToInsert.id,
            articleToInsert.name,
            articleToInsert.note && articleToInsert.note,
            articleToInsert.categorie && articleToInsert.categorie,
            articleToInsert.picture && articleToInsert.picture
          );
        } else if (!article) {
          article = new Article(
            "UNDEFINED",
            "UNDEFINED",
            "UNDEFINED",
            "UNDEFINED",
            "UNDEFINED"
          );
        }

        newOrders.push(
          new Order(
            order.id,
            order.seniorId,
            article,
            order.amount,
            order.date,
            order.unit && order.unit,
            order.additionalServices && order.additionalServices,
            order.mart && order.mart,
            order.planDate instanceof Date && order.planDate,
            order.employeeId && order.employeeId
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
