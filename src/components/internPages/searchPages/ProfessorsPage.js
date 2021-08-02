import axios from "axios";
import { useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import {Container, Button} from "../../../styles/GlobalStyles"
import ProfessorContext from "../../../contexts/ProfessorsContext";
import ProfessorSearch from "./ProfessorSearch";

export default function ProfessorsPage() {
    let params = useParams();
    let history = useHistory();
    const id = params.id

    const {professors, setProfessors} = useContext(ProfessorContext);

    function findProfessors() {
        const body = {id}
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/filter-all-professors`, body)
        request.then(res => {
            setProfessors(res.data);
        })
    }

    useEffect(findProfessors, [params, id, professors, setProfessors]);

    return (
        <Container>
            <Button type="button" onClick={() => history.push(`/pesquisar-teste/${id}/materias`)}>
                <strong>Por Matérias</strong>
            </Button>

            <Button type="button" onClick={() => history.push(`/pesquisar-teste/${id}/professores`)}>
                <strong>Por Professores</strong>
            </Button>
            <ProfessorSearch />
        </Container>
    )
}