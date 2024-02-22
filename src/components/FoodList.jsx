import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import { useState } from "react";

function Foodlist() {
  const [foods, setFoods] = useState(foodsJson);
  const [showForm, setShowForm] = useState(false);

  const deleteFood = (id) => {
    const filteredArray = foods.filter((e) => e.id !== id);
    setFoods(filteredArray);
  };

  const addFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  return (
    <div>
      <h1>LAB | React IronNutrition</h1>
      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        {showForm ? "Hide form" : "Show form"}
      </button>
      {showForm && <AddFoodForm addFood={addFood} />}
      {foods.map((e) => {
        return <FoodBox key={e.id} food={e} deleteFood={deleteFood} />;
      })}
    </div>
  );
}

export default Foodlist;
