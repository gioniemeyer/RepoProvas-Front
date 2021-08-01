import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import professorContext from "../../contexts/ProfessorsContext";

export default function Subject({subject}) {
    const {professors, setProfessors} = useContext(professorContext);
    const [chosen, setChosen] = useState(false);
    const {id, Name} = subject.subjects;  

    function chooseSubject(id) {
        if(chosen === true) {
            setChosen(false);
            setProfessors([])
            return
        };

        if(professors.length !== 0) {
            alert('Só é possível subir o teste de uma disciplina por vez')
            return
        }
        
        const body = {id}
        
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/filter-professors`, body)
        request.then(res => {
            setChosen(true)
            setProfessors(res.data)
        })
    }

    return(
        <Button chosen={chosen} type="button" onClick={() => chooseSubject(id)}>
            <strong>{Name}</strong>
        </Button>
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