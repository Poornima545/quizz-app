import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Cards from './cards/Cards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cards" element={<Cards/>}/>
        </Routes>
        </BrowserRouter>
  </div>
  );
}

export default App;
