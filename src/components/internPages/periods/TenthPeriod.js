import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function TenthPeriod({tenthPeriod, professors, setProfessors}) {
    return (
        <>
        <h2>Décimo Período</h2>
        <Area>
        {
            tenthPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} professors={professors} setProfessors={setProfessors} />)
        }
        </Area>
        </>
    )
}