import React, { Fragment } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const App: React.SFC<any> = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);
