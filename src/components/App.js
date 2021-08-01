import '../styles/index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { Grommet } from "grommet";
import { grommet } from 'grommet/themes';

import Homepage from './homepage/Homepage';
import SendTest from './internPages/SendTest';
import SearchCourse from './internPages/SearchCourse';
import Header from './general/Header';
import ChooseCourse from './internPages/ChooseCourse';
import ProfessorContext from '../contexts/ProfessorsContext';
import { useState } from 'react';

function App() {

  const [professors, setProfessors] = useState([]);

  return (
    <BrowserRouter>
      <ProfessorContext.Provider value={{professors, setProfessors}}>
      <Grommet theme={grommet}>
      <Header />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/escolher-curso" exact>
            <ChooseCourse />
          </Route>

          <Route path="/enviar-teste/:id" exact>
            <SendTest />
          </Route>

          <Route path="/pesquisar-teste" exact>
            <SearchCourse />
          </Route>

        </Switch>
      </Grommet>
      </ProfessorContext.Provider>
    </BrowserRouter>
  );
}

export default App;
