import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../../styles/GlobalStyles";

export default function TestById() {
    let params = useParams();
    const professorId = params.id;
    const [tests, SetTests] = useState([]);
    const [subjects, SetSubjects] = useState([]);
    const p1Array = []
    const p2Array = []
    const pfArray = []
    const p3Array = []
    const anothersTests = []

    function findTests() {
        const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/tests/professorId/${professorId}`)
        request.then(res => {
            SetTests(res.data)
        });

        const requestSubjects = axios.get(`${process.env.REACT_APP_API_BASE_URL}/subjects`)
        requestSubjects.then(res => {
            SetSubjects(res.data)
        });
       
    }
    useEffect(findTests, [params, professorId])
    changeFormatTests()

    function addSubjectName() {
        const subjectsObject = {};
        for(let i = 0; i < subjects.length; i++) {
            const id = subjects[i].id;
            subjectsObject[id] = subjects[i].Name;
        }

        for(let i = 0; i < tests.length; i++) {
            const subjId = tests[i].subjectId;
            tests[i].subjectName = subjectsObject[subjId];
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
        addSubjectName()
        addCategory()
    }

    return (
        <Container>
            {
                tests.length === 0 ? 
                <p>Sem provas desse professor :(</p> :
                    (p1Array.length === 0 ? "" :
                        p1Array.map(test => {
                            return(
                            <> 
                            <h1>Prova 1</h1>   
                            <a href={test.pdfLink} target="_blank">
                                {test.year} - {test.yearSemester} - {test.subjectName}
                            </a>
                            </>
                            )
                        })                        
                    )
            }
            {
                tests.length === 0 ? 
                <p>Sem provas desse professor :(</p> :
                    (p2Array.length === 0 ? "" :
                        p2Array.map(test => {
                            return(
                            <> 
                            <h1>Prova 2</h1>   
                            <a href={test.pdfLink} target="_blank">
                                {test.year} - {test.yearSemester} - {test.subjectName}
                            </a>
                            </>
                            )
                        })                        
                    )
            }
            {
                tests.length === 0 ? 
                <p>Sem provas desse professor :(</p> :
                    (pfArray.length === 0 ? "" :
                        pfArray.map(test => {
                            return(
                            <> 
                            <h1>Prova Final</h1>   
                            <a href={test.pdfLink} target="_blank">
                                {test.year} - {test.yearSemester} - {test.subjectName}
                            </a>
                            </>
                            )
                        })                        
                    )
            }
            {
                tests.length === 0 ? 
                <p>Sem provas desse professor :(</p> :
                    (p3Array.length === 0 ? "" :
                        p3Array.map(test => {
                            return(
                            <> 
                            <h1>Segunda Chamada</h1>   
                            <a href={test.pdfLink} target="_blank">
                                {test.year} - {test.yearSemester} - {test.subjectName}
                            </a>
                            </>
                            )
                        })                        
                    )
            }
            {
                tests.length === 0 ? 
                <p>Sem provas desse professor :(</p> :
                    (anothersTests.length === 0 ? "" :
                        anothersTests.map(test => {
                            return(
                            <> 
                            <h1>Outras</h1>   
                            <a href={test.pdfLink} target="_blank">
                                {test.year} - {test.yearSemester} - {test.subjectName}
                            </a>
                            </>
                            )
                        })                        
                    )
            }
            
        </Container>
    )
}