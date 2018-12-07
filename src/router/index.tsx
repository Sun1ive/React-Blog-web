import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import SignUpPage from '@/pages/SignUpPage';
import SignInPage from '@/pages/SignInPage';

const AppRouter = () => (
  <Router>
    <Route component={HomePage} exact />
    <Route component={SignUpPage} />
    <Route component={SignInPage} />
  </Router>
);

export default AppRouter;
