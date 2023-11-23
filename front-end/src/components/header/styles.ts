import styled from "styled-components"; //Material UI

//header style, container, input country and button/hover.

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
    justify-content: center;

    input {
        width: 250px;
        font-size: 20px;
        border-radius: 5px;
    }

    button {
        border: 1px solid black;
        font-size: 20px;
        border-radius: 5px;
        width: 100px;
        background: green;
        color: white;
        margin-left: 15px;
        cursor: pointer;
        transition: .5s ease-in-out;


        &:hover {
            background: whitesmoke;
            border: 1px solid black;
            color: black;
        }
    }

`

