import styled from "styled-components";

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F2F2F2;
`

const Slogan = styled.div`
    width: 100%;
    height: 300px;
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
const CoursesArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Button = styled.button`
    background-color: #555555;
    border: none;
    height: 30px;
    width: fit-content;
    border-radius: 5px;
    margin: 7px 7px 0 0;
    padding: 0 5px;

    strong {
        color: #fff;
    }
`

export { Container, Slogan, Area, CoursesArea, Button };