import styled from "styled-components"; //Material UI

// Styled component for the main "container"
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
    
`
// Styled component for the "content" area
export const Content = styled.div`
    border: 1px solid black;
    margin-bottom: 10px;
    width: 60%;
`

// Styled component for the "header" section
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
`

// Styled component for the main "body" section
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 500px; */
    justify-content: center;
    align-items: center;
`

// Styled component for the "left side of the body"
export const LeftBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    height: 100%;
    border: 1px solid green;
`

// Styled component for the "right side of the body"
export const RightBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 48%;
    height: 100%;
    border: 1px solid blue;
`