import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {Container, Button} from "../../../styles/GlobalStyles"
import SubjectArea from "../SubjectArea";

export default function SubjectsPage() {
    let params = useParams();
    let history = useHistory();
    const id = params.id

    const [subjects, setSubjects] = useState([]);

    function findSubjects() {
        const body = {id}
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/filter-subjects`, body)
        request.then(res => {
            setSubjects(res.data);
        })
    }

    useEffect(findSubjects,[params]);

    return (
        <Container>
            <Button type="button" onClick={() => history.push(`/pesquisar-teste/${id}/materias`)}>
                <strong>Por Matérias</strong>
            </Button>

            <Button type="button" onClick={() => history.push(`/pesquisar-teste/${id}/professores`)}>
                <strong>Por Professores</strong>
            </Button>

            <SubjectArea subjects={subjects}/>
        </Container>
    )

}