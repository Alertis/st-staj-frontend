import React from "react";
import "./App.css";
import AsideMenu from "./components/AsideMenu";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <div className="row">
      <div className="col-2 aside">
        <AsideMenu />
      </div>
      <div className="col-10 main-page">
        <UsersPage />
      </div>
    </div>
  );
}
