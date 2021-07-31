import styled from "styled-components";

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;
`

const Slogan = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Shadows Into Light', cursive;
    h1 {
        font-size: 70px;
        margin-bottom: 18px;
    };
    h2{
        font-size: 45px;
    }
`

const Area = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
` 

export { Container, Slogan, Area };