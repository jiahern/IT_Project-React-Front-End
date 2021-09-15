import React from "react";
import { useFoods, useOneFood } from "../api";

export default function Foods() {
  const { loading, foods, error } = useFoods();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <section id="foodList">
      <h1>Food List</h1>
      <div>{foods}</div>
      {/* <ul>
        {foods.map((food) => (
          <Food key={food._id} {...food} />
        ))}
      </ul> */}
    </section>
  );
}

function Food(food) {
  const { _id, name, photo } = food;

  return (
    <table>
      <tr>
        <td>
          <a href={"/linkage/" + _id}>{name}</a>
        </td>
      </tr>
      {/* <tr>
        <td>
          <img
            class="#foodList"
            src={"https://source.unsplash.com/" + photo}
          ></img>
        </td>
      </tr> */}
    </table>
  );
}
