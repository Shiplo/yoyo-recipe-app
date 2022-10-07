import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <List>
        <Clink to={'/yoyo-recipe-app/cuisine/Italian'}>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </Clink>
        <Clink to={'/yoyo-recipe-app/cuisine/American'}>
            <FaHamburger />
            <h4>American</h4>
        </Clink>
        <Clink to={'/yoyo-recipe-app/cuisine/Thai'}>
            <GiNoodles />
            <h4>Thai</h4>
        </Clink>
        <Clink to={'/yoyo-recipe-app/cuisine/Japanese'}>
            <GiChopsticks />
            <h4>Japanese</h4>
        </Clink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0rem;
`;

const Clink = styled(NavLink)`
    display: flex;
    margin: 0px 10px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #f2f2f2;
    padding: 12px 20px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    svg {
        display: block;
        fill: #000;
        width: 30px;
        height: 20px;
        transition: all 0.3s ease-in-out;
    }
    h4 {
        display: block;
        margin-left: 10px;
        font-size: 16px;
        color: #000;
        transition: all 0.3s ease-in-out;
    }

    &.active,
    &:hover {
        background: #469e7a;

        svg {
            fill: #fff;
        }
        h4 {
            color: #fff;
        }
    }
`;

export default Category