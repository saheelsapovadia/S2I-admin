import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from '../AdminPage/AdminPage';
const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={AdminPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Layout;
