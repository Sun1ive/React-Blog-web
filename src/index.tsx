import * as React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { App } from './containers/App';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/Signin';
import { SignUp } from './pages/SignUp';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
