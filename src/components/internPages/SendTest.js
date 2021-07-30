import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import {Container} from "../../styles/GlobalStyles"
import { Form } from "grommet";
import Course from "./Course"

export default function SendTest() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const req = axios.get(`${process.env.REACT_APP_API_BASE_URL}/filter-courses`);
        req.then(res => {
            setCourses(res.data);
        })

    });

    return(
        <Container>
            <SendForm onSubmit={() => console.log("criar funcao")}>
                    <h1>Qual o curso?</h1>
                    <CourseArea>

                {
                    courses.map(course => 
                        <Course key={course.id} course={course} />)
                }
                </CourseArea>
            </SendForm>
        </Container>
    )
}

const SendForm = styled(Form)`
    width: 70%;
    margin: 50px auto;
`

const CourseArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
` 
