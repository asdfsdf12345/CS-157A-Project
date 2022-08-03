import React, { useContext, useState } from 'react'
import Header from '../Header';
import { UserContext } from '../UserContext';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

  const {user,setUser} = useContext(UserContext);
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[loginStatus, setLoginStatus] = useState("");

  const submitLogin = async() =>{
    console.log("hello");
    Axios.post('http://localhost:3001/api/insert/login', 
    {
      email: email, 
      password: password, 
    }).then((response) => {
      console.log(response.data);
      if(response.data[0] == null){
        setLoginStatus("Incorrect username and/or password");
        console.log(loginStatus);
      } else{
        setLoginStatus("You have succesfully logged in");
        setUser(response.data[0].userID);
        console.log(user);
        
      }
    });
  };

  return (
    <div className="App">
    <Header/>
      <h1> Login</h1>

      <div className='form'>

        <label> email</label>
        <input 
          type= "text" 
          name = "email" 
          onChange={(e) =>{
            setEmail(e.target.value);
          }}
        />

        <label> password</label>
        <input  
          type= "text" 
          name = "regPassword"
          onChange={(e) =>{
            setPassword(e.target.value);
          }}
        />

        <button onClick={submitLogin}>Submit</button>

      </div>
      <h1>{loginStatus}</h1>
     

  </div>
  )
}

export default Login
