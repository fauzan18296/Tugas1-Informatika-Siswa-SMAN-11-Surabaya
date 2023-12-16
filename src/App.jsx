import { useState } from "react";
import Title from "./Components/TitleComp";
import NavStorage from "./Components/NavStorageComp";
import BarFitur from "./Components/BarFiturComp";
import ListItems from "./Components/ListItemsComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Style/LandingPages.css";

export default function App() {
  return (
    <div className="myBg">
      <Title />
      <NavStorage />
      <BarFitur />
      <ListItems />
    </div>
  );
}
