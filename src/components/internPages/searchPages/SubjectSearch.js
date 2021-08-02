import { useHistory } from "react-router-dom";
import styled from "styled-components"
import {Area} from "../../../styles/GlobalStyles"

export default function SubjectSearch({subjects}) {
    let history = useHistory();


    return(
        <>
        <h1>Escolha a matéria</h1>
        <Area>
        {
            subjects.map(subject => 
                <Button type="button" onClick={() => history.push(`/testes/materia/${subject.id}`)}>
                    <strong>{subject.Name}</strong>
                </Button>
            )
        }        
        </Area>
        </>
    )
}

const Button = styled.button`
    background-color: ${props => props.chosen ? '#00739D' : '#555555' };
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