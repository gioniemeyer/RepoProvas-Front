import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function ThirdPeriod({thirdPeriod, professors, setProfessors}) {
    return (
        <>
        <h2>Terceiro Período</h2>
        <Area>
        {
            thirdPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} professors={professors} setProfessors={setProfessors}/>)
        }
        </Area>
        </>
    )
}