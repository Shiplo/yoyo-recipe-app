import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Popular() {
    // Use state for popular post data
    const [popular, setPopuler] = useState([]);
    // use effect for getting popular posts from the function
    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        // Get LocalStorage Data
        const check = localStorage.getItem('popular');
        //console.log(check);
        // Check if there is a data on the localstorage
        if(check) {
            setPopuler(JSON.parse(check));
        } else {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
            const data = await api.json();
            // Set LocalStorage Data
            localStorage.setItem('popular', JSON.stringify(data.meals));
            // Set Post Data
            setPopuler(data.meals);
            //console.log(data)
        }
    }

  return (
    <div className='popular-recipes'>
        <Wrapper>
            <h2>Sea Food Recipes</h2>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free",
                gap: "2vw",
            }}>
                {popular.map((recipe) => {
                    return(
                        <SplideSlide key={recipe.idMeal}>
                            <Card>
                                <Link to={'/recipe/'+recipe.idMeal}>
                                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                                    <Overlay />
                                    <h4>{recipe.strMeal}</h4>
                                </Link>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
    margin: 50px 0px;
`;

const Card = styled.div`
    border-radius: 10px;
    min-height: 35vh;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        z-index: 9;
        object-fit: cover;
        object-position: center center;
    }

    h4 {
        position: absolute;
        bottom: 0%;
        left: 0%;
        margin: 0px;
        padding: 20px 15px;
        width: 100%;
        text-align: center;
        z-index: 11;
        border-radius: 10px;
        font-size: 16px;
        color: #fff;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: linear-gradient(15deg, rgba(0, 0, 0, 0.5), transparent);
`;

export default Popular