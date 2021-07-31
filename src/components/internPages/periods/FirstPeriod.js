import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function FirstPeriod({firstPeriod}) {
    return (
        <>
        <h2>Primeiro Período</h2>
        <Area>
        {
            firstPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} />)
        }
        </Area>
        </>
    )
}