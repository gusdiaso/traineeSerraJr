import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #3e1c33;
    gap: 10px;
    padding: 15px;
    margin: 60px 0px;
    border-radius: 50px;
    width: 80%;
    max-width: 500px;
`;

export const Input = styled.input`
    padding: 7px 15px;
    border: none;
    color: black;
    flex: 1;
    outline: none;
    font-size: 18px;
    border-radius: 20px;
    width: 100%;
`;


export const Image = styled.img`
    cursor: pointer;
    background-color: #602749;
    border-radius: 30px;
    max-width: 36px;
    padding: 7px;


    &:hover{
        background-color: #130912;
        transition: 0.1s;
    }
`;

