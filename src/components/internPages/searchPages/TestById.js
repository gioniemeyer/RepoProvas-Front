import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../../styles/GlobalStyles";

export default function TestById() {
    let params = useParams();
    const professorId = params.id;
    const [tests, SetTests] = useState([]);

    function findTests() {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/tests/professorId/${professorId}`)
        request.then(res => {
            SetTests(res.data)
        })
    }
    useEffect(findTests, [params, professorId])

    return (
        <Container>
            {
                tests.length === 0 ? 
                <p>Sem provas desse professor :(</p> :
                tests.map(test => test.pdfLink)
            }
        </Container>
    )
}