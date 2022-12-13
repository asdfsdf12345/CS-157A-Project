import  Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import './FoodItems.css';
import Header from '../Header';
import { UserContext } from '../UserContext';

const FoodItems = () => {
  const {user,setUser} = useContext(UserContext);

  const [foodList, setFoodList] = useState([]);
  const[foodName, setFoodName] = useState('');
  const[calorieVal, setCalorieVal] = useState('');
  const[carbohydrates, setCarbohydrates] = useState('');
  const[protein, setProtein] = useState('');
  const[sugar, setSugar] = useState('');
  const[fiber, setFiber] = useState('');
  const[sodium, setSodium] = useState('');


  useEffect(()=> {
    Axios.get("http://localhost:3001/api/get/foods").then((response)=>{
      setFoodList(response.data)
    });
  }, []);

  const submitFoodItems = () =>{
    Axios.post('http://localhost:3001/api/insert/foods', 
    {
      foodName: foodName, 
      calorieVal: calorieVal, 
      carbohydrates: carbohydrates,
      protein: protein,
      sugar: sugar,
      fiber: fiber,
      addedby: user,
      sodium: sodium,
    })

    setFoodList([
      ...foodList,
      {foodName: foodName, 
        calorieVal: calorieVal, 
        carbohydrates: carbohydrates,
        protein: protein,
        sugar: sugar,
        fiber: fiber,
        sodium: sodium},
    ]);

  };

  return (
    <div>
    <div className="exercise">
    <Header/>
      <h1>Food Items</h1>

      <div className='form'>
      <label> food name </label>
          <input 
            type= "text" 
            name = "foodName" 
            onChange={(e) =>{
              setFoodName(e.target.value);
            }}
          />

          <label> calories</label>
          <input  
            type= "text" 
            name = "calorieVal"
            onChange={(e) =>{
              setCalorieVal(e.target.value);
            }}
          />

          <label> carbohydrates</label>
          <input  
            type= "text" 
            name = "carbohydrates"
            onChange={(e) =>{
              setCarbohydrates(e.target.value);
            }}
          />

          <label> protein</label>
          <input  
            type= "text" 
            name = "protein"
            onChange={(e) =>{
              setProtein(e.target.value);
            }}
          />

          <label> sugar</label>
          <input  
            type= "text" 
            name = "sugar"
            onChange={(e) =>{
              setSugar(e.target.value);
            }}
          />

          <label> fiber</label>
          <input  
            type= "text" 
            name = "fiber"
            onChange={(e) =>{
              setFiber(e.target.value);
            }}
          />

          <label> sodium</label>
          <input  
            type= "text" 
            name = "sodium"
            onChange={(e) =>{
              setSodium(e.target.value);
            }}
          />

      </div>
      <button onClick={submitFoodItems}>Submit</button>
    </div>
    {foodList.map((val)=>{
      return( 
        <div className='outline'>
          <div className="card">
            <div>{val.foodName}| calories: {val.calorieVal} carbs: {val.carbohydrates} protein: {val.protein} sugar: {val.sugar} fiber: {val.fiber} sodium: {val.sodium}</div> 
            
        </div>
        </div>
    )})}
    </div>
  )
}

export default FoodItems
