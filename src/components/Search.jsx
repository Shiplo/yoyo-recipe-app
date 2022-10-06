import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Search() {
    // Use State for set input
    const [ input, setInput ] = useState("");
    const navigate = useNavigate();

    // Form Submit function
    const submitHandaler = (e) => {
        e.preventDefault();
        navigate('/search/'+input);
    }

  return (
    <FormStyle onSubmit={submitHandaler}>
        <FaSearch />
        <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder='Search Recipes...' />
    </FormStyle>
  )
}

const FormStyle = styled.form`
    position: relative;
    width: 60%;
    max-width: 400px;

    svg {
        position: absolute;
        top: 15px;
        left: 15px;
        fill: #fff;
        width: 20px;
        height: 20px;
    }

    input {
        display: block;
        width: 100%;
        background: #333;
        color: #fff;
        border: 1px solid #ddd;
        font-size: 16px;
        padding: 15px;
        padding-left: 50px;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;

        &:focus {
            outline: 0px;
            border-color: #469e7a;
        }
    }
`;

export default Search