import React from 'react';
import { useHistory } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from '../AdminPage/AdminPage';
import PreviewPage from '../PreviewPage/PreviewPage';
const Layout = () => {
  let history = useHistory();
  return (
    <>
      <BrowserRouter history={history}>
        <Switch>
          {/* <Route path='/' exact component={AdminPage}></Route> */}
          <Route path='/' exact component={PreviewPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Layout;
