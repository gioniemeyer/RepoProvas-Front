import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {Container, Button} from "../../../styles/GlobalStyles"
import SubjectSearch from "./SubjectSearch";

export default function SubjectsPage() {
    let params = useParams();
    let history = useHistory();
    const id = params.id

    const [subjects, setSubjects] = useState([]);

    function findSubjects() {
        const body = {id}
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/filter-subjects`, body)
        request.then(res => {
            const response = res.data
            const newSubjects = response.map(subject => subject.subjects)
            setSubjects(newSubjects);
        })
    }

    useEffect(findSubjects,[params, id, subjects, setSubjects]);

    return (
        <Container>
            <Button type="button" onClick={() => history.push(`/pesquisar-teste/${id}/materias`)}>
                <strong>Por Matérias</strong>
            </Button>

            <Button type="button" onClick={() => history.push(`/pesquisar-teste/${id}/professores`)}>
                <strong>Por Professores</strong>
            </Button>
            <SubjectSearch subjects={subjects} />
        </Container>
    )

}