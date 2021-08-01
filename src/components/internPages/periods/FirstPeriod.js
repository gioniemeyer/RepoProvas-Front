import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function FirstPeriod({firstPeriod, professors, setProfessors}) {
    return (
        <>
        <h2>Primeiro Período</h2>
        <Area>
        {
            firstPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} professors={professors} setProfessors={setProfessors} />)
        }
        </Area>
        </>
    )
}