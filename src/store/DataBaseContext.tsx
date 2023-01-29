import React, { ReactNode, useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";

import { firestore } from "./Firebase";
import Article from "../data/Article";
import Order from "../data/Order";
import User from "../data/User";
import { closeSync } from "fs";

interface ImportedArticle {
  id: string;
  beginDate?: Date; //all 3 necessary? -> one should be enough!
  changeDate?: Date;
  endDate?: Date;
  name: string;
  note: string;
  amount: number;
  mart: string;
  done: boolean;
  price: number;
  picture?: string; //Datatype? gotta check!
}

interface ImportedOrder {
  id: string;
  seniorId: string;
  orderDone: string;
  articleList: string[];
  date: Date | any;
  additionalServices?: string[];
  planDate?: Date | any;
  employeeId?: string;
  actualPrice?: number;
  estimatedPrice?: number;
  signDate?: Date;
  signature?: string;
  editable?: boolean;
}

interface ImportedDate {
  id: string;
  date: Date | any;
}
interface ImportedMart {
  id: string;
  name: string;
}
interface ImportedService {
  id: string;
  desc: string;
}

interface DataBaseContextInterface {
  openOrders: Order[];
  closedOrders: Order[];
  nextShoppingDate: Date | any;
  martList: string[];
  serviceList: string[];
  userId: string;
  users: User[];
  handleUserId: (userId: string) => void;
}

interface Props {
  children?: ReactNode | ReactNode[];
}

interface UserInterface {
  role: number;
  id: string;
  plannerId?: string;
  marts?: string[];
  employeeId?: string;
  seniorId?: string;
  firstName?: string;
  lastName?: string;
  available?: boolean;
}

export const DataBaseContext =
  React.createContext<DataBaseContextInterface | null>(null);

export const DataBaseProvider = ({ children }: Props) => {
  const [articles, setArticles] = useState<ImportedArticle[] | null>(null);
  const [openOrders, setOpenOrders] = useState<Order[] | null>(null);
  const [nextShoppingDate, setNextShoppingDate] = useState<Date | null>(null);
  const [closedOrders, setClosedOrders] = useState<Order[] | null>(null);
  const [martList, setMarts] = useState<string[] | null>(null);
  const [serviceList, setServiceList] = useState<string[] | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  const handleUserId = (userId: string) => {
    setUserId(userId);
  };

  useEffect(() => {
    const unsub = onSnapshot(collection(firestore, "users"), (snapshot) => {
      const receivedUsers: UserInterface[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as UserInterface[];
      setUsers(
        receivedUsers.map((user) => {
          return new User(
            user.firstName,
            user.lastName,
            user.id,
            user.role,
            user.role === 2 ? user.employeeId : undefined,
            user.role === 3 ? user.seniorId : undefined,
            user.role === 1 ? user.plannerId : undefined,
            user.available,
            user.marts
          );
        })
      );
    });
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(collection(firestore, "Article"), (snapshot) => {
      const receivedArticles: ImportedArticle[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ImportedArticle[];
      setArticles(receivedArticles);
    });
    console.log("article called");
    return unsub;
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(collection(firestore, "Marts"), (snapshot) => {
      const recievedMarts: ImportedMart[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ImportedMart[];
      const martList: string[] = [];
      for (const mart of recievedMarts) {
        martList.push(mart.name);
      }
      setMarts(martList);
    });
    console.log("Marts called");

    return unsub;
  }, []);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(firestore, "AdditionalServices"),
      (snapshot) => {
        const recievedServices: ImportedService[] = snapshot.docs.map(
          (doc) => ({
            ...doc.data(),
            id: doc.id,
          })
        ) as ImportedService[];
        const serviceList: string[] = [];
        for (const service of recievedServices) {
          serviceList.push(service.desc);
        }
        setServiceList(serviceList);
      }
    );
    console.log("AddServices called");

    return unsub;
  }, []);

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
        setNextShoppingDate(findNewDate.date.toDate());
        console.log("in DB: ", findNewDate.date.toDate());
      }
    );
    console.log("ShoppingDates called");

    return unsub;
  }, []);

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
              articleToInsert.done,
              articleToInsert.price,
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
            false,
            0,
            "UNDEFINED",
            "UNDEFINED"
          );
          articleAry.push(article);
        }
        if (order.orderDone === "true" || order.orderDone) {
          closedOrders.push(
            new Order(
              order.id,
              order.seniorId,
              articleAry,
              order.date.toDate(),
              order.additionalServices && order.additionalServices,
              order.planDate.toDate(),
              order.employeeId && order.employeeId,
              order.actualPrice && order.actualPrice,
              order.estimatedPrice && order.estimatedPrice,
              order.signDate && order.signDate,
              order.signature && order.signature,
              true,
              order.editable && order.editable
            )
          );
        } else {
          newOrders.push(
            new Order(
              order.id,
              order.seniorId,
              articleAry,
              order.date.toDate(),
              order.additionalServices && order.additionalServices,
              order.planDate.toDate(),
              order.employeeId && order.employeeId,
              order.actualPrice && order.actualPrice,
              order.estimatedPrice && order.estimatedPrice,
              order.signDate && order.signDate,
              order.signature && order.signature,
              false,
              order.editable && order.editable
            )
          );
        }
      }

      setOpenOrders(newOrders);
      setClosedOrders(closedOrders);
    });
    console.log("orders called");
    return unsub;
  }, [articles]);

  return (
    <DataBaseContext.Provider
      value={{
        openOrders,
        closedOrders,
        nextShoppingDate,
        martList,
        serviceList,
        userId,
        handleUserId,
        users,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};
