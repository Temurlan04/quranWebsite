import React from "react";
import QuranHeader from "./QuranHeader";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <QuranHeader />
      <Outlet />
    </>
  );
}

export default MainLayout;
