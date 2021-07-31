import styled from "styled-components";
import axios from "axios";

export default function Course({subject}) {

    const {id, Name} = subject.subjects;  
    function chooseSubject(id) {
        console.log(id);
        const body = {id}
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/filter-subjects`, body)
        // request.then(res => {
        //     setSubjects(res.data);
        // })
        request.then(() => console.log("chamar profs"))
    }

    return(
        <Button type="button" onClick={() => chooseSubject(id)}>
            <strong>{Name}</strong>
        </Button>
    )
}

const Button = styled.button`
    background-color: #555555;
    border: none;
    height: 30px;
    width: fit-content;
    border-radius: 5px;
    margin: 7px 7px 0 0;
    padding: 0 5px;

    strong {
        color: #fff;
    }
`