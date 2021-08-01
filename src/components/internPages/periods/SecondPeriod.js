import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function SecondPeriod({secondPeriod}) {
    return (
        <>
        <h2>Segundo Período</h2>
        <Area>
        {
            secondPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} />)
        }
        </Area>
        </>
    )
}