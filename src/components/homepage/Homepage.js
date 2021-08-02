import {Container, Slogan} from "../../styles/GlobalStyles"
import CourseArea from "../internPages/CourseArea"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/filter-courses`);
        req.then(res => {
            setCourses(res.data);
        })
    }, [courses]);

    return(
        <Container>
            <Slogan>
                <h1>RepoProvas</h1>
                <h2>Pelos alunos</h2>
            </Slogan>

            <CourseArea courses={courses} />                

        </Container>
    )
}

