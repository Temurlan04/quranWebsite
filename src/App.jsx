import React from "react";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import QuranCard from "./components/QuranCard";
import QuranAyath from "./components/QuranAyath";
import NoRoutes from "./components/NoRoutes";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/quran" element={<MainLayout />}>
          <Route path="suras" element={<QuranCard />}></Route>
          <Route path="suras/:suraId/ayath" element={<QuranAyath />}></Route>
          <Route path="*" element={<NoRoutes />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
