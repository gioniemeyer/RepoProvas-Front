import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import {Container} from "../../styles/GlobalStyles"
import { Form, RadioButtonGroup } from "grommet";
import SubjectArea from "./SubjectArea";
import ProfessorArea from "./ProfessorArea";
import { useHistory, useParams } from "react-router-dom";

export default function SendTest() {
    let params = useParams();
    let history = useHistory();
    const id = params.id

    const [subjects, setSubjects] = useState([]);
    const [professors, setProfessors] = useState([]);
    const [link, setLink] = useState('');
    const [chosenProfs, setChosenProfs] = useState(undefined)
    const [category, setCategory] = useState('');

    function chooseCourse() {
        const body = {id}
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/filter-subjects`, body)
        request.then(res => {
            setSubjects(res.data);
        })
    }

    useEffect(chooseCourse, [params]);

    function sendTest() {
        const body = {
            courseId: id,
            subjectId: professors[0].subjectsId,
            professorId: chosenProfs,
            categoryId: category,
            pdfLink: link
        }
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/sendTest`, body);
        request.then(res => {
            console.log(res.data)
        })

    }

    return(
        <Container>
            <SendForm onSubmit={sendTest}>
                <SubjectArea subjects={subjects} professors={professors} setProfessors={setProfessors} />
                {professors.length === 0 ? "" :
                <>
                <ProfessorArea professors={professors} chosenProfs={chosenProfs} setChosenProfs={setChosenProfs}/>
                </>
                }
                <RadioButton
                    name="doc"
                    options={['P1', 'P2', 'P3', '2ch', 'Outras']}
                    category={category}
                    onChange={(event) => setCategory(event.target.value)}
                />


                <Input
                    disabled={!chosenProfs}
                    placeholder="Coloque aqui o link do teste, por favor"
                    type="url"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                />

                <SendButton type="submit">Envie o teste!</SendButton>
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
    width: 100%;
    height: 20px;
    border-radius: 6px;
    font-size: 12px;
    padding-left: 17px;

    &:disabled {
      display: none;
    }
`

const SendButton = styled.button`
    margin-top: 15px;
`

const RadioButton = styled(RadioButtonGroup)`
    margin: 15px 0;
    svg {
        fill: #00739D;
    }
    label {
        div {
            div {
                border: #3a422a 2px solid;
            }
        }
    }
`