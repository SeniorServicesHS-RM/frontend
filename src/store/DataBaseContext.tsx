import React, { ReactNode, useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
  addDoc,
} from "@firebase/firestore";

import { firestore } from "./Firebase";

interface ImportedArticle {
  title: string;
  id: string;
}
interface DataBaseContextInterface {
  article: ImportedArticle[];
  changeArticle: () => void;
}

interface Props {
  children?: ReactNode;
}

export const DataBaseContext =
  React.createContext<DataBaseContextInterface | null>(null);

export const DataBaseProvider = ({ children }: Props) => {
  const [article, setArticle] = useState<ImportedArticle[] | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(collection(firestore, "Article"), (snapshot) => {
      const receivedArticles: ImportedArticle[] = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as ImportedArticle[];
      setArticle(receivedArticles);
    });
    return unsub;
  }, []);

  const changeArticle = () => {
    setArticle(null);
  };

  return (
    <DataBaseContext.Provider
      value={{
        article,
        changeArticle,
      }}
    >
      {children}
    </DataBaseContext.Provider>
  );
};
