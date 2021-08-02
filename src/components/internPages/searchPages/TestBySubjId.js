import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfessorContext from "../../../contexts/ProfessorsContext";
import { Container } from "../../../styles/GlobalStyles";

export default function TestBySubjId() {
    let params = useParams();
    const {professors, setProfessors} = useContext(ProfessorContext);

    const subjectId = params.id;
    const [tests, SetTests] = useState([]);
    const p1Array = []
    const p2Array = []
    const pfArray = []
    const p3Array = []
    const anothersTests = []

    function findTests() {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/tests/subjectId/${subjectId}`)
        request.then(res => {
            SetTests(res.data)
        });

        const requestSubjects = axios.get(`${process.env.REACT_APP_API_BASE_URL}/professors`)
        requestSubjects.then(res => {
            setProfessors(res.data)
        });
       
    }
    useEffect(findTests, [])
    changeFormatTests()

    function addProfessorName() {
        const professorsObject = {};
        for(let i = 0; i < professors.length; i++) {
            const id = professors[i].id;
            professorsObject[id] = professors[i].Name;
        }


        for(let i = 0; i < tests.length; i++) {
            const profId = tests[i].professorId;
            tests[i].professorName = professorsObject[profId];
        }
    }

    function addCategory() {
        for(let i = 0; i < tests.length; i++) {
            const catId = tests[i].categoryId;
            if(catId === 1) {
                p1Array.push(tests[i]);
            } else if(catId === 2) {
                p2Array.push(tests[i]);
            } else if(catId === 3) {
                pfArray.push(tests[i])
            } else if(catId === 4) {
                p3Array.push(tests[i])
            } else if(catId === 5) {
                anothersTests.push(tests[i]);
            } 
        }
    }

    function changeFormatTests() {
        addProfessorName()
        addCategory()
    }

    return (
        <Container>
            {
                tests.length === 0 ? 
                <p>Sem provas dessa matéria :(</p> :
                    (p1Array.length === 0 ? "" :
                        p1Array.map(test => {
                            return(
                            <> 
                            <h1>Prova 1</h1>   
                            <a href={test.pdfLink} target="_blank">
                                {test.year} - {test.yearSemester} - {test.professorName}
                            </a>
                            </>
                            )
                        })                        
                    )
            }
            {
                tests.length === 0 ? 
                <p>Sem provas dessa matéria :(</p> :
                    (p2Array.length === 0 ? "" :
                        p2Array.map(test => {
                            return(
                            <> 
                            <h1>Prova 2</h1>   
                            <a href={test.pdfLink} target="_blank">
                                {test.year} - {test.yearSemester} - {test.professorName}
                            </a>
                            </>
                            )
                        })                        
                    )
            }
            {
                tests.length === 0 ? 
                <p>Sem provas dessa matéria :(</p> :
                    (pfArray.length === 0 ? "" :
                        pfArray.map(test => {
                            return(
                            <> 
                            <h1>Prova Final</h1>   
                            <a href={test.pdfLink} target="_blank">
                                {test.year} - {test.yearSemester} - {test.professorName}
                            </a>
                            </>
                            )
                        })                        
                    )
            }
            {
                tests.length === 0 ? 
                <p>Sem provas dessa matéria :(</p> :
                    (p3Array.length === 0 ? "" :
                        p3Array.map(test => {
                            return(
                            <> 
                            <h1>Segunda Chamada</h1>   
                            <a href={test.pdfLink} target="_blank">
                                {test.year} - {test.yearSemester} - {test.professorName}
                            </a>
                            </>
                            )
                        })                        
                    )
            }
            {
                tests.length === 0 ? 
                <p>Sem provas dessa matéria :(</p> :
                    (anothersTests.length === 0 ? "" :
                        anothersTests.map(test => {
                            return(
                            <> 
                            <h1>Outras</h1>   
                            <a href={test.pdfLink} target="_blank">
                                {test.year} - {test.yearSemester} - {test.professorName}
                            </a>
                            </>
                            )
                        })                        
                    )
            }
            
        </Container>
    )
}