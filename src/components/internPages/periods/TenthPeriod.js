import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function TenthPeriod({tenthPeriod}) {
    return (
        <>
        <h2>Décimo Período</h2>
        <Area>
        {
            tenthPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} />)
        }
        </Area>
        </>
    )
}