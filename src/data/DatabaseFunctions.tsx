import Article from "./Article";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
} from "@firebase/firestore";
import { firestore } from "../store/Firebase";
import Order from "./Order";

export const addArticleToDatabase = (article: Article) => {
  //const newId = Math.floor(Math.random() * (9999 - 0 + 1) + 0); //We need logic to generate keys!
  const docRef = doc(firestore, "Article", article.id);
  setDoc(docRef, {
    name: article.name,
    note: article.note ? article.note : "undefined",
    category: article.category ? article.category : "undefined",
    picture: article.picture ? article.picture : "undefined",
  });
};

export const addOrderToDatabase = (order: Order) => {
  const docRef = doc(firestore, "Order", order.id);
  setDoc(docRef, {
    additionalServices: order.additionalServices
      ? order.additionalServices
      : ["undefined"],
    amount: order.amount,
    article: order.article.id,
    date: order.date,
    seniorId: order.seniorId,
    unit: order.unit ? order.unit : "undefined",
  });
  addArticleToDatabase(order.article);
};
