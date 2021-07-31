import Course from "./Course"
import { Area } from "../../styles/GlobalStyles";

export default function CourseArea({courses, setSubjects, subjects}) {
    return(
        <>
        <h1>Qual o curso?</h1>
        <Area>
            {
                courses.map(course => 
                    <Course key={course.id} course={course} setSubjects={setSubjects} subjects={subjects} />)
            }
        </Area>
        </>
    )
}


