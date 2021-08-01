import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function EighthPeriod({eigthPeriod, professors, setProfessors}) {
    return (
        <>
        <h2>Oitavo Período</h2>
        <Area>
        {
            eigthPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} professors={professors} setProfessors={setProfessors} />)
        }
        </Area>
        </>
    )
}