import axios from "axios";
import { useEffect, useState } from "react";
import {Container} from "../../styles/GlobalStyles"
import CourseArea from "./CourseArea";
import { Link, useHistory } from "react-router-dom";

export default function ChooseCourse() {
    let history = useHistory();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/filter-courses`);
        req.then(res => {
            setCourses(res.data);
        })
    }, [courses]);

    return(
        <Container>
            <CourseArea courses={courses} />                
        </Container>
    )
}