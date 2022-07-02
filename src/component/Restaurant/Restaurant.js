import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Restaurant = () => {

    const [searchText, setSearchText] = useState('');
    const [meal, setMeal] = useState([]);

    const handleSearchField = e => {
        const searchText = e.target.value;
        setSearchText(searchText);

    }
    

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    useEffect(()=> {
        fetch (url)
        .then (res=> res.json())
        .then (data=> setMeal(data));
    }, [searchText]);
    console.log(meal);


    return (
        <div>
            <TextField onChange={handleSearchField} id="filled-basic" label="Enter Desired Meal" variant="filled" />
        </div>
    );
};

export default Restaurant;