import { useEffect, useState } from "react";
import AnimalForm from "./Pages/AnimalForm";
import Header from "./Pages/Header";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="link-container">
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
      </div>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/add" element={<AnimalForm></AnimalForm>} />
      </Routes>
    </>
  );
}
