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

export default function SubjectArea({subjects, professors, setProfessors}) {

    const firstPeriod = subjects.filter(subject => subject.subjects.semesterId === 1);
    const secondPeriod = subjects.filter(subject => subject.subjects.semesterId === 2);
    const thirdPeriod = subjects.filter(subject => subject.subjects.semesterId === 3);
    const fourthPeriod = subjects.filter(subject => subject.subjects.semesterId === 4);
    const fifthPeriod = subjects.filter(subject => subject.subjects.semesterId === 5);
    const sixthPeriod = subjects.filter(subject => subject.subjects.semesterId === 6);
    const seventhPeriod = subjects.filter(subject => subject.subjects.semesterId === 7);
    const eighthPeriod = subjects.filter(subject => subject.subjects.semesterId === 8);
    const ninthPeriod = subjects.filter(subject => subject.subjects.semesterId === 9);
    const tenthPeriod = subjects.filter(subject => subject.subjects.semesterId === 10);

    return (
        <>
        <h1>Qual a matéria?</h1>
        {
            firstPeriod.length === 0 ? "" :
            <FirstPeriod firstPeriod={firstPeriod}  professors={professors} setProfessors={setProfessors}/> 
        }
        {
            secondPeriod.length === 0 ? "" :
            <SecondPeriod secondPeriod={secondPeriod}  professors={professors} setProfessors={setProfessors}/>
        }
        {
            thirdPeriod.length === 0 ? "" :
            <ThirdPeriod thirdPeriod={thirdPeriod}  professors={professors} setProfessors={setProfessors}/>
        }
        {
            fourthPeriod.length === 0 ? "" :
            <FourthPeriod fourthPeriod={fourthPeriod}  professors={professors} setProfessors={setProfessors}/>
        }
        {
            fifthPeriod.length === 0 ? "" :
            <FifthPeriod fifthPeriod={fifthPeriod}  professors={professors} setProfessors={setProfessors}/>
        }
        {
            sixthPeriod.length === 0 ? "" :
            <SixthPeriod sixthPeriod={sixthPeriod}  professors={professors} setProfessors={setProfessors}/>
        }
        {
            seventhPeriod.length === 0 ? "" :
            <SeventhPeriod seventhPeriod={seventhPeriod}  professors={professors} setProfessors={setProfessors}/>
        }
        {
            eighthPeriod.length === 0 ? "" :
            <EighthPeriod eighthPeriod={eighthPeriod}  professors={professors} setProfessors={setProfessors}/>
        }
        {
            ninthPeriod.length === 0 ? "" :
            <NinthPeriod ninthPeriod={ninthPeriod}  professors={professors} setProfessors={setProfessors}/>
        }
        {
            tenthPeriod.length === 0 ? "" :
            <TenthPeriod tenthPeriod={tenthPeriod}  professors={professors} setProfessors={setProfessors}/>
        }
        </>
    )
}