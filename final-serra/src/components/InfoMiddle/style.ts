import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 40px 90px;
    gap: 40px;

    @media (max-width:780px) {
        flex-direction: column;
        align-items: center;
        margin: 40px;
    }
`;

export const Image = styled.img`
    width: 300px;
`;

export const Info = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width:780px) {
        width: 100%;  
        text-align: center;
    }
`;

export const Title = styled.h3`
    color: #E4A54E;
    margin-bottom: 30px;

`;

export const Subtitle = styled.p`
    color: #A1A1A1;
    font-style: italic;
    margin-bottom: 15px;
    font-weight: 500;
`;

export const Text = styled.p`
    font-weight: 600;
`;