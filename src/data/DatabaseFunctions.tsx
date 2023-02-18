import { deleteDoc, doc, setDoc, updateDoc } from "@firebase/firestore";
import { firestore } from "../store/Firebase";
import Article from "./Article";
import Order from "./Order";
import User from "./User";

export const addArticleToDatabase = (article: Article) => {
  //const newId = Math.floor(Math.random() * (9999 - 0 + 1) + 0); //We need logic to generate keys!
  const docRef = doc(firestore, "Article", article.id);
  setDoc(docRef, {
    amount: article.amount,
    done: article.done,
    mart: article.mart,
    name: article.name,
    note: article.note ? article.note : "undefined",
    picture: article.picture ? article.picture : "undefined",
    price: article.price,
  });
};
export const updateArticlePriceInDB = (article: Article) => {
  const docRef = doc(firestore, "Article", article.id);
  updateDoc(docRef, {
    price: article.price,
  });
};
export const updateArticleDoneInDB = (article: Article) => {
  const docRef = doc(firestore, "Article", article.id);
  updateDoc(docRef, {
    done: article.done,
  });
};
export const updateAvailabilityInDB = (available: boolean, userId: string) => {
  const docRef = doc(firestore, "users", userId);
  updateDoc(docRef, {
    available: available,
  });
};
export const updateAvailableMartsInDB = (marts: string[], userId: string) => {
  const docRef = doc(firestore, "users", userId);
  updateDoc(docRef, {
    marts: marts,
  });
};

export const updateEmployeeInOrderToDatabase = (order: Order, user: User) => {
  const docRef = doc(firestore, "Order", order.id);
  updateDoc(docRef, {
    employeeId: user ? user.empID : "undefined",
  });
};
export const updateActualPriceOfOrderInDB = (order: Order, price: number) => {
  const docRef = doc(firestore, "Order", order.id);
  updateDoc(docRef, {
    actualPrice: price && price >= 0 ? price : 0,
  });
};
export const updateArticleListToDatabase = (
  order: Order,
  articleList: string[]
) => {
  const docRef = doc(firestore, "Order", order.id);
  updateDoc(docRef, {
    articleList: articleList,
  });
};
export const updateArticleInDB = (article: Article) => {
  const docRef = doc(firestore, "Article", article.id);
  updateDoc(docRef, {
    amount: article.amount,
    mart: article.mart,
    name: article.name,
    note: article.note,
  });
};
export const updateEditableOrderInDB = (order: Order, value: boolean) => {
  const docRef = doc(firestore, "Order", order.id);
  updateDoc(docRef, {
    editable: value,
  });
};

export const addOrderToDatabase = (order: Order) => {
  const getArticlesAsStringAry = () => {
    const newAry: String[] = [];
    for (const article of order.articleList) {
      newAry.push(article.id);
    }
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
    planDate: order.planDate,
    seniorId: order.seniorId,
    signDate: order.signDate ? order.signDate : "undefined",
    signature: order.signature ? order.signature : "undefined",
    orderDone: order.orderDone,
    editable: order.editable ? order.editable : true,
  });
  for (const article of order.articleList) {
    addArticleToDatabase(article);
  }
};

export const deleteOrder = (order: Order) => {
  console.log("delOrder entered");
  console.log(order.id);
  console.log(deleteDoc(doc(firestore, "Order", order.id)));
};
