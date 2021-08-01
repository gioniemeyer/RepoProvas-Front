import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function NinthPeriod({ninthPeriod, professors, setProfessors}) {
    return (
        <>
        <h2>Nono Período</h2>
        <Area>
        {
            ninthPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} professors={professors} setProfessors={setProfessors} />)
        }
        </Area>
        </>
    )
}