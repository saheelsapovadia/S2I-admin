import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from '../AdminPage/AdminPage';
import PreviewPage from '../PreviewPage/PreviewPage';
const Layout = () => {
  let history = useHistory();
  const [event, setEvent] = useState({
    endDate: '2021-06-21',
    endTime: '12:00pm',
    host: 'Zoom',
    meetLink: '',
    privacy: 'Public',
    startDate: '2021-06-20',
    startTime: '11:00pm',
    title: 'Apple Worldwide Developer Conference',
    zone: 'EDT',
  });
  const adminpage = (props) => (
    <AdminPage {...props} event={event} setEvent={setEvent} />
  );
  const previewpage = (props) => (
    <PreviewPage {...props} event={event} setEvent={setEvent} />
  );
  console.log(event);
  return (
    <>
      <BrowserRouter history={history}>
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => adminpage(props)}
            // component={AdminPage}
          ></Route>
          <Route
            path='/eventpreview'
            exact
            render={(props) => previewpage(props)}
            //  component={PreviewPage}
          ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Layout;
