import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function FourthPeriod({fourthPeriod}) {
    return (
        <>
        <h2>Quarto Período</h2>
        <Area>
        {
            fourthPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} />)
        }
        </Area>
        </>
    )
}