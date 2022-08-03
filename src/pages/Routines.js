import  Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header';
import { UserContext } from '../UserContext';
import './Routines.css';

const Routines = () => {

  const {user,setUser} = useContext(UserContext);
  const [routineList, setRoutineList] = useState([]);
  const[exerciseList, setExerciseList] = useState('');
  const[routineName, setRoutineName] = useState('');
  const[time, setTime] = useState('');
  const[totalUsage, setTotalUsage] = useState('');

  useEffect(()=> {
    Axios.get("http://localhost:3001/api/get/routines",
    {
      userID : user,
    }).then((response)=>{
      setRoutineList(response.data);
    });
  }, []);

  const submitRoutine = () =>{
    Axios.post('http://localhost:3001/api/insert/routines', 
    {
      userID: user,
      exerciseList: exerciseList,
      time: time,
      totalUsage: totalUsage,
      routineName: routineName
    })

    setRoutineList([
      ...routineList,
      {userID: user,
      exerciseList: exerciseList,
      time: time,
      totalUsage: totalUsage},
    ]);
  };

  return (
    <div>
      
    <div className="exercise">
    <Header/>
      <h1>Routines</h1>

      <div className='postform'>

      <label> name</label>
          <input 
            type= "text" 
            name = "routineName" 
            onChange={(e) =>{
              setRoutineName(e.target.value);
            }}
          />

      <label> exercises</label>
          <input 
            type= "text" 
            name = "postText" 
            onChange={(e) =>{
              setExerciseList(e.target.value);
            }}
          />

       

      <label> total time</label>
        <input 
          type= "text" 
          name = "time" 
          onChange={(e) =>{
            setTime(e.target.value);
          }}
        />

      <label> total caloric usage</label>
        <input 
          type= "text" 
          name = "totalUsage" 
          onChange={(e) =>{
            setTotalUsage(e.target.value);
          }}
        />


      
      </div>
      <button onClick={submitRoutine}>Submit</button>
    </div>
    {routineList.map((val)=>{
      return( 
        <div className='outline'>
          <div className="card">
            
            <div>{val.routineID}For: {val.exerciseList}| during a total time of: {val.time}| you burn {val.totalUsage} calories!</div> 
            
        </div>
        </div>
    )})}
    </div>
  )
}

export default Routines
