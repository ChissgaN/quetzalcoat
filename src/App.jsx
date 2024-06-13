import {Routes, Route, HashRouter } from "react-router-dom";
import Main from "./components/Main/Main"
import MainArqui from "./components/Products/Arquitectonicos/MainArqui";
import MainIndustri from "./components/Products/Industriales/MainIndustri";
import MainEspe from "./components/Products/Especialidades/MainEspe";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/productosArquitectonicos" element={<MainArqui />} />
          <Route path="/productosIndustriales" element={<MainIndustri />} />
          <Route path="/Especialidades" element={<MainEspe/>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
