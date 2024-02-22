// Your code here
function FoodBox(props) {
  const {
    food, deleteFood
  } = props;

  return (
    <div>
          <p>{food.name}</p>

          <img src={food.image} style={{width:300}} />

      <p>Calories: {food.calories}</p>
      <p>Servings {food.servings}</p>

      <p>
        <b>Total Calories: {food.servings*food.calories} </b> kcal
      </p>

      <button onClick={() => deleteFood(food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
