
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
    return (
        <div>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input
                type="text"
                id="FoodInput"
                placeholder="Enter food name"
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        handleAddFood();
                    }
                }}
            />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
 }
// Přidejte inline styl pro zmenšení tlačítka
<button onClick={handleAddFood} style={{ fontSize: '12px', padding: '4px 8px' }}>Add Food</button>
export default MyComponents;