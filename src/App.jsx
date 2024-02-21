import "./App.css";
// import foodsJson from "./foods.json";
// import { useState } from "react";
// import FoodBox from "./components/FoodBox";
import FoodList from "./components/FoodList"

function App() {
  // const [foods, setFoods] = useState(foodsJson);
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      {/* <FoodBox
        food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1,
        }}
      /> */}
      <FoodList />
    </div>
  );
}

export default App;
