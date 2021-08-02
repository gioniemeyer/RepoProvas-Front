import {Container, Button} from "../../../styles/GlobalStyles"
import { useHistory, useParams } from "react-router-dom";

export default function SendTest() {
    let params = useParams();
    let history = useHistory();
    const id = params.id

    return(
        <Container>
            <Button type="button" onClick={() => history.push(`/pesquisar-teste/${id}/materias`)}>
                <strong>Por Matérias</strong>
            </Button>

            <Button type="button" onClick={() => history.push(`/pesquisar-teste/${id}/professores`)}>
                <strong>Por Professores</strong>
            </Button>

        </Container>
    )
}