
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Save from "./pages/Save";
import List from "./pages/List";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/save" element={<Save />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

