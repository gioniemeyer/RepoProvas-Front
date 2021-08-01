import { Area } from "../../styles/GlobalStyles";
import Professor from "./Professor";

export default function ProfessorArea({professors, chosenProfs, setChosenProfs}) {

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