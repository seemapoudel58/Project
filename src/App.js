import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import './index.css';
import SectionOne from "./Components/banner/sectionOne";
import Nav from "./Components/navbar/nav";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<SectionOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
