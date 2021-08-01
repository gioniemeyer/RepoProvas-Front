import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Course({course}) {
    let history = useHistory();

    const {id, Name} = course;  
    function chooseCourse(id) {
            history.push(`/enviar-teste/${id}`)
    }

    return(
        <Button type="button" onClick={() => chooseCourse(id)}>
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