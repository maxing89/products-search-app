import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AppContainer } from './AppStyle.jsx';
import Header from './components/shared/Header/Header';
import MainContainer from './components/MainContainer.jsx';

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={null} />
          <Route path="/items" component={MainContainer} />
        </Switch>
      </Router>
    </AppContainer>
  )
}

export default App;
