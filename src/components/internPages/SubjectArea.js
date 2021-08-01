import FirstPeriod from "./periods/FirstPeriod";
import SecondPeriod from "./periods/SecondPeriod";
import ThirdPeriod from "./periods/ThirdPeriod";
import FourthPeriod from "./periods/FourthPeriod";
import FifthPeriod from "./periods/FifthPeriod";
import SixthPeriod from "./periods/SixthPeriod";
import SeventhPeriod from "./periods/SeventhPeriod";
import EighthPeriod from "./periods/EighthPeriod";
import NinthPeriod from "./periods/NinthPeriod";
import TenthPeriod from "./periods/SeventhPeriod";

export default function SubjectArea({subjects}) {

    const firstPeriod = subjects.filter(subject => subject.subjects.semester === 1);
    const secondPeriod = subjects.filter(subject => subject.subjects.semester === 2);
    const thirdPeriod = subjects.filter(subject => subject.subjects.semester === 3);
    const fourthPeriod = subjects.filter(subject => subject.subjects.semester === 4);
    const fifthPeriod = subjects.filter(subject => subject.subjects.semester === 5);
    const sixthPeriod = subjects.filter(subject => subject.subjects.semester === 6);
    const seventhPeriod = subjects.filter(subject => subject.subjects.semester === 7);
    const eighthPeriod = subjects.filter(subject => subject.subjects.semester === 8);
    const ninthPeriod = subjects.filter(subject => subject.subjects.semester === 9);
    const tenthPeriod = subjects.filter(subject => subject.subjects.semester === 10);

    return (
        <>
        <h1>Qual a matéria?</h1>
        {
            firstPeriod.length === 0 ? "" :
            <FirstPeriod firstPeriod={firstPeriod} /> 
        }
        {
            secondPeriod.length === 0 ? "" :
            <SecondPeriod secondPeriod={secondPeriod} />
        }
        {
            thirdPeriod.length === 0 ? "" :
            <ThirdPeriod thirdPeriod={thirdPeriod} />
        }
        {
            fourthPeriod.length === 0 ? "" :
            <FourthPeriod fourthPeriod={fourthPeriod} />
        }
        {
            fifthPeriod.length === 0 ? "" :
            <FifthPeriod fifthPeriod={fifthPeriod} />
        }
        {
            sixthPeriod.length === 0 ? "" :
            <SixthPeriod sixthPeriod={sixthPeriod} />
        }
        {
            seventhPeriod.length === 0 ? "" :
            <SeventhPeriod seventhPeriod={seventhPeriod} />
        }
        {
            eighthPeriod.length === 0 ? "" :
            <EighthPeriod eighthPeriod={eighthPeriod} />
        }
        {
            ninthPeriod.length === 0 ? "" :
            <NinthPeriod ninthPeriod={ninthPeriod} />
        }
        {
            tenthPeriod.length === 0 ? "" :
            <TenthPeriod tenthPeriod={tenthPeriod} />
        }
        </>
    )
}