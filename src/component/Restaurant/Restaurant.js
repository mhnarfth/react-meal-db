import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
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

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {meals.map((meal) => (
          <Grid item xs={2} sm={4} md={4} key={meal.idMeal}>
            <Meal meal={meal}></Meal>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Restaurant;
