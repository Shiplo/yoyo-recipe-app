import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';

function Searched() {
    // Get and set the search value
    const [ search, setSearch ] = useState("");
    // get value from link
    const params = useParams();

    // Get the search results
    const getSearch = async (text) => {
        //console.log(text);
        // Fetch data
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
        const searchData = await data.json();
        // Set Search Data
        setSearch(searchData.meals);
    }

    // Get params on load
    useEffect(() => {
        getSearch(params.type)
    }, [params.type]);

    return (
        <Wrapper
        animate={{ opacity: 1 }} 
        initial={{ opacity: 0 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 0.5 }}>
            {search ? search.map((result) => {
                return(
                    <Grid key={result.idMeal}>
                        <Link to={'/recipe/'+result.idMeal}>
                            <img src={result.strMealThumb} alt={result.strMeal} />
                            <h5>{result.strMeal}</h5>
                        </Link>
                    </Grid>
                );
            }) : <h2>No Results Found!</h2>}
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    margin: 2rem 0rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;

    h2 {
        text-align: center;
        width: 100%;
        grid-column: 2;
    }
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

export default Searched