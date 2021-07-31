import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function SixthPeriod({sixthPeriod}) {
    return (
        <>
        <h2>Sexto Período</h2>
        <Area>
        {
            sixthPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} />)
        }
        </Area>
        </>
    )
}