import styled from "styled-components";

export const ProductBox = styled.div`
    width: 520px;
    height: auto;
    padding: 40px;
    border-radius: 40px;
    border: 3px solid #990099;
    color: #990099;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`;

export const ProductName = styled.h2`
    color: #990099;
    font-size: 30px;
    margin-top: 0;
`;

export const Image = styled.img`
    width: 200px;
    height: 200px;
    margin-right: 30px;

`;

export const Info = styled.div`
    color: #990099;
    font-size: 20px;
    margin-bottom: 10px;
`;

export const Comments = styled.div`
    color: #990099;
    font-size: 20px;
`;

export const Block = styled.div``;

export const Button = styled.button`
    width: 150px;
    height: 25px;
    background-color: #990099;
    font-size: 15px;
    border-radius: 40px;
    color: white;
    border: none;
    margin-top: 10px;
    :hover {
        background-color: white;
        color: #990099;
        border: 2px solid #990099;
        cursor: pointer;
    }
`;