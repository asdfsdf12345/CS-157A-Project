import {BrowserRouter, Route, Routes} from "react-router-dom";

import { useState } from 'react';
import './App.css';
import Axios from 'axios';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Exercises from "./pages/Exercises";
import FoodItems from "./pages/FoodItems";
import Posts from "./pages/Posts";
import { UserContext } from "./UserContext";
import History from "./pages/History";
import Routines from "./pages/Routines";
import Progress from "./pages/Progress";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState('');


  return (
    <UserContext.Provider value ={{user, setUser}}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/exercises" element={<Exercises/>}/>
        <Route path="/foods" element={<FoodItems/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/routines" element={<Routines/>}/>
        <Route path="/progress" element={<Progress/>}/>
        
    </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
