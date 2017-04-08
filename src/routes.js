import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
// import DatePicker from './components/DatePicker';
import AboutPage from './components/AboutPage';
// import AppointmentList from './components/AppointmentList';
export default(
  <Route path='/' component={App}>
    {/* <Route path="datepicker" component={DatePicker}/> */}
    <Route path="about" component={AboutPage}/>
    {/* <Route path="appointment" component={AppointmentList}/> */}
  </Route>
)
