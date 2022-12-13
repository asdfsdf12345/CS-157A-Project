import  Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header';
import { UserContext } from '../UserContext';


const Exercises = () => {

  const {user,setUser} = useContext(UserContext);
  const [exerciseList, setExerciseList] = useState([]);
  const[exercise, setExercise] = useState('');
  const[caloricUsage, setCaloricUsage] = useState('');

  useEffect(()=> {
    Axios.get("http://localhost:3001/api/get/exercises").then((response)=>{
      setExerciseList(response.data)
    });
  }, []);

  const submitExercise = () =>{
    Axios.post('http://localhost:3001/api/insert/exercises', 
    {
      exercise: exercise, 
      caloricUsage: caloricUsage, 
      addedBy: user,
    })

    setExerciseList([
      ...exerciseList,
      {name: exercise, caloricUsage: caloricUsage},
    ]);
  };

  return (
    
    <div>
      
    <div className="exercise">
      <Header/>
      <h1>Exercises</h1>

      <div className='form'>
      <label> exercise </label>
          <input 
            type= "text" 
            name = "exercise" 
            onChange={(e) =>{
              setExercise(e.target.value);
            }}
          />

          <label> caloric usage/minute</label>
          <input  
            type= "text" 
            name = "caloricUsage"
            onChange={(e) =>{
              setCaloricUsage(e.target.value);
            }}
          />
      </div>
      <button onClick={submitExercise}>Submit</button>
    </div>
    {exerciseList.map((val)=>{
      return( 
        <div className='outline'>
          <div className="card">
            
            <div>{val.name}| caloric usage/minute: {val.caloricUsage}</div> 
            
        </div>
        </div>
    )})}
    </div>
   
  )
}

export default Exercises
