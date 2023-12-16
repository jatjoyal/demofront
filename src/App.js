import logo from './logo.svg';
import './App.css';
import Login from './Components/login/Login';
import Register from './Components/Admin/Country/Register/Register';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup'element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
