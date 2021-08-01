import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function NinthPeriod({ninthPeriod}) {
    return (
        <>
        <h2>Nono Período</h2>
        <Area>
        {
            ninthPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} />)
        }
        </Area>
        </>
    )
}