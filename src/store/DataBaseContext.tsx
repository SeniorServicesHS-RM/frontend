import React, { ReactNode, useState } from "react";

interface DataBaseContextInterface {
  article: string;
  changeArticle: () => void;
}

interface Props {
  children?: ReactNode;
}

export const DataBaseContext =
  React.createContext<DataBaseContextInterface | null>(null);

export const DataBaseProvider = ({ children }: Props) => {
  const [article, setArticle] = useState("kek");

  const changeArticle = () => {
    setArticle("muhahahahaha");
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
