import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import { useState } from "react";

function Foodlist() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = (id) => {
    const filteredArray = foods.filter((e) => e.id !== id);
    setFoods(filteredArray);
  };

  return (
    <div>
      {foods.map((e) => {
        return <FoodBox key={e.id} food={e} deleteFood={deleteFood} />;
      })}
    </div>
  );
}

export default Foodlist;
