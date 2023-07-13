import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3e1c33;
    gap: 20px;
    padding: 30px;
    border-radius: 20px;

    @media (max-width: 700px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Image = styled.img`
    max-width: 200px;
    max-height: 200px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Name = styled.h2`

`;

export const User = styled.h3`
    
`;

export const Follow = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 10px;
    justify-content: space-around;

    @media (max-width: 700px) {
    margin-top: 10px;
    }
`;

export const Following = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const Followers = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const Icon = styled.img`
    width: 20px;
    height: 15px;
`;

export const Text = styled.p`
    
`;

