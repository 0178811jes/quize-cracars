import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../Header/Header";

export const CardDataContext = React.createContext("");

const Root = () => {
  const cardData = useLoaderData();
  return (
    <CardDataContext.Provider value={cardData}>
      <div>
        <Header />
        <Outlet />
      </div>
    </CardDataContext.Provider>
  );
};

export default Root;
