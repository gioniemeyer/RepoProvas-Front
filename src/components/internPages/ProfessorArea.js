import { Area } from "../../styles/GlobalStyles";
import Professor from "./Professor";
import { useState } from "react";

export default function ProfessorArea({professors}) {
    const [array, setArray] = useState([])

    return(
        <>
        <h1>Escolha o professor</h1>
        <Area>
        {
            professors.map(professor => 
                <Professor key={professor.id} array={array} setArray={setArray} professor={professor} />)
        }        
        </Area>
        </>
    )
}