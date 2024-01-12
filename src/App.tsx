import Header from "./components/Header";
import Footer from "./components/Footer";
import classes from "./App.module.scss";
// import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import AlbumBig from "./components/AlbumBig";
import Albums, { AlbumItem } from "./components/Albums";
import React, { useState } from "react";
import OrderPage from "./components/OrderPage";
import AboutUs from "./components/AboutUs";
import DeliveryAndPayment from "./components/DeliveryAndPayment";
import Catalog from "./components/Catalog";
import { useDispatch, useSelector } from "react-redux";


const App = () => {


  return (
    <div className={classes.container}>
    <Header />

    <Routes>
      <Route path="*" element={<MainPage />} />

      <Route path="/about" element={<AboutUs />} />
      <Route path="/deliveryAndPayment" element={<DeliveryAndPayment />} />

      <Route
        path="/orderPage"
        element={<OrderPage />}
      />

      {Albums.map((el, index) => (
        <Route
          key={index}
          path={el.path}
          element={<AlbumBig allObj={el} />}
        />
      ))}

      <Route
        path="/catalog"
        element={<Catalog />}
      />
    </Routes>
    <Footer />
  </div>
  )
}

export default App;