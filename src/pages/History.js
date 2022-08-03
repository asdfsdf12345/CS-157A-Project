import  Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header';
import { UserContext } from '../UserContext'

const History = () => {
  const {user,setUser} = useContext(UserContext);
  const [historyList, setHistoryList] = useState([]);
  const[exercise, setExercise] = useState('');
  const[time, setTime] = useState('');
  const[date, setDate] = useState('');

  useEffect(()=> {
    Axios.get("http://localhost:3001/api/get/history").then((response)=>{
      setHistoryList(response.data)
    });
  }, []);

  const submitHistory = () =>{
    Axios.post('http://localhost:3001/api/insert/history', 
    {
      exercise: exercise, 
      time: time, 
      date: date,
    })

    setHistoryList([
      ...historyList,
      {exercise: exercise, time: time, date:date},
    ]);
  };

  return (
    
    <div>
      
    <div className="exercise">
      <Header/>
      <h1>History</h1>

      <div className='form'>
      <label> exercise </label>
          <input 
            type= "text" 
            name = "exercise" 
            onChange={(e) =>{
              setExercise(e.target.value);
            }}
          />

          <label> time</label>
          <input  
            type= "text" 
            name = "time"
            onChange={(e) =>{
              setTime(e.target.value);
            }}
          />

          <label> date</label>
          <input  
            type= "text" 
            name = "date"
            onChange={(e) =>{
              setDate(e.target.value);
            }}
          />

      </div>
      <button onClick={submitHistory}>Submit</button>
    </div>
    {historyList.map((val)=>{
      return( 
        <div className='outline'>
          <div className="card">
            
            <div>{val.date}| {val.exercise}: time: {val.time}</div> 
            
        </div>
        </div>
    )})}
    </div>
   
  )
}

export default History
