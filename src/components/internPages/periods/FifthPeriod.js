import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function FifthPeriod({fifthPeriod}) {
    return (
        <>
        <h2>Quinto Período</h2>
        <Area>
        {
            fifthPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} />)
        }
        </Area>
        </>
    )
}