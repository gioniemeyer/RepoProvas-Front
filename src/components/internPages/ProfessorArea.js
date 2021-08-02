import { useContext } from "react";
import ProfessorContext from "../../contexts/ProfessorsContext";
import { Area } from "../../styles/GlobalStyles";
import Professor from "./Professor";

export default function ProfessorArea({chosenProfs, setChosenProfs}) {

    const {professors} = useContext(ProfessorContext);
    
    return(
        <>
        <h1>Escolha o professor</h1>
        <Area>
        {
            professors.map(professor => 
                <Professor key={professor.id} chosenProfs={chosenProfs} setChosenProfs={setChosenProfs} professor={professor} />)
        }        
        </Area>
        </>
    )
}