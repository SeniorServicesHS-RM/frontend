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
    amount: article.amount,
    mart: article.mart,
    name: article.name,
    note: article.note ? article.note : "undefined",
    // category: article.category ? article.category : "undefined",
    picture: article.picture ? article.picture : "undefined",
  });
};

export const addOrderToDatabase = (order: Order) => {
  const getArticlesAsStringAry = () => {
    const newAry: String[] = [];
    for (const article of order.articleList) {
      newAry.push(article.id);
    }
    console.log(newAry);
    return newAry;
  };
  const docRef = doc(firestore, "Order", order.id);
  setDoc(docRef, {
    actualPrice: order.aktualPrice ? order.aktualPrice : 0,
    additionalServices: order.additionalServices
      ? order.additionalServices
      : ["undefined"],
    articleList: getArticlesAsStringAry(),
    date: order.date,
    employeeId: order.employeeId ? order.employeeId : "undefined",
    estimatedPrice: order.estimatedPrice ? order.estimatedPrice : 0,
    planDate: order.planDate ? order.planDate : "undefined",
    seniorId: order.seniorId,
    signDate: order.signDate ? order.signDate : "undefined",
    signature: order.signature ? order.signature : "undefined",
  });
  for (const article of order.articleList) {
    addArticleToDatabase(article);
  }
  // addArticleToDatabase(order.article);
};
