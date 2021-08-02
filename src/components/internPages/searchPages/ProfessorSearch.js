import { useContext,useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components"
import ProfessorContext from "../../../contexts/ProfessorsContext";
import {Area} from "../../../styles/GlobalStyles"

export default function ProfessorSearch() {
    let history = useHistory();

    const {professors} = useContext(ProfessorContext);
    
    return(
        <>
        <h1>Escolha o professor</h1>
        <Area>
        {
            professors.map(professor => 
                <Button type="button" onClick={() => history.push(`/testes/professor/${professor.id}`)}>
                    <strong>{professor.Name}</strong>
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