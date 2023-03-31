import logo from './logo.svg';
import './App.css';
import MyForm from './components/Application';
import './firebase/config';
import Data from './components/Data';
import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import { 
  BrowserRouter as Router,
  Routes, Route
 } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Password from './components/Password';
import Profile from './components/Profile';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  useEffect(() => {
    let findOut = onAuthStateChanged(getAuth(),(user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
    return findOut
  },[])
 
  return (
   <>
    <Router>
       {isLoggedIn ? <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='*' element={<Profile />} />
       </Routes> : <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/password' element={<Password />} />
            <Route path='*' element={<Login />} />
        </Routes>}
    </Router>
   </>
  )
}

export default App;
