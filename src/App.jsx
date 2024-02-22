import "./App.css";
// import foodsJson from "./foods.json";
// import { useState } from "react";
// import FoodBox from "./components/FoodBox";
import FoodList from "./components/FoodList"
import AddFoodForm from "./components/AddFoodForm";

function App() {
  // const [foods, setFoods] = useState(foodsJson);
  return (
    <div className="App">
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
