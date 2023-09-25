import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Cards from "./cards/Cards";
import Instructions from "./cards/Instructions";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/instructions" element={<Instructions/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
