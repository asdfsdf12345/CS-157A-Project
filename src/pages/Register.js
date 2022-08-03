
import React, { useEffect, useState } from 'react'
import  Axios from 'axios';
import './Register.css';
import Header from '../Header';

const Register = () => {
  const[regEmail, setRegEmail] = useState('');
  const[regPassword, setRegPassword] = useState('');
  const[regName, setRegName] = useState('');
  const[regWeight, setRegWeight] = useState('');

  const submitRegister = () =>{
    Axios.post('http://localhost:3001/api/insert/user', 
    {
      regEmail: regEmail, 
      regPassword: regPassword, 
      regName: regName, 
      regWeight:regWeight,
    }).then(() => {
      alert("success");
    });
  };

  return (
    <div className="App">
      <Header/>
        <h1> Register</h1>

        <div className='form'>

          <label> email</label>
          <input 
            type= "text" 
            name = "regEmail" 
            onChange={(e) =>{
              setRegEmail(e.target.value);
            }}
          />

          <label> password</label>
          <input  
            type= "text" 
            name = "regPassword"
            onChange={(e) =>{
              setRegPassword(e.target.value);
            }}
          />

          <label> Full Name</label>
          <input  
            type= "text"
            name = "regName"
            onChange={(e) =>{
              setRegName(e.target.value);
            }}
          />

          <label> weight</label>
          <input  
            type= "text" 
            name = "regWeight"
            onChange={(e) =>{
              setRegWeight(e.target.value);
            }}
          />

          <button onClick={submitRegister}>Submit</button>

        </div>

       

    </div>
  );
}

export default Register
