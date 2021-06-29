import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPage from '../AdminPage/AdminPage';
import PreviewPage from '../PreviewPage/PreviewPage';
const Layout = () => {
  let history = useHistory();
  const [events, setEvents] = useState([
    {
      endDate: '2021-06-21',
      endTime: '12:00pm',
      host: 'Zoom',
      meetLink: '',
      privacy: 'Public',
      startDate: '2021-06-20',
      startTime: '11:00pm',
      title: 'Apple Worldwide Developer Conference',
      zone: 'EDT',
    },
  ]);
  const adminpage = (props) => (
    <AdminPage {...props} events={events} setEvents={setEvents} />
  );
  const previewpage = (props) => (
    <PreviewPage {...props} events={events} setEvents={setEvents} />
  );
  console.log(events);
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
            path='/eventpreview/:param1'
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
