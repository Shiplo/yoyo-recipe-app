import styled from 'styled-components';

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