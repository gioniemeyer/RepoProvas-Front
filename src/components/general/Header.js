import styled from "styled-components";
import { useHistory } from "react-router";

export default function Header() {
    let link = useHistory();

    return(
        <HeaderDiv>
            <p onClick={() => link.push('/')}>Início</p>
            <p onClick={() => link.push('/escolher-curso')}>Enviar Prova</p>
            <p onClick={() => link.push('/pesquisar-teste')}>Buscar no seu Curso</p>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    background-color: #00739D;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    box-shadow: 1px 1px 4px black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
        color: #fff;
        font-size: 20px;
    }
`