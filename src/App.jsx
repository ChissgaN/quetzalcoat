import { useState } from "react";
import {Routes, Route, HashRouter } from "react-router-dom";
import Main from "./components/Main/Main"

import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
