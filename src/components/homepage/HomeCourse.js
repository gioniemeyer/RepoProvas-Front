import { useHistory, useParams } from "react-router-dom"
import {Container, Button} from "../../styles/GlobalStyles"

export default function HomeCourse() {
    let history = useHistory();
    const params = useParams();
    const id = params.id

    return(
        <Container>
            <Button type="button" onClick={() => history.push(`/enviar-teste/${id}`)}>
                <strong>Enviar Teste</strong>
            </Button>

            <Button type="button" onClick={() => history.push(`/pesquisar-teste/${id}`)}>
                <strong>Achar Teste</strong>
            </Button>

        </Container>
    )
}