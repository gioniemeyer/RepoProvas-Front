import '../styles/index.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { Grommet } from "grommet";
import { grommet } from 'grommet/themes';

import Homepage from './homepage/Homepage';
import SendTest from './internPages/SendTest';
import SearchCourse from './internPages/SearchCourse';
import Header from './general/Header';

function App() {
  return (
    <BrowserRouter>
      <Grommet theme={grommet}>
      <Header />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>

          <Route path="/enviar-teste" exact>
            <SendTest />
          </Route>

          <Route path="/pesquisar-teste" exact>
            <SearchCourse />
          </Route>

        </Switch>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
