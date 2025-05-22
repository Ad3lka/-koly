
import React, { useState } from 'react';

function MyComponents() {
const [foods, setFoods] = useState([]);
function handleAddFood() {
    const newFood = document.getElementById("FoodInput").value;
    document.getElementById("FoodInput").value="";
    
    setFoods((prevFoods) => [...prevFoods, newFood]);
    }
function handleRemoveFood(index) {
    
setFoods(foods.filter((_, i) => i !== index));

    }
    return (<div>     
<h2>List of food</h2>
    <ul>
        {foods.map((food, index) => (
            <li key={index} onClick={() => handleRemoveFood(index)}>
                {food}
                
            </li>
        ))}
    </ul>
    <input type="text" id="FoodInput" placeholder="Enter food name"/>
    <button onClick={handleAddFood}>Add Food</button>



    </div>);
 }
 export default MyComponents;