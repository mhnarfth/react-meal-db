import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Restaurant from "./component/Restaurant/Restaurant";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Header from "./component/Header/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="restaurant" element={<Restaurant />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
