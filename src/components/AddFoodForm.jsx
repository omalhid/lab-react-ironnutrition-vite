// Your code here
// In the src/components/AddFoodForm.jsx file, create a new controlled component named AddFoodForm that lets you add new food items to your list.

// The component should contain a form with four (4) input elements:

// Input with the label Name with attributes: name="name" and type="text"
// Input with the label Image with attributes: name="image" and type="text"
// Input with the label Calories with attributes: name="calories" and type="number"
// Input with the label Servings with attributes: name="servings" and type="number"

// The form should have a submit button displaying the text Create.


// Once you've created the AddFoodForm component, render it in App.js. When the submit button is clicked, the new food item should be added to the list.

// Hint: To add a new food item to the foods array, which is in the state of the App component, you have to pass a function from the App to the AddFoodForm component through props. This function should take the values entered in the input fields and add them as a new object to the foods array.

import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
 
function AddFoodForm({ addFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
 
  const handleNameInput = e => setName(e.target.value);
 
  const handleImageInput = e => setImage(e.target.value);
 
  const handleCaloriesInput = e => setCalories(e.target.value);
 
  const handleServingsInput = e => setServings(e.target.value);


  const handleSubmit = (e) => {
    
    e.preventDefault(); // prevents the form from reloading the page
    // Add the logic to create a new movie and add it to the state variable movies
    const _id = uuidv4(); // generate a unique identifier

    const newFood = {
        _id, 
        name, 
        image,
        calories,
        servings
    }
    console.log('newFood', newFood)
    addFood(newFood) // updates the movies state variable
    // this resets the form to its initial state
    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
  }
 
  return (
    <div className="AddFood">
      <h4>Add a Dish</h4>
      <form onSubmit={handleSubmit}> 
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={handleNameInput} 
        />
 
        <label>Image:</label>
        <input 
          type="text" 
          name="image" 
          value={image} 
          onChange={handleImageInput} 
        />
 
        <label>Calories:</label>
        <input 
          type="number" 
          name="calories" 
          value={calories} 
          onChange={handleCaloriesInput} 
        />
 
        <label>Servings:</label>
        <input 
          type="number" 
          name="servings" 
          value={servings} 
          onChange={handleServingsInput} 
        />
 
        <button type="submit">Add a Dish</button>
      </form>
    </div>
  );
}
 
export default AddFoodForm;