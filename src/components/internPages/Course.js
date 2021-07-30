import styled from "styled-components";
import axios from "axios";

export default function Course({course}) {

    const {id, Name} = course;  
    function chooseCourse(id) {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/filter-subjects`)
    }

    return(
        <Button onClick={() => chooseCourse(id)}>
            <strong>{Name}</strong>
        </Button>
    )
}

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