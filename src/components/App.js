import '../styles/index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { Grommet } from "grommet";
import { grommet } from 'grommet/themes';
import { useState } from 'react';

import Homepage from './homepage/Homepage';
import SendTest from './internPages/SendTest';
import SearchCourse from './internPages/searchPages/SearchCourse'
import ProfessorContext from '../contexts/ProfessorsContext';
import HomeCourse from './homepage/HomeCourse';
import SubjectsPage from './internPages/searchPages/SubjectsPage';
import ProfessorsPage from './internPages/searchPages/ProfessorsPage';
import TestById from './internPages/searchPages/TestById';
import TestBySubjId from './internPages/searchPages/TestBySubjId';

function App() {

  const [professors, setProfessors] = useState([]);

  return (
    <BrowserRouter>
      <ProfessorContext.Provider value={{professors, setProfessors}}>
      <Grommet theme={grommet}>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/:id" exact>
            <HomeCourse />
          </Route>

          <Route path="/enviar-teste/:id" exact>
            <SendTest />
          </Route>

          <Route path="/pesquisar-teste/:id" exact>
            <SearchCourse />
          </Route>

          <Route path="/pesquisar-teste/:id/materias" exact>
            <SubjectsPage />
          </Route>

          <Route path="/pesquisar-teste/:id/professores" exact>
            <ProfessorsPage />
          </Route>


          <Route path="/testes/professor/:id" exact>
            <TestById />
          </Route>

          <Route path="/testes/materia/:id" exact>
            <TestBySubjId />
          </Route>

        </Switch>
      </Grommet>
      </ProfessorContext.Provider>
    </BrowserRouter>
  );
}

export default App;
