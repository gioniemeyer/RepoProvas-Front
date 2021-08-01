import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import {Container} from "../../styles/GlobalStyles"
import { Form } from "grommet";
import SubjectArea from "./SubjectArea";
import ProfessorArea from "./ProfessorArea";
import { Link, useHistory, useParams } from "react-router-dom";

export default function SendTest() {
    let params = useParams();
    const id = params.id

    const [subjects, setSubjects] = useState([]);
    const [professors, setProfessors] = useState([]);
    const [link, setLink] = useState('');

    function chooseCourse() {
        const body = {id}
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/filter-subjects`, body)
        request.then(res => {
            setSubjects(res.data);
        })
    }

    useEffect(chooseCourse, [params]);

    return(
        <Container>
            <SendForm onSubmit={() => console.log("criar funcao")}>
                <SubjectArea subjects={subjects} professors={professors} setProfessors={setProfessors} />
                {professors.length === 0 ? "" :
                <>
                <ProfessorArea professors={professors}/>
                </>
                }

                <Input
                    disabled={professors.length === 0}
                    placeholder="Coloque aqui o link do teste, por favor"
                    type="text"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                />

                <button>Envie o teste!</button>
            </SendForm>
        </Container>
    )
}

const SendForm = styled(Form)`
    width: 70%;
    margin: 50px auto;
`

const Input = styled.input`
    margin-top: 13px;
    background-color: #fff;
    width: 85%;
    height: 20px;
    border-radius: 6px;
    font-size: 12px;
    padding-left: 17px;

    &:disabled {
      display: none;
    }
`