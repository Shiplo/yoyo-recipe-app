import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import getVideoId from 'get-video-id';
import { motion } from 'framer-motion';

function Recipe() {
    // Use State
    const [ details, setDetails ] = useState({});
    // Use State for buttons
    const [ activeTab, setActiveTab ] = useState('instructions');
    // Get the params
    const params = useParams();
    //console.log(params.id)

    // Get Details Function
    const getDetails = async (id) => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const fullData = await data.json();
        setDetails(fullData.meals[0]);
    }

    // Use effect
    useEffect(() => {
        getDetails(params.id);
    }, [params.id]);

    //console.log(details)
    // Ingredient List
    const ingredientList = [];
    for ( let i = 1; i < 21; i++ ) {
        let ingName = "strIngredient"+i;
        let measName = "strMeasure"+i;

        if(details[ingName] !== "" && details[ingName] !== " " && details[ingName] !== null) {
            ingredientList.push(<li key={i}>{details[ingName]} {details[measName] !== "" && details[measName] !== " " ? `(${details[measName]})` : ""}</li>)
        }
    }
    // Youtube Video ID
    const youtube = String(details.strYoutube);
    const vidID = getVideoId(youtube);

    //console.log(vidID.id)

    return (
        <Wrapper
        animate={{ opacity: 1 }} 
        initial={{ opacity: 0 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 0.5 }} 
        key={details.idMeal}>
            <div className='recipe-top'>
                <h2>{details.strMeal}</h2>
            </div>

            <div className='recipe-content'>
                <div className='thumb'>
                    <img src={details.strMealThumb} alt={details.strMeal} />
                </div>
                <div className='content'>
                    <div className='tab-head'>
                        <Button onClick={() => setActiveTab('instructions')} className={activeTab === "instructions" ? "active" : ""}>Instructions</Button>
                        <Button onClick={() => setActiveTab('ingredient')} className={activeTab === "ingredient" ? "active" : ""}>Ingredient</Button>
                    </div>
                    {activeTab === "instructions" && (
                    <div>
                        <div dangerouslySetInnerHTML={{__html: details.strInstructions}}></div>
                        <Tags>
                            <span><b>Area:</b> {details.strArea}</span>
                            <span><b>Category:</b> {details.strCategory}</span>
                        </Tags>
                    </div>
                    )}
                    {activeTab === "ingredient" && (
                    <List>
                        <ul>
                            {ingredientList}
                        </ul>
                    </List>
                    )}
                </div>
            </div>
            {vidID.id != null && (
            <Video>
                <iframe src={`https://www.youtube.com/embed/${vidID.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Video>
            )}
        </Wrapper>
    )
}

const Wrapper = styled(motion.div)`
    margin: 60px 0px;

    .recipe-top {
        margin-bottom: 30px;
    }
    .recipe-content {
        display: flex;
    }

    .tab-head {
        margin-bottom: 20px;
    }

    .thumb {
        width: 48%;
        margin-right: 4%;

        img {
            display: block;
            width: 100%;
        }
    }

    .content {
        width: 48%;
    }

    .recipe-tabs {
        background: #f2f2f2;
    }
`;

const Tags = styled.div`
    display: flex;
    margin-top: 30px;

    span {
        display: block;
        font-size: 14px;
        line-height: 1.2em;

        &:not(:last-child) {
            margin-right: 15px;
        }
    }
`;

const Button = styled.button`
    background: #f2f2f2;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 700;
    width: 150px;
    max-width: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &.active,
    &:hover {
        background: #83d772;
    }
`;

const List = styled.div`
    padding: 20px;
    ul {
        padding-left: 20px;
    }
`;

const Video = styled.div`
    margin-top: 50px;

    iframe {
        display: block;
        width: 100%;
        height: 600px;
    }
`;

export default Recipe