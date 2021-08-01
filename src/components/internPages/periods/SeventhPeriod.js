import { Area } from "../../../styles/GlobalStyles"
import Subject from "../Subject";

export default function SeventhPeriod({seventhPeriod}) {
    return (
        <>
        <h2>Sétimo Período</h2>
        <Area>
        {
            seventhPeriod?.map(subject => 
                <Subject key={subject.id} subject={subject} />)
        }
        </Area>
        </>
    )
}