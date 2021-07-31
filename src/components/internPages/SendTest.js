import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import {Container} from "../../styles/GlobalStyles"
import { Form } from "grommet";
import CourseArea from "./CourseArea";
import SubjectArea from "./SubjectArea";

export default function SendTest() {
    const [courses, setCourses] = useState([]);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/filter-courses`);
        req.then(res => {
            setCourses(res.data);
        })
    }, []);

    return(
        <Container>
            <SendForm onSubmit={() => console.log("criar funcao")}>
                <CourseArea courses={courses} setSubjects={setSubjects} subjects={subjects} />                
                {subjects.length === 0 ? "" :
                <SubjectArea subjects={subjects} setSubjects={setSubjects} />
                }
            </SendForm>
        </Container>
    )
}

const SendForm = styled(Form)`
    width: 70%;
    margin: 50px auto;
`