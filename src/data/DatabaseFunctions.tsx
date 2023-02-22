import { deleteDoc, doc, setDoc, updateDoc } from "@firebase/firestore";
import { firestore } from "../store/Firebase";
import Article from "./Article";
import Order from "./Order";
import User from "./User";

export const addArticleToDatabase = (article: Article) => {
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
  console.log("updateArticlePrice called");
  console.log(article.id);
  const docRef = doc(firestore, "Article", article.id);
  updateDoc(docRef, {
    price: article.price,
  });
};
export const updateArticleDoneInDB = (article: Article) => {
  console.log("updateArticleDone called");
  console.log(article.id);
  const docRef = doc(firestore, "Article", article.id);
  updateDoc(docRef, {
    done: article.done,
  });
};
export const updateAvailabilityInDB = (available: boolean, userId: string) => {
  console.log("updateAvailability called");
  const docRef = doc(firestore, "users", userId);
  updateDoc(docRef, {
    available: available,
  });
};
export const updateAvailableMartsInDB = (marts: string[], userId: string) => {
  console.log("updateAvailableMarts called");
  const docRef = doc(firestore, "users", userId);
  updateDoc(docRef, {
    marts: marts,
  });
};

export const updateEmployeeInOrderInDB = (order: Order, user: User) => {
  console.log("updateEmployeeInOrder called");
  console.log(order.id);
  const docRef = doc(firestore, "Order", order.id);
  updateDoc(docRef, {
    employeeId: user ? user.empID : "undefined",
  });
};
export const updateActualPriceOfOrderInDB = (order: Order, price: number) => {
  console.log("updateActualPriceOfOrder called");
  console.log(order.id);
  const docRef = doc(firestore, "Order", order.id);
  updateDoc(docRef, {
    actualPrice: price && price >= 0 ? price : 0,
  });
};
export const updateArticleListInDB = (order: Order, articleList: string[]) => {
  console.log("updateArticleList called");
  console.log(order.id);
  const docRef = doc(firestore, "Order", order.id);
  updateDoc(docRef, {
    articleList: articleList,
  });
};
export const updateArticleInDB = (article: Article) => {
  console.log("updateArticle called");
  console.log(article.id);
  const docRef = doc(firestore, "Article", article.id);
  updateDoc(docRef, {
    amount: article.amount,
    mart: article.mart,
    name: article.name,
    note: article.note,
  });
};
export const updateEditableOrderInDB = (order: Order, value: boolean) => {
  console.log("updateEditableOrder called");
  console.log(order.id);
  const docRef = doc(firestore, "Order", order.id);
  updateDoc(docRef, {
    editable: value,
  });
};
export const updateOrderDoneInDB = (order: Order, value: boolean) => {
  console.log("updateOrderDone called");
  console.log(order.id);
  const docRef = doc(firestore, "Order", order.id);
  updateDoc(docRef, { orderDone: value });
};
export const addOrderToDatabase = (order: Order) => {
  console.log("addOrderToDatabase called");
  console.log(order.id);
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
  console.log("delOrder called");
  console.log(order.id);
  console.log(deleteDoc(doc(firestore, "Order", order.id)));
};
