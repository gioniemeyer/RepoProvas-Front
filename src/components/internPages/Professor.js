import styled from "styled-components"
import { useState } from "react";

export default function Professor({professor, array, setArray}) {
    const [chosen, setChosen] = useState(false)
    
    const {id, Name} = professor.professors;

    function chooseProfessor() {
        if(chosen) {
            setArray([])
            setChosen(false)
            return;
        }

        if(array.length !== 0) {
            alert("Um professor por vez")
            return;
        }
        const newArray = array.push(professor);
        setArray(newArray);
        setChosen(true)
    }
 
    return(
        <Button type="button" chosen={chosen} onClick={chooseProfessor}>
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