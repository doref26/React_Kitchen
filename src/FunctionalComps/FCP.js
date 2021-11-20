export default function FCRecipe(props) {

  return (
    <div style={{
      border: "solid green 2px",
      margin: 15,
      padding: 10,
      borderRadius: 10
    }}>
      <div>{props.pic}</div>
      <div>{props.DishName}</div>
      <div>{props.DishDesc}</div>
      <input type="button" value="Prepare Dish" />
    </div>
  );
}