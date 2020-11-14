import React from 'react';
import PageMain from './Components/PageMain';
import  Formlogin from './Components/Login/Formlogin';
import {BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
function App() {
  return (
    <Router>
        <div className="wrapper">
            <Switch>
                <Route path="/"  component={PageMain} />
                <Route  path="/sign-up" exact component={Formlogin} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
