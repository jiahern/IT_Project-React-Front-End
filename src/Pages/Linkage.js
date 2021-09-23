import React from "react";
import { UseFoods, useOneFood } from "../api";

export default function Linkage() {
  const { loading, foods, error } = UseFoods();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
  }

  return (
    <section id="foodList">
      <h1>Food List</h1>
      {foods.map((item, index) => {
        return (
          <li key={index} email={item.email}>
            {item.email}
            {item.firstName}
          </li>
        );
      })}
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
