import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Cuisine() {
    // Use state for set cuisines
    const [ cuisine, setCuisine ] = useState([]);

    // Get Link Params
    const params = useParams();

    // Get cuisine function
    const getCuisine = async (type) => {
        //console.log(type);
        const check = localStorage.getItem(type);
        if(check) {
            setCuisine(JSON.parse(check));
        } else {
            // Fetch data
            const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`);
            // Format data as json
            const recipes = await data.json();
            // Local storage data
            localStorage.setItem(type, JSON.stringify(recipes.meals));
            // Set cuisine
            setCuisine(recipes.meals);
        }
    }

    // Use Effect for run the get cusing function
    useEffect(() => {
        getCuisine(params.type);
        //console.log(params)
    }, [params.type])

    return (
        <Wrapper
        animate={{ opacity: 1 }} 
        initial={{ opacity: 0 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 0.5 }}>
            {cuisine.map((recipe) => {
                return(
                    <Grid key={recipe.idMeal}>
                        <Link to={'/recipe/'+recipe.idMeal}>
                            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                            <h5>{recipe.strMeal}</h5>
                        </Link>
                    </Grid>
                );
            })}
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    margin: 2rem 0rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
`;

const Grid = styled.div`
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #ddd;

    a {
        text-decoration: none;
        color: #222;
    }

    img {
        display: block;
        width: 100%;
    }

    h5 {
        margin: 0px;
        padding: 15px;
        text-align: center;
        line-height: 1.2em;
    }
`;

export default Cuisine