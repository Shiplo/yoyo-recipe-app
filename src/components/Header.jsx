import React from 'react';
import styled from 'styled-components';
import { GiKnifeFork } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Search from './Search';

function Header() {
  return (
    <HeaderWrap>
        <div className='logo'>
            <Link to={'/yoyo-recipe-app/'}>
                <GiKnifeFork />
                <span>Yo Yo</span>
            </Link>
        </div>
        <Search />
    </HeaderWrap>
  )
}

const HeaderWrap = styled('header')`
    padding: 25px 0px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        font-size: 25px;
        text-transform: uppercase;

        a {
            text-decoration: none;
            color: #469e7a;
            display: flex;
            align-items: center;

            svg {
                width: 30px;
                height: 30px;
                margin-right: 10px;
            }
        }
    }
`;

export default Header