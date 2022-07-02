import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Restaurant = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);

  const handleSearchField = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
  };

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [searchText]);

  return (
    <div>
      <TextField
        onChange={handleSearchField}
        id="filled-basic"
        label="Enter Desired Meal"
        variant="filled"
      />
      {meals.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default Restaurant;
