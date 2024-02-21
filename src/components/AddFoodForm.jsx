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

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddFoodForm({newFood}) {
    const []
}