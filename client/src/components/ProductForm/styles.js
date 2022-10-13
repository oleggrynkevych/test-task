import styled from "styled-components";

export const AddPostFormBox = styled.form`
    width: 600px;
    height: 370px;
    border-radius: 40px;
    border: 3px solid #990099;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

export const Input = styled.input`
    width: 360px;
    height: 10px;
    border-radius: 40px;
    border: 3px solid #990099;
    margin-bottom: 20px;
    padding: 10px;
`;

export const Button = styled.button`
    width: 380px;
    height: 40px;
    color: #990099;
    font-size: 20px;
    border-radius: 40px;
    border: 3px solid #990099;
    padding: 0 20px;
    :hover {
        background-color: #990099;
        color: white;
        cursor: pointer;
    }
`;