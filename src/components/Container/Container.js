import React from "react";

import CardList from "../CardList/CardList";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";

function Container() {
  return (
    <>
      <Modal />
      <Header />
      <div className="container">
        <CardList />
      </div>
    </>
  );
}

export default Container;