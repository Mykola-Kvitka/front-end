import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import NotFound from "./components/NotFound";
import Header from "./components/Header/Header";
import About from "./components/About";
import React from "react";
import UrlTableView from "./pages/UrlTableView";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path={"/"} element={<Navigate to="/home" />} />
            <Route path={"/home"} element={<UrlTableView />} />
            <Route path={"/*"} element={<NotFound />} />
            <Route path={"/*"} element={<About />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
