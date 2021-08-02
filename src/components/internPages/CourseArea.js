import Course from "./Course"
import { CoursesArea } from "../../styles/GlobalStyles";

export default function CourseArea({courses}) {
    return(
        <>
        <h1>Qual o curso?</h1>
        <CoursesArea>
            {
                courses.map(course => 
                    <Course key={course.id} course={course} />)
            }
        </CoursesArea>
        </>
    )
}


